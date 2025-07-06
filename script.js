
const characterData = {
  name: 'Guiying Yalis',
  stats: {
    HP: 1023,
    ATK: 617,
    DEF: 396,
    SPD: 102
  },
  description: `
      <span class="font-bold text-red-400">Guiying Yalis</span> is a 5★ character from the <span
            class="font-bold text-red-400">Fire</span> element who follows the <span
            class="font-bold text-[#7e74eb]">Path
            of Nihility</span>. Bearing the name of a forgotten dynasty, <span class="font-bold text-red-400">Guiying</span> dances through battlefields like a flame-kissed petal caught in the wind. Her elegance hides a dangerous mastery over Burn and Sunburn — curses that blossom into agony. To fight her is to be trapped in a season of fire and fleeting beauty, where spring never truly ends.
      `,
  lightCones: [
    {
      name: 'Dance Beneath Crimson Blossoms',
      image: 'lc.png',
      tier: '⭐⭐⭐⭐⭐',
      lore: [
        'In the floating gardens of Xianzhou, where sakura trees bloom not once a year, but with every breath of wind, there lived a girl whose fan bore both fire and fragrance.',
        'They called her Guiying Yalis, the Crimson Petal. Her steps were too soft for war, her gaze too serene for vengeance — and yet, the world would soon know her fury.',
        'Long ago, she danced beneath the tutelage of the Arbiter-General himself, Jing Yuan, who taught her not the weight of swords, but the art of timing.',
        'A blade is swift, he once told her,',
        'But a flame is patient — and far more enduring.',
        'She listened. She learned.',
        'And now, she fought.',
        'On a night where no stars shone above Xianzhou, shadows fell upon a distant border village. Mara-stricken beasts crawled from fractured dreams, gnawing at the roots of ancient plum trees. Screams rose like incense.',
        'Then — silence.',
        'A single gust stirred the sakura trees. A fan unfolded.',
        'From the darkness, she stepped. Her crimson ribbons flowed like brushstrokes in the air, her platinum hair catching the moonlight. The moment her feet touched the earth, flames followed like obedient disciples.',
        'She spun.',
        'And the petals obeyed.',
        "Fire licked at the enemies' limbs — not with rage, but with ritual. Each Burn a calligraphy mark, each Sunburn a final signature.",
        'They writhed. She danced.',
        'Let spring bloom in ash, she whispered,',
        'And may all things cruel learn to fear beauty.',
        'When the final ember died, and the sakura once again kissed the soil in silence, she sheathed her fan with the grace of an empress.',
        'She did not stay for praise. She never did.',
        'For Guiying Yalis was no hero.',
        'She was a season — brief, radiant, and unforgettable.',
        'And like spring in Xianzhou…',
        'She always returned when the world grew cold.'
      ],
      effect: `Increases the wearer's Effect Hit Rate by 36/48/60/72/84%. When the wearer inflicts DoT, gain 1 stack of Solar Bloom (max 3 stacks). Each stack increases DoT dealt by 10/15/20/25/25%. At 3 stacks, the wearer's SPD increases by 10/12.5/15/17.5/20%. Additionally, when the wearer deals Fire DMG to enemies, there is a 75% base chance to extend all DoT and debuffs effects currently on the field by 1 turn.`,
      stats: {
        HP: 1058,
        ATK: 635,
        DEF: 396
      }
    },
    {
      name: 'Embers of Spring, Cradled in Song',
      image: 'lc2.png',
      tier: '⭐⭐⭐⭐',
      lore: [
        'In the quiet hours between dusk and dream, the grand hall of the Palace of Astrum fell into a hush. Light streamed through carved wooden screens, painting golden blossoms across the floor — shadows of sakura that bloomed only in the spring of memory.',
        'There, beneath the crimson pillars etched with tales of centuries, Guiying Yalis sat cross-legged, her robes cascading like flowing petals, red and lavender swirled in elegant harmony.',
        'Nestled in her arms was a girl no older than four, fast asleep — her silver hair tied with a ribbon, her tiny form wrapped in warmth and trust.',
        'She was no child of hers by blood.',
        'But war had a way of making orphans.',
        'And Guiying, the Crimson Petal, had a heart that burned not only with flame… but with compassion.',
        '"You are the first light," she whispered, stroking the child\'s hair,',
        '"A bud before the bloom. Rest now. The world can wait."',
        'As the breeze outside carried a few wayward blossoms past the open window, Guiying began to hum — soft at first, then laced with ancient melody. A lullaby her mother once sang beneath the same cherry trees… before fate set her on the path of fire.',
        'Her voice, low and warm, danced like incense through the air:',
        '"Close your eyes, my springtime star,',
        'The moon will guard you from afar.',
        'Drift like petals, float like flame,',
        'Tomorrow\'s wind will know your name…"',
        'The child stirred, pressing closer.',
        'Guiying smiled.',
        'In that moment, she was not the feared flame that scorched the battlefield.',
        'Not the student of Jing Yuan, nor the wielder of the Sunburning Fan.',
        'She was simply Guiying —',
        'A woman who bore the weight of countless battles…',
        'And still found time to sing to a sleeping soul.',
        'Because even in Xianzhou, where stars drift and wars rage…',
        'The truest strength is found not in fire or fury —',
        'But in the quiet rhythm of a lullaby.'
      ],
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
      type: 'Basic ATK',
      name: 'Solar Bloom',
      description:
        "Deals Fire DMG equal to 100% of Guiying's ATK to a single enemy.",
      tg: 'Single Target',
      energyBreak: [20, 10],
      enhanced: {
        type: "<p style='line-height: 1'>Basic ATK<br /><span class='text-xs'>Enhanced</span></p>",
        name: 'Solar Flare',
        description:
          "Deals Fire DMG equal to 150% of Guiying's ATK to one designated enemy. Deals Fire DMG equal to 75% of Guiying's ATK to adjacent enemies. Any Burned enemies will take 100% more DMG during their next turn.",
        tg: 'Blast',
        energyBreak: [30, '10 + 5 adjacent']
      }
    },
    {
      type: 'Skill',
      name: 'Cherry Blossom Burst',
      description:
        "Deals Fire DMG equal to 210% of Guiying's ATK to a single enemy and deals Fire DMG equal to 85% of Guiying's ATK to any adjacent enemies with a 100% base chance to Burn the target and adjacent targets. When Burned, enemies will take a Fire DoT equal to 325% of Guiying's ATK at the beginning of each turn, lasting for 2 turn(s).",
      tg: 'Blast',
      energyBreak: [30, '20 + 10 adjacent']
    },
    {
      type: 'Ultimate',
      name: 'Spring Sun Radiance',
      description:
        "Deals Fire DMG equal to 180% of Guiying's ATK to all enemies. Deals 50% increased Fire DMG to any enemies that are currently Burned. Has a 90% base chance to inflict Burned enemies with Sunburn for 2 turn(s). Enemies inflicted with Sunburn will take 33% more DMG in their turn.",
      tg: "AoE | <span class='text-[#eec554]'>120 energy cost</span>",
      energyBreak: [5, 20]
    },
    {
      type: 'Talent',
      name: 'Sakura Wind Dance',
      description:
        'After Guiying uses her Ultimate, her Basic ATK "Solar Bloom" is enhanced to "Solar Flare". After her Enhanced Basic ATK\'s "Solar Flare" hits a Burning enemy target, the Burn status will immediately deal DMG for 1 time equal to 125% of the original DMG to the target. If the target has Sunburn, this effect is doubled.',
      tg: 'Enchance',
      energyBreak: [0, '-']
    },
    {
      type: 'Technique',
      name: 'Spring Awakening',
      description:
        "Immediately attacks all enemies within a set range. After entering battle, deals Fire DMG equal to 60% of Guiying's ATK to all enemies, with a 100% base chance to inflict Burn on every enemy target for 2 turn(s). Enemies with Fire weakness also are inflicted with Sunburn for 1 turn.",
      tg: '',
      energyBreak: [0, '-']
    }
  ],
  traces: [
    {
      type: "<p style='line-height: 1'>A2<br /><span class='text-xs'>Major Trace</span></p>",
      name: 'Spring Dawn Rush',
      description:
        "When the battle begins, Guiying's action is advanced forward by 40% of her Effect Hit Rate.",
      tg: '',
      energyBreak: null
    },
    {
      type: "<p style='line-height: 1'>A4<br /><span class='text-xs'>Major Trace</span></p>",
      name: 'Cherry Blossom Bloom',
      description:
        "Increases this unit's DMG by an amount equal to 30% of Effect Hit Rate, up to a maximum DMG increase of 40%. At 5 stacks of Petal Dance, this effect is doubled, and Burn damage is increased by 100%.",
      tg: '',
      energyBreak: null
    },
    {
      type: "<p style='line-height: 1'>A6<br /><span class='text-xs'>Major Trace</span></p>",
      name: 'Sakura Wind Dance',
      description:
        'Whenever Guiying deals damage to an enemy, she gains 1 stack of Petal Dance up to 5 stacks. For each stack, she gains 12% SPD. At 5 stacks, she enters the "Sakura Wind Dance" state until she loses 1 or more stacks. While in the "Sakura Wind Dance" state, she gains an additional 40% SPD, then for every 1 SPD above 125, increases Guiying\'s DoT DMG by 8%.',
      tg: '',
      energyBreak: null
    }
  ],
  minorTraces: [
    {
      type: 'ATK',
      icon: 'atk.webp',
      value: '+28%'
    },
    {
      type: 'Effect Hit Rate',
      isEidolon: true,
      icon: 'ehr.webp',
      value: '+16.4%'
    },
    {
      type: 'Fire DMG',
      icon: 'fire.webp',
      value: '+14.4%'
    }
  ],
  eidolons: [
    {
      type: 'E1',
      isEidolon: true,
      name: 'Spring Breeze Enhancement',
      description:
        'When Guiying gains Petal Dance stacks, she also gains 1 stack of Spring Breeze. Each stack of Spring Breeze increases her Effect Hit Rate by 8%, up to 3 stacks. Spring Breeze stacks are consumed when using her Ultimate.',
      tg: 'Eidolon 1',
      energyBreak: null
    },
    {
      type: 'E2',
      isEidolon: true,
      name: 'Solar Flare Resonance',
      description:
        'Guiying\'s Ultimate now deals 200% increased DMG to Burned enemies and extends the duration of all Burn effects on the field by 1 turn. Additionally, after her Enhanced Basic ATK\'s "Solar Flare" hits a Burning enemy target, the Burn status will immediately deal DMG for 1 time equal to 125% of the original DMG to the target. If the target has Sunburn, this effect is doubled.',
      tg: 'Eidolon 2',
      energyBreak: null
    },
    {
      type: 'E3',
      isEidolon: true,
      name: 'Solar Flare Mastery',
      description:
        'Skill Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10.',
      tg: 'Eidolon 3',
      energyBreak: null
    },
    {
      type: 'E4',
      isEidolon: true,
      name: 'Dawn Blossom Awakening',
      description:
        "When Guiying's HP drops below 50%, she immediately gains 5 stacks of Petal Dance and her next enhanced attack will consume all stacks of Petal Dance to deal an additional 200% of Guiying's ATK per stack consumed. This effect can only trigger once per battle.",
      tg: 'Eidolon 4',
      energyBreak: null
    },
    {
      type: 'E5',
      isEidolon: true,
      name: 'Phoenix Rebirth Dance',
      description:
        'Ultimate Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15.',
      tg: 'Eidolon 5',
      energyBreak: null
    },
    {
      type: 'E6',
      isEidolon: true,
      name: 'Eternal Spring Mastery',
      description:
        'When Guiying reaches 5 stacks of Petal Dance, her "Sakura Wind Dance" state is enhanced to "Eternal Sakura Dance" state. During "Eternal Sakura Dance", Guiying\'s and allies\' attacks have a 100% base chance to inflict Burn on enemies, and any existing Burn effects on enemies will also have a 100% base chance to inflict Sunburn. Additionally, when Guiying or allies deal Fire DMG to enemies with Sunburn, there is a 75% base chance to spread the Sunburn effect to adjacent enemies for 1 turn. Petal Dance stacks now don\'t have a limit.',
      tg: 'Eidolon 6',
      energyBreak: null
    }
  ]
}

