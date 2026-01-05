import * as S from './styles';

import { Header } from '../../components/header';
import BLUR from '../../assets/Vector 6.png';
import BG1 from '../../assets/Group 23.png';

import { SwiperDiv } from '../../components/swiper';

import js from '../../assets/js.svg';
import ts from '../../assets/ts.svg';
import reactjs from '../../assets/reactjs.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import reactnative from '../../assets/reactnative.svg';
import nodejs from '../../assets/nodejs.svg';
import sqlite from '../../assets/sqlite.svg';
import python from '../../assets/python.svg';
import electron from '../../assets/electron.svg';
import git from '../../assets/git.svg';
import vscode from '../../assets/vscode.svg';

import ME from '../../assets/me.jpeg';

import RocketNotes from '../../assets/RocketNotes.svg';
import RocketMovies from '../../assets/RocketMovies.svg';
import FoodExplorer from '../../assets/FoodExplorer.svg';
import MHImports from '../../assets/mh.svg';
import TodoApp from '../../assets/TodoApp.svg';
import CalculatorAPP from '../../assets/Calculator App.svg';
import AgeCalculator from '../../assets/AgeCalculator.svg';
import FocusTimer from '../../assets/FocusTimer.svg';
import InteractiveCard from '../../assets/InteractiveCardDetail.svg';
import MHImportsMobal from '../../assets/mhMobal.svg';

