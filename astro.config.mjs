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
			favicon: './src/acss-favicon.png',
			logo: {
				dark: './src/assets/acss-logo-white.svg',
				light: './src/assets/automatic-css-logo-dark.svg',				
				replacesTitle: true,
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
				'./src/styles/automatic.css',
			  ],
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
				'x.com': 'https://x.com/thekevingeary',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'How to install, setup and start using Automatic.css.', slug: 'guides/getting-started' },
					],
				},
				{
					label: 'Builder Configuration',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Setup ACSS to work seamlessly with your preferred builder.', slug: 'guides/builder-configuration' },
					],
				},		
				{
					label: 'Fundamentals',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Learn ACSS basics and best practices for best results.', slug: 'guides/fundamentals' },
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