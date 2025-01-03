import { Route, Routes } from "react-router-dom";

import Test from "./pages/Test/Test";
import AdminLayout from "./layouts/AdminLayout";
import OrderTracking from "./pages/OrderTracking/Root";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="" element={<OrderTracking />} />
      </Route>
    </Routes>
  );
}

export default App;
