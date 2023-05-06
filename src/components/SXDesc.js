import Link from "next/link";
const SXDesc = () => {
  return (
    <section id="shinnextream">
      <div className="container">
        <div className="fn_cs_news">
          <div className="news_part">
            <div className="left_items">
              <div className="blog__item">
                <div className="image">
                  <Link href="/blog-single">
                    <a>
                      <img src="/img/Shinnex_Banner.png" alt="" />
                    </a>
                  </Link>
                  <div className="blog-text">
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SXDesc;
