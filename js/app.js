(function(){
'use strict';
const C = window.CONCEPTS.map((c,i)=>Object.assign({id:i},c));
const W = window.WEEKS;
const BY = Object.fromEntries(C.map(c=>[c.name,c]));
const $app = document.getElementById('app');

// ---------- storage ----------
const KEY='mq_v1';
function load(){try{return JSON.parse(localStorage.getItem(KEY))||{};}catch(e){return {};}}
let S = Object.assign({fav:[],mem:[],st:{},hist:[],mode:'write',weeks:[],imp:false,onlyFav:false,skipMem:false,noRep:false,n:10,seen:[],dexBy:'w',memF:'all',hide:false,pairG:'전체'}, load());
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
const fav=id=>S.fav.includes(id), mem=id=>S.mem.includes(id);
function toggle(arr,id){const i=S[arr].indexOf(id); if(i<0)S[arr].push(id); else S[arr].splice(i,1); save();}

// ---------- utils ----------
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];}return a;};
const norm=s=>String(s).normalize('NFKC').toLowerCase().replace(/\(.*?\)/g,'').replace(/[\s\-–—_·.,'’"“”()\/\[\]:;!?~]/g,'');
function isRight(c,input){
  const v=norm(input); if(!v) return false;
  const opts=[c.name,...(c.alias||[])].map(norm);
  return opts.includes(v);
}
function toast(t){const el=document.getElementById('toast');el.textContent=t;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('show'),1500);}
function acc(){let c=0,w=0;for(const k in S.st){c+=S.st[k].c||0;w+=S.st[k].w||0;}return {c,w,t:c+w,p:c+w?Math.round(c/(c+w)*100):null};}

// ---------- theme ----------
const themeBtn=document.getElementById('themeBtn');
function isDark(){const t=document.documentElement.dataset.theme;return t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;}
function paintTheme(){themeBtn.textContent=isDark()?'☀️':'🌙';}
themeBtn.onclick=()=>{const n=isDark()?'light':'dark';document.documentElement.dataset.theme=n;try{localStorage.setItem('mq_theme',n);}catch(e){}paintTheme();};
paintTheme();

// ---------- pool ----------
function pool(){
  let p=C;
  if(S.weeks.length) p=p.filter(c=>S.weeks.includes(c.w));
  if(S.imp) p=p.filter(c=>c.imp);
  if(S.onlyFav) p=p.filter(c=>fav(c.id));
  if(S.skipMem) p=p.filter(c=>!mem(c.id));
  if(S.noRep){const q=p.filter(c=>!S.seen.includes(c.id)); if(q.length) p=q;}
  return p;
}

// ---------- HOME ----------
const MODES=[
 ['write','✍️','설명 → 용어 쓰기','설명을 보고 용어를 직접 입력'],
 ['mc','🔢','설명 → 4지선다','같은 주제의 헷갈리는 보기 중 고르기'],
 ['rev','🔁','용어 → 설명 고르기','용어를 보고 맞는 설명 고르기']
];
function home(){
  const a=acc(), p=pool(), n=S.n==='all'?p.length:Math.min(S.n,p.length);
  $app.innerHTML=`
  <section class="hero">
    <small>생명정보로 보는 미생물 시험 대비</small>
    <h1>미생물 개념 퀴즈</h1>
    <p>1~7주차 · 개념 ${C.length}개 · 헷갈리는 쌍 ${window.PAIRS.length}개</p>
    <div class="kpis"><div class="kpi"><b>${S.mem.length}</b><span>외움</span></div><div class="kpi"><b>${a.p==null?'-':a.p+'%'}</b><span>정답률</span></div></div>
  </section>
  <h2 class="sec">문제 유형</h2>
  ${MODES.map(m=>`<button class="opt ${S.mode===m[0]?'on':''}" data-mode="${m[0]}"><span class="ic">${m[1]}</span><span><b>${m[2]}</b><small>${m[3]}</small></span><span class="rad">${S.mode===m[0]?'✓':''}</span></button>`).join('')}
  <h2 class="sec">범위</h2>
  <div class="chips" id="wk">
    <button class="chip ${!S.weeks.length?'on':''}" data-w="0">전체</button>
    ${Object.keys(W).map(k=>`<button class="chip ${S.weeks.includes(+k)?'on':''}" data-w="${k}">${k}주차</button>`).join('')}
    <button class="chip ${S.imp?'on':''}" id="impBtn" style="margin-left:auto">🔥 시험 중요만</button>
  </div>
  <div class="toggles">
    <button class="tg ${S.onlyFav?'on':''}" data-t="onlyFav"><span class="bx">${S.onlyFav?'✓':''}</span><span><b>⭐ 즐겨찾기만</b><small>${S.fav.length}개</small></span></button>
    <button class="tg ${S.skipMem?'on':''}" data-t="skipMem"><span class="bx">${S.skipMem?'✓':''}</span><span><b>외운 것 빼기</b><small>${S.mem.length}개 제외</small></span></button>
    <button class="tg ${S.noRep?'on':''}" data-t="noRep"><span class="bx">${S.noRep?'✓':''}</span><span><b>한 바퀴</b><small>중복 없이</small></span></button>
  </div>
  <h2 class="sec">문제 수</h2>
  <div class="chips" id="nq">${[10,20,30,'all'].map(v=>`<button class="chip ${S.n===v?'on':''}" data-n="${v}">${v==='all'?'전체':v+'문제'}</button>`).join('')}</div>
  <p class="count">출제 가능 <b>${p.length}개</b> · 이번에 <b>${n}문제</b></p>
  <button class="big" id="go" ${p.length<1?'disabled':''}>퀴즈 시작</button>`;
  $app.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{S.mode=b.dataset.mode;save();home();});
  $app.querySelectorAll('[data-w]').forEach(b=>b.onclick=()=>{const w=+b.dataset.w; if(!w) S.weeks=[]; else {const i=S.weeks.indexOf(w); i<0?S.weeks.push(w):S.weeks.splice(i,1);} save();home();});
  document.getElementById('impBtn').onclick=()=>{S.imp=!S.imp;save();home();};
  $app.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{S[b.dataset.t]=!S[b.dataset.t];save();home();});
  $app.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>{const v=b.dataset.n;S.n=v==='all'?'all':+v;save();home();});
  document.getElementById('go').onclick=()=>{
    let p=shuf(pool()); p=p.slice(0,S.n==='all'?p.length:S.n);
    if(S.noRep){p.forEach(c=>{if(!S.seen.includes(c.id))S.seen.push(c.id);}); if(pool().length===0||C.every(c=>S.seen.includes(c.id))) S.seen=[]; save();}
    startQuiz(p.map(c=>({c,mode:S.mode})),'퀴즈');
  };
}

