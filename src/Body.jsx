import pfp from "./assets/IMG_5730.jpg";
import resume from "./assets/Resume (PDF).pdf"

function Body() {
  return (
    <body>
        <div className="t-menu three_fifth">
          {">"} ABOUT ME
          <p>
            My name is <a class="highlight">Brandon Thach</a> and I am an aspiring software developer
            from Chicago, Illinois. I am currently studying for my BS in
            Computer Science at the University of Illinois Chicago (UIC).
          </p>
          <p>
            Since I was a child, I had an infatuation with computers and a deep
            desire to grow in my understanding of technology; thus, I discovered
            by passion for programming.{" "}
          </p>
        </div>
        <div className="t-menu two_fifth">
          {">"} MY LINKS
          <hr></hr>
          Resume: <a href={resume} target="_blank">my_resume.pdf</a> 
          <hr></hr>
          Contact Me:
          <ul>
            <li>Email: brandonthach17@gmail.com</li>
            <li>LinkedIn: <a href="www.linkedin.com/in/brandon-thach-a64870227" target="_blank">my_linkedin_page</a></li>
          </ul>
          <hr></hr>
          My GitHub: <a href="https://github.com/BrandonT17" target="_blank">my_github_page</a> 
        </div>
      <div className="t-menu">
        {">"} PORTFOLIO:
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
        </ul>
      </div>
    </body>
  );
}

export default Body;
