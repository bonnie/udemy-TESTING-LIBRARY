import React, { useState } from "react";
import styles from "./SummaryForm.module.css";
import {
  Checkbox,
  Button,
  Container,
  FormControlLabel,
  Popover,
  Typography,
  Box,
} from "@mui/material";
const SummaryForm: React.FC = () => {
  const [termsCheckbox, toggleTermsCheckbox] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const onCheckboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggleTermsCheckbox(e.currentTarget.checked);
  };

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Container className={styles.Container}>
      <form className={styles.Form}>
        <Box>
          <Button variant="contained" disabled={!termsCheckbox}>
            Confirm order
          </Button>
        </Box>
        <FormControlLabel
          onMouseOver={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          control={
            <Checkbox
              value={termsCheckbox}
              onChange={onCheckboxChangeHandler}
            />
          }
          label="Terms and conditions"
        />
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>
            Terms and conditions, asd asd sd asdas ouashda usdao sdhaso ihasodi
            asodih asodih.
          </Typography>
        </Popover>
      </form>
    </Container>
  );
};

export default SummaryForm;
