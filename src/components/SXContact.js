import { useState } from "react";
const SXContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [feedback, setFeedback] = useState("");

  async function handleForm(e) {
    e.preventDefault();
    await fetch("/api/form", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      //make sure to serialize your JSON body
      body: JSON.stringify({
        name: name,
        type: "contact",
        email: email,
        city: city,
        phone: phone,
        topic: topic,
        feedback: feedback,
      }),
    }).catch(err => {
      // catch them errors
      console.log(err);
    });
  }
  return (
    <section id="contact">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Contact Us"
          data-align="center"
          style={{ fontFamily: "font1" }}
        >
          Contact Us
        </h3>
        <div className="fn_cs_contact_info">
          <ul>
            <li>
              <div className="item">
                <p>
                  Duis suscipit egestas ullamcorper. Cras porta nulla et
                  tristique pellentesque. Praesent finibus mauris eu
                  sollicitudin interdum. Morbi et blandit quam. Donec vitae
                  massa purus. Curabitur nunc mauris, iaculis a nibh at,
                  ultricies sodales dolor.
                </p>
                <p>
                  Curabitur pharetra velit eget dignissim varius. In vulputate
                  elit at tortor pellentesque, non pulvinar neque consequat.
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Phone</h4>
                <h3>
                  <a href="tel:+770221770505">7717789081</a>
                </h3>
                <h4 className="lable">Email</h4>
                <h3>
                  <a href="mailto:frenifyteam@gmail.com">
                    kraniket123654@gmail.com
                  </a>
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Office</h4>
                <h3>New Delhi, India</h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="fn_cs_contact_form">
          <form
            onSubmit={handleForm}
            className="contact_form"
            id="contact_form"
            autoComplete="off"
          >
            <div className="input_list">
              <ul>
                <li>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onInput={({ target }) => {
                      setName(target.value);
                    }}
                    placeholder="Your Name *"
                  />
                </li>
                <li>
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onInput={({ target }) => {
                      setEmail(target.value);
                    }}
                    placeholder="Your Email *"
                  />
                </li>
                <li>
                  <input
                    id="tel"
                    type="text"
                    value={phone}
                    onInput={({ target }) => {
                      setPhone(target.value);
                    }}
                    placeholder="Your Phone (optional)"
                  />
                </li>
                <li>
                  <input
                    id="subject"
                    type="text"
                    value={topic}
                    onInput={({ target }) => {
                      setTopic(target.value);
                    }}
                    placeholder="Topic (optional)"
                  />
                </li>
                <li className="full">
                  <textarea
                    id="message"
                    placeholder="Your Message *"
                    defaultValue={""}
                    value={feedback}
                    onInput={({ target }) => {
                      setFeedback(target.value);
                    }}
                  />
                </li>
                <li className="full">
                  <div className="mw300">
                    <button
                      id="send_message"
                      href="#"
                      className="metaportal_fn_button full"
                    >
                      <span>Send Message</span>
                    </button>
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
export default SXContact;
