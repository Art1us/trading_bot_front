export default [
  {
    id: 3,
    name: "email",
    type: "text",
    placeholder: "Email",
    className: "login__formBlock",
    inputClassName: "login__formInput",
    errors: [
      {
        condition: "^s*$",
        message: "Please enter your email!",
      },
      {
        pattern: "[a-z0-9]+@[a-z]+.[a-z]{2,3}",
        message: "Please enter a valid email",
      },
    ],
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    className: "login__formBlock",
    inputClassName: "login__formInput",
    errors: [
      {
        condition: "^s*$",
        message: "Please enter your password!",
      },
      {
        condition: "^(.{1,7})$",
        message: "Your password is too short!",
      },
      {
        condition: "^[A-Za-z0-9]*$",
        message: "Please include at least one special character",
      },
      {
        condition: "^[^A-Z]+$",
        message: "Please include an uppercase letter",
      },
      {
        condition: "^[^a-z]+$",
        message: "Please include an lowercase letter",
      },
      {
        condition: "^[^0-9]+$",
        message: "Please include a digit",
      },
    ],
  },
];
