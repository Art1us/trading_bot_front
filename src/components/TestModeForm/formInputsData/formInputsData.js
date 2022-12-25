const todayDate = new Date().toISOString().split("T")[0];
const twoYearsAgo = new Date(
  new Date().setFullYear(new Date().getFullYear() - 2)
)
  .toISOString()
  .split("T")[0];

export default [
  {
    id: 1,
    wrapperClassName: "testMode__dateFormInput",
    element: "input",
    inputData: {
      className: "",
      props: {
        name: "dateFrom",
        type: "date",
        placeholder: "",
        min: twoYearsAgo,
        max: todayDate,
      },
    },
    labelData: {
      className: "",
      text: "From:",
    },
    errors: [
      {
        condition: "^s*$",
        message: "Please enter date from!",
      },
    ],
  },
  {
    id: 2,
    wrapperClassName: "testMode__dateFormInput",
    element: "input",
    inputData: {
      className: "",
      props: {
        name: "dateTo",
        type: "date",
        placeholder: "",
        min: twoYearsAgo,
        max: todayDate,
      },
    },
    labelData: {
      className: "",
      text: "To:",
    },
    errors: [
      {
        condition: "^s*$",
        message: "Please enter date to!",
      },
    ],
  },
];
