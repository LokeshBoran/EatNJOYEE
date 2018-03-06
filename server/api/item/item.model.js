'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './item.events';

var ItemSchema = new mongoose.Schema({
  name: String,
  foodItemName: String,
  active: Boolean,
  price: Number,
  ingredients: String

});

registerEvents(ItemSchema);
export default mongoose.model('Item', ItemSchema);
