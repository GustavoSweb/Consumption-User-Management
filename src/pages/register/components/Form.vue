<template>
  <div class="w-[98%] sm:w-[90%] md:w-[70%] lg:w-[40%]">
    <h1 class="text-4xl py-[50px]">Se cadastre na nossa plataforma</h1>
    <div class="flex flex-col w-[100%] gap-2">
      <label for="name">Nome:</label>
      <input
        type="text"
        name="name"
        class="form-control"
        v-model="name"
        placeholder="Digite seu nome..."
      />
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
      <label for="passwordConfirm">Comfirmar Senha:</label>
      <input
        type="password"
        class="form-control"
        v-model="passwordConfirm"
        name="passwordConfirm"
        placeholder="*********"
      />
      <button
        type="submit"
        class="mt-5 btn btn-primary max-w-[50%]"
        @click="CreateUser"
      >
        Cadastrar
      </button>
      {{ name }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Validation from "@/utils/Validation";
import NotValid from "@/utils/Erros/NotValid";

export default {
  name: "Form-User",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    CreateUser: async function () {
      try {
        await new Validation({
          name: this.name,
          password: this.password,
          email: this.email,
        }).Check();
        if (this.password != this.passwordConfirm)
          throw new NotValid("As senhas não concidem");
        await axios.post("http://localhost:8081/user", {
          name: this.name,
          password: this.password,
          email: this.email,
        });
        this.$router.push("/login");
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
