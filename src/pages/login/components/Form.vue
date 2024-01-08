<template>
    <div class="w-[98%] sm:w-[90%] md:w-[70%] lg:w-[40%]">
      <h1 class="text-4xl py-[50px]">Login</h1>
      <div class="flex flex-col w-[100%] gap-2">
        <label for="email">Email:</label>
        <input
          type="text"
          name="email"
          class="form-control"
          v-model="email"
          placeholder="Digite seu email..."
        />
        <label for="password">Senha:</label>
        <input
          type="password"
          name="password"
          class="form-control"
          v-model="password"
          placeholder="*********"
        />
        <button
          type="submit"
          class="mt-5 btn btn-primary max-w-[50%]"
          @click="Login"
        >
          Login
        </button>
        {{ name }}
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import Validation from "@/utils/Validation";
  import NotValid from "@/utils/Erros/NotValid";
  import Cookie from 'js-cookie'
  
  export default {
    name: "Form-User",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      Login: async function () {
        try {
          await new Validation({
            password: this.password,
            email: this.email,
          }).Check();
          const res = await axios.post("http://localhost:8081/login", {
            password: this.password,
            email: this.email,
          });
          if(!res.data.token) throw new NotValid('Tente novamente')
          await Cookie.set('token', res.data.token, { expires: 3 })
          this.$router.push("/");
        } catch (err) {
          if (err.form) this.$emit("onErr", err.message);
          const RES_API_ERROR =
            err.response && err.response.data && err.response.data.err
              ? err.response.data.err
              : false;
          if (RES_API_ERROR) this.$emit("onErr", RES_API_ERROR);
        }
      },
    },
  };
  </script>
  