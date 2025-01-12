import dk from "./assets/donkeykong.png";
import resume from "./assets/Resume (PDF).pdf";

function Body() {
  return (
    <main>
      <div className="container">
        <div className="t-menu three_fifth" aria-label="About me">
          <div className="about-me">
            <div id="aboutmetext">
              {">"} who am i...
              <p>
                My name is <a className="highlight">Brandon Thach</a> and I am
                an aspiring software developer from Chicago, Illinois. I am
                currently studying for my BS in Computer Science at the{" "}
                <strong>University of Illinois Chicago (UIC)</strong>.
              </p>
              <p>
                Since I was a child, I had an infatuation with computers and a
                deep desire to grow in my understanding of technology; thus, I
                discovered my passion for programming and software.{" "}
              </p>
            </div>
            <div id="pfp-image">
              <img src={dk} className="pfp"></img>
            </div>
          </div>
        </div>
        <div className="t-menu two_fifth" aria-label="My links">
          {">"} where to find me...
          <hr></hr>
          Resume:{" "}
          <a href={resume} target="_blank">
            my_resume.pdf
          </a>
          <hr></hr>
          Contact Me:
          <ul>
            <li>Email: brandonthach17@gmail.com</li>
            <li>
              LinkedIn:{" "}
              <a
                href="www.linkedin.com/in/brandon-thach-a64870227"
                target="_blank"
              >
                my_linkedin_page
              </a>
            </li>
          </ul>
          <hr></hr>
          My GitHub:{" "}
          <a href="https://github.com/BrandonT17" target="_blank">
            my_github_page
          </a>
        </div>
      </div>
      <div className="container">
        <div className="t-menu one_half" aria-label="Blog"></div>
        <div className="t-menu one_half" aria-label="ASCII of the Day"></div>
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
              Notable Courses Taken:
              <ul>
                <li>
                  Discrete Math, Programming Practicum (C/C++), Java Data
                  Structures (Java), Data Structures & Algorithms (C++), Machine
                  Organization (C/x86-x64), Systems Programming (C/x86-x64)
                </li>
              </ul>
            </li>
          </ul>
          <h1>Projects</h1>
          <hr></hr>
          <br></br>
          <a className="highlight">C++ Encryption/Decryption Cipher </a>
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
            My first full-stack development project. Using object-oriented
            programming concepts, I developed a Student Information System (SIS)
            from scratch, allowing teachers to create courses, students, and
            assignments all in a cohesive ecosystem that implements several core
            functionalities such as grading, generating reports, and
            adding/removing objects from classes. The next development stage
            will utilize Java Swing (Java's GUI) to create a fully functional
            front end and SQL to implement save data operations.
          </p>
          <br></br>
          <a className="highlight">8 Wonders of the World Blog</a>
          <p>
            My first web development project (in-progress). Utilized HTML, CSS, and some
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
        </div>
      </div>
    </main>
  );
}

export default Body;
