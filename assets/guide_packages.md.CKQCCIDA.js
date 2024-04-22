import{_ as t,c as d,o as e,a7 as r}from"./chunks/framework.BDWoCtjx.js";const g=JSON.parse(`{"title":"Packages","description":"UnoCSS Packages: available packages and what's included and enabled in unocss.","frontmatter":{"title":"Packages","description":"UnoCSS Packages: available packages and what's included and enabled in unocss.","outline":"deep"},"headers":[],"relativePath":"guide/packages.md","filePath":"guide/packages.md","lastUpdated":1704161380000}`),s={name:"guide/packages.md"},a=r('<h1 id="packages" tabindex="-1">Packages <a class="header-anchor" href="#packages" aria-label="Permalink to &quot;Packages&quot;">​</a></h1><p>UnoCSS is a monorepo that contains multiple packages. This page lists all the packages and what&#39;s included in <code>unocss</code> package:</p><table><thead><tr><th>Package</th><th>Description</th><th>Included in <code>unocss</code></th><th>Enabled</th></tr></thead><tbody><tr><td><a href="/tools/core">@unocss/core</a></td><td>The core library without preset</td><td>✅</td><td>-</td></tr><tr><td><a href="/integrations/cli">@unocss/cli</a></td><td>Command line interface for UnoCSS</td><td>✅</td><td>-</td></tr><tr><td><a href="/presets/uno">@unocss/preset-uno</a></td><td>The default preset</td><td>✅</td><td>✅</td></tr><tr><td><a href="/presets/mini">@unocss/preset-mini</a></td><td>The minimal but essential rules and variants</td><td>✅</td><td>✅</td></tr><tr><td><a href="/presets/wind">@unocss/preset-wind</a></td><td>Tailwind CSS / Windi CSS compact preset</td><td>✅</td><td>✅</td></tr><tr><td><a href="/presets/attributify">@unocss/preset-attributify</a></td><td>Enables Attributify Mode for other rules</td><td>✅</td><td>No</td></tr><tr><td><a href="/presets/tagify">@unocss/preset-tagify</a></td><td>Enables Tagify Mode for other rules</td><td>✅</td><td>No</td></tr><tr><td><a href="/presets/icons">@unocss/preset-icons</a></td><td>Pure CSS Icons solution powered by Iconify</td><td>✅</td><td>No</td></tr><tr><td><a href="/presets/web-fonts">@unocss/preset-web-fonts</a></td><td>Web fonts (Google Fonts, etc.) support</td><td>✅</td><td>No</td></tr><tr><td><a href="/presets/typography">@unocss/preset-typography</a></td><td>The typography preset</td><td>✅</td><td>No</td></tr><tr><td><a href="/presets/rem-to-px">@unocss/preset-rem-to-px</a></td><td>Coverts rem to px for utils</td><td>No</td><td>No</td></tr><tr><td><a href="/presets/legacy-compat">@unocss/preset-legacy-compat</a></td><td>Collections of legacy compatibility utilities</td><td>No</td><td>No</td></tr><tr><td><a href="/transformers/variant-group">@unocss/transformer-variant-group</a></td><td>Transformer for Windi CSS&#39;s variant group feature</td><td>✅</td><td>No</td></tr><tr><td><a href="/transformers/directives">@unocss/transformer-directives</a></td><td>Transformer for CSS directives like <code>@apply</code></td><td>✅</td><td>No</td></tr><tr><td><a href="/transformers/compile-class">@unocss/transformer-compile-class</a></td><td>Compile group of classes into one class</td><td>✅</td><td>No</td></tr><tr><td><a href="/transformers/attributify-jsx">@unocss/transformer-attributify-jsx</a></td><td>Support valueless attributify in JSX/TSX</td><td>✅</td><td>No</td></tr><tr><td><a href="/extractors/pug">@unocss/extractor-pug</a></td><td>Extractor for Pug</td><td>No</td><td>-</td></tr><tr><td><a href="/extractors/svelte">@unocss/extractor-svelte</a></td><td>Extractor for Svelte</td><td>No</td><td>-</td></tr><tr><td><a href="/tools/autocomplete">@unocss/autocomplete</a></td><td>Utils for autocomplete</td><td>No</td><td>-</td></tr><tr><td><a href="/guide/config-file">@unocss/config</a></td><td>Configuration file loader</td><td>✅</td><td>-</td></tr><tr><td><a href="/guide/style-reset">@unocss/reset</a></td><td>Collection of common CSS resets</td><td>✅</td><td>No</td></tr><tr><td><a href="/integrations/vite">@unocss/vite</a></td><td>The Vite plugins</td><td>✅</td><td>-</td></tr><tr><td><a href="/tools/inspector">@unocss/inspector</a></td><td>The inspector UI for UnoCSS</td><td>✅</td><td>-</td></tr><tr><td><a href="/integrations/astro">@unocss/astro</a></td><td>The Astro integration</td><td>✅</td><td>-</td></tr><tr><td><a href="/integrations/webpack">@unocss/webpack</a></td><td>The Webpack plugin</td><td>No</td><td>-</td></tr><tr><td><a href="/integrations/nuxt">@unocss/nuxt</a></td><td>The Nuxt Module</td><td>No</td><td>-</td></tr><tr><td><a href="/integrations/svelte-scoped">@unocss/svelte-scoped</a></td><td>Svelte Scoped Vite plugin + Preprocessor</td><td>No</td><td>-</td></tr><tr><td><a href="/integrations/next">@unocss/next</a></td><td>The Next.js plugin</td><td>No</td><td>-</td></tr><tr><td><a href="/integrations/runtime">@unocss/runtime</a></td><td>CSS-in-JS Runtime for UnoCSS</td><td>No</td><td>-</td></tr><tr><td><a href="/integrations/eslint">@unocss/eslint-plugin</a></td><td>ESLint plugin</td><td>No</td><td>-</td></tr><tr><td><a href="/integrations/eslint">@unocss/eslint-config</a></td><td>ESLint config</td><td>No</td><td>-</td></tr><tr><td><a href="/integrations/postcss">@unocss/postcss</a></td><td>The PostCSS plugin</td><td>No</td><td>-</td></tr><tr><td><a href="/integrations/vscode">VS Code Extension</a></td><td>UnoCSS for VS Code</td><td>-</td><td>-</td></tr></tbody></table>',3),o=[a];function n(i,c,p,u,l,f){return e(),d("div",null,o)}const m=t(s,[["render",n]]);export{g as __pageData,m as default};