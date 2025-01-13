import React, { useState, useEffect } from "react";
import dk from "./assets/donkeykong.png";
import resume from "./assets/Resume (PDF).pdf";
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

  useEffect(() => {
    const randomArt =
      asciiArtArray[Math.floor(Math.random() * asciiArtArray.length)];
    setAsciiArt(randomArt);
  }, []);

  useEffect(() => {
    const randomDdQuote =
      ddQuoteArray[Math.floor(Math.random() * ddQuoteArray.length)];
    setDdQuote(randomDdQuote);
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
          className="t-menu one_third"
          aria-label="quote of the day"
          style={{ height: "333px", backgroundColor: "lightgrey" }}
        >
          <div id="pfp-image">
            <img src={dk} className="pfp"></img>
            <p>"{ddQuote}"</p>
            <strong>- Donkey Kong</strong>
          </div>
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
                01/12 04:19PM [4] -{" "}
                <a href="https://www.youtube.com" target="_blank">
                  my_favorite_website
                </a>
              </li>
              <li className="blog-entry">
                01/12 03:20PM [3] -{" "}
                <a href="/portfolio-website/public/hello.html" target="_blank">
                  my_file
                </a>
              </li>
              <li className="blog-entry">
                01/12 02:11PM [2] - currently learning rust
              </li>
              <li className="blog-entry">01/12 01:01PM [1] - eating curry</li>
              <li className="blog-entry">
                01/01/0001 0:00AM [9999] - Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </li>
            </ul>
          </p>
        </div>
        <div className="t-menu one_half" aria-label="ASCII of the Day">
          <div className="ascii-container">
            <pre>{asciiArt}</pre>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="t-menu" aria-label="portfolio">
          {">"} my stuff...
          <ul>
            <li>
              Programming Languages: Python, Java, C/C++, HTML, CSS, JavaScript,
              Rust
            </li>
            <li>
              Technologies: Git, UNIX, React.js, Vim/NeoVim, Java Swing,
              GoogleTest FrameWork (C++)
            </li>
            <li>Spoken Languages: English, Spanish, Khmer</li>
            <li>
              Notable Courses:{" "}
              <a style={{ color: "rgb(210, 105, 30)" }}>
                Discrete Math, Programming Practicum (C/C++), Java Data
                Structures (Java), Data Structures & Algorithms (C++), Machine
                Organization (C/x86-x64), <strong>[IN-PROGRESS]</strong> Systems
                Programming (C/x86-x64), Software Design, Programming Language
                Design & Implementation, Software Design
              </a>
            </li>
          </ul>
          <h1>Projects</h1>
          <hr></hr>
          <p className="comment">
            (all of these projects are available on my GitHub)
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
