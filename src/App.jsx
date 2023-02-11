import { useState } from "react";
// import { EmailModal } from "./components/EmailModal/EmailModal";
import EmailModal from "./components/EmailModal/EmailModal";
import EMProvider from "./components/EmailModal/EMProvider";

import "./css/reset.css";
import "./css/styles.css";

export default function App() {
  const [counter, setCounter] = useState(7);

  const foohi = () => console.log("hi1we23");

  return (
    <EMProvider>
      <header className="page-header">
        <div className="logo">
          Berry
          <div className="logo__sub">by Jenny</div>
        </div>
      </header>
      <main className="content-area">
        <h1>Content Area</h1>
      </main>
      <EmailModal />
      <div className="email-modal" />
    </EMProvider>
  );
}
