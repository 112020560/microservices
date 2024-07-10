export interface PaginationResponseModel<T> {
    total_rows: number;
    data: Array<T>;
    query_timestamp: Date
}