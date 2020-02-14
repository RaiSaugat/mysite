import React, { useEffect } from "react";
import anime from "animejs";

function App() {
  useEffect(() => {
    let tl = anime.timeline({
      easing: "cubicBezier(.5, .05, .1, .3)",
      duration: 800
    });

    tl.add({
      targets: ".wrapper .reveal",
      translateY: -200,
      delay: 1200,
      opacity: 0
    })
      .add({
        targets: ".wrapper .second",
        translateY: -200,
        opacity: 1
      })
      .add({
        targets: ".wrapper .socials a",
        translateY: -180,
        delay: function(el, i) {
          return i * 100;
        },
        opacity: 1,
        easing: "easeOutQuad"
      });
  });

  return (
    <div className="App">
      <div class="wrapper">
        <div class="reveal">
          <h1>Welcome</h1>
        </div>
        <div class="second">
          <h1>Saugat Rai</h1>
          <p>&lt; Frontend Engineer &gt;</p>
        </div>
        <div class="socials">
          <a
            href="https://github.com/raisaugat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/saugat-rai-02385311a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://codepen.io/Raisaugat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-codepen"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
