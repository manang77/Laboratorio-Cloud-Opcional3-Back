import mongoose, { Document, Schema } from 'mongoose';
import { CharacterModel } from './character.model';

const originSchema = new Schema({
  name: { type: Schema.Types.String, required: true },
  url: { type: Schema.Types.String, required: false },
});

const locationSchema = new Schema({
  name: { type: Schema.Types.String, required: true },
  url: { type: Schema.Types.String, required: false },
});

const characterSchema = new Schema({
  id: { type: Schema.Types.Number, required: true },
  name: { type: Schema.Types.String, required: true },
  status: { type: Schema.Types.String, required: true },
  species: { type: Schema.Types.String, required: true },
  type: { type: Schema.Types.String, required: false },
  gender: { type: Schema.Types.String, required: true },
  origin: { type: originSchema, required: true },
  location: { type: locationSchema, required: true },
  image: { type: Schema.Types.String, required: true },
  episode: { type: [Schema.Types.String], required: true },
  url: { type: Schema.Types.String, required: true },
  created: { type: Schema.Types.String, required: true },
  bestSentences: { type: [Schema.Types.String], required: false },
});

export const CharacterContext = mongoose.model<CharacterModel & Document>(
  'Character',
  characterSchema
);
