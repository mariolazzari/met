import { Accession } from './Accession';
import { Image } from './Image';

export type ObjectData = {
  id: number;
  isHighlight: boolean;
  accession: Accession;
  isPublicDomain: boolean;
  image: Image;
};
