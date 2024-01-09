 <template>
  <div class="w-[100%] pt-10 flex justify-center">
    <div class="w-[90%] md:w-[80%] lg:w-[70%]">
        <h1 class="py-4">Lista de usuarios</h1>
        <div class="w-full">
          <table class="table w-[100%]">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Role</th>
                <th scope="col">Email</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody v-for="user in users" :key="user.id">
              <tr >
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.name }}</td>
                <td>{{ intToText(user.role) }}</td>
                <td>{{ user.email }}</td>
                <td class="flex gap-3"><button class="btn btn-warning">Editar</button><button class="btn btn-danger">Deletar</button></td>
              </tr>
            </tbody>
          </table>
        
    </div>
    <button @click="ActiveModal"  class="btn btn-primary">Modal</button>
    <ModalAlert v-show="onModal" :onModal="onModal" @onModalClick="ActiveModal"/>
  </div>
  </div>
</template>

<script>
import User from "@/services/User/index";
import ModalAlert from "./components/ModalAlert";

export default {
  name: "List-Users",
  async created() {
    this.users = await User.ListUsers();
  },
  components:{ModalAlert},
  data() {
    return {
      users: [],
      onModal: false
    };
  },
  methods:{
    intToText: function(value){
        var msg = value >= 2 ? 'admin' : 'user'
        return msg
    },
    ActiveModal: function(){
      if(this.onModal) return setTimeout(()=>{this.onModal = false}, 1000) 
      this.onModal = true
      console.log(this.onModal)
    }
  }
};
</script>