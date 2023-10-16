import "./stylesheets/Contact.css";
import Nav from "./Nav";

function Contact() {
  return (
    <>
      <Nav />
      <main>
        <div className="contact-me">
          <div className="title contact">
            <h1>Reach Out</h1>
          </div>
          <form action="POST"></form>
        </div>
      </main>
    </>
  );
}

export default Contact;
