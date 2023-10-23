import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import isEmpty from "../../validation/isEmpty";
import { SetStateForBoolean } from "../../Types";

const URL = `https://maps.googleapis.com/maps/api/geocode/json`;
// Google API Key
const API_KEY = "AIzaSyDIHPE9jxZqzQIIxsfq3Tw23BYma7d0x38";

// Triggers Google API to get longitude and latitude from user's address
export const getLatitudeAndLongitudeFromAddress =
  (
    address: string,
    setIsLoading: SetStateForBoolean,
    setIsModalOpened: SetStateForBoolean,
    navigate: NavigateFunction
  ) =>
  () => {
    // trigger loading
    setIsLoading(true);
    // API call
    axios
      .get(`${URL}?address=${address}&key=${API_KEY}`)
      .then((response) => {
        const locationDetailsResponse = response.data.results;

        // Check if the response array is not empty
        if (!isEmpty(locationDetailsResponse)) {
          // Destructure out latitude and longitude from the response
          const { lat: latitude, lng: longitude } =
            locationDetailsResponse[0].geometry.location;
          // Navigate to events passing in the latitude and longitude as query parameters
          navigate(`/events?lat=${latitude}&lng=${longitude}`);
        } else {
          // This would be recognized as having no events data in the events page, the response being empty
          navigate(`/events`);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        // trigger stop loading
        setIsLoading(false);
        // Close location search modal
        setIsModalOpened(false);
      });
  };
