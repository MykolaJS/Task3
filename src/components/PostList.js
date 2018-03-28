import React, {Component} from 'react'
import PostListItem from './PostListItem'
import ButtonMore from './ButtonMore'
import data from '../data'


class PostList extends Component {
         state = {
            isOpen: 100,
            displayedData: data,
            none: ''
         }

   render() {
      data.length = this.state.isOpen
      const arr =  <ul>
         {this.state.displayedData.map(el => <PostListItem
            key={el.id}
            title={el.title}
            body={el.body}
            userId={el.userId}
            id={el.id}
            />)}
      </ul>
      const noneLength = this.state.none;
      return (
         <div className='container'>
            <h3 className='jumbotron display-4'>Apiko project</h3>
            <input className='form-control' type='text' placeholder="Search" onChange={this.handleChange}></input>
            <div style={{width: '70%', paddingTop:'20px'}} className='mx-auto' >
               {arr}
               {noneLength}
               <ButtonMore handleClick={this.handleClick}/>
            </div>
         </div>
      )
   }

   handleClick = () => {
      console.log(data)
      this.setState({
         isOpen: this.state.isOpen - 10
       });
   }

   handleChange = (e) => {
      const searchItem = e.target.value.toLowerCase();
      const findData = data.filter(el => {
         const searchValue = el.title.toLowerCase();
         console.log(searchValue.indexOf(searchItem) !== -1);
         return searchValue.indexOf(searchItem) !== -1
      })

      this.setState({
         displayedData: findData,
         none: (findData.length === 0) && <h3>No items found</h3>
      })
   }
}


export default PostList
