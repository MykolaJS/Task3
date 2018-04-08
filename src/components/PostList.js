import React, {Component} from 'react'
import PostListItem from './PostListItem'
import ButtonMore from './ButtonMore'
import Div from './DivStyle'

const API = "https://jsonplaceholder.typicode.com/";
const fetchData = entity =>
  fetch(API + entity).then(response => response.json());
  console.log(fetchData("posts"));


class PostList extends Component {
   constructor(props) {
      super(props)
      this.state = {
         isOpen: 100,
         posts : [],
         lengthPost: 10,
         none: '',
         isLoading: true
      }
    }

   componentDidMount() {
     Promise.all([fetchData("posts")]).then(
      ([posts]) => {
         this.setState({
           posts,
           isLoading: false
         });
      }
     );
   }

   render() {
      const { posts, isLoading } = this.state;
      const noneLength = this.state.none;
      const arrItem =  <ul>
         {this.state.posts.slice(0, this.state.lengthPost).map(el => <PostListItem
            key={el.id}
            title={el.title}
            body={el.body}
            userId={el.userId}
            id={el.id}
            />)}
      </ul>
      if(this.state.isLoading) {
         return (
            <Div>
               <div className="spinner">
                  <div className="dot1"></div>
                  <div className="dot2"></div>
               </div>
            </Div>
         )
      }
      return (
         <div className='container'>
            <h3 className='jumbotron display-4'>Apiko project</h3>
            <input className='form-control' type='text' placeholder="Search" onChange={this.handleChange}></input>
            <div style={{width: '70%', paddingTop:'20px'}} className='mx-auto' >
               {arrItem}
               {noneLength}
               <ButtonMore handleClick={this.handleClick}/>
            </div>
         </div>
      )
   }
   handleClick = () => {
         this.setState({
            lengthPost: this.state.lengthPost + 10
         })
   }

   handleChange = (event) => {
      const searchItem = event.target.value.toLowerCase();
      Promise.all([fetchData("posts")]).then(
       ([posts]) => {
          const findData = posts.filter(el => {
            const searchValue = el.title.toLowerCase();
            console.log(searchValue);
            console.log(searchValue.indexOf(searchItem));
            return searchValue.indexOf(searchItem) !== -1;
          });
             this.setState({
                posts: findData,
                none: (this.state.posts.length === 0) && <h3>No items found</h3>
             })
          });
   }

}





export default PostList
