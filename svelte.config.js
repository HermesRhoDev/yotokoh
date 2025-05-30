import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess({
		scss: {
			scss: {
				includePaths: ['src'],
			}
		}
	}),
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: ''
		}
	}
};

export default config;