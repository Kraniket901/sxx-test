import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { checkout } from "../../checkout";
import Link from "next/link";

const Donation = () => {
  const { data: session } = useSession();
  const email = session?.user.email;
  const router = useRouter();

  // avatarList smh
  const avatarList = [
    {
      title: "Founding Titan Donation",
      price: "price_1N4I1YSFDWmXpjvIqaR7TYou",
      img: "https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2023/03/attack-on-titan-the-founding-titan-explained-1.jpg",
    },
    {
      title: "Attack Titan Donation",
      price: "price_1N4I3CSFDWmXpjvIQkoSklgs",
      img: "https://www.cnet.com/a/img/resize/597f8167c5bc132e301df0e4052180b26b5e4c7d/hub/2022/01/07/18439ff0-d202-4d93-b233-3e203a7617fd/aot-f2-pv02-00-01-11-06-still075.jpg?auto=webp&fit=crop&height=675&width=1200",
    },
    {
      title: "Armored Titan Donation",
      price: "price_1N4I4aSFDWmXpjvIvbcN0qxU",
      img: "https://sportshub.cbsistatic.com/i/2021/03/17/19d70e71-ca27-45d9-bcf0-9d3e376f1c82/attack-on-titan-armored-titan-1169286.jpg",
    },
    {
      title: "Beast Titan Donation",
      price: "price_1N4I5zSFDWmXpjvImYoH1HXS",
      img: "https://www.looper.com/img/gallery/zekes-beast-titan-powers-from-attack-on-titan-explained/intro-1620834206.jpg",
    },
    {
      title: "Female Titan Donation",
      price: "price_1N4I7wSFDWmXpjvInYPZaFGl",
      img: "https://m.media-amazon.com/images/M/MV5BYzlmMzY5NjItMWI5Mi00ZDRlLTg3OTItYTNkY2U4MjYxYjQwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    },
    {
      title: "War Hammer Titan Donation",
      price: "price_1N4I9JSFDWmXpjvIYkqMFmyw",
      img: "https://64.media.tumblr.com/d4fabd7059f82030d02abd34c6c8ac41/2923e80158c917f0-1c/s1280x1920/1ddfc898d49f431636132f0aae390bf95ce32700.png",
    },
    {
      title: "Colossal Titan Donation",
      price: "price_1N4IAWSFDWmXpjvI91fZtgR3",
      img: "https://staticg.sportskeeda.com/editor/2021/10/a6a5e-16352433462694-1920.jpg",
    },
    {
      title: "Jaw Titan Donation",
      price: "price_1N4ICHSFDWmXpjvIh6Nh5enw",
      img: "https://wallpapercave.com/wp/wp8649124.jpg",
    },
    {
      title: "Cart Titan Donation",
      price: "price_1N4ID4SFDWmXpjvI2MaepC2O",
      img: "https://fictionhorizon.com/wp-content/uploads/2022/07/CArt.jpg",
    },
  ];

  // handle avatar list
  async function handleAvatar(img) {
    await fetch("/api/avatar", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      //make sure to serialize your JSON body
      body: JSON.stringify({
        email: email,
        img: img,
      }),
    })
      .then(res => {
        //do something awesome that makes the world a better place
        router.push("/");
        setTimeout(() => {
          router.reload();
        }, 500);
      })
      .catch(err => {
        // catch them errors
        console.log(err);
      });
  }

  return (
    <div className="container">

    <Grid.Container gap={1} justify="flex-start" id="donation">
              <h3
              
          className="fn__maintitle big"
          data-text="DONATE US"
          data-align="center"
          style={{ fontFamily:"font1", margin:"4rem", textAlign:"center", width:"100%" }}
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

          >
            <button
            onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: item.price,
                      quantity: 1,
                    },
                  ],
                });
              }}
            >
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
                    <Text h4 size={20} css={{ m: 0 }} style={{fontFamily:"font2"}}>
                      {item.title}
                    </Text>
                    {/* <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {item.price}
                  </Text> */}
                  </Row>
                </Card.Footer>
              </>
            </button>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
          
    </div>
  );
};

export default Donation;
