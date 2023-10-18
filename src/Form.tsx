import "./stylesheets/Form.css";

function Form() {
  return (
    <>
      <div className="form-container">
        <form action="#" className="contact">
          <div className="name-container">
            <label htmlFor="name">Name </label>
            <input type="text" name="name" id="name" placeholder="Your name" />
          </div>
          <div className="email-container">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
            />
          </div>
          <div className="comment-container">
            <label htmlFor="comment">Comment </label>
            <textarea
              name="comment"
              rows={4}
              cols={50}
              placeholder="Enter your comment"
            />
          </div>
          <div className="button-container">
            <button type="submit" value="contact">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
