export interface ticketModel{
    id:string;
    title : string;
    request : string;
    status : 'open' | 'closed';
}