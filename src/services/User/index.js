import api from "../api";
import Cookie from "js-cookie";

class User {
  constructor() {
    this.token = Cookie.get("token")
    this.headers = {
      headers: {Authorization:`Bearer ${this.token}`}
    };
  }
  async EditUser({name, email, id}){
    try{
      await api.put(`/user/${id}`, {name, email}, this.headers)
    }catch(err){
      throw new Error(err.message)
    }
  }
  async GetById(id){
    const BASE_USER = {name:'', email:'', role:0}
    try {
      if (!this.token) throw new Error("Falta de parametros");
      const user = await api.get(`/user/${id}`, this.headers);
      if(user.data.lenght <= 0 ) return BASE_USER
      return user.data;
    } catch (err) {
      console.log(err)
      return BASE_USER
  }
}
  async GetUser() {
    try {
      if (!this.token) throw new Error("Falta de parametros");
      const user = await api.post(`/user/me`, this.headers);
      return user;
    } catch (err) {
      return {};
    }
  }
  async ListUsers() {
    try {
      if (!this.token) throw new Error("Falta de parametros");
      const user = await api.get(`/user`, this.headers);
      return user.data;
    } catch (err) {
      return [];
    }
  }
  async DeleteUser(id) {
    try {
      if (!this.token) throw new Error("Falta de parametros");
      await api.delete(`/user/${id}`, this.headers);
    } catch (err) {
      console.log(err)
    }
  }
}

export default new User();
