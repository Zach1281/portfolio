import "./stylesheets/Contact.css";
import Nav from "./Nav";
import Form from "./Form";

function Contact() {
  return (
    <>
      <Nav />
      <main>
        <div className="contact-me">
          <div className="title contact-me">
            <h1>Reach Out</h1>
          </div>
          <Form />
        </div>
      </main>
    </>
  );
}

export default Contact;
