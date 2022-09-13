import "./form.css";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from "react";

const Form = () => {
    const [IsSend,setIsSend] = useState(false);
    const formik = useFormik({
        initialValues:{
            name:'',
            email: '',
            text:'',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2),
            email: Yup.string().email(),
            text : Yup.string().min(10).max(500)
        }),
        onSubmit: async values =>{
            const data = {service_id: process.env.REACT_APP_service,
            template_id: process.env.REACT_APP_template,
            user_id: process.env.REACT_APP_user,
            template_params: {
                'to_name': values.name,
                'message': values.text,
                'email': values.email,
                'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
            }};
            console.log(data);
            const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data);
            console.log(data);
            setIsSend(true);

        }
    });
    const success = ()=>{
      if(IsSend){
        return 'your message sent to admin';
      }
    }
  return (
    <div className="form-container d-flex justify-content-center p-5 "> 
      
      <form onSubmit={formik.handleSubmit} className="form p-3 mt-5 bg-white rounded">
      <h2 className="text-center"></h2>
        <div className="mb-3">
          <label>name:</label>
          <input
            className="form-control"
            placeholder="enter your name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onFocus={()=>setIsSend(false)}
            type="text"
            name="name"
            id="name"
          />
          {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}
        </div>
        <div className="mb-3">
          <label>email:</label>
          <input
            className="form-control"
            placeholder="enter your email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onFocus={()=>setIsSend(false)}
            type="text"
            name="email"
            id="email"
          />
          {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
        </div>
        <div className="mb-3">
          <label>text:</label>
          <textarea
            className="form-control"
            placeholder="enter your message"
            onChange={formik.handleChange}
            value={formik.values.text}
            onBlur={formik.handleBlur}
            onFocus={()=>setIsSend(false)}
            type="text"
            name="text"
            id="text"
            rows="5"
          ></textarea>
          {formik.touched.text && formik.errors.text ? (
         <div>{formik.errors.text}</div>
       ) : null}
        </div>
        <div className="text-success">{success()}</div>
        
        <input className="btn btn-success mt-2 mb-2" type='submit' value='send' />
      </form>
      
    </div>
  );
};

export default Form;
