<template>
  <div class="flex justify-center w-[100%]">
    <Alert v-show="errMessage" :errMessage="errMessage" />
    <Form @onErr="setMessage($event)" />
  </div>
</template>

<script>
import Form from './components/Form'
import Alert from './components/Alert'
export default {
    name:'Page-Register',
    components: {Form, Alert},
    data(){
      return{
        errMessage:false
      }
    },
    methods:{
      setMessage:function($event){
        if(!this.errMessage){
          console.log('teste') 
          this.errMessage = $event}
      },
      timeOutShow:function(){
        if(this.errMessage){
          
        setTimeout(()=>{
          this.errMessage = false
        }, 8000)
      }
      }
    },
    watch:{
      errMessage:'timeOutShow'
    }

}
</script>