import React from "react";
import { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "./FormsUI/TextField";
import Button from "./FormsUI/Button";
import { updateAClass } from "./actions/classes";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";

function EditClassForm() {
    const FORM_VALIDATION = Yup.object().shape({
        name: Yup.string().required("Required"),
        sunlightduration: Yup.string().required("Required"),
        pot: Yup.string().required("Required"),
        nickname: Yup.string().required("Required"),
        species: Yup.string().required("Required"),
        h20Frequency: Yup.number()
          .integer()
          .typeError("please enter an integer")
          .required("Required"),
        soil: Yup.string().required("Required"),
        water: Yup.string().required("Required"),
        drainage: Yup.string().required("Required"),
        indoor: Yup.string().required("Required"),
        outdoor: Yup.string().required("Required"),
      });
      const allClasses = useSelector((state) => state.classes);

      const history = useHistory();

  const { id } = useParams();
  console.log(id);
  const selectedClass = allClasses.find(
    (item) => item.classID.toString() === id
  );


  const dispatch = useDispatch();
  return (
    <Container maxWidth="sm" className="form">
    <Grid item xs={12}>
      <h1>Edit Plant</h1>
    </Grid>
    <Formik
      validationSchema={FORM_VALIDATION}
      initialValues={selectedClass}
      onSubmit={(values) => {

        dispatch(updateAClass(selectedClass.classID, values));
        history.push("/adding-new");

       
      }}
    >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField name="name" label="Plant Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="sunlightduration" label="Duration" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="pot" label="Pot Size" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="nickname" label="Nick Name" />
            </Grid>

            <Grid item xs={12}>
              <TextField name="species" label="Species" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="h20Frequency" label="H20Frequency" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="soil" label="Soil" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="water" label="Water" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="drainage" label="Drainage" />
            </Grid>

            <Grid item xs={6}>
              <TextField name="indoor" label="Indoor" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="outDoor" label="Outdoor" />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit">Submit Form</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default EditClassForm;