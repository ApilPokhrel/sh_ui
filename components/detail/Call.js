import Axios from "axios";
import { API_URL } from "../../config/Variables";

let Call = {
  getProduct: slug => {
    return Axios({
      method: "get",
      url: `${API_URL}/product/${slug}/slug`
    });
  },

  addReview: payload => {
    return Axios({
      method: "post",
      url: `${API_URL}/review/`,
      headers: { token: window.localStorage.getItem("token") },
      data: payload
    });
  },

  getReview: product => {
    return Axios({
      method: "get",
      url: `${API_URL}/review/product`,
      headers: { token: window.localStorage.getItem("token") },
      data: { product }
    });
  },

  removeReview: (id, status) => {
    return Axios({
      method: "patch",
      url: `${API_URL}/review/${id}`,
      headers: { token: window.localStorage.getItem("token") },
      data: { status }
    });
  },

  updateReview: (id, payload) => {
    return Axios({
      method: "patch",
      url: `${API_URL}/review/${id}`,
      headers: { token: window.localStorage.getItem("token") },
      data: payload
    });
  }
};

export default Call;
