import type { NextPage } from 'next'
import styled from 'styled-components'
import { ICard } from '../interfaces'

import Card from '../components/Card'


const Frame = styled.div`
  display: flex;
  flex-direction: column;
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
    review: "I was an EMT for many years before I joined the bootcamp. Ive been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun . I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of mhy life. Since completing the course. Ive sucessfully switched careers, working as a Software Engineer at a VR startup.",
    // bg: `moderateViolet`,
    bg: 'hsl(263, 55%, 52%)',
    quote: true
  },
  {
    id: 2,
    pfp: '/image-jonathan.jpg',
    name: 'Jonathan Walters',
    title: 'Verified Graduate',
    header: 'The team was very supportive and kept me motivated',
    review: 'I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments Ive made in myself',
    bg: 'hsl(217, 19%, 35%)',
    quote: false
  },
  {
    id: 3,
    pfp: '/image-jeanette.jpg',
    name: 'Jeanette Harmon',
    title: 'Verified Graduate',
    header: 'An overall wonderful and rewarding experience',
    review: 'Thank you for a wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.',
    bg: 'hsl(0, 0%, 100%)',
    quote: false
  },
  {
    id: 4,
    pfp: '/image-patrick.jpg',
    name: 'Patrick Abrams',
    title: 'Verified Graduate',
    header: 'Awesome teaching support from the TAs who did the bootcamp themseleves. Getting guidance from them and learning from their experiences was easy.',
    review: 'The Staff seem genuinely concerened about my progres which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The Standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.',
    bg: 'hsl(219, 29%, 14%)',
    quote: false
  },
  {
    id: 5,
    pfp: '/image-kira.jpg',
    name: "Kira Whittle",
    title: 'Verified Graduate',
    header: 'Such a life-changing experience. Highly recommended!',
    review: 'Before joining the bootcamp Ive never written a line of code. Ineeded some structure from professionals who can help me learn programming step by step. Iwas encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire cirriculum and staff did not dissapoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was opustanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, Ive often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommended!',
    bg: 'hsl(0, 0%, 100%)',
    quote: false
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
