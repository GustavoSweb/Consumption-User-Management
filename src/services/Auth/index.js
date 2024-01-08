import api from "../api";
import Cookie from "js-cookie";

class UserAuth {
  constructor() {
    this.token = Cookie.get("token");
  }
  async GetUser() {
    try {
      if (!this.token) throw new Error("Falta de parametros");
      const user = await api.post(`/user/me`, {
        Headers: { Authorization: `Bearer ${this.token}` },
      });
      return user;
    } catch (err) {
      return {};
    }
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
      next("/login");
    }
  }
}

export default new UserAuth();
