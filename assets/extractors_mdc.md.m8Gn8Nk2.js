import{_ as s,c as i,o as a,a7 as t}from"./chunks/framework.CueMD8Uh.js";const y=JSON.parse('{"title":"MDC Extractor","description":"MDC extractor for UnoCSS (@unocss/extractor-mdc)","frontmatter":{"title":"MDC Extractor","description":"MDC extractor for UnoCSS (@unocss/extractor-mdc)"},"headers":[],"relativePath":"extractors/mdc.md","filePath":"extractors/mdc.md","lastUpdated":1693491287000}'),e={name:"extractors/mdc.md"},n=t(`<h1 id="mdc-extractor" tabindex="-1">MDC Extractor <a class="header-anchor" href="#mdc-extractor" aria-label="Permalink to &quot;MDC Extractor&quot;">​</a></h1><p>Support extracting classes from <a href="https://content.nuxtjs.org/guide/writing/mdc" target="_blank" rel="noreferrer">MDC (Markdown Components)</a> syntax.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-fGiYD" id="tab-pj-IjKJ" checked="checked"><label for="tab-pj-IjKJ">pnpm</label><input type="radio" name="group-fGiYD" id="tab-vRysN3L"><label for="tab-vRysN3L">yarn</label><input type="radio" name="group-fGiYD" id="tab-Df_6uEm"><label for="tab-Df_6uEm">npm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/extractor-mdc</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/extractor-mdc</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/extractor-mdc</span></span></code></pre></div></div></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unocss</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> extractorMdc</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@unocss/extractor-mdc</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  extractors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    extractorMdc</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><p>It will apply the extraction on <code>.md</code> <code>.mdc</code> and <code>.markdown</code> files, to extract inline props usage of classes. For example</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-dark:#4D9375;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"> Title{.text-2xl.font-bold}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Hello </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">World</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{.text-blue-500}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">![</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">/image.png</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{.w-32.h-32}</span></span></code></pre></div><p>The <code>text-2xl</code>, <code>font-bold</code>, <code>text-blue-500</code>, <code>w-32</code>, <code>h-32</code> classes will be extracted.</p>`,8),l=[n];function h(p,d,k,r,o,c){return a(),i("div",null,l)}const f=s(e,[["render",h]]);export{y as __pageData,f as default};