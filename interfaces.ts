export interface ICard {
    id: number,
    pfp: string,
    name: string,
    title: string,
    header: string,
    review: string,
    bg: string,
    quote: boolean
}

export interface IAvatar {
    pfp: string
}

export interface ICardset {
    bgcolor?: string,
    quote?: boolean,
    useDarkText: boolean
}