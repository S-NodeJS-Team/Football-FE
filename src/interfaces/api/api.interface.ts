export interface IResponse {
  code?: number;
  message?: string;
  data?: any;
}

export interface IQueryParams {
  page?: number;
  take?: number;
  sort?: string;
  fields?: string;
}
