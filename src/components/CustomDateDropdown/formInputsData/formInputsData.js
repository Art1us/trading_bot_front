const todayDate = new Date().toISOString().split("T")[0];
const twoYearsAgo = new Date(
  new Date().setFullYear(new Date().getFullYear() - 2)
)
  .toISOString()
  .split("T")[0];

export default [
  {
    id: 1,
    wrapperClassName: "customData__dateFormInputWrapper",
    element: "input",
    inputData: {
      className: "customDateDropdown__dateInput",
      props: {
        name: "dateFrom",
        type: "date",
        placeholder: "",
        min: twoYearsAgo,
        max: todayDate,
      },
    },
    errorsData:{
      className: 'customDateDropdown__error',
      errors: [
        {
          condition: "^s*$",
          message: "Please enter date",
        },
      ],
    }
    
  },
  {
    id: 2,
    wrapperClassName: "customData__dateFormInputWrapper",
    element: "input",
    inputData: {
      className: "customDateDropdown__dateInput",
      props: {
        name: "dateTo",
        type: "date",
        placeholder: "",
        min: twoYearsAgo,
        max: todayDate,
      },
    },
    errorsData:{
      className: 'customDateDropdown__error',
      errors: [
        {
          condition: "^s*$",
          message: "Please enter date",
        },
      ],
    }
  },
];
