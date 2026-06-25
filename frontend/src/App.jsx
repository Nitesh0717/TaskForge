import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import Deployments from "./pages/Deployments";
import Kubernetes from "./pages/Kubernetes";
import Monitoring from "./pages/Monitoring";
import CICD from "./pages/CICD";
import Settings from "./pages/Settings";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/deployments"
            element={<Deployments />}
          />

          <Route
            path="/kubernetes"
            element={<Kubernetes />}
          />

          <Route
            path="/monitoring"
            element={<Monitoring />}
          />

          <Route
            path="/cicd"
            element={<CICD />}
          />

          <Route
            path="/tasks"
            element={<Tasks />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
