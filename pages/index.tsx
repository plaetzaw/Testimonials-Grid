import type { NextPage } from 'next'
import styled from 'styled-components'
import { ICard } from '../interfaces'

import Card from '../components/Card'


const Frame = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em;
  background-color: ${(props) => props.theme.theme.colorPrimary.white};
  font-family: Barlow Semi Condensed;
  font-weight: 500;
`

const CardData = [
  {
    id: 1,
    pfp: '/image-daniel.jpg',
    name: 'Daniel Clifford',
    title: 'Verified Graduate',
    header: 'I recieved a job offer mid-course and the subjects I learned were current, if not more so, in the company I joined. I honestly feel like I got every pennys worth',
    review: "I was an EMT for many years before I joined the bootcamp. Ive been looking to make a transition and have heard some people who had an amazing experience here. I signe dup for the free intro course and found it incredibly fun . I enrolled shortly thereafter. The next 12 weeks was the besrt - and most grueling - time of mhy life. Since completing the course. Ive sucessfully switched careers, working as a Software Engineer at a VR startup.",
    // bg: `moderateViolet`,
    bg: 'props.theme.theme.colorPrimary.moderateViolet',
    quote: true
  }
]

const TestimonialDispaly = CardData.map((card: ICard, key: number) => {
  return (
    <Card 
    key={key}
    card={card}
    />
  )
})

const Home: NextPage = () => {
  return (
    <Frame>
      {TestimonialDispaly}
    </Frame>
  )
}

export default Home
