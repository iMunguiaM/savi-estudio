const logoUrl = 'https://saviclinica.com/wp-content/uploads/2023/12/logo-savi.png';

const pal = ['#00C2A8','#1A2B4C','#FCA366','#2BB179','#7B61FF','#E66464','#F59E0B','#3B82F6','#2DD4BF','#84CC16','#6366F1','#EA580C','#06B6D4','#D97706','#8B5CF6','#64748B','#10B981','#B45309','#DC2626','#134E4A'];

const styles = {
  style_1: { label:'Estilo 1: Clínico Impacto', short:'Tipografía gigante, dato, tarjeta clínica, alerta roja y solución turquesa.', color:'#00C2A8', dot:'#00C2A8' },
  style_2: { label:'Estilo 2: Testimonial Emocional Pro', short:'Mismo ADN del ejemplo: foto humana, comillas, CTA, testimonio y footer premium.', color:'#8B5CF6', dot:'#8B5CF6' },
  style_3: { label:'Estilo 3: Diagnóstico Dashboard', short:'Paneles médicos, métricas, iconos y sensación tecnológica.', color:'#06B6D4', dot:'#06B6D4' },
  style_4: { label:'Estilo 4: Testimonial Emocional', short:'Restaurado: púrpura, comillas, etiquetas de paso.', color:'#7B61FF', dot:'#7B61FF' },
  style_5: { label:'Estilo 5: Premium Cálido', short:'Restaurado: navy, dorado, arcos y sellos premium.', color:'#F5A623', dot:'#F5A623' }
};

const imgs = [
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1584432830680-aa991fbdd858?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1505751172107-1606d20038ba?auto=format&fit=crop&q=85&w=1200'
];

let active = 'style_1';
let accent = '#00C2A8';
let variant = 0;
let layout = {};
let brand = 'CLÍNICA SAVI';
let phone = '932 124 7066';
let address = 'Blvd. Francisco Trujillo Gurría #402, Col. La Sierra, Teapa, Tabasco';
let slides = makeSlides();

window.onload = () => { catalog(); palette(); applyStyleCatalog('style_1'); };

function makeSlides(){
  return [
    {num:1,type:'gancho',label:'GANCHO',tag:'GANCHO',title:'¿Tu visión ya no se siente igual?',desc:'A veces comienza con pequeños cambios… y terminamos normalizando lo que no debería ser normal.',footer:'Dr. iChaks / desliza',quote:'Escuchar tus síntomas hoy puede cambiar tu mañana.',button:'Desliza',img:imgs[0],icon:'eye'},
    {num:2,type:'dato',label:'DATO',tag:'DATO',metric:'1 de cada 4',title:'La visión borrosa no siempre es solo cansancio.',desc:'Puede aparecer por resequedad ocular, cambios en la graduación o problemas que necesitan revisión especializada.',footer:'Datos clínicos verificados por SAVI',quote:'Tu vista te da independencia, seguridad y bienestar. Cuidarla es invertir en ti.',button:'Sigue leyendo',img:imgs[1],icon:'info'},
    {num:3,type:'problema',label:'PROBLEMA',tag:'PROBLEMA',title:'El problema es acostumbrarte a ver mal.',desc:'Cuando lo normalizas, sigues forzando tus ojos y dejas pasar la oportunidad de detectar la causa a tiempo.',footer:'Ver borroso todos los días no debería ser normal.',quote:'Pensé que era normal… hasta que empeoró.',button:'Desliza',img:imgs[2],icon:'activity'},
    {num:4,type:'factores',label:'CAUSA',tag:'CAUSA',title:'Hay varias causas detrás de una visión borrosa.',desc:'Desde resequedad y graduación, hasta inflamación, catarata o problemas de retina.',bullets:['Resequedad ocular','Cambios de graduación','Inflamación','Retina'],footer:'Detectar el origen cambia el tratamiento.',button:'Continúa',img:imgs[3],icon:'list-checks'},
    {num:5,type:'alerta',label:'RIESGO',tag:'RIESGO',title:'Esperar demasiado puede salirte caro.',desc:'Si la visión borrosa empeora o se acompaña de dolor, destellos o lagrimeo, el riesgo de complicaciones es mayor.',footer:'No todo se resuelve solo con descanso.',quote:'No todo se resuelve solo con descanso.',button:'No lo ignores',img:imgs[4],icon:'alert-triangle'},
    {num:6,type:'solucion',label:'SOLUCIÓN',tag:'SOLUCIÓN',title:'La buena noticia: sí puede tratarse.',desc:'Una valoración oftalmológica a tiempo permite identificar la causa y orientar el tratamiento adecuado.',footer:'Siguiente paso: valoración médica.',quote:'Cuando entendí la causa, recuperé tranquilidad. — Ana, paciente Savi',button:'Agenda tu valoración',img:imgs[5],icon:'sparkles'},
    {num:7,type:'pasos',label:'ACCIÓN',tag:'ACCIÓN',title:'Si notas cambios, da el siguiente paso.',desc:'Agenda tu revisión, cuéntanos tus síntomas y evita seguir forzando tu vista.',bullets:['Agenda','Describe tus síntomas','Acude a valoración'],footer:'Tres pasos. Una decisión.',button:'Hazlo hoy',img:imgs[6],icon:'route'},
    {num:8,type:'cta',label:'CTA',tag:'CTA',title:'Ver bien también es vivir mejor',desc:'Si notas visión borrosa o molestias, permítenos ayudarte con una valoración especializada.',footer:'Clínica SAVI · Teapa, Tabasco',quote:'Volver a ver con claridad me devolvió la tranquilidad y la alegría de mi día a día. — María, paciente Savi',button:'Agenda tu cita',img:imgs[7],icon:'message-circle'}
  ];
}

