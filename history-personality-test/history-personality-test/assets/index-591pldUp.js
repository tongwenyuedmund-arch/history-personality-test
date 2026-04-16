(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const u=[{id:"strp",code:"STRP",name:"结构-总体-理性-过去",typeLabel:"立法者",icon:"/icon-legislator.jpg",representative:{name:"保罗·利科",country:"法国",fullName:"Paul Ricoeur"},dimension:{structure:"结构",unity:"总体",rationality:"理性",time:"过去"},description:"你是一个深谙历史规律的思考者，相信历史有其内在的结构和逻辑。你倾向于从宏观角度审视历史长河，认为历史的各个部分相互关联、不可分割。在认识历史时，你更注重理性和知识的力量，相信通过科学的方法可以揭示历史的真相。同时，你高度重视过去的价值，认为理解历史对于把握当下至关重要。",characteristics:["重视历史规律和结构","整体性思维","理性分析","尊重传统和历史经验","追求历史真相"],quote:""},{id:"strf",code:"STRF",name:"结构-总体-理性-未来",typeLabel:"继承者",icon:"/icon-debater.jpg",representative:{name:"约恩·吕森",country:"德国",fullName:"Jörn Rüsen"},dimension:{structure:"结构",unity:"总体",rationality:"理性",time:"未来"},description:"你是一个具有远见的历史理性主义者。你相信历史发展中存在可识别的规律和结构，这些规律可以帮助我们预见未来。你持整体论观点，认为历史是一个统一的整体。在方法论上，你强调理性和科学分析的重要性。但你的目光不局限于过去，而是积极面向未来，用历史的智慧照亮前行的道路。",characteristics:["强调历史规律可预测未来","整体发展观","理性主义","面向未来","重视历史经验的实用价值"],quote:""},{id:"stip",code:"STIP",name:"结构-总体-直觉-过去",typeLabel:"追忆者",icon:"/icon-remembrancer.jpg",representative:{name:"弗兰克·安克斯密特",country:"荷兰",fullName:"Frank Ankersmit"},dimension:{structure:"结构",unity:"总体",rationality:"直觉",time:"过去"},description:"你是一个富有诗意的历史思想家。你相信历史具有深层的美学和叙事结构，但这种结构需要通过直觉和感受来把握，而非单纯的理性分析。你认为历史是一个不可分割的整体，其魅力在于那些难以言说的意境和情感联系。尽管你的直觉导向让你更关注人的体验和感受，但你仍然深深扎根于对过去的珍视之中。",characteristics:["重视历史的审美维度","直觉性理解","整体性视野","关注人的情感体验","珍视历史遗产"],quote:""},{id:"stif",code:"STIF",name:"结构-总体-直觉-未来",typeLabel:"写作者",icon:"/icon-writer.jpg",representative:{name:"海登·怀特",country:"美国",fullName:"Hayden White"},dimension:{structure:"结构",unity:"总体",rationality:"直觉",time:"未来"},description:"你是一个后现代历史哲学家，对历史叙事和语言有深刻的洞察。你相信历史虽然有其结构，但这种结构本质上是诗性的和修辞性的，需要通过直觉来理解。你持整体论观点，认为历史是一个统一的文本。更重要的是，你将历史意识指向未来，认为我们对过去的理解应该服务于对未来的想象和建构。",characteristics:["强调历史叙事的诗学本质","后现代视角","直觉主义","未来导向","解构与建构并存"],quote:""},{id:"sdrp",code:"SDRP",name:"结构-多元-理性-过去",typeLabel:"推演者",icon:"/icon-heir.jpg",representative:{name:"卡洛·金兹伯格",country:"意大利",fullName:"Carlo Ginzburg"},dimension:{structure:"结构",unity:"多元",rationality:"理性",time:"过去"},description:"你是一个批判性的历史学家，兼具结构主义思维和多元视角。你相信历史有可识别的结构，但这些结构在不同的文化、社会和地域中呈现出丰富的多样性。你重视理性方法，但认识到历史理解的复杂性。在价值取向上，你深深扎根于过去，认为理解不同历史经验对于今天的我们具有重要意义。",characteristics:["结构性思维","多元文化视角","理性分析","重视历史差异","批判性思维"],quote:""},{id:"sdrf",code:"SDRF",name:"结构-多元-理性-未来",typeLabel:"思考者",icon:"/icon-thinker.jpg",representative:{name:"弗朗索瓦·阿赫托戈",country:"法国",fullName:"François Hartog"},dimension:{structure:"结构",unity:"多元",rationality:"理性",time:"未来"},description:"你是一个面向未来的历史多元主义者。你承认历史存在各种可比较的结构，但这些结构是多元的、开放的，而非单一固定的模式。你运用理性分析来理解这些多样的历史可能性，同时积极将目光投向未来，相信历史的多元性为我们创造了丰富的未来选择。",characteristics:["多元结构观","理性开放","面向未来","比较历史视角","拒绝单一决定论"],quote:""},{id:"sdip",code:"SDIP",name:"结构-多元-直觉-过去",typeLabel:"共情者",icon:"/icon-empath.jpg",representative:{name:"娜塔莉·戴维斯",country:"澳大利亚",fullName:"Natalie Davis"},dimension:{structure:"结构",unity:"多元",rationality:"直觉",time:"过去"},description:"你是一个感性而深刻的历史思考者。你通过直觉感知到历史中那些交织重叠的结构，这些结构因文化和经验的不同而呈现出斑斓的色彩。你珍视历史经验的丰富性，通过感受和想象来进入不同时代人们的生活世界。你的历史意识深深扎根于过去，在那里寻找人类经验的宝藏。",characteristics:["直觉感知历史","多元文化敏感","强调情感联系","重视历史体验","人文关怀"],quote:"历史是一种独特的、没有特权的作者行为，是在永恒的当下（perpetual present）进行的，与不可言说的过去有关。"},{id:"sdif",code:"SDIF",name:"结构-多元-直觉-未来",typeLabel:"讲述者",icon:"/icon-narrator.jpg",representative:{name:"艾伦·蒙斯洛",country:"英国",fullName:"Alun Munslow"},dimension:{structure:"结构",unity:"多元",rationality:"直觉",time:"未来"},description:"你是一个充满想象力的历史梦想家。你通过直觉发现历史中那些多样的、往往是隐藏的结构和可能性。你拒绝单一的历史叙事，而是拥抱多元的、甚至是矛盾的历史想象。你的目光投向未来，相信过去的历史资源可以被重新组合，创造出新的可能性和愿景。",characteristics:["多元想象","直觉导向","反叛单一叙事","未来建构","诗性思维"],quote:"历史是一种独特的、没有特权的作者行为，是在永恒的当下（perpetual present）进行的，与不可言说的过去有关。"},{id:"htrp",code:"HTRP",name:"历史-总体-理性-过去",typeLabel:"捍卫者",icon:"/icon-guardian.jpg",representative:{name:"格特鲁德·希梅尔法布",country:"美国",fullName:"Gertrude Himmelfarb"},dimension:{structure:"历史",unity:"总体",rationality:"理性",time:"过去"},description:"你是一个坚定的历史经验主义者。你认为历史本质上是随时间流动变化的过程，没有永恒不变的结构。你从整体的角度理解历史，认识到历史事件之间的相互联系。在方法上，你强调理性和证据的重要性，用科学的态度研究历史。同时，你深深尊重过去，相信历史经验对今天仍有宝贵的启示。",characteristics:["强调历史的变化性","经验主义","整体联系观","重视历史证据","脚踏实地"],quote:""},{id:"htrf",code:"HTRF",name:"历史-总体-理性-未来",typeLabel:"平衡者",icon:"/icon-mediator.jpg",representative:{name:"爱德华·卡尔",country:"英国",fullName:"Edward Carr"},dimension:{structure:"历史",unity:"总体",rationality:"理性",time:"未来"},description:"你是一个进步主义的历史思想家。你认为历史是不断变化的动态过程，这种变化不是任意的，而是有规律可循的。你从整体视角把握历史发展的方向，用理性分析来理解历史的演进。你的历史意识是向前看的，相信理解历史的目的在于更好地把握现在、创造未来。",characteristics:["进步史观","理性分析","整体发展论","面向未来","实用主义"],quote:"历史是历史学家与事实之间不断交互作用的过程，是过去事件和逐渐出现的未来目的之间的对话。"},{id:"htip",code:"HTIP",name:"历史-总体-直觉-过去",typeLabel:"驻足者",icon:"/icon-wanderer.jpg",representative:{name:"大卫·卡尔",country:"美国",fullName:"David Carr"},dimension:{structure:"历史",unity:"总体",rationality:"直觉",time:"过去"},description:"你是一个富有同理心的历史探索者。你认为历史是流动的、变化的，这种变化需要通过直觉和共情来感受。你从整体上理解历史中的人与事，强调历史经验的独特性和不可重复性。你的目光回望过去，通过想象和感受与历史中的人物建立联系，从他们的经历中汲取智慧。",characteristics:["共情式理解","重视独特性","整体直觉","回望过去","人文主义"],quote:""},{id:"htif",code:"HTIF",name:"历史-总体-直觉-未来",typeLabel:"前进者",icon:"/icon-advancer.jpg",representative:{name:"佐尔坦·西蒙",country:"匈牙利",fullName:"Zoltán Simon"},dimension:{structure:"历史",unity:"总体",rationality:"直觉",time:"未来"},description:"你是一个面向未来的历史哲学家。你认为历史本质上是开放的、充满可能性的，不应被任何固定结构所束缚。你用直觉感知历史中那些萌芽的可能性，将历史意识转化为面向未来的想象力。你相信过去为未来提供了灵感，而真正的创造在于我们如何想象和选择。",characteristics:["开放历史观","直觉想象","可能性思维","未来主义","创造性思维"],quote:""},{id:"hdrp",code:"HDRP",name:"历史-多元-理性-过去",typeLabel:"实践者",icon:"/icon-explorer.jpg",representative:{name:"林·亨特",country:"美国",fullName:"Lynn Hunt"},dimension:{structure:"历史",unity:"多元",rationality:"理性",time:"过去"},description:"你是一位严谨的语境主义历史学家。你认为历史是高度多元的，每个时代、每种文化都有其独特的历史经验，不能用单一框架来概括。你强调理性分析和历史语境的重要性，通过细致的文献研究来理解历史行动者的意图和思想。你深深尊重过去的独特性，警惕以今度古的谬误。",characteristics:["语境主义","文本细读","多元视角","历史客观性","严谨学术"],quote:""},{id:"hdrf",code:"HDRF",name:"历史-多元-理性-未来",typeLabel:"游历者",icon:"/icon-nomad.jpg",representative:{name:"迪佩什·查克拉巴蒂",country:"美国/印度",fullName:"Dipesh Chakrabarty"},dimension:{structure:"历史",unity:"多元",rationality:"理性",time:"未来"},description:"你是一个具有批判精神的后殖民历史思想家。你坚持历史的多元性和流动性，拒绝任何单一的历史叙述或欧洲中心主义的偏见。你运用理性分析来解构主流历史叙事，关注被忽视的历史声音和经验。你的目光指向未来，致力于创造一个更加多元、公正的历史理解。",characteristics:["后殖民视角","批判精神","多元主义","解构主流","进步导向"],quote:""},{id:"hdip",code:"HDIP",name:"历史-多元-直觉-过去",typeLabel:"表演者",icon:"/icon-performer.jpg",representative:{name:"琼·斯考特",country:"美国",fullName:"Joan Scott"},dimension:{structure:"历史",unity:"多元",rationality:"直觉",time:"过去"},description:"你是一位富有洞察力的女性主义历史学家。你通过直觉感知到历史中那些被忽视的经验和声音，尤其是女性和边缘群体的历史。你强调历史经验的多样性和流动性，拒绝任何试图统一或标准化的努力。你的目光回望过去，在那些被遗忘的角落寻找历史的真相和女性的力量。",characteristics:["女性主义视角","关注边缘","直觉洞察","多元经验","关怀伦理"],quote:""},{id:"hdif",code:"HDIF",name:"历史-多元-直觉-未来",typeLabel:"异见者",icon:"/icon-dissenter.jpg",representative:{name:"凯斯·詹金斯",country:"英国",fullName:"Keith Jenkins"},dimension:{structure:"历史",unity:"多元",rationality:"直觉",time:"未来"},description:"你是一个激进的多元主义历史思想家。你完全拥抱历史的变化性和多样性，拒绝任何形式的本质主义或结构决定论。你通过直觉感知到历史中无限的可能性和创造性联系。你的目光永远看向前方，相信历史的真正价值在于它能够激发我们创造一个更加多元、开放和自由的未来。",characteristics:["激进多元主义","反本质主义","无限可能","面向未来","解构与创新"],quote:""}],c=[{id:1,dimension:"structure",text:'你如何看待"历史总是惊人的相似"这种说法？',options:[{text:"历史确实存在可识别的规律，相似性反映了深层结构",value:["structure",3]},{text:"每种历史情境都是独特的，相似只是表面巧合",value:["history",1]}]},{id:7,dimension:"structure",text:"关于工业革命对人类社会的影响，你认为：",options:[{text:"它充满了偶然性，不同选择可能导致完全不同的结果",value:["history",1]},{text:"它遵循着现代化进程的内在规律，是必然发生的",value:["structure",3]}]},{id:12,dimension:"structure",text:'你如何看待"倘若克娄巴特拉的鼻子稍短一些，整个世界的面貌也许会是另外一个样子"的说法？',options:[{text:"历史会大变，因为我们无法确信这会导致什么样的结果",value:["history",3]},{text:"历史不会改变，因为其遵循某种内在发展规律",value:["structure",1]}]},{id:3,dimension:"structure",text:"你觉得现代人和古代人的思维方式和生活方式是否完全不同？",options:[{text:"并没有，我们完全能够理解古人的处境和情感",value:["structure",1]},{text:'是的，古人和我们甚至可以说是不同的"物种"',value:["history",3]}]},{id:15,dimension:"unity",text:"你个人更倾向于认为世界历史是：",options:[{text:"多元并存的，每种文明有其独特价值",value:["plurality",1]},{text:"一个相互关联的整体，各文明互相影响",value:["unity",3]}]},{id:4,dimension:"unity",text:"对于哥伦布发现美洲，你认为：",options:[{text:"它促成了现代世界的诞生，将人类命运联系为一个整体",value:["unity",3]},{text:"它对少数族裔造成了毁灭性打击，降低了人类文明的丰富性",value:["plurality",1]}]},{id:9,dimension:"unity",text:'以"鸦片战争"为例，你认为它主要是：',options:[{text:"中西文明相遇时多重因素交织的偶然产物",value:["plurality",1]},{text:"全球资本主义扩张的一个必然环节",value:["unity",3]}]},{id:16,dimension:"unity",text:"你觉得是否存在一种最好的理解历史的方法？",options:[{text:"存在——一种全局性、整体性的理解世界的方式",value:["unity",3]},{text:"不存在——与其寻找最好的方式，不如尝试多种不同视角的解读",value:["plurality",1]}]},{id:6,dimension:"rationality",text:"当你去参观一处历史遗址时，你更关注：",options:[{text:"想象当时人们的生活场景和感受",value:["intuition",1]},{text:"相关的历史文献和考古证据",value:["rationality",3]}]},{id:11,dimension:"rationality",text:"关于历史学与自然科学的关系，你认为：",options:[{text:"历史学有其独特的人文性和诠释性",value:["intuition",1]},{text:"历史学应当像科学一样追求客观和严谨",value:["rationality",3]}]},{id:2,dimension:"rationality",text:'阅读历史著作时，"同情性理解"（设身处地理解历史人物）这种方法：',options:[{text:"可能导致主观臆断，理性分析更重要",value:["rationality",1]},{text:"很有必要，能帮助我们深入理解历史",value:["intuition",3]}]},{id:8,dimension:"rationality",text:"当你作为学者采访一位老兵时，当其说道动情处，你会：",options:[{text:"想象战场上的危机，体会退伍后岁月对老人记忆的侵蚀",value:["intuition",1]},{text:"客观分析对方回忆的真伪，指出回忆有误的部分，与之商榷",value:["rationality",3]}]},{id:14,dimension:"time",text:"你学习历史的主要动力来自：",options:[{text:"理解我们从何而来，珍惜文化传统",value:["past",3]},{text:"为当下和未来提供借鉴与启示",value:["future",1]}]},{id:5,dimension:"time",text:"面对当今全球化带来的文化同质化现象，你更担忧的是：",options:[{text:"新文化融合可能带来更多创新和可能性",value:["future",1]},{text:"地方文化传统正在消失，这是不可逆的损失",value:["past",3]}]},{id:10,dimension:"time",text:"关于历史文物保护，你认为：",options:[{text:"适度的创新改造让历史更好地服务于当下",value:["future",1]},{text:"原汁原味的保护是第一位的，这是对历史的尊重",value:["past",3]}]},{id:13,dimension:"time",text:'爱德华·卡尔说"历史是历史学家与事实之间不断交互作用的过程"，这句话暗示：',options:[{text:"历史研究始终服务于当下和未来的需要",value:["future",1]},{text:"过去为我们理解现在提供了持续的参照",value:["past",3]}]}];let a=0,i={structure:0,history:0,unity:0,plurality:0,rationality:0,intuition:0,past:0,future:0};const p=document.querySelector("#app");function y(){p.innerHTML=`
    <div class="welcome-container">
      <div class="welcome-content">
        <div class="logo-section">
          <div class="logo-icon">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="2"/>
              <path d="M50 15 L50 85" stroke="currentColor" stroke-width="1.5"/>
              <path d="M15 50 L85 50" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="50" cy="50" r="25" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
              <circle cx="30" cy="30" r="3" fill="currentColor"/>
              <circle cx="70" cy="30" r="3" fill="currentColor"/>
              <circle cx="30" cy="70" r="3" fill="currentColor"/>
              <circle cx="70" cy="70" r="3" fill="currentColor"/>
            </svg>
          </div>
          <h1 class="title">历史意识人格测试</h1>
          <p class="subtitle">Discover Your Historical Consciousness Type</p>
        </div>
        
        <div class="intro-section">
          <p class="intro-text">
            基于16型历史意识人格分布理论，探索你如何理解和感知历史。
            通过16道精心设计的题目，发现你在四个核心维度上的倾向：
          </p>
          
          <div class="dimensions-grid">
            <div class="dimension-card">
              <div class="dimension-icon">⌛</div>
              <h3>结构 vs 历史</h3>
              <p>历史本质是否随时间变化</p>
            </div>
            <div class="dimension-card">
              <div class="dimension-icon">🔮</div>
              <h3>总体 vs 多元</h3>
              <p>历史是整体还是多元</p>
            </div>
            <div class="dimension-card">
              <div class="dimension-icon">🧠</div>
              <h3>理性 vs 直觉</h3>
              <p>认识历史的首要方式</p>
            </div>
            <div class="dimension-card">
              <div class="dimension-icon">⏳</div>
              <h3>过去 vs 未来</h3>
              <p>时间的关注焦点</p>
            </div>
          </div>
        </div>
        
        <button class="start-btn" onclick="startTest()">
          <span>开始测试</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
        
        <p class="disclaimer">测试时长约3-5分钟，共16道选择题</p>
      </div>
    </div>
  `}function m(){a=0,i={structure:0,history:0,unity:0,plurality:0,rationality:0,intuition:0,past:0,future:0},v()}function v(){const t=c[a],e=a/c.length*100;p.innerHTML=`
    <div class="test-container">
      <div class="progress-section">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${e}%"></div>
        </div>
        <div class="progress-info">
          <span class="question-count">第 ${a+1} / ${c.length} 题</span>
        </div>
      </div>
      
      <div class="question-section">
        <div class="question-card">
          <p class="question-text">${t.text}</p>
          
          <div class="options-container">
            ${t.options.map((r,o)=>`
              <button class="option-btn" data-index="${o}" onclick="selectOption(${o})">
                <span class="option-letter">${String.fromCharCode(65+o)}</span>
                <span class="option-text">${r.text}</span>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
      
      <div class="navigation-section">
        ${a>0?`
          <button class="nav-btn prev-btn" onclick="prevQuestion()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>上一题</span>
          </button>
        `:"<div></div>"}
        
        ${a<c.length-1?`
          <button class="nav-btn next-btn" id="nextBtn" onclick="nextQuestion()" disabled>
            <span>下一题</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        `:`
          <button class="nav-btn submit-btn" id="submitBtn" onclick="showResult()" disabled>
            <span>查看结果</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </button>
        `}
      </div>
    </div>
  `}let l=null;function h(t){l=t,document.querySelectorAll(".option-btn").forEach((r,o)=>{r.classList.toggle("selected",o===t)});const e=document.getElementById("nextBtn")||document.getElementById("submitBtn");e&&(e.removeAttribute("disabled"),e.classList.add("enabled"))}function f(){if(l===null)return;const e=c[a].options[l].value;e[0]==="structure"?i.structure+=e[1]:e[0]==="history"?i.history+=e[1]:e[0]==="unity"?i.unity+=e[1]:e[0]==="plurality"?i.plurality+=e[1]:e[0]==="rationality"?i.rationality+=e[1]:e[0]==="intuition"?i.intuition+=e[1]:e[0]==="past"?i.past+=e[1]:e[0]==="future"&&(i.future+=e[1]),l=null,a++,v()}function x(){a>0&&(a--,l=null,v())}function b(){const t=i.structure>=i.history,e=i.unity>=i.plurality,r=i.rationality>=i.intuition,o=i.past>=i.future,n=`${t?"S":"H"}${e?"T":"D"}${r?"R":"I"}${o?"P":"F"}`;return u.find(s=>s.code===n)||u[0]}function g(){const t=b();p.innerHTML=`
    <div class="result-container">
      <div class="result-header">
        <h1 class="result-title">你的历史意识人格类型</h1>
      </div>
      
      <div class="result-main">
        <div class="type-card">
          <div class="type-badge">${t.code}</div>
          <div class="type-label">${t.typeLabel}</div>
          <h2 class="type-name">${t.name}</h2>
          <div class="type-representative">
            <span class="rep-country">[${t.representative.country}]</span>
            <span class="rep-name">${t.representative.name}</span>
            <span class="rep-english">${t.representative.fullName}</span>
          </div>
        </div>
        
        <div class="dimension-analysis">
          <div class="dimension-item" style="--color: #ff4444">
            <div class="dimension-header">
              <span class="dimension-code">${t.code[0]}</span>
              <span class="dimension-name">${t.code[0]==="S"?"结构":"历史"}倾向</span>
              <span class="dimension-value">${Math.round((t.code[0]==="S"?i.structure:i.history)/24*100)}%</span>
            </div>
            <div class="dimension-bar">
              <div class="dimension-fill" style="width: ${Math.round((t.code[0]==="S"?i.structure:i.history)/24*100)}%"></div>
            </div>
            <div class="dimension-labels">
              <span>结构</span>
              <span>历史</span>
            </div>
          </div>
          
          <div class="dimension-item" style="--color: #4488ff">
            <div class="dimension-header">
              <span class="dimension-code">${t.code[1]}</span>
              <span class="dimension-name">${t.code[1]==="T"?"总体":"多元"}倾向</span>
              <span class="dimension-value">${Math.round((t.code[1]==="T"?i.unity:i.plurality)/24*100)}%</span>
            </div>
            <div class="dimension-bar">
              <div class="dimension-fill" style="width: ${Math.round((t.code[1]==="T"?i.unity:i.plurality)/24*100)}%"></div>
            </div>
            <div class="dimension-labels">
              <span>总体</span>
              <span>多元</span>
            </div>
          </div>
          
          <div class="dimension-item" style="--color: #44ff88">
            <div class="dimension-header">
              <span class="dimension-code">${t.code[2]}</span>
              <span class="dimension-name">${t.code[2]==="R"?"理性":"直觉"}倾向</span>
              <span class="dimension-value">${Math.round((t.code[2]==="R"?i.rationality:i.intuition)/24*100)}%</span>
            </div>
            <div class="dimension-bar">
              <div class="dimension-fill" style="width: ${Math.round((t.code[2]==="R"?i.rationality:i.intuition)/24*100)}%"></div>
            </div>
            <div class="dimension-labels">
              <span>理性</span>
              <span>直觉</span>
            </div>
          </div>
          
          <div class="dimension-item" style="--color: #ffd700">
            <div class="dimension-header">
              <span class="dimension-code">${t.code[3]}</span>
              <span class="dimension-name">${t.code[3]==="P"?"过去":"未来"}倾向</span>
              <span class="dimension-value">${Math.round((t.code[3]==="P"?i.past:i.future)/24*100)}%</span>
            </div>
            <div class="dimension-bar">
              <div class="dimension-fill" style="width: ${Math.round((t.code[3]==="P"?i.past:i.future)/24*100)}%"></div>
            </div>
            <div class="dimension-labels">
              <span>过去</span>
              <span>未来</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="description-section">
        <h3>人格解析</h3>
        <p class="description-text">${t.description}</p>
        
        <div class="characteristics">
          <h4>核心特征</h4>
          <ul class="characteristics-list">
            ${t.characteristics.map(e=>`<li>${e}</li>`).join("")}
          </ul>
        </div>
      </div>
      
      <div class="all-types-section">
        <h3>16种历史意识人格类型</h3>
        <div class="types-grid">
          ${u.map((e,r)=>`
            <div class="type-mini-card ${e.id===t.id?"current":""}">
              <div class="type-mini-badge">${e.code}</div>
              <div class="type-mini-info">
                <h4>${e.typeLabel}</h4>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
      
      <div class="action-section">
        <button class="restart-btn" onclick="restartTest()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 4v6h6M23 20v-6h-6"/>
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
          </svg>
          <span>重新测试</span>
        </button>
      </div>
    </div>
  `}function w(){m()}window.startTest=m;window.selectOption=h;window.nextQuestion=f;window.prevQuestion=x;window.showResult=g;window.restartTest=w;y();
