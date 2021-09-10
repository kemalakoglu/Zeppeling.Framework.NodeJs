
export interface IReadOnlyRepository {
    get();
    getById(key: string);
    getByPage(number: number, pageSize: number);
}