function catalog(){
  document.getElementById('catalog-buttons').innerHTML = Object.entries(styles).map(([k,s]) => `
    <button onclick="applyStyleCatalog('${k}')" id="cat-${k}" class="catalog-btn p-3 border border-slate-800 bg-slate-950 text-left rounded-lg text-xs transition flex justify-between items-center">
      <div><span class="block font-bold text-slate-200">${s.label}</span><span class="block text-[9px] text-slate-500">${s.short}</span></div>
      <span class="w-3 h-3 rounded-full" style="background:${s.dot}"></span>
    </button>`).join('');
}

function palette(){
  const g = document.getElementById('palette-grid');
  g.innerHTML = '';
  pal.forEach(c => {
    const d = document.createElement('div');
    d.className = 'color-dot';
    d.style.backgroundColor = c;
    d.onclick = () => { accent = c; sync(); render(); };
    g.appendChild(d);
  });
}

function applyStyleCatalog(s){
  active = s;
  accent = styles[s].color;
  layout = {};
  document.querySelectorAll('.catalog-btn').forEach(b => { b.classList.remove('border-saviTeal','bg-slate-900'); b.classList.add('border-slate-800','bg-slate-950'); });
  const b = document.getElementById('cat-'+s);
  b?.classList.add('border-saviTeal','bg-slate-900');
  document.getElementById('style-indicator-badge').innerText = 'Estilo Activo: ' + styles[s].label;
  sync();
  render();
}

function sync(){
  document.querySelectorAll('.color-dot').forEach(d => d.classList.toggle('active', hex(d.style.backgroundColor).toLowerCase() === accent.toLowerCase()));
  document.getElementById('variant-badge').innerText = 'Variante ' + (variant + 1);
}
function hex(rgb){ if(!rgb || rgb[0] === '#') return rgb || ''; const p = rgb.match(/\d+/g); return p ? '#' + p.slice(0,3).map(x => (+x).toString(16).padStart(2,'0')).join('') : rgb; }
function updateBrand(){ brand = document.getElementById('brand-name').value || brand; phone = document.getElementById('doc-phone').value || phone; address = document.getElementById('doc-address').value || address; render(); }
function updateSlideText(i,f,v){ v = v.trim(); if(f.startsWith('bullet')) slides[i].bullets[+f.replace('bullet','')-1] = v; else slides[i][f] = v; }
function v(i){ return layout[i] ?? ((variant+i)%4); }

function render(){
  const g = document.getElementById('grid-layout');
  g.innerHTML = '';
  slides.forEach((s,i) => {
    const inner = active === 'style_1' ? impact(s,i) : active === 'style_2' ? testimonialPro(s,i) : active === 'style_3' ? dash(s,i) : active === 'style_4' ? testimonial(s,i) : warm(s,i);
    const bg = active === 'style_5' ? '#001f3f' : active === 'style_4' ? '#1a1b3a' : '#0D0D0D';
    g.innerHTML += card(i, inner, bg);
  });
  lucide.createIcons();
}

function card(i,inner,bg){
  return `<div class="flex flex-col gap-2"><div id="slide-card-${i+1}" class="relative w-[320px] h-[400px] overflow-hidden rounded-2xl slide-shadow select-none" style="--accent:${accent};background:${bg}">${inner}</div><div class="flex gap-1.5 w-[320px]"><button onclick="cycleLayout(${i})" class="flex-1 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded-lg text-[9px] font-bold border border-slate-700/60 flex justify-center items-center gap-1"><i data-lucide="layout-template" class="w-3 h-3"></i>Cambiar distribución</button><button onclick="downloadSlide(${i})" class="w-8 py-1.5 bg-saviTeal/10 hover:bg-saviTeal/20 text-saviTeal rounded-lg text-[9px] border border-saviTeal/30 flex justify-center"><i data-lucide="download" class="w-3 h-3"></i></button></div></div>`;
}

