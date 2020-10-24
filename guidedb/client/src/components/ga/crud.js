/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\client\src\components\ga\crud.js.ittf
*/
'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { gaApis } from '../../features/ga';
export class GAImageCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Caption: '', 
            Source: ''
        };
    }
    onChange = (name) => {
        return (e) =>
                this.setState({
                    [name]: e.target.value
                });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            Caption: this.state.Caption, 
            Source: this.state.Source
        };
        gaApis.createGAImage(obj).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
            alert("Api error: " + err.message);
        })
        this.setState({
            Caption: '', 
            Source: ''
        });
    }
    onCancel = () => {
        this.props.history.push('/index');
    }
    render() {
        return  (
                <div>
                    <h3 align="center">
                    Add New GAImage</h3>
                
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>
                            Caption:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Caption} onChange={this.onChange('Caption')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            Source:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Source} onChange={this.onChange('Source')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <input type="submit" value="Create" className="btn btn-primary">
                            </input>
                        
                            <button onClick={this.onCancel} className="btn">
                            Cancel</button>
                        
                        </div>
                    
                    </form>
                
                </div>
            )
        ;
    }
}
export class GAImageEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Caption: '', 
            Source: ''
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        gaApis.getGAImage(id).then((response) =>
            this.setState({
                Caption: response.GAImage.Caption, 
                Source: response.GAImage.Source
            })).catch((err) => {
            console.log(err);
            alert("Api error: " + err.message);
        })
        
    }
    onChange = (name) => {
        return (e) =>
                this.setState({
                    [name]: e.target.value
                });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const obj = {
            Caption: this.state.Caption, 
            Source: this.state.Source
        };
        gaApis.updateGAImage(id, obj).then((res) => {
            console.log(res);
            this.props.history.push('/index');
        }).catch((err) => {
            console.log(err);
            alert("Api error: " + err.message);
        })
    }
    onCancel = () => {
        this.props.history.push('/index');
    }
    render() {
        return  (
                <div>
                    <h3 align="center">
                    Update GAImage</h3>
                
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>
                            Caption:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Caption} onChange={this.onChange('Caption')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            Source:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Source} onChange={this.onChange('Source')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <input type="submit" value="Update" className="btn btn-primary">
                            </input>
                        
                            <button onClick={this.onCancel} className="btn">
                            Cancel</button>
                        
                        </div>
                    
                    </form>
                
                </div>
            )
        ;
    }
}
export class GAImageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GAImages: []
        };
    }
    componentDidMount() {
        gaApis.getGAImageList().then((response) =>
            this.setState({
                GAImages: response.GAImages
            })).catch((err) => {
            console.log(err);
            alert("Api error: " + err.message);
        })
    }
    delete = (id) => {
        gaApis.deleteGAImage(id).then(() => {
            console.log('Deleted');
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return  (
                <div>
                    <h3 align="center">
                    GAImage List</h3>
                
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>
                                Caption</th>
                            
                                <th>
                                Source</th>
                            
                                <th colSpan="2">
                                Action</th>
                            
                            </tr>
                        
                        </thead>
                    
                        <tbody>
                        {
                            this.state.GAImages.map((obj, i) => {
                                return  (
                                        <tr key={i}>
                                            <td>
                                            {obj.Caption}</td>
                                        
                                            <td>
                                            {obj.Source}</td>
                                        
                                            <td>
                                                <Link to={"/edit/" + obj._id} className="btn btn-primary">
                                                Edit</Link>
                                            
                                            </td>
                                        
                                            <td>
                                                <button onClick={()=>this.delete(obj._id)} className="btn btn-danger">
                                                Delete</button>
                                            
                                            </td>
                                        
                                        </tr>
                                    )
                                ;
                            })
                        }</tbody>
                    
                    </table>
                
                </div>
            )
        ;
    }
}
export class GASectionCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Number: '', 
            Title: '', 
            WeeksOfLife: ''
        };
    }
    onChange = (name) => {
        return (e) =>
                this.setState({
                    [name]: e.target.value
                });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            Number: this.state.Number, 
            Title: this.state.Title, 
            WeeksOfLife: this.state.WeeksOfLife
        };
        gaApis.createGASection(obj).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
            alert("Api error: " + err.message);
        })
        this.setState({
            Number: '', 
            Title: '', 
            WeeksOfLife: ''
        });
    }
    onCancel = () => {
        this.props.history.push('/index');
    }
    render() {
        return  (
                <div>
                    <h3 align="center">
                    Add New GASection</h3>
                
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>
                            Number:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Number} onChange={this.onChange('Number')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            Title:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Title} onChange={this.onChange('Title')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            WeeksOfLife:  </label>
                        
                            <input type="text" className="form-control" value={this.state.WeeksOfLife} onChange={this.onChange('WeeksOfLife')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <input type="submit" value="Create" className="btn btn-primary">
                            </input>
                        
                            <button onClick={this.onCancel} className="btn">
                            Cancel</button>
                        
                        </div>
                    
                    </form>
                
                </div>
            )
        ;
    }
}
export class GASectionEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Number: '', 
            Title: '', 
            WeeksOfLife: ''
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        gaApis.getGASection(id).then((response) =>
            this.setState({
                Number: response.GASection.Number, 
                Title: response.GASection.Title, 
                WeeksOfLife: response.GASection.WeeksOfLife
            })).catch((err) => {
            console.log(err);
            alert("Api error: " + err.message);
        })
        
    }
    onChange = (name) => {
        return (e) =>
                this.setState({
                    [name]: e.target.value
                });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const obj = {
            Number: this.state.Number, 
            Title: this.state.Title, 
            WeeksOfLife: this.state.WeeksOfLife
        };
        gaApis.updateGASection(id, obj).then((res) => {
            console.log(res);
            this.props.history.push('/index');
        }).catch((err) => {
            console.log(err);
            alert("Api error: " + err.message);
        })
    }
    onCancel = () => {
        this.props.history.push('/index');
    }
    render() {
        return  (
                <div>
                    <h3 align="center">
                    Update GASection</h3>
                
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>
                            Number:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Number} onChange={this.onChange('Number')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            Title:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Title} onChange={this.onChange('Title')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            WeeksOfLife:  </label>
                        
                            <input type="text" className="form-control" value={this.state.WeeksOfLife} onChange={this.onChange('WeeksOfLife')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <input type="submit" value="Update" className="btn btn-primary">
                            </input>
                        
                            <button onClick={this.onCancel} className="btn">
                            Cancel</button>
                        
                        </div>
                    
                    </form>
                
                </div>
            )
        ;
    }
}
export class GASectionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GASections: []
        };
    }
    componentDidMount() {
        gaApis.getGASectionList().then((response) =>
            this.setState({
                GASections: response.GASections
            })).catch((err) => {
            console.log(err);
            alert("Api error: " + err.message);
        })
    }
    delete = (id) => {
        gaApis.deleteGASection(id).then(() => {
            console.log('Deleted');
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return  (
                <div>
                    <h3 align="center">
                    GASection List</h3>
                
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>
                                Number</th>
                            
                                <th>
                                Title</th>
                            
                                <th>
                                WeeksOfLife</th>
                            
                                <th colSpan="2">
                                Action</th>
                            
                            </tr>
                        
                        </thead>
                    
                        <tbody>
                        {
                            this.state.GASections.map((obj, i) => {
                                return  (
                                        <tr key={i}>
                                            <td>
                                            {obj.Number}</td>
                                        
                                            <td>
                                            {obj.Title}</td>
                                        
                                            <td>
                                            {obj.WeeksOfLife}</td>
                                        
                                            <td>
                                                <Link to={"/edit/" + obj._id} className="btn btn-primary">
                                                Edit</Link>
                                            
                                            </td>
                                        
                                            <td>
                                                <button onClick={()=>this.delete(obj._id)} className="btn btn-danger">
                                                Delete</button>
                                            
                                            </td>
                                        
                                        </tr>
                                    )
                                ;
                            })
                        }</tbody>
                    
                    </table>
                
                </div>
            )
        ;
    }
}
export class GAMessageCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Number: '', 
            ChildTweet: '', 
            ChildPhrases: '', 
            PediatricianTweet: '', 
            PediatricianPhrases: '', 
            Images: '', 
            Tags: ''
        };
    }
    onChange = (name) => {
        return (e) =>
                this.setState({
                    [name]: e.target.value
                });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            Number: this.state.Number, 
            ChildTweet: this.state.ChildTweet, 
            ChildPhrases: this.state.ChildPhrases, 
            PediatricianTweet: this.state.PediatricianTweet, 
            PediatricianPhrases: this.state.PediatricianPhrases, 
            Images: this.state.Images, 
            Tags: this.state.Tags
        };
        gaApis.createGAMessage(obj).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
            alert("Api error: " + err.message);
        })
        this.setState({
            Number: '', 
            ChildTweet: '', 
            ChildPhrases: '', 
            PediatricianTweet: '', 
            PediatricianPhrases: '', 
            Images: '', 
            Tags: ''
        });
    }
    onCancel = () => {
        this.props.history.push('/index');
    }
    render() {
        return  (
                <div>
                    <h3 align="center">
                    Add New GAMessage</h3>
                
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>
                            Number:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Number} onChange={this.onChange('Number')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            ChildTweet:  </label>
                        
                            <input type="text" className="form-control" value={this.state.ChildTweet} onChange={this.onChange('ChildTweet')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            ChildPhrases:  </label>
                        
                            <input type="text" className="form-control" value={this.state.ChildPhrases} onChange={this.onChange('ChildPhrases')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            PediatricianTweet:  </label>
                        
                            <input type="text" className="form-control" value={this.state.PediatricianTweet} onChange={this.onChange('PediatricianTweet')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            PediatricianPhrases:  </label>
                        
                            <input type="text" className="form-control" value={this.state.PediatricianPhrases} onChange={this.onChange('PediatricianPhrases')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            Images:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Images} onChange={this.onChange('Images')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            Tags:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Tags} onChange={this.onChange('Tags')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <input type="submit" value="Create" className="btn btn-primary">
                            </input>
                        
                            <button onClick={this.onCancel} className="btn">
                            Cancel</button>
                        
                        </div>
                    
                    </form>
                
                </div>
            )
        ;
    }
}
export class GAMessageEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Number: '', 
            ChildTweet: '', 
            ChildPhrases: '', 
            PediatricianTweet: '', 
            PediatricianPhrases: '', 
            Images: '', 
            Tags: ''
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        gaApis.getGAMessage(id).then((response) =>
            this.setState({
                Number: response.GAMessage.Number, 
                ChildTweet: response.GAMessage.ChildTweet, 
                ChildPhrases: response.GAMessage.ChildPhrases, 
                PediatricianTweet: response.GAMessage.PediatricianTweet, 
                PediatricianPhrases: response.GAMessage.PediatricianPhrases, 
                Images: response.GAMessage.Images, 
                Tags: response.GAMessage.Tags
            })).catch((err) => {
            console.log(err);
            alert("Api error: " + err.message);
        })
        
    }
    onChange = (name) => {
        return (e) =>
                this.setState({
                    [name]: e.target.value
                });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const obj = {
            Number: this.state.Number, 
            ChildTweet: this.state.ChildTweet, 
            ChildPhrases: this.state.ChildPhrases, 
            PediatricianTweet: this.state.PediatricianTweet, 
            PediatricianPhrases: this.state.PediatricianPhrases, 
            Images: this.state.Images, 
            Tags: this.state.Tags
        };
        gaApis.updateGAMessage(id, obj).then((res) => {
            console.log(res);
            this.props.history.push('/index');
        }).catch((err) => {
            console.log(err);
            alert("Api error: " + err.message);
        })
    }
    onCancel = () => {
        this.props.history.push('/index');
    }
    render() {
        return  (
                <div>
                    <h3 align="center">
                    Update GAMessage</h3>
                
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>
                            Number:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Number} onChange={this.onChange('Number')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            ChildTweet:  </label>
                        
                            <input type="text" className="form-control" value={this.state.ChildTweet} onChange={this.onChange('ChildTweet')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            ChildPhrases:  </label>
                        
                            <input type="text" className="form-control" value={this.state.ChildPhrases} onChange={this.onChange('ChildPhrases')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            PediatricianTweet:  </label>
                        
                            <input type="text" className="form-control" value={this.state.PediatricianTweet} onChange={this.onChange('PediatricianTweet')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            PediatricianPhrases:  </label>
                        
                            <input type="text" className="form-control" value={this.state.PediatricianPhrases} onChange={this.onChange('PediatricianPhrases')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            Images:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Images} onChange={this.onChange('Images')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <label>
                            Tags:  </label>
                        
                            <input type="text" className="form-control" value={this.state.Tags} onChange={this.onChange('Tags')}>
                            </input>
                        
                        </div>
                    
                        <div className="form-group">
                            <input type="submit" value="Update" className="btn btn-primary">
                            </input>
                        
                            <button onClick={this.onCancel} className="btn">
                            Cancel</button>
                        
                        </div>
                    
                    </form>
                
                </div>
            )
        ;
    }
}
export class GAMessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GAMessages: []
        };
    }
    componentDidMount() {
        gaApis.getGAMessageList().then((response) =>
            this.setState({
                GAMessages: response.GAMessages
            })).catch((err) => {
            console.log(err);
            alert("Api error: " + err.message);
        })
    }
    delete = (id) => {
        gaApis.deleteGAMessage(id).then(() => {
            console.log('Deleted');
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return  (
                <div>
                    <h3 align="center">
                    GAMessage List</h3>
                
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>
                                Number</th>
                            
                                <th>
                                ChildTweet</th>
                            
                                <th>
                                ChildPhrases</th>
                            
                                <th>
                                PediatricianTweet</th>
                            
                                <th>
                                PediatricianPhrases</th>
                            
                                <th>
                                Images</th>
                            
                                <th>
                                Tags</th>
                            
                                <th colSpan="2">
                                Action</th>
                            
                            </tr>
                        
                        </thead>
                    
                        <tbody>
                        {
                            this.state.GAMessages.map((obj, i) => {
                                return  (
                                        <tr key={i}>
                                            <td>
                                            {obj.Number}</td>
                                        
                                            <td>
                                            {obj.ChildTweet}</td>
                                        
                                            <td>
                                            {obj.ChildPhrases}</td>
                                        
                                            <td>
                                            {obj.PediatricianTweet}</td>
                                        
                                            <td>
                                            {obj.PediatricianPhrases}</td>
                                        
                                            <td>
                                            {obj.Images}</td>
                                        
                                            <td>
                                            {obj.Tags}</td>
                                        
                                            <td>
                                                <Link to={"/edit/" + obj._id} className="btn btn-primary">
                                                Edit</Link>
                                            
                                            </td>
                                        
                                            <td>
                                                <button onClick={()=>this.delete(obj._id)} className="btn btn-danger">
                                                Delete</button>
                                            
                                            </td>
                                        
                                        </tr>
                                    )
                                ;
                            })
                        }</tbody>
                    
                    </table>
                
                </div>
            )
        ;
    }
}
