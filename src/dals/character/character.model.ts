export interface OriginModel {
  _id: string;
  name: string;
  url: string;
}

export interface LocationModel {
  _id: string;
  name: string;
  url: string;
}

export interface CharacterModel {
  _id: string;
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginModel;
  location: LocationModel;
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentences: string[];
}
