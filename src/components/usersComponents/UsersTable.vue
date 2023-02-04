<template>
  
  <a-table :columns="columns" :data-source="dataSource">
  <template v-for="col in ['id', 'name', 'email', 'tel', 'created_at', 'update_at']" #[col]="{ text, record }" :key="col[record.id]" >
    <div>
      <template>
        {{ text }}
      </template>
    </div>
  </template>
  <template #operation="{ record }">
    <div class="editable-row-operations">
      
      <div>
        <a-button type="primary" @click="showModal(record.id, record.name, record.email, record.tel)" :style="{borderRadius: '10px'}">Edit</a-button>
        <a-modal v-model:visible="visible" :style="{width:'420px'}">
          <template #footer>
            <a-button key="back" @click="handleCancel">Return</a-button>
            <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
          </template>
          
                        <div class="bg">
                              <h3 class="text-3xl text-center font-medium text-gray-900"> ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້ງານ</h3>
                        </div>
                        <div class="pt-20"> 
                              <form class="space-y-3" action="#">
                                  <div style="display:none;">
                                      <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ລະຫັດຜູ້ໃຊ້</label>
                                      <input type="text" name="id" id="id" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                          placeholder="........." 
                                          v-model="upid" />
                                  </div>
                                  <div>
                                      <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ຊື່ຜູ້ນຳໃຊ້</label>
                                      <input type="text" name="name" id="name" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                          placeholder="........." 
                                          v-model="upname" />
                                  </div>
                                  <div>
                                      <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ອິເມລ</label>
                                      <input type="email" name="email" id="email" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                          placeholder="........." 
                                          v-model="upemail" />
                                  </div>
                                  <div>
                                      <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ເບີໂທ</label>
                                      <input type="text" name="tel" id="tel" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                          placeholder="........." 
                                          v-model="uptel" />
                                  </div>
                                  <div>
                                      <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ລະຫັດຜ່ານ</label>
                                      <input type="password" name="password" id="password" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                          placeholder=" New password"
                                           />
                                  </div>
                              </form>
                          </div>
        </a-modal>
      </div>
    </div>
  </template>
  </a-table>
  
  </template>
  <script>
  // import { cloneDeep } from 'lodash-es';
  import { defineComponent, ref} from 'vue';
  import axios from 'axios';
  // import { email } from '@vuelidate/validators';
  
  
  const columns = [{
  title: 'ລະຫັດ',
  dataIndex: 'id',
  fnontSize: '16px',
  },{
  title: 'ຊື້ຜູ້ນຳໃຊ້',
  dataIndex: 'name',
  },{
  title: 'ອິເມລ',
  dataIndex: 'email',
  },{
  title: 'ເບີໂທ',
  dataIndex: 'tel',
  },{
  title: 'ວັນທີ່ສ້າງ',
  dataIndex: 'created_at',
  }, {
  title: 'ວັນທີ່ແກ້ໄຂ',
  dataIndex: 'updated_at',
  },{
  title: 'ການປະຕິບັດ',
  dataIndex: 'operation',
  slots: {
    customRender: 'operation',
  },
     
  
  },
  
  ];
  const dataSource = ref([]);
  export default defineComponent({
  mounted(){
    axios.get('showuser').then(response=>{
      dataSource.value = response.data.data;
          console.log(dataSource,'ddd')
      }).catch(error=>{
            console.log(error);
            })
    
  },
  setup() {
  
  
  // modal
  const loading = ref(false);
  const visible = ref(false);
  const upid = ref();
  const upname = ref();
  const upemail = ref();
  const uptel = ref();
  
  const showModal = (id,name,email,tel) => {
    visible.value = true;
    upid.value = `${id}`;
    upname.value = `${name}`;
    upemail.value = `${email}`;
    uptel.value = `${tel}`;
    // const Res = axios.get(`showuser/${id}`);
    //   upname.value = Res.data.data.name;
  
      
  };
  
  const handleOk = () => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      visible.value = false;
    }, 1000);
  };
  
  const handleCancel = () => {
    visible.value = false;
  };
  //
  
  return {
    dataSource,
    columns,
    editingKey: '',
    //modal
    loading,
    visible,
    showModal,
    handleOk,
    handleCancel,
  
    // 
    upid,
    upname,
    upemail,
    uptel
  
  };
  },
  });
  </script>
  
  
  
  <style scoped>
  *{
  font-family: "Noto Sans Lao";
  }
  .editable-row-operations a {
  margin-right: 8px;
  }
  </style>
  <style scoped>
  .editable-row-operations a {
  margin-right: 10px;
  }
  .bg{
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color:  #329EE0;
  outline: 0;
  border: 0;
  }
  h3{
  color: #fff;
  }
  .modalStyle {
  border-radius: 20px;
  }
  
  .newStyle {
  border-radius: 20px;
  }
  
  /* applied style to its root properties, but no change */
  .ant-modal-content {
  border-radius: 20px;
  }
  </style>