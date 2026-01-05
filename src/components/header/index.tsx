import { useState, useEffect } from 'react';
import styled from 'styled-components';


interface OnTopProps {
  $OnTop?: boolean; 
}

export const Container = styled.header<OnTopProps>`
height: ${props => props.$OnTop ? '10rem' : '7rem'};
width: 100%;

background: #000000;
background: linear-gradient(180deg, rgba(0, 0, 0, 0.76) 56%, rgba(0, 0, 0, 0.2) 95%, rgba(0, 0, 0, 0) 100%);

padding: 2rem 10rem 0rem 10rem;
padding-top: ${props => props.$OnTop ? '2rem' : '0rem'};
transition: .3s ease-in-out;

position: fixed;
z-index: 10;
right: 0;
left: 0;
top: 0;

justify-content: space-between;
align-items: center;
display: flex;

img {
 height: 5.1rem;
 width: 7.7rem;
}

.topics {
 justify-content: space-between;
 align-items: center;
 display: flex;
 gap: 4.4rem;

 span {
  font-family: 'Syne', sans-serif;
  font-size: 1.8rem;
  color: #fff;

  transition: .3s ease-in-out;

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
 width: fit-content;

 background-color: #030303ff;
 border: 1px solid #333333;
 border-radius: 1.6rem;

 font-family: 'Syne', sans-serif;
 font-size: 1.8rem;
 color: #fff;

 padding: 0 2rem;

 transition: .3s ease-in-out;

 &:hover {
    cursor: pointer;
    filter: brightness(180%);
 }
}

`

export function Header() {
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const monitorarScroll = () => {
    
      setOnTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', monitorarScroll);
   
    return () => window.removeEventListener('scroll', monitorarScroll);
  }, []);


    return(
     <Container $OnTop={onTop}>
      <img src="" alt="Logo MA" />

      <div className="topics">
       <span className='focus'>Home</span>
       <span className=''>Sobre Mim</span>
       <span className=''>Projetos</span>
       <span className=''>Depoimentos</span>
       <span className=''>FAQ</span>
       <span className=''>Contato</span>
      </div>
      <button>Entre em contato via Whatsapp</button>

     </Container>
    )
}