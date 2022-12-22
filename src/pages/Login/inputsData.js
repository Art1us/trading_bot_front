export default [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      className: "login__formBlock",
      inputClassName: "login__formInput",
      errorMessage: '*Please enter your email!',
      pattern: '[a-z0-9]+@[a-z]+\.[a-z]{2,3}',
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      className: "login__formBlock",
      inputClassName: "login__formInput",
      errorMessage: '*Please enter your password!',
      pattern: "^[A-Za-z0-9]*$"
    },
  ];