import Link from "next/link";
import { useEffect } from "react";

const Collection = () => {
  useEffect(() => {
    const collection = document.querySelector(".fn_cs_collection");
    var items = collection.querySelectorAll(".item");
    var itemsLength = items.length;
    setInterval(function () {
      var numberOne = Math.floor(Math.random() * itemsLength);
      var numberTwo = Math.floor(Math.random() * itemsLength);

      while (numberTwo === numberOne) {
        numberTwo = Math.floor(Math.random() * itemsLength);
      }
      var firstDiv = items[numberOne];
      var secondDiv = items[numberTwo];
      var firstImage = firstDiv.querySelector("input").value;
      var secondImage = secondDiv.querySelector("input").value;
      firstDiv.classList.add("ready");
      secondDiv.classList.add("ready");
      // console.log(firstDiv.querySelector("input").value == firstDiv);
      setTimeout(function () {
        // console.log(secondDiv.querySelector("input").value == firstDiv);
        // firstDiv.querySelector("input").value == secondImage;
        // firstDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + secondImage + ")";
        // // secondDiv.querySelector("input").val(firstImage);
        // secondDiv.querySelector("input").value == firstDiv;
        // console.log(secondDiv.querySelector("input").value);
        // secondDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + firstImage + ")";

        firstDiv.classList.remove("ready");
        secondDiv.classList.remove("ready");
      }, 500);
    }, 2000);
  }, []);

  return (
    <section id="avatars">
      <div className="container">
      <h3
          className="fn__maintitle big"
          data-text="OUR AVATARS"
          data-align="center"
          style={{ fontFamily:"font1", margin:"4rem 0" }}
        >
         OUR AVATARS
        </h3>
        <div className="fn_cs_collection">
          <div className="collection_top">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/wavatar/Ereh.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/wavatar/Ereh.webp" />
            </div>

            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/wavatar/Armin.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/wavatar/Armin.webp" />
            </div>

            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/wavatar/Hange.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/wavatar/Hange.webp"/>
            </div>

            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/wavatar/Levi.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/wavatar/Levi.webp"/>
            </div>
          </div>
          <div className="collection_bottom">

            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/wavatar/Mikasa.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/wavatar/Mikasa.webp" />
            </div>
            
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/wavatar/Riner.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/wavatar/Riner.webp" />
            </div>

            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/wavatar/Erwin.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/wavatar/Erwin.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/wavatar/Annie.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/wavatar/Annie.webp" />
            </div>
          </div>
      </div>
              
      </div>
    </section>
  );
};
export default Collection;
