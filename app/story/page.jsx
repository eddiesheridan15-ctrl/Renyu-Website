"use client";
import { useEffect } from "react";

const Mark = () => (
  <img src="/renyu-badge.png" alt="RENYU" width="256" height="256" />
);

export default function Story() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.14 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const para = {
    fontSize: 20,
    lineHeight: 1.7,
    color: "var(--ink)",
    marginBottom: 26,
    maxWidth: 680,
  };

  return (
    <>
      <nav id="nav">
        <div className="nav-in">
          <a href="/" className="brand" aria-label="Home">
            <span className="mark">
              <Mark />
            </span>
            <span>
              <span className="name">RENYU</span>
              <br />
              <span className="tag">
                Bring your team together. Leave the planet better.
              </span>
            </span>
          </a>
          <div className="nav-links">
            <a href="/#how">How It Works</a>
            <a href="/#impact">Impact</a>
            <a href="/story">Our Story</a>
            <a href="/#contact">Contact</a>
            <a href="/#contact" className="btn">
              <span className="dot" />
              Book Your Intro Call
            </a>
          </div>
        </div>
      </nav>

      <section style={{ paddingTop: 150, paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <div className="micro reveal" style={{ marginBottom: 18 }}>
            Our story
          </div>
          <h1
            className="reveal"
            style={{
              fontFamily: "var(--head)",
              fontWeight: 600,
              fontSize: "clamp(34px, 5vw, 54px)",
              lineHeight: 1.1,
              color: "var(--ink)",
              marginBottom: 34,
            }}
          >
            Why RENYU exists
          </h1>

          <img
            src="/founder.jpg"
            alt="Eddie Sheridan in the field"
            className="reveal"
            style={{
              width: "100%",
              maxWidth: 760,
              borderRadius: 22,
              marginBottom: 40,
              display: "block",
            }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <div className="reveal">
            <p style={para}>
              Most companies want to do something meaningful for the planet.
              Most teams also have enough going on without another dry
              sustainability initiative. RENYU was built for the space between
              those two truths.
            </p>
            <p style={para}>
              The idea came after a year spent moving through some of the
              wildest places I&apos;d ever seen: Patagonia, the Amazon,
              Colombia&apos;s coast, and Botswana&apos;s Mashatu reserve. It
              made the environmental crisis feel less like an abstract issue and
              more like something living, beautiful and fragile. You don&apos;t
              come back from that neutral.
            </p>
            <p style={para}>
              My background is not conservation work, and I won&apos;t pretend
              it is. I trained as a mechanical engineer, then spent years in
              talent and brand partnerships. What I kept coming back to was the
              same question: how do you turn good intentions into something
              people actually take part in?
            </p>
            <p style={para}>
              Last year, my dad and I tried to get a million trees funded in
              Africa. We failed. Not because people didn&apos;t care, but
              because caring isn&apos;t an engine. Goodwill on its own
              doesn&apos;t plant anything.
            </p>
            <p style={para}>
              So I started building the engine instead. RENYU runs four-week
              competitions inside companies: teams compete on everyday
              sustainable actions, the company backs it with a real donation,
              and verified projects protecting land, wildlife and water get
              funded.
            </p>
            <p style={para}>
              The goal isn&apos;t to help companies look like they care.
              It&apos;s to help them do something real, and bring their people
              with them.
            </p>
            <p style={{ ...para, marginBottom: 0 }}>
              RENYU comes from <em>renew</em>. That&apos;s the whole mission:
              teams come together, and the planet gets a bit of itself back.
            </p>
            <p
              style={{
                marginTop: 30,
                fontFamily: "var(--head)",
                fontWeight: 600,
                color: "var(--green-deep)",
              }}
            >
              &mdash; Eddie Sheridan, Founder
            </p>
          </div>
        </div>
      </section>

      <section className="closing" data-nav="dark" style={{ marginTop: 30 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <h2 className="reveal">Want your company to be part of it?</h2>
          <p className="lead-p reveal">
            A four-week competition your team will actually enjoy, and a real
            donation to a verified project at the end of it.
          </p>
          <a
            href="/#contact"
            className="btn btn-lg reveal"
            style={{ background: "var(--green)" }}
          >
            <span className="dot" style={{ background: "#fff" }} />
            Book a 20-minute intro call
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          <div
            className="brand"
            style={{ justifyContent: "center", display: "inline-flex" }}
          >
            <span className="mark">
              <Mark />
            </span>
            <span>
              <span className="name">RENYU</span>
              <br />
              <span className="tag">
                Bring your team together. Leave the planet better.
              </span>
            </span>
          </div>
          <div className="foot-links">
            <a href="/#how">How It Works</a>
            <a href="/#impact">Impact</a>
            <a href="/story">Our Story</a>
            <a href="/#contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/dpa">Data Processing Agreement</a>
          </div>
          <p className="tg">
            Renyu. Bring your team together. Leave the planet better.
          </p>
        </div>
      </footer>
    </>
  );
}
