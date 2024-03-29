import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../services/users.js";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Register.css";

function Register(props) {
  // const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  //blah
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "", //will be field where they have to retype their password
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onRegister = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    console.log(setUser);
    try {
      const user = await register(form);
      setUser(user);
      navigate("/category");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <Button className="submitButton" type="submit">
          Submit
        </Button>
      );
    }
  };
  const { username, email, password, passwordConfirmation } = form;

  return (
    <div className="rootRegister">
      <Form className="rootForm" onSubmit={onRegister}>
        <h3 className="registerTitle">Register</h3>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingRetypePasswords"
          label="Re-Type Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={handleChange}
          />
        </FloatingLabel>
        {renderError()}
      </Form>
      <p className="existing">
        Already Have an account? <Link to={"/"}>Login </Link>
      </p>
    </div>
  );
}

export default Register;
