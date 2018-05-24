import React from 'react'

import If from './if'

/* 
substituir 
<button className='btn btn-primary'>
    <i className='fa fa-plus'></i>
</button> 
por 
<IconButton style='primary' icon='plus'></IconButton> 
*/

export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-' + props.style} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>
)