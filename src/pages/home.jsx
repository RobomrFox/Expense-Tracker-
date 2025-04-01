// src/pages/Home.jsx
import { useOutletContext } from "react-router-dom";
import AddExpense from "../form/AddExpense";
import ExpenseChart from "@/helper/ExpenseChart";
import ExpenseRecords from "@/components/ExpenseRecords";
import Topbar from "@/components/Topbar";
import AddCategory from "@/form/AddCategory";

export function Home() {
    // Retrieve the expense data from the parent route's Outlet context.
    const { expenseData } = useOutletContext();

    const userName = "Avi Pancholi"

    // Optionally render a loading state if expenseData isn't available.
    if (!expenseData) {
        return <div>Loading...</div>;
    }

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
                    <AddExpense />
                </div>
                
                <div className="w-2/5">
                    <AddCategory />
                </div>
            </div>


        </>
    );
}
