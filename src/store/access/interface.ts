export interface AccessResponse{
    data?: Access[];
    message?: string;
}

export interface AccessPositionPostResponse{
    data?: Access;
    message?: string;
}


export interface Access{
    id?: number,
    accessName: string
}

export interface AccessPosition{
    id?:number,
    accessId: number,
    positionId: number
}