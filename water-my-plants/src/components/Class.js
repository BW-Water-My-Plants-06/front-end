import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Link, useParams, useHistory } from "react-router-dom";
import { deleteAClass } from "./actions/classes";
import { useDispatch } from "react-redux";
import DeleteClassModal from "./DeleteClassForm";


function Class({ singleClass }) {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const modalHandler = () => {
    setIsShowingModal(!isShowingModal);
  };

  if (!singleClass) return <div></div>;
  return (
    <div className="classBox">
      {isShowingModal && (
        <DeleteClassModal
          modalHandler={modalHandler}
          id={singleClass.classID}
        />
      )}
      <h3>Plant Name : {singleClass.name}</h3>
      <p>Duration : {singleClass.sunlightduration}</p>
      <p>Pot Size : {singleClass.pot}</p>
      <p>Nick Name: {singleClass.nickname}</p>
      <p>Species: {singleClass.species}</p>
      <p>H20 Frequency: {singleClass.h20Frequency}</p>

      <p>Soil: {singleClass.soil}</p>

      <p>Water :{singleClass.water}</p>
      <p>Drainage :{singleClass.drainage}</p>
      <Link to={`/classes/edit/${singleClass.classID}`}>
        <button> Edit Class</button>
      </Link>
      <button onClick={modalHandler}> Cancel Class</button>
    
    </div>
  );
}

export default Class;
