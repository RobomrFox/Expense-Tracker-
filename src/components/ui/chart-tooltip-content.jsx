// src/components/ui/chart-tooltip-content.jsx
import React from "react";

export function ChartTooltipContent({ payload, label, active }) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="bg-white p-2 border rounded shadow">
      <p className="text-sm font-bold">{`Day: ${label}`}</p>
      <p className="text-sm">{`Expense: $${payload[0].value}`}</p>
    </div>
  );
}
