import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from "path";
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		}),
	],
	server: {
		proxy: {
			'/im-admin': {
				target: 'https://tkppd0fzhrqkta9loum8.imnono.net/im-admin',
				changeOrigin: true, //是否跨域
				ws:true,
				rewrite: path => path.replace(/^\/im-admin/, '/')
			}
		}
	},
	optimizeDeps: {
		include: ['schart.js']
	},
	resolve: {
		alias: {
			'@': path.resolve('./src') // @代替src
		}
	}
});
