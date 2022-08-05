export interface ICharacterResponse {
  data: Data;
}

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Result[];
}

export interface Result {
  id: number;
  name: string;
  description?: string;
  thumbnail?: Thumbnail;
}

export interface Thumbnail {
  path: string;
  extension: Extension;
}

export enum Extension {
  GIF = 'gif',
  JPG = 'jpg',
}
