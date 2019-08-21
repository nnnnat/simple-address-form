import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Debug from "./FormDebug";

export default function AddressForm({ initalValues, locals, onSubmit, validationSchema }) {
  return (
    <Formik initialValues={initalValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field name="country">
                {({ field, form: { errors, touched } }) => (
                  <FormControl fullWidth variant="outlined" error={!!errors[field.name] && !!touched[field.name]}>
                    <InputLabel htmlFor={field.name}>Country</InputLabel>
                    <Select {...field} input={<OutlinedInput labelWidth={55} />}>
                      {locals.map((local) => (
                        <MenuItem key={local.code} value={local.code}>
                          {local.label}
                        </MenuItem>
                      ))}
                    </Select>
                    {!!errors[field.name] && !!touched[field.name] ? <FormHelperText>{errors[field.name]}</FormHelperText> : null}
                  </FormControl>
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              <Field name="name">
                {({ field, form: { errors, touched } }) => (
                  <TextField
                    {...field}
                    error={!!errors[field.name] && !!touched[field.name]}
                    helperText={!!errors[field.name] && !!touched[field.name] && errors[field.name]}
                    fullWidth
                    label="Name"
                    variant="outlined"
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              <Field name="address1">
                {({ field, form: { errors, touched } }) => (
                  <TextField
                    {...field}
                    error={!!errors[field.name] && touched[field.name]}
                    helperText={!!errors[field.name] && touched[field.name] && errors[field.name]}
                    fullWidth
                    label="Address"
                    variant="outlined"
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              <Field name="address2">{({ field }) => <TextField {...field} fullWidth label="Address Line 2 (Optional)" variant="outlined" />}</Field>
            </Grid>

            <Grid item xs={12}>
              <Field name="city">
                {({ field, form: { errors, touched } }) => (
                  <TextField
                    {...field}
                    error={!!errors[field.name] && touched[field.name]}
                    helperText={!!errors[field.name] && touched[field.name] && errors[field.name]}
                    fullWidth
                    label="City"
                    variant="outlined"
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field name="region">
                {({ field, form: { errors, touched } }) => (
                  <TextField
                    {...field}
                    error={!!errors[field.name] && touched[field.name]}
                    helperText={!!errors[field.name] && touched[field.name] && errors[field.name]}
                    fullWidth
                    label="Region"
                    variant="outlined"
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field name="postal">
                {({ field, form: { errors, touched } }) => (
                  <TextField
                    {...field}
                    error={!!errors[field.name] && touched[field.name]}
                    helperText={!!errors[field.name] && touched[field.name] && errors[field.name]}
                    fullWidth
                    label="Postal Code"
                    variant="outlined"
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              <Field name="phone">
                {({ field, form: { errors, touched } }) => (
                  <TextField
                    {...field}
                    error={!!errors[field.name] && touched[field.name]}
                    helperText={!!errors[field.name] && touched[field.name] && errors[field.name]}
                    fullWidth
                    label="Phone"
                    variant="outlined"
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                Submit
              </Button>
              <Button type="reset" variant="contained" color="secondary">
                Cancel
              </Button>
            </Grid>
          </Grid>
          <Debug />
        </Form>
      )}
    </Formik>
  );
}

AddressForm.propTypes = {
  initalValues: PropTypes.shape({
    country: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string,
    city: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    postal: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }),
  locals: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      labels: PropTypes.string.isRequired,
      regions: PropTypes.arrayOf(
        PropTypes.shape({
          code: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired
        })
      )
    })
  ),
  onSubmit: PropTypes.func,
  validationSchema: PropTypes.shape({
    country: PropTypes.func.isRequired,
    name: PropTypes.func.isRequired,
    address1: PropTypes.func.isRequired,
    city: PropTypes.func.isRequired,
    region: PropTypes.func.isRequired,
    postal: PropTypes.func.isRequired,
    phone: PropTypes.func.isRequired
  })
};

AddressForm.defaultProps = {
  initalValues: {
    country: "",
    name: "",
    address1: "",
    address2: "",
    city: "",
    region: "",
    postal: "",
    phone: ""
  },
  locals: [
    {
      code: "US",
      label: "United States",
      regions: [
        {
          code: "LA",
          label: "Louisiana"
        },
        {
          code: "OH",
          label: "Ohio"
        },
        {
          code: "UT",
          label: "Utah"
        }
      ]
    },
    {
      code: "DE",
      label: "Germany",
      regions: [
        {
          code: "BE",
          label: "Berlin"
        },
        {
          code: "HH",
          label: "Hamburg"
        },
        {
          code: "RP",
          label: "Rheinland-Pfalz"
        }
      ]
    },
    {
      code: "NG",
      label: "Nigeria"
    }
  ],
  onSubmit: (values) => {
    console.log("logging values", values);
  },
  validationSchema: Yup.object({
    country: Yup.string().required("Country is required"),
    name: Yup.string().required("Name is required"),
    address1: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    region: Yup.string().required("Region is required"),
    postal: Yup.string().required("Postal is required"),
    phone: Yup.string().required("Phone is required")
  })
};
