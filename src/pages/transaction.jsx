import { useEffect, useState, useCallback } from "react";

const TransactionPage = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchAllExpenses = useCallback(async () => {
    const response = await fetch("http://localhost:3000/api/expenses", {
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      setExpenseData(data);
      setFilteredData(data);
    } else {
      await response.json();
    }
  }, []);

  useEffect(() => {
    fetchAllExpenses();
  }, [fetchAllExpenses]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "startDate") setStartDate(value);
    else if (id === "endDate") setEndDate(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const start = new Date(startDate);
    const end = new Date(endDate);
    const data = expenseData.filter((expense) => {
      if (!expense.createdAt) return false;
      const d = new Date(expense.createdAt);
      return d >= start && d <= end;
    });
    setFilteredData(data);
  };

  const handleShowAll = () => {
    setFilteredData(expenseData);
    setStartDate("");
    setEndDate("");
  };

  const handleDownload = async () => {
    const response = await fetch("http://localhost:3000/api/expenses/download", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expenses: filteredData }),
    });
    if (response.ok) {
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = "filtered_expenses.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      alert("Download failed: " + response.statusText);
    }
  };

  const dataToRender = filteredData.length > 0 ? filteredData : expenseData;

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <form onSubmit={handleSubmit} className="flex-1">
            <div className="flex flex-col gap-4 px-4 max-w-90 p-4 border-dashed border-2 border-gray-400 rounded-md">
              <div className="flex items-center justify-between">
                <label htmlFor="startDate" className="text-gray-900 font-medium">
                  Select Start Date:
                </label>
                <input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={handleInputChange}
                  required
                  className="ml-4 border border-gray-300 rounded-md px-2 py-1 focus:border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="endDate" className="text-gray-900 font-medium">
                  Select an End Date:
                </label>
                <input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={handleInputChange}
                  required
                  className="ml-4 border border-gray-300 rounded-md px-2 py-1 focus:border-gray-500 focus:outline-none"
                  style={{ caretColor: "#1f2937" }}
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-black text-white font-semibold py-3 rounded-md hover:bg-black/95 focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 transition-all duration-200 active:scale-95"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleShowAll}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-black text-white font-semibold py-3 rounded-md hover:bg-black/95 focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 transition-all duration-200 active:scale-95"
                >
                  All
                </button>
              </div>
            </div>
          </form>
          <button
            type="button"
            onClick={handleDownload}
            className="ml-4 inline-flex items-center justify-center gap-2 bg-black text-white font-semibold py-3 px-5 rounded-md hover:bg-black/95 focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 transition-all duration-200 active:scale-95"
          >
            Download CSV
          </button>
        </div>
        <h2 className="text-4xl py-4 mt-10 font-bold">Filtered Expenses</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-black text-white">
              <tr>
                <th className="whitespace-nowrap px-5 py-3 text-left font-semibold">
                  Name
                </th>
                <th className="whitespace-nowrap px-5 py-3 text-left font-semibold">
                  Category
                </th>
                <th className="whitespace-nowrap px-5 py-3 text-left font-semibold">
                  Date
                </th>
                <th className="whitespace-nowrap px-5 py-3 text-left font-semibold">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {dataToRender.map((expense) => (
                <tr
                  key={expense._id}
                  className="hover:bg-slate-100 transition-all duration-200"
                >
                  <td className="whitespace-nowrap px-5 py-3 font-medium text-gray-900">
                    {expense.name}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-gray-700">
                    {expense.category}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-gray-700">
                    {new Date(expense.createdAt).toLocaleDateString()}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-gray-700">
                    {`$${expense.amount.toFixed(2)}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TransactionPage;
