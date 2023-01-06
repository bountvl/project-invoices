<template>
    <a-table :columns="columns" :data-source="dataSource" :style="{fontWeight: '400', color: '#000'}">
      <template #bodyCell="{ column, text, record }">
        <template v-if="['name', 'age', 'address'].includes(column.dataIndex)">
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
  import { cloneDeep } from 'lodash-es';
  import { defineComponent, reactive, ref } from 'vue';
  const columns = [{
    title: 'ລຳດັບ',
    dataIndex: 'no',
    fnontSize: '16px',
  },{
    title: 'ໂລໂກ້',
    dataIndex: 'name',
  },{
    title: 'ຊື່ບໍລິສັດ',
    dataIndex: 'name',
  },{
    title: 'ອີເມວ',
    dataIndex: 'name',
  },{
    title: 'ເບີໂທ',
    dataIndex: 'name',
  },{
    title: 'ທີ່ຕັ້ງບໍລິສັດ',
    dataIndex: 'name',
  }, {
    title: 'ສ້າງເມື່ອ',
    dataIndex: 'age',
  }, {
    title: 'ແກ້ໄຂລ່າສຸດ',
    dataIndex: 'address',
  }, {
    title: 'operation',
    dataIndex: 'operation',
  }];
  const data = [];
  for (let i = 1; i <= 100; i++) {
    data.push({
      key: i.toString(),
      no:`${i}`,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  export default defineComponent({
    setup() {
      const dataSource = ref(data);
      const editableData = reactive({});
      const edit = key => {
        editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
      };
      const save = key => {
        Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
        delete editableData[key];
      };
      const cancel = key => {
        delete editableData[key];
      };
      return {
        dataSource,
        columns,
        editingKey: '',
        editableData,
        edit,
        save,
        cancel,
      };
    },
  });
  </script>
  <style scoped>
  .editable-row-operations a {
    margin-right: 10px;
  }
  </style>