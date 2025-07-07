export interface CharacterStats {
  HP: number;
  ATK: number;
  DEF: number;
  SPD?: number;
}

export interface EnhancedSkill {
  type: string;
  name: string;
  description: string;
  tg: string;
  energyBreak: [number, string | number];
}

export interface Skill {
  type: string;
  name: string;
  description: string;
  tg: string;
  energyBreak: [number, string | number];
  enhanced?: EnhancedSkill;
}

export interface Trace {
  type: string;
  name: string;
  description: string;
  tg: string;
  energyBreak: [number, string | number] | null;
}

export interface MinorTrace {
  type: string;
  icon: string;
  value: string;
  isEidolon?: boolean;
}

export interface Eidolon {
  type: string;
  isEidolon: boolean;
  name: string;
  description: string;
  tg: string;
  energyBreak: null;
}

export interface LightCone {
  name: string;
  image: string;
  tier: string;
  lore: string[] | string;
  effect: string;
  stats: CharacterStats;
}

export type Path = 'Nihility' | 'Destruction' | 'Harmony' | 'Abundance' | 'The Hunt' | 'The Rememberance';
export type Element = 'Fire' | 'Ice' | 'Physical' | 'Quantum' | 'Imaginary' | 'Lightning' | 'Wind';

export interface CharacterData {
  name: string;
  path: Path;
  element: Element;
  lore: LoreContent;
  stats: CharacterStats;
  description: string;
  lightCones: LightCone[];
  skills: Skill[];
  traces: Trace[];
  minorTraces: MinorTrace[];
  eidolons: Eidolon[];
}

export interface Lore {
  history: string;
  personality: string;
  appearance: string;
  background: string;
  relationship: string;
  other: string;
}

export type LoreContent = Lore | string;

export interface ScrollValues {
  mobile: number;
  desktop: number;
}

export interface Containers {
  description: HTMLElement | null;
  skills: HTMLElement | null;
  traces: HTMLElement | null;
  minorTraces: HTMLElement | null;
  eidolons: HTMLElement | null;
  stats: HTMLElement | null;
  lightCones: HTMLElement | null;
} 
