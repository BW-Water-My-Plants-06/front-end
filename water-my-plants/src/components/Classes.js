import Class from "./Class";
import React, { useEffect } from "react";
import { fetchClasses } from "./actions/classes";
import { Grid, CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CreateClassForm from "./CreateClassForm";

function Classes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClasses());
  }, []);

  const allClasses = useSelector((state) => state.classes);
  console.log(allClasses);
  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <h1>All Plants</h1>
        {!allClasses.length ? (
          <CircularProgress />
        ) : (
          <div>
            {allClasses.map((item, index) => {
              return <Class singleClass={item} key={index} />;
            })}
          </div>
        )}
      </Grid>
      <Grid item xs={5}>
        <CreateClassForm />
      </Grid>
    </Grid>
  );
}

export default Classes;
