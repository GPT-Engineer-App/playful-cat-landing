import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import VeganFoodPage from "./pages/VeganFoodPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/vegan-food" element={<VeganFoodPage />} />
      </Routes>
    </Router>
  );
}

export default App;
