(function(){
  var h=document.getElementById('name'),i=0;
  ["John","Melchor","Brillante"].forEach(function(w){
    var r=document.createElement('span');r.className='row';r.setAttribute('aria-hidden','true');
    w.split('').forEach(function(c){var s=document.createElement('span');s.className='l';s.style.setProperty('--i',i++);s.textContent=c;r.appendChild(s)});
    h.appendChild(r);
  });
  var tog=document.getElementById('tog'),num=document.getElementById('num'),cnt=document.getElementById('count'),lbl=document.getElementById('lbl'),bars=document.getElementById('bars');
  var owes=[["Johnkulot","₱676.00"],["johnjohn","₱408.00"],["John Melchor","₱208.00"]];
  function tween(to){var from=+num.textContent,t0=null;function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/500,1);num.textContent=Math.round(from+(to-from)*p);if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
  function render(on){
    tog.setAttribute('aria-pressed',on);cnt.classList.toggle('on',on);
    lbl.textContent=on?'transfers with the Debt Eraser':'transfers without it';
    tween(on?3:12);bars.innerHTML='';
    if(on){owes.forEach(function(o,k){bars.insertAdjacentHTML('beforeend','<div class="bar" style="--d:'+k*4+'"><span>'+o[0]+' pays JM</span><span>'+o[1]+'</span></div>')})}
    else{for(var k=0;k<12;k++){bars.insertAdjacentHTML('beforeend','<div class="bar" style="--d:'+k+';padding:3px 12px"><span>Payment '+(k+1)+'</span><span>…</span></div>')}}
  }
  tog.addEventListener('click',function(){render(tog.getAttribute('aria-pressed')!=='true')});
  render(true);
  var rt=document.documentElement,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
  var rvs=document.querySelectorAll('.sub,h2,.feat li,.phone,.tags,.next,.sk>div,.contact .mail,.contact .cta,.about p,.ph,.facts li,.hike,.stats li,.gal figure,.flow,.shot'),cs=document.querySelector('.certs');
  rvs.forEach(function(e,k){e.classList.add('rv');e.style.setProperty('--rd',(k%4)*90+'ms')});
  var all=Array.prototype.slice.call(rvs).concat([cs]);
  if('IntersectionObserver' in window&&!rm){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});all.forEach(function(e){io.observe(e)})}else all.forEach(function(e){e.classList.add('in')});
  document.querySelectorAll('.flow li').forEach(function(l,k){l.style.setProperty('--k',k)});
  var prog=document.getElementById('prog');
  addEventListener('scroll',function(){var m=rt.scrollHeight-innerHeight;prog.style.transform='scaleX('+(m>0?scrollY/m:0)+')'},{passive:true});
  var hero=document.getElementById('hero');
  if(!rm)hero.addEventListener('pointermove',function(e){var b=hero.getBoundingClientRect();hero.style.setProperty('--x',(e.clientX-b.left)+'px');hero.style.setProperty('--y',(e.clientY-b.top)+'px')});
  document.querySelectorAll('.cert').forEach(function(c,k){c.style.setProperty('--k',k);if(rm)return;c.addEventListener('pointermove',function(e){var b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;c.style.setProperty('--ry',x*10+'deg');c.style.setProperty('--rx',-y*10+'deg')});c.addEventListener('pointerleave',function(){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})});
})();
