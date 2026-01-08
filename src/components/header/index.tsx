import { useState, useEffect, useRef  } from "react";
import styled from "styled-components";

import { HiMenu } from "react-icons/hi";
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

  svg {
   display: none;
  }

  .menu {
    display: none;
  }

  @media screen and (max-width: 490px) {
    height: ${(props) => (props.$OnTop ? "7rem" : "7rem")};
    padding-top: ${(props) => (props.$OnTop ? "2rem" : "2rem")};
    padding: 1rem 2rem;

    .topics {
      display: none;
    }

    a {
      display: none;
   
    }

    img {
     height: 5rem;
    }

    .menuBtn {
      display: flex;
    }


    .menu {
      height: 85vh;
      width: 100%;

      background: rgba(0, 0, 0, 0.4); 
      inset: 0;
      backdrop-filter: blur(8px); 
      -webkit-backdrop-filter: blur(8px); 
      
      flex-direction: column; 
      justify-content: space-between;
      align-items: center;
      display: flex;
      
      position: fixed;
      z-index: 9999;
      left: 0;
      top: 0;

      border-bottom: 1px solid #ff000052;
      border-radius: 0 0 2rem 2rem;
      padding: 4rem 2rem 3rem 2rem;

      transition: .5s ease-in-out;

      img {
       height: 9rem;
       width: auto;
      }
            a {
          display: block;
        }

      .topicsM {
        height: fit-content;
        width: fit-content;

        flex-direction: column;
        align-items: center;
        display: flex;
        gap: 3rem;

  

        a {
          display: block;
        }

        span {
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem;
          color: #C1C1C1;

          user-select: none;
        }
        .focus {
         color: #ff0000;
        }
      }

      .whatBTN {
       height: 5rem;
       width: 100%;

       background-color: #232323;
       border-radius: 1.6rem;

       justify-content: center;
       align-items: center;
       display: flex;

       font-family: 'Syne', sans-serif;
       font-size: 1.6rem;
       color: #fff;

       transition: .3s ease-in-out;

       &:hover {
        filter: brightness(60%);
        cursor: pointer;
       }
      }
    }

    .closed {
      top: -100%;
    }

    position: fixed;
    top: 0;
    .btnWhat {
      width: 100%;
    }
  }
`;

export function Header({ focused }: FocusProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [onTop, setOnTop] = useState(true);

  const divRef = useRef<HTMLDivElement | null>(null);
  const startY = useRef<number | null>(null);
  const currentY = useRef<number | null>(null);

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
  startY.current = e.touches[0].clientY;
  };

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    currentY.current = e.touches[0].clientY;
  };

  function handleTouchEnd() {
   if (startY.current === null || currentY.current === null) return;

   const distance = startY.current - currentY.current;

   // 🔥 swipe para cima (threshold)
   if (distance > 60) {
     setMenuOpen(false);
     document.body.style.overflow = "auto";
   }

   startY.current = null;
   currentY.current = null;
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (!divRef.current) return;

      if (!divRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
        document.body.style.overflow = "auto";
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setOnTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Container $OnTop={onTop}>
      <img src={Logo} alt="Logo MA" />
      <HiMenu className="menuBtn" onClick={()=> {setMenuOpen(true); document.body.style.overflow = "hidden";}}  size={40} color="#ff0000"/>

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


        <div 
         ref={divRef} 
         className={menuOpen ? 'menu' : 'menu closed'}
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}
        >
         <img src={Logo} alt="" />
         
         <div className="topicsM">
          <a href="#home" onClick={()=> {setMenuOpen(false); document.body.style.overflow = "auto";}}>
           <span className={focused === "home" ? "focus" : ""}>Home</span>
          </a>
          <a href="#about" onClick={()=> {setMenuOpen(false); document.body.style.overflow = "auto";}}>
            <span className={focused === "about" ? "focus" : ""}>Sobre Mim</span>
          </a>
          <a href="#projects" onClick={()=> {setMenuOpen(false); document.body.style.overflow = "auto";}}>
            <span className={focused === "projects" ? "focus" : ""}>Projetos</span>
          </a>
          <a href="#depoiments" onClick={()=> {setMenuOpen(false); document.body.style.overflow = "auto";}}>
            <span className={focused === "depoiments" ? "focus" : ""}>Depoimentos</span>
          </a>
          <a href="#faq" onClick={()=> {setMenuOpen(false); document.body.style.overflow = "auto";}}>
            <span className={focused === "faq" ? "focus" : ""}>FAQ</span>
          </a>
          <a href="#contact" onClick={()=> {setMenuOpen(false); document.body.style.overflow = "auto";}}>
            <span className={focused === "contact" ? "focus" : ""}>Contato</span>
          </a>
         </div>

         <a 
         className="btnWhat"
          target="_blank" 
          href="https://api.whatsapp.com/send/?phone=5581999704376&text=Ol%C3%A1+Matheus%21+Vim+pelo+seu+portf%C3%B3lio+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0">
          <div className="whatBTN">
           WhatsApp
          </div>
          </a>
        
        </div>
      
    </Container>
  );
}
