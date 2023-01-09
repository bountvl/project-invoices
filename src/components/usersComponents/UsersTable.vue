<template>
    <a-table :columns="columns" :data-source="user" :style="{fontWeight: '400', color: '#000',}">
      <template #bodyCell="{ column, text, record }">
        <template v-if="[].includes(column.dataIndex)">
          <div>
            <a-input
              v-if="editableData[record.key]"
              v-model:value="editableData[record.key][column.dataIndex]"
              style="margin: -5px 0;"
            />
            <template v-else>
              {{ text }}
            </template>
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
          <div class="editable-row-operations">
            <span v-if="editableData[record.key]">
              <a-typography-link @click="save(record.key)">Save</a-typography-link>
              <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
                <a>Cancel</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a @click="edit(record.key)">Edit</a>
            </span>
          </div>
        </template>
      </template>
    </a-table>
  </template>
  <script>
  // import { cloneDeep } from 'lodash-es';
  import { defineComponent, reactive, ref } from 'vue';
  import axios from 'axios';
// import { response } from 'express';
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
    title: 'ລະຫັດຜ່ານ',
    dataIndex: 'password',
  },{
    title: 'ວັນທີ່ສ້າງ',
    dataIndex: 'created_at',
  }, {
    title: 'ວັນທີ່ແກ້ໄຂ',
    dataIndex: 'updated_at',
  },{
    title: 'ການປະຕິບັດ',
    dataIndex: 'operation',
  }];
  const user = ref([])

  export default defineComponent({
    
    mounted(){
      axios.get('showuser').then(response=>{
        user.value = response.data.data;
            console.log(user,'ddd')
        }).catch(error=>{
              console.log(error);
              })
      
    },
    setup() {
      // const user = ref([]);
      const editableData = reactive({});
      // const edit = key => {
      //   editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
      // };
      // const save = key => {
      //   Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
      //   delete editableData[key];
      // };
      // const cancel = key => {
      //   delete editableData[key];
      // };
      return {
        columns,
        editingKey: '',
        editableData,
        user
        // edit,
        // save,
        // cancel,
      };
    },
  });
  </script>
  <style scoped>
  .editable-row-operations a {
    margin-right: 10px;
  }
  </style>