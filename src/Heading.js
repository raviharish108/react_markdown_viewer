import { useHistory } from "react-router-dom";
export function Heading() {
  const history = useHistory();
  return (
    
      <div className="heading">
        <h1>React Markdown Viewer</h1>
      
        <span><button type="button" class="btn btn-dark" id="button" onClick={()=>history.push("/")}>login</button></span>
       
        <span><button type="button" class="btn btn-dark" id="button" onClick={()=>history.push("/register")}>register</button></span>
        
      </div>
  
  );
}
