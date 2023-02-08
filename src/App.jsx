import { useState } from "react";
import NestedCompTest from "./components/NestedCompTest";
import Homepage from "./pages/home/homepage";

import "./css/reset.css";
import "./css/styles.css";

export default function App() {
  const [counter, setCounter] = useState(7);

  const foohi = () => console.log("hi1we23");

  return (
    <>
      <header className="page-header">
        <div className="logo">
          Berry
          <div className="logo__sub">by Jenny</div>
        </div>
      </header>
      <main className="content-area">
        <h1>Content Area</h1>
      </main>
      <section className="email-modal">
        <div className="email-modal__close-btn">
          <i className="gg-close" />
        </div>
        <div className="email-modal__container">
          <div className="email-modal__info">
            <div className="logo">
              Berry
              <div className="logo__sub">by Jenny</div>
            </div>
            <h2>Don't miss this chance!</h2>
            <p className="email-modal__message">
              Join our amazing community of more than <span className="email-modal__highlight-text">300,000 woman</span> who love fashion and receive <span className="email-modal__highlight-text">notifications, discounts, and our award winning newsletter.</span>
            </p>
            <div className="email-modal__error-message">Sorry this is not a valid email</div>
            <div className="email-modal__form-group">
              <input type="email" className="email-modal__input" placeholder="youremail@mail.com" />
              <button className="email-modal__button">Send</button>
            </div>
            <div className="email-modal__decline-offer">Sorry, I'm not interested</div>
          </div>
          <div className="email-modal__side-img">
            <img src="./assets/pexels-photo-4462782.jpeg" />
          </div>
          <div className="email-thank">
            <div className="email-thank__title">Thank You</div>
            <p className="email-thank__message">check your email we sent you some instructions... by the way welcome to the community!</p>
          </div>
        </div>
      </section>
      <div className="email-modal" />
    </>
  );
}
