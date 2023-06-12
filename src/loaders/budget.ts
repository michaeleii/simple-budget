import { getAllMatchingItems } from "../helpers";

export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems("budgets", "id", params.id)[0];
  const expenses = await getAllMatchingItems("expenses", "budgetId", params.id);
  if (!budget)
    throw new Error("The budget you're trying to find doesn't exist.");
  return { budget, expenses };
}
