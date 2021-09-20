import React from "react";
import SummaryForm from "./pages/SummaryForm/SummaryForm";
import OrderSummary from "./pages/SummaryForm/OrderSummary";
import Options from "./pages/entry/Options";
const App: React.FC = () => {
  return (
    <main>
      <SummaryForm />
      <OrderSummary />
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </main>
  );
};

export default App;
