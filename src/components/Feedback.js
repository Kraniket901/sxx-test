import { useState } from "react";
const Feedback = () => {
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
        type: "feedback",
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
    <section id="contact" style={{ margin: "1rem", padding: 0 }}>
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Give Your Feedback"
          data-align="center"
          style={{ fontFamily: "font1", margin: "4rem" }}
        >
          Give Your Feedback
        </h3>
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
                    id="city"
                    type="text"
                    value={city}
                    onInput={({ target }) => {
                      setCity(target.value);
                    }}
                    placeholder="Your City"
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
                    placeholder="Your Valuable Feedback *"
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
                      className="metaportal_fn_button full"
                    >
                      <span>Send</span>
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
export default Feedback;