// ---------- QUIZ ----------
let Q=null;
function distractors(c,n,field){
  const same=shuf(C.filter(x=>x.id!==c.id&&x.cat===c.cat));
  const wk=shuf(C.filter(x=>x.id!==c.id&&x.w===c.w&&x.cat!==c.cat));
  const rest=shuf(C.filter(x=>x.id!==c.id&&x.w!==c.w));
  const out=[];for(const x of [...same,...wk,...rest]){if(out.length>=n)break; if(!out.some(o=>o[field]===x[field])&&x[field]!==c[field]) out.push(x);} return out;
}
function startQuiz(items,label){
  Q={items:items.map(it=>{
      if(it.mode==='write') return it;
      const field=it.mode==='rev'?'def':'name';
      const opts=it.pair? shuf([it.c,it.other]) : shuf([it.c,...distractors(it.c,3,field)]);
      return Object.assign({},it,{opts,field});
    }),i:0,ok:0,wrong:[],label,answered:false};
  location.hash='quiz'; renderQ();
}
function record(c,ok){const s=S.st[c.id]||(S.st[c.id]={c:0,w:0});ok?s.c++:s.w++;save();}
function renderQ(){
  if(!Q){location.hash='home';return;}
  if(Q.i>=Q.items.length) return result();
  const it=Q.items[Q.i], c=it.c, tot=Q.items.length;
  const head=`<div class="qtop"><button class="x" id="quit">✕</button><div class="prog"><i style="width:${Q.i/tot*100}%"></i></div><span class="qn">${Q.i+1}/${tot}</span></div>`;
  const tags=`<div class="tags" style="margin-bottom:8px"><span class="tag w">${c.w}주차</span><span class="tag">${esc(c.cat)}</span>${c.imp?'<span class="tag imp">🔥 시험</span>':''}</div>`;
  let body='';
  if(it.mode==='write'){
    body=`<div class="ask">이 설명에 해당하는 용어는?</div><div class="stem">${esc(c.def)}</div>
      <input class="ans-in" id="in" placeholder="용어 입력 (한글/영어 모두 가능)" autocomplete="off" autocapitalize="off" spellcheck="false">
      <div id="fb"></div>
      <div class="qbtns"><button class="skip" id="skip">모르겠어요</button><button class="big" id="sub">확인</button></div>`;
  } else if(it.mode==='rev'){
    body=`<div class="ask">이 용어의 설명으로 옳은 것은?</div><div class="stem term">${esc(c.name)}</div>
      <div class="choices">${it.opts.map((o,k)=>`<button class="ch" data-k="${k}">${'①②③④'[k]} ${esc(o.def)}</button>`).join('')}</div><div id="fb"></div><div class="qbtns" id="nx"></div>`;
  } else {
    body=`<div class="ask">${it.pair?'둘 중 이 설명에 해당하는 것은?':'이 설명에 해당하는 용어는?'}</div><div class="stem">${esc(c.def)}</div>
      <div class="choices">${it.opts.map((o,k)=>`<button class="ch" data-k="${k}">${'①②③④'[k]} ${esc(o.name)}</button>`).join('')}</div><div id="fb"></div><div class="qbtns" id="nx"></div>`;
  }
  $app.innerHTML=head+`<div class="qcard">${tags}${body}</div>`;
  Q.answered=false;
  document.getElementById('quit').onclick=()=>{if(Q.i===0||confirmQuit()){Q=null;location.hash='home';}};
  if(it.mode==='write'){
    const inp=document.getElementById('in'); inp.focus();
    const submit=()=>{ if(Q.answered){next();return;} judge(isRight(c,inp.value),inp.value); };
    document.getElementById('sub').onclick=submit;
    inp.onkeydown=e=>{if(e.key==='Enter'&&!e.isComposing){e.preventDefault();submit();}};
    document.getElementById('skip').onclick=()=>{ if(!Q.answered) judge(false,''); };
  } else {
    $app.querySelectorAll('.ch').forEach(b=>b.onclick=()=>{
      if(Q.answered) return; const o=it.opts[+b.dataset.k]; const ok=o.id===c.id;
      $app.querySelectorAll('.ch').forEach(x=>{x.disabled=true; if(it.opts[+x.dataset.k].id===c.id) x.classList.add('ok');});
      if(!ok) b.classList.add('no');
      judge(ok,o.name);
    });
  }
}
function confirmQuit(){return true;}
function judge(ok,given){
  const it=Q.items[Q.i], c=it.c; Q.answered=true;
  record(c,ok); if(ok) Q.ok++; else Q.wrong.push({c,given});
  const fb=document.getElementById('fb');
  fb.innerHTML=`<div class="fb ${ok?'ok':'no'}"><b class="h">${ok?'정답! 👏':'오답'}</b>${ok&&it.mode==='write'?'':'정답: <b>'+esc(c.name)+'</b><br>'}${it.mode==='rev'?'':'<span style="color:var(--sub)">'+esc(c.def)+'</span>'}</div>`;
  const nx=it.mode==='write'?null:document.getElementById('nx');
  if(it.mode==='write'){
    const inp=document.getElementById('in'); inp.readOnly=true;
    document.getElementById('sub').textContent=Q.i+1<Q.items.length?'다음 →':'결과 보기';
    document.getElementById('skip').style.display='none';
    setTimeout(()=>document.getElementById('sub').focus(),0);
  } else {
    nx.innerHTML=`<button class="big" id="sub">${Q.i+1<Q.items.length?'다음 →':'결과 보기'}</button>`;
    document.getElementById('sub').onclick=next;
  }
}
function next(){Q.i++;renderQ();window.scrollTo(0,0);}
function result(){
  const tot=Q.items.length, sc=Math.round(Q.ok/tot*100);
  S.hist.unshift({t:Date.now(),label:Q.label,ok:Q.ok,tot});S.hist=S.hist.slice(0,30);save();
  const wr=Q.wrong;
  $app.innerHTML=`<div class="card result"><div style="color:var(--sub);font-weight:700">${esc(Q.label)} 결과</div><div class="sc">${sc}점</div><div>${tot}문제 중 <b>${Q.ok}개</b> 정답</div></div>
  ${wr.length?`<div class="card"><b>틀린 문제 ${wr.length}개</b><ul class="wl">${wr.map(w=>`<li><b>${esc(w.c.name)}</b>${w.given?` <span style="color:var(--sub)">(내 답: ${esc(w.given)})</span>`:''}<small>${esc(w.c.def)}</small></li>`).join('')}</ul></div>`:'<div class="card" style="text-align:center">🎉 모두 맞혔어요!</div>'}
  <div class="row">${wr.length?'<button class="big" id="retry">틀린 것만 다시</button>':''}<button class="big ghost" id="home">처음으로</button></div>`;
  const items=Q.items;
  if(wr.length) document.getElementById('retry').onclick=()=>startQuiz(shuf(items.filter(it=>wr.some(w=>w.c.id===it.c.id))).map(it=>({c:it.c,mode:it.mode,pair:it.pair,other:it.other})),'틀린 문제 다시');
  document.getElementById('home').onclick=()=>{Q=null;location.hash='home';};
}

