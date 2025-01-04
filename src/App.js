import { Route, Routes } from "react-router-dom";

import Test from "./pages/Test/Test";
import AdminLayout from "./layouts/AdminLayout";
import OrderTracking from "./pages/OrderTracking/Root";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to="/order-tracking" replace />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/return" element={<OrderTracking />} />
      </Route>
    </Routes>
  );
}

export default App;
