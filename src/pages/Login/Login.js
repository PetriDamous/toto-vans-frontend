import React from "react";
import {
  useActionData,
  useLoaderData,
  useNavigation,
  Form,
  redirect,
} from "react-router-dom";
import { validateUser } from "../../api";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email");

  const password = formData.get("password");

  try {
    const user = await validateUser({ email, password });
    localStorage.setItem("loggedIn", true);
    return redirect("/host");
  } catch (error) {
    return error.message;
  }
};

export const loader = ({ request }) =>
  new URL(request.url).searchParams.get("message");

const Login = () => {
  const message = useLoaderData();
  const error = useActionData();
  const navigation = useNavigation();

  const { state } = navigation;

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3>{error}</h3>}
      <Form className="login-form" method="post" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={state === "submitting"}>
          {state === "submitting" ? "Logging in...." : "Log in"}
        </button>
      </Form>
    </div>
  );
};

export default Login;
