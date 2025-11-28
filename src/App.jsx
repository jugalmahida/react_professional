import ErrorBoundary from "@/components/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
