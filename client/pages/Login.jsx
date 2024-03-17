import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <div>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </div>
  );
}

export default Login;





// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";

// import { useState } from 'react'
// import { logIn } from '../services/users.js'
// import { useNavigate } from 'react-router-dom'

// function LogIn() {

//   // const navigate = useNavigate()

//   // const [form, setForm] = useState({
//   //   username: '',
//   //   password: '',
//   //   isError: false,
//   //   errorMsg: '',
//   // })

//   // const handleChange = (event) => {
//   //   setForm({
//   //     ...form,
//   //     [event.target.name]: event.target.value,
//   //   })
//   // }

//   // const onSignIn = async (event) => {
//   //   event.preventDefault()
//   //   const { setUser } = props
//   //   try {
//   //     const user = await logIn(form)
//   //     setUser(user)
//   //     navigate('/')
//   //   } catch (error) {
//   //     console.error(error)
//   //     setForm({
//   //       isError: true,
//   //       errorMsg: 'Invalid Credentials',
//   //       username: '',
//   //       password: '',
//   //     })
//   //   }
//   // }

//   // const renderError = () => {
//   //   const toggleForm = form.isError ? 'danger' : ''
//   //   if (form.isError) {
//   //     return (
//   //       <button type='submit' className={toggleForm}>
//   //         {form.errorMsg}
//   //       </button>
//   //     )
//   //   } else {
//   //     return <button type='submit'>Sign In</button>
//   //   }
//   // }

//   // const { email, password } = form

//   return (
//     <div>

//       <FloatingLabel
//         controlId="floatingInput"
//         label="Username"
//         className="mb-3"
//       >
//         <Form.Control type="text" placeholder="" />
//       </FloatingLabel>
//       <FloatingLabel controlId="floatingPassword" label="Password">
//         <Form.Control type="password" placeholder="Password" />
//       </FloatingLabel>


//       {/* <Form onSubmit={onSignIn}>
//         <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
//             <Form.Control 
//               type="text" 
//               placeholder="" 
//               value={username} 
//               // onChange={handleChange} 
//             />
//         </FloatingLabel>
//         <FloatingLabel controlId="floatingPassword" label="Password">
//             <Form.Control 
//               type="password" 
//               placeholder="Password" 
//               value={password} 
//               // onChange={handleChange} 
//             />
//         </FloatingLabel>
//         <button type="submit" className="btn btn-primary">Login</button>

//         {renderError()}

//       </Form> */}


//     </div>
//   );
// }

// export default Login;



