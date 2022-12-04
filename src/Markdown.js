import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Mytext } from "./textfile";

export function Markdown(props) {
  const [state, setstate] = useState(Mytext);
  return (
    <div>
       <button type="button" class="btn btn-dark" id="button" onClick={()=>{localStorage.clear();
                                                                                props.history.push('/') }}>logout</button>
    <div className='main'>
     
      <textarea
        className='input'
        onChange={(e) => setstate(e.target.value)}
        value={state}
      ></textarea>
      <div className="output">
        <ReactMarkdown>{state}</ReactMarkdown>
      </div>
     
    </div>
   
    </div>
  );
}