const formatDescription = text => {
  if (!text) return ''
  return text
    .replace(/\+?\d+(\.\d+)?%?/g, match => {
      return `<span class='text-[#eec554]' style='font-weight: 800;'>${match}</span>`
    })
    .replace(/Fire DMG/g, `<span class='text-red-400'>Fire DMG</span>`)
}

const cardTemplate = skill => `
      <article class="bg-[#2c2d33] border-[#33343a] border-2" ${skill.isEidolon ? `data-eidolon="${skill.type.toLowerCase()}"` : ''
  }>
        <div class="border-[#33343a] border-b flex items-center">
          <div class="font-semibold text-[#353535] flex items-center justify-center bg-red-400 w-[100px] h-[60px] text-center py-2 px-2" style="font-weight: 800;">${skill.type
  }</div>
          <div class="bg-zinc-750 px-4 flex flex-col justify-center gap-1">
            <h3 class="text-xl opacity-90" style="font-weight: 800;">${skill.name
  }</h3>
            ${skill.tg
    ? `<p class="text-sm opacity-75" style="font-weight: 400;">${skill.tg}</p>`
    : ''
  }
          </div>
        </div>
        ${skill.energyBreak
    ? `<div class="grid grid-cols-2 py-2 px-2 bg-[#33343a]">
          <p class="text-sm text-zinc-300">Energy Gain: <span style="font-weight: 800;">${skill.energyBreak[0]}</span></p>
          <p class="text-sm text-zinc-300">Break: <span style="font-weight: 800;">${skill.energyBreak[1]}</span></p>
        </div>`
    : ''
  }
        <div class="p-4">
          ${formatDescription(skill.description)}
        </div>
        ${skill.enhanced
    ? `
          <div class="border-[#33343a] border-t-2 flex items-center">
            <div class="font-semibold text-[#353535] flex items-center justify-center bg-red-400 w-[100px] h-[60px] text-center py-2 px-2" style="font-weight: 800;">${skill.enhanced.type
    }</div>
            <div class="bg-zinc-750 px-4 flex flex-col justify-center gap-1">
              <h4 class="text-xl opacity-90" style="font-weight: 800;">${skill.enhanced.name
    }</h4>
              ${skill.enhanced.tg
      ? `<p class="text-sm opacity-75" style="font-weight: 400;">${skill.enhanced.tg}</p>`
      : ''
    }
            </div>
          </div>
          ${skill.enhanced.energyBreak
      ? `<div class="grid grid-cols-2 py-2 px-2 bg-[#33343a]">
            <p class="text-sm text-zinc-300">Energy Gain: <span style="font-weight: 800;">${skill.enhanced.energyBreak[0]}</span></p>
            <p class="text-sm text-zinc-300">Break: <span style="font-weight: 800;">${skill.enhanced.energyBreak[1]}</span></p>
          </div>`
      : ''
    }
          <div class="p-4">
            ${formatDescription(skill.enhanced.description)}
          </div>
        `
    : ''
  }
      </article>
    `

