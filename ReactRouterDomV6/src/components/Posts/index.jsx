import './style.css';
import { useParams, useSearchParams, Outlet } from 'react-router-dom';

export function Posts() {
  const params = useParams();
  const { id } = params;
  const [ qs, setQs ] = useSearchParams();
  
  return (
    <div>
        <h1>Posts <br /> <br /> {`Param: ${id} e QS: ${qs.get('page2')}`}</h1>

        <Outlet />
    </div>

  )
}
