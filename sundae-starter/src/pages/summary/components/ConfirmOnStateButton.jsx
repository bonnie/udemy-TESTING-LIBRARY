// import React from "react";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';

const ConfirmOnStateButton = ({val, setValue, disable, label, submitButtonText}) => {
  return (
    <>
      <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            checked={val}
            onChange={() => {setValue()}}
            label={label}
          />
      </Form.Group>
      <div>
        <Button
          variant="primary"
          type="submit"
          disabled={disable}
        >{submitButtonText}</Button>
      </div>
    </>
  )
}

ConfirmOnStateButton.propTypes = {
  val: PropTypes.bool,
  setValue: PropTypes.func,
  disable: PropTypes.bool,
  label: PropTypes.object,
  submitButtonText: PropTypes.string
}

export default ConfirmOnStateButton;

