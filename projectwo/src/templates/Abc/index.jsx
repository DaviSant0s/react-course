import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Abc() {
    const {slug, id} = useParams();

    return (
    <div>
        <h1>ABC {slug} {id}</h1>
    </div>
  )
}
