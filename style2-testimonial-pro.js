// Override del Estilo 2: Testimonial Emocional Pro
// Objetivo: conservar el ADN del ejemplo, pero dar a cada slide una composición distinta.

(function(){
  function t2Logo(){
    return `<div class="absolute top-[14px] left-[16px] z-40 flex items-center gap-2.5">
      <img src="${logoUrl}" crossorigin="anonymous" class="w-[38px] h-[38px] rounded-xl bg-white p-1 shadow-lg">
      <div class="leading-none"><div class="text-white text-[13px] font-display font-black tracking-tight">CLÍNICA</div><div class="text-[24px] font-display font-black leading-[.84] tracking-tight" style="color:var(--accent)">SAVI</div></div>
    </div>`;
  }

  function t2Cofe(){ return `<div class="absolute top-[18px] right-[16px] z-40 text-[7px] tracking-wide text-white/82">COFEPRIS: 2427154023A00002</div>`; }

  function t2Badge(text, extra=''){
    return `<span class="inline-flex w-fit items-center gap-1 rounded-lg border px-2.5 py-1 text-[8px] font-black uppercase tracking-wider ${extra}" style="border-color:rgba(139,92,246,.55);color:var(--accent);background:rgba(139,92,246,.10)">${text}</span>`;
  }

  function t2QuoteRail(top='98px', bottom='118px'){
    return `<div class="absolute left-[18px] z-20" style="top:${top};bottom:${bottom}"><div class="text-[38px] font-serif leading-none" style="color:var(--accent)">“</div><div class="absolute left-[10px] top-[32px] bottom-0 w-[2px]" style="background:var(--accent)"></div></div>`;
  }

  function t2Title(text){
    const map = {
      'Ver bien también es vivir mejor':'Ver bien<br><span style="color:var(--accent)">también es</span><br>vivir mejor',
      '¿Tu visión ya no se siente igual?':'¿Tu <span style="color:var(--accent)">visión</span><br>ya no se<br>siente igual?',
      'La visión borrosa no siempre es solo cansancio.':'La visión<br><span style="color:var(--accent)">borrosa no</span><br>siempre es<br><span style="color:var(--accent)">solo cansancio.</span>',
      'El problema es acostumbrarte a ver mal.':'El problema es<br><span style="color:var(--accent)">acostumbrarte</span><br>a ver mal.',
      'Hay varias causas detrás de una visión borrosa.':'Hay varias<br><span style="color:var(--accent)">causas</span> detrás<br>de una visión<br><span style="color:var(--accent)">borrosa.</span>',
      'Esperar demasiado puede salirte caro.':'Esperar<br>demasiado<br><span style="color:var(--accent)">puede salirte</span><br>caro.',
      'La buena noticia: sí puede tratarse.':'La buena noticia:<br><span style="color:var(--accent)">sí puede</span><br>tratarse.',
      'Si notas cambios, da el siguiente paso.':'Si notas<br><span style="color:var(--accent)">cambios,</span><br>da el siguiente<br><span style="color:var(--accent)">paso.</span>'
    };
    if(map[text]) return map[text];
    const words = text.split(' '), m = Math.max(1, Math.floor(words.length/2)-1);
    return words.map((w,i)=> i===m || i===m+1 ? `<span style="color:var(--accent)">${w}</span>` : w).join(' ');
  }

  function t2Button(text, icon='arrow-right'){
    return `<button class="mt-3 h-[38px] rounded-xl px-3.5 pr-4 inline-flex items-center gap-2.5 font-display font-black text-[13px] text-[#07111f] shadow-2xl" style="background:linear-gradient(135deg,var(--accent),#9b7cff)"><span class="w-7 h-7 rounded-full bg-[#07111f] text-white flex items-center justify-center"><i data-lucide="${icon}" class="w-3.5 h-3.5"></i></span>${text}</button>`;
  }

  function t2MiniQuote(text, name=''){
    if(!text) return '';
    return `<div class="relative mt-3 max-w-[205px] rounded-2xl border px-3.5 py-3 text-white/88" style="border-color:rgba(139,92,246,.75);background:rgba(2,8,20,.58)"><div class="absolute -top-5 left-3 text-[36px] font-serif leading-none" style="color:var(--accent)">“</div><p class="text-[10.5px] leading-snug pt-1">${text}</p>${name?`<p class="mt-1.5 text-[9.5px] text-white/80">— <b style="color:var(--accent)">${name}</b></p>`:''}</div>`;
  }

  function t2Footer(){
    return `<div class="absolute left-[12px] right-[12px] bottom-[24px] z-40 h-[56px] rounded-[22px] border border-white/14 bg-[#061225]/90 backdrop-blur-md px-3 flex items-center gap-3">
      <div class="flex items-center gap-2 w-[44%]"><div class="w-[35px] h-[35px] rounded-full bg-green-600 flex items-center justify-center shadow-lg"><i data-lucide="message-circle" class="w-5 h-5 text-white"></i></div><div><div class="text-[7px] font-black text-emerald-400 leading-none">WhatsApp</div><div class="mt-1.5 text-[15px] leading-none font-display font-black text-white tracking-tight">${phone}</div></div></div>
      <div class="w-px h-[36px] bg-white/18"></div>
      <div class="flex items-center gap-2 flex-1 min-w-0"><div class="w-[35px] h-[35px] rounded-full flex items-center justify-center shrink-0" style="background:rgba(139,92,246,.22);color:var(--accent)"><i data-lucide="map-pin" class="w-5 h-5"></i></div><div><div class="text-[7px] font-black leading-none" style="color:var(--accent)">Visítanos</div><div class="mt-1.5 text-[8.5px] leading-tight text-white/92">${address}</div></div></div>
    </div><div class="absolute bottom-[5px] left-1/2 -translate-x-1/2 z-40 rounded-full border px-3.5 py-0.5 text-[7px] font-black uppercase tracking-widest" style="color:var(--accent);border-color:rgba(139,92,246,.60);background:rgba(2,8,20,.72)">ESTILO 2 · TESTIMONIAL PRO</div>`;
  }

  function t2Photo(s, mode='right'){
    if(mode==='full') return `<img src="${s.img}" crossorigin="anonymous" class="absolute inset-0 w-full h-full object-cover opacity-38"><div class="absolute inset-0 bg-gradient-to-t from-[#061225] via-[#071225]/88 to-[#071225]/62"></div>`;
    if(mode==='top') return `<img src="${s.img}" crossorigin="anonymous" class="absolute top-0 right-0 w-full h-[48%] object-cover opacity-48"><div class="absolute inset-0 bg-gradient-to-b from-[#071225]/50 via-[#071225]/96 to-[#071225]"></div>`;
    return `<img src="${s.img}" crossorigin="anonymous" class="absolute top-0 right-0 h-full w-[60%] object-cover opacity-95"><div class="absolute inset-0" style="background:linear-gradient(90deg,#071225 0%,rgba(7,18,37,.95) 43%,rgba(7,18,37,.38) 76%)"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_91%_12%,rgba(255,255,255,.16),transparent_23%),linear-gradient(0deg,rgba(3,9,19,.97)_0%,transparent_32%)]"></div>`;
  }

  window.testimonialPro = function(s,i){
    let body = '';

    if(s.type === 'gancho'){
      body = `${t2Photo(s,'right')}${t2Logo()}${t2Cofe()}${t2QuoteRail()}<div class="absolute z-30 left-[46px] top-[102px] right-[118px] bottom-[92px] flex flex-col justify-center">${t2Badge('GANCHO')}<h2 class="mt-3 text-[26px] font-display font-black leading-[.96] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${t2Title(s.title)}</h2><p class="mt-3 text-[11px] leading-snug text-white/74 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p>${t2Button(s.button || 'Desliza','arrow-right')}${t2MiniQuote(s.quote)}</div>${t2Footer()}`;
    }

    else if(s.type === 'dato'){
      body = `${t2Photo(s,'top')}${t2Logo()}${t2Cofe()}<div class="absolute z-30 inset-x-[20px] top-[92px] bottom-[94px] flex flex-col items-center justify-center text-center"><div class="text-[62px] font-display font-black leading-none tracking-tight" style="color:var(--accent)">${s.metric}</div><div class="text-[8px] font-black text-white/45 uppercase tracking-[.22em] -mt-1">CIFRA ALARMANTE</div><h2 class="mt-4 max-w-[250px] text-[21px] font-display font-black uppercase leading-tight text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><p class="mt-3 max-w-[235px] text-[10.5px] leading-snug text-white/68 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p><div class="mt-4 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-[8px] text-white/58"><i data-lucide="shield-check" class="inline w-3 h-3" style="color:var(--accent)"></i> ${s.footer}</div></div>${t2Footer()}`;
    }

    else if(s.type === 'problema'){
      body = `${t2Photo(s,'full')}${t2Logo()}${t2Cofe()}${t2QuoteRail('102px','126px')}<div class="absolute z-30 left-[46px] right-[22px] top-[118px] bottom-[104px]"><div class="rounded-3xl bg-[#081323]/86 border border-white/12 p-4 flex gap-3 items-center shadow-2xl"><div class="flex-1">${t2Badge('PROBLEMA')}<h2 class="mt-2 text-[21px] font-display font-black leading-tight text-white uppercase editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><p class="mt-2 text-[9.8px] leading-snug text-white/68 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p></div><div class="w-[70px] h-[84px] rounded-2xl bg-white/6 border border-white/10 flex flex-col items-center justify-center text-center"><i data-lucide="activity" class="w-8 h-8 text-red-400"></i><span class="mt-1 text-[6.5px] font-black text-white/70 uppercase">Zona de impacto</span></div></div>${t2MiniQuote(s.quote)}</div>${t2Footer()}`;
    }

    else if(s.type === 'factores'){
      body = `${t2Photo(s,'right')}${t2Logo()}${t2Cofe()}${t2QuoteRail()}<div class="absolute z-30 left-[46px] top-[96px] right-[98px] bottom-[94px] flex flex-col justify-center">${t2Badge('CAUSA')}<h2 class="mt-3 text-[24px] font-display font-black leading-[.97] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${t2Title(s.title)}</h2><p class="mt-2 text-[10.5px] leading-snug text-white/70 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p><div class="mt-3 grid grid-cols-1 gap-1.5 max-w-[205px] rounded-2xl border border-white/12 bg-[#061225]/78 p-2.5">${(s.bullets||[]).slice(0,4).map((b,k)=>`<div class="flex items-center gap-2 text-[9.5px] text-white/92 font-bold"><span class="w-5 h-5 rounded-full flex items-center justify-center border shrink-0" style="border-color:var(--accent);color:var(--accent)"><i data-lucide="check" class="w-3 h-3"></i></span><span contenteditable class="editable" onblur="updateSlideText(${i},'bullet${k+1}',this.innerText)">${b}</span></div>`).join('')}</div></div>${t2Footer()}`;
    }

    else if(s.type === 'alerta'){
      body = `${t2Photo(s,'full')}${t2Logo()}${t2Cofe()}<div class="absolute z-30 inset-x-[22px] top-[92px] bottom-[100px] flex flex-col items-center justify-center text-center"><div class="w-full rounded-[26px] border border-red-400/35 bg-[#240d14]/78 p-5 shadow-2xl"><i data-lucide="alert-triangle" class="w-8 h-8 mx-auto text-red-300"></i><div class="mt-2 text-[8px] font-black uppercase tracking-widest text-red-200">RIESGO</div><h2 class="mt-3 text-[27px] font-display font-black leading-[.98] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${t2Title(s.title)}</h2><p class="mt-3 max-w-[230px] mx-auto text-[10.5px] leading-snug text-red-50/72 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p></div>${t2Button(s.button || 'No lo ignores','eye')}</div>${t2Footer()}`;
    }

    else if(s.type === 'solucion'){
      body = `<div class="absolute inset-0" style="background:linear-gradient(135deg,var(--accent),#54e0d3)"></div><img src="${s.img}" crossorigin="anonymous" class="absolute right-0 bottom-0 w-[58%] h-full object-cover opacity-28 mix-blend-multiply"><div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/10"></div>${t2Logo()}${t2Cofe()}<div class="absolute z-30 left-[28px] right-[32px] top-[102px] bottom-[92px] flex flex-col justify-center text-[#07111f]"><span class="w-fit rounded-lg bg-[#07111f] px-3 py-1 text-[8px] text-white font-black uppercase tracking-widest">SOLUCIÓN</span><h2 class="mt-4 max-w-[250px] text-[31px] font-display font-black leading-[.98] uppercase editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><p class="mt-4 max-w-[220px] text-[11px] leading-snug font-bold text-slate-900/78 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p>${t2Button(s.button || 'Agenda tu valoración','calendar-days')}</div><div class="absolute left-[14px] right-[14px] bottom-[24px] z-40 h-[56px] rounded-[22px] border border-black/10 bg-[#07111f]/92 px-3 flex items-center justify-between text-white"><div><div class="text-[7px] text-emerald-300 font-black">WhatsApp</div><div class="text-[17px] font-display font-black">${phone}</div></div><div class="text-[8px] text-right text-white/70 max-w-[150px]">${address}</div></div>`;
    }

    else if(s.type === 'pasos'){
      body = `${t2Photo(s,'right')}${t2Logo()}${t2Cofe()}${t2QuoteRail('104px','120px')}<div class="absolute z-30 left-[46px] top-[94px] right-[92px] bottom-[94px] flex flex-col justify-center">${t2Badge('ACCIÓN')}<h2 class="mt-3 text-[25px] font-display font-black leading-[.97] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${t2Title(s.title)}</h2><p class="mt-2 text-[10.5px] leading-snug text-white/72 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p><div class="mt-3 max-w-[210px] rounded-2xl border border-white/12 bg-[#061225]/80 p-3 space-y-2">${(s.bullets||[]).slice(0,3).map((b,k)=>`<div class="flex items-center gap-2.5 ${k<2?'border-b border-white/10 pb-2':''}"><span class="w-7 h-7 rounded-full flex items-center justify-center text-white font-display font-black" style="background:var(--accent)">${k+1}</span><span class="text-[10.5px] text-white font-bold editable" contenteditable onblur="updateSlideText(${i},'bullet${k+1}',this.innerText)">${b}</span></div>`).join('')}</div>${t2Button(s.button || 'Hazlo hoy','calendar-days')}</div>${t2Footer()}`;
    }

    else {
      body = `${t2Photo(s,'right')}${t2Logo()}${t2Cofe()}${t2QuoteRail()}<div class="absolute z-30 left-[46px] top-[96px] right-[112px] bottom-[92px] flex flex-col justify-center"><h2 class="text-[30px] font-display font-black leading-[.98] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${t2Title(s.title)}</h2><p class="mt-3 text-[11.5px] leading-snug text-white/76 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p>${t2Button(s.button || 'Agenda tu cita','calendar-days')}${t2MiniQuote(s.quote,'María, paciente Savi')}</div>${t2Footer()}`;
    }

    return body;
  };
})();
