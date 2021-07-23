import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

function Home() {
  return (
    <div>
      <div className="grid-container">
        <header>
          <div className="item1">
            <Header/>
            <h1>Home</h1>
            <div className="text-center">
              <a href="https://www.fieldagent.net/">
                https://www.fieldagent.net/
              </a>
              <a href="https://www.fbitraining.org/fbi-field-agent/">
                https://www.fbitraining.org/fbi-field-agent/
              </a>
              <a href="https://www.indeed.com/cmp/Field-Agent/reviews">
                https://www.indeed.com/cmp/Field-Agent/reviews
              </a>
              <a href="https://en.wikipedia.org/wiki/Field_agent">
                https://en.wikipedia.org/wiki/Field_agent
              </a>
            </div>
          </div>
        </header>
        <div>
          <main></main>
          <nav>
          </nav>
          <nav>
            <NavBar/>
          </nav>
          <footer>
            <div className="item4">
              <p>&copy; Field Agent 2021</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
