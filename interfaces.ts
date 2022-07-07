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

export interface IQuote {
    quote?: boolean
}

export interface IBg {
    bg: string
}