// ---------- DEX ----------
let dexQ='';const closed=new Set();
function dex(){
  const by=S.dexBy;
  $app.innerHTML=`<input class="search" id="sq" placeholder="용어·설명 검색" value="${esc(dexQ)}">
  <div class="seg"><button class="${by==='w'?'on':''}" data-by="w">주차별</button><button class="${by==='cat'?'on':''}" data-by="cat">주제별</button><button class="${by==='imp'?'on':''}" data-by="imp">🔥 시험 중요</button></div>
  <div class="bar-row"><button class="chip ${S.dexFav?'on':''}" id="df">⭐ 즐겨찾기만 ${S.fav.length}</button><span><button class="link" id="ea">모두 펴기</button> <button class="link" id="ec">모두 접기</button></span></div>
  <div id="dl"></div>`;
  const sq=document.getElementById('sq'); sq.oninput=()=>{dexQ=sq.value;list();};
  $app.querySelectorAll('[data-by]').forEach(b=>b.onclick=()=>{S.dexBy=b.dataset.by;save();closed.clear();dex();});
  document.getElementById('df').onclick=()=>{S.dexFav=!S.dexFav;save();dex();};
  document.getElementById('ea').onclick=()=>{closed.clear();list();};
  document.getElementById('ec').onclick=()=>{groups().forEach(g=>closed.add(g[0]));list();};
  list();
}
function groups(){
  const q=norm(dexQ);
  let items=C.filter(c=>!q||norm(c.name+c.def+(c.alias||[]).join('')).includes(q));
  if(S.dexFav) items=items.filter(c=>fav(c.id));
  const by=S.dexBy, m=new Map();
  if(by==='imp') items=items.filter(c=>c.imp);
  for(const c of items){const k=by==='cat'?c.cat:(c.w+'주차 · '+W[c.w]); if(!m.has(k))m.set(k,[]); m.get(k).push(c);}
  return [...m.entries()];
}
function ccard(c){return `<div class="cc"><button class="star ${fav(c.id)?'on':''}" data-f="${c.id}" aria-label="즐겨찾기">${fav(c.id)?'★':'☆'}</button><h3>${esc(c.name)}</h3><p>${esc(c.def)}</p><div class="tags"><span class="tag w">${c.w}주차</span><span class="tag">${esc(c.cat)}</span>${c.imp?'<span class="tag imp">🔥 시험</span>':''}${mem(c.id)?'<span class="tag">✅ 외움</span>':''}</div></div>`;}
function list(){
  const g=groups(), el=document.getElementById('dl');
  el.innerHTML=g.length?g.map(([k,arr])=>`<div class="grp ${closed.has(k)?'closed':''}" data-g="${esc(k)}"><div class="grp-h"><span><b>${esc(k)}</b><small>${arr.length}개</small></span><span class="ar">▾</span></div><div class="grp-b">${arr.map(ccard).join('')}</div></div>`).join(''):'<p class="empty">검색 결과가 없어요</p>';
  el.querySelectorAll('.grp-h').forEach(h=>h.onclick=()=>{const k=h.parentNode.dataset.g;closed.has(k)?closed.delete(k):closed.add(k);h.parentNode.classList.toggle('closed');});
  el.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{toggle('fav',+b.dataset.f);const on=fav(+b.dataset.f);b.classList.toggle('on',on);b.textContent=on?'★':'☆';toast(on?'즐겨찾기에 추가':'즐겨찾기 해제');});
}

