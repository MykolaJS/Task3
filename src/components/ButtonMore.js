import React, {Component} from 'react'
import data from '../data'
console.log(data);

class ButtonMore extends Component {
   render() {
         return(
            <button style={{float:'right'}} className='btn btn-primary btn-lg' onClick={this.props.handleClick}>More</button>
         )
      }
      handleClick = () => {
         this.setState({
            isOpen: this.state.isOpen + 10
         });
      }
   }




export default ButtonMore
