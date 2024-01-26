import "../styles/about.scss";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    document.title = "4DEVS - About Me";
  });
  return (
    <>
      <div className="about">
        <div className="about__content">
          <h1>About Me</h1>
          <h2>
            Hello! I'm{" "}
            <a href="https://github.com/diogoagostinho" target="_blank">
              Diogo Agostinho
            </a>
            .
          </h2>
          <p>
            I'm a self-taught web developer, currently learning front-end
            development with React. I like to teach myself anything that catches
            my interest (like web development!).
          </p>
          <p>
            After I have a bigger knowledge about web development (front and
            back end), I wish to learn about 3D design and animations, maybe
            even game development. I also wish to learn about automotive
            mechanics.
          </p>
          <p>My biggest interests are cars 🚘 and coffee ☕</p>
          <p>Hope you find this little website enjoyable!</p>
        </div>
      </div>
    </>
  );
}
export default About;
