// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kromati-k.web.app',
	integrations: [
		starlight({
			title: 'Kromati-K',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				'./src/styles/custom.css'
			],
			// logo: {
			// 	src: '/logo.png',
			// },
			defaultLocale: 'es',
			locales: {
				es: {label: 'Español' },
				en: { label: 'English'},
			}
		}),
	],
});
