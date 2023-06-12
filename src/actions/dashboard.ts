import { toast } from "react-toastify";
import { createBudget, createExpense, deleteItem } from "../helpers";
import { redirect } from "react-router-dom";

export async function dashboardAction({ request }: { request: any }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  if (_action === "newUser") {
    try {
      localStorage.setItem("username", JSON.stringify(values.username));
      return toast.success(`Welcome, ${values.username}`);
    } catch (err) {
      throw new Error("There was a problem creating your account.");
    }
  }
  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success(`Budget created!`);
    } catch (err) {
      throw new Error("There was a problem creating your budget.");
    }
  }
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} Created!`);
    } catch (err) {
      throw new Error("There was a problem creating your expense.");
    }
  }
  if (_action === "deleteExpense") {
    try {
      deleteItem("expenses", values.expenseId);
      return toast.success(`Expense deleted!`);
    } catch (err) {
      throw new Error("There was a problem deleting your expense.");
    }
  }
}
