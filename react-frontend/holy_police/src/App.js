import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBar,
  HomePage,
  RegisterVehicle,
  SuccessPage,
  Login,
  VehicleList,
} from "./components";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/registervehicle" element={<RegisterVehicle />} />
          <Route path="/successpage" element={<SuccessPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vehiclelist" element={<VehicleList />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
