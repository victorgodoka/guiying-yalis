import {
  CharacterData,
} from './types';

export const characterData: CharacterData = {
  name: 'Guiying Yalis',
  path: 'Nihility',
  element: 'Fire',
  stats: {
    HP: 1023,
    ATK: 617,
    DEF: 396,
    SPD: 102
  },
  description: `
      <p>Guiying Yalis is a 5★ character from the Fire element who follows the Path of Nihility. Guiying Yalis, heir to a name lost with a dying world, moves through Xianzhou like a memory wrapped in silk and flame. Composed and distant, she speaks little — but her eyes hold centuries of sorrow, and her smile never reaches them. The Cloud Knights say she is serenity incarnate, yet those who have seen her fight know better: in battle, she becomes a storm of grace and ruin, a dancer whose steps leave scorched earth in their wake.</p>
      <p></p>
  `,
  lightCones: [
    {
      name: 'Dance Beneath Crimson Blossoms',
      image: 'images/lc.png',
      tier: '⭐⭐⭐⭐⭐',
      lore: `
        <div class="space-y-4 text-gray-300 leading-relaxed">
          <p>In the drifting realms of Xianzhou, where cherry blossoms bloom in defiance of time, there danced a woman whose name carried the echoes of a fallen dynasty — Guiying Yalis.</p>
          
          <p>She did not march into war like a soldier.</p>
          
          <p>She drifted into battle like spring wind through scorched earth —<br>
          elegant, effortless… inevitable.</p>
          
          <p>Burn and Sunburn.</p>
          
          <p>Two curses masked in beauty.</p>
          
          <p>One seared the flesh. The other scorched the soul.</p>
          
          <p>And both answered her call.</p>
          
          <p>Her enemies never saw her wrath — only the petals she left behind.</p>
          
          <p>Crimson, gold, ash.</p>
          
          <p>Once, under a moonless sky, shadows clawed at the gates of a distant Xianzhou village. The stars had turned their gaze. The night braced for ruin.</p>
          
          <p>Then came the fan.</p>
          
          <p>Unfurled in silence, it shimmered with embers and memory. With a single step, she set the wind ablaze. Flames curled like dancers around her — patient, merciless. The cursed fire she summoned did not roar. It whispered.</p>
          
          <p>Those touched by her art did not burn.</p>
          
          <p>They withered.</p>
          
          <p>One breath at a time.</p>
          
          <p>When the ashes settled and the petals floated softly down, she was already gone —<br>
          like spring, fleeting yet eternal.</p>
          
          <p>They called her many things: Flame Dancer. Crimson Petal. Cursebearer.</p>
          
          <p>But to those who survived…</p>
          
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
      name: 'Embers of Spring, Cradled in Song',
      image: 'images/lc2.png',
      tier: '⭐⭐⭐⭐',
      lore: `
        <div class="space-y-4 text-gray-300 leading-relaxed">
          <p>In the quiet hours between dusk and dream, the grand hall of the Palace of Astrum fell into a hush. Light streamed through carved wooden screens, painting golden blossoms across the floor — shadows of sakura that bloomed only in the spring of memory.</p>
          
          <p>There, beneath the crimson pillars etched with tales of centuries, Guiying Yalis sat cross-legged, her robes cascading like flowing petals, red and lavender swirled in elegant harmony.</p>
          
          <p>Nestled in her arms was a girl no older than four, fast asleep — her silver hair tied with a ribbon, her tiny form wrapped in warmth and trust.</p>
          
          <p>She was no child of hers by blood.</p>
          
          <p>But war had a way of making orphans.</p>
          
          <p>And Guiying, the Crimson Petal, had a heart that burned not only with flame… but with compassion.</p>
          
          <p>"You are the first light," she whispered, stroking the child's hair,<br>
          "A bud before the bloom. Rest now. The world can wait."</p>
          
          <p>As the breeze outside carried a few wayward blossoms past the open window, Guiying began to hum — soft at first, then laced with ancient melody. A lullaby her mother once sang beneath the same cherry trees… before fate set her on the path of fire.</p>
          
          <p>Her voice, low and warm, danced like incense through the air:</p>
          
          <div class="pl-4 border-l-2 custom-border-color my-4">
            <p>"Close your eyes, my springtime star,<br>
            The moon will guard you from afar.<br>
            Drift like petals, float like flame,<br>
            Tomorrow's wind will know your name…"</p>
          </div>
          
          <p>The child stirred, pressing closer.</p>
          
          <p>Guiying smiled.</p>
          
          <p>In that moment, she was not the feared flame that scorched the battlefield.</p>
          
          <p>Not the student of Jing Yuan, nor the wielder of the Sunburning Fan.</p>
          
          <p>She was simply Guiying —</p>
          
          <p>A woman who bore the weight of countless battles…</p>
          
          <p>And still found time to sing to a sleeping soul.</p>
          
          <p>Because even in Xianzhou, where stars drift and wars rage…</p>
          
          <p>The truest strength is found not in fire or fury —</p>
          
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
      type: 'Basic ATK',
      name: 'Solar Bloom',
      description: "Deals Fire DMG equal to 100% of Guiying's ATK to a single enemy.",
      tg: 'Single Target',
      energyBreak: [20, 10],
      enhanced: {
        type: "<p style='line-height: 1'>Basic ATK<br /><span class='text-xs'>Enhanced</span></p>",
        name: 'Solar Flare',
        description: "Deals Fire DMG equal to 150% of Guiying's ATK to one designated enemy. Deals Fire DMG equal to 75% of Guiying's ATK to adjacent enemies. Any Burned enemies will take 100% more DMG during their next turn.",
        tg: 'Blast',
        energyBreak: [30, '10 + 5 adjacent']
      }
    },
    {
      type: 'Skill',
      name: 'Cherry Blossom Burst',
      description: "Deals Fire DMG equal to 210% of Guiying's ATK to a single enemy and deals Fire DMG equal to 85% of Guiying's ATK to any adjacent enemies with a 100% base chance to Burn the target and adjacent targets. When Burned, enemies will take a Fire DoT equal to 325% of Guiying's ATK at the beginning of each turn, lasting for 2 turn(s).",
      tg: 'Blast',
      energyBreak: [30, '20 + 10 adjacent']
    },
    {
      type: 'Ultimate',
      name: 'Spring Sun Radiance',
      description: "Deals Fire DMG equal to 180% of Guiying's ATK to all enemies. Deals 50% increased Fire DMG to any enemies that are currently Burned. Has a 90% base chance to inflict Burned enemies with Sunburn for 2 turn(s). Enemies inflicted with Sunburn will take 33% more DMG in their turn.",
      tg: "AoE | <span class='text-[#eec554]'>120 energy cost</span>",
      energyBreak: [5, 20]
    },
    {
      type: 'Talent',
      name: 'Sakura Wind Dance',
      description: 'After Guiying uses her Ultimate, her Basic ATK "Solar Bloom" is enhanced to "Solar Flare". After her Enhanced Basic ATK\'s "Solar Flare" hits a Burning enemy target, the Burn status will immediately deal DMG for 1 time equal to 125% of the original DMG to the target. If the target has Sunburn, this effect is doubled.',
      tg: 'Enchance',
      energyBreak: [0, '-']
    },
    {
      type: 'Technique',
      name: 'Spring Awakening',
      description: "Immediately attacks all enemies within a set range. After entering battle, deals Fire DMG equal to 60% of Guiying's ATK to all enemies, with a 100% base chance to inflict Burn on every enemy target for 2 turn(s). Enemies with Fire weakness also are inflicted with Sunburn for 1 turn.",
      tg: '',
      energyBreak: [0, '-']
    }
  ],
  traces: [
    {
      type: "<p style='line-height: 1'>A2<br /><span class='text-xs'>Major Trace</span></p>",
      name: 'Spring Dawn Rush',
      description: "When the battle begins, Guiying's action is advanced forward by 40% of her Effect Hit Rate.",
      tg: '',
      energyBreak: null
    },
    {
      type: "<p style='line-height: 1'>A4<br /><span class='text-xs'>Major Trace</span></p>",
      name: 'Cherry Blossom Bloom',
      description: "Increases this unit's DMG by an amount equal to 30% of Effect Hit Rate, up to a maximum DMG increase of 40%. At 5 stacks of Petal Dance, this effect is doubled, and Burn damage is increased by 100%.",
      tg: '',
      energyBreak: null
    },
    {
      type: "<p style='line-height: 1'>A6<br /><span class='text-xs'>Major Trace</span></p>",
      name: 'Sakura Wind Dance',
      description: 'Whenever Guiying deals damage to an enemy, she gains 1 stack of Petal Dance up to 5 stacks. For each stack, she gains 12% SPD. At 5 stacks, she enters the "Sakura Wind Dance" state until she loses 1 or more stacks. While in the "Sakura Wind Dance" state, she gains an additional 40% SPD, then for every 1 SPD above 125, increases Guiying\'s DoT DMG by 8%.',
      tg: '',
      energyBreak: null
    }
  ],
  minorTraces: [
    {
      type: 'ATK',
      icon: 'images/atk.webp',
      value: '+28%'
    },
    {
      type: 'Effect Hit Rate',
      isEidolon: true,
      icon: 'images/ehr.webp',
      value: '+16.4%'
    },
    {
      type: 'Fire DMG',
      icon: 'images/fire.webp',
      value: '+14.4%'
    }
  ],
  eidolons: [
    {
      type: 'E1',
      isEidolon: true,
      name: 'Spring Breeze',
      description: 'When Guiying gains Petal Dance stacks, she also gains 1 stack of Spring Breeze. Each stack of Spring Breeze increases her Effect Hit Rate by 8%, up to 3 stacks. Spring Breeze stacks are consumed when using her Ultimate.',
      tg: 'Eidolon 1',
      energyBreak: null
    },
    {
      type: 'E2',
      isEidolon: true,
      name: 'Solar Flare Resonance',
      description: 'Guiying\'s Ultimate now deals 200% increased DMG to Burned enemies and extends the duration of all Burn effects on the field by 1 turn. Additionally, after her Enhanced Basic ATK\'s "Solar Flare" hits a Burning enemy target, the Burn status will immediately deal DMG for 1 time equal to 125% of the original DMG to the target. If the target has Sunburn, this effect is doubled.',
      tg: 'Eidolon 2',
      energyBreak: null
    },
    {
      type: 'E3',
      isEidolon: true,
      name: 'Solar Flare Mastery',
      description: 'Skill Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10.',
      tg: 'Eidolon 3',
      energyBreak: null
    },
    {
      type: 'E4',
      isEidolon: true,
      name: 'Dawn Blossom Awakening',
      description: "When Guiying's HP drops below 50%, she immediately gains 5 stacks of Petal Dance and her next enhanced attack will consume all stacks of Petal Dance to deal an additional 200% of Guiying's ATK per stack consumed. This effect can only trigger once per battle.",
      tg: 'Eidolon 4',
      energyBreak: null
    },
    {
      type: 'E5',
      isEidolon: true,
      name: 'Phoenix Rebirth Dance',
      description: 'Ultimate Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15.',
      tg: 'Eidolon 5',
      energyBreak: null
    },
    {
      type: 'E6',
      isEidolon: true,
      name: 'Eternal Spring Mastery',
      description: 'When Guiying reaches 5 stacks of Petal Dance, her "Sakura Wind Dance" state is enhanced to "Eternal Sakura Dance" state. During "Eternal Sakura Dance", Guiying\'s and allies\' attacks have a 100% base chance to inflict Burn on enemies, and any existing Burn effects on enemies will also have a 100% base chance to inflict Sunburn. Additionally, when Guiying or allies deal Fire DMG to enemies with Sunburn, there is a 75% base chance to spread the Sunburn effect to adjacent enemies for 1 turn. Petal Dance stacks now don\'t have a limit.',
      tg: 'Eidolon 6',
      energyBreak: null
    }
  ],
  lore: `
    <div class="space-y-4 text-gray-300 leading-relaxed">
      <p>In the age before ruin, Guiying Yalis lived beneath gardens of endless spring. Her world bloomed in peace — a distant star ruled by a dynasty now lost to time. When the Denizens of Abundance arrived, they promised miracles: illness cured overnight, crops that never withered, and life that endured beyond natural death.</p>
      <p>But what began as salvation soon revealed itself as rot. Life unending became a curse. Minds twisted. Bodies refused to die. The planet fell, not with flame or war, but with decay, madness, and torment without end.</p>
      <p>Guiying remembers all of it.</p>
      <p>She remembers the smiles that became screams. The warmth that turned cold. The moment she ran with her family through streets collapsing under the weight of false immortality. And the moment she lost them — separated by a sudden Mara-born incursion, their fates left unknown.</p>
      <p>Alone, she drifted through the stars until the Cloud Knights of Xianzhou found her — a lone girl cradling the last fan of her fallen house. They took her to the Xianzhou Luofu, not as a prisoner, but as a refugee of something far worse: a survivor of the Abundance’s unchecked mercy.</p>
      <p>There, Guiying found a new life among orphans of war and children scarred like her. She saw herself in their silence, their anger, their loneliness. And in that reflection, she found resolve.</p>
      <p>Under the tutelage of General Jing Yuan, she trained not with brute force, but with grace and control. He taught her that flame, like memory, must be tempered. That fire could destroy — but also protect.</p>
      <p>Today, Guiying fights for Xianzhou, not as a refugee, but as its guardian—one who remembers the cost of failure far too clearly. Beneath drifting petals, she dances on battlefields, determined to shield her new home from the horrors she knows intimately. And perhaps, one day, among the countless stars, she will find a trace of those she lost.</p>
      <p>For Guiying Yalis remembers. And she carries that memory as both burden and strength, forever.</p>
    </div>
  `
};
