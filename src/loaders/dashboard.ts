import { fetchData } from "../helpers";

export function dashboardLoader() {
  const username: string = fetchData("username");
  const budgets: {
    id: string;
    name: string;
    createdAt: number;
    amount: number;
    color: string;
  } = fetchData("budgets");
  const expenses: {
    id: string;
    name: string;
    createdAt: number;
    amount: number;
    budgetId: string;
  } = fetchData("expenses");
  return {
    username,
    budgets,
    expenses,
  };
}
