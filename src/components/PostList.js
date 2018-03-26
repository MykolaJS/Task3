import React, {Component} from 'react'
import PostListItem from './PostListItem'
import ButtonMore from './ButtonMore'
import data from '../data'


class PostList extends Component {
   state = {
      isOpen : 10
   }

   render() {
      data.length = this.state.isOpen
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
     this.setState({
         isOpen: this.state.isOpen + 10 // Чому чей варіан не парацює? додає постоту =) 
     })
   }
}


export default PostList
