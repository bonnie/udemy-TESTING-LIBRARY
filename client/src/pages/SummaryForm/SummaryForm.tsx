import React, { useState } from "react";
import styles from "./SummaryForm.module.css";
import {
  Checkbox,
  Button,
  Container,
  FormControlLabel,
  Box,
} from "@mui/material";
const SummaryForm: React.FC = () => {
  const [termsCheckbox, toggleTermsCheckbox] = useState(false);
  const onCheckboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggleTermsCheckbox(e.currentTarget.checked);
  };
  return (
    <Container className={styles.Container}>
      <form className={styles.Form}>
        <Box>
          <Button variant="contained" disabled={!termsCheckbox}>
            Confirm order
          </Button>
        </Box>
        <FormControlLabel
          control={
            <Checkbox
              value={termsCheckbox}
              onChange={onCheckboxChangeHandler}
            />
          }
          label="Terms and conditions"
        />
      </form>
    </Container>
  );
};

export default SummaryForm;
