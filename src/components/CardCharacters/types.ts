export type Character = {
  id: number;
  name: string;
  image: string;
  species: string;
  origin: {
    name: string;
  };
};

export type Props = {
  character: Character;
};

export interface CharacterFormatted extends Character {
  nameFormatted?: string;
}