// ---------- CHECK (암기) ----------
const shown=new Set();
function check(){
  const f=S.memF; let items=C;
  if(f==='todo') items=C.filter(c=>!mem(c.id)); else if(f==='done') items=C.filter(c=>mem(c.id)); else if(f==='fav') items=C.filter(c=>fav(c.id)); else if(f==='imp') items=C.filter(c=>c.imp);
  const pct=Math.round(S.mem.length/C.length*100);
  $app.innerHTML=`<div class="mem-top"><b>${S.mem.length}</b> / ${C.length}개 외움 · ${pct}%</div><div class="mbar"><i style="width:${pct}%"></i></div>
  <div class="seg">${[['all','전체'],['todo','미암기'],['done','암기'],['imp','🔥'],['fav','⭐']].map(x=>`<button class="${f===x[0]?'on':''}" data-mf="${x[0]}">${x[1]}</button>`).join('')}</div>
  <div class="sw"><div><b>용어 가리기</b><small>설명만 보고 떠올린 뒤, 용어 칸을 눌러 확인하세요</small></div><button class="switch ${S.hide?'on':''}" id="hd" aria-label="용어 가리기"></button></div>
  <div id="ml">${items.length?items.map(c=>{const hid=S.hide&&!shown.has(c.id);return `<div class="mc ${mem(c.id)?'done':''}"><div class="mc-b"><button class="star ${fav(c.id)?'on':''}" data-f="${c.id}">${fav(c.id)?'★':'☆'}</button><div class="nm" data-r="${c.id}" style="${hid?'background:var(--gl);color:var(--g);border-radius:8px;padding:2px 10px;cursor:pointer;display:inline-block;font-size:13.5px':''}">${hid?'👀 탭해서 용어 보기':esc(c.name)}</div><p>${esc(c.def)}</p><div class="tags" style="margin-top:6px"><span class="tag w">${c.w}주차</span><span class="tag">${esc(c.cat)}</span></div></div><button class="ck" data-m="${c.id}">${mem(c.id)?'✅ 외웠어요':'⬜ 체크'}</button></div>`;}).join(''):'<p class="empty">해당하는 개념이 없어요</p>'}</div>`;
  $app.querySelectorAll('[data-mf]').forEach(b=>b.onclick=()=>{S.memF=b.dataset.mf;save();check();});
  document.getElementById('hd').onclick=()=>{S.hide=!S.hide;shown.clear();save();check();};
  $app.querySelectorAll('[data-r]').forEach(el=>el.onclick=()=>{const id=+el.dataset.r;if(!S.hide)return;shown.add(id);el.removeAttribute('style');el.textContent=C[id].name;});
  $app.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{const id=+b.dataset.m;toggle('mem',id);const on=mem(id);b.textContent=on?'✅ 외웠어요':'⬜ 체크';b.parentNode.classList.toggle('done',on);const pct=Math.round(S.mem.length/C.length*100);$app.querySelector('.mem-top').innerHTML=`<b>${S.mem.length}</b> / ${C.length}개 외움 · ${pct}%`;$app.querySelector('.mbar i').style.width=pct+'%';if(f==='todo'||f==='done')setTimeout(check,250);});
  $app.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{toggle('fav',+b.dataset.f);const on=fav(+b.dataset.f);b.classList.toggle('on',on);b.textContent=on?'★':'☆';});
}