function head(s,r){
  return `<div class="absolute top-4 left-5 right-5 z-30 flex items-center justify-between"><div class="flex items-center gap-2"><img src="${logoUrl}" crossorigin="anonymous" class="w-7 h-7 rounded-lg bg-white p-0.5"><span class="text-[11px] font-display font-black text-white tracking-tight">${brand}</span></div><span class="text-[9px] font-black tracking-widest uppercase" style="color:var(--accent)">${r || (s.num===1?'DESLIZA':s.num+' / 8')}</span></div>`;
}
const foot = t => `<div class="absolute bottom-4 left-5 right-5 z-30 border-t border-white/10 pt-3 flex justify-between text-[8px] text-white/55 font-bold"><span>${t || 'Dr. iChaks'}</span><span>Teapa, Tabasco</span></div>`;
const decor = () => `<div class="absolute -top-20 -left-16 w-52 h-52 rounded-full bg-emerald-500/10 blur-xl"></div><div class="absolute -bottom-20 -right-14 w-56 h-56 rounded-full bg-emerald-500/10 blur-xl"></div>`;
function chip(t,c='var(--accent)'){ return `<span class="inline-flex w-fit px-3 py-1 rounded-lg border text-[9px] font-black uppercase tracking-widest" style="color:${c};border-color:${c==='var(--accent)'?'color-mix(in srgb,var(--accent) 45%,transparent)':'rgba(255,91,99,.35)'};background:rgba(255,255,255,.03)">${t}</span>`; }

function saviLogoBlock(){
  return `<div class="absolute top-[20px] left-[22px] z-30 flex items-center gap-3">
    <img src="${logoUrl}" crossorigin="anonymous" class="w-[48px] h-[48px] rounded-xl bg-white p-1 shadow-lg">
    <div class="leading-none"><div class="text-white text-[17px] font-display font-black tracking-tight">CLÍNICA</div><div class="text-[31px] font-display font-black leading-[.86] tracking-tight" style="color:var(--accent)">SAVI</div></div>
  </div>`;
}
function cofepris(){ return `<div class="absolute top-[25px] right-[22px] z-30 text-[10px] tracking-wide text-white/85">COFEPRIS: 2427154023A00002</div>`; }
function quoteRail(){ return `<div class="absolute left-[19px] top-[112px] bottom-[122px] z-20"><div class="text-[46px] font-serif leading-none" style="color:var(--accent)">“</div><div class="absolute left-[12px] top-[38px] bottom-0 w-[2px]" style="background:var(--accent)"></div></div>`; }
function titleWithAccent(t){
  const custom = {
    'Ver bien también es vivir mejor':'Ver bien<br><span style="color:var(--accent)">también es</span><br>vivir mejor',
    '¿Tu visión ya no se siente igual?':'¿Tu <span style="color:var(--accent)">visión</span><br>ya no se<br>siente igual?',
    'La visión borrosa no siempre es solo cansancio.':'La visión<br><span style="color:var(--accent)">borrosa no</span><br>siempre es<br><span style="color:var(--accent)">solo cansancio.</span>',
    'El problema es acostumbrarte a ver mal.':'El problema<br>es <span style="color:var(--accent)">acostumbrarte</span><br>a ver mal.',
    'Hay varias causas detrás de una visión borrosa.':'Hay varias<br><span style="color:var(--accent)">causas</span><br>detrás de<br>una <span style="color:var(--accent)">visión borrosa.</span>',
    'Esperar demasiado puede salirte caro.':'Esperar<br>demasiado<br><span style="color:var(--accent)">puede<br>salirte caro.</span>',
    'La buena noticia: sí puede tratarse.':'La buena<br>noticia: <span style="color:var(--accent)">sí<br>puede tratarse.</span>',
    'Si notas cambios, da el siguiente paso.':'Si notas<br><span style="color:var(--accent)">cambios,</span><br>da el siguiente<br><span style="color:var(--accent)">paso.</span>'
  };
  if(custom[t]) return custom[t];
  const w = t.split(' '), m = Math.max(1, Math.floor(w.length/2)-1);
  return w.map((x,i) => i===m || i===m+1 ? `<span style="color:var(--accent)">${x}</span>` : x).join(' ');
}
function purpleButton(text, icon='calendar-days'){
  return `<button class="mt-4 h-[46px] rounded-xl px-4 pr-5 inline-flex items-center gap-3 font-display font-black text-[16px] text-[#07111f] shadow-2xl" style="background:linear-gradient(135deg,var(--accent),#9b7cff)"><span class="w-8 h-8 rounded-full bg-[#07111f] text-white flex items-center justify-center"><i data-lucide="${icon}" class="w-4 h-4"></i></span>${text}</button>`;
}
function testimonialBox(text, name){
  if(!text) return '';
  return `<div class="relative mt-5 max-w-[238px] rounded-2xl border px-4 py-4 text-white/88" style="border-color:var(--accent);background:rgba(2,8,20,.58)"><div class="absolute -top-6 left-4 text-[46px] font-serif leading-none" style="color:var(--accent)">“</div><p class="text-[12px] leading-snug pt-1">${text}</p>${name?`<p class="mt-2 text-[11px] text-white/80">— <b style="color:var(--accent)">${name}</b></p>`:''}</div>`;
}
function contactFooter(){
  return `<div class="absolute left-[14px] right-[14px] bottom-[28px] z-30 h-[70px] rounded-[26px] border border-white/14 bg-[#061225]/88 backdrop-blur-md px-4 flex items-center gap-4">
    <div class="flex items-center gap-3 w-[43%]"><div class="w-[43px] h-[43px] rounded-full bg-green-600 flex items-center justify-center shadow-lg"><i data-lucide="message-circle" class="w-6 h-6 text-white"></i></div><div><div class="text-[9px] font-black text-emerald-400 leading-none">Escríbenos por WhatsApp</div><div class="mt-2 text-[20px] leading-none font-display font-black text-white tracking-tight">${phone}</div></div></div>
    <div class="w-px h-[44px] bg-white/18"></div>
    <div class="flex items-center gap-3 flex-1 min-w-0"><div class="w-[43px] h-[43px] rounded-full flex items-center justify-center shrink-0" style="background:rgba(139,92,246,.22);color:var(--accent)"><i data-lucide="map-pin" class="w-6 h-6"></i></div><div><div class="text-[10px] font-black leading-none" style="color:var(--accent)">Visítanos en nuestra clínica</div><div class="mt-2 text-[11px] leading-tight text-white/92">${address}</div></div></div>
  </div><div class="absolute bottom-[6px] left-1/2 -translate-x-1/2 z-40 rounded-full border px-4 py-1 text-[9px] font-black uppercase tracking-widest" style="color:var(--accent);border-color:rgba(139,92,246,.60);background:rgba(2,8,20,.72)">ESTILO 2 · TESTIMONIAL EMOCIONAL PRO</div>`;
}
function photoBg(s, pos='right'){
  const sideClass = pos === 'left' ? 'left-0' : 'right-0';
  const grad = pos === 'left' ? 'linear-gradient(270deg,#071225 0%,rgba(7,18,37,.93) 46%,rgba(7,18,37,.35) 78%)' : 'linear-gradient(90deg,#071225 0%,rgba(7,18,37,.93) 46%,rgba(7,18,37,.35) 78%)';
  return `<img src="${s.img}" crossorigin="anonymous" class="absolute top-0 ${sideClass} h-full w-[64%] object-cover opacity-95"><div class="absolute inset-0" style="background:${grad}"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_90%_12%,rgba(255,255,255,.16),transparent_22%),linear-gradient(0deg,rgba(3,9,19,.96)_0%,transparent_35%)]"></div>`;
}

