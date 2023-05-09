import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
import React,{useState} from "react";
import {Button ,Progress, Grid, Container, Text } from "@nextui-org/react";
import { BsEmojiHeartEyes,BsEmojiWink, BsEmojiSunglasses, BsEmojiKiss,BsEmojiLaughing } from 'react-icons/bs';
import Link from "next/link";
const SXUpcomingPoll = () => {

    const [Voted, setVote] = useState(0);

    
     const pro1 = {
        value: 80,
        name: "Demon Slayer",
      };
     const pro2 = {
        value: 30,
        name: "Naruto",
      };
     const pro3 = {
        value: 40,
        name: "Demon Slayer",
      };
      const pro4 = {
        value: 40,
        name: "Demon Slayer",
      };
      const pro5 = {
        value: 40,
        name: "Demon Slayer",
      };
    
  return (
    <>
    <Container css={{ display: 'block' }} >
    <h3
          className="fn__maintitle big"
          data-text="Top Voted"
          data-align="center"
          style={{ fontFamily:"font1", paddingBottom:"1rem" }}
        >
        Top Voted
        </h3>
    <Grid.Container  xs={12} sm={12} gap={3}>
      <Grid>
        <Text color="White" h4><span style={{color: '#f31260'}}><BsEmojiHeartEyes/> {pro1.value}%</span> <span style={{color:'#9ba0b8'}}>People Vote for</span> {pro1.name}</Text>
        <Progress value={pro1.value} color="error" size="md" status="primary" />
      </Grid>
      <Grid>
      <Text color="white" h4><span style={{color: '#9750dd'}}><BsEmojiSunglasses/> {pro2.value}%</span> <span style={{color:'#9ba0b8'}}>People Vote for</span> {pro2.name}</Text>
        <Progress  value={pro2.value} color="secondary" size="md" status="secondary" />
      </Grid>
      <Grid>
      <Text color="white" h4><span style={{color: '#17c964'}}><BsEmojiKiss/> {pro3.value}%</span> <span style={{color:'#9ba0b8'}}>People Vote for</span> {pro3.name}</Text>
        <Progress value={pro3.value} color="success" size="md" status="success" />
      </Grid>
      <Grid>
      <Text color="white" h4><span style={{color: '#f5a524'}}><BsEmojiWink/> {pro4.value}%</span> <span style={{color:'#9ba0b8'}}>People Vote for</span> {pro4.name}</Text>
        <Progress value={pro4.value} color="warning" size="md" status="warning" />
      </Grid>
      <Grid>
      <Text color="white" h4><span style={{color: '#0072f5'}}><BsEmojiLaughing/> {pro5.value}%</span> <span style={{color:'#9ba0b8'}}>People Vote for</span> {pro5.name}</Text>
        <Progress value={pro5.value} color="primary" size="md" status="error" />
      </Grid>
    </Grid.Container>
    </Container>
    </>
  );
};
export default SXUpcomingPoll;
