import React, {Component} from 'react'
import PostList from './PostList'


class PostListItem extends Component  {
   render() {
      return (
         <li className='card' stype={{margin: '10px'}}>
            <div className='card-header'>
               <div>{this.props.userId}</div>
               <div>{this.props.id}</div>
            </div>
            <div className='card-body'>
               <div className='card-title'>{this.props.title}</div>
               <div className=''>{this.props.body}</div>
            </div>
         </li>
      )
   }
}

export default PostListItem
