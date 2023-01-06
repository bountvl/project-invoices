<template>
    
<aside class="w-60 bg h-full fixed z-[111]" aria-label="Sidebar">
   <div class="overflow-y-auto">
         <div class="flex justify-center pb-2">
          <img src="@/assets/Digital.png" class="w-3/6" alt="" />
         </div>
      <ul class="">
         <li>
          <router-link to="/home" class="text-hover pl-6 flex items-center p-2  hover:bg-gray-100">
            <svg className="w-6 h-6" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
               <!-- <span class="ml-3">Dashboard</span> -->
            <span class="ml-4">ໜ້າຫຼັກ</span>
          </router-link>
         </li>
         <li>
          <router-link to="/customers" class="text-hover pl-6 flex items-center text-white p-2  font-normal hover:bg-gray-100 ">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
            <span class="ml-4">ລູກຄ້າ</span>
          </router-link>
         </li>
         <li>
          <router-link to="/currency" class="text-hover pl-6 flex items-center text-white p-2  font-normal hover:bg-gray-100 ">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
            <span class="ml-4">ສະກຸນເງີນ</span>
          </router-link>
         </li>
         <li>
          <router-link to="/company" class="text-hover pl-6 flex items-center text-white p-2  font-normal hover:bg-gray-100 ">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"></path></svg>
            <span class="ml-4">ບໍລິສັດ</span>
          </router-link>
         </li>
         <li>
          <router-link to="/about" class="text-hover pl-6 flex items-center text-white p-2  font-normal hover:bg-gray-100 ">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
            <span class="ml-4">ໃບສະເໜີລາຄາ</span>
          </router-link>
         </li>
          <li>
          <router-link to="/about" class="text-hover pl-6 flex items-center text-white p-2  font-normal hover:bg-gray-100 ">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
            <span class="ml-4">ລາຍລະອຽດໃບສະເໜີ</span>
          </router-link>
         </li>
         <li>
          <router-link to="/about" class="text-hover pl-6 flex items-center text-white p-2  font-normal hover:bg-gray-100 ">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
            <span class="ml-4">ໃບບິນເກັບເງິນ</span>
          </router-link>
         </li>
         <li>
          <router-link to="/about" class="text-hover pl-6 flex items-center text-white p-2  font-normal hover:bg-gray-100 ">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
            <span class="ml-4">ລາຍລະອຽດໃບບິນ</span>
          </router-link>
         </li>
         <li>
          <router-link to="/" class="text-hover pl-6 flex items-center p-2  hover:bg-gray-100">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
               <!-- <span class="ml-4">Dashboard</span> -->
            <span class="ml-4">ຮັບເງິນ</span>
          </router-link>
         </li>
         <li>
          <router-link to="/about" class="text-hover pl-6 flex items-center text-white p-2  font-normal hover:bg-gray-100 ">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
            <span class="ml-4">ລາຍລະອຽດບາຍຮັບເງິນ</span>
          </router-link>
         </li>
         <li>
          <router-link to="/about" class="text-hover pl-6 flex items-center text-white p-2  font-normal hover:bg-gray-100 ">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
            <span class="ml-4">ໃບສັ່ງຊື້</span>
          </router-link>
         </li>
         <li>
          <router-link to="/about" class="text-hover pl-6 flex items-center text-white p-2  font-normal hover:bg-gray-100 ">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
            <span class="ml-4">ລາຍລະອຽດການຈັດຊື້</span>
          </router-link>
         </li>
         <li class="pb-5">
          <router-link to="/about" class="text-hover pl-6 flex items-center text-white p-2  font-normal hover:bg-gray-100 ">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
            <span class="ml-4">ຜູ້ນຳໃຊ້</span>
          </router-link>
         </li>
          <div class="hr flex justify-center">
            <hr class="bg-gray-900 w-11/12" />
          </div>
         <li class="py-5 logout">
          <router-link to="/about" class="text-hover px-4 flex items-center text-white p-3  font-normal hover:bg-gray-100 ">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="ml-3">ອອກຈາກລະບົບ</span>
          </router-link>
         </li>
      </ul>
   </div>
</aside>
<!-- head -->
<div class="head  pl-60 w-full z-[110]">
    <div class=" grid grid-cols-3 py-3 px-4">
      <div class=""></div>
      <div class="text-center inline-flex items-center search">
        <input type="search" class="w-11/12 h-10 rounded-full" name="" id="" placeholder="">
        <span class="absolute flex pl-4 text-gray-600 hidd">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          ຄົນຫາ
        </span>
      </div>
      <div class="flex justify-end">
        <div class="text-center inline-flex items-center">
          <span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
            <span class="Alert">5</span>
          </span>
        </div> 
        <div class="flex">
          <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="dropdown text-sm px-4 text-center inline-flex items-center hover:font-medium" type="button">
            <img src="@/assets/boun.jpg" class="w-10 h-10 rounded-full " alt=""> 
            <span class="pl-1">Khampasong </span>
            <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>

          <!-- Dropdown menu -->
          <div id="dropdownDivider" class="zz-index hidden relative  w-64 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-1 text-sm text-black  dark:text-gray-200" aria-labelledby="dropdownDividerButton">
               
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-black">ໂປຣຟາຍ</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-black">ຕັ້ງຄ່າ</a>
                </li>
              </ul>
              <div class="py-1"> 
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 text-black">ອອກຈາກລະບົບ</a>
              </div>
          </div>
        </div>
      </div>
    </div>
</div>

</template>
<script>
export default {
  // name: "Slidebar",

}
</script>
<style lang="scss" scoped>
    *{
      font-family: "Noto Sans Lao";
    }
    .head{
      position: fixed;
    }
 .bg{
  overflow: hidden;
  overflow-y: scroll;
  background-color: rgba(50, 158, 224, 1);
 }
 .bg::-webkit-scrollbar{
    width: 8px;
    background-color: rgb(204, 210, 210);
    z-index: 100;
    display: none;
}
 .contian .review .las-order::-webkit-scrollbar-track{
    // border: 2px solid #fff;
    box-shadow: inset 0 0 2.5px 2px rgb(152, 97, 97);
}
.contian .review .las-order::-webkit-scrollbar-thumb{
    background:rgb(244, 204, 204);
} 
 .text-hover:hover{
  color: rgba(50, 158, 224, 1);
 }
 .text-hover {
      font-size: 16px;
     font-weight: 550;
     color: #fff;

     &.router-link-exact-active {
      color: rgba(50, 158, 224, 1);
      background-color: #fff;
     }
   }
   .head{
    background-color: #fff;
    box-shadow: 5px 5px 10px 0px rgba(34, 34, 34, 0.1);
   }
   .Alert{
    position: absolute;
    top: 18px;
    font-size: 9px;
    z-index: 2;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: #329EE0;
    color: #fff;
    font-weight: 600;
   }
   .search input:focus ~ .hidd{
    display: none;
   }
   .zz-index {
    position: relative;
    z-index: 50;
   }

</style>