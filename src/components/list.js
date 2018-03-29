import React from 'react';
import ListItem from './list_item';

export default props => {

    const listElements = props.listData.map(function(item, index){
        return <ListItem key={index} item={item} del={()=>props.delete(index)} />
    });
    return (
        <ul className='collection'>
            {listElements}
        </ul>
    );
}
