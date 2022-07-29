import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
import path from 'node:path';

const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@components/*': path.resolve(__dirname, '.src/components/*')
		}
	},
	optimizeDeps: {
		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	}
};

export default config;
