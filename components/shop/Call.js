import Axios from "axios";
import { API_URL } from "../../config/Variables";

let Call = {
  list: (start, limit, filters, c) => {
    return Axios({
      method: "get",
      url: `${API_URL}/product/filter`,
      params: {
        limit,
        start,
        c,
        ...filters
      }
    });
  }
};

export default Call;
