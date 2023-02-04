<template>
      <div class="body">
        <router-view/>
      </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
<style>
.body{
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
 background-color: #f4eaea9d;
}
.body::-webkit-scrollbar{
    width: 8px;
    background-color: rgb(204, 210, 210);
    /* z-index: 100; */
    /* display: none; */
}
</style>
