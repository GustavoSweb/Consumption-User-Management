import api from "../api";
import Cookie from "js-cookie";

class UserAuth {
  constructor() {
    this.token = Cookie.get("token");
  }
  
  async ValidateAdmin(to, from, next) {
    try {
      if (!this.token) throw Error("Falta de parametros");
      await api.post(
        `/checkadmin`,
        {},
        { headers: { Authorization: `Bearer ${this.token}` } }
      );
      next();
    } catch (err) {
      console.log(this.token)
      next("/login");
    }
  }
}

export default new UserAuth();
