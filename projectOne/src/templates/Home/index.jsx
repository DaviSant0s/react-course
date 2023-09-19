import { Component } from 'react';

import './styles.css';

import { loadPosts } from '../../components/utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import TextInput from '../../components/TextInput';



export class Home extends Component{
    state = { 
      posts: [],
      allPosts: [],
      page: 0, 
      postsPerPages: 2,
      searchValue: ''
    };

    async componentDidMount(){
      await this.loadPosts();
    }

    loadPosts = async () => {
      const { page, postsPerPages} = this.state;

      const postsAndPhotos = await loadPosts();

      this.setState({ 
        posts: postsAndPhotos.slice(page, postsPerPages),
        allPosts: postsAndPhotos
      })
    } 

    loadMorePosts = () => {
      const {page, postsPerPages, allPosts, posts} = this.state;

      const nextPage = page + postsPerPages;
      const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPages);

      posts.push(...nextPosts);

      this.setState({posts, page: nextPage});

    } 

    handleChange = (e) => {
      const { value } = e.target;
      this.setState({searchValue: value});
    }

  render() {

    const { posts, page, postsPerPages, allPosts, searchValue} = this.state;
    const noMorePosts = page + postsPerPages >= allPosts.length;

    const filteredPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts;

    return (

      <section className='container'>

        <div className='search-container'>
        {!!searchValue && (
          <h1>Search Value: {searchValue}</h1>
        )}


        <TextInput handleChange={this.handleChange} searchValue={searchValue}/>

        </div>

        {filteredPosts.length > 0 && (
          <Posts posts = {filteredPosts}/>
        )}

        {filteredPosts.length === 0 && (
          <p>Não há posts</p>
        )}

        <div className='button-container'>
          {!searchValue && (
            <Button 
            text={'Load More Posts'}
            onClick = {this.loadMorePosts}
            disabled={noMorePosts}
          />
          )}
          
        </div>
        
      </section>
    );
  
  }
}
