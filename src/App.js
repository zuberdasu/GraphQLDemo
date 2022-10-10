import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [rocketData, setRocketData] = useState([]);
  const callApi = async () => {
    const result = await axios.post(`https://api.spacex.land/graphql/,query:`, {
      query: `{
                rockets {
                  height {
                    meters
                  }
                  country
                  name
                  description
              }}`,
    });
    console.log(result.data.data.rockets);
    setRocketData(result.data.data.rockets);
  };
  useEffect(() => {
    callApi();
  }, []);

  if (rocketData) {
    return rocketData.map((rocket) => {
      return (
        <>
          <h4> {`Name: ${rocket.name}`}</h4>
          <h4> {`Country: ${rocket.country}`}</h4>
          <h4> {`Description: ${rocket.description}`}</h4>
          <h4> {`Height: ${rocket.height.meters} meters`}</h4>
          <hr></hr>
        </>
      );
    });
  } else {
    return <p>Loading...</p>;
  }
};

export default App;
