import React, {Component} from 'react'
import data from '../data'


class ButtonMore extends Component {
   render() {
         return(
            <button style={{float:'right'}} className='btn btn-primary btn-lg' onClick={this.props.handleClick}>More</button>
         )
      }

}



export default ButtonMore
