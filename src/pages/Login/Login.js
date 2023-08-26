import React from "react";
import { useLoaderData, Form } from "react-router-dom";
import { validateUser } from "../../api";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email");

  const password = formData.get("password");

  validateUser({ email, password })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  return null;
};

export const loader = ({ request }) =>
  new URL(request.url).searchParams.get("message");

const Login = () => {
  const message = useLoaderData();

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      <Form className="login-form" method="post">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button>Log in</button>
      </Form>
    </div>
  );
};

export default Login;
