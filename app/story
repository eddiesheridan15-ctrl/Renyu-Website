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
              I grew up in Milltown, a parish of about a thousand people in the
              west of Ireland. We had PlayStations and The Simpsons at six like
              everyone else, but a lot of my childhood was spent outside with my
              brother and sister: in the fields, in the forest down the road, at
              the lake.
            </p>
            <p style={para}>
              My mum used to take me to the library, and I&apos;d come home with
              books about the Amazon, African safari animals and the natural
              world. I wanted to be a vet, then a zoologist. David Attenborough
              was my hero. Still is.
            </p>
            <p style={para}>
              One Christmas, I asked for the money to go to children in Africa
              instead of presents, then quietly panicked on Christmas Eve when I
              realised what I&apos;d done. I was too stubborn to take it back.
              My dad and I have talked ever since about doing something real
              there together.
            </p>
            <p style={para}>
              At twenty, through my family&apos;s restaurant, we cooked proper
              meals for homeless people in Galway every Tuesday for a year. It
              taught me the thing RENYU is built on: business can be an engine
              for good, and doing good consistently beats doing it once.
            </p>
            <p style={para}>
              Then I spent a year in South America, wild pumas in Patagonia, the
              Amazon in Peru, plankton glowing off Cartagena, and months in
              Botswana surrounded by more life than I knew one place could hold.
              Everywhere, I felt the same two things: awe at how alive this
              planet still is, and anger at what we&apos;re doing to it.
            </p>
            <p style={para}>
              My dad and I once tried to get a million trees funded in Africa.
              It fell through. I couldn&apos;t plant them alone, so I built
              RENYU, so companies like yours can help fund the work: land,
              wildlife and water.
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