function testimonialPro(s,i){
  const pos = v(i)%2 === 0 ? 'right' : 'right';
  let body = '';
  const textLeft = 'left-[48px] right-[140px]';
  if(s.type === 'dato'){
    body = `<div class="absolute z-20 top-[108px] ${textLeft}">${chip('DATO')}<div class="mt-3 text-[48px] font-display font-black leading-none" style="color:var(--accent)">${s.metric}</div><div class="text-[8px] font-black tracking-[.18em] text-white/45 uppercase">CIFRA ALARMANTE</div><h2 class="mt-4 text-[27px] font-display font-black leading-[.98] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${titleWithAccent(s.title)}</h2><p class="mt-4 text-[13px] leading-snug text-white/75 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p>${purpleButton(s.button || 'Sigue leyendo','arrow-right')}${testimonialBox(s.quote)}</div>`;
  } else if(s.type === 'problema'){
    body = `<div class="absolute z-20 top-[108px] ${textLeft}">${chip('PROBLEMA')}<h2 class="mt-4 text-[33px] font-display font-black leading-[.98] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${titleWithAccent(s.title)}</h2><p class="mt-4 text-[13px] leading-snug text-white/75 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p>${testimonialBox(s.quote)}${purpleButton(s.button || 'Desliza','arrow-right')}</div>`;
  } else if(s.type === 'factores'){
    body = `<div class="absolute z-20 top-[108px] ${textLeft}">${chip('CAUSA')}<h2 class="mt-4 text-[31px] font-display font-black leading-[.98] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${titleWithAccent(s.title)}</h2><p class="mt-3 text-[12px] leading-snug text-white/72 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p><div class="mt-4 grid grid-cols-2 gap-2 max-w-[238px] rounded-2xl border border-white/12 bg-[#061225]/72 p-3">${s.bullets.map((b,k)=>`<div class="flex items-center gap-2 text-[10.5px] text-white/92 font-bold"><span class="w-6 h-6 rounded-full flex items-center justify-center border" style="border-color:var(--accent);color:var(--accent)"><i data-lucide="check" class="w-3.5 h-3.5"></i></span><span contenteditable class="editable" onblur="updateSlideText(${i},'bullet${k+1}',this.innerText)">${b}</span></div>`).join('')}</div>${purpleButton(s.button || 'Continúa','calendar-days')}</div>`;
  } else if(s.type === 'alerta'){
    body = `<div class="absolute z-20 top-[104px] ${textLeft}"><h2 class="mt-1 text-[35px] font-display font-black leading-[.98] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${titleWithAccent(s.title)}</h2><div class="mt-3 inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[10px] font-black" style="border-color:var(--accent);color:var(--accent)"><i data-lucide="alert-triangle" class="w-3.5 h-3.5"></i> RIESGO</div><p class="mt-3 text-[13px] leading-snug text-white/75 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p>${testimonialBox(s.quote)}${purpleButton(s.button || 'No lo ignores','eye')}</div>`;
  } else if(s.type === 'solucion'){
    body = `<div class="absolute z-20 top-[108px] ${textLeft}">${chip('SOLUCIÓN')}<h2 class="mt-4 text-[34px] font-display font-black leading-[.98] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${titleWithAccent(s.title)}</h2><p class="mt-4 text-[13px] leading-snug text-white/76 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p>${purpleButton(s.button || 'Agenda tu valoración','calendar-days')}${testimonialBox(s.quote)}</div>`;
  } else if(s.type === 'pasos'){
    body = `<div class="absolute z-20 top-[102px] ${textLeft}">${chip('ACCIÓN')}<h2 class="mt-4 text-[33px] font-display font-black leading-[.98] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${titleWithAccent(s.title)}</h2><p class="mt-3 text-[13px] leading-snug text-white/74 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p><div class="mt-4 max-w-[230px] rounded-2xl border border-white/12 bg-[#061225]/78 p-3 space-y-2">${s.bullets.map((b,k)=>`<div class="flex items-center gap-3 ${k<2?'border-b border-white/10 pb-2':''}"><span class="w-8 h-8 rounded-full flex items-center justify-center text-white font-display font-black" style="background:var(--accent)">${k+1}</span><span class="text-[12px] text-white font-bold editable" contenteditable onblur="updateSlideText(${i},'bullet${k+1}',this.innerText)">${b}</span></div>`).join('')}</div>${purpleButton(s.button || 'Hazlo hoy','calendar-days')}</div>`;
  } else {
    body = `<div class="absolute z-20 top-[108px] ${textLeft}">${s.type === 'cta' ? '' : chip('GANCHO')}<h2 class="${s.type==='cta'?'text-[38px]':'text-[33px]'} font-display font-black leading-[.98] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${titleWithAccent(s.title)}</h2><p class="mt-4 text-[14px] leading-snug text-white/75 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p>${purpleButton(s.button || 'Agenda tu cita','calendar-days')}${testimonialBox(s.quote, s.type==='cta'?'María, paciente Savi':'')}</div>`;
  }
  return `${photoBg(s,pos)}${saviLogoBlock()}${cofepris()}${quoteRail()}${body}${contactFooter()}`;
}

