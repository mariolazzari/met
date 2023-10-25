import { Accession } from './Accession';
import { Image } from './Image';

export type ObjectData = {
  objectID: number;
  isHighlight: boolean;
  accession: Accession;
  isPublicDomain: boolean;
  image: Image;
};
