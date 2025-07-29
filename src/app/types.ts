export type SpellSearchType = {
  spellName: string;
  spellClass: string;
  spellLevel: string;
  spellSchool: string;
  spellAttack: string;
  spellDamage: string;
  spellSave: string;
  spellCastingTime: string;
  spellConcentration: string;
  spellRitual: string;
};

export type SpellDetailsType = {
  area_of_effect?: {
    size: number;
    type: string;
  };
  attack_type?: string;
  casting_time: string;
  classes: InnerType[];
  components: string[];
  concentration: boolean;
  damage?: {
    damage_type: InnerType;
    damage_at_character_level: any;
  };
  dc?: {
    dc_success: "none";
    dc_type: InnerType;
  };
  desc: string[];
  duration: string;
  higher_level: string[];
  index: string;
  level: number;
  material?: string;
  name: string;
  range: string;
  ritual: boolean;
  school: InnerType;
  subclasses: InnerType[];
  updated_at: string;
  url: string;
};

// TODO: come up with a better name lol
type InnerType = {
  index: string;
  name: string;
  url: string;
};

export type MonsterSearch = {
  monsterName: string;
  monsterSize: string;
  monsterType: string;
  monsterCRLower: string;
  monsterCRUpper: string;
};

export type MonsterType = {
  alignment: string;
  challenge_rating: number;
  image: string;
  index: string;
  name: string;
  size: string;
  type: string;
};

type Damage = {
  damage_dice: string;
  damage_type: {
    index: string;
    name: string;
    url: string;
  };
};

export type MonsterActionType = {
  actions: any[];
  attack_bonus?: number;
  damage?: Damage[];
  dc?: {
    dc_type: InnerType;
    dc_value: number;
    success_type: string;
  };
  desc: string;
  multiattack_type?: string;
  name: string;
  usage?: {
    times: number;
    type: string;
  };
};

type ArmorClass = {
  type: string;
  value: number;
};

export type Proficiency = {
  proficiency: {
    index: string;
    name: string;
    url: string;
  };
  value: number;
};

export type MonsterDetailsType = {
  actions: MonsterActionType[];
  alignment: string;
  armor_class: ArmorClass[];
  challenge_rating: number;
  charisma: number;
  condition_immunities: InnerType[];
  constitution: number;
  damage_immunities: string[];
  damage_resistances: string[];
  damage_vulnerabilities: any;
  dexterity: number;
  forms: any;
  hit_dice: string;
  hit_points: number;
  hit_points_roll: string;
  image: string;
  index: string;
  intelligence: number;
  languages: string;
  legendary_actions: {
    name: string;
    desc: string;
  }[];
  name: string;
  proficiencies: Proficiency[];
  proficiency_bonus: number;
  reactions: any;
  senses: any;
  size: string;
  special_abilities: {
    name: string;
    desc: string;
  }[];
  speed: {
    walk?: string;
    swim?: string;
    fly?: string;
  };
  strength: number;
  type: string;
  updated_at: string;
  url: string;
  wisdom: number;
  xp: number;
};
