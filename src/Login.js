import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  toast } from 'react-toastify';
import axios from 'axios';
import {url} from "./url"
export function Login(props) {
  const formik = useFormik({
    initialValues: {
      username:'',
      password:'',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15,'invalid credentials ')
        .required('invalid credentials'),
      password: Yup.string()
        .min(5,'inavalid credentials')
        .required('specify your password'),
    }),
    onSubmit: (data) => {
    
      axios.post(`${url}/login`,data)
      .then(res=>{
      localStorage.setItem("auth",JSON.stringify(res.data));
      props.history.push('/viewer');
      
      }).catch(err=>{
          toast.error("you are not user please register here or check your password",{
            position:toast.POSITION.TOP_CENTER
          })
          
        })
      }
    
  });
  
  return (
    <div className="page">
       <div className="login">
       <p>Login here</p>
       <form  onSubmit={formik.handleSubmit}>
     <input 
            type="text" 
            name="username" 
            placeholder="Username" 
           className="input_terminal" 
            label="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}/>
            <br/>
            {formik.touched.username && formik.errors.username ? (<div >{formik.errors.username}</div>) : null}
            <br/>
     <input 
          type="password" 
          name="password" 
          placeholder="Password" 
         className="input_terminal"
         label="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}/>
            <br/>
            {formik.touched.password && formik.errors.password ? ( <div>{formik.errors.password}</div> ) : null}
      <br/>
     <button type="submit" class="btn btn-dark">log in</button>
     </form>
    </div>
    </div>
  );
}
