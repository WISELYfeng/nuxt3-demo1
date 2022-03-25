import {defineNuxtPlugin} from '#app';
import ElementPlus from 'element-plus/dist/index.full.min';
export default defineNuxtPlugin(nuxtApp => nuxtApp.vueApp.use(ElementPlus))
