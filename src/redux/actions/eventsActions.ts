import axios from "axios";
import { SetErrorHandlerType, SetStateForBoolean } from "../../Types";
import { handleAPIError } from "../../utils/handleAPIError";
import { AppDispatch } from "../../store";
import { GET_ALL_EVENTS } from "../Constants";

const URL = `https://my.api.mockaroo.com/events.json?key=a4f06f90`;

// Triggers Google API to get longitude and latitude from user's address
export const getEventsBasedOnLocationDetails =
  (setIsLoading: SetStateForBoolean, setErrorHandlerObj: SetErrorHandlerType) =>
  (dispatch: AppDispatch) => {
    // trigger loading
    setIsLoading(true);
    // API call
    axios
      .get(`${URL}`)
      .then((response) => {
        dispatch({
          type: GET_ALL_EVENTS,
          payload: response.data,
        });
      })
      .catch((error) => {
        // Handles API error
        handleAPIError(error, setErrorHandlerObj);
      })
      .finally(() => {
        // trigger stop loading
        setIsLoading(false);
      });
  };
