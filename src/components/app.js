import React, {Component} from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import listData from '../data/todo_items';
import List from './list';
import AddForm from './add_form';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=alejandro';

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            list: []
        }
    }

    componentDidMount(){
        this.getList();
    }

    getList(){
        axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
            console.log('working',resp);
            this.setState({
                list: resp.data.todos
            });
        });
    }

    addItem(item){

        axios.post(`${BASE_URL}/todos${API_KEY}`,item).then(resp => {
            console.log('Add response:', resp);

            this.getList();
        });        
    }

    getOneItem(){
        //axios.get
        //url: http://api.reactprototypes.com/todos/[item id]?key=[your key]
    }

    toggleComplete(){
        //axios.put
        //url: http://api.reactprototypes.com/todos/[item id]?key=[your key]
    }

    deleteItem(index){
        //axios.delete
        //url: http://api.reactprototypes.com/todos/[item id]?key=[your key]
        const newList = [...this.state.list];
        newList.splice(index,1);
        this.setState({
            list: newList
        });
    }

    render(){
        return (
            <div className='container'>
                <h1 className='center'>To Do List</h1>
                <AddForm add={this.addItem.bind(this)} />
                <List listData={this.state.list} delete={this.deleteItem.bind(this)} />
            </div>
        )
    }
}

export default App;
