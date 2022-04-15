export type StatusProps = {
  status: 'alive' | 'dead' | 'unknown';
};

export type Character = {
  id: number;
  name: string;
  status: string;
  statusFormatted: 'alive' | 'dead' | 'unknown';
  image: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
};
