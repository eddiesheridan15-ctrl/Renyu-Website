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

  const beat = {
    fontSize: 17,
    lineHeight: 1.65,
    color: "var(--ink)",
    margin: 0,
  };

  const beatWrap = {
    paddingBottom: 26,
    marginBottom: 26,
    borderBottom: "1px solid rgba(0,0,0,0.08)",
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

      {/* HERO: headline + intro left, landscape photo right */}
      <section style={{ paddingTop: 150, paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 1180 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
              gap: 56,
              alignItems: "center",
            }}
            className="story-hero"
          >
            <div>
              <div className="micro reveal" style={{ marginBottom: 18 }}>
                Our story
              </div>
              <h1
                className="reveal"
                style={{
                  fontFamily: "var(--head)",
                  fontWeight: 600,
                  fontSize: "clamp(34px, 5vw, 56px)",
                  lineHeight: 1.05,
                  color: "var(--ink)",
                  marginBottom: 24,
                }}
              >
                Why RENYU exists
              </h1>
              <p
                className="reveal"
                style={{
                  fontSize: 20,
                  lineHeight: 1.7,
                  color: "var(--ink)",
                  margin: 0,
                  maxWidth: 480,
                }}
              >
                Most companies want to do something meaningful for the planet.
                Most teams also have enough going on without another dry
                sustainability initiative. RENYU was built for the space
                between those two realities.
              </p>
            </div>

            <img
              src="/founder.jpg"
              alt="Eddie Sheridan in the field"
              className="reveal"
              style={{
                width: "100%",
                borderRadius: 22,
                display: "block",
                objectFit: "cover",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="container" style={{ maxWidth: 1180 }}>
        <div
          className="reveal"
          style={{
            borderTop: "1px solid rgba(0,0,0,0.10)",
            marginTop: 44,
            marginBottom: 44,
          }}
        />
      </div>

      {/* BODY: story beats left (in order), close right */}
      <section style={{ paddingTop: 0, paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 1180 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: 64,
              alignItems: "center",
            }}
            className="story-body"
          >
            {/* LEFT: four beats in narrative order */}
            <div className="reveal">
              <div style={beatWrap}>
                <p style={beat}>
                  The idea came during a year spent moving through some of the
                  most naturally rich places I&apos;d ever seen: Patagonia, the
                  Amazon, Tayrona Park on Colombia&apos;s coast, and
                  Botswana&apos;s Mashatu reserve. It made the natural world
                  feel less like an abstract cause and more like something
                  living, beautiful and worth protecting, and the crisis facing
                  it far more real.
                </p>
              </div>
              <div style={beatWrap}>
                <p style={beat}>
                  My background is not conservation work. I trained as a
                  mechanical engineer, then spent years in talent and brand
                  partnerships. I liked the craft, but I didn&apos;t feel
                  fulfilled: my passion had always been the planet, I just
                  hadn&apos;t found my way in yet. The question I kept circling
                  was a simple one. How do I spend my life on the thing I
                  actually love, and leave the world a little better than I
                  found it? How do I make the ten-year-old who watched David
                  Attenborough every week proud of where he ended up?
                </p>
              </div>
              <div style={beatWrap}>
                <p style={beat}>
                  Last year, my dad and I worked with a team to try to get a
                  million trees funded for planting in Africa. It didn&apos;t
                  happen. Not because people didn&apos;t care, but because
                  caring, on its own, doesn&apos;t move fast enough or far
                  enough. Good intentions needed a structure to run on.
                </p>
              </div>
              <div style={{ ...beatWrap, borderBottom: "none", marginBottom: 0, paddingBottom: 0 }}>
                <p style={beat}>
                  So I started building that structure instead. RENYU runs
                  four-week competitions inside companies: the company backs it
                  with a real donation, and verified projects protecting land,
                  wildlife and water get funded.
                </p>
              </div>
            </div>

            {/* RIGHT: the close */}
            <div
              className="reveal"
              style={{
                background: "rgba(0,0,0,0.02)",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 22,
                padding: "44px 44px 40px",
              }}
            >
              <div
                style={{
                  borderLeft: "3px solid var(--green)",
                  paddingLeft: 26,
                }}
              >
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.6,
                    color: "var(--ink)",
                    margin: "0 0 26px",
                  }}
                >
                  The goal isn&apos;t to help companies look like they care.
                  It&apos;s to help them do something real, and bring their
                  people with them.
                </p>
                <p
                  style={{
                    fontFamily: "var(--head)",
                    fontWeight: 600,
                    fontSize: "clamp(26px, 3vw, 34px)",
                    lineHeight: 1.25,
                    color: "var(--green-deep)",
                    margin: "0 0 26px",
                  }}
                >
                  Teams come together, and the planet gets a bit of itself back.
                </p>
                <div
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.10)",
                    paddingTop: 24,
                  }}
                >
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: "var(--ink)",
                      margin: "0 0 22px",
                    }}
                  >
                    RENYU comes from <em>renew</em>. That&apos;s the whole
                    mission: teams come together, and the planet gets a bit of
                    itself back.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--head)",
                      fontWeight: 600,
                      color: "var(--green-deep)",
                      margin: 0,
                    }}
                  >
                    &mdash; Eddie Sheridan, Founder
                  </p>
                </div>
              </div>
            </div>
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

      <style>{`
        @media (max-width: 860px) {
          .story-hero {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .story-hero img { order: 2; }
          .story-body {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </>
  );
}
