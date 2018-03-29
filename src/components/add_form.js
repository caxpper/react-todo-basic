import React, {Component} from 'react';

class AddForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            details: ''
        }
    }

    handleAddItem(e){
        e.preventDefault();        
        this.props.add(this.state);
        this.setState({
            title: '',
            details: ''
        });
    }

    render(){

        const {title, details} = this.state; 

        return (
            <form className='row' onSubmit={this.handleAddItem.bind(this)}>
                <div className='col s6'>
                    <label>Title</label>
                    <input type="text" value={title} onChange={e => this.setState({title: e.target.value})}/>
                </div>
                <div className='col s6'>
                    <label>Details</label>
                    <input type="text" value={details} onChange={e => this.setState({details: e.target.value})}/>
                </div>
                <div className='center'>
                    <button className='btn blue darken-3'>Add Item</button>
                </div>
            </form>
        )
    }
}

export default AddForm;