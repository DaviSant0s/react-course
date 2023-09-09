import './styles.css';

export const PostCard = ({title, cover, body, id}) => {

    return (
      <div className='post'>
        <img src={cover} alt={title}></img>

        <div key={id} className='post-content'>

          <h2>{title} {id}</h2>
          <p>{body}</p>
          
        </div>

      </div>
    )
}

