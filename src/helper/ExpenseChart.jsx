
import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { ChartTooltipContent } from "@/components/ui/chart-tooltip-content";

// Generate dummy data for 30 days.
const generateMonthlyData = () => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  return days.map((day) => ({
    day,
    expense: Math.floor(Math.random() * 100) + 20,
  }));
};

export default function ExpenseChart() {
  const [data] = useState(generateMonthlyData());

  const chartConfig = {
    expense: {
      label: "Expense",
      color: "#2563eb",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Expense Trend</CardTitle>
        <CardDescription>
          Daily expense calculations for this month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full">
         
          <div className="w-full" style={{ height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={data} margin={{ left: 12, right: 12 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => `Day ${value}`}
                />
                <Tooltip content={<ChartTooltipContent />} />
                <Line
                  dataKey="expense"
                  type="monotone"
                  stroke="var(--color-expense)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Expenses higher than 4.5% than last month <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
