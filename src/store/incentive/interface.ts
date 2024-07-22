export interface IncentiveResponse{
    data?: Incentive | Incentive[];
    message?: string;
}

export interface Incentive{
    id?: number | null,
    incentiveName: string, 
    incentiveDescription: string, 
    amount: number
}