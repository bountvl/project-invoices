<template>
        <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-[55] hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                        <div class="relative w-full h-full max-w-md md:h-auto">
                            <!-- Modal content -->
                            <div class="relative bg-white rounded-2xl shadow dark:bg-gray-700">
                                <button type="button" class="absolute top-3 right-2.5 text-red-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                <div class="bg py-4 rounded-t-xl">
                                    <h3 class="text-3xl text-center font-medium text-gray-900 dark:text-white">ບັນທືກຂໍ້ມູນລູກຄ້າ</h3>
                                </div>
                                <div class="px-6 pt-2 pb-6">
                                    
                                    <form class="space-y-3" action="#">
                                        <div>
                                            <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ຊື່ບໍລິສັດ</label>
                                            <input type="text" name="conpany" id="conpany" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                                placeholder="........." 
                                                v-model="CompanyName" :class="v$.CompanyName.$error === true ? 'text-fields-error' : 'text-fields'" />
                                                <!-- required -->
                                                <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                                                v-for="error of v$.CompanyName.$errors" :key="error.$uid">
                                                    <!-- {{ error.$message }} -->
                                                    ກາລຸນາປ້ອນຊື່ບໍລິສັດກ່ອນ
                                                </p>
                                                <!-- end required -->
                                        </div>
                                        <div class="">
                                            <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ໂລໂກ້</label>
                                            <div class="flex items-center space-x-6 bg-gray-200 rounded-lg">
                                                <div class="shrink-0  rounded-full"> 
                                                    <img class="h-20 w-20 object-cover rounded-full text-red-700 flex alt:items-center" v-bind:src="imagePreview" alt="&nbsp;" />
                                                </div>
                                                <label class="block">
                                                    <span class="sr-only">Choose profile photo</span>
                                                    <input type="file" class="block w-full text-sm text-slate-500
                                                    file:mr-4 file:py-2 file:px-4
                                                    file:rounded-full file:border-0
                                                    file:text-sm file:font-semibold
                                                    file:bg-violet-50 file:text-violet-700
                                                    hover:file:bg-violet-100
                                                    " 
                                                    @change="onFileChange" />
                                                </label>
                                            </div>
                                                <!-- required -->
                                                <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                                                v-for="error of v$.ImgLogo.$errors" :key="error.$uid">
                                                    <!-- {{ error.$message }} -->
                                                    ເລືອກຮູບພາບ
                                                </p>
                                                <!-- end required -->
                                        </div>
                                        <div>
                                            <label for="number" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ເບີໂທ</label>
                                            <input type="text" name="" id="" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="........."
                                                v-model="Tel" :class="v$.Tel.$error === true ? 'text-fields-error' : 'text-fields'" />
                                                <!-- required -->
                                                <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                                                v-for="error of v$.Tel.$errors" :key="error.$uid">
                                                    <!-- {{ error.$message }} -->
                                                    ປ້ອນໝາຍເລກໂທລະສັບ ຢ່າງນ້ອຍ 7 ຕົວ
                                                </p>
                                                <!-- end required -->
                                        </div>
                                        <div>
                                            <label for="email" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ອີເມວ</label>
                                            <input type="email" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                            block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="........." 
                                                v-model="Email" :class="v$.Email.$error === true ? 'text-fields-error' : 'text-fields'" />
                                                <!-- required -->
                                                <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                                                v-for="error of v$.Email.$errors" :key="error.$uid">
                                                    <!-- {{ error.$message }} -->
                                                    ປ້ອນອີເມວ ...@gmail.com
                                                </p>
                                                <!-- end required -->
                                        </div>
                                        <div>
                                            <label for="addraces" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ທີ່ຢຸ່ບໍລິສັດ</label>
                                            <input type="text" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="........." 
                                                v-model="Addraces" :class="v$.Addraces.$error === true ? 'text-fields-error' : 'text-fields'" />
                                                <!-- required -->
                                                <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                                                v-for="error of v$.Addraces.$errors" :key="error.$uid">
                                                    <!-- {{ error.$message }} -->
                                                    ກາລຸນາປ້ອນທີ່ຢູ່ຂອງບໍລິສັດ ບ້ານ/ເມືອງ/ແຂວງ
                                                </p>
                                                <!-- end required -->
                                        </div>
                                        <div class="button flex gap-4 justify-center py-2">
                                            <button type="button"  @click="submit" class="text-white bg-sky-500/75 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-9 py-2 text-center ">ບັນທືກ</button>
                                            <button type="reset" class="text-sky-500/75 hover:bg-gray-300 focus:ring-4 focus:outline-sky-500 border focus:ring-blue-300 font-medium rounded-lg px-9 py-2 text-center ">ຍົກເລີກ</button>
                                        </div>
                                        <!-- <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                            Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                        </div> -->
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 

</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email} from '@vuelidate/validators'
import axios from 'axios'
export default{
    setup () {
    return { v$: useVuelidate() }
  },
  data(){
    return{
        CompanyName:'',
        ImgLogo: null,
        Tel:'',
        Email:'',
        Addraces:'',
        imagePreview: null,
        Img:null
    }
  },
  validations () {
    return {
        CompanyName: { required }, 
        Tel: { required, minLength: minLength(7)}, // 
        Email: {required, email},
        Addraces: {required},
        ImgLogo: {required}
    }
  },
    methods: {
        onFileChange(event){
            this.Img = event.target.files[0];
            this.ImgLogo = event.target.files[0];
            console.log(this.Img);
            console.log(this.ImgLogo);
            let reader  = new FileReader();
            reader.addEventListener("load", function () {

                // this.showPreview = true;
                this.imagePreview = reader.result;

            }.bind(this), false);

            if(this.Img){
                if ( /\.(jpe?g|png|gif)$/i.test( this.Img.name ) ) {
                    console.log("here");
                    reader.readAsDataURL( this.Img );

                }
            }
        },
        async submit(){
        this.v$.$touch();
        if(this.v$.CompanyName.$errors == false && this.v$.Tel.$errors == false && this.v$.Email.$errors == false && 
            this.v$.Addraces.$errors == false && this.v$.ImgLogo.$errors == false){
 
            let formData = new FormData();
            formData.append('company_name',this.CompanyName);
            formData.append('phone',this.Tel);
            formData.append('email',this.Email);
            formData.append('logo',this.ImgLogo);
            formData.append('address', this.Addraces);

            await axios.post('customer', formData).then(response=>{
              console.log(response.data, 'ok');
                window.location.reload();
          }).catch(error=>{
            console.log(error);
            // this.visible= true;
            // this.AddError='ສະໝັກຜູ້ໃຊ້ລົ້ມເຫຼວ !'
            })
        }

      }
    }
 }
</script>
<style lang="scss" scoped>
  .text-fields-error{
    border:solid 1px #f00;
    width: 100%;
  }
  .text-fields-error::placeholder{
    color: #d44;
  }
.bg{
    background-color:  #329EE0;
    outline: 0;
    border: 0;
}
h3{
    color: #fff;
}
</style>