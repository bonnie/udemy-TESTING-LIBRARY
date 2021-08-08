import Button from 'react-bootstrap/Button';
import Options from './Options';
import { useOrderDetails } from '../../contexts/OrderDetails';

export default function OrderEntry({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails();

  // the orderDisabled is set to be a boolean so that it tells us if the totalsScoop is $0.00
  //and if the total is $0.00, the button is disabled, and if it's above $0.00 the button's enabled
  const orderDisabled = orderDetails.totals.scoops === '$0.00';

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button disabled={orderDisabled} onClick={() => setOrderPhase('review')}> Order Sundae!
      </Button>
    </div>
  );
}
