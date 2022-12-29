const todayDate = new Date().toISOString().split("T")[0];
const twoYearsAgo = new Date(
  new Date().setFullYear(new Date().getFullYear() - 2)
)
  .toISOString()
  .split("T")[0];

const formInputsData = [
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
        autoFocus: true,
      },
    },
    labelData: {
      className: "",
      text: "From:",
    },
    errorsData: {
      errors: [
        {
          condition: "^s*$",
          message: "Please enter date from!",
        },
      ],
    },
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
    errorsData: {
      errors: [
        {
          condition: "^s*$",
          message: "Please enter date to!",
        },
      ],
    },
  },
];

export default formInputsData;
