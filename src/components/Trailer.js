import Link from "next/link";
const Trailer = () => {
  return (
    <section>
      <div data-aos="fade-up" className="container">
        <div className="fn_cs_news container">
          <div className="news_part">
            <div className="left_items left_items2">
              <div className="blog__item">
                <div style={{ paddingTop: "56%", position: "relative" }}>
                  <iframe
                    src="https://player.vdocipher.com/v2/?otp=20160313versASE3239VovgdDDIfI3JUAyUasqAzC3UClDII3c1qL7AXWr9rmb0T&playbackInfo=eyJ2aWRlb0lkIjoiYmU0OTVkMzc5YzU5NDE4MzhkZTg5NTE4ZGI4MTY2MDEifQ==&player=lRb3vWGa7Ip9LIb5"
                    style={{
                      border: "0",
                      maxWidth: "100%",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      height: "100%",
                      width: "100%",
                      borderRadius:"10px 10px 0 0"
                    }}
                    allowFullScreen="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
                <div className="AOT2">
                  Attack on Titan: The Final Season Part 3 HINDI DUB TRAILER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Trailer;
