import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess({
		scss: {
			scss: {
				includePaths: ['src'],
			}
		}
	}),
	kit: { adapter: adapter() }
};

export default config;