export function Home() {
    const images = [
     js,
     ts,
     reactjs,
     html,
     css,
     reactnative,
     nodejs,
     git,
     sqlite,
     python,
     electron,
     vscode,
    ];
    const projects = [
      {
        id: 1,
        name: 'RocketNotes',
        image: RocketNotes,
        description: 'RocketNotes é um site simples para fazer anotações, com login, busca, edição de notas, etc.',
        year: 2023,
        link: 'https://github.com/Toddynh0BR/Rocket-Notes-Front',
        tags: [
          'ReactJS',
          'NodeJS',
          'SQLite',
          'Web'
        ],
      },
      {
        id: 2,
        name: 'FoodExplorer',
        image: FoodExplorer,
        description: `  
        FoodExplorer é um cardápio online tanto para administradores 
        quanto para clientes. O projeto permite que administradores
        gerenciem pratos e visualizem o histórico de pedidos,
        enquanto clientes podem explorar pratos, fazer pedidos, visualizar favoritos e mais.
        `,
        year: 2024,
        link: 'https://github.com/Toddynh0BR/Food-Explorer-FrontEnd',
        tags: [
          'ReactJS',
          'NodeJS',
          'SQLite',
          'Web'
        ],
      },
      {
        id: 3,
        name: 'RocketMovies',
        image: RocketMovies,
        description: `
         RocketMovies é um website simples para vc catalogar os filmes assistidos e dar uma avaliação para eles.
         Além de ter acesso as avaliações de outros usuários.
        `,
        year: 2024,
        link: 'https://github.com/Toddynh0BR/Rocket-Movies-Front',
        tags: [
          'ReactJS',
          'NodeJS',
          'SQLite',
          'Web'
        ],
      },
      {
        id: 4,
        name: 'MHImports',
        image: MHImports,
        description: `
          A MHImports é uma loja online com diversas funcionalidades tanto para o administrador quanto para os clientes. Nela, o usuário pode fazer compras online no estilo do Shopee, tendo acesso ao seu histórico de compras, informações pessoais, entre outras funcionalidades muito interessantes.
        `,
        year: 2025,
        link: 'https://github.com/Toddynh0BR/MH-Imports-Front',
        tags: [
          'ReactJS',
          'NodeJS',
          'SQLite',
          'Web'
        ],
      },
      {
        id: 5,
        name: 'TodoApp',
        image: TodoApp,
        description: `
        O Todo App é um aplicativo web desenvolvido para ajudar você a gerenciar suas tarefas pendentes com eficiência. Criado com HTML, CSS e JavaScript, este aplicativo oferece uma interface simples, porém poderosa, para acompanhar suas tarefas, garantindo que você se mantenha organizado e produtivo.
        `,
        year: 2024,
        link: 'https://github.com/Toddynh0BR/Todo-App',
        tags: [
          'JavaScript',
          'HTML',
          'CSS',
          'Web'
        ],
      },
      {
        id: 6,
        name: 'MHImports Mobile',
        image: MHImportsMobal,
        description: `
        MHImports Mobal é o aplicativo móvel da loja online MHImports: <a target='_blank' href='https://github.com/Toddynh0BR/MH-Imports-Front'>https://github.com/Toddynh0BR/MH-Imports-Front</a>, portanto o acesso ao aplicativo original é restrito.
        `,
        year: 2025,
        link: 'https://github.com/Toddynh0BR/MH-Imports-Mobal',
        tags: [
          'React Native',
          'NodeJS',
          'SQLite',
          'Mobile',
          'Expo'
        ],
      },
      {
        id: 7,
        name: 'Focus Timer',
        image: FocusTimer,
        description: `
        O Focus Timer é um site desenvolvido para aumentar a produtividade usando o método de estudo Pomodoro. Ele inclui uma série de recursos, como Modo Escuro e Modo Claro, sons ambientes para um ambiente de trabalho propício e a flexibilidade de ajustar o cronômetro adicionando ou removendo 5 minutos.
        `,
        year: 2023,
        link: 'https://github.com/Toddynh0BR/Focus-Timer',
        tags: [
          'JavaScript',
          'HTML',
          'CSS',
          'Web'
        ],
      },
      {
        id: 8,
        name: 'Age Calculator',
        image: AgeCalculator,
        description: `
        Age Calculator é um site desenvolvido para calcular a idade exata de uma pessoa com base na data de nascimento fornecida. Retornando
        a quantos anos, meses, e dias a pessoa viveu até a data atual.
        `,
        year: 2024,
        link: 'https://github.com/Toddynh0BR/Age-Calculator',
        tags: [
          'JavaScript',
          'HTML',
          'CSS',
          'Web'
        ],
      },
      {
        id: 9,
        name: 'Calculator App',
        image: CalculatorAPP,
        description: `
          O Calculator App é uma calculadora simples, projetada para realizar as quatro operações matemáticas básicas: divisão, multiplicação, adição e subtração. Este projeto serve como um complemento para o meu portfólio e está planejado para evoluir com a adição de novas funcionalidades, como raiz quadrada, potenciação e porcentagem no futuro.
        `,
        year: 2024,
        link: 'https://github.com/Toddynh0BR/Calculator-App',
        tags: [
          'JavaScript',
          'HTML',
          'CSS',
          'Web'
        ],
      },
      {
        id: 10,
        name: 'Interactive Card Detail',
        image: InteractiveCard,
        description: `
        O Interactive Card Details é uma plataforma de formulários dedicada a informações de cartão de crédito, proporcionando aos titulares dos cartões a facilidade de inserir seus dados essenciais.
        `,
        year: 2024,
        link: 'https://github.com/Toddynh0BR/Interactive-Card-Details',
        tags: [
          'JavaScript',
          'HTML',
          'CSS',
          'Web'
        ],
      },
    ]

     return(
        <S.Container>
         <Header />

         <S.Home>
          <img src={BG1} alt="" className='BG1'/>
          <img src={BLUR} alt="" className='BLUR'/>
           
          <div className="title">
            <h1>Full-Stack & Mobile Engineer</h1>
            <p>
             Construindo projetos completos enquanto exploro diferentes áreas da programação, sempre em busca de aprender mais, unir boas práticas e eficiência, e transformar ideias em sistemas independentes, funcionais e pensados para oferecer uma experiência positiva ao usuário.
            </p>

            <div className="buttons">

              <a className='ProjectBtn' href="#projects">
                <div className="btn-animation"></div>
                 <button>Projetos</button>
              </a>
        
              <a className='AboutBtn' href="#about">Saiba mais</a>
            </div>
          </div>
         </S.Home>

         <S.SwiperContainer>
          <h2>
           Tecnologias que utilizo
          </h2>
        
          <div className="leftGradiant"></div>
          <div className="rightGradiant"></div>
          <SwiperDiv images={images} />
         </S.SwiperContainer>

         <S.About id='about'>
          <div className="left"></div>
          <div className="right"></div>

          <div className="Year">
           <h3>
            +<strong>2</strong> Anos
           </h3>
           <span>
            Experiência
           </span>

           <div className="space"></div>
           <p>
            +<strong>2</strong> anos de experiência em desenvolvimento Full-Stack, estudando, criando e aprimorando. <br />
           <br /> Buscando ainda mais conhecimento e desafios!
           </p>
          </div>

          <div className="Projects">
            <h3>
             +<strong>30</strong>
            </h3>
            <span>
             Projetos
            </span>

            <div className="space"></div>
            <p>
            +<strong>30</strong> projetos desenvolvidos para clientes e aperfeiçoamento de minhas habilidades e conhecimento prático. <br />
            <br /> Com mais projetos ainda em mente!
            </p>
          </div>

          <div className="Certif" >
            <h3>
             +<strong>10</strong>
            </h3>
            <span>
              Certificados
            </span>

            <div className="space"></div>
            <p>
              +<strong>10</strong> certificações que comprovam meu conhecimento e dedicação à área de desenvolvimento,
               grande parte vindos da <a target="_blank" href="https://www.rocketseat.com.br/">Rocketseat </a>.<br /> <br />
              Em busca de mais aprendizado constante!
            </p>
          </div>

          <img content='' src={ME} className="Photo"/>
      
         </S.About>

         <S.Projects  id='projects'>
          <h2>
            Projetos
          </h2>

          <ul>
           {
           projects.map((project) => (
            <li key={project.id}>

            </li>
           ))
          }
          </ul>
         </S.Projects>
        </S.Container>
    )
};