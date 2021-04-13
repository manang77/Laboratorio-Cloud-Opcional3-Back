import { CharacterModel } from './character.model';
import { CharacterContext } from './character.context';
import { Character, CharacterApiForUpdate } from 'pods/character/character.api-model';

export const getCharacterList = async (name: string): Promise<CharacterModel[]> => {

  const filter = (name) ? { "name": { '$regex': `.*${name.trim()}.*`, '$options': 'i' }} : {};
  return await CharacterContext.find(filter)
  .select({
    _id: 1,
    id: 1,
    name: 1,
    status: 1,
    species: 1,
    type: 1,
    gender: 1,
    origin: 1,
    location: 1,
    image: 1,
    episode: 1,
    url: 1,
    created: 1,
    bestSentences: 1,
  })
  .lean();
}

export const getCharacter = async (id: string): Promise<CharacterModel> => {
  const result: CharacterModel[] = await CharacterContext.find({'id': parseInt(id)})
  .select({
      _id: 1,
      id: 1,
      name: 1,
      status: 1,
      species: 1,
      type: 1,
      gender: 1,
      origin: 1,
      location: 1,
      image: 1,
      episode: 1,
      url: 1,
      created: 1,
      bestSentences: 1,
    })
    .lean();
    return result[0];
  };

  export const insertCharacterList = async (characterList: CharacterModel[]) =>
  await CharacterContext.insertMany(characterList);

export const updateCharacterBestSentences = async (characterData: CharacterApiForUpdate) =>
  await CharacterContext.updateOne(
    {id: characterData.id},
    {
      $set: {
        bestSentences: characterData.bestSentences
      }
    }
  );
