import React, { Component } from 'react'

/* 
rentorna uma grid, por exemplo:
antes -> <div className='col-xs-12 col-sm-9 col-md-10'>
agora -> <Grid cols='12 9 10'>.
*/

export default class Grid extends Component {
    toCssClass(numbers) {
        const cols = numbers ? numbers.split(' ') : [] // split de cols - <Grid cols='12 9 10'>
        let classes = ''

        if (cols[0]) classes += `col-xs-${cols[0]}`
        if (cols[1]) classes += ` col-sm-${cols[1]}`
        if (cols[2]) classes += ` col-md-${cols[2]}`
        if (cols[3]) classes += ` col-lg-${cols[3]}`

        return classes
    }


    render() {
        const gridClasses = this.toCssClass(this.props.cols || 12) // toCssClass retorna 'col-xs-12 col-sm-9 col-md-10'
        return (
            <div className={gridClasses}> {/* gridClasses é col-xs-12 col-sm-9 col-md-10 */}
                {this.props.children}
            </div>
        )
    }
}