const minorTraceTemplate = trace => `
      <div class="flex items-center justify-center gap-2 border-[#33343a] border bg-[#2c2d33] w-full p-2 text-lg">
        <img src="${trace.icon}" alt="${trace.type}" class="w-8 h-8">
        <p>${formatDescription(`${trace.type} ${trace.value}`)}</p>
      </div>
    `

const statsTemplate = (stats, isLightCone = false) => `
      <ul class="${isLightCone ? 'grid grid-cols-3' : ''}">
        <li class="border-[#33343a] border-2 bg-[#36373d] flex items-center justify-between pl-1 pr-4">
          <div class="flex items-center p-1">
            <img src="hp.webp" alt="HP" class="w-8 h-8" />
            <span>HP</span>
          </div>
          <p>${stats.HP}</p>
        </li>
        <li class="border-[#33343a] border-2 flex items-center justify-between pl-1 pr-4">
          <div class="flex items-center p-1">
            <img src="atk.webp" alt="ATK" class="w-8 h-8" />
            <span>ATK</span>
          </div>
          <p>${stats.ATK}</p>
        </li>
        <li class="border-[#33343a] border-2 bg-[#36373d] flex items-center justify-between pl-1 pr-4">
          <div class="flex items-center p-1">
            <img src="def.webp" alt="DEF" class="w-8 h-8" />
            <span>DEF</span>
          </div>
          <p>${stats.DEF}</p>
        </li>
        ${stats.SPD
    ? `<li class="border-[#33343a] border-2 flex items-center justify-between pl-1 pr-4">
          <div class="flex items-center p-1">
            <img src="spd.webp" alt="Speed" class="w-8 h-8" />
            <span>Speed</span>
          </div>
          <p>${stats.SPD}</p>
        </li>`
    : ''
  }
      </ul>
    `

