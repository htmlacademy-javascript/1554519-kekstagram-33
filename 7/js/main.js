import './util.js';
import {getPhotos} from './data.js';
import {makePicturesShow} from './miniatures.js';

makePicturesShow(
  getPhotos()
);

