import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.tobiashaas.info',
	integrations: [
		starlight({
			title: {
				en: 'Automatic.CSS Documentation',
				de: 'Automatic.CSS Dokumentation',
			},	
			defaultLocale: 'root',
			logo: {
				dark: './src/assets/acss-logo-white.svg',
				light: './src/assets/automatic-css-logo-dark.svg',				
				replacesTitle: true,
			},
			// Set English as the default language for this site.
			defaultLocale: 'root',
			locales: {
				root: {
				  label: 'English',
				  lang: 'en', // lang is required for root locales
				},
				
				'de': {
					label: 'German',
					lang: 'de',
				},
			},
			social: {
				facebook: 'https://www.facebook.com/automaticcss',
				youtube: 'https://www.youtube.com/@AutomaticCSS',
				twitter: 'https://x.com/thekevingeary',
			},
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
		}),
	],
});
