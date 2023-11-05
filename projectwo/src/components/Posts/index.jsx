import { loadPosts } from '../../contexts/PostsProvider/actions';
import { useContext, useEffect, useRef } from "react";
import { PostsContext } from "../../contexts/PostsProvider/context";

export const Posts = () => {
    const isMounted = useRef(true);
    const postsContext = useContext(PostsContext);
    const {postsState, postsDispatch} = postsContext;

    console.log(isMounted.current)

    useEffect(() => {
        loadPosts(postsDispatch)
        .then((dispatch) => {
            if (isMounted.current){
                dispatch();
            }  
        });

        return () => {
            isMounted.current = false;
        };

    }, [postsDispatch]);
    
    return (
        <div>
            <h1>POSTS</h1>
            {postsState.loading && (<p><strong>Carregando posts</strong></p>)}

            {postsState.posts.map(post => <p key={post.id}>{post.title}</p>)}
        </div>
    );
}