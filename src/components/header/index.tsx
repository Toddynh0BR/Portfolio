import { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../assets/MA.svg";

interface OnTopProps {
  $OnTop?: boolean;
}

interface FocusProps {
  focused: string;
}

export const Container = styled.header<OnTopProps>`
  height: ${(props) => (props.$OnTop ? "10rem" : "7rem")};
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.76) 56%,
    rgba(0, 0, 0, 0.2) 95%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 2rem 10rem 0 10rem;
  padding-top: ${(props) => (props.$OnTop ? "2rem" : "0rem")};
  transition: 0.3s ease-in-out;
  position: fixed;
  z-index: 10;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 7rem;
    width: auto;
  }

  .topics {
    display: flex;
    gap: 4.4rem;
    span {
      font-family: "Syne", sans-serif;
      font-size: 1.8rem;
      color: #fff;
      transition: 0.3s ease-in-out;
      &:hover {
        cursor: pointer;
        color: #ff0000;
      }
    }
    .focus {
      color: #ff0000;
    }
  }

  button {
    height: 5.1rem;
    background-color: #030303ff;
    border: 1px solid #333333;
    border-radius: 1.6rem;
    font-family: "Syne", sans-serif;
    font-size: 1.8rem;
    color: #fff;
    padding: 0 2rem;
    transition: 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      filter: brightness(180%);
    }
  }
`;

export function Header({ focused }: FocusProps) {
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setOnTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container $OnTop={onTop}>
      <img src={Logo} alt="Logo MA" />
      <div className="topics">
        <a href="#home">
          <span className={focused === "home" ? "focus" : ""}>Home</span>
        </a>
        <a href="#about">
          <span className={focused === "about" ? "focus" : ""}>Sobre Mim</span>
        </a>
        <a href="#projects">
          <span className={focused === "projects" ? "focus" : ""}>Projetos</span>
        </a>
        <a href="#depoiments">
          <span className={focused === "depoiments" ? "focus" : ""}>
            Depoimentos
          </span>
        </a>
        <a href="#faq">
          <span className={focused === "faq" ? "focus" : ""}>FAQ</span>
        </a>
        <a href="#contact">
          <span className={focused === "contact" ? "focus" : ""}>Contato</span>
        </a>
      </div>
      <a target="_blank" href="https://api.whatsapp.com/send/?phone=5581999704376&text=Ol%C3%A1+Matheus%21+Vim+pelo+seu+portf%C3%B3lio+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0">
      <button>Entre em contato via Whatsapp</button>
      </a>
    </Container>
  );
}
