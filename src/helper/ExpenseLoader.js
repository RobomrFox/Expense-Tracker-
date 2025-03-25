export const expenseLoader = () => {
    const dummyData = {
        totalExpense: 150,
        expenses: [
          { id: 1, category: "Food", amount: 50 },
          { id: 2, category: "Transport", amount: 30 },
          { id: 3, category: "Entertainment", amount: 70 },
        ],
      };
    
      // // Simulate a network delay (optional)
      // await new Promise((resolve) => setTimeout(resolve, 500));
    
      return dummyData;
}