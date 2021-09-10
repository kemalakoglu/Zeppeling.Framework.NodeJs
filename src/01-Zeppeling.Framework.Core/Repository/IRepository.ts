
export interface IRepository {
    get(): Promise<any>;
    getById(key: string): Promise<any>;
    getByPage(number: number, pageSize: number): Promise<any>;
    insert(entity: any): Promise<any>;
    update(entity: any): Promise<any>;
    delete(key: string): Promise<any>;
}