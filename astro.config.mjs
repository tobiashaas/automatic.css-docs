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
			favicon: './public/acss-favicon.png',
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
						{ label: 'Palette Setup', slug: 'guides/palette-setup' },
						{ label: 'Fluid Text', slug: 'guides/fluid-text' },		
						{ label: 'Fluid Headings', slug: 'guides/fluid-headings' },										
					],
				},
				{
					label: 'Builder Configuration',
					items: [
						{ label: 'Setup ACSS to work seamlessly with your preferred builder.', slug: 'guides/bricks-builder' },
					],
				},		
				{
					label: 'Fundamentals',
					items: [
						{ label: 'Learn ACSS basics and best practices for best results.', slug: 'guides/fundamentals' },
					],
				},								
				{
					label: 'Utilities',
					items: [
						{ label: 'Accessibility', slug: 'guides/accessibility' },
						{ label: 'Advanced', slug: 'guides/advanced' },
						{ label: 'Backgrounds', slug: 'guides/backgrounds' },
					],
				},	
			],
		}),
	],
});