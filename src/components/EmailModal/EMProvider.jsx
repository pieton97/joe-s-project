import React, { useContext, useState } from 'react';
import Cookies from 'js-cookie';

export const StateContext = React.createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export default function EMProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModalAction = () => {
    Cookies.set('modalOpenedBefore', 'true', { expires: 7 });
    setModalOpen(true);
  };
  const closeModalAction = () => {
    setModalOpen(false);
  };

  const [emailInput, setEmailInput] = useState('');
  const handleEmailInput = e => {
    setEmailInput(e.target.value);
  };

  const [showEmailError, setShowEmailError] = useState(false);
  const checkForEmail = e => {
    // onblur
    const emailIsValid = email => {
      return /\S+@\S+\.\S+/.test(email);
    };
    if (!emailIsValid(emailInput)) {
      setShowEmailError(true);
    }
  };
  const removeErrorMessage = e => {
    // onfocus
    setShowEmailError(false);
  };

  const [formCompleted, setFormCompleted] = useState(false);
  const submittedForm = e => {
    e.preventDefault();
    if (showEmailError === false && emailInput.length > 5) {
      setFormCompleted(true);
      setTimeout(() => {
				setModalOpen(false)
				// setFormCompleted(false)
			}, 3000);
    }
  };

  return (
    <StateContext.Provider
      value={{
        modalOpen,
        emailInput,
        handleEmailInput,
        openModalAction,
        closeModalAction,
        checkForEmail,
        removeErrorMessage,
        showEmailError,
        formCompleted,
        submittedForm
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
