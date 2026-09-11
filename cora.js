/* Cora — the conversationalaibot.com house bot. Rule-based. No dependencies. */
(function(){
function art(v, size, mode){
  var skin = {
    chip:      {trim:'#0A84FF', glow:'#22D3FF'},
    autoglass: {trim:'#12B981', glow:'#5EEAD4'},
    doctor:    {trim:'#2D6CDF', glow:'#8FC7FF'},
    hero:      {trim:'#E11D48', glow:'#FFB454'},
    builder:   {trim:'#F97316', glow:'#FFD08A'}
  }[v] || {trim:'#0A84FF', glow:'#22D3FF'};
  var T=skin.trim, G=skin.glow, u='u'+v+(mode||'f');

  var defs='<defs>'+
    '<radialGradient id="sh'+u+'" cx="36%" cy="26%"><stop offset="0" stop-color="#fff"/>'+
      '<stop offset=".62" stop-color="#F4F8FD"/><stop offset="1" stop-color="#CBDAEB"/></radialGradient>'+
    '<radialGradient id="bl'+u+'" cx="34%" cy="26%"><stop offset="0" stop-color="#6FD9FF"/>'+
      '<stop offset="1" stop-color="'+T+'"/></radialGradient>'+
    '<linearGradient id="vs'+u+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#16263F"/>'+
      '<stop offset="1" stop-color="#070E1B"/></linearGradient></defs>';

  /* ---- head assembly (shared by both modes) ---- */
  function head(){ return ''
    + '<rect x="61.5" y="12" width="7" height="16" rx="3.5" fill="#0E1A2B"/>'
    + '<circle cx="65" cy="10" r="8.5" fill="url(#bl'+u+')"/>'
    + '<circle cx="62" cy="7" r="2.8" fill="#fff" opacity=".8"/>'
    /* headphone cans */
    + '<circle cx="25" cy="60" r="13.5" fill="url(#sh'+u+')" stroke="#12203A" stroke-width="2.4"/>'
    + '<circle cx="25" cy="60" r="7" fill="#0B1526"/><circle cx="25" cy="60" r="7" fill="none" stroke="'+G+'" stroke-width="3.4"/>'
    + '<circle cx="105" cy="60" r="13.5" fill="url(#sh'+u+')" stroke="#12203A" stroke-width="2.4"/>'
    + '<circle cx="105" cy="60" r="7" fill="#0B1526"/><circle cx="105" cy="60" r="7" fill="none" stroke="'+G+'" stroke-width="3.4"/>'
    /* skull */
    + '<rect x="30" y="26" width="70" height="62" rx="28" fill="url(#sh'+u+')" stroke="#12203A" stroke-width="2.4"/>'
    /* visor */
    + '<rect x="38" y="36" width="54" height="42" rx="18" fill="url(#vs'+u+')"/>'
    + '<path d="M42 41h46a14 14 0 0 1 0 12H42a14 14 0 0 1 0-12z" fill="#22354F" opacity=".55"/>'
    /* face */
    + '<g stroke="'+G+'" stroke-width="4.6" stroke-linecap="round" fill="none">'
    +   '<path d="M49 56q5.5-8.5 11 0"/><path d="M70 56q5.5-8.5 11 0"/>'
    +   '<path d="M56 66q9 8.5 18 0"/></g>';
  }

  if(mode==='head'){
    return '<svg viewBox="10 0 110 96" width="'+size+'" height="'+size+'" xmlns="http://www.w3.org/2000/svg">'
      + defs + head() + '</svg>';
  }

  /* ---- costume pieces ---- */
  var hat='', gear='';
  if(v==='autoglass'){
    gear='<rect x="32" y="46" width="66" height="18" rx="9" fill="none" stroke="'+T+'" stroke-width="3.2" opacity=".9"/>'
        +'<path d="M32 55h-6M98 55h6" stroke="'+T+'" stroke-width="3.2" stroke-linecap="round"/>';
  }
  if(v==='doctor'){
    hat='<rect x="58" y="20" width="14" height="5" rx="2" fill="#E11D48"/>'
       +'<rect x="62.5" y="15.5" width="5" height="14" rx="2" fill="#E11D48"/>';
    gear='<path d="M50 100c0 12 7 19 15 19s15-7 15-19" fill="none" stroke="'+T+'" stroke-width="3.4" stroke-linecap="round"/>'
        +'<circle cx="80" cy="104" r="5.5" fill="'+T+'"/>';
  }
  if(v==='hero'){
    hat='<path d="M40 44c7-9 16-13 25-13s18 4 25 13l-6 7c-5.5-7-12-10-19-10s-13.5 3-19 10z" fill="'+T+'" opacity=".95"/>';
    gear='<path d="M46 96 30 150h26l6-48z" fill="'+T+'" opacity=".78"/>'
        +'<path d="M84 96l16 54H74l-6-48z" fill="'+T+'" opacity=".78"/>';
  }
  if(v==='builder'){
    hat='<path d="M32 41c2-18 15-28 33-28s31 10 33 28z" fill="'+T+'"/>'
       +'<rect x="25" y="39" width="80" height="7.5" rx="3.75" fill="'+T+'"/>'
       +'<rect x="61" y="16" width="8" height="25" rx="3" fill="#fff" opacity=".5"/>';
  }

  return '<svg viewBox="0 0 130 156" width="'+(size*130/156)+'" height="'+size+'" xmlns="http://www.w3.org/2000/svg">'
  + defs
  + (v==='hero'?gear:'')
  /* ---------- LEFT ARM (hangs, behind torso) ---------- */
  + '<g transform="rotate(18 37 102)">'
  +   '<rect x="28" y="98" width="18" height="36" rx="9" fill="url(#sh'+u+')" stroke="#12203A" stroke-width="2.2"/>'
  +   '<rect x="28" y="98" width="18" height="9" rx="4.5" fill="'+T+'"/>'
  +   '<circle cx="37" cy="137" r="9.5" fill="url(#sh'+u+')" stroke="#12203A" stroke-width="2.2"/>'
  + '</g>'
  /* ---------- RIGHT ARM (raised, waving) ---------- */
  + '<g class="wave" style="transform-origin:95px 110px"><g transform="rotate(30 95 110)">'
  +   '<rect x="86" y="78" width="18" height="34" rx="9" fill="url(#sh'+u+')" stroke="#12203A" stroke-width="2.2"/>'
  +   '<rect x="86" y="101" width="18" height="9" rx="4.5" fill="'+T+'"/>'
  +   '<circle cx="95" cy="80" r="10" fill="url(#sh'+u+')" stroke="#12203A" stroke-width="2.2"/>'
  +   '<path d="M99 70c2.5-4.5 6.5-5.5 7.5-2.5s-1.5 6-4.5 8zM103 76c3-3 6.5-2.5 6.5.5s-3 4.5-6 5.5z" fill="#0E1A2B"/>'
  + '</g></g>'
  /* ---------- NECK ---------- */
  + '<rect x="56" y="78" width="18" height="18" rx="6" fill="#C3D4E8" stroke="#12203A" stroke-width="2.2"/>'
  /* ---------- TORSO ---------- */
  + '<rect x="34" y="90" width="62" height="60" rx="29" fill="url(#sh'+u+')" stroke="#12203A" stroke-width="2.4"/>'
  /* shoulder collars sit on top of the arm joints */
  + '<path d="M37 106a30 30 0 0 1 11-13l5 8a20 20 0 0 0-7 9z" fill="'+T+'"/>'
  + '<path d="M93 106a30 30 0 0 0-11-13l-5 8a20 20 0 0 1 7 9z" fill="'+T+'"/>'
  /* chest screen */
  + '<circle cx="65" cy="120" r="17.5" fill="#0B1526" stroke="'+T+'" stroke-width="2.8"/>'
  + '<path d="M55 114h20a3.2 3.2 0 0 1 3.2 3.2v7.6a3.2 3.2 0 0 1-3.2 3.2h-9l-5.4 5.2v-5.2H55a3.2 3.2 0 0 1-3.2-3.2v-7.6A3.2 3.2 0 0 1 55 114z" fill="none" stroke="'+G+'" stroke-width="2.3"/>'
  + '<circle cx="59.5" cy="121" r="2" fill="'+G+'"/><circle cx="65" cy="121" r="2" fill="'+G+'"/><circle cx="70.5" cy="121" r="2" fill="'+G+'"/>'
  + head() + hat + (v==='hero'?'':gear)
  + '</svg>';
}
var current = {id:'chip',name:'Cora',color:'#0A84FF',role:'Programmed by a human, not an AI'};

/* ====================== KNOWLEDGE BASE ====================== */
function pick(a){ return a[Math.floor(Math.random()*a.length)]; }

var KB = [
 {id:'greet',
  pat:['sup','wsup','wassup','wazzup','wazzzup','whats up','whatsup','whats good','whats crackin',
       'whats crackalackin','whats happening','whats poppin','whats new','whats going on','whats the word',
       'hows it going','hows it hanging','hows life','hows things','hows your day','howdy','yo','hey','heyy',
       'hi','hiya','hello','hey there','good morning','good afternoon','good evening','morning','evening',
       'how are you','how are ya','how r u','how ru','how you doing','how you doin','how ya doin','how ya doing','hows tricks','you good','u good','aloha','greetings','oi','ello'],
  say:function(){ return pick([
    "Not much — just standing here being extremely well organized. What can I do for you?",
    "Living the dream, one scripted reply at a time. What brings you by?",
    "Hanging in there. Literally. I'm pinned to the corner of this page. What's up with you?",
    "Hey! Doing great, thanks for asking — most visitors skip straight to the questions. What do you need?",
    "All good over here. Every answer I've got was written by a human, so I never have an off day. What can I help with?"
  ]);}},

 {id:'can',
  pat:['what can you do','what do you do','what can you help with','help','capabilities','what are you for',
       'what is this','whats this','what does this do','how can you help','what now','options','menu'],
  say:function(){ return "Quite a bit, considering nobody plugged me into an AI.\n\nI can explain the free chatbot generator, what it costs, how to paste it into your site, which platforms work, how custom characters get built, and why rule-based beats AI for most small businesses.\n\nI also handle about ninety ways of saying \"what's up.\" Try one."; }},

 {id:'identity',
  pat:['who are you','what are you','whats your name','who r u','your name','are you a bot','are you a robot','what do i call you'],
  say:function(){ return "I'm " + current.name + ", a chatbot built with the free generator on this site. Not a person, not an AI — a programmed bot. Someone typed every word I know."; }},

 {id:'notai',
  pat:['are you ai','are you an ai','are u ai','are u an ai','you an ai','you ai','is this ai','is this an ai',
       'are you real','are you human','are you chatgpt','are u chatgpt','chatgpt','are you gpt','gpt',
       'you a robot','are you a robot','are u a robot','robot','are you a person','is this a real person',
       'real person','are you alive','are you sentient','llm','openai','anthropic','gemini','machine learning'],
  say:function(){ return "Nope, and I'll never pretend otherwise. I'm rule-based — I only know what a human typed into me.\n\nThat's the point. An AI bot can invent a price or promise a warranty nobody approved. I physically can't. If I don't know something, I hand you a phone number."; }},

 {id:'howtrain',
  pat:['can i train you','train','how do you learn','can you learn','teach you','how were you made','how do you work'],
  say:function(){ return "You train me by writing my answers. In the generator you type the question a visitor taps and the reply I give — that's the whole training process. No data upload, no model, no waiting.\n\nChange your hours? Edit one line, paste the new code, done."; }},

 {id:'free',
  pat:['is it free','how much is the tool','free','cost nothing','price of the tool','do i have to pay','trial','signup','sign up','account','credit card'],
  say:function(){ return "The generator is free. No account, no email, no card, no conversation limit.\n\nNothing is metered because nothing phones home — the code sits in your own page."; }},

 {id:'price',
  pat:['how much','pricing','what does it cost','cost','price','fee','install for me','do it for me','199','$199','hosting'],
  say:function(){ return "Two numbers. Building a bot yourself: $0, forever.\n\nHaving us install and host it: $199 one time, which covers the first 12 months of hosting. After that it's $49 a year, or move the file to your own server for free.\n\nCustom characters like mine are quoted per project and cost less than most people guess."; }},

 {id:'aipower',
  pat:['connect to ai','hook up ai','with ai','ai powered','ai version','more powerful','smarter','upgrade',
       'can you be smarter','add ai','chatgpt powered','knowledge base','train on my website','read my site',
       'answer anything','open ended','most powerful'],
  say:function(){ return "Now you're asking the right question.\n\nEverything on this page is rule-based and free. But when we build a custom bot, we can wire it into a real AI model and train it on your site, your price list, your service docs — then it answers things nobody thought to script.\n\nThe trick is we put guardrails on it, so it still can't invent a price or promise a warranty. You get the open-ended conversation without the liability. That's the version most people don't know is available."; }},

 {id:'custom',
  pat:['custom','character','mascot','like you','superhero','super hero','doctor','auto glass','glass','contractor',
       'can you look like','design','my own bot','make me one','cartoon','avatar'],
  say:function(){ return "That's the fun part. Pick a character and we draw it.\n\nWe've got an auto glass tech in safety glasses, a clinic bot with a stethoscope, a caped hero, a contractor in a hard hat. Want your actual logo as a face? Your dog? Your foreman? We'll draw it and script it to your business.\n\nTry the character buttons on this page — same bot, five different faces."; }},

 {id:'install',
  pat:['how do i install','install','installing','paste','embed','where do i put','put it on my site',
       'on my site','add to my site','add it to my site','add it','set up','setup','code snippet','snippet','copy the code'],
  say:function(){ return "Copy the block the generator gives you and paste it right before the closing </body> tag of your site.\n\nWordPress: footer or a custom HTML block. Shopify: theme.liquid. Squarespace: code injection. Wix and Webflow: custom code. Plain HTML: anywhere near the bottom.\n\nIf your site has a footer you can edit, you can do this in about a minute."; }},

 {id:'platforms',
  pat:['wordpress','shopify','wix','squarespace','webflow','godaddy','weebly','html','does it work on','compatible'],
  say:function(){ return "Yes. Anywhere you can paste HTML works — WordPress, Shopify, Wix, Squarespace, Webflow, GoDaddy, Weebly, or a plain HTML file. It's one script tag with no dependencies."; }},

 {id:'vsai',
  pat:['rule based','rule-based','vs ai','better than ai','why not ai','difference','hallucinate','make things up','accurate'],
  say:function(){ return "A rule-based bot answers what you wrote answers for. An AI bot generates a reply on the fly.\n\nAI is better at open-ended chat. Rule-based is better at not getting you sued. For a contractor quoting jobs or a clinic discussing insurance, the bot that cannot improvise is the safer bot.\n\nWe build both. We just tell you the truth about which one you need."; }},

 {id:'leads',
  pat:['lead','capture','collect','form','contact form','get my info','email me','phone number','can i get leads'],
  say:function(){ return "Turn on the message form and visitors leave a name, phone and note. It opens their email app addressed to you, so leads land in your inbox.\n\nNo database, no server, no privacy paperwork. Boring on purpose."; }},

 {id:'speed',
  pat:['slow down my site','slow my site down','slow my site','slow down','slow','speed','page speed',
       'performance','load time','heavy','core web vitals','bloat','file size','how big','lightweight'],
  say:function(){ return "About 9 KB and no outside requests. For comparison, most chat widgets pull 200 KB or more from someone else's server before they show up.\n\nYours is already in your page when it loads."; }},

 {id:'contact',
  pat:['talk to a human','real person','call','phone','contact','speak to someone','reach you','support','help me'],
  say:function(){ return "Call 1-800-481-8638 and a person picks up — no phone tree. We're in Denver, open weekdays.\n\nOr tell me what you're trying to build and I'll point you at the right page."; }},

 {id:'hours',
  pat:['hours','open','when are you open','closed','weekend','holiday','what time'],
  say:function(){ return "The tool is up 24/7 and costs nothing at 3am. Humans here are on Denver time, weekdays. I don't sleep, which is most of my value proposition."; }},

 {id:'thanks',
  pat:['thanks','thank you','thx','ty','appreciate it','awesome','nice','cool','sweet','perfect','great','love it','dope','sick','fire'],
  say:function(){ return pick([
    "Anytime. Go build one — it takes about two minutes.",
    "Happy to help. That's literally the only thing I was written to do.",
    "You got it. Anything else while I'm here?"
  ]);}},

 {id:'joke',
  pat:['joke','funny','make me laugh','tell me something','bored','entertain'],
  say:function(){ return pick([
    "Why don't chatbots ever get lost? We only go where somebody told us to go.\n\nThat's also our whole safety feature.",
    "I'd tell you a joke about recursion, but first I'd have to tell you a joke about recursion.",
    "A visitor asked me something I wasn't programmed for. I gave them a phone number. Honestly, best outcome available."
  ]);}},

 {id:'bye',
  pat:['bye','goodbye','see ya','later','cya','peace','im out','gotta go','good night','gn','adios','ciao'],
  say:function(){ return pick([
    "See you around. Close me out and watch what happens — I've been practicing.",
    "Later! Hit the bubble any time.",
    "Take it easy. I'll be right here in the corner, not sleeping."
  ]);}},

 {id:'swear',
  pat:['stupid','dumb','useless','suck','worst','hate you','shut up','trash','garbage'],
  say:function(){ return "Fair. I only know what someone typed into me, so if I missed your question that's on my script, not on you.\n\nTry asking a different way, or call 1-800-481-8638 and get an actual human."; }}
];

var FALLBACK = [
  "That one's outside my script — and I'd rather say so than invent an answer.\n\nTry: pricing, how to install it, custom characters, or whether I'm an AI.",
  "Not something I was programmed for. Here's what I do know cold: the free tool, the $199 install, custom bots, and how to paste the code.\n\nOr call 1-800-481-8638.",
  "I don't have a written answer for that, and I won't make one up. That restraint is the entire product.\n\nAsk me about pricing, install, or custom characters."
];

var QUICK = ['What can you do?','Are you an AI?','How much is it?','Make me a custom one','How do I install it?'];
var TRY = ["sup","wazzzup my dude","hey hows it hanging","are you chatgpt?","can i train you?",
           "how much does this cost","make me a superhero bot","will it slow my site down","tell me a joke","peace out"];

function norm(s){ return (' '+s.toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim()+' '); }
function answer(input){
  var n = norm(input);
  if(!n.trim()) return pick(FALLBACK);
  var best=null, bestLen=0;
  for(var i=0;i<KB.length;i++){
    for(var j=0;j<KB[i].pat.length;j++){
      var p = KB[i].pat[j];
      if(n.indexOf(' '+p+' ')!==-1 && p.length>bestLen){ best=KB[i]; bestLen=p.length; }
    }
  }
  return best ? best.say() : pick(FALLBACK);
}


function start(){
var launch=document.getElementById('launch'), panel=document.getElementById('panel'),
    msgs=document.getElementById('msgs'), quick=document.getElementById('quick'),
    inp=document.getElementById('inp'), portal=document.getElementById('portal'),
    fx=document.getElementById('fx'), started=false;

function paintChar(){
  launch.innerHTML = art(current.id,115);
  document.getElementById('headArt').innerHTML = art(current.id,38,'head');
  document.getElementById('headName').textContent = current.name;
  document.getElementById('headRole').textContent = current.role;
}
function addBub(text,who){
  var d=document.createElement('div'); d.className='bub '+who; d.textContent=text;
  msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight;
}
function botSay(text){
  var t=document.createElement('div'); t.className='typing';
  t.innerHTML='<s></s><s></s><s></s>'; msgs.appendChild(t); msgs.scrollTop=msgs.scrollHeight;
  setTimeout(function(){ if(t.parentNode) t.parentNode.removeChild(t); addBub(text,'bot'); },
    Math.min(1200,320+text.length*8));
}
function ask(text){ addBub(text,'me'); botSay(answer(text)); }
function openChat(){
  panel.classList.add('on');
  if(!started){ started=true;
    botSay("Hey! I'm "+current.name+". Real talk: I'm not an AI \u2014 I'm a programmed bot, and a person wrote every answer I have.\n\nTry me with slang, or tap something below."); }
  setTimeout(function(){ inp.focus(); },350);
}
function closeChat(){ panel.classList.remove('on'); }

function fireworks(x,y){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var colors=['#22D3FF','#0A84FF','#9E7BFF','#FFB454','#4ADE80','#FF6FA5'];
  for(var i=0;i<58;i++){(function(i){
    var p=document.createElement('div');
    var ang=(Math.PI*2*i)/58+Math.random()*.4, dist=85+Math.random()*185, sz=3+Math.random()*7;
    p.style.cssText='position:absolute;left:'+x+'px;top:'+y+'px;width:'+sz+'px;height:'+sz+'px;'+
      'margin:'+(-sz/2)+'px 0 0 '+(-sz/2)+'px;border-radius:50%;background:'+colors[i%colors.length]+
      ';box-shadow:0 0 14px '+colors[i%colors.length]+
      ';transition:transform 1.25s cubic-bezier(.12,.85,.25,1),opacity 1.25s ease-out';
    fx.appendChild(p);
    requestAnimationFrame(function(){
      p.style.transform='translate('+Math.cos(ang)*dist+'px,'+(Math.sin(ang)*dist+58)+'px) scale(.15)';
      p.style.opacity='0';
    });
    setTimeout(function(){ if(p.parentNode) p.parentNode.removeChild(p); },1320);
  })(i);}
}
function dust(x,y){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for(var i=0;i<16;i++){(function(i){
    var side=i%2?1:-1, p=document.createElement('div'), sz=10+Math.random()*26;
    p.style.cssText='position:absolute;left:'+x+'px;top:'+y+'px;width:'+sz+'px;height:'+sz+'px;'+
      'margin:'+(-sz/2)+'px 0 0 '+(-sz/2)+'px;border-radius:50%;pointer-events:none;'+
      'background:radial-gradient(circle,rgba(214,230,248,.55),rgba(150,180,215,.12) 70%,transparent 100%);'+
      'transition:transform .85s cubic-bezier(.1,.8,.3,1),opacity .85s ease-out';
    fx.appendChild(p);
    requestAnimationFrame(function(){
      p.style.transform='translate('+(side*(24+Math.random()*88))+'px,'+(-6-Math.random()*26)+'px) scale('+(1.9+Math.random()*1.5)+')';
      p.style.opacity='0';
    });
    setTimeout(function(){ if(p.parentNode) p.parentNode.removeChild(p); },900);
  })(i);}
}
function arrive(){
  closeChat();
  launch.classList.remove('bobbing','diving','squashing');
  void launch.offsetWidth;
  launch.classList.add('rolling');
  setTimeout(function(){
    launch.classList.remove('rolling');
    var r=launch.getBoundingClientRect(), cx=r.left+r.width/2;
    launch.classList.add('squashing');
    dust(cx,r.bottom-6);
    fireworks(cx,r.top+r.height*0.42);
    setTimeout(function(){ fireworks(cx-40,r.top-30); },260);
    setTimeout(function(){ fireworks(cx+46,r.top-8); },430);
    setTimeout(function(){ launch.classList.remove('squashing'); launch.classList.add('bobbing'); },720);
  },3200);
}
function portalExit(){
  closeChat();
  if(launch.dataset.busy==='1') return;
  launch.dataset.busy='1';
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    launch.style.opacity='0';
    setTimeout(function(){ launch.style.opacity='1'; launch.dataset.busy=''; },700); return;
  }
  var r=launch.getBoundingClientRect(), bx=r.left+r.width/2, by=r.top+r.height/2;
  var tx=window.innerWidth*0.5, ty=window.innerHeight*0.13;
  launch.classList.remove('bobbing');
  launch.style.transition='transform .45s cubic-bezier(.3,1.5,.5,1)';
  launch.style.transform='translateY(14px) scale(.82) rotate(-14deg)';
  setTimeout(function(){
    launch.style.transform='translateY(-10px) scale(1.08) rotate(16deg)';
    var orb=document.createElement('div');
    orb.style.cssText='position:fixed;z-index:58;left:'+bx+'px;top:'+by+'px;width:26px;height:26px;'+
      'margin:-13px 0 0 -13px;border-radius:50%;pointer-events:none;'+
      'background:radial-gradient(circle,#000 40%,#2a1155 70%,rgba(120,60,255,.8) 100%);'+
      'box-shadow:0 0 26px 8px rgba(120,60,255,.6);transition:transform 1.05s cubic-bezier(.22,.65,.3,1)';
    document.body.appendChild(orb);
    requestAnimationFrame(function(){
      orb.style.transform='translate('+(tx-bx)+'px,'+(ty-by)+'px) rotate(540deg) scale(1.1)'; });
    setTimeout(function(){
      if(orb.parentNode) orb.parentNode.removeChild(orb);
      portal.style.animation='none';
      portal.style.cssText+=';display:block;width:190px;height:190px;left:'+tx+'px;top:'+ty+'px;';
      void portal.offsetWidth;
      portal.style.animation='portalOpen .75s cubic-bezier(.2,1.35,.4,1) both';
      setTimeout(function(){
        launch.style.transition='transform .35s ease-in';
        launch.style.transform='translateY(18px) scale(.8) rotate(-8deg)';
        setTimeout(function(){
          launch.style.transition='transform .62s cubic-bezier(.2,.7,.5,1)';
          launch.style.transform='translate('+((tx-bx)*0.42)+'px,'+((ty-by)*0.30-70)+'px) rotate(300deg) scale(1.16)';
          setTimeout(function(){
            launch.style.transition='transform .78s cubic-bezier(.55,0,.85,.6),opacity .78s ease-in';
            launch.style.transform='translate('+(tx-bx)+'px,'+(ty-by)+'px) rotate(1080deg) scale(.04)';
            launch.style.opacity='.15';
            setTimeout(function(){
              portal.style.animation='portalShut .6s cubic-bezier(.6,0,.9,.5) both';
              setTimeout(function(){
                portal.style.display='none'; portal.style.animation='none';
                launch.style.transition='none'; launch.style.transform='none'; launch.style.opacity='0';
                setTimeout(function(){ launch.style.opacity='1'; launch.dataset.busy=''; arrive(); },800);
              },600);
            },780);
          },350);
        },360);
      },760);
    },1060);
  },460);
}

QUICK.forEach(function(q){
  var b=document.createElement('button'); b.type='button'; b.textContent=q;
  b.addEventListener('click',function(){ ask(q); });
  quick.appendChild(b);
});
launch.addEventListener('click',function(){ panel.classList.contains('on')?closeChat():openChat(); });
document.getElementById('closeBtn').addEventListener('click',portalExit);
document.getElementById('send').addEventListener('click',function(){
  var v=inp.value.trim(); if(!v) return; inp.value=''; ask(v); });
inp.addEventListener('keydown',function(e){
  if(e.key==='Enter'){ var v=inp.value.trim(); if(!v) return; inp.value=''; ask(v); } });

/* let any page open Cora from a button: data-cora="open" */
document.addEventListener('click',function(e){
  var t=e.target.closest('[data-cora]'); if(!t) return;
  e.preventDefault(); openChat();
  if(t.getAttribute('data-cora')!=='open') setTimeout(function(){ ask(t.getAttribute('data-cora')); },300);
});

paintChar();
setTimeout(arrive,500);
}

/* ---- self-mounting: builds its own styles and markup ---- */
var CSS = "\n#dock{position:fixed;right:20px;bottom:18px;z-index:60;width:96px;height:115px}\n#launch{width:96px;height:115px;border:0;cursor:pointer;padding:0;background:transparent;position:relative;display:block}\n#launch svg{width:96px;height:115px;filter:drop-shadow(0 10px 20px rgba(0,0,0,.5)) drop-shadow(0 0 26px rgba(34,211,255,.3))}\n#launch:hover{transform:scale(1.06)}\n#launch{transition:transform .2s}\n\n#panel{position:fixed;right:20px;bottom:142px;z-index:59;width:352px;max-width:calc(100vw - 44px);\n  background:#fff;border-radius:18px;box-shadow:0 24px 64px rgba(0,0,0,.5);overflow:hidden;\n  display:none;flex-direction:column;max-height:min(560px,calc(100vh - 186px));\n  transform-origin:bottom right}\n#panel.on{display:flex;animation:panelIn .34s cubic-bezier(.2,1.3,.4,1)}\n@keyframes panelIn{0%{opacity:0;transform:translateY(18px) scale(.9)}100%{opacity:1;transform:none}}\n.phead{background:linear-gradient(135deg,var(--signal),#0B5ED7);color:#fff;padding:13px 15px;display:flex;align-items:center;gap:11px}\n.phead svg{width:38px;height:38px;flex:0 0 38px}\n.phead b{display:block;font-family:var(--display);font-size:15px;line-height:1.2}\n.phead em{font-style:normal;font-size:11.5px;opacity:.9;display:flex;align-items:center;gap:5px}\n.phead em u{width:6px;height:6px;border-radius:50%;background:#4ADE80;display:inline-block;text-decoration:none}\n.pclose{margin-left:auto;background:transparent;border:0;color:#fff;font-size:24px;line-height:1;cursor:pointer;opacity:.85;padding:0 3px}\n.pclose:hover{opacity:1}\n.pmsgs{flex:1;overflow-y:auto;padding:14px;background:#F5F8FC;min-height:190px}\n.bub{max-width:82%;padding:10px 14px;border-radius:15px;margin-bottom:9px;font-size:13.8px;line-height:1.5;\n  white-space:pre-wrap;overflow-wrap:anywhere;animation:bubIn .26s ease both}\n@keyframes bubIn{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}\n.bub.bot{background:#fff;color:#17202E;border-bottom-left-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.08)}\n.bub.me{background:var(--signal);color:#fff;margin-left:auto;border-bottom-right-radius:4px}\n.typing{display:flex;gap:4px;padding:12px 14px;background:#fff;border-radius:15px;width:54px;\n  box-shadow:0 1px 3px rgba(0,0,0,.08);margin-bottom:9px}\n.typing s{width:6px;height:6px;border-radius:50%;background:#B9C3D1;text-decoration:none;animation:blink 1.3s infinite}\n.typing s:nth-child(2){animation-delay:.18s}.typing s:nth-child(3){animation-delay:.36s}\n@keyframes blink{0%,60%,100%{opacity:.3}30%{opacity:1}}\n/* quick replies \u2014 constrained so nothing can escape the bubble */\n.pquick{padding:10px 12px;border-top:1px solid #E8EDF3;background:#fff;display:flex;flex-wrap:wrap;gap:6px;\n  max-height:112px;overflow-y:auto}\n.pquick button{border:1px solid var(--signal);color:var(--signal);background:#fff;border-radius:999px;\n  padding:7px 13px;font-size:12.5px;cursor:pointer;line-height:1.3;text-align:left;\n  max-width:100%;overflow-wrap:anywhere;font-family:var(--body)}\n.pquick button:hover{background:var(--signal);color:#fff}\n.pinput{display:flex;gap:7px;padding:10px 12px;border-top:1px solid #E8EDF3;background:#fff}\n.pinput input{flex:1;min-width:0;border:1px solid #DCE3EC;border-radius:999px;padding:9px 14px;font-size:13.5px;\n  color:#17202E;font-family:var(--body);background:#fff}\n.pinput input:focus{outline:2px solid rgba(10,132,255,.35);outline-offset:0;border-color:var(--signal)}\n.pinput button{flex:0 0 38px;width:38px;height:38px;border-radius:50%;border:0;background:var(--signal);color:#fff;cursor:pointer;font-size:15px}\n.pfoot{font-size:10.5px;color:#93A0B4;text-align:center;padding:7px;background:#fff;border-top:1px solid #F0F3F7}\n\n\n@keyframes rollIn{\n  0%  {transform:translate(-90vw,-34vh) rotate(-1080deg) scale(.22);opacity:0}\n  10% {opacity:1}\n  30% {transform:translate(-42vw,-6vh)  rotate(-620deg) scale(.75)}\n  48% {transform:translate(-14vw,14vh)  rotate(-240deg) scale(1.05)}\n  62% {transform:translate(26px,40px)   rotate(46deg)   scale(1.3)}\n  72% {transform:translate(-18px,-26px) rotate(-30deg)  scale(.86)}\n  81% {transform:translate(11px,17px)   rotate(19deg)   scale(1.12)}\n  88% {transform:translate(-6px,-9px)   rotate(-11deg)  scale(.95)}\n  94% {transform:translate(3px,4px)     rotate(5deg)    scale(1.04)}\n  100%{transform:none;opacity:1}\n}\n.rolling{animation:rollIn 3.2s cubic-bezier(.18,.72,.3,1) both}\n.wave{animation:waveArm 2.6s ease-in-out infinite;transform-box:fill-box}\n@keyframes waveArm{0%,62%,100%{transform:rotate(0)}72%{transform:rotate(-19deg)}82%{transform:rotate(9deg)}92%{transform:rotate(-11deg)}}\n@keyframes squashLand{0%{transform:scale(1,1)}22%{transform:scale(1.28,.72)}48%{transform:scale(.88,1.14)}70%{transform:scale(1.08,.94)}86%{transform:scale(.97,1.03)}100%{transform:scale(1,1)}}\n.squashing{animation:squashLand .72s cubic-bezier(.3,1.1,.4,1) both;transform-origin:50% 100%}\n@keyframes idleBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}\n.bobbing{animation:idleBob 3.4s ease-in-out infinite}\n@keyframes intoPortal{\n  0%{transform:none;opacity:1}\n  22%{transform:translateY(-30px) rotate(-14deg) scale(1.12)}\n  48%{transform:translateY(-46px) rotate(12deg) scale(1.05)}\n  100%{transform:translateY(6px) rotate(760deg) scale(.02);opacity:.2}\n}\n.diving{animation:intoPortal .9s cubic-bezier(.5,-0.3,.75,1) both}\n#portal{position:fixed;z-index:58;border-radius:50%;pointer-events:none;\n  background:radial-gradient(circle,#000 38%,#1b0f3d 62%,rgba(90,40,200,.55) 80%,transparent 100%);\n  box-shadow:0 0 46px 12px rgba(120,60,255,.5);display:none}\n@keyframes portalOpen{\n  0%{transform:translate(-50%,-50%) scale(0) rotate(0);opacity:0}\n  35%{opacity:1}\n  65%{transform:translate(-50%,-50%) scale(1.22) rotate(200deg)}\n  100%{transform:translate(-50%,-50%) scale(1) rotate(330deg);opacity:1}}\n@keyframes portalSpin{to{transform:translate(-50%,-50%) scale(1) rotate(690deg)}}\n@keyframes portalShut{0%{transform:translate(-50%,-50%) scale(1) rotate(300deg);opacity:1}\n  100%{transform:translate(-50%,-50%) scale(0) rotate(560deg);opacity:0}}\n#fx{position:fixed;inset:0;z-index:57;pointer-events:none}\n@media (prefers-reduced-motion:reduce){\n  .rolling,.bobbing,.diving,.squashing,.wave{animation:none!important}\n  #panel.on{animation:none}\n  .bub{animation:none}\n}\n@media(max-width:560px){\n  #panel{right:12px;left:12px;width:auto;bottom:132px}\n  #dock{right:10px;bottom:10px;width:84px;height:100px}\n  #launch,#launch svg{width:84px;height:100px}}";

function mount(){
  if(document.getElementById('cora-dock')) return;
  var st=document.createElement('style'); st.textContent=CSS; document.head.appendChild(st);

  var host=document.createElement('div');
  host.innerHTML =
    '<div id="fx"></div><div id="portal"></div>'+
    '<div id="dock"><button id="launch" aria-label="Chat with Cora"></button></div>'+
    '<div id="panel" role="dialog" aria-label="Chat with Cora">'+
      '<div class="phead"><span id="headArt"></span>'+
        '<div><b id="headName">Cora</b><em><u></u><span id="headRole">Programmed by a human, not an AI</span></em></div>'+
        '<button class="pclose" id="closeBtn" aria-label="Close chat">&times;</button></div>'+
      '<div class="pmsgs" id="msgs"></div><div class="pquick" id="quick"></div>'+
      '<div class="pinput"><input id="inp" type="text" placeholder="Ask me anything \u2014 try slang" autocomplete="off">'+
        '<button id="send" aria-label="Send">&#10148;</button></div>'+
      '<div class="pfoot">This bot was built with our free tool</div>'+
    '</div>';
  host.id='cora-dock';
  while(host.firstChild) document.body.appendChild(host.firstChild);
  document.body.appendChild(host);
  start();
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',mount);
else mount();

})();
