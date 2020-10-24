const yaml = require('js-yaml');
const fs = require('fs');
var object = require('./site.json');
let config = {};
try {
    config = yaml.safeLoad(fs.readFileSync('test.yml', 'utf8'));
    console.log(JSON.stringify(config, null, 4));
} catch (e) {
    console.log(e);
}

function DumpToYaml( json ) {
    console.log(yaml.dump(json, {
        flowLevel: 10,
        styles: {
          '!!null' : 'camelcase'
        }
      }));
}

function DumpToText( json, sb ) {
    if (Array.isArray(json)) {
        console.log('is array')
        for (var i=0; i<json.length; i++) {
           DumpToText(json[i], sb);
        };
    } else if (json.bam) {
        sb.push('');
        sb.push('--- Messaggio ----------------------------------------');
        sb.push('');
        sb.push('Bambino');
        sb.push('- ' + json.bam.titolo);
        if (json.bam.items) {
            var items = json.bam.items; 
            for (var i=0; i<items.length; i++) {
                sb.push(items[i]);
                checkEOL(items[i]);
            };
        }
        sb.push('');
        sb.push('Pediatra');
        sb.push('- ' + json.ped.titolo);
        if (json.ped.items) {
            var items = json.ped.items; 
            for (var i=0; i<items.length; i++) {
                sb.push(items[i]);
                checkEOL(items[i]);
            };
        }
        if (json.images) {
            var items = json.images;
            sb.push('');
            sb.push("Immagini");
            for (var i=0; i<items.length; i++) {
                sb.push(items[i].src + ', ' + items[i].titolo);
            };
        }
        if (json.tags) {
            sb.push('');
            sb.push('Tags');
            sb.push(json.tags);
        }
    }
    else {
        if ( typeof json === 'object' && json !== null){
           console.log('is object')
           var items = Object.keys(json);
           for (var i=0; i<items.length; i++) {
               DumpToText(json[items[i]], sb);
           }
        }
    }
}

function checkEOL(line) {
    var l = line.trim();
    if (['.', '!', '?'].indexOf(l[l.length-1]) < 0){
        console.log ("no eol: " + line);
    }
}
var sb = [];
DumpToText(object, sb);
// console.log(sb.join('\n'))
fs.writeFileSync("guide-anticipatorie.txt", sb.join('\n'))

function lexText(text) {
    var l = text.length;
    var lines = [],
        row = 1;
    var curLine = [];
    var eol = false;
    for (var i=0; i<l; i++) {
        var ch = text[i];
        if (ch === '\n' || eol) {
            lines.push({ row: row, text: curLine.join('')});
            curLine = [];
            row++;
            eol = false;
        }
        else if (ch === '\r') {
            eol = true;
        } else {
            curLine.push(ch);
        }
    }
    if (curLine.length > 0) {
        lines.push({ row: row, text: curLine.join('')});
    }
    return lines;
}
function parseText(text) {
    var lines = lexText(text);
    var status = 'none';
    var messages = [];
    var errors = [];
    var curMessage = null;
    for (var i=0; i<lines.length; i++) {
        var l = lines[i].text.trim();
        var row = lines[i].row;
        if (l.length == 0) { continue; }
        if (l.substr(0, 3).toLowerCase() === '---' && l.toLowerCase().indexOf("messaggio") >-1) {
            checkMessage(curMessage, errors);
            curMessage = { row: row, bam: {}, ped: {}};
            messages.push(curMessage);
            status = "waitbam";
        } else if (l.substr(0, 7).toLowerCase() === 'bambino') {
            status = "waitphrasebam";
        } else if (l.substr(0, 8).toLowerCase() === 'pediatra') {
            status = "waitphraseped";
        } else if (l.substr(0, 8).toLowerCase() === 'immagini') {
            status = "waitimage";
        } else if (l.substr(0, 4).toLowerCase() === 'tags') {
            status = "waittags";
        } else if (l.substr(0, 1).toLowerCase() === '|') {
        } else {
            if (status === 'waittags') {
                curMessage.tags = l;
            } else if (status === 'waitphrasebam' && l.substr(0,1) === '-') {
                if (curMessage.bam.titolo) {
                    errors.push({
                        row: row,
                        message: "Il bambino ha più di un tweet per questo messaggio."
                    });
                } else {
                    curMessage.bam.titolo = l.substr(1).trim();
                }
            } else if (status === 'waitphrasebam' && l.substr(0,1) !== '-') {
                if (!curMessage.bam.items) { curMessage.bam.items = []}
                curMessage.bam.items.push(l);
            } else if (status === 'waitphraseped' && l.substr(0,1) === '-') {
                if (curMessage.ped.titolo) {
                    errors.push({
                        row: row,
                        message: "Il pediatra ha più di un tweet per questo messaggio."
                    });
                } else {
                    curMessage.ped.titolo = l.substr(1).trim();
                }
            } else if (status === 'waitphraseped' && l.substr(0,1) !== '-') {
                if (!curMessage.ped.items) { curMessage.ped.items = []}
                curMessage.ped.items.push(l);
            } else if (status === 'waitimage') {
                if (!curMessage.images) { curMessage.images = []}
                var ss = l.split(',')
                if (ss.length < 2) {
                    errors.push({
                        row: row,
                        message: "Una immagine deve avere sia nome che titolo separati da virgola."
                    });
                } else {
                    curMessage.images.push({
                        src: ss[0],
                        titolo: ss.slice(1).join(','),
                    });
                }
            }
        }
    }
    checkMessage(curMessage, errors);
    return [messages, errors];
}

function checkMessage(message, errors) {
    if (message) {
        if (!message.bam.titolo) {
            errors.push({
                row: message.row,
                message: "Il bambino non ha il tweet per questo messaggio. E' obbligatorio."
            });
        }
        if (!message.ped.titolo) {
            errors.push({
                row: message.row,
                message: "Il pediatra non ha il tweet per questo messaggio. E' obbligatorio."
            });
        }
    }
}

var parsed = parseText(sb.join('\n'));
console.log(JSON.stringify(parsed, null, 4));

parsed = parseText(fs.readFileSync('messaggi.txt', 'utf8'));
console.log(JSON.stringify(parsed[0], null, 4));
console.log("errors", JSON.stringify(parsed[1], null, 4));