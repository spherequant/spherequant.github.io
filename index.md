---
title: SphereQuant
layout: home
description: "QUARK, the Quant AI Research Kit by SphereQuant: your own market research database, 200 GB of intraday data and an AI research analyst for traders and investors."
---

<section class="hub-hero">
  <div class="hub-hero-text">
    <span class="eyebrow">Real quant research · by SphereQuant</span>
    <h1>Your market intuition isn't obsolete.</h1>
    <p>It's your biggest advantage. QUARK is the research process for working with AI analysts — from a trading hunch to a tested, audited verdict.</p>
    <div class="hero-actions">
      <a href="https://forms.gle/Gj73Ys6A6PNFjpWw6" class="button button-primary" target="_blank" rel="noopener">Apply for Cohort 2</a>
      <a href="#skills" class="button">Browse the skills →</a>
    </div>
    <dl class="hub-stats">
      <div><dd>200 GB</dd><dt>Intraday data</dt></div>
      <div><dd>14</dd><dt>Research skills</dt></div>
      <div><dd>₹0</dd><dt>AI cost</dt></div>
    </dl>
  </div>

  <div class="hub-hero-visual" aria-hidden="true">
    <div class="term">
      <div class="term-bar"><i></i><i></i><i></i><span>quark — opencode</span></div>
<pre><span class="t-p">›</span> /event-study NIFTY after a 2% gap-down,
  next 5 sessions

<span class="t-d">● reading factors.daily_returns</span>
<span class="t-d">● costs: STT + fees + slippage</span>

  day    mean   hit    t
  +1     ···    ···   ···
  +3     ···    ···   ···
  +5     ···    ···   ···

<span class="t-p">›</span> /bias-audit
<span class="t-ok">✓ no look-ahead</span>  <span class="t-ok">✓ point-in-time</span>
<span class="t-w">! check sample size</span></pre>
    </div>
  </div>
</section>

<section class="hub-split">
  <h2>Bad research is now the cheapest it has ever been.</h2>
  <div>
    <p>A lot of people think AI has made market research easy. That a backtest is now a thirty-second job, and that the quant desk, as a discipline, is finished.</p>
    <p>AI analysts write code faster than any human ever has. But without careful guidance, they use tomorrow's prices, forget delisted stocks, ignore STT and slippage, and hand you a beautiful equity curve. The more you trust it, the more it costs you.</p>
    <p>If you can give an AI clean data and a real research process, you can test ideas faster than any trader could before. QUARK is for anyone who cares about the money behind the result.</p>
  </div>
</section>

<section class="hub-section" id="skills">
  <div class="hub-head">
    <div>
      <h2>A real research process, as installable skills</h2>
      <p>Every skill comes with QUARK and runs in your AI analyst with one command. Start anywhere. Most people start with the main flow.</p>
    </div>
    <a href="{{ '/curriculum/' | relative_url }}" class="button">See the curriculum →</a>
  </div>

  <div class="skill-panel">
    <div class="sp-group">
      <h3><span>01</span> Getting Started</h3>
      <p>Set up once, then find your way around the data.</p>
      <ul class="skills"><li>/quark-setup</li><li>/data-check</li><li>/ask-data</li></ul>
      <a class="sp-start" href="{{ '/curriculum/' | relative_url }}">Start with /quark-setup <b>→</b></a>
    </div>
    <div class="sp-group">
      <h3><span>02</span> The Main Flow</h3>
      <p>The hunch→verdict spine, in order.</p>
      <ul class="skills"><li>/hypothesis</li><li>/event-study</li><li>/backtest</li><li>/bias-audit</li><li>/report</li></ul>
      <a class="sp-start" href="{{ '/curriculum/' | relative_url }}">Start with /hypothesis <b>→</b></a>
    </div>
    <div class="sp-group">
      <h3><span>03</span> Intraday</h3>
      <p>Studies on the 200 GB hemis_research intraday store.</p>
      <ul class="skills"><li>/ieod-study</li><li>/expiry-day</li><li>/opening-range</li></ul>
      <a class="sp-start" href="{{ '/curriculum/' | relative_url }}">Start with /expiry-day <b>→</b></a>
    </div>
    <div class="sp-group">
      <h3><span>04</span> Portfolio &amp; Monitoring</h3>
      <p>Combine what works, size it, and watch it every morning.</p>
      <ul class="skills"><li>/portfolio</li><li>/risk-view</li><li>/add-dashboard</li></ul>
      <a class="sp-start" href="{{ '/curriculum/' | relative_url }}">Start with /add-dashboard <b>→</b></a>
    </div>
  </div>
