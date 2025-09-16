// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	site: 'https://kromati-k.web.app',
	integrations: [starlight({
		title: 'Kromati-K',
		social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
		sidebar: [
			{
				label: 'Primeras nociones',
				translations: {
					en: 'Getting Started',
					es: 'Primeras nociones',
				},
				items: [
					{
						label: 'Introducción',
						translations: {
							en: 'Introduction',
							es: 'Introducción',
						},
						slug: 'primeras-nociones/introduccion',
					},
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
			es: { label: 'Español' },
			en: { label: 'English' },
		}
	}),
	mdx(),
	solidJs()
	],
});