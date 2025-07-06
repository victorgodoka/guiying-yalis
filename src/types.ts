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
  lore: string[];
  effect: string;
  stats: CharacterStats;
}

export interface CharacterData {
  name: string;
  stats: CharacterStats;
  description: string;
  lightCones: LightCone[];
  skills: Skill[];
  traces: Trace[];
  minorTraces: MinorTrace[];
  eidolons: Eidolon[];
}

export interface ScrollValues {
  mobile: [number, number];
  desktop: [number, number];
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
