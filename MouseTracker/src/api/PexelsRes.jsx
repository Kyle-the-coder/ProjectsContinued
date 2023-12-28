import React, { useEffect } from "react";
import { createClient } from "pexels";
import axios from "axios";

const PexelsRes = () => {
  useEffect(() => {
    // Your Pexels API key
    const apiKey = "q2nVuHy0uK8zolsVcRON0rK5pdZ7qvd6Crqtk7MGReVXQdaHl4nBcLQl";

    // Create a Pexels client
    const pexelsClient = createClient(apiKey);

    // Make a request to the Pexels API
    const fetchData = async () => {
      try {
        const response = await pexelsClient.photos.random({
          query: "landscape",
          orientation: "landscape",
          per_page: 1,
        });
        console.log("Pexels API Response:", response);

        // Handle the response data here
      } catch (error) {
        console.error("Error fetching data from Pexels API:", error);
      }
    };

    fetchData();
  }, []); // Run the effect only once on component mount

  return <div>{/* Your component content */}</div>;
};

export default PexelsRes;
