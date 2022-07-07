import type { FC } from "react"
import styled from "styled-components"
import { ICard, IQuote, IBg } from "../interfaces"

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 8px;
    background-color: ${(props) => props.theme.theme.colorPrimary.moderateViolet};
    padding: 2em;
    width: 90%;
    background-image: url(/bg-pattern-quotation.svg);
    background-repeat: no-repeat;
    background-position: 90% 0%;
`

const Quote = styled.svg`
    display: flex;
    opacity: 70%;
    width: 120px;
    height: 120px;
    z-index: 1;
`

const Bio = styled.div`
    display: flex;
    flex-direction: row;
`

const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: blue;
`

const NameAndTitle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 0 1em;
`

const Name = styled.span`
    color: ${(props) => props.theme.theme.colorPrimary.white};
`
const Title = styled(Name)`
    opacity: 50%;
`

const Header = styled.p`
    color: ${(props) => props.theme.theme.colorPrimary.white};
`

const Review = styled(Header)`
    opacity: 70%;
`

    // color: ${props => console.log(props.bg)}


interface Props {
   card: ICard
}

const Card = ({card}: Props) => {
    return (
    <Frame
        // bg={card.bg}
    >

        <Bio>
            <Avatar/>
                <NameAndTitle>
                    <Name>{card.name}</Name>
                    <Title>{card.title}</Title>
            </NameAndTitle>
        </Bio>
        <Header>{card.header}</Header>
        <Review>"{card.review}"</Review>
    </Frame>
    )
}

export default Card