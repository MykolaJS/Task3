import React, {Component} from 'react'
import PostList from './PostList'


class PostListItem extends Component  {
   render() {
      return (
         <li>
            <div>{this.props.userId}</div>
            <div>{this.props.id}</div>
            <div>{this.props.title}</div>
            <div>{this.props.body}</div>
         </li>
      )
   }
}

export default PostListItem
