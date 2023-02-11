import React, { useEffect } from 'react';
import { useStateContext } from './EMProvider';
import Cookies from 'js-cookie';

export default function EmailModal() {
  const stateStore = useStateContext();

  useEffect(() => {
    document.body.addEventListener('mouseleave', () => {
      if (Cookies.get("modalOpenedBefore") !== 'true') {
				stateStore.openModalAction();
      }
    });
  }, []);

  return (
    <section className={`email-modal ${stateStore.modalOpen ? 'email-modal--visible' : ''}`}>
      <div className="email-modal__close-btn" onClick={stateStore.closeModalAction}>
        <i className="gg-close" />
      </div>
      <div className="email-modal__container">
        <form className="email-modal__info" onSubmit={stateStore.submittedForm}>
          <div className="logo">
            Berry
            <div className="logo__sub">by Jenny</div>
          </div>
          <h2>Don't miss this chance!</h2>
          <p className="email-modal__message">
            Join our amazing community of more than <span className="email-modal__highlight-text">300,000 woman</span>{' '}
            who love fashion and receive{' '}
            <span className="email-modal__highlight-text">
              notifications, discounts, and our award winning newsletter.
            </span>
          </p>
          <div
            className={`email-modal__error-message ${
              stateStore.showEmailError ? 'email-modal__error-message--active' : ''
            }`}
          >
            Sorry this is not a valid email
          </div>
          <div className="email-modal__form-group">
            <input
              type="email"
              className="email-modal__input"
              placeholder="youremail@mail.com"
              value={stateStore.emailInput}
              onChange={stateStore.handleEmailInput}
              onBlur={stateStore.checkForEmail}
              onFocus={stateStore.removeErrorMessage}
            />
            <button type='submit' className="email-modal__button">Send</button>
          </div>
          <div className="email-modal__decline-offer" onClick={stateStore.closeModalAction}>
            Sorry, I'm not interested
          </div>
        </form>
        <div className="email-modal__side-img">
          <img src="img/pexels-photo-4462782.jpeg" />
        </div>
        <div className={`email-thank ${stateStore.formCompleted ? 'email-thank--success' : ''}`}>
          <div className="email-thank__title">Thank You</div>
          <p className="email-thank__message">
            check your email we sent you some instructions... by the way welcome to the community!
          </p>
        </div>
      </div>
    </section>
  );
}
