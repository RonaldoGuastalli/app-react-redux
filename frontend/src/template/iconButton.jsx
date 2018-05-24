import React from 'react'

/* 
substituir 
<button className='btn btn-primary'>
    <i className='fa fa-plus'></i>
</button> 
por 
<IconButton style='primary' icon='plus'></IconButton> 
*/

export default props => {
    if (props.hide) {
        return null
    } else {
        return (
            <button className={'btn btn-' + props.style} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
            </button>
        )
    }
}