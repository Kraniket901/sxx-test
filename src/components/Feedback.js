const Feedback = () => {
    return (
      <section id="contact" style={{margin:"1rem", padding:0}}>
        <div className="container">
          <h3
            className="fn__maintitle big"
            data-text="Give Your Feedback"
            data-align="center"
            style={{fontFamily:"font1", margin:"4rem"}}
          >
            Give Your Feedback
          </h3>
          <div className="fn_cs_contact_form">
            <form
              action="/"
              method="post"
              className="contact_form"
              id="contact_form"
              autoComplete="off"
            >
              <div className="input_list">
                <ul>
                  <li>
                    <input id="name" type="text" placeholder="Your Name *" />
                  </li>
                  <li>
                    <input id="email" type="text" placeholder="Your City" />
                  </li>
                  <li>
                    <input
                      id="tel"
                      type="text"
                      placeholder="Your Phone (optional)"
                    />
                  </li>
                  <li>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Topic (optional)"
                    />
                  </li>
                  <li className="full">
                    <textarea
                      id="message"
                      placeholder="Your Valuable Feedback *"
                      defaultValue={""}
                    />
                  </li>
                  <li className="full">
                    <div className="mw300">
                      <a
                        id="send_message"
                        href="#"
                        className="metaportal_fn_button full"
                      >
                        <span>Send</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="returnmessage"
                data-success="Your message has been received, We will contact you soon."
              />
              <div className="empty_notice">
                <span>! Please Fill Required Fields !</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  export default Feedback;
  