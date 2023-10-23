import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import isEmpty from "../../validation/isEmpty";
import { SetErrorHandlerType, SetStateForBoolean } from "../../Types";
import { handleAPIError } from "../../utils/handleAPIError";
import { GET_ALL_EVENTS } from "../Constants";
import { AppDispatch } from "../../store";

const URL = `https://maps.googleapis.com/maps/api/geocode/json`;

// Triggers Google API to get longitude and latitude from user's address
export const getLatitudeAndLongitudeFromAddress =
  (
    address: string,
    setIsLoading: SetStateForBoolean,
    setIsModalOpened: SetStateForBoolean,
    setErrorHandlerObj: SetErrorHandlerType,
    navigate: NavigateFunction
  ) =>
  (dispatch: AppDispatch) => {
    // trigger loading
    setIsLoading(true);
    // API call
    axios
      .get(`${URL}?address=${address}&key=${import.meta.env.VITE_API_API_KEY}`)
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
        // Handles API error
        handleAPIError(error, setErrorHandlerObj);
      })
      .finally(() => {
        // Clear events data value
        dispatch({
          type: GET_ALL_EVENTS,
          payload: [],
        });
        // trigger stop loading
        setIsLoading(false);
        // Close location search modal
        setIsModalOpened(false);
      });
  };
