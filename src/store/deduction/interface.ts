export interface DeductionResponse{
    data?: Deduction;
    message?: string;
}

export interface Deduction{
    id: number | null,
    deductionName: string, 
    deductionDescription: string, 
    amount: number
}