const lightConeTemplate = lightCone => `
      <article class="bg-[#2c2d33] border-[#33343a] border-2 relative">
        <img src="nihility.webp" alt="Light cone path" class="w-8 absolute z-50 right-8 top-2 opacity-40">
        <div class="border-[#33343a] border-b flex items-center">
          <div class="font-semibold text-[#353535] flex items-center justify-center bg-red-400 w-[100px] h-[60px] text-center py-2 px-2" style="font-weight: 800;">Light Cone</div>
          <div class="bg-zinc-750 px-4 flex flex-col justify-center gap-1">
            <h3 class="text-xl opacity-90" style="font-weight: 800;">${lightCone.name
  }</h3>
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
            <img src="${lightCone.image}" alt="${lightCone.name
  }" class="w-full h-auto object-cover">
            <div class="text-sm space-y-2">
              ${lightCone.lore.map(paragraph => `<p>${paragraph}</p>`).join('')}
            </div>
          </div>
        </div>
      </article>
    `

const initializePage = () => {
  const charNameElement = document.getElementById('charName')
  if (charNameElement) {
    charNameElement.textContent = characterData.name
  }

  const yearElement = document.getElementById('year')
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }

  const containers = {
    description: document.getElementById('description'),
    skills: document.getElementById('skills'),
    traces: document.getElementById('traces'),
    minorTraces: document.getElementById('minortraces'),
    eidolons: document.getElementById('eidolons'),
    stats: document.getElementById('stats'),
    lightCones: document.getElementById('lcs')
  }

  if (containers.description) {
    containers.description.innerHTML = characterData.description
  }

  if (containers.skills) {
    containers.skills.innerHTML = characterData.skills
      .map(cardTemplate)
      .join('')
  }

  if (containers.minorTraces) {
    containers.minorTraces.innerHTML = characterData.minorTraces
      .map(minorTraceTemplate)
      .join('')
  }

  if (containers.traces) {
    containers.traces.innerHTML = characterData.traces
      .map(cardTemplate)
      .join('')
  }

  if (containers.eidolons) {
    containers.eidolons.innerHTML = characterData.eidolons
      .map(cardTemplate)
      .join('')
  }

  if (containers.stats) {
    containers.stats.innerHTML += statsTemplate(characterData.stats)
  }

  if (containers.lightCones) {
    containers.lightCones.innerHTML = characterData.lightCones
      .map(lightConeTemplate)
      .join('')
  }
}

