import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Avatar = () => {
  const { data: session } = useSession();
  const email = session?.user.email;
  const router = useRouter();

  // avatarList smh
  const avatarList = [
    {
      title: "Annie",
      img: "https://i.postimg.cc/pdT1BhdB/Annie.webp",
    },
    {
      title: "Armin",
      img: "https://i.postimg.cc/Bbxhv2hJ/Armin.webp",
    },
    {
      title: "Eren",
      img: "https://i.postimg.cc/d3MHv5jW/Ereh.webp",
    },
    {
      title: "Erwin",
      img: "https://i.postimg.cc/vHrj8wj5/Erwin.webp",
    },
    {
      title: "Hange",
      img: "https://i.postimg.cc/yx9GSMN4/Hange.webp",
    },
    {
      title: "Jean",
      img: "https://i.postimg.cc/CKQrrhBp/Jean.webp",
    },
    {
      title: "Levi",
      img: "https://i.postimg.cc/L8VrDF3m/Levi.webp",
    },
    {
      title: "Mikasa",
      img: "https://i.postimg.cc/4dHLrDV7/Mikasa.webp",
    },
    {
      title: "Riner",
      img: "https://i.postimg.cc/y69pnz72/Riner.webp",
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
    <Grid.Container gap={1} justify="flex-start">
      <h1 style={{fontSize:"4rem", cursor:"pointer", display:"flex"}} onClick={() => router.back()}>←</h1>
              <h3
              
          className="fn__maintitle big"
          data-text="CHOOSE YOUR AVATAR"
          data-align="center"
          style={{ fontFamily:"font1", marginBottom:"1rem", textAlign:"center", width:"100%" }}
        >
         CHOOSE YOUR AVATAR
        </h3>
      {avatarList.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card
            auto
            isPressable
            css={{
              margin: "1rem 2rem",
              "@smMax": {
                margin: ".5rem",
                // bg: '$yellow100',
              },
            }}
          >
            <button
              onClick={() => {
                handleAvatar(item.img);
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
                    <Text h4 size={24} css={{ m: 0 }}>
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
  );
};

export default Avatar;