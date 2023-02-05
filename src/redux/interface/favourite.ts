export interface IFavourite {
    Version: number
    Key: string
    Type: string
    Rank: number
    LocalizedName: string
    Country: Country
}

export interface Country {
    ID: string
    LocalizedName: string
}