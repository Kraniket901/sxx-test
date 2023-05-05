import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
import React,{useState} from "react";
import {Button ,Progress, Grid, Container, Text } from "@nextui-org/react";
import { BsEmojiHeartEyes,BsEmojiWink, BsEmojiSunglasses, BsEmojiKiss,BsEmojiLaughing } from 'react-icons/bs';
const SXUpcomingPoll = () => {

    const [Voted, setVote] = useState(0);

    
     const pro1 = {
        value: 40,
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
    <Container css={{ display: 'block' }}>
    <section id="upcoming_projects">
      <div className="container" style={{paddingTop:"1rem"}}>
        <h3
          className="fn__maintitle big"
          data-text="VOTE OUR UPCOMING PROJECTS"
          data-align="center"
          style={{ fontFamily:"font1", paddingBottom:"1rem" }}
        >
        VOTE OUR UPCOMING PROJECTS
        </h3>
        <div className="fn_cs_roadmap">
          {/* <div className="step_holder">
            <div className="step_in" />
          </div> */}
          <div className="slider_holder">
            <Swiper {...roadMapProps} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 01</span>
                    <div className="item_in">
                      <img src="https://images-cdn.ubuy.co.in/634e993163f2507123442456-fgaa-anime-poster-attack-on-titan-poster.jpg" alt="" />
                      <p className="date">October 09, 2023</p>
                      <h3 className="title">Attack On Titans</h3>
                      <Button  type="submit" onClick={()=>{setVote(1)}} color={(Voted == 1 )?"gradient":""} auto >
                      {(Voted == 1)?"Thanks for Vote":"Vote"}
                    </Button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 02</span>
                    <div className="item_in">
                      <img src="https://sportshub.cbsistatic.com/i/2023/03/01/2172fd1a-552e-4c09-81ff-2cade2cf7f2f/fqimna-waautyas.jpg?auto=webp&width=849&height=1200&crop=0.708:1,smart" alt="" />
                      <p className="date">October 17, 2023</p>
                      <h3 className="title">Demon Slayer Dub</h3>
                      <Button  type="submit" onClick={()=>{setVote(2)}} color={(Voted == 2 )?"gradient":""} auto >
                      {(Voted == 2)?"Thanks for Vote":"Vote"}
                    </Button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 03</span>
                    <div className="item_in">
                      <img src="https://images-cdn.ubuy.co.in/6359340599ba7c1c010b04dd-jujutsu-kaisen-poster-anime-characters.jpg" alt="" />
                      <p className="date">October 28, 2023</p>
                      <h3 className="title">Jujutsu Kaisen Dub</h3>
                      <Button  type="submit" onClick={()=>{setVote(3)}} color={(Voted == 3 )?"gradient":""} auto >
                      {(Voted == 3)?"Thanks for Vote":"Vote"}
                    </Button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 04</span>
                    <div className="item_in">
                      <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/716ASj7z2GL._SL1000_.jpg" alt="" />
                      <p className="date">November 11, 2023</p>
                      <h3 className="title">Death Note Dub</h3>
                      <Button  type="submit" onClick={()=>{setVote(4)}} color={(Voted == 4 )?"gradient":""} auto >
                      {(Voted == 4)?"Thanks for Vote":"Vote"}
                    </Button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 05</span>
                    <div className="item_in">
                      <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81KVomnzLmL._SL1500_.jpg" alt="" />
                      <p className="date">November 23, 2023</p>
                      <h3 className="title">Chain Saw Man Dub</h3>
                      <Button  type="submit" onClick={()=>{setVote(5)}} color={(Voted == 5 )?"gradient":""} auto >
                      {(Voted == 5)?"Thanks for Vote":"Vote"}
                    </Button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 06</span>
                    <div className="item_in">
                      <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81dwTCF6+XL._SL1500_.jpg" alt="" />
                      <p className="date">December 02, 2023</p>
                      <h3 className="title">Naruto Dub</h3>
                      <Button  type="submit" onClick={()=>{setVote(6)}} color={(Voted == 6 )?"gradient":""} auto >
                      {(Voted == 6)?"Thanks for Vote":"Vote"}
                    </Button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 07</span>
                    <div className="item_in">
                      <img src="https://m.media-amazon.com/images/I/51nwDLVezGL.jpg" alt="" />
                      <p className="date">January 14, 2025</p>
                      <h3 className="title">Bleach Dub</h3>
                      <Button  type="submit" onClick={()=>{setVote(7)}} color={(Voted == 7 )?"gradient":""} auto >
                      {(Voted == 7)?"Thanks for Vote":"Vote"}
                    </Button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 08</span>
                    <div className="item_in">
                      <img src="https://m.media-amazon.com/images/M/MV5BODEzNjlkMDEtMDViNS00MWE5LWI0YjMtZDRiNjhjNWQ4ZDNlXkEyXkFqcGdeQXVyMjQ3NTQ4MjQ@._V1_FMjpg_UX1000_.jpg" alt="" />
                      <p className="date">January 28, 2023</p>
                      <h3 className="title">Hunter X Hunter</h3>
                      <Button  type="submit" onClick={()=>{setVote(8)}} color={(Voted == 8 )?"gradient":""} auto >
                      {(Voted == 8)?"Thanks for Vote":"Vote"}
                    </Button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 09</span>
                    <div className="item_in">
                      <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61eyyyGXMKL._SL1500_.jpg" alt="" />
                      <p className="date">February 12, 2023</p>
                      <h3 className="title">Full Metal Archemist Dub</h3>
                      <Button  type="submit" onClick={()=>{setVote(9)}} color={(Voted == 9 )?"gradient":""} auto >
                      {(Voted == 9)?"Thanks for your Vote":"Vote"}
                    </Button>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    </Container>

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
