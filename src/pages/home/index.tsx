import * as S from './styles';

import { useState, useEffect } from 'react';

import { Header } from '../../components/header';
import BLUR from '../../assets/Vector 6.png';
import BG1 from '../../assets/Group 23.png';

import logo from '../../assets/MA.svg';

import { SwiperDiv } from '../../components/swiper';
import { SwiperTwo } from '../../components/swiperTwo';

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

import TodoApp from '../../assets/TodoApp.png';
import MHImports from '../../assets/MHImports.png';
import FocusTimer from '../../assets/FocusTimer.png';
import RocketNotes from '../../assets/RocketNotes.png';
import RocketMovies from '../../assets/RocketMovies.png';
import FoodExplorer from '../../assets/FoodExplorer.png';
import AgeCalculator from '../../assets/AgeCalculator.png';
import CalculatorAPP from '../../assets/Calculator App.png';
import MHImportsMobal from '../../assets/MHImportsMobal.png';
import TypeWeatherMobal from '../../assets/TypeWeatherMobal.png';
import InteractiveCard from '../../assets/InteractiveCardDetail.png';

import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SwiperSlide } from 'swiper/react';

import Cstar from '../../assets/Cstar.svg';
import Estar from '../../assets/Estar.svg';

import { FiX } from "react-icons/fi";

