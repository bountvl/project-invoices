<template>
    <!-- Slidebar -->
    <Slidebar/>
    <!-- end -->
    <!-- main -->
    <div class="home pl-64 pr-4 pt-20 ">
        <div class="tools pt-5 flex justify-between">
            <div class=" ">
                <form action="" class="flex gap-3">
                    <input type="date" name="" class="bg rounded-xl text-white " id=""/>
                    <input type="date" name="" class="bg rounded-xl text-white " id=""/>
                    <button type="submit" class="button bg rounded-xl px-3">
                        <span class="text-center inline-flex items-center text-white pt-1">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        ຄົນຫາ
                        </span>
                    </button>
                </form>
            </div>
            <div class="">
                
                    <!-- Modal toggle -->
                    <button class="block flex text-white bg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> &nbsp;
                        ເພິ່ມຂໍ້ມູນ
                    </button>

                    <!-- Main modal -->
                    <AddCustomersVue/>
                    

            </div>
        </div>

        <!-- table -->
        <CustomersTableVue/>
    </div>
    <!-- end -->
</template>

<script>
// @ is an alias to /src
import Slidebar from '@/components/Slide-bar.vue';
import CustomersTableVue from '@/components/customersComonents/CustomersTable.vue';
import AddCustomersVue from '@/components/customersComonents/AddCustomers.vue';
// function readURL(input) {
// if (input.files && input.files[0]) {
// var reader = new FileReader();

// reader.onload = function (e) {
// $('#blah').attr('src', e.target.result);
// }

// reader.readAsDataURL(input.files[0]);
// }
// };
export default {
  name: 'HomeView',
  components: {
    Slidebar,
    CustomersTableVue,
    AddCustomersVue
    
  },
  data() {
    return { 
        logo: ''
    }
},
methods:{
    getLogo(event){
        close.log(event.target.value);
    }
}
}
</script>
<style scoped>
*{
    font-family: "Noto Sans Lao";
  }
.bg{
    background-color:  #329EE0;
    outline: 0;
    border: 0;
}
.border{
    border: solid 1px rgb(14 165 233) ;
}
</style>