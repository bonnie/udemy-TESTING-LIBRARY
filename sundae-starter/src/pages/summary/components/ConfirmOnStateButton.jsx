import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';

const ConfirmOnStateButton = ({isChecked, setCheck, buttonDisable, checkboxLabel, submitButtonText}) => {
  return (
    <>
      <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            checked={isChecked}
            onChange={() => {setCheck()}}
            label={checkboxLabel}
          />
      </Form.Group>
      <div>
        <Button
          variant="primary"
          type="submit"
          disabled={buttonDisable}
        >{submitButtonText}</Button>
      </div>
    </>
  )
}

ConfirmOnStateButton.propTypes = {
  isChecked: PropTypes.bool,
  setCheck: PropTypes.func,
  buttonDisable: PropTypes.bool,
  checkboxLabel: PropTypes.object,
  submitButtonText: PropTypes.string
}

export default ConfirmOnStateButton;

