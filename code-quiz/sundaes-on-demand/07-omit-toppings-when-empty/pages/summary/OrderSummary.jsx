import React from 'react';
import SummaryForm from './SummaryForm';
import { useOrderDetails } from '../../contexts/OrderDetails';

export default function OrderSummary({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails();

  const scoopArray = Array.from(orderDetails.scoops.entries());
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));
 //KullKatt and Mike's code
 const hasToppings = orderDetails.toppings.size > 0;
 //if the size is greater that 0 then hasToppings is true
   let toppingsDisplay = null;

 if (hasToppings) {
const toppingsArray = Array.from(orderDetails.toppings.keys());
const toppingList = toppingsArray.map((key) => <li key={key}>{key}</li>);

//if hasToppings is true the following JSX will appear on order summary otherwise hasToppings will remain null
toppingsDisplay = (
 <>
   <h2>Toppings {orderDetails.totals.toppings}</h2>
   <ul>{toppingList}</ul>
   </>
);
 }
//end but we also added toppingsDisplay at the bottom

return (
  <div>
    <h1>Order Summary</h1>
    <h2>Scoops: {orderDetails.totals.scoops}</h2>
    <ul>{scoopList}</ul>{toppingsDisplay}
    <h2>Toppings: {orderDetails.totals.toppings}</h2>
    <ul>{toppingList}</ul>
    <SummaryForm setOrderPhase={setOrderPhase} />
  </div>
);
}
