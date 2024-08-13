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
				['./src/styles/custom.css', '@fontsource/outfit'],
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
				codeberg: 'https://codeberg.org/knut/examples',
				discord: 'https://astro.build/chat',
				github: 'https://github.com/withastro/starlight',
				gitlab: 'https://gitlab.com/delucis',
				linkedin: 'https://www.linkedin.com/company/astroinc',
				mastodon: 'https://m.webtoo.ls/@astro',
				threads: 'https://www.threads.net/@nmoodev',
				twitch: 'https://www.twitch.tv/bholmesdev',
				twitter: 'https://twitter.com/astrodotbuild',
				'x.com': 'https://x.com/astrodotbuild',
				youtube: 'https://youtube.com/@astrodotbuild',
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
