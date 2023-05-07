import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import avatarList from "../src/lib/avatarList";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { getSession, useSession } from "next-auth/react";

const Avatar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // handle avatar list
  async function handleAvatar(img) {
    const email = session?.user.email;
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

  if (session)
    return (
      <Grid.Container gap={1} justify="flex-start">
        <h1
          style={{ fontSize: "4rem", cursor: "pointer", display: "flex" }}
          onClick={() => router.back()}
        >
          ←
        </h1>
        <h3
          className="fn__maintitle big"
          data-text="CHOOSE YOUR AVATAR"
          data-align="center"
          style={{
            fontFamily: "font1",
            marginBottom: "1rem",
            textAlign: "center",
            width: "100%",
          }}
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

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session)
    return {
      props: {
        session: await getServerSession(context.req, context.res, authOptions),
      },
    };
  else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
