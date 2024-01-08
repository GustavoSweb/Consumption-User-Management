<template>
    <div class="flex justify-center w-[100%]">
      <Alert v-show="errMessage" :errMessage="errMessage" />
      <Form @onErr="setMessage($event)" />
    </div>
  </template>
  
  <script>
  import Form from './components/Form'
  import Alert from '@/components/Alert'
  import Cookie from 'js-cookie'
  export default {
      name:'Page-Login',
      components: {Form, Alert},
      created(){
        const token = Cookie.get('token')
        if(token) this.$router.push('/')
      },
      data(){
        return{
          errMessage:''
        }
      },
      methods:{
        setMessage:function($event){
          if(!this.errMessage){
            this.errMessage = $event}
        },
        timeOutShow:function(){
          if(this.errMessage){
            
          setTimeout(()=>{
            this.errMessage = ''
          }, 6000)
        }
        }
      },
      watch:{
        errMessage:'timeOutShow'
      }
  
  }
  </script>