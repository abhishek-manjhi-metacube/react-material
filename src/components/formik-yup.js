import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@material-ui/core";

export default function FormikYup() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email('Enter a valid email'),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div>
      <h1>FormikYup</h1>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            autoFocus
            margin="dense"
            id="outlined-error-helper-text"
            label="Name"
            type="text"
            variant="outlined"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            helperText={formik.errors.name ? formik.errors.name : ""}
            error={formik.errors.name}
            fullWidth
          />

          <TextField
            margin="dense"
            id="outlined-error-helper-text"
            label="Email"
            type="text"
            variant="outlined"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            helperText={formik.errors.email}
            error={formik.errors.email}
            fullWidth
          />
          <TextField
            margin="dense"
            id="outlined-error-helper-text"
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            helperText={formik.errors.password}
            error={formik.errors.password}
            fullWidth
          />
          <TextField
            margin="dense"
            id="outlined-error-helper-text"
            label="Confirm Password"
            type="password"
            variant="outlined"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            helperText={formik.errors.confirmPassword}
            error={formik.errors.confirmPassword}
            fullWidth
          />
        </div>
        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
        <Button type="button" color="primary" variant="outlined">
          Cancel
        </Button>
      </form>
    </div>
  );
}