</section>

<section class="hub-section">
  <div class="hub-head hub-head-icon">
    <div class="hub-icon" aria-hidden="true">Q</div>
    <div>
      <h2>What do you want to do?</h2>
      <p>Most traders find the gap is further back than they expected. Pick the honest one.</p>
    </div>
  </div>

  <div class="ask-rows">
    <div class="ask-row">
      <div><span class="tag">Know your data</span><h3>What is actually in my database?</h3></div>
      <ul>
        <li><span>Layer</span>Raw: exchange files, exactly as received</li>
        <li><span>Layer</span>Derived: adjusted prices, continuous futures, option chains</li>
        <li><span>Layer</span>Factors: one row per instrument per day</li>
      </ul>
    </div>
    <div class="ask-row">
      <div><span class="tag">Test a hunch</span><h3>Does the pattern I trade actually work?</h3></div>
      <ul>
        <li><span>Skill</span>/hypothesis — make it falsifiable</li>
        <li><span>Study</span>Post-results drift and IV crush</li>
        <li><span>Study</span>OI build-up: does it lead or lag price?</li>
      </ul>
    </div>
    <div class="ask-row">
      <div><span class="tag">Go intraday</span><h3>What really happens inside the session?</h3></div>
      <ul>
        <li><span>Study</span>Expiry-day behaviour of NIFTY and BANKNIFTY</li>
        <li><span>Study</span>Opening range breakouts by sector and volatility</li>
        <li><span>Study</span>Gap fills: how often, how fast, and when</li>
      </ul>
    </div>
    <div class="ask-row">
      <div><span class="tag">Trade it</span><h3>Would I put real money behind this?</h3></div>
      <ul>
        <li><span>Skill</span>/backtest with STT, fees and slippage</li>
        <li><span>Skill</span>/bias-audit before you believe it</li>
        <li><span>Skill</span>/add-dashboard to watch it every morning</li>
      </ul>
    </div>
  </div>
</section>

<section class="hub-section">
  <div class="cohort">
    <div class="cohort-visual" aria-hidden="true">
      <span>QUARK</span>
      <small>Quant AI Research Kit</small>
    </div>
    <dl class="hub-stats">
      <div><dd>₹50,000</dd><dt>+ GST · one plan</dt></div>
      <div><dd>4 weeks live</dd><dt>Format</dt></div>
      <div><dd>1 Dec</dd><dt>Next dates</dt></div>
    </dl>
    <span class="eyebrow">Cohort-based course</span>
    <h2>QUARK Cohort 2</h2>
    <p class="cohort-sub">Set up your own research desk in week one. Test your own trading ideas from week two.</p>
    <p>1 December 2026 – 15 January 2027. Database, update scripts, 200 GB of intraday data, an AI analyst, dashboards, and twelve months of clinics and updates.</p>
    <div class="hero-actions">
      <a href="https://forms.gle/Gj73Ys6A6PNFjpWw6" class="button button-primary" target="_blank" rel="noopener">Apply for Cohort 2</a>
      <a href="{{ '/quark/' | relative_url }}" class="button">More info →</a>
    </div>
  </div>
</section>

<section class="hub-split hub-about">
  <h2>From SphereQuant.</h2>
  <div>
    <p>SphereQuant builds research infrastructure for traders and investors. QUARK is the second version of our cohort program, rebuilt so your desk is running in a week instead of a quarter.</p>
    <p>We also advise emerging funds and independent traders on research infrastructure. <a href="{{ '/consulting/' | relative_url }}">Consulting →</a></p>
  </div>
</section>
