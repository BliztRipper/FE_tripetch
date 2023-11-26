import "./App.scss";

function App() {
  return (
    <>
      <body>
        <div class="athlets_container">
          <div class="header">
            <header>
              <h1 className="main_header">ATHLETS</h1>
            </header>
          </div>
          <div class="sub_header-1">
            <section>
              <div className="sub_header--wrapper">
                <div className="sub_header--li">01</div>
                <h3 className="sub_header">CONNECTION</h3>
              </div>
              <p className="paragraph">
                Connect with coaches directly, you can ping coaches to view
                profile.
              </p>
            </section>
          </div>
          <div class="sub_header-2">
            <section>
              <div className="sub_header--wrapper">
                <div className="sub_header--li">02</div>
                <h3 className="sub_header">COLLABORATION</h3>
              </div>
              <p className="paragraph">
                Work with other student athletes to  increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </p>
            </section>
          </div>
          <div class="sub_header-3">
            <section>
              <div className="sub_header--wrapper">
                <div className="sub_header--li">03</div>
                <h3 className="sub_header">GROWTH</h3>
              </div>
              <p className="paragraph">
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc 
              </p>
            </section>
          </div>
          <div class="image-1">
            <picture className="img_container">
              <source
                media="(min-width:769px)"
                srcset="../src/assets/fb_desktop.svg"
              />
              <source
                media="(min-width:321px)"
                srcset="../src/assets/fb_tablet.svg"
              />
              <img src="../src/assets/fb_mobile.svg" alt="football player" />
            </picture>
          </div>
          <div class="image-2"></div>
          <div class="image-3"></div>
        </div>
        <div class="player_container">
          <div class="header">
            <header>
              <h1 className="main_header">PLAYERS</h1>
            </header>
          </div>
          <div class="sub_header-1">
            <section>
              <div className="sub_header--wrapper">
                <div className="sub_header--li">01</div>
                <h3 className="sub_header">CONNECTION</h3>
              </div>
              <p className="paragraph">
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </p>
            </section>
          </div>
          <div class="sub_header-2">
            <section>
              <div className="sub_header--wrapper">
                <div className="sub_header--li">02</div>
                <h3 className="sub_header">COLLABORATION</h3>
              </div>
              <p className="paragraph">
                Work with recruiter to increase your chances of finding talented
                athlete.
              </p>
            </section>
          </div>
          <div class="sub_header-3">
            <section>
              <div className="sub_header--wrapper">
                <div className="sub_header--li">03</div>
                <h3 className="sub_header">GROWTH</h3>
              </div>
              <p className="paragraph">
                Save your time, recruit proper athlets for your team.
              </p>
            </section>
          </div>
          <div class="image-1">
            <picture className="img_container">
              <source
                media="(min-width:769px)"
                srcset="../src/assets/bas_desktop.svg"
              />
              <source
                media="(min-width:321px)"
                srcset="../src/assets/bas_tablet.svg"
              />
              <img src="../src/assets/bas_mobile.svg" alt="basketball player" />
            </picture>
          </div>
          <div class="image-2"></div>
          <div class="image-3"></div>
        </div>
      </body>
    </>
  );
}

export default App;
