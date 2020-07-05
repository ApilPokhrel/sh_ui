import Axios from "axios";
import { API_URL } from "../../config/Variables";

let Call = {
  add: payload => {
    return Axios({
      method: "post",
      url: `${API_URL}/contact/`,
      headers: { token: window.localStorage.getItem("token") },
      data: payload
    });
  }
};

export default Call;
