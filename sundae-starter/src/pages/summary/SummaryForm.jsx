import React from "react";
import Form from "react-bootstrap/Form";
import ConfirmOnStateButton from "./components/ConfirmOnStateButton.jsx";
import {OverlayTrigger, Popover} from "react-bootstrap";

const SummaryForm = () => {

  const [agreeTandC, setAgreeTandC] = React.useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        No ice cream will actually be delivered.
      </Popover.Body>
    </Popover>
  )

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue"}}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  )

  const setTandC = () => {
    setAgreeTandC(!agreeTandC);
  };

  const submit = (evt) => {
    evt.preventDefault();
  }

  return (
    <>
      <Form onSubmit={submit}>
        <ConfirmOnStateButton value={agreeTandC}
                              buttonDisable={!agreeTandC}
                              setCheck={setTandC}
                              submitButtonText="Confirm order"
                              checkboxLabel={checkboxLabel}
        />
      </Form>
    </>
  )
}

export default SummaryForm