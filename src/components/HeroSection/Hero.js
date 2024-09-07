import React from "react";
import { useAppContext } from "../../store/AppContext";
import "./Hero.css";

export const Hero = () => {
  const { state, setMessage } = useAppContext();

  const handleToggleMessage = () => {
    const newMessage =
      state.message === "Hello, World!"
        ? "Welcome to My Company!"
        : state.message === "Welcome to My Company!"
        ? "This means the store is working correctly."
        : "Hello, World!";
    setMessage(newMessage);
  };

  return (
    <section className="hero-container">
      <div>
        <h1>
          {state.message ||
            "This is the hero section for your company website."}
        </h1>
        <button onClick={handleToggleMessage}>Toggle Message</button>
      </div>
    </section>
  );
};
