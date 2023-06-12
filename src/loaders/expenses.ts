import { fetchData } from "../helpers";

export const expensesLoader = () => {
  const expenses = fetchData("expenses");
  return {
    expenses,
  };
};
