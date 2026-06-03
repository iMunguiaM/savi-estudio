// Override del Estilo 2: Testimonial Emocional Pro
// Proporciones corregidas para canvas 320x400: header compacto, zona segura de contenido y footer sin invasión.

(function(){
  const FOOTER_TOP = 338;

  function logo(dark=false){
    const main = dark ? '#07111f' : '#fff';
    return `<div class="absolute top-[12px] left-[14px] z-40 flex items-center gap-2">
      <img src="${logoUrl}" crossorigin="anonymous" class="w-[30px] h-[30px] rounded-lg bg-white p-0.5 shadow-lg">
      <div class="leading-none"><div class="text-[9px] font-display font-black tracking-tight" style="color:${main}">CLÍNICA</div><div class="text-[18px] font-display font-black leading-[.86] tracking-tight" style="color:var(--accent)">SAVI</div></div>
    </div>`;
  }

  function cofe(dark=false){
    return `<div class="absolute top-[16px] right-[14px] z-40 text-[6.2px] tracking-wide ${dark?'text-slate-900/75':'text-white/75'}">COFEPRIS: 2427154023A00002</div>`;
  }

  function badge(text, tone='purple'){
    const color = tone === 'red' ? '#ff6b73' : 'var(--accent)';
    const bg = tone === 'red' ? 'rgba(255,91,99,.10)' : 'rgba(139,92,246,.10)';
    return `<span class="inline-flex w-fit items-center gap-1 rounded-lg border px-2.5 py-1 text-[7.4px] font-black uppercase tracking-wider" style="border-color:${tone==='red'?'rgba(255,91,99,.45)':'rgba(139,92,246,.55)'};color:${color};background:${bg}">${text}</span>`;
  }

  function rail(top=88, bottom=82){
    return `<div class="absolute left-[18px] z-20" style="top:${top}px;bottom:${bottom}px"><div class="text-[34px] font-serif leading-none" style="color:var(--accent)">“</div><div class="absolute left-[9px] top-[29px] bottom-0 w-[2px]" style="background:var(--accent)"></div></div>`;
  }

  function bg(s, mode='right'){
    if(mode === 'full'){
      return `<img src="${s.img}" crossorigin="anonymous" class="absolute inset-0 w-full h-full object-cover opacity-38"><div class="absolute inset-0 bg-gradient-to-t from-[#061225] via-[#071225]/88 to-[#071225]/58"></div>`;
    }
    if(mode === 'top'){
      return `<img src="${s.img}" crossorigin="anonymous" class="absolute top-0 right-0 w-full h-[48%] object-cover opacity-42"><div class="absolute inset-0 bg-gradient-to-b from-[#071225]/35 via-[#071225]/92 to-[#071225]"></div>`;
    }
    return `<img src="${s.img}" crossorigin="anonymous" class="absolute top-0 right-0 h-full w-[58%] object-cover opacity-92"><div class="absolute inset-0" style="background:linear-gradient(90deg,#071225 0%,rgba(7,18,37,.96) 45%,rgba(7,18,37,.48) 72%,rgba(7,18,37,.18) 100%)"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_91%_12%,rgba(255,255,255,.13),transparent_22%),linear-gradient(0deg,rgba(3,9,19,.97)_0%,transparent_30%)]"></div>`;
  }

  function title(text){
    const map = {
      'Ver bien también es vivir mejor':'Ver bien<br><span style="color:var(--accent)">también es</span><br>vivir mejor',
      '¿Tu visión ya no se siente igual?':'¿Tu <span style="color:var(--accent)">visión</span><br>ya no se siente<br>igual?',
      'La visión borrosa no siempre es solo cansancio.':'La visión<br><span style="color:var(--accent)">borrosa no</span><br>siempre es<br>solo cansancio.',
      'El problema es acostumbrarte a ver mal.':'El problema es<br><span style="color:var(--accent)">acostumbrarte</span><br>a ver mal.',
      'Hay varias causas detrás de una visión borrosa.':'Hay varias<br><span style="color:var(--accent)">causas</span> detrás<br>de una visión<br>borrosa.',
      'Esperar demasiado puede salirte caro.':'Esperar<br>demasiado<br><span style="color:var(--accent)">puede salirte</span><br>caro.',
      'La buena noticia: sí puede tratarse.':'La buena noticia:<br><span style="color:var(--accent)">sí puede</span><br>tratarse.',
      'Si notas cambios, da el siguiente paso.':'Si notas<br><span style="color:var(--accent)">cambios,</span><br>da el siguiente<br>paso.'
    };
    if(map[text]) return map[text];
    const words = text.split(' '), m = Math.max(1, Math.floor(words.length/2)-1);
    return words.map((w,i)=> i===m || i===m+1 ? `<span style="color:var(--accent)">${w}</span>` : w).join(' ');
  }

  function cta(text, icon='arrow-right', dark=false){
    return `<button class="mt-3 h-[34px] rounded-xl px-3 pr-3.5 inline-flex items-center gap-2 font-display font-black text-[11.5px] shadow-2xl ${dark?'text-white':'text-[#07111f]'}" style="background:${dark?'#07111f':'linear-gradient(135deg,var(--accent),#9b7cff)'}"><span class="w-6 h-6 rounded-full ${dark?'bg-white text-[#07111f]':'bg-[#07111f] text-white'} flex items-center justify-center"><i data-lucide="${icon}" class="w-3.5 h-3.5"></i></span>${text}</button>`;
  }

  function quote(text, name=''){
    if(!text) return '';
    return `<div class="relative mt-3 max-w-[190px] rounded-2xl border px-3 py-2.5 text-white/88" style="border-color:rgba(139,92,246,.72);background:rgba(2,8,20,.58)"><div class="absolute -top-4 left-3 text-[30px] font-serif leading-none" style="color:var(--accent)">“</div><p class="text-[9.2px] leading-snug pt-1">${text}</p>${name?`<p class="mt-1 text-[8.6px] text-white/80">— <b style="color:var(--accent)">${name}</b></p>`:''}</div>`;
  }

  function footer(){
    return `<div class="absolute left-[12px] right-[12px] z-40 h-[50px] rounded-[20px] border border-white/14 bg-[#061225]/92 backdrop-blur-md px-3 flex items-center gap-2.5" style="top:${FOOTER_TOP}px">
      <div class="flex items-center gap-2 w-[44%]"><div class="w-[31px] h-[31px] rounded-full bg-green-600 flex items-center justify-center shadow-lg"><i data-lucide="message-circle" class="w-4.5 h-4.5 text-white"></i></div><div><div class="text-[6.4px] font-black text-emerald-400 leading-none">WhatsApp</div><div class="mt-1 text-[13.5px] leading-none font-display font-black text-white tracking-tight">${phone}</div></div></div>
      <div class="w-px h-[32px] bg-white/18"></div>
      <div class="flex items-center gap-2 flex-1 min-w-0"><div class="w-[31px] h-[31px] rounded-full flex items-center justify-center shrink-0" style="background:rgba(139,92,246,.22);color:var(--accent)"><i data-lucide="map-pin" class="w-4.5 h-4.5"></i></div><div><div class="text-[6.4px] font-black leading-none" style="color:var(--accent)">Visítanos</div><div class="mt-1 text-[7.2px] leading-tight text-white/88">${address}</div></div></div>
    </div>`;
  }

  function bullets(s,i,mode='grid'){
    const items = (s.bullets || []).slice(0,4);
    if(mode === 'steps'){
      return items.slice(0,3).map((b,k)=>`<div class="flex items-center gap-2.5 ${k<2?'border-b border-white/10 pb-2':''}"><span class="w-7 h-7 rounded-full flex items-center justify-center text-white font-display font-black" style="background:var(--accent)">${k+1}</span><span class="text-[10px] text-white font-bold editable" contenteditable onblur="updateSlideText(${i},'bullet${k+1}',this.innerText)">${b}</span></div>`).join('');
    }
    return items.map((b,k)=>`<div class="flex items-center gap-2 text-[9px] text-white/92 font-bold"><span class="w-5 h-5 rounded-full flex items-center justify-center border shrink-0" style="border-color:var(--accent);color:var(--accent)"><i data-lucide="check" class="w-3 h-3"></i></span><span contenteditable class="editable" onblur="updateSlideText(${i},'bullet${k+1}',this.innerText)">${b}</span></div>`).join('');
  }

  window.testimonialPro = function(s,i){
    if(s.type === 'gancho'){
      return `${bg(s,'right')}${logo()}${cofe()}${rail(86,72)}<div class="absolute z-30 left-[45px] top-[76px] right-[102px] bottom-[64px] flex flex-col justify-center">${badge('GANCHO')}<h2 class="mt-3 text-[23px] font-display font-black leading-[.96] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${title(s.title)}</h2><p class="mt-3 text-[9.8px] leading-snug text-white/74 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p>${cta(s.button || 'Desliza','arrow-right')}${quote(s.quote)}</div>${footer()}`;
    }

    if(s.type === 'dato'){
      return `${bg(s,'top')}${logo()}${cofe()}<div class="absolute z-30 left-[18px] right-[18px] top-[70px] bottom-[66px] flex flex-col items-center justify-center text-center"><div class="text-[52px] font-display font-black leading-none tracking-tight" style="color:var(--accent)">${s.metric}</div><div class="text-[7px] font-black text-white/45 uppercase tracking-[.22em] -mt-1">CIFRA ALARMANTE</div><h2 class="mt-3 max-w-[245px] text-[18px] font-display font-black uppercase leading-tight text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><p class="mt-2.5 max-w-[230px] text-[9.4px] leading-snug text-white/68 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p><div class="mt-3 rounded-xl border border-white/10 bg-black/25 px-3 py-1.5 text-[7.2px] text-white/58"><i data-lucide="shield-check" class="inline w-3 h-3" style="color:var(--accent)"></i> ${s.footer}</div></div>${footer()}`;
    }

    if(s.type === 'problema'){
      return `${bg(s,'full')}${logo()}${cofe()}${rail(96,82)}<div class="absolute z-30 left-[45px] right-[18px] top-[92px] bottom-[64px]"><div class="rounded-3xl bg-[#081323]/86 border border-white/12 p-3.5 flex gap-3 items-center shadow-2xl"><div class="flex-1">${badge('PROBLEMA')}<h2 class="mt-2 text-[17.5px] font-display font-black leading-tight text-white uppercase editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><p class="mt-2 text-[8.6px] leading-snug text-white/68 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p></div><div class="w-[58px] h-[72px] rounded-2xl bg-white/6 border border-white/10 flex flex-col items-center justify-center text-center"><i data-lucide="activity" class="w-7 h-7 text-red-400"></i><span class="mt-1 text-[5.6px] font-black text-white/70 uppercase">Impacto</span></div></div>${quote(s.quote)}</div>${footer()}`;
    }

    if(s.type === 'factores'){
      return `${bg(s,'right')}${logo()}${cofe()}${rail(86,72)}<div class="absolute z-30 left-[45px] top-[74px] right-[86px] bottom-[64px] flex flex-col justify-center">${badge('CAUSA')}<h2 class="mt-3 text-[22px] font-display font-black leading-[.98] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${title(s.title)}</h2><p class="mt-2 text-[9.4px] leading-snug text-white/70 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p><div class="mt-3 grid grid-cols-1 gap-1.5 max-w-[205px] rounded-2xl border border-white/12 bg-[#061225]/78 p-2.5">${bullets(s,i)}</div></div>${footer()}`;
    }

    if(s.type === 'alerta'){
      return `${bg(s,'full')}${logo()}${cofe()}<div class="absolute z-30 inset-x-[20px] top-[76px] bottom-[64px] flex flex-col items-center justify-center text-center"><div class="w-full rounded-[24px] border border-red-400/35 bg-[#240d14]/78 p-4 shadow-2xl"><i data-lucide="alert-triangle" class="w-7 h-7 mx-auto text-red-300"></i><div class="mt-2 text-[7px] font-black uppercase tracking-widest text-red-200">RIESGO</div><h2 class="mt-2.5 text-[23px] font-display font-black leading-[.98] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${title(s.title)}</h2><p class="mt-2.5 max-w-[230px] mx-auto text-[9.5px] leading-snug text-red-50/72 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p></div>${cta(s.button || 'No lo ignores','eye')}</div>${footer()}`;
    }

    if(s.type === 'solucion'){
      return `<div class="absolute inset-0" style="background:linear-gradient(135deg,var(--accent),#54e0d3)"></div><img src="${s.img}" crossorigin="anonymous" class="absolute right-0 bottom-0 w-[50%] h-full object-cover opacity-20 mix-blend-multiply"><div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/10"></div>${logo(true)}${cofe(true)}<div class="absolute z-30 left-[24px] right-[26px] top-[80px] bottom-[64px] flex flex-col justify-center text-[#07111f]"><span class="w-fit rounded-lg bg-[#07111f] px-2.5 py-1 text-[7.4px] text-white font-black uppercase tracking-widest">SOLUCIÓN</span><h2 class="mt-3.5 max-w-[245px] text-[26px] font-display font-black leading-[.98] uppercase editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${s.title}</h2><p class="mt-3.5 max-w-[220px] text-[9.8px] leading-snug font-bold text-slate-900/78 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p>${cta(s.button || 'Agenda tu valoración','calendar-days',true)}</div><div class="absolute left-[12px] right-[12px] z-40 h-[50px] rounded-[20px] border border-black/10 bg-[#07111f]/92 px-3 flex items-center justify-between text-white" style="top:${FOOTER_TOP}px"><div><div class="text-[6.5px] text-emerald-300 font-black">WhatsApp</div><div class="text-[15px] font-display font-black">${phone}</div></div><div class="text-[7.2px] text-right text-white/70 max-w-[155px]">${address}</div></div>`;
    }

    if(s.type === 'pasos'){
      return `${bg(s,'right')}${logo()}${cofe()}${rail(88,72)}<div class="absolute z-30 left-[45px] top-[74px] right-[80px] bottom-[64px] flex flex-col justify-center">${badge('ACCIÓN')}<h2 class="mt-3 text-[22px] font-display font-black leading-[.98] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${title(s.title)}</h2><p class="mt-2 text-[9.4px] leading-snug text-white/72 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p><div class="mt-3 max-w-[205px] rounded-2xl border border-white/12 bg-[#061225]/80 p-3 space-y-2">${bullets(s,i,'steps')}</div></div>${footer()}`;
    }

    return `${bg(s,'right')}${logo()}${cofe()}${rail(86,72)}<div class="absolute z-30 left-[45px] top-[74px] right-[92px] bottom-[64px] flex flex-col justify-center"><h2 class="text-[25px] font-display font-black leading-[.98] text-white editable" contenteditable onblur="updateSlideText(${i},'title',this.innerText)">${title(s.title)}</h2><p class="mt-3 text-[9.8px] leading-snug text-white/76 editable" contenteditable onblur="updateSlideText(${i},'desc',this.innerText)">${s.desc}</p>${cta(s.button || 'Agenda tu cita','calendar-days')}${quote(s.quote,'María, paciente Savi')}</div>${footer()}`;
  };
})();
