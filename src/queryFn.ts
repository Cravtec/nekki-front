import axios from "axios";
import { QueryFunction } from "react-query";


export const queryFn: QueryFunction = async () => {
    // In a production setting the host would be remplaced by an environment variable
    const { data } = await axios.get(`http://localhost:8000`);
    return data;
  };