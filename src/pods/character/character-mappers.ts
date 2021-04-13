import * as model from 'dals/character/character.model';
import * as apiModel from './character.api-model';

const mapOriginFromModelToApi = (originModel: model.OriginModel): apiModel.Origin => ({
  name: originModel.name,
  url: originModel.url,
})

const mapLocationFromModelToApi = (locationModel: model.LocationModel): apiModel.Location => ({
  name: locationModel.name,
  url: locationModel.url,
})

export const mapCharacterFromModelToApi = (character: model.CharacterModel): apiModel.Character => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: mapOriginFromModelToApi(character.origin),
  location: mapLocationFromModelToApi(character.location),
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created,
  bestSentences: character.bestSentences
});

export const mapCharacterListFromModelToApi = (
  characterList: model.CharacterModel[]
): apiModel.Character[] => characterList.map(mapCharacterFromModelToApi);