function impact(s,i){
  let inn = decor() + head(s) + foot(s.footer), or = '#F59E0B';
  if(s.type==='gancho') inn += `<div class="relative z-20 h-full px-7 pt-24 pb-16 flex flex-col justify-center">${chip(s.tag)}<h2 class="mt-5 text-[35px] font-display font-black leading-[.98] tracking-tight text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><div class="h-1.5 w-24 rounded-full mt-4" style="background:var(--accent)"></div><p class="mt-5 text-[12px] leading-relaxed text-white/70 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p></div>`;
  else if(s.type==='dato') inn += `<div class="relative z-20 h-full px-6 pt-20 pb-16 flex flex-col items-center justify-center text-center"><div class="text-[64px] font-display font-black leading-none tracking-tighter" style="color:${or}">${s.metric}</div><div class="-mt-1 text-[10px] text-white/50 font-black tracking-widest">${s.tag}</div><h3 class="mt-5 text-[18px] font-display font-black text-white uppercase leading-tight editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h3><p class="mt-3 text-[11px] text-white/62 leading-relaxed editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p><div class="mt-6 text-[9px] text-white/50"><i data-lucide="shield-check" class="inline w-4 h-4" style="color:var(--accent)"></i> ${s.footer}</div></div>`;
  else if(s.type==='problema') inn += `<div class="relative z-20 h-full px-5 pt-24 pb-16 flex items-center"><div class="w-full rounded-3xl bg-[#10131B] border border-white/10 p-5 flex gap-4 items-center"><div class="flex-1">${chip(s.tag,'#ff5b63')}<h2 class="mt-3 text-[21px] font-display font-black uppercase text-white leading-tight editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><p class="mt-3 text-[11px] text-white/62 leading-relaxed editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p></div><div class="w-24 h-28 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center"><i data-lucide="${s.icon}" class="w-9 h-9 text-red-500"></i><b class="mt-2 text-[8px] text-white uppercase">Zona de impacto</b></div></div></div>`;
  else if(s.type==='factores') inn += `<div class="relative z-20 h-full px-6 pt-24 pb-16 flex flex-col justify-center">${chip(s.tag)}<h2 class="mt-4 text-[24px] font-display font-black uppercase text-white leading-tight editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><div class="mt-4 rounded-3xl bg-[#10131B] border border-white/10 p-4 space-y-3">${bullets(s,i,'check')}</div><p class="mt-4 text-[10px] text-white/45">${s.footer}</p></div>`;
  else if(s.type==='alerta') inn += `<div class="relative z-20 h-full px-6 pt-20 pb-16 flex flex-col items-center justify-center text-center"><div class="w-full rounded-3xl bg-[#1A0D0D] border border-red-400/25 p-6"><i data-lucide="alert-triangle" class="w-9 h-9 mx-auto text-red-400"></i><div class="mt-3 text-[9px] text-red-300 font-black uppercase tracking-widest">${s.tag}</div><h2 class="mt-3 text-[25px] font-display font-black text-white uppercase leading-tight editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><p class="mt-4 text-[12px] text-red-100/70 leading-relaxed editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p></div><div class="mt-4 text-[9px] text-red-300 font-black">MÁXIMA ALERTA CLÍNICA</div></div>`;
  else if(s.type==='solucion') inn = head(s) + `<div class="absolute inset-0" style="background:linear-gradient(135deg,var(--accent),#6ee7d8)"></div><div class="relative z-20 h-full px-7 pt-24 pb-16 flex flex-col justify-center text-slate-950"><span class="w-fit px-3 py-1 rounded-lg bg-black text-white text-[9px] font-black uppercase tracking-widest">${s.tag}</span><h2 class="mt-5 text-[34px] font-display font-black leading-[.98] uppercase editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><p class="mt-5 text-[12px] font-bold text-slate-900/80 leading-relaxed editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p></div><div class="absolute bottom-4 left-5 right-5 z-30 border-t border-black/10 pt-3 flex justify-between text-[8px] text-slate-900/70 font-black"><span>Dr. iChaks</span><span>Clínica SAVI</span></div>`;
  else if(s.type==='pasos') inn += `<div class="relative z-20 h-full px-6 pt-20 pb-16 flex flex-col justify-center"><h2 class="text-[26px] font-display font-black text-white leading-tight editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><div class="mt-5 rounded-3xl bg-[#101827] border border-white/10 p-4 space-y-3">${s.bullets.map((b,k)=>`<div class="flex items-center gap-4 ${k<2?'border-b border-white/10 pb-3':''}"><span class="text-[34px] font-display font-black leading-none" style="color:${or}">${k+1}</span><span class="text-[13px] text-white font-bold editable" contenteditable onblur="updateSlideText(${i},'bullet${k+1}',this.innerText)">${b}</span></div>`).join('')}</div></div>`;
  else inn += `<div class="relative z-20 h-full px-6 pt-24 pb-16 flex flex-col items-center text-center justify-center"><div class="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-3xl text-slate-950" style="background:var(--accent)">S</div><h2 class="mt-5 text-[24px] font-display font-black text-white uppercase leading-tight editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><p class="mt-3 text-[11px] text-white/62 leading-relaxed editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p><div class="mt-5 w-full rounded-2xl bg-gradient-to-r from-[#071B25] to-[#0D3B37] border border-emerald-400/20 p-4 text-left"><div class="text-[9px] text-emerald-300 font-black uppercase">WhatsApp directo</div><div class="text-[27px] font-display font-black leading-none" style="color:${or}">${phone}</div></div></div>`;
  return inn;
}

