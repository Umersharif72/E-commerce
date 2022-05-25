import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbars from "./navbar";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";

const ValidationSchema = Yup.object().shape({
name: Yup.string()
	.required("Full Name is required"),
email: Yup.string()
	.email("Invalid email address format")
	.required("Email is required"),
phone: Yup.number()
	.integer("Password must be 11 characters and not Letters")
	.required("Phone is required"),
gender: Yup.string()
    .required("Select Your Gender")




});

const Signup = () =>{
const navigate = useNavigate()
	return (
        <div>
            <Navbars/>
		<div className="container pt-5">
           
		<div className="row justify-content-sm-center pt-5">
			<div className="col-sm-6 shadow round pb-3"  >
				<h1 className="text-center pt-3 text-secondary">Signup</h1>
			<Formik
			initialValues={{name:'', email: '' ,phone:'',gender:''}}
			validationSchema={ValidationSchema}
			onSubmit={(values) => {
				console.log(values);
				navigate('/showForm',{state: values})
				
			}}
			>
				
			{({ touched, errors, isSubmitting, values }) =>
				!isSubmitting ? (
				<div>
					<Form>
                    <div className="form-group " >
						
						<Field
                        id="input-1"
						type="text"
						name="name"
						placeholder="Full Name"
						className={`mt-2 form-control ${touched.name && errors.name ? "is-invalid" : ""}`}
						/>

						<ErrorMessage component="div" name="name" className="invalid-feedback"/>
					</div>
					
					<div className="form-group">
						
						<Field
                        id="input-1"
						type="email"
						name="email"
						placeholder="Enter email"
						autocomplete="off"
						className={`mt-2 form-control ${touched.email && errors.email ? "is-invalid" : ""}`}/>

						<ErrorMessage component="div" name="email" className="invalid-feedback" />
					</div>

                    <div className="form-group">
						
						<Field
                        id="input-1"
						type="tel"
						name="phone"
						placeholder="Phone Number"
						className={`mt-2 form-control ${ touched.phone && errors.phone? "is-invalid": "" }`}/>
						<ErrorMessage component="div" name="phone" className="invalid-feedback" />
						
					</div>

                   

                    <div>
                    <p id='form-p3' className={`mt-2 form-control
						${
							touched.gender && errors.gender
							? "is-invalid"
							: ""
						}`}>Gender:
                            <br />
                            <Field type="radio" name="gender" id="Male" value="male" />
                            <label id='l-male' htmlFor="Male">Male</label>
                            <Field type="radio" name="gender" id="female" value="female" />
                            <label id='l-male' htmlFor="female">Female</label>
                        </p>
                        <ErrorMessage
						component="div"
						name="gender"
						className="invalid-feedback"
						/>
                    </div>
                    

					<button
                    id='submit-form'
						type="submit"
						className="btn btn-primary btn-block mt-4"
					>
						Submit
					</button>
					</Form>
				</div>
				) : (
				<div>
					<h1 className="p-3 mt-5">Thank You</h1>

					<div className="alert alert-success mt-3">
					We will respond to your request soon... 
					</div>
					<ul className="list-group">
					<li className="list-group-item">
						Email: {values.email}</li>
					<li className="list-group-item">
						Password: {values.name}
					</li>

                    <li className="list-group-item">
						Phone: {values.phone}
					</li>
                   
                    <li className="list-group-item">
						Gender: {values.gender}
					</li>
                   
					</ul>
				</div>
				)
			}
			</Formik>
		</div>
		</div>
       
	</div>
    <Footer/>
    </div>
	);
}

export default Signup;