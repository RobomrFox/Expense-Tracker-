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
                        <div className="mt-6 rounded-3xl max-w-100 h-50 bg-amber-300">

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
                    <MonthlyExpenseList expenses={monthlyExpenses} onEditOrDelete={fetchExpenses}/>
                </div>
        </>
    );
}
