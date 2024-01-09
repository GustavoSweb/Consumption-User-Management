<template>
  <div
    :class="[
      'relative',
      'z-10',
      { 'animate-modalEnter': isModal, 'animate-modalDone': !isModal },
    ]"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          :class="[
            'relative',
            'transform',
            'overflow-hidden',
            'rounded-lg',
            'bg-white',
            'text-left',
            'shadow-xl',
            'transition-all',
            'sm:my-8',
            'sm:w-full',
            'sm:max-w-lg',
            { 'animate-cardEnter': isModal, 'animate-cardDone': !isModal },
          ]"
        >
          <div class="bg-white px-4 pb-4 pt-4 sm:p-6 w-[100%] sm:pb-4 ">
            <div class="sm:flex sm:items-start gap-3 mt-3 w-[100%]">
              <div class="lv:text-center sm:text-left w-[100%]">
                <h3>
                    Edição de Usuario
                </h3>
                <label for="name">Nome:</label>
                <input type="text" name="name" class="form-control max-w-[80%] w-[300px]" v-model="data.name"/>
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="data.email" class="max-w-[80%] w-[300px] form-control"/>
                
                
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-3">
            <button class="btn btn-warning"  @click="comfirmEdit">Salvar</button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="ActiveModal"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import User from '@/services/User/index'
import Validation from '@/utils/Validation';

export default {
  name: "Modal-Alert",
  async created(){
    this.editUser = User.EditUser.bind(User)
    this.getUser = User.GetById.bind(User)
    
  },
  methods: {
    ActiveModal: function () {
      this.isModal = false;
      this.$emit("onModalClick", "alter");
      setTimeout(()=>{
        this.isModal = true
      },1000)
    },
    comfirmEdit:async function(){
      try{
        const DATA_SAVE = {name:this.data.name, email: this.data.email, id:this.userId}
        new Validation(DATA_SAVE).Check()
        this.ActiveModal()

        await this.editUser(DATA_SAVE)
        this.$emit('onEditUser', 'true')
      }catch(err){
        console.log(err)
        return 
      }
    },
    updateForm:async function(){
        try{
            const data = await this.getUser(this.userId)
            console.log('teste',data)
            this.data = data
        }catch(err){
            console.log(err)
        }
    }
  },
  data() {
    return {
      isModal: true,
      data: {name:'', email:''}
    };
  },
  props:{
    userId:Number
  },
  watch:{
    userId(newQuestion){
        if(!isNaN(newQuestion) && newQuestion > 0) this.updateForm()
    }
  }
};
</script>
