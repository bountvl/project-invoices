<template>
    <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0  z-[55] hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                    <div class="relative w-full h-full max-w-md md:h-auto">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-2xl shadow dark:bg-gray-700">
                            <button type="button" class="absolute top-3 right-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="bg py-4 rounded-t-xl">
                                <h3 class="text-3xl text-center font-medium text-gray-900">ສະໝັກຜູ້ໃຊ້ລະບົບ</h3>
                            </div>
                            
                            <div class="px-6 pt-2 pb-6">
                                    <div class="text-center text-red-700 text-lg" >
                                        {{ AddError }}
                                    </div>
                                
                                <form class="space-y-3" action="#">
                                    <div>
                                        <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ຊື່ຜູ້ໃຊ້ </label>
                                        <input type="text" name="name" id="name" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="........." 
                                            v-model="name" :class="v$.name.$error === true ? 'text-fields-error' : 'text-fields'" />
                                            <!-- required -->
                                            <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                                            v-for="error of v$.name.$errors" :key="error.$uid">
                                                <!-- {{ error.$message }} -->
                                                ກາລຸນາປ້ອນຊື່ຜູ້ໃຊ້
                                            </p>
                                            <!-- end required -->
                                    </div>
                                    <div>
                                        <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ອີເມລ </label>
                                        <input type="email" name="email" id="email" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="........." 
                                            v-model="email" :class="v$.email.$error === true ? 'text-fields-error' : 'text-fields'" />
                                            <!-- required -->
                                            <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                                            v-for="error of v$.email.$errors" :key="error.$uid">
                                                <!-- {{ error.$message }} -->
                                                ກາລຸນາປ້ອນອິເມລ
                                            </p>
                                            <!-- end required -->
                                    </div>
                                    <div>
                                        <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ເບີໂທ </label>
                                        <input type="text" name="tel" id="tel" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="........." 
                                            v-model="tel" :class="v$.tel.$error === true ? 'text-fields-error' : 'text-fields'" />
                                            <!-- required -->
                                            <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                                            v-for="error of v$.tel.$errors" :key="error.$uid">
                                                <!-- {{ error.$message }} -->
                                                ກາລຸນາປ້ອນໝາຍເລກໂທລະສັບ
                                            </p>
                                            <!-- end required -->
                                    </div>
                                    <div>
                                        <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ລະຫັດຜ່ານ </label>
                                        <input type="password" name="password" id="password" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="........." 
                                            v-model="password" :class="v$.password.$error === true ? 'text-fields-error' : 'text-fields'" />
                                            <!-- required -->
                                            <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                                            v-for="error of v$.password.$errors" :key="error.$uid">
                                                <!-- {{ error.$message }} -->
                                                ກາລຸນາປ້ອນລະຫັດຜ່ານ.
                                            </p>
                                            <!-- end required -->
                                    </div>
                                    <div>
                                        <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ລະຫັດຢືນຢັນ </label>
                                        <input type="text" name="c_password" id="c_password" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="........." 
                                            v-model="c_password" :class="v$.c_password.$error === true ? 'text-fields-error' : 'text-fields'" />
                                            <!-- required -->
                                            <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                                            v-for="error of v$.c_password.$errors" :key="error.$uid">
                                                <!-- {{ error.$message }} -->
                                                ກາລຸນາປ້ອນລະຫັດຢືນຢັນ ແລະ ປ້ອນໃຫ້ຖືກກັບລະຫັດຜ່ານ
                                            </p>
                                            <!-- end required -->
                                    </div>

                                    <div class="button flex gap-4 justify-center py-2">
                                        <button type="button" @click="submit" class="text-white bg-sky-500/75 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-9 py-2 text-center ">ບັນທືກ</button>
                                        <button type="button"  @click="reset" class="text-sky-500/75 hover:bg-gray-300 focus:ring-4 focus:outline-sky-500 border focus:ring-blue-300 font-medium rounded-lg px-9 py-2 text-center ">ຍົກເລີກ</button>
                                    </div>
                                    <!-- <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                    </div> -->
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
<div class="alertSuccess">
    <a-alert
    v-if="visible"
    message="ບັນທືກບໍ່ສຳເລັດ ກວດຄືນອີເມລຂອງທ່ານອືກຄັ້ງ! "
    type="error"
    closable
    banner
    :after-close="handleClose"
    :style="{fontSize:'18px',backgroundColor:'rgb(255, 170, 170, 0.6)', 
    padding:'20px 30px 20px 10px', fontWeight: '400'}"
  />
</div>

</template>
<script>
// import router from '@/router'
import { useVuelidate } from '@vuelidate/core'
import { required,  minLength, email,sameAs} from '@vuelidate/validators'
import axios from 'axios'
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref(false);

    const handleClose = () => {
      visible.value = false;
    };

    return {
    v$: useVuelidate(),
      visible,
      handleClose,
    };
  },
data(){
return{
    renderComponent: true,

   name: null,
   tel: null,
   email: null,
   password: null,
   c_password: null,
   AddError: null
}
},
validations () {
return {
    name: {required},
    tel: {required, minLength: minLength(7)},
    email: { required, email},
    password: {required, minLength: minLength(4)},
    c_password: { required, sameAspassword: sameAs(this.password)}
}
},
methods: {

    async submit(){
      this.v$.$touch();
      if(this.v$.password.$errors == false && this.v$.c_password.$errors == false && this.v$.email.$errors == false  && this.v$.name.$errors == false  && this.v$.tel.$errors == false ){
      
        let formData = new FormData();
        formData.append('name',this.name);
        formData.append('email',this.email);
        formData.append('tel',this.tel);
        formData.append('password',this.password);
        formData.append('c_password', this.c_password);
     
        await axios.post('register', formData).then(response=>{
              console.log(response.data.success, 'ok success');
                window.location.reload();
          }).catch(error=>{
            console.log(error);
            this.visible= true;
            this.AddError='ສະໝັກຜູ້ໃຊ້ລົ້ມເຫຼວ !'
            })
      }
    },
    async forceRerender() {
      // Remove MyComponent from the DOM
      this.renderComponent = false;

			// Wait for the change to get flushed to the DOM
      await this.$nextTick();

      // Add the component back in
      this.renderComponent = true;
    },
  reset(){
    this.name = null;
    this.tel = null;
    this.email = null;
    this.password = null;
    this.c_password = null;
    this.AddError= null;
  }
}
})
</script>
<style lang="scss" scoped>
.text-fields-error{
border:solid 1px #f00;
width: 100%;
}
.text-fields-error::placeholder{
color: #d44;
}
*{
    font-family: "Noto Sans Lao";
  }
.bg{
    background-color:  #329EE0;
    outline: 0;
    border: 0;
}
h3{
    color: #fff;
}
.border{
    border: solid 1px rgb(14 165 233) ;
}
.alertSuccess{
      position: fixed;
      right: 10px;
      top: 70px;
      width: auto;
      z-index: 50;
      margin: 10px;
  }
</style>