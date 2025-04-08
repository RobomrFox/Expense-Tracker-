import { useOutletContext } from "react-router-dom";
import AddExpense from "../form/AddExpense";
import ExpenseChart from "@/helper/ExpenseChart";
import AddCategory from "@/form/AddCategory";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import MonthlyExpenseList from "@/form/MonthlyExpense";
import { useCallback } from "react";

export function Home() {
    const [availableCategories, setAvailableCategories] = useState([]);
    const [expenseData, setExpenseData] = useState(null);



    const fetchExpenses = useCallback(async () => {

        const res = await fetch("http://localhost:3000/api/expenses", {
            credentials: "include",
        });
        if (res.ok) {
            const data = await res.json();
            setExpenseData(data);
        } else {
            toast.error("Failed to load expenses.");
        }
    }, [])


    const fetchCategories = useCallback(async () => {
        const endpoint = 'http://localhost:3000/api/category';
        const fetchOptions = {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        };

        try {
            const response = await fetch(endpoint, fetchOptions);
            if (response.ok) {
                const data = await response.json();
                setAvailableCategories(data);
            } else {
                const errorData = await response.json().catch(() => ({}));
                toast.error(`Failed to load categories: ${errorData.error || response.statusText}`);
            }
        } catch (error) {
            console.error("Network error fetching categories:", error);
            toast.error("Network error fetching categories.");
        }
    }, [])

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    const userName = "Avi Pancholi";

    useEffect(() => {
        fetchExpenses();
    }, [fetchExpenses]);

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const monthlyExpenses =
        expenseData &&
        expenseData.filter((exp) => {
            if (!exp.createdAt) return false;
            const d = new Date(exp.createdAt);
            return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
        });

    if (!expenseData) return <div>Loading...</div>;


    return (
        <>
            <div className="mt-20 mx-auto px-4 max-w-[1300px]">
                <div className="flex flex-col gap-2 lg:flex-row mx-auto">
                    <div className="flex-1 min-w-[350px]">
                        <h1 className="text-2xl">Hello There, <br /><span className="text-5xl">{userName}</span></h1>
                        <div className="mt-6 w-[95%]">
                            {/* Container to prevent overflow */}
                            <div className="relative">
                                {/* Bottom stack - orange border (3rd card) */}
                                <div
                                    className="absolute top-3 left-0 right-0 bottom-0 rounded-xl bg-orange-50 shadow-sm border-l-4 border-orange-500 -z-20"
                                    style={{ transform: "translate(16px, 16px)" }}
                                    aria-hidden="true"
                                ></div>

                                {/* Middle stack - red border (2nd card) */}
                                <div
                                    className="absolute top-3 left-0 right-0 bottom-0 rounded-xl bg-red-50 shadow-sm border-l-4 border-red-500 -z-10"
                                    style={{ transform: "translate(8px, 8px)" }}
                                    aria-hidden="true"
                                ></div>

                                {/* Main budget card - purple border (1st card) */}
                                <div className="relative rounded-xl bg-white p-6 pb-7 shadow-sm border-l-4 border-purple-500">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-2xl font-semibold text-gray-800">Monthly Budget</h2>
                                        <button className="inline-flex items-center justify-center gap-2 bg-purple-100 text-purple-700 font-medium py-2 px-4 rounded-md hover:bg-purple-200 transition-all duration-200">
                                            <span>View Details</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600 font-medium">Current Spending</span>
                                        <span className="text-purple-700 font-bold">$580 / $1,200</span>
                                    </div>

                                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                                        <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '48%' }}></div>
                                    </div>

                                    <div className="mt-4 flex justify-between text-sm text-gray-500">
                                        <span>48% of budget used</span>
                                        <span>$620 remaining</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex-1 mt-4 mr-6 min-w-[560px]">
                        <ExpenseChart expenseData={expenseData} />
                    </div>
                </div>
                <div className="mt-20">

                </div>
            </div>

            <div className="mr-4 ml-4 flex flex-row gap-4 justify-between max-w-[1200px] mx-auto">
                <div className="w-3/5">
                    <AddExpense categories={availableCategories} onExpenseAdded={fetchExpenses} />
                </div>
                <div className="w-2/5">
                    <AddCategory onCategoriesAdded={fetchCategories} />
                </div>

            </div>
            <div>
                <MonthlyExpenseList expenses={monthlyExpenses} onEditOrDelete={fetchExpenses} />
            </div>
        </>
    );
}
