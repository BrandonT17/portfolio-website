import pfp from './assets/IMG_5730.jpg'

function Body() {
  return(
    <body>
      <div className="t-menu three_fifth">
        > ABOUT ME
        <p>My name is Brandon Thach and I am an aspiring software developer from Chicago, Illinois. I am currently studying for my BS in Computer Science at the University of Illinois Chicago (UIC).</p><p>Since I was a child, I had an infatuation with computers and a deep desire to grow in my understanding of technology; thus, I discovered by passion in coding. </p>
      </div>
      <div className="t-menu two_fifth">
        > MY LINKS
        <hr></hr>
        Resume:
        <hr></hr>
        Contact Me:
        <ul>
          <li>Phone: (773) 592-6753</li>
          <li>Email: brandonthach17@gmail.com</li>
          <li>GitHub: brandonT17/github.com</li>
        </ul>
      </div>
      <div className="t-menu">
        > PORTFOLIO:
        <ul>
          <li>Programming Languages: Python, Java, C/C++, HTML, CSS, JavaScript, Rust</li>
          <li>Technologies: Git, UNIX, React.js, Vim/NeoVim, Java Swing, GoogleTest FrameWork (C++)</li>
          <li>Spoken Languages: English, Spanish, Khmer</li>
        </ul>

      </div>
    </body>
  );
}

export default Body
