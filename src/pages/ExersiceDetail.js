import React, { useEffect, useState } from "react";
import { useParms } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExersiceDetail = () => {
  return (
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExersiceDetail;
