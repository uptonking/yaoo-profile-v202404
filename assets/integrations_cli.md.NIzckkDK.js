import{_ as s,c as i,o as a,a7 as t}from"./chunks/framework.BDWoCtjx.js";const y=JSON.parse('{"title":"UnoCSS CLI","description":"The CLI for UnoCSS (@unocss/cli).","frontmatter":{"title":"UnoCSS CLI","description":"The CLI for UnoCSS (@unocss/cli)."},"headers":[],"relativePath":"integrations/cli.md","filePath":"integrations/cli.md","lastUpdated":1708075459000}'),e={name:"integrations/cli.md"},n=t(`<h1 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-label="Permalink to &quot;CLI&quot;">​</a></h1><p>The command line interface for UnoCSS: <code>@unocss/cli</code>.</p><ul><li>🍱 Suited for traditional backends like Laravel or Kirby</li><li>👀 <a href="#development">Watch mode</a> included</li><li>🔌 Supports custom configurations via <a href="#configurations"><code>uno.config.ts</code></a></li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>This package is shipped with the <code>unocss</code> package:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-JjiXO" id="tab-VJY_PZK" checked="checked"><label for="tab-VJY_PZK">pnpm</label><input type="radio" name="group-JjiXO" id="tab-pm_FPWe"><label for="tab-pm_FPWe">yarn</label><input type="radio" name="group-JjiXO" id="tab-UM-d6el"><label for="tab-UM-d6el">npm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> unocss</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> unocss</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> unocss</span></span></code></pre></div></div></div><p>You can also install the standalone package:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ItDI4" id="tab-btmQYWU" checked="checked"><label for="tab-btmQYWU">pnpm</label><input type="radio" name="group-ItDI4" id="tab-nxkJ6ry"><label for="tab-nxkJ6ry">yarn</label><input type="radio" name="group-ItDI4" id="tab-dab__Rq"><label for="tab-dab__Rq">npm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/cli</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/cli</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @unocss/cli</span></span></code></pre></div></div></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>If you are not able to find the binary (e.g. with <code>pnpm</code> and only <code>unocss</code> is installed), you&#39;ll need to explicit install <code>@unocss/cli</code> standalone package.</p></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>You can also pass multiple glob patterns to <code>@unocss/cli</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">unocss</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">site/snippets/**/*.php</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">site/templates/**/*.php</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span></code></pre></div><p>Example package configuration:</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Make sure to add escaped quotes to your npm script glob patterns.</p></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">scripts</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">dev</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unocss </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">site/{snippets,templates}/**/*.php</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> --watch</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">build</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unocss </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">site/{snippets,templates}/**/*.php</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">devDependencies</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">@unocss/cli</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">latest</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><h3 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-label="Permalink to &quot;Development&quot;">​</a></h3><p>Add the <code>--watch</code> (or <code>-w</code>) flag to enable watching for file changes:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">unocss</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">site/{snippets,templates}/**/*.php</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --watch</span></span></code></pre></div><h3 id="production" tabindex="-1">Production <a class="header-anchor" href="#production" aria-label="Permalink to &quot;Production&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">unocss</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">site/{snippets,templates}/**/*.php</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span></code></pre></div><p>The final <code>uno.css</code> will be generated to the current directory by default.</p><h2 id="built-in-features" tabindex="-1">Built-in features <a class="header-anchor" href="#built-in-features" aria-label="Permalink to &quot;Built-in features&quot;">​</a></h2><h3 id="configurations" tabindex="-1">Configurations <a class="header-anchor" href="#configurations" aria-label="Permalink to &quot;Configurations&quot;">​</a></h3><p>Create a <code>uno.config.js</code> or <code>uno.config.ts</code> configuration file the root-level of your project to customize UnoCSS.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">unocss</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  cli</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    entry</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {}, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// CliEntryItem | CliEntryItem[]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> CliEntryItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * Glob patterns to match files</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  patterns</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * The output filename for the generated UnoCSS file</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  outFile</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><p>For a list of options, head over to the <a href="/config/">UnoCSS configurations</a> docs.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table><thead><tr><th>Options</th><th></th></tr></thead><tbody><tr><td><code>-v, --version</code></td><td>Display the current version of UnoCSS</td></tr><tr><td><code>-c, --config-file &lt;file&gt;</code></td><td>Config file</td></tr><tr><td><code>-o, --out-file &lt;file&gt;</code></td><td>The output filename for the generated UnoCSS file. Defaults to <code>uno.css</code> in the current working directory</td></tr><tr><td><code>--stdout</code></td><td>Write the generated UnoCSS file to STDOUT. Will cause the <code>--watch</code> and <code>--out-file</code> being ignored</td></tr><tr><td><code>-w, --watch</code></td><td>Indicates if the files found by the glob pattern should be watched</td></tr><tr><td><code>--preflights</code></td><td>Enable preflight styles</td></tr><tr><td><code>--write-transformed</code></td><td>Update source files with transformed utilities</td></tr><tr><td><code>-m, --minify</code></td><td>Minify generated CSS</td></tr><tr><td><code>-h, --help</code></td><td>Display available CLI options</td></tr></tbody></table>`,28),l=[n];function h(p,d,k,o,r,c){return a(),i("div",null,l)}const u=s(e,[["render",h]]);export{y as __pageData,u as default};