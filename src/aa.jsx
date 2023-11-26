function App() {
  return (
    <>
      <body>
        <div className="container">
          <article>
            <div className="athlets_container">
              <figure className="img_container">
                <img src="../src/assets/fb_desktop.svg" alt="football player" />
              </figure>
              <div className="txt_container">
                <header>
                  <h1 className="main_header">ATHLETS</h1>
                </header>
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
                <section>
                  <h3 className="sub_header">COLLABORATION</h3>
                  <p className="paragraph">
                    Work with other student athletes to  increase visability.
                    When you share and like other players videos it will
                    increase your visability as a player. This is the team work
                    aspect to Surface 1.
                  </p>
                </section>
                <section>
                  <h3 className="sub_header">GROWTH</h3>
                  <p className="paragraph">
                    Resources and tools for you to get better as a student
                    Athelte. Access to training classes, tutor sessions, etc 
                  </p>
                </section>
              </div>
            </div>
          </article>
        </div>
      </body>
    </>
  );
}