function bullets(s,i,ic){ return (s.bullets || []).slice(0,4).map((b,k)=>`<div class="flex gap-3 text-[12px] text-white/78"><span class="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style="background:color-mix(in srgb,var(--accent) 16%,transparent);color:var(--accent)"><i data-lucide="${ic}" class="w-3 h-3"></i></span><span class="editable" contenteditable onblur="updateSlideText(${i},'bullet${k+1}',this.innerText)">${b}</span></div>`).join(''); }

function dash(s,i){
  const p = s.type==='dato' ? `<div class="text-[58px] font-display font-black leading-none" style="color:var(--accent)">${s.metric}</div><div class="text-[9px] text-white/45 font-black tracking-widest">${s.tag}</div>` : s.bullets ? s.bullets.map((b,k)=>`<div class="rounded-2xl bg-white/5 border border-white/10 p-3 flex gap-3 items-center"><span class="w-8 h-8 rounded-xl flex items-center justify-center font-black text-slate-950" style="background:var(--accent)">${k+1}</span><span class="text-[11px] text-white/80">${b}</span></div>`).join('') : `<div class="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center gap-4"><i data-lucide="${s.icon}" class="w-10 h-10" style="color:var(--accent)"></i><div><div class="text-[9px] text-white/35 font-black uppercase">Indicador clínico</div><div class="text-[12px] text-white/80">Revisión recomendada</div></div></div>`;
  return `<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.18),transparent_34%),linear-gradient(135deg,#07111f,#030712)]"></div>${head(s)}<div class="relative z-20 h-full px-5 pt-20 pb-16"><div class="rounded-3xl border border-white/10 bg-white/[.035] p-4 h-full flex flex-col"><div class="flex justify-between"><span class="text-[9px] font-black uppercase tracking-widest" style="color:var(--accent)">${s.label}</span><span class="text-[9px] text-white/35 font-black">SAVI OS</span></div><h2 class="mt-4 text-[23px] font-display font-black text-white leading-tight editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><p class="mt-3 text-[10.5px] text-white/58 leading-relaxed editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p><div class="mt-4 space-y-2">${p}</div><div class="mt-auto pt-3 border-t border-white/10 text-[8px] text-white/38 flex justify-between"><span>${s.footer||'Datos clínicos'}</span><span>${s.num}/8</span></div></div></div>`;
}

