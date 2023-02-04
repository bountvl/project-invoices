<template>
  
        <div class="">
                
                <!-- Modal toggle -->
                <button class="block flex text-white bg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal1">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> &nbsp;
                    ເພິ່ມຂໍ້ມູນ
                </button>

        </div>
  <UadateCurrency/>
  <a-table :columns="columns" :data-source="dataSource">
    <template v-for="col in ['id', 'name', 'email', 'tel', 'created_at', 'update_at']" #[col]="{ text, record }" :key="col">
      <div>
        <a-input
          v-if="editableData[record.key]"
          v-model:value="editableData[record.key][col]"
          style="margin: -5px 0"
        />
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>
    <template #operation="{ record }">
      <div class="editable-row-operations">
        <span v-if="editableData[record.key]">
          <a @click="save(record.key)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a @click="edit(record.key)">Edit</a>
        </span>
        
        <div>
          <a-button type="primary" @click="showModal">Edit</a-button>
          <a-modal v-model:visible="visible">
            <template #footer>
              <a-button key="back" @click="handleCancel">Return</a-button>
              <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
            </template>
            
                          <div class="bg">
                                <h3 class="text-3xl text-center font-medium text-gray-900"> ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້ງານ</h3>
                          </div>
                          <div class="pt-20"> 
                                <form class="space-y-3" action="#">
                                    <div>
                                        <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ສະກຸນເງີນ</label>
                                        <input type="text" name="currency" id="currency" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="........."  />
                                    </div>
                                    <div>
                                        <label for="" class="block border-none mb-1 font-medium text-gray-900 dark:text-white"> ສັນຍະລັກ</label>
                                        <input type="text" name="Symbol" id="Symbol" class="bg-gray-200 border-none text-gray-900  rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder=" USD / LAK / THB, ..." />
                                    </div>

                                    <!-- <div class="button flex gap-4 justify-center py-2">
                                        <button type="button"  @click="submit" class="text-white bg-sky-500/75 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-9 py-2 text-center ">ບັນທືກ</button>
                                        <button type="reset" class="text-sky-500/75 hover:bg-gray-300 focus:ring-4 focus:outline-sky-500 border focus:ring-blue-300 font-medium rounded-lg px-9 py-2 text-center ">ຍົກເລີກ</button>
                                    </div> -->
                                    <!-- <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                    </div> -->
                                </form>
                            </div>
          </a-modal>
        </div>
      </div>
    </template>
  </a-table>

</template>
<script>
import { cloneDeep } from 'lodash-es';
import { defineComponent, reactive, ref, h} from 'vue';
import axios from 'axios';
import UadateCurrency  from '@/components/currencycomponents/UadateCurrency.vue';
const onRowButtonClick = (record) => {
      alert(`${record.id} clicked`)
    }
const columns = [{
    title: 'ລະຫັດ',
    dataIndex: 'id',
    slots: {
      customRender: 'id',
    },
    fnontSize: '16px',
  },{
    title: 'ຊື້ຜູ້ນຳໃຊ້',
    dataIndex: 'name',
    slots: {
      customRender: 'name',
    },
  },{
    title: 'ອິເມລ',
    dataIndex: 'email',
    slots: {
      customRender: 'email',
    },
  },{
    title: 'ເບີໂທ',
    dataIndex: 'tel',
    slots: {
      customRender: 'tel',
    },
  },{
    title: 'ວັນທີ່ສ້າງ',
    dataIndex: 'created_at',
    slots: {
      customRender: 'created_at',
    },
  }, {
    title: 'ວັນທີ່ແກ້ໄຂ',
    dataIndex: 'updated_at',
    slots: {
      customRender: 'updated_at',
    },
  },{
    title: 'ການປະຕິບັດ',
    dataIndex: 'operation',
    slots: {
      customRender: 'operation',
    },
       
    
  },
    
    {
      customRender({ record }) {
            return h('button', {
              onClick: () => onRowButtonClick(record)
            }, 'update')
          }
    }
  
];
  const dataSource = ref([]);
export default defineComponent({
  components:{
    UadateCurrency
  },
  mounted(){
      axios.get('showuser').then(response=>{
        dataSource.value = response.data.data;
            console.log(dataSource,'ddd')
        }).catch(error=>{
              console.log(error);
              })
      
    },
  setup() {


    const editableData = reactive({});

    const edit = key => {
      editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.id)[0]);
    };

    const save = key => {
      Object.assign(dataSource.value.filter(item => key === item.id)[0], editableData[key]);
      delete editableData[key];
    };

    const cancel = key => {
      delete editableData[key];
    }; 

    // modal
    const loading = ref(false);
    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
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
      editableData,
      edit,
      save,
      cancel,
      //modal
      loading,
      visible,
      showModal,
      handleOk,
      handleCancel,
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
    border-top-right-radius: 20px;
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