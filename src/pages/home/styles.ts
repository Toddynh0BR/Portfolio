import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
width: 100%;

position: relative;
`

export const Home = styled.div`
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

export const About = styled.div`
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
'year projects photo'
'certif certif photo';
grid-template-columns: 1fr 1fr 1.5fr;
grid-template-rows: 1fr 0.9fr;

.Year {
    grid-area: year;
}
.Projects {
    grid-area: projects;
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

export const Projects = styled.div`
min-height: 100vh;
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
  
  border: 1px solid red;
 }
}
`