import{_ as s,c as i,o as a,a7 as e}from"./chunks/framework.BDWoCtjx.js";const y=JSON.parse('{"title":"Variants","description":"Variants allow you to apply some variations to your existing rules.","frontmatter":{"title":"Variants","description":"Variants allow you to apply some variations to your existing rules."},"headers":[],"relativePath":"config/variants.md","filePath":"config/variants.md","lastUpdated":1703678323000}'),t={name:"config/variants.md"},h=e(`<h1 id="variants" tabindex="-1">Variants <a class="header-anchor" href="#variants" aria-label="Permalink to &quot;Variants&quot;">​</a></h1><p><a href="https://windicss.org/utilities/general/variants.html" target="_blank" rel="noreferrer">Variants</a> allow you to apply some variations to your existing rules, like the <code>hover:</code> variant from Tailwind CSS.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">variants</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // hover:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">matcher</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">matcher</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">startsWith</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hover:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> matcher</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // slice \`hover:\` prefix and passed to the next variants and rules</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      matcher</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">matcher</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">slice</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">6</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      selector</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt; </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">\`</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:hover</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">\`</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">],</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">rules</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">^</span><span style="--shiki-light:#AB5E3F;--shiki-dark:#C4704F;">m-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">$</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ([,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">])</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ({ </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">margin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">\`</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">d </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">rem</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">\`</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> })],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span></code></pre></div><ul><li><code>matcher</code> controls when the variant is enabled. If the return value is a string, it will be used as the selector for matching the rules.</li><li><code>selector</code> provides the availability of customizing the generated CSS selector.</li></ul><h2 id="under-the-hood" tabindex="-1">Under the hood <a class="header-anchor" href="#under-the-hood" aria-label="Permalink to &quot;Under the hood&quot;">​</a></h2><p>Let&#39;s have a tour of what happened when matching for <code>hover:m-2</code>:</p><ul><li><code>hover:m-2</code> is extracted from users usages</li><li><code>hover:m-2</code> send to all variants for matching</li><li><code>hover:m-2</code> is matched by our variant and returns <code>m-2</code></li><li>the result <code>m-2</code> will be used for the next round of variants matching</li><li>if no other variant is matched, <code>m-2</code> will then goes to match the rules</li><li>our first rule get matched and generates <code>.m-2 { margin: 0.5rem; }</code></li><li>finally, we apply our variants&#39; transformation to the generated CSS. In this case, we prepended <code>:hover</code> to the <code>selector</code> hook</li></ul><p>As a result, the following CSS will be generated:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">hover</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">m-2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">hover</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> margin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.5</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">rem</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span></code></pre></div><p>With this, we could have <code>m-2</code> applied only when users hover over the element.</p><h2 id="going-further" tabindex="-1">Going further <a class="header-anchor" href="#going-further" aria-label="Permalink to &quot;Going further&quot;">​</a></h2><p>The variant system is very powerful and can&#39;t be covered fully in this guide, you can check <a href="https://github.com/unocss/unocss/tree/main/packages/preset-mini/src/_variants" target="_blank" rel="noreferrer">the default preset&#39;s implementation</a> to see more advanced usages.</p>`,13),n=[h];function l(k,r,p,d,o,g){return a(),i("div",null,n)}const u=s(t,[["render",l]]);export{y as __pageData,u as default};
