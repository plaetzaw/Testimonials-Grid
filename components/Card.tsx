import type { FC } from "react"
import styled from "styled-components"
import { ICard, ICardset, IAvatar } from "../interfaces"

const Frame = styled.div<ICardset>`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 12px;
    background-color: ${(props) => props.bgcolor};
    padding: 2em;
    margin: 1em;
    width: 90%;
    background-image: ${(props) => props.quote ? "url(/bg-pattern-quotation.svg)" : null};
    background-repeat: no-repeat;
    background-position: 90% 0%;
`

const Bio = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Avatar = styled.div<IAvatar>`
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background-image: url(${(props) => props.pfp});
    background-position: center;
    border: 2px solid ${props => props.theme.theme.colorNeutral.lightGrey};
    border-opacity: 50%;
`

const NameAndTitle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 0 1em;
`

const Name = styled.span<ICardset>`
    color: ${(props) => props.useDarkText ? props.theme.theme.colorPrimary.veryDarkGreyBlue : props.theme.theme.colorPrimary.white};
`
const Title = styled(Name)`
    opacity: 50%;
`

const Header = styled.h2<ICardset>`
    color: ${(props) => props.useDarkText ? props.theme.theme.colorPrimary.veryDarkGreyBlue : props.theme.theme.colorPrimary.white};
    font-weight: 600;
    `

const Review = styled.p<ICardset>`
    color: ${(props) => props.useDarkText ? props.theme.theme.colorPrimary.veryDarkGreyBlue : props.theme.theme.colorPrimary.white};
    opacity: 70%;
    font-weight: 500;
`

    // color: ${props => console.log(props.bg)}


interface Props {
   card: ICard
}

const Card = ({card}: Props) => {
    let useDarkText = false
    if (card.bg === 'hsl(0, 0%, 100%)'){
        useDarkText = true
    } 
    return (
        <Frame
        bgcolor={card.bg}
        quote={card.quote}
        useDarkText={useDarkText}
    >
        <Bio>
            <Avatar
            pfp={card.pfp}
            />
                <NameAndTitle>
                    <Name useDarkText={useDarkText}>{card.name}</Name>
                    <Title useDarkText={useDarkText}>{card.title}</Title>
            </NameAndTitle>
        </Bio>
        <Header useDarkText={useDarkText}>{card.header}</Header>
        <Review useDarkText={useDarkText}>"{card.review}"</Review>
    </Frame>
    )
}

export default Card