import { Component } from 'react';

import './styles.css';

import { loadPosts } from '../../components/utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';



export class Home extends Component{
    state = { 
      posts: [],
      allPosts: [],
      page: 0, 
      postsPerPages: 2
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

    /* loadMorePosts = () => {
      const {page, postsPerPages, allPosts, posts} = this.state;

      const nextPage = page + postsPerPages;
      console.log(posts);

      this.setState({
        posts: allPosts.slice(page, nextPage),
        postsPerPages: postsPerPages + 2
        
      })
    }  */


  render() {

    const { posts, page, postsPerPages, allPosts} = this.state;
    const noMorePosts = page + postsPerPages >= allPosts.length;

    return (
      <section className='container'>
        <Posts posts = {posts}/>
        <div className='button-container'>
          <Button 
          text={'Load More Posts'}
          onClick = {this.loadMorePosts}
          disabled={noMorePosts}
        />
        </div>
        
      </section>
    );
  
  }
}
