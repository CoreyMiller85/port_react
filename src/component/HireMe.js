import React from "react";

const HireMe = () => {
  return (
    <div className="contact" id="contact">
      <h3>Let me create for you</h3>
      <div className="contact__content">
        <div className="contact__col-1">
          <form action="">
            <div className="contact__form-item">
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" />
            </div>
            <div className="contact__form-item">
              <label htmlFor="name">Email: </label>
              <input type="text" name="email" />
            </div>
            <div className="contact__form-item">
              <label htmlFor="Message">Message: </label>
              <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
          </form>
        </div>
        <div className="contact__content__col-2">
          <h4>You can also contact me on...</h4>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
