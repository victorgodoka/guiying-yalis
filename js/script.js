"use strict";
(() => {
  // src/data.ts
  var characterData = {
    name: "Guiying Yalis",
    path: "Nihility",
    element: "Fire",
    stats: {
      HP: 1023,
      ATK: 617,
      DEF: 396,
      SPD: 102
    },
    description: `
      <p>Guiying Yalis is a 5\u2605 character from the Fire element who follows the Path of Nihility. Guiying Yalis, heir to a name lost with a dying world, moves through Xianzhou like a memory wrapped in silk and flame. Composed and distant, she speaks little \u2014 but her eyes hold centuries of sorrow, and her smile never reaches them. The Cloud Knights say she is serenity incarnate, yet those who have seen her fight know better: in battle, she becomes a storm of grace and ruin, a dancer whose steps leave scorched earth in their wake.</p>
      <p></p>
  `,
    lightCones: [
      {
        name: "Dance Beneath Crimson Blossoms",
        image: "images/lc.png",
        tier: "\u2B50\u2B50\u2B50\u2B50\u2B50",
        lore: `
        <div class="space-y-4 text-gray-300 leading-relaxed">
          <p>In the drifting realms of Xianzhou, where cherry blossoms bloom in defiance of time, there danced a woman whose name carried the echoes of a fallen dynasty \u2014 Guiying Yalis.</p>
          
          <p>She did not march into war like a soldier.</p>
          
          <p>She drifted into battle like spring wind through scorched earth \u2014<br>
          elegant, effortless\u2026 inevitable.</p>
          
          <p>Burn and Sunburn.</p>
          
          <p>Two curses masked in beauty.</p>
          
          <p>One seared the flesh. The other scorched the soul.</p>
          
          <p>And both answered her call.</p>
          
          <p>Her enemies never saw her wrath \u2014 only the petals she left behind.</p>
          
          <p>Crimson, gold, ash.</p>
          
          <p>Once, under a moonless sky, shadows clawed at the gates of a distant Xianzhou village. The stars had turned their gaze. The night braced for ruin.</p>
          
          <p>Then came the fan.</p>
          
          <p>Unfurled in silence, it shimmered with embers and memory. With a single step, she set the wind ablaze. Flames curled like dancers around her \u2014 patient, merciless. The cursed fire she summoned did not roar. It whispered.</p>
          
          <p>Those touched by her art did not burn.</p>
          
          <p>They withered.</p>
          
          <p>One breath at a time.</p>
          
          <p>When the ashes settled and the petals floated softly down, she was already gone \u2014<br>
          like spring, fleeting yet eternal.</p>
          
          <p>They called her many things: Flame Dancer. Crimson Petal. Cursebearer.</p>
          
          <p>But to those who survived\u2026</p>
          
          <p>She was a season.</p>
          
          <p>And in her presence, spring never ended.</p>
        </div>
      `,
        effect: `Increases the wearer's Effect Hit Rate by 36/48/60/72/84%. When the wearer inflicts DoT, gain 1 stack of Solar Bloom (max 3 stacks). Each stack increases DoT dealt by 10/15/20/25/25%. At 3 stacks, the wearer's SPD increases by 10/12.5/15/17.5/20%. Additionally, when the wearer deals Fire DMG to enemies, there is a 75% base chance to extend all DoT and debuffs effects currently on the field by 1 turn.`,
        stats: {
          HP: 1058,
          ATK: 635,
          DEF: 396
        }
      },
      {
        name: "Embers of Spring, Cradled in Song",
        image: "images/lc2.png",
        tier: "\u2B50\u2B50\u2B50\u2B50",
        lore: `
        <div class="space-y-4 text-gray-300 leading-relaxed">
          <p>In the quiet hours between dusk and dream, the grand hall of the Palace of Astrum fell into a hush. Light streamed through carved wooden screens, painting golden blossoms across the floor \u2014 shadows of sakura that bloomed only in the spring of memory.</p>
          
          <p>There, beneath the crimson pillars etched with tales of centuries, Guiying Yalis sat cross-legged, her robes cascading like flowing petals, red and lavender swirled in elegant harmony.</p>
          
          <p>Nestled in her arms was a girl no older than four, fast asleep \u2014 her silver hair tied with a ribbon, her tiny form wrapped in warmth and trust.</p>
          
          <p>She was no child of hers by blood.</p>
          
          <p>But war had a way of making orphans.</p>
          
          <p>And Guiying, the Crimson Petal, had a heart that burned not only with flame\u2026 but with compassion.</p>
          
          <p>"You are the first light," she whispered, stroking the child's hair,<br>
          "A bud before the bloom. Rest now. The world can wait."</p>
          
          <p>As the breeze outside carried a few wayward blossoms past the open window, Guiying began to hum \u2014 soft at first, then laced with ancient melody. A lullaby her mother once sang beneath the same cherry trees\u2026 before fate set her on the path of fire.</p>
          
          <p>Her voice, low and warm, danced like incense through the air:</p>
          
          <div class="pl-4 border-l-2 custom-border-color my-4">
            <p>"Close your eyes, my springtime star,<br>
            The moon will guard you from afar.<br>
            Drift like petals, float like flame,<br>
            Tomorrow's wind will know your name\u2026"</p>
          </div>
          
          <p>The child stirred, pressing closer.</p>
          
          <p>Guiying smiled.</p>
          
          <p>In that moment, she was not the feared flame that scorched the battlefield.</p>
          
          <p>Not the student of Jing Yuan, nor the wielder of the Sunburning Fan.</p>
          
          <p>She was simply Guiying \u2014</p>
          
          <p>A woman who bore the weight of countless battles\u2026</p>
          
          <p>And still found time to sing to a sleeping soul.</p>
          
          <p>Because even in Xianzhou, where stars drift and wars rage\u2026</p>
          
          <p>The truest strength is found not in fire or fury \u2014</p>
          
          <p>But in the quiet rhythm of a lullaby.</p>
        </div>
      `,
        effect: `Increases the wearer's Break Effect by 16/20/24/28/32% and DoT dealt by 24/30/36/42/48%. After inflicting damage with the wearer's Ultimate or Follow-Up ATK, restores 4/8/12/16/20 Energy and increases ATK by 12/18/24/30/36% for 2 turns.`,
        stats: {
          HP: 948,
          ATK: 579,
          DEF: 348
        }
      }
    ],
    skills: [
      {
        type: "Basic ATK",
        name: "Solar Bloom",
        description: "Deals Fire DMG equal to 100% of Guiying's ATK to a single enemy.",
        tg: "Single Target",
        energyBreak: [20, 10],
        enhanced: {
          type: "<p style='line-height: 1'>Basic ATK<br /><span class='text-xs'>Enhanced</span></p>",
          name: "Solar Flare",
          description: "Deals Fire DMG equal to 150% of Guiying's ATK to one designated enemy. Deals Fire DMG equal to 75% of Guiying's ATK to adjacent enemies. Any Burned enemies will take 100% more DMG during their next turn.",
          tg: "Blast",
          energyBreak: [30, "10 + 5 adjacent"]
        }
      },
      {
        type: "Skill",
        name: "Cherry Blossom Burst",
        description: "Deals Fire DMG equal to 210% of Guiying's ATK to a single enemy and deals Fire DMG equal to 85% of Guiying's ATK to any adjacent enemies with a 100% base chance to Burn the target and adjacent targets. When Burned, enemies will take a Fire DoT equal to 325% of Guiying's ATK at the beginning of each turn, lasting for 2 turn(s).",
        tg: "Blast",
        energyBreak: [30, "20 + 10 adjacent"]
      },
      {
        type: "Ultimate",
        name: "Spring Sun Radiance",
        description: "Deals Fire DMG equal to 180% of Guiying's ATK to all enemies. Deals 50% increased Fire DMG to any enemies that are currently Burned. Has a 90% base chance to inflict Burned enemies with Sunburn for 2 turn(s). Enemies inflicted with Sunburn will take 33% more DMG in their turn.",
        tg: "AoE | <span class='text-[#eec554]'>120 energy cost</span>",
        energyBreak: [5, 20]
      },
      {
        type: "Talent",
        name: "Sakura Wind Dance",
        description: `After Guiying uses her Ultimate, her Basic ATK "Solar Bloom" is enhanced to "Solar Flare". After her Enhanced Basic ATK's "Solar Flare" hits a Burning enemy target, the Burn status will immediately deal DMG for 1 time equal to 125% of the original DMG to the target. If the target has Sunburn, this effect is doubled.`,
        tg: "Enchance",
        energyBreak: [0, "-"]
      },
      {
        type: "Technique",
        name: "Spring Awakening",
        description: "Immediately attacks all enemies within a set range. After entering battle, deals Fire DMG equal to 60% of Guiying's ATK to all enemies, with a 100% base chance to inflict Burn on every enemy target for 2 turn(s). Enemies with Fire weakness also are inflicted with Sunburn for 1 turn.",
        tg: "",
        energyBreak: [0, "-"]
      }
    ],
    traces: [
      {
        type: "<p style='line-height: 1'>A2<br /><span class='text-xs'>Major Trace</span></p>",
        name: "Spring Dawn Rush",
        description: "When the battle begins, Guiying's action is advanced forward by 40% of her Effect Hit Rate.",
        tg: "",
        energyBreak: null
      },
      {
        type: "<p style='line-height: 1'>A4<br /><span class='text-xs'>Major Trace</span></p>",
        name: "Cherry Blossom Bloom",
        description: "Increases this unit's DMG by an amount equal to 30% of Effect Hit Rate, up to a maximum DMG increase of 40%. At 5 stacks of Petal Dance, this effect is doubled, and Burn damage is increased by 100%.",
        tg: "",
        energyBreak: null
      },
      {
        type: "<p style='line-height: 1'>A6<br /><span class='text-xs'>Major Trace</span></p>",
        name: "Sakura Wind Dance",
        description: `Whenever Guiying deals damage to an enemy, she gains 1 stack of Petal Dance up to 5 stacks. For each stack, she gains 12% SPD. At 5 stacks, she enters the "Sakura Wind Dance" state until she loses 1 or more stacks. While in the "Sakura Wind Dance" state, she gains an additional 40% SPD, then for every 1 SPD above 125, increases Guiying's DoT DMG by 8%.`,
        tg: "",
        energyBreak: null
      }
    ],
    minorTraces: [
      {
        type: "ATK",
        icon: "images/atk.webp",
        value: "+28%"
      },
      {
        type: "Effect Hit Rate",
        isEidolon: true,
        icon: "images/ehr.webp",
        value: "+16.4%"
      },
      {
        type: "Fire DMG",
        icon: "images/fire.webp",
        value: "+14.4%"
      }
    ],
    eidolons: [
      {
        type: "E1",
        isEidolon: true,
        name: "Spring Breeze",
        description: "When Guiying gains Petal Dance stacks, she also gains 1 stack of Spring Breeze. Each stack of Spring Breeze increases her Effect Hit Rate by 8%, up to 3 stacks. Spring Breeze stacks are consumed when using her Ultimate.",
        tg: "Eidolon 1",
        energyBreak: null
      },
      {
        type: "E2",
        isEidolon: true,
        name: "Solar Flare Resonance",
        description: `Guiying's Ultimate now deals 200% increased DMG to Burned enemies and extends the duration of all Burn effects on the field by 1 turn. Additionally, after her Enhanced Basic ATK's "Solar Flare" hits a Burning enemy target, the Burn status will immediately deal DMG for 1 time equal to 125% of the original DMG to the target. If the target has Sunburn, this effect is doubled.`,
        tg: "Eidolon 2",
        energyBreak: null
      },
      {
        type: "E3",
        isEidolon: true,
        name: "Solar Flare Mastery",
        description: "Skill Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10.",
        tg: "Eidolon 3",
        energyBreak: null
      },
      {
        type: "E4",
        isEidolon: true,
        name: "Dawn Blossom Awakening",
        description: "When Guiying's HP drops below 50%, she immediately gains 5 stacks of Petal Dance and her next enhanced attack will consume all stacks of Petal Dance to deal an additional 200% of Guiying's ATK per stack consumed. This effect can only trigger once per battle.",
        tg: "Eidolon 4",
        energyBreak: null
      },
      {
        type: "E5",
        isEidolon: true,
        name: "Phoenix Rebirth Dance",
        description: "Ultimate Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15.",
        tg: "Eidolon 5",
        energyBreak: null
      },
      {
        type: "E6",
        isEidolon: true,
        name: "Eternal Spring Mastery",
        description: `When Guiying reaches 5 stacks of Petal Dance, her "Sakura Wind Dance" state is enhanced to "Eternal Sakura Dance" state. During "Eternal Sakura Dance", Guiying's and allies' attacks have a 100% base chance to inflict Burn on enemies, and any existing Burn effects on enemies will also have a 100% base chance to inflict Sunburn. Additionally, when Guiying or allies deal Fire DMG to enemies with Sunburn, there is a 75% base chance to spread the Sunburn effect to adjacent enemies for 1 turn. Petal Dance stacks now don't have a limit.`,
        tg: "Eidolon 6",
        energyBreak: null
      }
    ],
    lore: `
    <div class="space-y-4 text-gray-300 leading-relaxed">
      <p>In the age before ruin, Guiying Yalis lived beneath gardens of endless spring. Her world bloomed in peace \u2014 a distant star ruled by a dynasty now lost to time. When the Denizens of Abundance arrived, they promised miracles: illness cured overnight, crops that never withered, and life that endured beyond natural death.</p>
      <p>But what began as salvation soon revealed itself as rot. Life unending became a curse. Minds twisted. Bodies refused to die. The planet fell, not with flame or war, but with decay, madness, and torment without end.</p>
      <p>Guiying remembers all of it.</p>
      <p>She remembers the smiles that became screams. The warmth that turned cold. The moment she ran with her family through streets collapsing under the weight of false immortality. And the moment she lost them \u2014 separated by a sudden Mara-born incursion, their fates left unknown.</p>
      <p>Alone, she drifted through the stars until the Cloud Knights of Xianzhou found her \u2014 a lone girl cradling the last fan of her fallen house. They took her to the Xianzhou Luofu, not as a prisoner, but as a refugee of something far worse: a survivor of the Abundance\u2019s unchecked mercy.</p>
      <p>There, Guiying found a new life among orphans of war and children scarred like her. She saw herself in their silence, their anger, their loneliness. And in that reflection, she found resolve.</p>
      <p>Under the tutelage of General Jing Yuan, she trained not with brute force, but with grace and control. He taught her that flame, like memory, must be tempered. That fire could destroy \u2014 but also protect.</p>
      <p>Today, Guiying fights for Xianzhou, not as a refugee, but as its guardian\u2014one who remembers the cost of failure far too clearly. Beneath drifting petals, she dances on battlefields, determined to shield her new home from the horrors she knows intimately. And perhaps, one day, among the countless stars, she will find a trace of those she lost.</p>
      <p>For Guiying Yalis remembers. And she carries that memory as both burden and strength, forever.</p>
    </div>
  `
  };

  // src/utils.ts
  var formatDescription = (text) => {
    if (!text) return "";
    return text.replace(/\+?\d+(\.\d+)?%?★?\/?/g, (match) => {
      return `<span style='color: #eec554; font-weight: 800;'>${match}</span>`;
    }).replace(/Fire DMG/g, `<span style='color: #ee473d'>Fire DMG</span>`).replace(/Guiying/g, `<span style='color: #ee473d'>Guiying</span>`).replace(/Yalis/g, `<span style='color: #ee473d'>Yalis</span>`).replace(/Path of Nihility/g, `<span style='color: #7e74eb'>Yalis</span>`);
  };

  // src/templates.ts
  var cardTemplate = (data) => `
  <article class="bg-[#2c2d33] border-[#33343a] border-2" ${"isEidolon" in data && data.isEidolon ? `data-eidolon="${data.type.toLowerCase()}"` : ""}>
    <div class="border-[#33343a] border-b flex items-center">
      <div class="font-semibold text-[#353535] flex items-center justify-center custom-bg w-[100px] h-[60px] text-center py-2 px-2" style="font-weight: 800;">${data.type}</div>
      <div class="bg-zinc-750 px-4 flex flex-col justify-center gap-1">
        <h3 class="text-xl opacity-90" style="font-weight: 800;">${data.name}</h3>
        ${data.tg ? `<p class="text-sm opacity-75" style="font-weight: 400;">${data.tg}</p>` : ""}
      </div>
    </div>
    ${data.energyBreak ? `<div class="grid grid-cols-2 py-2 px-2 bg-[#33343a]">
      <p class="text-sm text-zinc-300">Energy Gain: <span style="font-weight: 800;">${data.energyBreak[0]}</span></p>
      <p class="text-sm text-zinc-300">Break: <span style="font-weight: 800;">${data.energyBreak[1]}</span></p>
    </div>` : ""}
    <div class="p-4">
      ${formatDescription(data.description)}
    </div>
    ${"enhanced" in data && data.enhanced ? `
      <div class="border-[#33343a] border-t-2 flex items-center">
        <div class="font-semibold text-[#353535] flex items-center justify-center custom-bg w-[100px] h-[60px] text-center py-2 px-2" style="font-weight: 800;">${data.enhanced.type}</div>
        <div class="bg-zinc-750 px-4 flex flex-col justify-center gap-1">
          <h4 class="text-xl opacity-90" style="font-weight: 800;">${data.enhanced.name}</h4>
          ${data.enhanced.tg ? `<p class="text-sm opacity-75" style="font-weight: 400;">${data.enhanced.tg}</p>` : ""}
        </div>
      </div>
      ${data.enhanced.energyBreak ? `<div class="grid grid-cols-2 py-2 px-2 bg-[#33343a]">
        <p class="text-sm text-zinc-300">Energy Gain: <span style="font-weight: 800;">${data.enhanced.energyBreak[0]}</span></p>
        <p class="text-sm text-zinc-300">Break: <span style="font-weight: 800;">${data.enhanced.energyBreak[1]}</span></p>
      </div>` : ""}
      <div class="p-4">
        ${formatDescription(data.enhanced.description)}
      </div>
    ` : ""}
  </article>
`;
  var minorTraceTemplate = (trace) => `
  <div class="flex items-center justify-center gap-2 border-[#33343a] border bg-[#2c2d33] w-full p-2 text-lg">
    <img src="${trace.icon}" alt="${trace.type}" class="w-8 h-8">
    <p>${`${trace.type} ${trace.value}`}</p>
  </div>
`;
  var statsTemplate = (stats, isLightCone = false) => `
  <ul class="${isLightCone ? "grid grid-cols-3" : ""}">
    <li class="border-[#33343a] border-2 bg-[#36373d] flex items-center justify-between pl-1 pr-4">
      <div class="flex items-center p-1">
        <img src="images/hp.webp" alt="HP" class="w-8 h-8" />
        <span>HP</span>
      </div>
      <p>${stats.HP}</p>
    </li>
    <li class="border-[#33343a] border-2 flex items-center justify-between pl-1 pr-4">
      <div class="flex items-center p-1">
        <img src="images/atk.webp" alt="ATK" class="w-8 h-8" />
        <span>ATK</span>
      </div>
      <p>${stats.ATK}</p>
    </li>
    <li class="border-[#33343a] border-2 bg-[#36373d] flex items-center justify-between pl-1 pr-4">
      <div class="flex items-center p-1">
        <img src="images/def.webp" alt="DEF" class="w-8 h-8" />
        <span>DEF</span>
      </div>
      <p>${stats.DEF}</p>
    </li>
    ${stats.SPD ? `<li class="border-[#33343a] border-2 flex items-center justify-between pl-1 pr-4">
      <div class="flex items-center p-1">
        <img src="images/spd.webp" alt="Speed" class="w-8 h-8" />
        <span>Speed</span>
      </div>
      <p>${stats.SPD}</p>
    </li>` : ""}
  </ul>
`;
  var lightConeTemplate = (lightCone) => `
  <article class="bg-[#2c2d33] border-[#33343a] border-2 relative">
    <img src="images/nihility.webp" alt="Light cone path" class="w-8 absolute z-50 right-8 top-2 opacity-40">
    <div class="border-[#33343a] border-b flex items-center">
      <div class="font-semibold text-[#353535] flex items-center justify-center custom-bg w-[100px] h-[60px] text-center py-2 px-2" style="font-weight: 800;">Light Cone</div>
      <div class="bg-zinc-750 px-4 flex flex-col justify-center gap-1">
        <h3 class="text-xl opacity-90" style="font-weight: 800;">${lightCone.name}</h3>
        <p class="text-sm" style="font-weight: 400;">${lightCone.tier}</p>
      </div>
    </div>
    <div class="p-4">
      <div class="mb-4">
        ${formatDescription(lightCone.effect)}
      </div>
      <div class="mb-4">
        ${statsTemplate(lightCone.stats, true)}
      </div>
      <div class="grid grid-cols-2 gap-2">
        <img src="${lightCone.image}" alt="${lightCone.name}" class="w-full h-auto object-cover">
        <div class="text-sm space-y-2">
          ${lightCone.lore}
        </div>
      </div>
    </div>
  </article>
`;

  // src/script.ts
  var createRenderMap = () => ({
    description: () => formatDescription(characterData.description) || "",
    skills: () => characterData.skills.map(cardTemplate).join(""),
    traces: () => characterData.traces.map(cardTemplate).join(""),
    minorTraces: () => characterData.minorTraces.map(minorTraceTemplate).join(""),
    eidolons: () => characterData.eidolons.map(cardTemplate).join(""),
    stats: () => statsTemplate(characterData.stats),
    lightCones: () => characterData.lightCones.map(lightConeTemplate).join("")
  });
  var initializePage = () => {
    const charNameElement = document.getElementById("charName");
    if (charNameElement) {
      charNameElement.textContent = characterData.name;
    }
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = (/* @__PURE__ */ new Date()).getFullYear().toString();
    }
    const containers = {
      description: document.getElementById("description"),
      skills: document.getElementById("skills"),
      traces: document.getElementById("traces"),
      minorTraces: document.getElementById("minortraces"),
      eidolons: document.getElementById("eidolons"),
      stats: document.getElementById("stats"),
      lightCones: document.getElementById("lcs")
    };
    const renderMap = createRenderMap();
    Object.entries(containers).forEach(([key, element]) => {
      if (element && renderMap[key]) {
        const renderFunction = renderMap[key];
        element.innerHTML = renderFunction();
      }
    });
  };
  var initializeNavigation = () => {
    const navigation = document.getElementById("navigation");
    const banner = document.getElementById("banner");
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    if (!navigation || !banner) return;
    const scrollValues = {
      mobile: 130,
      desktop: 300
    };
    const isDesktop = window.innerWidth > 768;
    const offsetValue = scrollValues[isDesktop ? "desktop" : "mobile"];
    const toggleMobileMenu = () => {
      if (!mobileMenu || !mobileMenuButton) return;
      const isExpanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        mobileMenu.style.transform = "translateY(-100%)";
        mobileMenu.style.opacity = "0";
        mobileMenu.style.zIndex = "-100";
        mobileMenuButton.setAttribute("aria-expanded", "false");
        mobileMenuButton.innerHTML = `
        <svg style="width: 24px; height: 24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      `;
      } else {
        mobileMenu.style.transform = "translateY(0)";
        mobileMenuButton.setAttribute("aria-expanded", "true");
        mobileMenu.style.opacity = "100";
        mobileMenu.style.zIndex = "100";
        mobileMenuButton.innerHTML = `
        <svg style="width: 24px; height: 24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      `;
      }
    };
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener("click", toggleMobileMenu);
    }
    const mobileCloseButton = document.getElementById("mobile-close-button");
    if (mobileCloseButton) {
      mobileCloseButton.addEventListener("click", toggleMobileMenu);
    }
    const handleNavClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId || "");
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - offsetValue;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
        if (mobileMenu && mobileMenuButton) {
          const isExpanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
          if (isExpanded) {
            toggleMobileMenu();
          }
        }
      }
    };
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });
  };
  var initializeEidolons = () => {
    document.querySelectorAll("[data-eidolon]").forEach((eidolonCard) => {
      const eidolonType = eidolonCard.getAttribute("data-eidolon");
      const imagePath = `images/${eidolonType}.png`;
      const accordionContainer = document.createElement("div");
      accordionContainer.className = "overflow-hidden transition-all duration-300 ease-in-out";
      accordionContainer.style.maxHeight = "0px";
      const image = document.createElement("img");
      image.src = imagePath;
      image.alt = `${eidolonType} image`;
      image.className = "w-full h-auto object-cover";
      image.loading = "lazy";
      accordionContainer.appendChild(image);
      eidolonCard.appendChild(accordionContainer);
      eidolonCard.addEventListener("click", () => {
        const isExpanded = accordionContainer.style.maxHeight !== "0px";
        if (isExpanded) {
          accordionContainer.style.maxHeight = "0px";
        } else {
          accordionContainer.style.maxHeight = accordionContainer.scrollHeight + "px";
        }
      });
      eidolonCard.style.cursor = "pointer";
    });
  };
  document.addEventListener("DOMContentLoaded", () => {
    document.body.dataset.path = characterData.path.toLowerCase();
    document.body.dataset.element = characterData.element.toLowerCase();
    initializePage();
    initializeNavigation();
    initializeEidolons();
  });
})();
