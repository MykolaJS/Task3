import React, {Component} from 'react'
import data from '../data'
console.log(data);

class ButtonMore extends Component {
   render() {
      console.log(this.props);
         return(
            <button onClick={this.props.handleClick}>More</button>
         )
      }
   }




export default ButtonMore
