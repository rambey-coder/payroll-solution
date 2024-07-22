export interface TaxResponse{
    data?: Tax | Tax[];
    message?: string;
}

export interface Tax{
    id?: number,
    taxName: string, 
    taxDescription: string, 
    taxRate: number
}