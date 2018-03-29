import React from 'react';

export default props => {

    const listElements = props.listData.map(function(item, index){
        return <li key={index} className='collection-item'>{item.title}</li>  
    });
    return (
        <ul className='collection'>
            {listElements}
        </ul>
    );
}
