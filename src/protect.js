import {Route,Redirect} from "react-router-dom";
export function Protect({component,...rest}){

   let RenderComponent=component;
   let hasToken=JSON.parse(localStorage.getItem('auth'));
    return(
      <Route
      {...rest}
          render= {  props =>{
        return hasToken !== null ?  ( <RenderComponent {...props}/>) :(<Redirect to={{
            pathname:"/"
        }}/>)
      }}
      />
    )
}