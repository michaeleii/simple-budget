import { useLoaderData } from "react-router-dom";
import { expensesLoader } from "../loaders/expenses";
import Table from "../components/Table";

function Expenses() {
  const { expenses } = useLoaderData() as ReturnType<typeof expensesLoader>;
  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>No Expenses to show</p>
      )}
    </div>
  );
}
export default Expenses;
