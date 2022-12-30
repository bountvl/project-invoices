<template>
<div class="login">
    <div class="card w-96">
      <div class="head">
        <div class="img flex justify-center pb-5">
          <img src="@/assets/Digital.png" alt="" style="width:50%" >
        </div>
        <div class="body px-10 pb-28">
          <form action="">
            <div class="pb-5">
              <div class="pb-2">
                <label for="" class="font-semibold text-gray-700">ຊື່ຜູ້ນຳໃຊ້</label>
              </div>
              <div class="">
                <input v-model="UserName" type="text" class="w-full h-8 bg-gray-200 border-none rounded-md required:border-red-500" 
                 placeholder="ຊື່ຜູ້ນຳໃຊ້" 
                :class="v$.UserName.$error === true ? 'text-fields-error' : 'text-fields'" />
                <!-- required -->
                  <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                  v-for="error of v$.UserName.$errors" :key="error.$uid" class="">
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
            <div class="pt-12">
              <button type="submit" @click="submit" class="w-full bg-sky-400 h-8 text-white rounded-md">ລ໋ອກອິນ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </template>
  <script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength} from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      UserName: '',
      Password: '',
        user:'ກາລຸນາປ້ອນຊື່ຜູ້ໃຊ້ກ່ອນ...!',
        pass:'ກາລຸນາປ້ອນລະຫັດຢ່າງນ້ອຍ 6 ຕົວ...!'
    }
  },
  validations () {
    return {
      UserName: { required }, // Matches this.UserName
      Password: { required, minLength: minLength(6)}, // Matches this.password
    }
  },
    methods: {
      submit(){
        this.v$.$touch();
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
  </style>
