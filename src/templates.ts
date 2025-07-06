import { Skill, Trace, Eidolon, MinorTrace, CharacterStats, LightCone } from "./types";
import { formatDescription } from "./utils";

export const cardTemplate = (data: Skill | Trace | Eidolon): string => `
  <article class="bg-[#2c2d33] border-[#33343a] border-2" ${('isEidolon' in data && data.isEidolon) ? `data-eidolon="${data.type.toLowerCase()}"` : ''}>
    <div class="border-[#33343a] border-b flex items-center">
      <div class="font-semibold text-[#353535] flex items-center justify-center bg-red-400 w-[100px] h-[60px] text-center py-2 px-2" style="font-weight: 800;">${data.type}</div>
      <div class="bg-zinc-750 px-4 flex flex-col justify-center gap-1">
        <h3 class="text-xl opacity-90" style="font-weight: 800;">${data.name}</h3>
        ${data.tg ? `<p class="text-sm opacity-75" style="font-weight: 400;">${data.tg}</p>` : ''}
      </div>
    </div>
    ${data.energyBreak ? `<div class="grid grid-cols-2 py-2 px-2 bg-[#33343a]">
      <p class="text-sm text-zinc-300">Energy Gain: <span style="font-weight: 800;">${data.energyBreak[0]}</span></p>
      <p class="text-sm text-zinc-300">Break: <span style="font-weight: 800;">${data.energyBreak[1]}</span></p>
    </div>` : ''}
    <div class="p-4">
      ${formatDescription(data.description)}
    </div>
    ${('enhanced' in data && data.enhanced) ? `
      <div class="border-[#33343a] border-t-2 flex items-center">
        <div class="font-semibold text-[#353535] flex items-center justify-center bg-red-400 w-[100px] h-[60px] text-center py-2 px-2" style="font-weight: 800;">${data.enhanced.type}</div>
        <div class="bg-zinc-750 px-4 flex flex-col justify-center gap-1">
          <h4 class="text-xl opacity-90" style="font-weight: 800;">${data.enhanced.name}</h4>
          ${data.enhanced.tg ? `<p class="text-sm opacity-75" style="font-weight: 400;">${data.enhanced.tg}</p>` : ''}
        </div>
      </div>
      ${data.enhanced.energyBreak ? `<div class="grid grid-cols-2 py-2 px-2 bg-[#33343a]">
        <p class="text-sm text-zinc-300">Energy Gain: <span style="font-weight: 800;">${data.enhanced.energyBreak[0]}</span></p>
        <p class="text-sm text-zinc-300">Break: <span style="font-weight: 800;">${data.enhanced.energyBreak[1]}</span></p>
      </div>` : ''}
      <div class="p-4">
        ${formatDescription(data.enhanced.description)}
      </div>
    ` : ''}
  </article>
`;

export const minorTraceTemplate = (trace: MinorTrace): string => `
  <div class="flex items-center justify-center gap-2 border-[#33343a] border bg-[#2c2d33] w-full p-2 text-lg">
    <img src="${trace.icon}" alt="${trace.type}" class="w-8 h-8">
    <p>${formatDescription(`${trace.type} ${trace.value}`)}</p>
  </div>
`;

export const statsTemplate = (stats: CharacterStats, isLightCone: boolean = false): string => `
  <ul class="${isLightCone ? 'grid grid-cols-3' : ''}">
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
    </li>` : ''}
  </ul>
`;

export const lightConeTemplate = (lightCone: LightCone): string => `
  <article class="bg-[#2c2d33] border-[#33343a] border-2 relative">
    <img src="images/nihility.webp" alt="Light cone path" class="w-8 absolute z-50 right-8 top-2 opacity-40">
    <div class="border-[#33343a] border-b flex items-center">
      <div class="font-semibold text-[#353535] flex items-center justify-center bg-red-400 w-[100px] h-[60px] text-center py-2 px-2" style="font-weight: 800;">Light Cone</div>
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
          ${lightCone.lore.map((paragraph: string) => `<p>${paragraph}</p>`).join('')}
        </div>
      </div>
    </div>
  </article>
`;
