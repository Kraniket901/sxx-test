import { Card, Grid, Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { checkout } from "../../checkout";
import Link from "next/link";
import { Modal, Button, Image, Text } from "@nextui-org/react";
import React from "react";
import { useState } from "react";

const Donation = () => {

  const [cno , setcno] = useState(-1);
  const handler = (i) => setcno(i);

  const closeHandler = () => {
    setcno(-1);
    console.log("closed");
  };
  // avatarList smh
  const avatarList = [
    { 
      title: "Founding Titan Donation",
      price: "price_1N5n6WSFDWmXpjvIukkLLJrq",
      img: "img/titans/Founding_Titan.webp",
    },
    { 
      title: "Attack Titan Donation",
      price: "price_1N5n7eSFDWmXpjvIEoXtnekv",
      img: "img/titans/Attack_Titan.webp",
    },
    { 
      title: "Armored Titan Donation",
      price: "price_1N5nA6SFDWmXpjvIKh6EduWI",
      img: "img/titans/Armored_Titan.webp",
    },
    { 
      title: "Female Titan Donation",
      price: "price_1N4I7wSFDWmXpjvInYPZaFGl",
      img: "img/titans/Female_Titan.webp",
    },
    { 
      title: "Beast Titan Donation",
      price: "price_1N5nBxSFDWmXpjvIuWaxRH49",
      img: "img/titans/Beast_Titan.webp",
    },
    { 
      title: "Colossal Titan Donation",
      price: "price_1N4IAWSFDWmXpjvI91fZtgR3",
      img: "img/titans/Colossal_Titan.webp",
    },
    { 
      title: "Jaw Titan Donation",
      price: "price_1N4ICHSFDWmXpjvIh6Nh5enw",
      img: "img/titans/Jaw_Titan.webp",
    },
    { 
      title: "Cart Titan Donation",
      price: "price_1N4ID4SFDWmXpjvI2MaepC2O",
      img: "img/titans/Cart_Titan.webp",
    },
    {
      title: "War Hammer Titan Donation",
      price: "price_1N5nE2SFDWmXpjvIArqZ5EeJ",
      img: "img/titans/War_Hammer.webp",
    },
  ];

  return (
    <div data-aos="fade-up" className="container">
      <Grid.Container gap={1} justify="flex-start" id="donation">
        <h3
          className="fn__maintitle big AnimePollTitle"
          data-text="DONATE US"
          data-align="center"
          style={{
            fontFamily: "font1",
            textAlign: "center",
            width: "100%",
          }}
        >
          DONATE US
        </h3>
        {avatarList.map((item, index) => (
          <Grid xs={12} sm={3} key={index}>
            <Card
              auto
              isPressable
              css={{
                margin: "1rem .2rem",
                "@smMax": {
                  margin: ".1rem",
                  // bg: '$yellow100',
                },
              }}
              className="donationCard"
            >
              <div>
                <button onClick={()=>{handler(index)}}>
                  <>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        src={item.img}
                        objectFit="cover"
                        width="100%"
                        // height={140}
                        alt={item.title}
                      />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                      <Row justify="center" align="center">
                        <Text
                          h4
                          size={20}
                          css={{ m: 0 }}
                          style={{ fontFamily: "font2" }}
                        >
                          {item.title}
                        </Text>
                      </Row>
                    </Card.Footer>
                  </>
                </button>
                <Modal
                  scroll
                  width="600px"
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                  open={(cno == index)?true:false} onClose={closeHandler}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      {item.title}
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Image
                    showSkeleton
                    src={item.img}
                    width={400}
                    height={400}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      auto
                      flat
                      color="error"
                      onPress={closeHandler}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default Donation;