<template>
<div class="login">
    <div class="card w-96">
      <div class="head">
        <div class="img flex justify-center pb-5">
          <img src="@/assets/Digital.png" alt="" style="width:50%" >
        </div>
        <div class="body px-10 pb-28">
          <!-- <form action=""> -->
            <div class="pb-5">
              <div class="pb-2">
                <label for="" class="font-semibold text-gray-700">ອີເມລ: </label>
              </div>
              <div class="">
                <input v-model="Email" type="email" class="w-full h-8 bg-gray-200 border-none rounded-md required:border-red-500" 
                 placeholder="ປ້ອນອີເມລ" 
                :class="v$.Email.$error === true ? 'text-fields-error' : 'text-fields'" />
                <!-- required -->
                  <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                  v-for="error of v$.Email.$errors" :key="error.$uid" class="">
                    <!-- {{ error.$message }} -->
                    {{user}}
                  </p>
                <!-- end required -->
              </div>
            </div>
            <div class="">
              <div class="pb-2">
                <label for="" class="font-semibold text-gray-700">ລະຫັດຜ່ານ</label>
              </div>
              <div class="pb-1">
                <input v-model="Password" type="password" class="w-full h-8 bg-gray-200 border-none rounded-md required:border-red-500" 
                 placeholder="**********" 
                :class="v$.Password.$error === true ? 'text-fields-error' : 'text-fields'" />
                <!-- required -->
                  <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                  v-for="error of v$.Password.$errors" :key="error.$uid" class="">
                    <!-- {{ error.$message }} -->
                    {{pass}}
                  </p>
                <!-- end required -->
              </div>
              <input type="checkbox" class="rounded checkbox" name="" id="1" /> <label for="1" class="font-semibold text-gray-700">ຈຳຂ້ອຍໄວ້</label>
            </div>
            <div class="">
              <div class="pt-12">
                <!--  -->
              </div>
            </div>
            <div class="">
              <!-- <router-link to="/home"> -->
                <button type="" @click="login" class="w-full bg-sky-400 h-8 text-white rounded-md">ລ໋ອກອິນ</button>
              <!-- </router-link> -->
            </div>
          <!-- </form> -->
        </div>
      </div>
    </div>

          <div class="text_alert" >
            <div class="p-2">
              <a-alert message="Info Text" type="error" close-text="Close Now" style="height: 60px; color: brown;" />
            </div>
          </div>

  </div>
  </template>
  <script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email} from '@vuelidate/validators'
import axios from 'axios'
import router from '@/router'
// import { response } from 'express'
// import { ref } from 'vue'
/* eslint-disable */
export default {

  data () {
    return {
        Email: '',
        Password: '',

        user:'ກາລຸນາປ້ອນອືເມລຜູ້ໃຊ້ກ່ອນ...!',
        pass:'ກາລຸນາປ້ອນລະຫັດຢ່າງນ້ອຍ 4 ຕົວ...!',
        v$: useVuelidate(),
        chack:null
        
    }
  },
  validations () {
    return {
      Email: { required, email }, // Matches this.Email
      Password: { required, minLength: minLength(4)}, // Matches this.password
    }
  },
    methods: {
      async login(){
      
        this.v$.$touch();
        if(this.v$.Password.$errors == false && this.v$.Email.$errors == false ){
        
          let formData = new FormData();
          formData.append('email',this.Email);
          formData.append('password',this.Password);
      
       
          await axios.post('login', formData).then(response=>{
              if(response.data.status){
                localStorage.setItem('token',response.data.token)
                console.log(response.data.token);
                router.push({name:"home"});
              }
            }).catch(error=>{
              alert('ຂ້ມູນບໍຖືກຕ້ອງ')
              console.log(error);
              })
        }
      }
    }
}
  </script>
  
  <style lang="scss" scoped>
    *{
      font-family: "Noto Sans Lao";
    }
  .login{
    background-size: 100%;
    background-position: fixed;
    padding: 0;
    margin: 0;
    background-image: url("@/assets/bg_inviocs.jpg");
  }
  .login{
    display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
  }
  .card{
    background-color: #fff;
    box-shadow: 8px 10px 10px 5px rgba(34, 34, 34, 0.05);
  }
  .text-fields-error{
    border:solid 1px #f00;
    width: 100%;
  }
  .text-fields-error::placeholder{
    color: #d44;
  }
  .text_alert{
      position: absolute;
      right: 10px;
      top: 10px;
      width: 400px;
  }
  </style>
