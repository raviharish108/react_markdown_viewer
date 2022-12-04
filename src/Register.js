import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {  toast } from 'react-toastify';
import {url} from "./url"

export function Register(props) {

  const formik = useFormik({
    initialValues: {
      username:'',
      password:'',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15,'Must be 15 characters or less ')
        .required('specify your name'),
      password: Yup.string()
        .min(5)
        .required('specify your password'),
    }),
    onSubmit: data => {
    
      axios.post(`${url}/register`,data)
      .then(res=>{
        toast.success("register success",{
          position:toast.POSITION.TOP_CENTER
        })
        props.history.push('/')
      })
        .catch(err=>{
          toast.error("username already exist",{position:toast.POSITION.TOP_CENTER})
        })
     

    
     }
  });

//   const add_student=async(newone)=>{
//     await fetch(`${URL}`,
//     {method:"POST",
//     body: JSON.stringify(newone),
//     headers: {"Content-Type": "application/json"}})
  
//  };
  return (
    <div>
     <div className="page">
       <div className="login">
       <p>Register here</p>
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
     <button type="submit" class="btn btn-dark">Register</button>
     </form>
    </div>
    </div>
    </div>
  );

  }