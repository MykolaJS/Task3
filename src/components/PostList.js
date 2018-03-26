import React, {Component} from 'react'
import PostListItem from './PostListItem'
import ButtonMore from './ButtonMore'
import data from '../data'


class PostList extends Component {
   state = {
      isOpen : data.length
   }

   render() {
      console.log(data)
      const arr = this.state.isOpen && <ul>
         {data.map(el => <PostListItem
            key={el.id}
            title={el.title}
            body={el.body}
            userId={el.userId}
            id={el.id}
            />)}
      </ul>
      return (
         <div>
            {arr}
            <ButtonMore handleClick={this.handleClick}>
            </ButtonMore>
         </div>
      )
   }

   handleClick = () => {
      let arr = data;
      console.log(arr);
   }
}


export default PostList
