import { useEffect, useMemo, useState } from 'react';
import './App.css';

const Post = ( { post } ) => {
  console.log('Filho renderizou');
  return(
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>

  );
}

function App() {
  console.log('Pai renderizou!');
  const [ posts, setPosts ] = useState([]);
  const [ value, setValue ] = useState('');

  // simular um component did mount
  useEffect(() => {
    const buscaDados = async () => {
      
      const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await resposta.json();
      setPosts(posts);
    };

    setTimeout(buscaDados, 5000);


  }, []);

  return (
    <div className='App'>

      <p>
        <input
          type='search'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        
      </p>
      

      {useMemo(() => {
        return(
          
          posts.length > 0 &&
            posts.map( post => {
              return(
                <Post key={post.id} post={post} />
              );
          
            })

        );


      }, [posts])}

     

      {posts.length <= 0 && (<p>'Ainda não existem posts'</p>)}

    </div>
  );  
}

export default App; 


