import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from 'next/router'


const avatar = () => {
    const router = useRouter();
    const handleClick = (e) => {
        router.push('/');
        setTimeout(() => {
            router.reload();
        }, 500)
        // router.reload();
    }

    const list = [
        {
          title: "Annie",
          img: "/img/avatar/Annie.png",
          price: "$5.50",
        },
        {
          title: "Armin",
          img: "/img/avatar/Armin.png",
          price: "$5.50",
        },
        {
          title: "Eren",
          img: "/img/avatar/Ereh.png",
          price: "$3.00",
        },
        {
          title: "Erwin",
          img: "/img/avatar/Erwin.png",
          price: "$10.00",
        },
        {
          title: "Hange",
          img: "/img/avatar/Hange.png",
          price: "$5.30",
        },
        {
          title: "Jean",
          img: "/img/avatar/Jean.png",
          price: "$15.70",
        },
        {
          title: "Levi",
          img: "/img/avatar/Levi.png",
          price: "$8.00",
        },
        {
          title: "Mikasa",
          img: "/img/avatar/Mikasa.png",
          price: "$7.50",
        },
        {
          title: "Riner",
          img: "/img/avatar/Riner.png",
          price: "$12.20",
        },
      ];

    return (
        // <div>avatar
        //     <button onClick={handleClick}>Reload</button>
        // </div>
        <Grid.Container gap={1} justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card auto isPressable css={
                {
                    margin: "1rem 2rem",
                    '@smMax': {
                        margin: ".5rem",
                        // bg: '$yellow100',
                      },
                }
                }>
              <Card.Body css={{ p: 0 }}>
                <button onClick={handleClick}>
                <Card.Image 
                  src={item.img}
                  objectFit="cover"
                  width="100%"
                  // height={140}
                  alt={item.title}
                  />
                </button>
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row justify="center" align="center">
                  <Text h4 size={24} css={{ m: 0 }}>{item.title}</Text>
                  {/* <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {item.price}
                  </Text> */}
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
        
    )
}

export default avatar