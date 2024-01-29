import { useEffect } from "react";
function Faq() {
  useEffect(() => {
    document.title = "4DEVS - FAQ";
  });
  return (
    <>
      <div className="about">
        <div className="about__content">
          <h1>Frequently Asked Questions</h1>
          <h3>Why can't I post anything?</h3>
          <p>
            You cannot post because, only my account can post any type of
            information. That is to reduce the size the database would take,
            instead you can have a look at the posts I made.
          </p>
          <h3>Why is the website so familiar?</h3>
          <p>That's easy! Because I took inspiration from DEV.to</p>
          <h3>Why didn't you use Forem to build the website?</h3>
          <p>
            Even though DEV.to is built with Forem, my objective is to learn web
            development, and not just use platforms like Forem to build a
            website, also it's not as "fun" as building the website from
            scratch.
          </p>
          <h3>Source code? 👀</h3>
          <p>
            Sure!{" "}
            <a target="_blank" href="https://github.com/diogoagostinho/4devs">
              Here's the GitHub repo
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Faq;
