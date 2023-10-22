import { Accession } from './Accession';
import { Image } from './Image';

export type Object = {
  id: number;
  isHighlight: boolean;
  accession: Accession;
  isPublicDomain: boolean;
  image: Image;
};