function testimonial(s,i){
  if(s.type==='solucion') return `${head(s,'SLIDE 6 / 8 • ALIVIO')}<div class="absolute inset-0" style="background:var(--accent)"></div><div class="relative z-20 h-full px-6 pt-24 pb-16 flex flex-col justify-center text-slate-950"><span class="w-fit rounded bg-black px-3 py-1 text-[8px] text-white font-black uppercase tracking-widest">VIDA SALUDABLE</span><h2 class="mt-5 text-[28px] font-display font-black uppercase leading-tight editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><p class="mt-4 text-[11px] font-bold text-slate-900/80 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p></div><div class="absolute bottom-4 left-5 right-5 z-30 border-t border-black/10 pt-3 text-[8px] text-slate-900/70 font-black flex justify-between"><span>Dr. iChaks</span><span>Resultados probados</span></div>`;
  const b = s.type==='dato' ? `<div class="text-center"><div class="text-[58px] font-display font-black tracking-tight" style="color:var(--accent)">${s.metric}</div><div class="text-[8px] text-white/45 font-black tracking-widest -mt-1">CIFRA ALARMANTE</div><h3 class="mt-4 text-[15px] font-display font-black text-white uppercase">${s.title}</h3><p class="mt-2 text-[10px] text-white/64">${s.desc}</p></div>` : s.bullets ? `<span class="inline-block px-3 py-1 rounded bg-black/45 text-[8px] font-black uppercase text-saviTeal tracking-widest">ORIGEN CLÍNICO</span><h2 class="mt-3 text-[17px] font-display font-black text-white uppercase">${s.title}</h2><div class="mt-4 bg-black/20 border border-white/5 rounded-xl p-4 space-y-2">${bullets(s,i,'check-circle')}</div>` : s.type==='alerta' ? `<div class="border border-red-500/30 bg-red-950/15 p-5 rounded-xl text-center space-y-3"><i data-lucide="alert-triangle" class="w-7 h-7 text-red-500 mx-auto"></i><span class="text-[8px] font-black uppercase text-red-400 tracking-widest block">${s.tag}</span><h3 class="text-[16px] font-display font-black text-white uppercase">${s.title}</h3><p class="text-[10px] text-red-100/70">${s.desc}</p></div>` : `${chip(s.tag)}<h2 class="mt-5 text-[22px] font-display font-extrabold leading-tight text-white">${s.title}</h2><div class="h-1.5 w-24 rounded-full my-5" style="background:var(--accent)"></div><p class="text-[10px] leading-relaxed text-white/75">${s.desc}</p>${s.quote?`<div class="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 text-[10px] text-white/70 italic">“${s.quote}”</div>`:''}`;
  return `<img src="${s.img}" crossorigin="anonymous" class="absolute inset-0 w-full h-full object-cover opacity-25"><div class="absolute inset-0 bg-gradient-to-t from-[#1a1b3a] via-[#1a1b3a]/80 to-transparent"></div>${head(s,s.label)}<div class="relative z-20 h-full px-5 pt-20 pb-20 flex flex-col justify-center">${b}</div><div class="absolute bottom-4 left-5 right-5 z-30 rounded-xl bg-black/25 border border-white/5 p-2 flex justify-between text-[8px] text-white"><b>${phone}</b><span class="text-white/60">${address}</span></div>`;
}

function warm(s,i){
  return `<div class="absolute left-0 right-0 bottom-0 h-32 bg-white/5 arc"></div><div class="absolute -top-10 -left-10 w-40 h-40 border rounded-full opacity-25" style="border-color:${accent}"></div><div class="absolute -right-10 top-16 w-44 h-44 rounded-full border border-white/10 p-2"><img src="${s.img}" crossorigin="anonymous" class="w-full h-full object-cover circle-clip opacity-85"></div>${head(s,s.num+' / 8')}<div class="relative z-20 h-full px-6 pt-24 pb-20 flex flex-col justify-center"><span class="w-fit rounded-full border px-3 py-1 text-[9px] font-black uppercase tracking-widest" style="color:${accent};border-color:${accent}66">${s.label}</span><h2 class="mt-4 max-w-[205px] text-[25px] font-display font-black text-white leading-tight editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><p class="mt-3 max-w-[200px] text-[10px] text-white/65 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.type==='alerta'?'':s.desc}</p>${s.type==='dato'?`<div class="mt-4 text-[44px] font-display font-black leading-none" style="color:${accent}">${s.metric}</div>`:''}${s.bullets?`<div class="mt-4 space-y-2">${s.bullets.map(b=>`<div class="rounded-xl bg-white text-slate-900 px-3 py-2 flex gap-2 text-[10px] font-bold"><i data-lucide="check" class="w-4 h-4 shrink-0" style="color:${accent}"></i>${b}</div>`).join('')}</div>`:''}${s.type==='alerta'?`<div class="mt-4 rounded-2xl bg-red-950/40 border border-red-400/30 p-3 text-red-100 text-[10px]"><b>${s.tag}</b><br>${s.desc}</div>`:''}</div><div class="absolute bottom-4 left-5 right-5 z-30 rounded-xl bg-white text-slate-900 p-2 flex justify-between text-[8px] font-black"><span>${phone}</span><span>Premium Cálido</span></div>`;
}

function cycleLayout(i){ layout[i] = ((layout[i] ?? v(i)) + 1) % 4; render(); toast(`Distribución del slide ${i+1} cambiada`, 'layout-template'); }
function randomizeAllLayouts(){ accent = pal[Math.floor(Math.random()*pal.length)]; sync(); render(); toast('Color de acento aleatorio aplicado','shuffle'); }
function createStyleVariant(){ variant = (variant + 1) % 12; layout = {}; const n = pal.findIndex(c => c.toLowerCase() === accent.toLowerCase()); accent = pal[(Math.max(n,0) + 3 + variant) % pal.length]; sync(); render(); toast('Nueva variante visual generada desde el estilo actual','wand-sparkles'); }

