import React from "react";
import { Formik } from "formik";
import { Button, TextField } from "@material-ui/core";

export default function BasicForm() {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "", lastName: "", age: "", email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Firstname is required";
          }
          if (!values.lastName) {
            errors.lastName = "Lastname is required";
          }
          if (!values.age) {
            errors.age = "Age is required";
          }
          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="outlined-error-helper-text"
                label="First name"
                type="text"
                variant="outlined"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.firstName && touched.firstName && errors.firstName
                    ? errors.firstName
                    : ""
                }
                error={
                  errors.firstName && touched.firstName && errors.firstName
                    ? true
                    : false
                }
                fullWidth
              />

              <TextField
                margin="dense"
                id="outlined-error-helper-text"
                label="Last name"
                type="text"
                variant="outlined"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.lastName && touched.lastName && errors.lastName
                    ? errors.lastName
                    : ""
                }
                error={
                  errors.lastName && touched.lastName && errors.lastName
                    ? true
                    : false
                }
                fullWidth
              />
              <TextField
                margin="dense"
                id="outlined-error-helper-text"
                label="Age"
                type="number"
                variant="outlined"
                name="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.age && touched.age && errors.age ? errors.age : ""
                }
                error={errors.age && touched.age && errors.age ? true : false}
                fullWidth
              />
              <TextField
                margin="dense"
                id="outlined-error-helper-text"
                label="Email"
                type="email"
                variant="outlined"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.email && touched.email && errors.email
                    ? errors.email
                    : ""
                }
                error={
                  errors.email && touched.email && errors.email ? true : false
                }
                fullWidth
              />
            </div>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={isSubmitting}
            >
              Submit
            </Button>
            <Button type="button" color="primary" variant="outlined">
              Cancel
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
