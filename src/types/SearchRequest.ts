export type SearchRequest = {
  searchTerm: string;
  page?: number;
  perPage?: number;
  isHighligh?: boolean;
  title?: boolean;
  tags?: boolean;
  departmentId?: number;
  isOnView?: boolean;
  artistOrCulture?: boolean;
  medium?: string;
  hasImages?: boolean;
  geoLocation?: string;
  dateBegin?: number;
  dateEnd?: number;
};
