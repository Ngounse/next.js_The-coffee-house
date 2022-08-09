import React from "react";
import { TextField } from "@mui/material";

export const RenderAutofillInput = React.memo(
  ({ input, label, type, meta, password, ...rest }: any) => {
    const hasError = (meta.error || meta.sumitError) && meta.touched;
    return (
      <TextField
        {...rest}
        {...input}
        error={hasError}
        label={label}
        helperText={(hasError && meta.error) || meta.submitError}
        value={input.value || ""}
      />
    );
  }
);
