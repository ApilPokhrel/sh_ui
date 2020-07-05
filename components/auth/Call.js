import Axios from "axios";
import { API_URL } from "../../config/Variables";

let Call = {
  login: data => {
    return Axios({
      method: "post",
      url: `${API_URL}/user/login`,
      data
    });
  },

  sendCode: () => {
    return Axios({
      method: "get",
      url: `${API_URL}/user/code`,
      data
    });
  },

  verify: code => {
    return Axios({
      method: "post",
      url: `${API_URL}/user/code`,
      data: { code }
    });
  },

  register: data => {
    return Axios({
      method: "post",
      url: `${API_URL}/user/register`,
      data
    });
  }
};

export default Call;
