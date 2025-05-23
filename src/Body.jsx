import React, { useState, useEffect } from "react";
import dk from "./assets/donkeykong.png";
import resume from "./assets/Resume.pdf";
import Contact from "./Contact";

function Body() {
  // ascii art rotations
  const asciiArtArray = [
    `
  ⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠋⠉⠁⠀⠀⠀⠀⠈⠉⠙⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣿⣿⣿⣿⣿
  ⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣦⠀⠀⠀⠈⢻⣿⣿⣿
  ⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⣶⣾⣷⣶⣆⠸⣿⣿⡟⠀⠀⠀⠀⠀⠹⣿⣿
  ⣿⠃⠀⠀⠀⠀⠀⠀⣠⣾⣷⡈⠻⠿⠟⠻⠿⢿⣷⣤⣤⣄⠀⠀⠀⠀⠀⠀⠘⣿
  ⡏⠀⠀⠀⠀⠀⠀⣴⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣦⠀⠀⠀⠀⠀⠀⢹
  ⠁⠀⠀⢀⣤⣤⡘⢿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⡇⠀⠀⠀⠀⠀⠈
  ⠀⠀⠀⣿⣿⣿⡇⢸⣿⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣉⣉⡁⠀⠀⠀⠀⠀⠀
  ⡀⠀⠀⠈⠛⠛⢡⣾⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⡇⠀⠀⠀⠀⠀⢀
  ⣇⠀⠀⠀⠀⠀⠀⠻⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⠟⠀⠀⠀⠀⠀⠀⣸
  ⣿⡄⠀⠀⠀⠀⠀⠀⠙⢿⡿⢁⣴⣶⣦⣴⣶⣾⡿⠛⠛⠋⠀⠀⠀⠀⠀⠀⢠⣿
  ⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠘⠿⠿⢿⡿⠿⠏⢰⣿⣿⣧⠀⠀⠀⠀⠀⣰⣿⣿
  ⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⠟⠀⠀⠀⢀⣼⣿⣿⣿
  ⣿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⣀⡀⠀⠀⠀⠀⢀⣀⣠⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿`,
    `
              $$ $$$$$ $$
              $$ $$$$$ $$
             .$$ $$$$$ $$.
             :$$ $$$$$ $$:
             $$$ $$$$$ $$$
             $$$ $$$$$ $$$
            ,$$$ $$$$$ $$$.
           ,$$$$ $$$$$ $$$$.
          ,$$$$; $$$$$ :$$$$.
         ,$$$$$  $$$$$  $$$$$.
       ,$$$$$$'  $$$$$  '$$$$$$.
     ,$$$$$$$'   $$$$$   '$$$$$$$.
  ,s$$$$$$$'     $$$$$     '$$$$$$$s.
$$$$$$$$$'       $$$$$       '$$$$$$$$$
$$$$$Y'          $$$$$          'Y$$$$$`,

    String.raw`
_-'''''-,           ,- '- .
.'   .- - |          | - -.  '.
/.'  /                     '.   \\
:/   :      _...   ..._      ''   :
::   :     /._ .' :'_.._\\     ||   :
::    '._ ./  ,'  :    \\ . _.''   .
\`:      /   |  -.  \\-. \\\\_      /
\\:._ _/  .'   .@)  \\@) ' '\\ ,.'
    _/,--'       .- .\\,-.'--'.
      ,'/''     (( \\ '  )
        /'/'  \\    '-'  (
        '/''  '._,-----'
          ''/'    .,---'
          ''/'      ;:
            ''/''  ''/
              ''/''/''
                '/'/'
                  ';`,
    `
            @@@%%%%%%%%%@@          
        @@@%%%%%%%%%#######%@@     
      @@@@%%%%%%%######?######%@   
      @@@@%%%%%%%#######:########%@ 
    @@@@@%%%%%%#########:??#######% 
    @@@%%%%%####???###?+:??####?###@
  @@@%%%%%%#?+???###?:+?##??###?##@
@??%@%%%##????????++:;+?+????????#@
#  ;?%#?+; ..::+?+ ::;++++++?+???# 
%  :?%;;;:  ....:#+ :;+++????+???@ 
#;;+??+++:   ...;##: ;;;++???++?%  
%#%+::++?#+;:::;?##+ ;;;;++??++#   
%?% : :???+?++???######?+;;+??#    
@%# ; ;??;;+ ;???+;;:..::.:+?%     
  @???;;?+;;;+ ;:;;......;;;#@      
  %##?++?+++;+ ??% @%%@@@@          
  @_:?_:+_:_:#%`,

    String.raw`
( The best cure for insomnia is to get a )
( lot of sleep. -W.C. Fields             )
 ---------------------------------------- 
        o   ^__^
         o  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||`,
    `
                 ▟█▙
                ▟███▙
               ▟█████▙
              ▟███████▙
             ▂▔▀▜██████▙
            ▟██▅▂▝▜█████▙
           ▟█████████████▙
          ▟███████████████▙
         ▟█████████████████▙
        ▟███████████████████▙
       ▟█████████▛▀▀▜████████▙
      ▟████████▛      ▜███████▙
     ▟█████████        ████████▙
    ▟██████████        █████▆▅▄▃▂
   ▟██████████▛        ▜█████████▙
  ▟██████▀▀▀              ▀▀██████▙
 ▟███▀▘                       ▝▀███▙
▟▛▀                               ▀▜▙`,
    `
                 ,xNMM.          
               .OMMMMo           
               OMMM0,            
     .;loddo:' loolloddol;.      
   cKMMMMMMMMMMNWMMMMMMMMMM0:    
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.    
 XMMMMMMMMMMMMMMMMMMMMMMMX.      
;MMMMMMMMMMMMMMMMMMMMMMMM:       
:MMMMMMMMMMMMMMMMMMMMMMMM:       
.MMMMMMMMMMMMMMMMMMMMMMMMX.      
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.    
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk  
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.   
    kMMMMMMMMMMMMMMMMMMMMMMd     
     ;KMMMMMMMWXXWMMMMMMMk.      
       .cooc,.    .,coo:.`,
  ];
  const ddQuoteArray = [
    "I've never known any problem that couldn't be solved with a little nap.",
    "Banana slamma.",
    "Hmmm, to know everything, I must give up everything...",
    "It is on... like Donkey Kong!",
    "Can you pass me a banana, little buddy?",
    "What's Leonardo DiCaprio got that I don't have?",
  ];
  const [asciiArt, setAsciiArt] = useState("");
  const [ddQuote, setDdQuote] = useState("");

  const setNewQuote = () => {
    const randomDdQuote =
      ddQuoteArray[Math.floor(Math.random() * ddQuoteArray.length)];
    setDdQuote(randomDdQuote);
  };

  const setNewAscii = () => {
    const randomArt =
      asciiArtArray[Math.floor(Math.random() * asciiArtArray.length)];
    setAsciiArt(randomArt);
  };

  useEffect(() => {
    setNewQuote();
  }, []);

  useEffect(() => {
    setNewAscii();
  }, []);

  return (
    <main>
      <div className="container">
        <div className="t-menu two_fifth" aria-label="About me">
          <div className="about-me">
            <div id="aboutmetext">
              {">"} who am i...
              <p>
                My name is <a className="highlight">Brandon Thach</a> and I'm an
                aspiring full-stack software developer from Chicago, Illinois. I
                am currently studying towards my Bachelors in Computer Science
                at the <strong>University of Illinois Chicago (UIC)</strong>,
                where I'm set to graduate in the fall of 2025.
              </p>
              <p>
                Ever since I was a child, I've had a strong infatuation with
                computers and a deep desire to grow in my understanding of their
                inner workings. From the day I took my first computer science
                class in high school, I knew this is what I wanted to pursue as
                my career.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className="t-menu one_third dd-background"
          aria-label="quote of the day"
        >
          <div id="pfp-image">
            <img src={dk} className="pfp"></img>
            <p style={({ paddingTop: "none" }, { marginTop: "4px" })}>
              "{ddQuote}"
            </p>
          </div>
          <button type="reload" onClick={setNewQuote}>
            New Quote
          </button>
        </div>
        <div className="t-menu one_third" aria-label="My links">
          Resume:{" "}
          <a href={resume} target="_blank">
            [OPEN PDF]
          </a>
          <br></br>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/brandon-thach-a64870227/"
            target="_blank"
          >
            [OPEN LINK]
          </a>
          <br></br>
          GitHub:{" "}
          <a href="https://github.com/BrandonT17" target="_blank">
            [OPEN LINK]
          </a>
          <br></br>
          <hr></hr>
          <h2 className="highlight">Contact Me</h2>
          <Contact></Contact>
        </div>
      </div>
      <div className="container">
        <div
          className="t-menu one_half"
          aria-label="Blog"
          style={{ paddingTop: "5px" }}
        >
          <p>
            <ul className="blog">
              <li className="blog-entry">
                05/17/25 01:03PM - Finally 21!!! (nothing has changed)
              </li>
              <li className="blog-entry">
                05/24/25 07:37PM - This summer 2025, I am sharpening my knowledge of data structures and algorithms, seeking to grow deeper in my understanding of Java, C, and Golang. I am also continuing in my journey into the Linux world, experimenting with more linux distrobutions and using them to revive old hardware. I will be taking an advanced algorithms class over the summer, as well as working at the pharmacy and with my university in teaching a software engineering summer camp.
              </li>
            </ul>
          </p>
        </div>
        <div className="t-menu one_half" aria-label="ASCII of the Day">
          <div className="ascii-container">
            <pre>{asciiArt}</pre>
          </div>
          <button type="reload" onClick={setNewAscii}>
            New ASCII
          </button>
        </div>
      </div>
      <div className="container">
        <div className="t-menu" aria-label="portfolio">
          {">"} my stuff...
          <ul>
            <li>
              Programming Languages: Python, Java, C/C++, HTML, CSS, JavaScript,
              Rust, F#, SQLite, SQL, Golang
            </li>
            <li>
              Technologies: Git, UNIX, React.js, AngularJS, Vim/NeoVim, Java
              Swing, GoogleTest FrameWork (C++), LINUX, JavaFX
            </li>
            <li>Spoken Languages: English, Spanish, Khmer</li>
            <li>
              Notable Courses:{" "}
              <a style={{ color: "rgb(210, 105, 30)" }}>
                Discrete Math, Programming Practicum (C/C++), Java Data
                Structures (Java), Data Structures & Algorithms (C++), Machine
                Organization (C/x86-x64), Systems
                Programming (C/x86-x64), Software Design, Programming Language
                Design & Implementation (Python, F#, Golang), <strong>[IN-PROGRESS]</strong> Advanced Algorithms
              </a>
            </li>
            <li>
              <a>
              Experience: Pharmacy Technician, SparkHacks Hackathon 2025, <bold>Secondhand Talent</bold> Web Designer + Graphic Designer, <bold>UIC College of Engineering</bold> Undergrad Teaching Assistant
              </a>
            </li>          
          </ul>
          <h1>Projects</h1>
          <hr></hr>
          <p className="comment">
            some of my projects :)
          </p>
          <br></br>
          <a className="highlight">
            "MyBusinessBoard - SparkHacks 2025 Hackaton"
          </a>
          <p>
            Built a social-media management app that allows business to keep
            track of their social media accounts and track analytics and
            engagement all from one location- using ReactJS for the frontend and
            GOlang for the backend (to connect to the Instagram and Twitter
            API).
          </p>
          <br></br>
          <a className="highlight">My Intentions Board</a>
          <p>
            Created a web application using AngularJS that allows students at
            the St. John Paul II Newman Center to interact with each other
            online, posting prayer intentions for one another, with added
            implementation that allows users to save posts and choose between
            posting with their name visible or hidden. Firebase was used to implement a quick and easy authorization method for students to sign-in.
          </p>
          <br></br>
          <a className="highlight">C++ Encryption/Decryption Cipher</a>
          <p>
            A program that implements several vector/string manipulation
            techniques to encrypt, decrypt, and decipher text. The program
            accepts user input through the console as well as through an
            input-file (.txt)- this also applies to program output. Notably, a
            quadgram scoring algorithm is used to determine the accuracy of the
            decryptions.
          </p>
          <br></br>
          <a className="highlight">Java Student Information System (SIS)</a>
          <p>
            My first full-stack development project (in-progress). Using
            object-oriented programming concepts, I developed a Student
            Information System (SIS) from scratch, allowing teachers to create
            courses, students, and assignments all in a cohesive ecosystem that
            implements several core functionalities such as grading, generating
            reports, and adding/removing objects from classes. The next
            development stage will utilize Java Swing (Java's GUI) to create a
            fully functional front end and SQL to implement save data
            operations.
          </p>
          <br></br>
          <a className="highlight">OK Weather App</a>
          <p>
            Developed a JavaFX application to display live weather information
            using the Nation Weather Service API, allowing users to see daily
            forecast information and three-day forecast information
          </p>
          <br></br>
          <a className="highlight">8 Wonders of the World Blog</a>
          <p>
            My first web development project. Utilized HTML, CSS, and some
            JavaScript (plus additional APIs) to create a blog website from
            scratch. The website includes a fully functional quiz, site
            navigation, and a "Contact Me" form that allows users to send
            messages straight to my inbox.
          </p>
          <br></br>
          <a className="highlight">Portfolio Website</a>
          <p>
            This website (the one you're looking at right now) was built using
            the <strong>React.js</strong> web development framework and the{" "}
            <strong>Vite</strong> build tool. Using the main front-end languages
            (HTML/CSS/JS), I was able to develop this beautiful website from
            scratch and learn the "ins n' outs" of React- a quintessential web
            development skill in today's market.
          </p>
          <br></br>
          <a className="highlight">Search Engine</a>
          <p>
            A query-based search engine that indexes and queries data from
            user-inputted files. By mapping keywords to references (using
            several vector, map, string, and file processing techniques), the
            user is given a list of possible sources as a result of their search
            token. Wrote tests using the GoogleTest Framework to ensure
            performance.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Body;
