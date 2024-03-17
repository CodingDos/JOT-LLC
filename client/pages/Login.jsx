import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { useState } from 'react'
import { login } from '../services/users.js'
import { useNavigate } from 'react-router-dom'

function Login(props) {

  const navigate = useNavigate()

  const [form, setForm] = useState({
  username: '',
  password: '',
  isError: false,
  errorMsg: '',
  })

  const handleChange = (event) => {
  setForm({
    ...form,
    [event.target.name]: event.target.value,
  })
}

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await login(form)
      setUser(user)
      navigate('/category')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        username: '',
        password: '',
      })
    }
  }

    const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Sign In</button>
    }
  }

  const { username, password } = form

  
  return (
    <div>
      <Form onSubmit={onSignIn}>
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
      >
        <Form.Control
            type="text"
            placeholder=""
            name="username"
            value={form.username}
            onChange={handleChange}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
      </FloatingLabel>
      {renderError()}
      </Form>
    </div>
  );
}

export default Login;