// ---------- PAIRS ----------
function pairItems(ps){const out=[];for(const p of ps){const a=BY[p.a],b=BY[p.b];out.push({c:a,other:b,mode:'mc',pair:true},{c:b,other:a,mode:'mc',pair:true});}return out;}
function pairs(){
  const P=window.PAIRS, gs=['전체',...new Set(P.map(p=>p.g))], g=S.pairG;
  const list=P.filter(p=>g==='전체'||p.g===g);
  $app.innerHTML=`<button class="big" id="allp">🔀 전체 쌍 섞어서 맞히기 (20문제)</button>
  <div class="chips" style="margin:12px 0">${gs.map(x=>`<button class="chip ${g===x?'on':''}" data-pg="${esc(x)}">${esc(x)}</button>`).join('')}</div>
  <h2 class="sec">헷갈리는 쌍 <span style="color:var(--sub);font-weight:600;font-size:13px">${list.length}쌍 · 둘을 비교해서 외우세요</span></h2>
  ${list.map((p,i)=>{const a=BY[p.a],b=BY[p.b];return `<div class="pc"><div class="pc-h"><span class="n">${i+1}</span>${esc(p.a)} <span style="color:var(--sub);font-size:13px">vs</span> ${esc(p.b)}</div>
   <table class="pt"><tr><th>구분</th><th>${esc(p.a)}</th><th>${esc(p.b)}</th></tr>${p.rows.map(r=>`<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')}</table>
   <div class="defs"><div><b>${esc(a.name)}</b>${esc(a.def)}</div><div><b>${esc(b.name)}</b>${esc(b.def)}</div></div>
   <button class="go" data-pi="${P.indexOf(p)}">🎯 이 쌍 맞히기 (2문제)</button></div>`;}).join('')}`;
  document.getElementById('allp').onclick=()=>startQuiz(shuf(pairItems(P)).slice(0,20),'헷갈리는 쌍');
  $app.querySelectorAll('[data-pg]').forEach(b=>b.onclick=()=>{S.pairG=b.dataset.pg;save();pairs();});
  $app.querySelectorAll('[data-pi]').forEach(b=>b.onclick=()=>{const p=P[+b.dataset.pi];startQuiz(shuf(pairItems([p])),p.a+' vs '+p.b);});
}

// ---------- STATS ----------
function stats(){
  const a=acc();
  const wrongs=C.filter(c=>S.st[c.id]&&S.st[c.id].w>0).sort((x,y)=>(S.st[y.id].w-S.st[y.id].c)-(S.st[x.id].w-S.st[x.id].c));
  const wk=Object.keys(W).map(k=>{let c=0,w=0;C.filter(x=>x.w==k).forEach(x=>{const s=S.st[x.id];if(s){c+=s.c;w+=s.w;}});return {k,c,w,p:c+w?Math.round(c/(c+w)*100):null};});
  $app.innerHTML=`<div class="stat-grid"><div class="card"><b>${a.t}</b><span>푼 문제</span></div><div class="card"><b>${a.p==null?'-':a.p+'%'}</b><span>정답률</span></div><div class="card"><b>${S.mem.length}</b><span>외운 개념</span></div></div>
  <div class="card"><b>주차별 정답률</b>${wk.map(x=>`<div class="wk"><span class="lb">${x.k}주차 ${esc(W[x.k])}</span><span class="tr"><i style="width:${x.p||0}%"></i></span><span class="vl">${x.p==null?'-':x.p+'%'}</span></div>`).join('')}</div>
  <div class="card"><div class="bar-row" style="margin:0 0 6px"><b>📕 오답 노트 ${wrongs.length}개</b>${wrongs.length?'<button class="link" id="wq">오답만 다시 풀기</button>':''}</div>
  ${wrongs.length?`<ul class="wl">${wrongs.slice(0,40).map(c=>`<li><b>${esc(c.name)}</b> <span style="color:var(--sub);font-size:12.5px">✗${S.st[c.id].w} ✓${S.st[c.id].c}</span><small>${esc(c.def)}</small></li>`).join('')}</ul>`:'<p class="empty">아직 틀린 문제가 없어요</p>'}</div>
  <div class="card"><b>최근 기록</b>${S.hist.length?`<ul class="wl">${S.hist.slice(0,10).map(h=>`<li>${new Date(h.t).toLocaleString('ko-KR',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})} · ${esc(h.label)} <b style="color:var(--g)">${h.ok}/${h.tot}</b></li>`).join('')}</ul>`:'<p class="empty">퀴즈를 풀면 여기에 쌓여요</p>'}</div>
  <button class="danger" id="rs">기록 초기화</button>`;
  if(wrongs.length) document.getElementById('wq').onclick=()=>startQuiz(shuf(wrongs).slice(0,20).map(c=>({c,mode:S.mode==='rev'?'rev':'mc'})),'오답 노트');
  document.getElementById('rs').onclick=()=>{if(confirm('푼 기록과 오답 노트를 지울까요? (즐겨찾기·외운 것은 유지)')){S.st={};S.hist=[];save();stats();}};
}

// ---------- router ----------
function route(){
  const h=(location.hash||'#home').slice(1);
  document.querySelectorAll('.tabbar a').forEach(a=>a.classList.toggle('on',a.dataset.tab===h||(h==='quiz'&&a.dataset.tab==='home')));
  if(h==='quiz'){ if(Q) renderQ(); else {location.hash='home';} return; }
  Q=null;
  ({home,dex,check,pairs,stats}[h]||home)();
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);
route();
})();
