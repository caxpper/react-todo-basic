import React, {Component} from 'react';

class ListItem extends Component{

    constructor(props){
        super(props);

        this.state = {
            showDetails: false
        }
    }

    toggleShow(){
        this.setState({
            showDetails: !this.state.showDetails
        });
    }

    renderDetails(){
        if(this.state.showDetails){
            return (
                <ul className='collection'>
                    <li className='collection-item'>{this.props.item.details}</li>
                </ul>
            );
        }
        return null;
    }

    render(){

        const {item, index, del} = this.props;

       return ( <li className='collection-item row' onClick={this.toggleShow.bind(this)}>
            <div className="col s8">
                {item.title} 
                {this.renderDetails()}             
            </div>
            <div className="col s4 right-align">       
                <button className='btn red darken-3' onClick={del}>delete</button> 
            </div>
    </li>  )
    }
}

export default ListItem;