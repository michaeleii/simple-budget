const generateRandomColor = () => {
  const existingBudgetsLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetsLength * 34} 65% 50%`;
};

//Get all items from local storage
export const getAllMatchingItems = (
  category: "budgets" | "expenses" | "username",
  key: string,
  value: string
) => {
  const data = fetchData(category) ?? [];
  return data.filter((item: { [x: string]: string }) => item[key] === value);
};

// Local storage
export const fetchData = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const createBudget = ({
  name,
  amount,
}: {
  name: string;
  amount: number;
}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

export const createExpense = ({
  name,
  amount,
  budgetId,
}: {
  name: string;
  amount: number;
  budgetId: string;
}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId,
  };
  const existingExpense = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpense, newItem])
  );
};

//delete item

export const deleteItem = (key: string, id = "") => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter(
      (item: { id: string }) => item.id !== id
    );
    return localStorage.setItem(key, JSON.stringify(newData));
  } else {
    return localStorage.removeItem(key);
  }
};

//total spent by budget
export const totalSpent = (budgetId: string) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce(
    (
      acc: number,
      expense: {
        budgetId: string;
        amount: number;
      }
    ) => {
      if (expense.budgetId !== budgetId) return acc;
      return acc + expense.amount;
    },
    0
  );
  return budgetSpent;
};

//Format Currency
export const formatCurrency = (amount: number) => {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
};

//Format Percentages for Budgets
export const formatPercentage = (amount: number) => {
  return amount.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

export const formatDateToLocaleString = (epoch: number) => {
  return new Date(epoch).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
