import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";

export async function logoutAction() {
  deleteItem("username");
  deleteItem("budgets");
  deleteItem("expenses");
  toast.success("You've deleted your account.");
  return redirect("/");
}
