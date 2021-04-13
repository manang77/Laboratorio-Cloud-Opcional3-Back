import mongoose, { Document, Schema } from 'mongoose';
import { EpisodeModel } from './episode.model';

const episodeSchema = new Schema({
  _id: { type: Schema.Types.String, required: true },
  id: { type: Schema.Types.Number, required: true },
  name: { type: Schema.Types.String, required: true },
  air_date: { type: Schema.Types.String, required: true },
  episode: { type: Schema.Types.String, required: true },
  characters: { type: [Schema.Types.String], required: true },
  url: { type: Schema.Types.String, required: true },
  created: { type: Schema.Types.String, required: true },
});

export const EpisodeContext = mongoose.model<EpisodeModel & Document>(
  'Episode',
  episodeSchema
);
