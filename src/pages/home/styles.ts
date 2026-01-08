import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
width: 100%;

position: relative;

.loading {
height: 100vh;
width: 100%;

position: fixed;
z-index: 1000;
left: 0;
top: 0;

background-color: #030303ff;

justify-content: center;
align-items: center;
display: flex;

transition: .8s ease-in-out;

img {
 height: 20rem;
 width: 20rem;

 animation: opaciting 1s ease-in-out forwards ;
}

@keyframes opaciting {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
}

.loaded {
 transition: .8s ease-in-out;
 opacity: 0;

 animation: noneA .8s ease-in-out forwards;

 @keyframes noneA {
  from {
    display: flex;
  }
  to {
    display: none;
  }
 }
}
`

export const Home = styled.section`
height: 100vh;
width: 100%;

justify-content: center;
align-items: center;
display: flex;

.BG1 {
position: absolute;
left: 0;
top: 0;

opacity: 0.3;
height: 100%;
width: 100%;
z-index: -2;
}

.BLUR {
position: absolute;
right: -1rem;
top: -1rem;

height: 100%;
width: 70%;

z-index: -1;
}

.title {
 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 2.4rem;

 position: relative;
 z-index: 2;

 h1 {
  font-family: 'Syne', sans-serif;
  font-weight: 500;
  font-size: 6rem;

  text-align: center;
  background: -webkit-linear-gradient(#eee, #d10202ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
 }

 p {
  display: block;
  width: 80%;
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  color: #8A8A8A;
  text-align: center;
 }

 .buttons {
   align-items: center;
   display: flex;
   gap: 1.6rem;

 .ProjectBtn {
    position: relative;
    height: 5.6rem;
    width: 14rem;
    border-radius: 1.6rem;
    overflow: hidden;
    cursor: pointer;

    .btn-animation{
     position: absolute;
     height: 100%;
     width: 350%;
     left: -100%;
     background-image: linear-gradient(135deg,#ff0000ff, #990000ff,#ff0000ff, #990000ff );
     transition: all 0.8s ease;

   }

   &:hover .btn-animation{
    cursor: pointer;
    left: 0;
   }

   button{
    position: relative;
    height: 100%;
    width: 100%;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    color: #fff;
   }
  }

  .AboutBtn {
 height: 5.6rem;
 width: 14rem;

 background-color: #030303ff;
 border: 1px solid #333333;
 border-radius: 1.6rem;

 align-items: center;
 justify-content: center;
 display: flex;

 font-family: 'Syne', sans-serif;
 font-size: 2rem;
 color: #fff;


 transition: .3s ease-in-out;

 &:hover {
    cursor: pointer;
    filter: brightness(180%);
 }
  }
 }
}


`

export const SwiperContainer = styled.div`
height: 17rem;
width: 100%;

flex-direction: column;
display: flex;
gap: 4.4rem;

position: relative;
h2 {
 font-family: 'Syne', sans-serif;
 font-weight: 500;
 font-size: 2rem;
 color: #FFF0E6;

 margin-left: 13rem;
}

.swiper {
 width: 100%;
}

.leftGradiant {
 position: absolute;
 left: 0;
 top: 0;

 height: 100%;
 width: 10rem;

 z-index: 4;
background: #000000;
background: linear-gradient(90deg, rgba(0, 0, 0, 1) 63%, rgba(237, 221, 83, 0) 100%);
}

.rightGradiant {
 position: absolute;
 right: 0;
 top: 0;

 height: 100%;
 width: 10rem;

 z-index: 4;
background: #000000;
background: linear-gradient(270deg, rgba(0, 0, 0, 1) 63%, rgba(237, 221, 83, 0) 100%);
}
`

export const About = styled.section`
height: 105vh;
width: 95%;

position: relative;
margin: 5rem auto;
padding: 2.5rem 3rem 2.5rem 3rem;

border-bottom: 1px solid #6666663b;
border-top: 1px solid #ff000052;
border-radius: 2.4rem;

overflow: hidden;

.right {
 position: absolute;
 right: 0;
 top: 0;

 height: 100%;
 width: 1px;

 opacity: 0.7;
background: #000000;
background: linear-gradient(180deg, rgba(0, 0, 0, 1) 2%, rgba(156, 0, 0, 0.76) 11%, rgba(102, 102, 102, 0.31) 81%, rgba(0, 0, 0, 1) 98%);
}

.left {
 position: absolute;
 left: 0;
 top: 0;

 height: 100%;
 width: 1px;
opacity: 0.7;
background: #000000;
background: linear-gradient(180deg, rgba(0, 0, 0, 1) 2%, rgba(156, 0, 0, 0.76) 11%, rgba(102, 102, 102, 0.31) 81%, rgba(0, 0, 0, 1) 98%);
}

gap: 2.4rem;
display: grid;
grid-template-areas: 
'year projectss photo'
'certif certif photo';
grid-template-columns: 1fr 1fr 1.5fr;
grid-template-rows: 1fr 0.9fr;

.Year {
    grid-area: year;
}
.Projects {
    grid-area: projectss;
}
.Photo {
    grid-area: photo;
}
.Certif {
    grid-area: certif;
}

.Year, .Projects, .Certif {
 height: 100%;
 width: 100%;
 font-family: 'Syne', sans-serif;
 
 border: 1px solid #606060bb;
 border-radius: 2.6rem;

 padding: 2.4rem;

 flex-direction: column;
 display: flex;

 h3 {
  font-size: 4rem;
  font-weight: 400;
  color: #d10202ff;

  margin-bottom: 1rem;

  strong {
    font-size: 5.5rem;
    font-weight: 300;
  }
 }

 span {
    font-size: 3.2rem;
    color: #fff;
 }

 .space {
   flex: 1;
 }

 p {
  font-size: 1.7rem;
  color: #C1C1C1;
 a {
    color: #d10202ff;
 }
  strong {
    font-weight: 400;
    font-size: 2rem;
  }
 }
}

img {
 height: 100%;
 width: 98%;

 overflow: hidden;
 flex-shrink: 0;
 contain: content;
 
 margin-right: 0rem;
 margin-left: 1rem;
 border-radius: 2.4rem;
}
`

export const Projects = styled.section`
height: fit-content;
width: 100%;

flex-direction: column;
align-items: center;
display: flex;

margin-top: 8rem;

h2 {
 font-family: 'Syne', sans-serif;
 font-weight: 500;
 font-size: 4rem;
 color: #fff;

 margin-bottom: 5rem;
}

ul {
 height: fit-content;
 width: 95%;

 gap: 2.4rem;
 display: grid;
 grid-template-columns: repeat(2, 1fr);

 li {
  height: fit-content;
  width: 100%;
  
  flex-direction: column;
  display: flex;
  padding: 2rem;

  .IMAGE {
   position: relative;
   
   justify-content: center;
   align-items: center;
   display: flex;

   svg {
    position: absolute;
   
    opacity: 0;
    transition: .3s ease-in-out;
   }

   &:hover {
    svg {
      opacity: 1;
    }
    img {
     transform: scale(105%);
     filter: brightness(60%);
    }
   }
  }

  img {
   height: auto;
   width: 100%;
   border-radius: 2rem;
   transition: .6s ease-in-out;
  }

  .title {
   width: 100%;

   justify-content: space-between;
   align-items: center;
   display: flex;

   margin-top: 2rem;

   span {
    font-family: 'Syne', sans-serif;
    font-size: 2.6rem;
    font-weight: 500;
    color: #fff;
   }

   p {
    font-family: 'Syne', sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
   }
  }

  .text {
   font-family: 'Syne', sans-serif;
   font-size: 1.8rem;
   font-weight: 400;
   color: #7A7A7A;

   margin-top: 1.4rem;
   width: 100%;
   display: -webkit-box;
   -webkit-line-clamp: 3;      /* máximo de 2 linhas */
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;

   a {
    color: #7b6161ff;
   }
  }

  .tags {
   align-items: center;
   flex-wrap: wrap;
   display: flex;
   gap: .7rem;
   
   margin-top: 1.7rem;

   .tag {
    height: 3.6rem;
    width: fit-content;

    justify-content: center;
    align-items: center;
    display: flex;

    border: 1px solid #ffffff3c;
    border-radius: 2.7rem;
    padding: 0 2rem;

    font-family: 'Syne', sans-serif;
    font-size: 1.4rem;
    color: #fff;
   }
  }
 }
}
`

export const Depoiments = styled.section`
height: 70vh;
width: 95%;

margin: 5rem auto;

flex-direction: column;
display: flex;

.title {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 margin-bottom: 4rem;

 h2 {
  font-family: 'Syne', sans-serif;
  font-weight: 500;
  font-size: 4rem;
  color: #fff;
 }
 span {
  font-family: 'Syne', sans-serif;
  font-weight: 400;
  font-size: 2rem;
  color: #7A7A7A;
 }
}

.depoiment {
 height: 26.5rem;
 width: 100%;

 position: relative;
 border: 1px solid #ff000052;
 border-radius: 2.4rem;

 padding: 2rem;

 overflow: hidden;
 transition: .6s ease-in-out;



 .ICON {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all.3s ease-in-out;
  opacity: 0;
 }

 justify-content: space-between;
 flex-direction: column;
 display: flex;


 .stars {
  width: 100%;

  align-items: center;
  display: flex;
  gap: .5rem;

  img {
   height: 2rem;
   width: 2rem;
  }
 }

 p {
  font-family: 'Syne', sans-serif;
  font-size: 1.7rem;
  color: #B3B3B3;

  display: block;
  height: 7rem;

 }

 .user {
  width: 100%;
  padding-top: 2rem;
  border-top: 1px solid #B3B3B3;

  align-items: center;
  display: flex;
  gap: 1.5rem;

  img {
    height: 5rem;
    width: 5rem;

    border-radius: 50%;
  }
  span {
   font-family: 'Syne', sans-serif;
   font-size: 1.6rem;
   color: #E7E7E7;

   strong {
    font-weight: 400;
    color: #8E8E8E;
   }
  }
 }

 &:hover {
  transform: scale(103%);
  filter: brightness(60%);
  cursor: pointer;

  .ICON {
    opacity: 1;
  }
 }
}

.swiper {
 overflow: visible;
}
`

export const FAQ = styled.section`
min-height: 100vh;
width: 90%;

margin: 0rem auto;

flex-direction: column;
align-items: center;
display: flex;

h2 {
 font-family: 'Syne', sans-serif;
 font-size: 4rem;
 color: #fff;
 margin-bottom: 5rem;
}

.quest {
 height: fit-content;
 width: 100%;

 transition: .3s ease-in-out;
 border-bottom: 1px solid #ff000052;
 margin-bottom: 5rem;

 .top {
  height: 8rem;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  display: flex;

  cursor: pointer;

  span {
   font-family: 'Syne', sans-serif;
   font-weight: 400;
   font-size: 3.2rem;
   color: #fff;
   user-select: none;
  }

  svg {
   transition: .3s ease-in-out;
   transform: rotate(45deg);

  }
 }

 .text {
  height: 0;
  width: 100%;

   transition: .3s ease-in-out;
  overflow: hidden;
 }

 p {
  transition: .3s ease-in-out;
  font-family: 'Syne', sans-serif;
  font-size: 1.8rem;
  color: #ffffffb6;
 }
}

.open {
  transition: .3s ease-in-out;
 .top {
  svg {
   transform: rotate(0deg);
  }
 }

 .text {
  height: 15rem;
 }


}
`

export const Contact = styled.section`
height: fit-content;
width: 95%;

flex-direction: column;
align-items: center;
display: flex;
gap: 4rem;

margin-top: 10rem;

h3 {
 font-family: 'Syne', sans-serif;
 font-size: 2.4rem;
 color: #ffffffbc;
}

h1 {
 font-family: 'Syne', sans-serif;
 color: #d10202ff;
 font-size: 10rem;

 transition: .8s ease-in-out;
 cursor: pointer;

 &:hover {
  transform: scale(103%);
 }
}
`

export const Footer = styled.footer`
height: fit-content;
max-width: 95%;

padding-bottom: 5rem;
margin: 0 auto;
margin-top: 10rem;

flex-direction: column;
display: flex;

.licence {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 margin-bottom: 4rem;
 p {
  font-family: 'Syne', sans-serif;
  font-size: 1.8rem;
  color: #ffffff8e;
 }
}

.links {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 .icons {
  align-items: center;
  display: flex;
  gap: 1rem;
 }

 .box {
  height: 4rem;
  width: 4rem;

  border: 1px solid #ffffffb4;
  border-radius: 50%;

  justify-content: center;
  align-items: center;
  display: flex;

  transition: .3s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: scale(105%);
  }
 }
}
`
