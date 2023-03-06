import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function SummaryForm() {
  const [checked, setChecked] = useState(false);

  return (
    <Form>
      <Form.Group controlId="terms-checkbox">
        <Form.Check
          type="checkbox"
          label={
            <span>
              I agree to{" "}
              <span style={{ color: "blue" }}>Terms and Conditions</span>
            </span>
          }
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </Form.Group>
      <Button type="submit" disabled={!checked}>
        Confirm order
      </Button>
    </Form>
  );
}
