<template>
    <a-table style="z-index: 0;"
      :columns="columns"
      :row-key="record => record.login.uuid"
      :data-source="dataSource"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">{{ text.first }} {{ text.last }}</template>
      </template>
    </a-table>
  </template>
  <script>
  import { usePagination } from 'vue-request';
  import { computed, defineComponent } from 'vue';
  import axios from 'axios';
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [{
      text: 'Male',
      value: 'male',
    }, {
      text: 'Female',
      value: 'female',
    }],
    width: '20%',
  }, {
    title: 'Email',
    dataIndex: 'email',
  }];
  const queryData = params => {
    return axios.get('https://randomuser.me/api?noinfo', {
      params,
    });
  };
  export default defineComponent({
    setup() {
      const {
        data: dataSource,
        run,
        loading,
        current,
        pageSize,
      } = usePagination(queryData, {
        formatResult: res => res.data.results,
        pagination: {
          currentKey: 'page',
          pageSizeKey: 'results',
        },
      });
      const pagination = computed(() => ({
        total: 200,
        current: current.value,
        pageSize: pageSize.value,
      }));
      const handleTableChange = (pag, filters, sorter) => {
        run({
          results: pag.pageSize,
          page: pag?.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
      };
      return {
        dataSource,
        pagination,
        loading,
        columns,
        handleTableChange,
      };
    },
  });
  </script>
<style scoped>
.bg{
    background-color:  #329EE0;
}
.bor-l{
    border-top-left-radius: 20px;
}
.bor-r{
    border-top-right-radius: 20px;
}
a-table{
    z-index: -1;
}
</style>