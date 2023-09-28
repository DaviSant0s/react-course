import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

const Post = ( { post, handleClick } ) => {
  console.log('Filho renderizou');
  return(
    <div key={post.id}>
      <h1 
        style={ {fontSize: '20px'} }
        onClick={() => handleClick(post.title)}
      >
        {post.title}
      </h1>

      <p>{post.body}</p>
    </div>

  );
}

function App() {
  console.log('Pai renderizou!');
  const [ posts, setPosts ] = useState([]);
  const [ value, setValue ] = useState('');
  const input = useRef('davi');
  const contador = useRef(0);

  // simular um component did mount
  useEffect(() => {
    const buscaDados = async () => {
      
      const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await resposta.json();
      setPosts(posts);
    };

    buscaDados();


  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input);

  }, [ value ]);

  const handleClick = (value) => {
    setValue(value);
  }

  useEffect(() => {
    contador.current += 1;
  })

  return (
    <div className='App'>

      <p>Renderizou {contador.current}x </p>

      <p>
        <input
          ref={input}
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
                <Post key={post.id} post={post} handleClick={handleClick}/>
              );
          
            })

        );


      }, [posts])}

     

      {posts.length <= 0 && (<p>'Ainda não existem posts'</p>)}

    </div>
  );  
}

export default App; 


