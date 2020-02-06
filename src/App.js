import {h} from 'preact'
import { useState } from 'preact/hooks';

export default function App () {
    const [toggle, setToggle] = useState(false);

    return (
        <h1 onClick={() => setToggle(!toggle)}>{
            toggle ? "Hello world from React" : "Click to hello"
        }</h1>
    )
}
