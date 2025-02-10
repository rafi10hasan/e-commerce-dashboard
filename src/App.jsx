import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./contexts/theme-context";
import DashboardPage from "./routes/dashboard/page";
import Layout from "./routes/layout";

function App() {
  return (
    <ThemeProvider storageKey="theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<DashboardPage />} />
            <Route path="/customers" element={<h1 className="text-2xl dark:text-white font-bold">Customers</h1>} />
            <Route path="/products" element={<h1 className="text-2xl dark:text-white font-bold">Products</h1>} />
            <Route path="/purchases" element={<h1 className="text-2xl dark:text-white font-bold">Purchases</h1>} />
            <Route
              path="/stock-transfer"
              element={<h1 className="text-2xl dark:text-white font-bold">Stock Transfer</h1>}
            />
            <Route
              path="/stock-adjustment"
              element={<h1 className="text-2xl dark:text-white font-bold">Stock Adjustment</h1>}
            />
            <Route path="/reports" element={<h1 className="text-2xl dark:text-white font-bold">Reports</h1>} />
            <Route path="/settings" element={<h1 className="text-2xl dark:text-white font-bold">Settings</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
