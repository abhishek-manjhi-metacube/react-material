import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function FormDialog(tableProps) {
  const [open, setOpen] = React.useState(false);
  const [inputs, setInputs] = React.useState({});
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
    setInputs({});
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(inputs).length !== 0) {
      tableProps.onFormSubmit(inputs);
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        + Add User
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/formik")}
      >
        + Formik
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={{ textAlign: "center" }} id="form-dialog-title">
          Add User
        </DialogTitle>
        <DialogContent>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="Firstname"
              label="First name"
              type="text"
              variant="outlined"
              name="firstName"
              value={inputs.firstName || ""}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="Lastname"
              label="Last name"
              type="text"
              variant="outlined"
              name="lastName"
              value={inputs.lastName || ""}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="Age"
              label="Age"
              type="number"
              variant="outlined"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
              fullWidth
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FormDialog;
