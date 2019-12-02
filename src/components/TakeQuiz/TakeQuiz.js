import React, { useState } from "react";
import { useStyles } from "./styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default function TakeQuiz(props) {
  const classes = useStyles();

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <DialogContentText>
          <h2>TAKE QUIZ</h2>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
