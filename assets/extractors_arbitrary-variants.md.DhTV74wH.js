import{_ as s,c as i,o as a,a7 as t}from"./chunks/framework.CueMD8Uh.js";const y=JSON.parse('{"title":"Arbitrary Variants Extractor","description":"","frontmatter":{"title":"Arbitrary Variants Extractor"},"headers":[],"relativePath":"extractors/arbitrary-variants.md","filePath":"extractors/arbitrary-variants.md","lastUpdated":1681029135000}'),e={name:"extractors/arbitrary-variants.md"},n=t(`<h1 id="arbitrary-variants-extractor" tabindex="-1">Arbitrary Variants Extractor <a class="header-anchor" href="#arbitrary-variants-extractor" aria-label="Permalink to &quot;Arbitrary Variants Extractor&quot;">​</a></h1><p>A more complex extractor to support arbitrary variants for utilities.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> class</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">[&amp;&gt;*]:m-1 [&amp;[open]]:p-2</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><p>Will be captured with <code>[&amp;&gt;*]:m-1</code> and <code>[&amp;[open]]:p-2</code> as variants.</p><p>This extractor is included in <a href="/yaoo-showcase-profile-v202404/presets/mini"><code>@unocss/preset-mini</code></a> as the default extractor. Normally you don&#39;t need to install this package manually.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-DVMKR" id="tab-6cQmk8D" checked="checked"><label for="tab-6cQmk8D">pnpm</label><input type="radio" name="group-DVMKR" id="tab-3JyXtN7"><label for="tab-3JyXtN7">yarn</label><input type="radio" name="group-DVMKR" id="tab-WLj7_KX"><label for="tab-WLj7_KX">npm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/extractor-arbitrary-variants</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/extractor-arbitrary-variants</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/extractor-arbitrary-variants</span></span></code></pre></div></div></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unocss</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> extractorArbitrary</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@unocss/extractor-arbitrary-variants</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  extractors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    extractorArbitrary</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div>`,8),l=[n];function r(h,p,k,d,o,c){return a(),i("div",null,l)}const b=s(e,[["render",r]]);export{y as __pageData,b as default};
