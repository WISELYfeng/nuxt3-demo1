import fs from "fs";
import path from "path";
import {defineNuxtConfig} from 'nuxt3'

const packJson = require('./package.json')
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	publicRuntimeConfig: {
		BASE_URL: process.env.BASE_URL
	},
	privateRuntimeConfig: {
		API_SECRET: process.env.API_SECRET
	},
	meta: {
		htmlAttrs: {
			lang: 'zh-CN'
		},
		title: 'e充网',
		script: [
			/* 全局引入lodash */
			{src: '/js/lodash.min.js'}
		],
		/* 搜索索引标签 */
		meta: [
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: '北京市新能源汽车及充电设施信息综合管理平台'},
			{name: 'keywords', content: 'ecw,echongwang,e充网,zcsy,中创,中创三优,三优,新能源,充电,ev,EV,power,汽车,补贴,补助,充电桩'}
		]
	},
	plugins: [],
	modules: [],
	css: [
		/* 全局引入 element-plus 样式 */
		'element-plus/dist/index.css'
	],
	vendor: ['element-plus'],
	hooks: {
		'build:done'(builder) {
			const extraFilerPath: string = path.join(builder.nuxt.options.buildDir, 'version.json');
			fs.writeFileSync(extraFilerPath, JSON.stringify({version: packJson.version}))
		}
	}
})
