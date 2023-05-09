import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
import React, { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { Button } from "@nextui-org/react";
import axios from "axios";

const SXUpcomingProject = () => {
  const [vote, setVote] = useState("Project 00");
  const [projects, setProjects] = useState([]);
  const [voted, setVoted] = useState(false);
  const { data: session } = useSession();
  useEffect(() => {
    axios
      .get("/api/project")
      .then(res => res.data)
      .then(res => setProjects(res))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (session) {
      projects.map(item => {
        const phase = item.phase;
        const hasVoted = item.votes.find(user => user === session.user.email);
        if (hasVoted) {
          setVoted(true);
          setVote(phase);
        }
      });
    }
  }, [session]);

  const handleVote = (phase, projectId) => {
    // console.log(phase, projectId);
    if (session) {
      if (!voted) {
        setVote(phase);
        fetch("/api/project", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          //make sure to serialize your JSON body
          body: JSON.stringify({
            projectId: projectId,
          }),
        }).catch(err => {
          // catch them errors
          console.log(err);
        });
      }
    } else {
      signIn("google");
    }
  };
  return (
    <>
      <section id="upcoming_projects">
        <div className="container" style={{ paddingTop: "1rem" }}>
          <h3
            className="fn__maintitle big"
            data-text="UPCOMING PROJECTS"
            data-align="center"
            style={{ fontFamily: "font1", paddingBottom: "1rem" }}
          >
            UPCOMING PROJECTS
          </h3>
          <div className="fn_cs_roadmap">
            <div className="slider_holder">
              <Swiper {...roadMapProps} className="swiper-container">
                <div className="swiper-wrapper">
                  {/* <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 02</span>
                    <div className="item_in">
                      <img
                        src="/img/upcoming/graveOfTheFireflies.webp"
                        alt="graveOfTheFireflies"
                      />
                      <p className="date">IMDB - 8.5</p>
                      <h3 className="title">Grave of the Fireflies</h3>
                      <p className="desc">
                        At the peak of World War II, Seita and Setsuko's mother
                        died from severe burns after their house was bombed.
                        Seita, a teenage boy, and his younger sister Setsuko are
                        left without a guardian and do their best to survive on
                        their own in this scary world.
                      </p>
                      <Button
                        type="submit"
                        onClick={() => {
                          setVote(1);
                        }}
                        color={Voted == 1 ? "gradient" : ""}
                        auto
                      >
                        {Voted == 1 ? "Thanks for Vote" : "Vote"}
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 03</span>
                    <div className="item_in">
                      <img
                        src="/img/upcoming/princessMononoke.webp"
                        alt="princessMononoke"
                      />
                      <p className="date">IMDB - 8.4</p>
                      <h3 className="title">Princess Mononoke</h3>
                      <p className="desc">
                        On a journey to find the cure for a Tatarigami's curse,
                        Ashitaka finds himself in the middle of a war between
                        the forest gods and Tatara, a mining colony. In this
                        quest he also meets San, the Mononoke Hime.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 04</span>
                    <div className="item_in">
                      <img
                        src="/img/upcoming/howlsMovingCastle.webp"
                        alt="howlsMovingCastle"
                      />
                      <p className="date">IMDB - 8.2</p>
                      <h3 className="title">Howl's Movie Castle</h3>
                      <p className="desc">
                        When an unconfident young woman is cursed with an old
                        body by a spiteful witch, her only chance of breaking
                        the spell lies with a self-indulgent yet insecure young
                        wizard and his companions in his legged, walking castle.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 05</span>
                    <div className="item_in">
                      <img
                        src="/img/upcoming/myNeighbourTotoro.webp"
                        alt="myNeighbourTotoro"
                      />
                      <p className="date">IMDB - 8.2</p>
                      <h3 className="title">My Neighbour Totoro</h3>
                      <p className="desc">
                        For anyone who knows even a little bit of anime movies,
                        it won't come as a surprise to find a few Studio Ghibli
                        movies listed here, and even less of a surprise to see
                        that most of those Studio Ghibli films were directed by
                        Hayao Miyazaki.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 06</span>
                    <div className="item_in">
                      <img
                        src="/img/upcoming/wolfChildren.webp"
                        alt="wolfChildren"
                      />
                      <p className="date">IMDB - 8.1</p>
                      <h3 className="title">Wolf Children</h3>
                      <p className="desc">
                        After her werewolf lover unexpectedly dies in an
                        accident while hunting for food for their children, a
                        young woman must find ways to raise the werewolf son and
                        daughter that she had with him while keeping their trait
                        hidden from society.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 07</span>
                    <div className="item_in">
                      <img
                        src="/img/upcoming/neonGenesisEvangelion.webp"
                        alt="neonGenesisEvangelion"
                      />
                      <p className="date">IMDB - 8.1</p>
                      <h3 className="title">
                        Neon Genesis Evangelion: The end of Evangelion
                      </h3>
                      <p className="desc">
                        Despite its many reboots, retelling and alternative
                        endings that make it a little tough to follow, Neon
                        Genesis Evangelion is one of the most popular mecha
                        series, and for good reasons.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 08</span>
                    <div className="item_in">
                      <img
                        src="/img/upcoming/nausicaaOfTheValleyOfTheWind.webp"
                        alt="nausicaaOfTheValleyOfTheWind"
                      />
                      <p className="date">IMDB - 8.1</p>
                      <h3 className="title">
                        Nausicaa of the Valley of the Wind
                      </h3>
                      <p className="desc">
                        Released in 1984, Nausicaa of the Valley of the Wind
                        tells the touching story of a young princess who
                        dedicates her life to better understanding the world she
                        lives in.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 09</span>
                    <div className="item_in">
                      <img
                        src="/img/upcoming/castleInTheSky.webp"
                        alt="castleInTheSky"
                      />
                      <p className="date">IMDB - 8.0</p>
                      <h3 className="title">Castle in the Sky</h3>
                      <p className="desc">
                        Castle in the Sky was a technical marvel in the '80s
                        that brings awe-inspiring sites into the movie-watching
                        experience. It tells the story of a boy and a girl in
                        the 19th century and their hope to find the titular
                        castle in the sky.
                      </p>
                    </div>
                  </div>
                </SwiperSlide> */}

                  {/* Mohit was here >:)*/}
                  {projects.map(item => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                      <div className="item">
                        <span className="icon" />
                        <span className="phase">{item.phase}</span>
                        <div className="item_in">
                          <img src={item.src} alt={item.alt} />
                          <p className="date">IMDB - {item.rating}</p>
                          <h3 className="title">{item.title}</h3>
                          <p className="desc">{item.desc}</p>
                          <Button
                            type="submit"
                            onClick={() => handleVote(item.phase, item.id)}
                            color={vote === item.phase ? "gradient" : ""}
                            auto
                          >
                            {vote === item.phase ? "Thanks for Vote" : "Vote"}
                          </Button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SXUpcomingProject;
