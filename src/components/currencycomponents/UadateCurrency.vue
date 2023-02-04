<template>
    <div id="authentication-modal1" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                    <div class="relative w-full h-full max-w-md md:h-auto">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-2xl shadow dark:bg-gray-700">
                            <button type="button" class="absolute top-3 right-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal1">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="bg py-4 rounded-t-xl">
                                <h3 class="text-3xl text-center font-medium text-gray-900">djldfjdlfjdljl</h3>
                            </div>
                            <div class="px-6 pt-2 pb-6">
                                
                                <form class="space-y-3" action="#">
                                    <div>
                                        <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ສະກຸນເງີນ</label>
                                        <input type="text" name="currency" id="currency" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="........." 
                                            v-model="Currency" :class="v$.Currency.$error === true ? 'text-fields-error' : 'text-fields'" />
                                            <!-- required -->
                                            <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                                            v-for="error of v$.Currency.$errors" :key="error.$uid">
                                                <!-- {{ error.$message }} -->
                                                ກາລຸນາປ້ອນສະກຸນເງິນ
                                            </p>
                                            <!-- end required -->
                                    </div>
                                    <div>
                                        <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ສັນຍະລັກ</label>
                                        <input type="text" name="Symbol" id="Symbol" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder=" USD / LAK / THB, ..." 
                                            v-model="Symbol" :class="v$.Symbol.$error === true ? 'text-fields-error' : 'text-fields'" />
                                            <!-- required -->
                                            <p style="color:red; font-size: 13px; padding: 0; margin: 0;" 
                                            v-for="error of v$.Symbol.$errors" :key="error.$uid">
                                                <!-- {{ error.$message }} -->
                                                ກາລຸນາປ້ອນສັນຍະລັກ ( USD, LAK, THB, ... )
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
import { required} from '@vuelidate/validators'
export default{
setup () {
return { v$: useVuelidate() }
},
data(){
return{
    Currency:'',
    Symbol:''
}
},
validations () {
return {
    Currency: { required },
    Symbol: {required}
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
</style>