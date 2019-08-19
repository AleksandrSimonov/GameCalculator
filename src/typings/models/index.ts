export interface Person {
  id: string;
  name: string;
  armor: string;
  attack: string;
  health: string;
  img: string;
  'alt-img': string;
}

export interface Helmet {
  id: string;
  name: string;
  price: string;
  armor: string;
  attack: string;
  health: string;
  img: string;
}

export interface Glove {
  id: string;
  name: string;
  price: string;
  armor: string;
  attack: string;
  health: string;
  img: string;
}

export interface Chest {
  id: string;
  name: string;
  price: string;
  armor: string;
  attack: string;
  health: string;
  img: string;
}

export interface Boot {
  id: string;
  name: string;
  price: string;
  armor: string;
  attack: string;
  health: string;
  img: string;
}

export interface Sword {
  id: string;
  name: string;
  price: string;
  armor: string;
  attack: string;
  health: string;
  img: string;
}

export interface Equipment {
  helmets: Helmet[];
  gloves: Glove[];
  chests: Chest[];
  boots: Boot[];
  swords: Sword[];
}

export interface ShopData {
  person: Person;
  equipment: Equipment;
}
