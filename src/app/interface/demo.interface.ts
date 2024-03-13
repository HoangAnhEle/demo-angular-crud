export interface ICustomers{
    id: number;
    name: string;
    age: number;
    nationality: string;
}

export interface IApiRespone{
    status: string;
    message: string;
    content: [];
}