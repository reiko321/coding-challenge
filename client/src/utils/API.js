import axios from "axios";

export default {
  // Gets all accounts
  getAccount: function() {
    return axios.get("/api/accounts");
  },
  // Gets the book with the given id
  getAccount: function(id) {
    return axios.get("/api/accounts/" + id);
  }
};
