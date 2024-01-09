<template>
  <div
    :class="['relative','z-10', {'animate-modalEnter': isModal, 'animate-modalDone': !isModal}]"
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
          <div class="bg-white px-4 pb-4 pt-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start gap-3 mt-3">
              <div
                class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
              >
                <svg
                  class="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div class="lv:text-center sm:text-left">
                <h3
                  class="text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  Deletar Usuario !
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500 ">
                    Tem certeza que deseja deletar este usuario? não ira poder voltar esta ação !!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              class="btn btn-danger ml-3 mr-3"
              @click="confirmDelete"
            >
              Deletar
            </button>
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

export default {
  name: "Modal-Alert",
  created(){
    this.deleteUser = User.DeleteUser.bind(User)
  },
  methods: {
    ActiveModal: function () {
      this.isModal = false;
      this.$emit("onModalClick", "alter");
      setTimeout(()=>{
        this.isModal = true
      },1000)
    },
    confirmDelete:async function(){
      this.ActiveModal()
      await this.deleteUser(this.deleteId)
      this.$emit('onDeleteUser', 'true')
    }
  },
  data() {
    return {
      isModal: true,
    };
  },
  props:{
    deleteId:Number
  }
};
</script>
