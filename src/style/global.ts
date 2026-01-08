import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;

 ::-webkit-scrollbar {
  width: .5rem;
}

::-webkit-scrollbar-track {
  background: #131214ff;
  border-radius: 1rem; 
}

::-webkit-scrollbar-thumb {
  background: #292929ff; 
  border-radius: 1rem;
  transition: .3s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {

  background: #360000ff; 
}
}

:root {
 font-size: 62.5%;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #030303ff;
  overflow-x: hidden;
}

a {
 text-decoration: none;
}

@media screen and (max-width: 490px){

}
`