function generateWithAI(){
  const th = (document.getElementById('ai-theme').value || 'este problema').trim().toLowerCase();
  const alarm = document.getElementById('ai-tone').value === 'alarmante';
  const obj = document.getElementById('ai-objective').value;
  slides = [
    {num:1,type:'gancho',label:'GANCHO',tag:'GANCHO',title:`¿Sabes qué hay detrás de ${th}?`,desc:alarm?'Ignorarlo puede permitir que el problema avance en silencio.':'A veces una señal pequeña puede revelar un problema que merece atención.',footer:'Dr. iChaks / desliza',quote:'Detectarlo a tiempo puede cambiar tu tranquilidad.',button:'Desliza',img:imgs[0],icon:'eye'},
    {num:2,type:'dato',label:'DATO',tag:'DATO',metric:'1 de cada 4',title:`Muchas personas normalizan ${th}`,desc:'El dato no busca asustar: busca recordarte que revisar a tiempo cambia el pronóstico.',footer:'Datos clínicos verificados por SAVI',quote:'Lo que parece mínimo hoy puede explicar mucho de tu malestar.',button:'Sigue leyendo',img:imgs[1],icon:'info'},
    {num:3,type:'problema',label:'PROBLEMA',tag:'PROBLEMA',title:'El daño puede avanzar sin avisar',desc:`Cuando ${th} se normaliza, se retrasa la valoración y el origen puede pasar desapercibido.`,footer:'Lo común no siempre es normal.',quote:'Pensé que era normal… hasta que empeoró.',button:'Desliza',img:imgs[2],icon:'activity'},
    {num:4,type:'factores',label:'CAUSA',tag:'CAUSA',title:`Hay varias causas detrás de ${th}.`,desc:'No todas se ven a simple vista; por eso una revisión completa ayuda a orientar mejor el tratamiento.',bullets:['Antecedentes personales','Síntomas persistentes','Cambios recientes','Factores metabólicos'],footer:'Detectar el origen cambia el tratamiento.',button:'Continúa',img:imgs[3],icon:'list-checks'},
    {num:5,type:'alerta',label:'RIESGO',tag:'RIESGO',title:'Esperar demasiado puede salirte caro.',desc:`Si ${th} empeora, limita tu rutina o se acompaña de otros síntomas, conviene valorarlo cuanto antes.`,footer:'Miedo responsable: actuar a tiempo.',quote:'No todo se resuelve solo con descanso.',button:'No lo ignores',img:imgs[4],icon:'alert-triangle'},
    {num:6,type:'solucion',label:'SOLUCIÓN',tag:'SOLUCIÓN',title:'La buena noticia: aún puedes actuar.',desc:'Una valoración médica ayuda a identificar la causa y definir el siguiente paso con seguridad.',footer:'Siguiente paso: valoración médica.',quote:'Cuando entendí la causa, recuperé tranquilidad. — Paciente Savi',button:'Agenda tu valoración',img:imgs[5],icon:'sparkles'},
    {num:7,type:'pasos',label:'ACCIÓN',tag:'ACCIÓN',title:obj==='vender'?'Da el siguiente paso hoy.':'Tres acciones prácticas.',desc:'Convierte la preocupación en una acción clara y sencilla.',bullets:['Agenda una valoración','Describe tus síntomas','Sigue un plan médico'],footer:'Tres pasos. Una decisión.',button:'Hazlo hoy',img:imgs[6],icon:'route'},
    {num:8,type:'cta',label:'CTA',tag:'CTA',title:'Cuidarte también es vivir mejor',desc:`Escríbenos por WhatsApp y permítenos orientarte sobre ${th}.`,footer:'Clínica SAVI · Teapa, Tabasco',quote:'Sentirme escuchada me devolvió la tranquilidad. — Paciente Savi',button:'Agenda tu cita',img:imgs[7],icon:'message-circle'}
  ];
  render();
  toast('Carrusel creado con la secuencia narrativa de 8 slides','sparkles');
}

async function downloadSlide(i){ const node = document.getElementById(`slide-card-${i+1}`); const canvas = await html2canvas(node,{backgroundColor:null,useCORS:true,scale:3,logging:false}); const a = document.createElement('a'); a.download = `SAVI-slide-${i+1}.png`; a.href = canvas.toDataURL('image/png'); a.click(); }
async function downloadAllSlides(){ toast('Preparando descarga de 8 slides...','download'); for(let i=0;i<slides.length;i++){ await downloadSlide(i); await new Promise(r=>setTimeout(r,350)); } toast('Descarga completada','check-circle'); }
function toast(m,ic='check'){ document.getElementById('toast-savi')?.remove(); const t = document.createElement('div'); t.id = 'toast-savi'; t.className = 'fixed bottom-5 right-5 z-50 bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-bold'; t.innerHTML = `<i data-lucide="${ic}" class="w-4 h-4 text-saviTeal"></i><span>${m}</span>`; document.body.appendChild(t); lucide.createIcons(); setTimeout(()=>t.remove(),2600); }
