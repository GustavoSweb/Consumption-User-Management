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
                <td class="flex gap-3"><button class="btn btn-warning" @click="ActiveModalEdit(user.id)">Editar</button><button class="btn btn-danger" @click="ActiveModalDelete(user.id)">Deletar</button></td>
              </tr>
            </tbody>
          </table>
        
    </div>
    <ModalAlert :deleteId="deleteId" v-show="onModalDelete" :onModal="onModalDelete" @onDeleteUser="updateList" @onModalClick="ActiveModalDelete"/>
    <ModalEdit :userId="userId" v-show="onModalEdit" :onModal="onModalEdit" @onEditUser="updateList" @onModalClick="ActiveModalEdit"/>
  </div>
  </div>
</template>

<script>
import User from "@/services/User/index";
import ModalAlert from "./components/ModalAlertDelete";
import ModalEdit from "./components/ModalEdit";

export default {
  name: "List-Users",
  async created() {
    this.users = await User.ListUsers();
  },
  components:{ModalAlert, ModalEdit},
  data() {
    return {
      users: [],
      onModalDelete: false,
      onModalEdit: false,
      deleteId: 0,
      userId: 0,
    };
  },
  methods:{
    intToText: function(value){
        var msg = value >= 2 ? 'admin' : 'user'
        return msg
    },
    ActiveModalDelete: function(id){
      if(!isNaN(id)) this.userId = id
      if(this.onModalDelete) return setTimeout(()=>{this.onModalDelete = false}, 1000) 
      this.onModalDelete = true
    },
    ActiveModalEdit: function(id){
      if(!isNaN(id)) this.userId = id
      
      console.log(this.userId)
      if(this.onModalEdit) return setTimeout(()=>{this.onModalEdit = false}, 1000) 
      this.onModalEdit = true
    },
    updateList: async function(){
      try{
        this.users = await User.ListUsers()
      console.log(this.users)
      }catch(err){
        console.log(err)
      }
    }
  }
};
</script>