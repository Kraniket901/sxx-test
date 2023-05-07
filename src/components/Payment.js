import React from "react";
import { checkout } from "../../checkout";
import { Button } from "@nextui-org/react";

const Payment = () => {
  return (
    <div style={{margin:"2rem 0"}} id="donation">
      <h3
        className="fn__maintitle big"
        data-text="DONATE US"
        data-align="center"
        style={{
          fontFamily: "font1",
          margin: "4rem 0",
          textAlign: "center",
          width: "100%",
        }}
      >
        DONATE US
      </h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ width: "300px", margin:"0.5rem 0.3rem"}}>
          <img
            src="https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2023/03/attack-on-titan-the-founding-titan-explained-1.jpg"
            alt=""
            height="180px"
            onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1N4I1YSFDWmXpjvIqaR7TYou",
                      quantity: 1,
                    },
                  ],
                });
              }}
          />
          <Button
            style={{
              fontFamily: "font2",
              fontSize: "1.5rem",
              padding: "1rem",
              width: "300px",
              borderRadius:"0 0 10px 10px"
            }}
            color="secondary"
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N4I1YSFDWmXpjvIqaR7TYou",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            Founding Titan Donation
          </Button>
        </div>

        <div style={{ width: "300px",margin:"0.5rem 0.3rem" }}>
          <img
            src="https://www.cnet.com/a/img/resize/597f8167c5bc132e301df0e4052180b26b5e4c7d/hub/2022/01/07/18439ff0-d202-4d93-b233-3e203a7617fd/aot-f2-pv02-00-01-11-06-still075.jpg?auto=webp&fit=crop&height=675&width=1200"
            alt=""
            height="180px"
            onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1N4I3CSFDWmXpjvIQkoSklgs",
                      quantity: 1,
                    },
                  ],
                });
              }}
          />
          <Button
            style={{
              fontFamily: "font2",
              fontSize: "1.5rem",
              padding: "1rem",
              width: "300px",
              borderRadius:"0 0 10px 10px"
            }}
            color="secondary"
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N4I3CSFDWmXpjvIQkoSklgs",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            Attack Titan Donation
          </Button>
        </div>

        <div style={{ width: "300px",margin:"0.5rem 0.3rem" }}>
          <img
            src="https://sportshub.cbsistatic.com/i/2021/03/18/d0ce2cd3-b26c-4d36-871c-a66a2816cbc6/attack-on-titan-1247753.jpg"
            alt=""
            height="180px"
            onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1N4I4aSFDWmXpjvIvbcN0qxU",
                      quantity: 1,
                    },
                  ],
                });
              }}
          />
          <Button
            style={{
              fontFamily: "font2",
              fontSize: "1.5rem",
              padding: "1rem",
              width: "300px",
              borderRadius:"0 0 10px 10px"
            }}
            color="secondary"
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N4I4aSFDWmXpjvIvbcN0qxU",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            Armored Titan Donation
          </Button>
        </div>

        <div style={{ width: "300px",margin:"0.5rem 0.3rem" }}>
          <img
            src="https://imgix.bustle.com/inverse/b3/72/1a/d2/ea80/4938/b8e2/4b97bc7de761/the-beast-titan-was-introduced-at-the-beginning-of-season-2-but-very-little-is-known-about-him-stil.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
            alt=""
            height="180px"
            onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1N4I5zSFDWmXpjvImYoH1HXS",
                      quantity: 1,
                    },
                  ],
                });
              }}
          />

          <Button
            style={{
              fontFamily: "font2",
              fontSize: "1.5rem",
              padding: "1rem",
              width: "300px",
              borderRadius:"0 0 10px 10px"
            }}
            color="secondary"
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N4I5zSFDWmXpjvImYoH1HXS",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            Beast Titan Donation
          </Button>
        </div>

        <div style={{ width: "300px",margin:"0.5rem 0.3rem" }}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYzlmMzY5NjItMWI5Mi00ZDRlLTg3OTItYTNkY2U4MjYxYjQwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
            alt=""
            height="180px"
            onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1N4I7wSFDWmXpjvInYPZaFGl",
                      quantity: 1,
                    },
                  ],
                });
              }}
          />

          <Button
            style={{
              fontFamily: "font2",
              fontSize: "1.5rem",
              padding: "1rem",
              width: "300px",
              borderRadius:"0 0 10px 10px"
            }}
            color="secondary"
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N4I7wSFDWmXpjvInYPZaFGl",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            Female Titan Donation
          </Button>
        </div>

        <div style={{ width: "300px",margin:"0.5rem 0.3rem" }}>
          <img
            src="https://sportshub.cbsistatic.com/i/2021/03/18/2d1190cb-de5d-4c6f-b663-d0600678f0cc/attack-on-titan-season-4-war-hammer-titan-1253989.jpg"
            alt=""
            height="180px"
            onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1N4I9JSFDWmXpjvIYkqMFmyw",
                      quantity: 1,
                    },
                  ],
                });
              }}
          />

          <Button
            style={{
              fontFamily: "font2",
              fontSize: "1.5rem",
              padding: "1rem",
              width: "300px",
              borderRadius:"0 0 10px 10px"
            }}
            color="secondary"
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N4I9JSFDWmXpjvIYkqMFmyw",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            War Hammer Titan Donation
          </Button>
        </div>

        <div style={{ width: "300px",margin:"0.5rem 0.3rem" }}>
          <img
            src="https://staticg.sportskeeda.com/editor/2021/10/a6a5e-16352433462694-1920.jpg"
            alt=""
            height="180px"
            onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1N4IAWSFDWmXpjvI91fZtgR3",
                      quantity: 1,
                    },
                  ],
                });
              }}
          />

          <Button
            style={{
              fontFamily: "font2",
              fontSize: "1.5rem",
              padding: "1rem",
              width: "300px",
              borderRadius:"0 0 10px 10px"
            }}
            color="secondary"
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N4IAWSFDWmXpjvI91fZtgR3",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            Colossal Titan Donation
          </Button>
        </div>

        <div style={{ width: "300px",margin:"0.5rem 0.3rem" }}>
          <img
            src="https://www.thenewsfetcher.com/wp-content/uploads/2021/01/fa465df6a552855da45c2e7a4dd5db7c.jpg"
            alt=""
            height="180px"
            onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1N4ICHSFDWmXpjvIh6Nh5enw",
                      quantity: 1,
                    },
                  ],
                });
              }}
          />

          <Button
            style={{
              fontFamily: "font2",
              fontSize: "1.5rem",
              padding: "1rem",
              width: "300px",
              borderRadius:"0 0 10px 10px"
            }}
            color="secondary"
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N4ICHSFDWmXpjvIh6Nh5enw",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            Jaw Titan Donation
          </Button>
        </div>

        <div style={{ width: "300px",margin:"0.5rem 0.3rem" }}>
          <img
            src="https://fictionhorizon.com/wp-content/uploads/2022/07/CArt.jpg"
            alt=""
            height="180px"
            onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1N4ID4SFDWmXpjvI2MaepC2O",
                      quantity: 1,
                    },
                  ],
                });
              }}
          />

          <Button
            style={{
              fontFamily: "font2",
              fontSize: "1.5rem",
              padding: "1rem",
              width: "300px",
              borderRadius:"0 0 10px 10px"
            }}
            color="secondary"
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N4ID4SFDWmXpjvI2MaepC2O",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            Cart Titan Donation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
