import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// tialwindcss
import './index.css'
import 'flowbite';
// axios
import axios from 'axios';
// antdesign
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
createApp(App).use(router).use(Antd).mount('#app')

axios.defaults.baseURL='http://127.0.0.1:8000/api';