const initializeNavigation = () => {
  const navigation = document.getElementById('navigation')
  const banner = document.getElementById('banner')

  if (!navigation || !banner) return

  const handleScroll = () => {
    const bannerBottom = banner.offsetTop + banner.offsetHeight
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop >= bannerBottom) {
      navigation.classList.add(
        'fixed',
        'top-0',
        'left-0',
        'right-0',
        'z-50',
        'shadow-lg'
      )
      navigation.classList.remove('relative')
    } else {
      navigation.classList.remove(
        'fixed',
        'top-0',
        'left-0',
        'right-0',
        'z-50',
        'shadow-lg'
      )
      navigation.classList.add('relative')
    }
  }

  const scrollValues = {
    mobile: [180, 320],
    desktop: [130, 208]
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const targetId = link.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop
        const bannerBottom = banner.offsetTop + banner.offsetHeight
        const offsetTop =
          scrollTop >= bannerBottom
            ? targetElement.offsetTop -
            scrollValues[
            window.innerWidth > 768 ? 'desktop' : 'mobile'
            ][0]
            : targetElement.offsetTop -
            scrollValues[
            window.innerWidth > 768 ? 'desktop' : 'mobile'
            ][1]

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    })
  })

  window.addEventListener('scroll', handleScroll)
}

const initializeEidolons = () => {
  document.querySelectorAll('[data-eidolon]').forEach(eidolonCard => {
    const eidolonType = eidolonCard.getAttribute('data-eidolon')
    const imagePath = `${eidolonType}.png`

    const accordionContainer = document.createElement('div')
    accordionContainer.className =
      'overflow-hidden transition-all duration-300 ease-in-out'
    accordionContainer.style.maxHeight = '0px'

    const image = document.createElement('img')
    image.src = imagePath
    image.alt = `${eidolonType} image`
    image.className = 'w-full h-auto object-cover'

    accordionContainer.appendChild(image)

    eidolonCard.appendChild(accordionContainer)

    eidolonCard.addEventListener('click', () => {
      const isExpanded = accordionContainer.style.maxHeight !== '0px'

      if (isExpanded) {
        accordionContainer.style.maxHeight = '0px'
      } else {
        accordionContainer.style.maxHeight =
          accordionContainer.scrollHeight + 'px'
      }
    })

    eidolonCard.style.cursor = 'pointer'
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initializePage()
  initializeNavigation()
  initializeEidolons()
})
