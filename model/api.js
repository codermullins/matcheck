import { Axios } from "axios";
import { setData } from "./reducer";

const MongoUrl = "http://192.168.1.68:4000/schools/getSchool";

export const fetchData = () => async (dispatch) => {
  try {
    const response = await await fetch(MongoUrl);
    dispatch(setData(response.schools));
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
