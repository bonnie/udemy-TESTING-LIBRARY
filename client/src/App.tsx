import React from "react";
import SummaryForm from "./pages/SummaryForm/SummaryForm";
import OrderSummary from "./pages/SummaryForm/OrderSummary";
const App: React.FC = () => {
  return (
    <main>
      <SummaryForm />
      <OrderSummary />
    </main>
  );
};

export default App;
