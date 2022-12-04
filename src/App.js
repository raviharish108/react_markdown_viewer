import {Switch,Route} from "react-router-dom";
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { Heading } from "./Heading";
import {Markdown} from "./Markdown";
import {Protect} from "./protect";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  return(
    <div>
      <Heading/>
    
      <Switch>
        <Route exact path="/" component={Login} />
        <Route  exact path="/register" component={Register} />
        {/* <Route exact path="/login" element={Login}/> */}
        <Protect exact path="/viewer" component={Markdown}/>
      </Switch>
  <ToastContainer/>
    </div>
  )
}



export default App;
