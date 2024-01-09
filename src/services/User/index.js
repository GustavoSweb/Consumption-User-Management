import api from "../api";
import Cookie from "js-cookie";

class User {
  constructor() {
    this.token = Cookie.get("token");
  }
  async GetUser() {
    try {
      if (!this.token) throw new Error("Falta de parametros");
      const user = await api.post(`/user/me`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });
      return user;
    } catch (err) {
      return {};
    }
  }
  async ListUsers() {
    try {
      if (!this.token) throw new Error("Falta de parametros");
      const user = await api.get(`/user`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });
      return user.data;
    } catch (err) {
      return [];
    }
  }

}

export default new User();
