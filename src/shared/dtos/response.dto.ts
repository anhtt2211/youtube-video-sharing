export class ListResponse<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;

  constructor(items: T[], count: number, page: number, limit: number) {
    this.items = items;
    this.totalItems = count;
    this.currentPage = +page;
    this.totalPages = Math.ceil(count / limit);
  }
}
