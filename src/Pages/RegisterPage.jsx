import { useState } from "react";
import { useFormik } from "formik";
import {object,string} from "yup";
import { useNavigate } from "react-router-dom";
import { addUser } from "../api/Userapi";
import { saveUser } from "../utils/localStorageUsers";
export default function RegisterPage(){
    const navigate = useNavigate();
    const validationSchema = object({
        name: string().required("name is required"),
        username: string().required("username is required"),
        email:string().email("invalid email format").required("email is required")
    });
    const formik = useFormik({
        initialValues:{
            name:'',
            username:'',
            email:''
        },
        validationSchema,
        onSubmit: async (values,{resetForm}) => {
            const newUser = {
                id:Date.now(),
                name:values.name,
                username:values.username,
                email:values.email
            };
            // const newUser = 
            // {
            //     id:Date.now(),
            //     name:values.name,
            //     username:values.username,
            //     email:values.email
            // }
            // setUsers([...users,newUser]);
            try{
                await addUser(values);
                saveUser(newUser);
                resetForm();
                navigate("/users");
            }
            catch(error){
                console.log(error);
            }
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label>name:</label>
            <input name="name"
            value={formik.values.name} onChange={formik.handleChange}
                placeholder="Enter your Name"
            ></input>
           {formik.errors.name && formik.touched.name && 
           <p>{formik.errors.name}</p>}
           <label>username</label>
           <input value={formik.values.username} name="username"
           onChange={formik.handleChange}
           placeholder="Enter your username"></input>
           {formik.errors.name && formik.touched.username &&
           <p>{formik.errors.username}</p>}
           <label>Email</label>
           <input
            value={formik.values.email} onChange={formik.handleChange}
            placeholder="Enter your email" name="email"
           ></input>
           {formik.errors.email && formik.touched.email && 
           <p>{formik.errors.email}</p>}
           <button type="submit">Register</button>
        </form> 
    )

}
