import React, { useState, useEffect } from "react";
import axios from "axios";

const HelperFunc = () => {
  const [resultData, setResultData] = useState([]);
  const fetchObservationResults = async () => {
    const { data } = await axios.get(
      "https://api.inaturalist.org/v1/observations"
    );
    setResultData(data.results);
  };

  useEffect(() => {
    fetchObservationResults();
  }, []);

  return resultData;
};

export default HelperFunc;
