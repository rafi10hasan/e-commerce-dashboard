import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { overviewData } from "../datasets/index";
export default function BarChartData({ theme }) {
  return (
    <>
      <div className="card col-span-1 md:col-span-2 lg:col-span-4">
        <div className="card-header">
          <p className="card-title">Overview</p>
        </div>
        <div className="card-body p-0">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={overviewData}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom:5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                strokeWidth={0}
                // stroke={theme === "light" ? "#475569" : "#94a3b8"}
                tickMargin={6}
              />
              <YAxis
                dataKey="total"
                strokeWidth={0}
                // stroke={theme === "light" ? "#475569" : "#94a3b8"}
                tickFormatter={(value) => `$${value}`}
                tickMargin={6}
              />
              <Tooltip/>
              <Legend />
              <Bar
                
                dataKey="total"
                fillOpacity={1}
                fill={theme === "light" ? "#6c5ce7" : "#0984e3"}
                activeBar={false}
        
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
