import{_ as s,c as i,o as a,a7 as e}from"./chunks/framework.CueMD8Uh.js";const y=JSON.parse('{"title":"Wind preset","description":"The Tailwind CSS / Windi CSS compact preset for UnoCSS (@unocss/preset-wind).","frontmatter":{"title":"Wind preset","description":"The Tailwind CSS / Windi CSS compact preset for UnoCSS (@unocss/preset-wind).","outline":"deep"},"headers":[],"relativePath":"presets/wind.md","filePath":"presets/wind.md","lastUpdated":1708785522000}'),t={name:"presets/wind.md"},n=e(`<h1 id="wind-preset" tabindex="-1">Wind preset <a class="header-anchor" href="#wind-preset" aria-label="Permalink to &quot;Wind preset&quot;">​</a></h1><p>The Tailwind CSS / Windi CSS compact preset for UnoCSS.</p><p><a href="https://github.com/unocss/unocss/tree/main/packages/preset-wind" target="_blank" rel="noreferrer">Source Code</a></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This preset inherits <a href="/yaoo-showcase-profile-v202404/presets/mini"><code>@unocss/preset-mini</code></a>.</p></div><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-2npGp" id="tab-e0aphDl" checked="checked"><label for="tab-e0aphDl">pnpm</label><input type="radio" name="group-2npGp" id="tab-Cg4D8_X"><label for="tab-Cg4D8_X">yarn</label><input type="radio" name="group-2npGp" id="tab-eufMfKK"><label for="tab-eufMfKK">npm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/preset-wind</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/preset-wind</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/preset-wind</span></span></code></pre></div></div></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// uno.config.ts</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unocss</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> presetWind</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@unocss/preset-wind</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  presets</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    presetWind</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This preset is included in the <code>unocss</code> package, you can also import it from there:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> presetWind</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unocss</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span></code></pre></div></div><h2 id="rules" tabindex="-1">Rules <a class="header-anchor" href="#rules" aria-label="Permalink to &quot;Rules&quot;">​</a></h2><p>The primary goal of this preset is to provide compatibility with <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a> and <a href="https://windicss.org/" target="_blank" rel="noreferrer">Windi CSS</a>. It should be noted that complete compatibility may not be guaranteed. Please refer to their <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">documentation</a> for detailed usage.</p><p>For all rules and presets included in this preset, please refer to our <a href="/interactive/" target="_blank">interactive docs</a> or directly go to the <a href="https://github.com/unocss/unocss/tree/main/packages/preset-wind" target="_blank" rel="noreferrer">source code</a>.</p><h2 id="differences-from-tailwind-css" tabindex="-1">Differences from Tailwind CSS <a class="header-anchor" href="#differences-from-tailwind-css" aria-label="Permalink to &quot;Differences from Tailwind CSS&quot;">​</a></h2><h3 id="quotes" tabindex="-1">Quotes <a class="header-anchor" href="#quotes" aria-label="Permalink to &quot;Quotes&quot;">​</a></h3><p>Using quotes in the template (the files intended to be processed) is not supported due to how the extractor works.</p><h2 id="differences-from-windi-css" tabindex="-1">Differences from Windi CSS <a class="header-anchor" href="#differences-from-windi-css" aria-label="Permalink to &quot;Differences from Windi CSS&quot;">​</a></h2><h3 id="breakpoints" tabindex="-1">Breakpoints <a class="header-anchor" href="#breakpoints" aria-label="Permalink to &quot;Breakpoints&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Windi CSS</th><th style="text-align:left;">UnoCSS</th></tr></thead><tbody><tr><td style="text-align:left;"><code>&lt;sm:p-1</code></td><td style="text-align:left;"><code>lt-sm:p-1</code></td></tr><tr><td style="text-align:left;"><code>@lg:p-1</code></td><td style="text-align:left;"><code>at-lg:p-1</code></td></tr><tr><td style="text-align:left;"><code>&gt;xl:p-1</code></td><td style="text-align:left;"><code>xl:p-1</code></td></tr></tbody></table><h3 id="bracket-syntax-spaces" tabindex="-1">Bracket syntax spaces <a class="header-anchor" href="#bracket-syntax-spaces" aria-label="Permalink to &quot;Bracket syntax spaces&quot;">​</a></h3><p>This preset uses <code>_</code> instead of <code>,</code> to respect space in bracket syntax.</p><table><thead><tr><th style="text-align:left;">Windi CSS</th><th style="text-align:left;">UnoCSS</th></tr></thead><tbody><tr><td style="text-align:left;"><code>grid-cols-[1fr,10px,max-content]</code></td><td style="text-align:left;"><code>grid-cols-[1fr_10px_max-content]</code></td></tr></tbody></table><p>Since some CSS rules require <code>,</code> as parts of the value, e.g. <code>grid-cols-[repeat(3,auto)]</code></p><h2 id="experimental-features" tabindex="-1">Experimental Features <a class="header-anchor" href="#experimental-features" aria-label="Permalink to &quot;Experimental Features&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This preset includes experimental features that may be changed in breaking ways at any time.</p></div><h3 id="media-hover" tabindex="-1">Media Hover <a class="header-anchor" href="#media-hover" aria-label="Permalink to &quot;Media Hover&quot;">​</a></h3><p>Media hover addresses the <a href="https://css-tricks.com/solving-sticky-hover-states-with-media-hover-hover/" target="_blank" rel="noreferrer">sticky hover</a> problem where tapping target that includes hover style on mobile will persist that hover style until tapping elsewhere.</p><p>Since the regular <code>:hover</code> style most probably used so widely, the variant uses <code>@hover</code> syntax to distinguish it from the regular <code>hover</code> pseudo.</p><p>The variant <code>@hover-text-red</code> will output:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">media</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">hover</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> hover</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> and</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pointer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> fine</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  .</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\@</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">hover-text-red</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">hover</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    --un-text-opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">248</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 113</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 113</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> / </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">var</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">--un-text-opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This preset options are inherited from <a href="/yaoo-showcase-profile-v202404/presets/mini#options"><code>@unocss/preset-mini</code></a>.</p></div><h3 id="important" tabindex="-1">important <a class="header-anchor" href="#important" aria-label="Permalink to &quot;important&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>boolean | string</code></li><li><strong>Default:</strong> <code>false</code></li></ul><p>The <code>important</code> option lets you control whether UnoCSS&#39;s utilities should be marked with <code>!important</code>. This can be really useful when using UnoCSS with existing CSS that has high specificity selectors.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Using this option will apply important to all utilities generated by UnoCSS. You can use <code>important:</code> variant instead if you mean to apply it to specific utilities only.</p></div><p>However, setting <code>important</code> to <code>true</code> can introduce some issues when incorporating third-party JS libraries that add inline styles to your elements. In those cases, UnoCSS&#39;s <code>!important</code> utilities defeat the inline styles, which can break your intended design.</p><p>To get around this, you can set important to an ID selector like <code>#app</code> instead:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// uno.config.ts</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unocss</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> presetWind</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@unocss/preset-wind</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  presets</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    presetWind</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      important</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#app</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><p>This configuration will prefix all of your utilities with the given selector, effectively increasing their specificity without actually making them <code>!important</code>.</p><p>The utility <code>dark:bg-blue</code> will output:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">#</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> :</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">is</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dark</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dark</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bg-blue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --un-bg-opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">96</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 165</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 250</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> / </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">var</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">--un-bg-opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div>`,40),l=[n];function h(p,r,k,d,o,c){return a(),i("div",null,l)}const f=s(t,[["render",h]]);export{y as __pageData,f as default};