import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";


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
        id: 11,
        name: 'TypeWeather Mobile',
        image: TypeWeatherMobal,
        description: 'O TypeWeather é um aplicativo móvel de previsão do tempo dinâmico e preciso que permite ao usuário buscar informações climáticas de qualquer lugar do Brasil.',
        year: 2024,
        link: 'https://github.com/Toddynh0BR/TypeWeather',
        tags: [
          'React Native',
          'TypeScript',
          'Mobile',
          'ApiRest'
        ],
      },
      {
        id: 6,
        name: 'MHImports Mobile',
        image: MHImportsMobal,
        description: `
        MHImports Mobal é o aplicativo móvel da loja online MHImports: <a target='_blank' href='https://github.com/Toddynh0BR/MH-Imports-Front'>https://github.com/Toddynh0BR/MH-Imports-Front</a>, é nele onde o admin da loja pode editar, adicionar, produtos e categorias, dentre outras diversas funções.
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
    ];
    const depoiments = [
     {
      id: 3,
      photo: 'https://media.licdn.com/dms/image/v2/D4D03AQGLqThqnrT5nQ/profile-displayphoto-shrink_400_400/B4DZnzDtEBIEAg-/0/1760719459097?e=1769040000&v=beta&t=sCcViIctG_R0zLphjWmuATjlHfmHYL6_bt8yjXXnmdk',
      name: 'Camila Gomes',
      work: 'CEO na Cami design®',
      text: 'Trabalhar com ele foi uma experiência muito tranquila. Sempre demonstrou domínio técnico, atenção aos detalhes e preocupação em entregar algo que realmente fizesse sentido para o meu projeto. O resultado superou minhas expectativas e, sem dúvida, voltaria a contratar.',
      stars: 4,
      link: 'https://www.linkedin.com/in/camidesign/'
     },
     {
      id: 1,
      photo: 'https://media.licdn.com/dms/image/v2/D4D03AQGXoUe3_Ia43Q/profile-displayphoto-scale_400_400/B4DZuVJHGlIkAg-/0/1767733754450?e=1769040000&v=beta&t=lLgpWKtC8GBFPw6mjt0goBStO5oG9Gi7x8YbzsX3_PI',
      name: 'Kevin Emanuel',
      work: 'Full-Stack Developer',
      text: 'Programador gente boa e atencioso aos seus pedidos , sempre ao seu dispor quando necessita de ajuda, altamente habilidoso em diversas áreas.',
      stars: 4,
      link: 'https://www.linkedin.com/in/kevin-emanuel-0aa190313/'
     },
     {
      id: 2,
      photo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHWFqbFXZUWDQ/company-logo_200_200/company-logo_200_200/0/1731531992357?e=1769040000&v=beta&t=887WLYHouQWu09NBAoCwRMDHz4gqs1mqzdoSXhPYovU',
      name: 'Blue Innovation Group',
      work: 'ERP | CRM | Planning Enterprise',
      text: 'Profissional incrível me surpreendeu eu fiquei muito feliz com a entrega recomendaria e contrataria novamente',
      stars: 5,
      link: 'https://www.linkedin.com/company/blue-innovation%C2%A0group/'
     },
     {
      id: 2,
      photo: 'https://media.licdn.com/dms/image/v2/D4D03AQE488mUOZWAJQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701266722028?e=1769040000&v=beta&t=AkgtDYFRd1AzLamVaCAYRBKwfdxSXiu-Ll7vgEftWEs',
      name: 'Jaicke Santos',
      work: 'Senior Back-End Developer | Ruby on Rails | API REST | Microservices',
      text: 'Mesmo sem termos trabalhado diretamente juntos, sempre tive boas impressões do Matheus pelas interações e trocas de ideias na área de desenvolvimento.',
      stars: 5,
      link: 'https://www.linkedin.com/in/jaicke-santos/'
     },
    ];
    const [quests, setQuests] = useState([
      {
        id: 1,
        quest: 'Quais tecnologias você domina',
        response: `
Trabalho com as principais tecnologias do desenvolvimento web moderno, atuando de forma full stack em projetos web, mobile e desktop.
No Front-end, utilizo HTML, CSS e JavaScript, com foco em React.js, além de React Native para aplicações mobile e Electron para aplicações desktop, sempre priorizando performance, escalabilidade e boa experiência do usuário.
Em projetos maiores, utilizo TypeScript para garantir maior segurança, organização e manutenibilidade do código.
No back-end, desenvolvo APIs e sistemas utilizando Node.js, Python e SQL, desde soluções mais simples até arquiteturas mais completas, incluindo autenticação, integração com bancos de dados e APIs REST.
Também possuo experiência com controle de versão (Git), consumo e desenvolvimento de APIs REST, além de boas práticas de código.
Complemento minha parte técnica com boa comunicação, adaptabilidade, proatividade e facilidade para aprender novas tecnologias e trabalhar em equipe.
        `,
        open: false
      },
      {
        id: 2,
        quest: 'Quantos anos de experiência você tem na área?',
        response: `
Possuo mais de 3 anos de experiência na área de desenvolvimento, com formação inicial pelo curso Explorer da Rocketseat, onde construí uma base sólida em desenvolvimento full stack.
Desde então, venho me aperfeiçoando constantemente, estudando novas tecnologias, acompanhando boas práticas do mercado e aplicando esse conhecimento no desenvolvimento de projetos práticos, incluindo trabalhos realizados para clientes reais.
Essa trajetória me permitiu evoluir não apenas tecnicamente, mas também em aspectos como organização de projetos, comunicação, entendimento de requisitos e entrega de soluções eficientes.
        `,
        open: false
      },
      {
        id: 3,
        quest: 'Por que escolheu desenvolvimento Full-Stack?',
        response: `
Escolhi o desenvolvimento full stack porque a programação sempre me pareceu uma área versátil, desafiadora e extremamente útil, além de me permitir transformar ideias em aplicações e sistemas completos.
Gosto de entender todo o ciclo de desenvolvimento — do front-end ao back-end — pois isso me dá mais autonomia para criar soluções bem estruturadas, funcionais e alinhadas às necessidades reais dos usuários.
Tenho interesse em explorar diferentes áreas da programação, como aplicações web, mobile e desktop, além de estudar outros campos como inteligência artificial e desenvolvimento de jogos, sempre com o objetivo de ampliar meu conhecimento técnico.
Ainda assim, mantenho meu foco principal nas tecnologias essenciais do desenvolvimento moderno, buscando evoluir constantemente como desenvolvedor full stack e entregar soluções de qualidade.
        `,
        open: false
      },
      {
        id: 4,
        quest: 'Você segue boas práticas de código e arquitetura?',
        response: `
Sim, sempre priorizo organização e clareza nos meus projetos. Estruturo o código em componentes reutilizáveis, pastas bem definidas e aplico padrões como hooks, MVC e services, garantindo que cada parte do sistema seja fácil de entender e manter.
Meu objetivo é sempre escrever códigos limpos, duráveis e escaláveis, evitando soluções improvisadas e “gambiarras”, para entregar sistemas eficientes, robustos e que possam evoluir sem problemas ao longo do tempo.
        `,
        open: false
      },
      {
        id: 5,
        quest: 'Quais tipos de projetos você já desenvolveu?',
        response: `
Já desenvolvi uma variedade de projetos, desde soluções simples até sistemas completos e profissionais.
No full stack, criei sistemas como cardápios digitais, e-commerces completos inspirados na Shoppe, dashboards profissionais, integração com plataformas de pagamento e geração de faturas, incluindo cálculo de taxas e webhooks conectados a CRMs externos.
No mobile, desenvolvi aplicativos úteis para o dia a dia, como apps de receitas, clima e controle de gastos.
Para desktop, construí sistemas mais complexos, incluindo gerenciadores de senha e ferramentas de automação de scripts.
Cada projeto reflete meu foco em códigos limpos, escaláveis e soluções funcionais, sempre priorizando a experiência do usuário e a eficiência técnica.
        `,
        open: false
      },
    ]);

    const [focused, setFocused] = useState("home");
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    function handleOpenFAQ(id: any){
      setQuests(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, open: !item.open } 
          : item
      ))
    };

    function CounterProject(){
     if (count >= 30) return;

     const interval = setInterval(() => {
      setCount(prevState => {
        if (prevState >= 30) {
          clearInterval(interval);
          return 30;
        }
        return prevState + 1;
      });
     }, 100);
    };

    useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFocused(entry.target.id);
          
            if (entry.target.id == 'about') CounterProject();
          }
        });
      },
      { threshold: 0 } 
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
    }, []);
 
    useEffect(()=> {
      setTimeout(()=> {
       setLoading(false)
      }, 2500)
    }, []);


 
     return(
        <S.Container>
         <Header focused={focused} />
         <div className={loading ? 'loading' : 'loading loaded'}>
          <img src={logo} alt="" />
         </div>

         <S.Home id='home'>
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

          <div className="Photo">
            <img src={ME} alt="" />
            <span>Vamos desenvolver juntos!</span>
            <p>Leve seu sistema e site a outro nível comigo.</p>
          </div>

          <div className="Year">
           <h3>
            +<strong>3</strong> Anos
           </h3>
           <span>
            Experiência
           </span>

           <div className="space"></div>
           <p>
            +<strong>3</strong> anos de experiência em desenvolvimento Full-Stack, estudando, criando e aprimorando. <br />
           <br /> Buscando ainda mais conhecimento e desafios!
           </p>
          </div>

          <div className="Projects">
            <h3>
             +<strong>{count}</strong>
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

          
      
         </S.About>

         <S.Projects  id='projects'>
          <h2>
            Projetos
          </h2>

          <ul>
           {
           projects.map((project) => (
            <li key={project.id}>
             <a className='IMAGE' href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt="" />
              <IoLogoGithub size={60} color='#fff'/>
             </a>

             <div className="title">
              <span>
               {project.name}
              </span>

              <p>
               {project.year}
              </p>
             </div>

             <p dangerouslySetInnerHTML={{ __html: project.description }} className='text'/>
              
             <div className="tags">
              { project.tags.map((tag)=> (
               <div key={tag} className="tag">
                {tag}
               </div>
              ))}
             </div>
            </li>
           ))
          }
          </ul>
         </S.Projects>

         <S.Depoiments id='depoiments'>
          <div className="title">
            <h2>Depoimentos</h2>
            <span>
              Feedbacks de clientes, parceiros e colegas que <br />
              vivenciaram minha jornada profissional.
            </span>
          </div>

          <SwiperTwo>
           {depoiments.map((depoiment)=> (
            <SwiperSlide>
             <a key={depoiment.id} className="depoiment" href={depoiment.link} target='_blank'>
              <FaLinkedin className='ICON' size={45} color='#fff'/>

              <div className="stars">
                <img src={depoiment.stars >= 1 ? Cstar : Estar}/>
                <img src={depoiment.stars >= 2 ? Cstar : Estar}/>
                <img src={depoiment.stars >= 3 ? Cstar : Estar}/>
                <img src={depoiment.stars >= 4 ? Cstar : Estar}/>
                <img src={depoiment.stars >= 5 ? Cstar : Estar}/>
              </div>

              <p>
               "{depoiment.text}"
              </p>

              <div className="user">
               <img src={depoiment.photo} alt="" />
               <span>
                {depoiment.name} <br />
                <strong>
                 {depoiment.work}
                </strong>
               </span>
              </div>
             </a>
            </SwiperSlide>
           ))}
          </SwiperTwo>
         </S.Depoiments>

         <S.FAQ id='faq'>
          <h2>Perguntas Frequentes</h2>

          { quests.map((quest)=> (
           <div key={quest.id} className={quest.open ? 'quest open' : 'quest'}>
            <div onClick={()=> handleOpenFAQ(quest.id)} className="top">
              <span>{quest.quest}</span>
              
               <FiX size={25} color='#fff'/>
            </div>

            <div className="text">
            <p>
              {quest.response}
            </p>
            </div>

          </div>
          ))}
         </S.FAQ>

         <S.Contact id='contact'>
          <h3>Vamos conversar?</h3>
          <a href="https://wa.me/5581999704376?text=Olá%20Matheus!%20Vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20mais%20informações." target='_blank'><h1>ENTRE EM CONTATO</h1></a>
         </S.Contact>

         <S.Footer>
          <div className="licence">
            <a href="https://www.instagram.com/matheus_augusto_007?igsh=dGw5bjR0N3U2eWIw" target='_blank'><p>Todos os direitos reservados Matheus Augusto</p></a>
            <p>© Copyright 2026</p>
          </div>

          <div className="links">
            <div className="space"></div>
            <div className="icons">
             <a href="https://github.com/Toddynh0BR" target='_blank'>
              <div className="box">
              <LuGithub size={25} color='#fff'/>
             </div>
             </a>

             <a href="https://www.linkedin.com/in/matheus-augusto-a950672a1/" target='_blank'>
              <div className="box">
               <SlSocialLinkedin size={25} color='#fff'/>
              </div>
             </a>

             <a href="https://www.instagram.com/matheus_augusto_007?igsh=dGw5bjR0N3U2eWIw" target='_blank'>
              <div className="box">
              <FaInstagram size={25} color='#fff'/>
              </div>
             </a>
            </div>
          </div>
         </S.Footer>
        </S.Container>
    )
};