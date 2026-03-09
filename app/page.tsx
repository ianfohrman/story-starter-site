import Image from "next/image";

const CTA_URL = "https://storystarter-one.vercel.app/";

const films = [
  { title: "90s Brand Story" },
  { title: "30s Brand Sizzle" },
  { title: "30–60s Founder Statement" },
  { title: "3× 30–60s Stakeholder Statements" },
  { title: "3× 15–30s B-roll Social Cuts" },
];

const photos = [
  { title: "10 Edited Photo Assets", note: "people, environment, product, process" },
];

const steps = [
  {
    n: "01",
    title: "Discovery Call",
    body: "We learn who you are, what you're building, and what success looks like. We walk you through our process.",
  },
  {
    n: "02",
    title: "Discovery Forms",
    body: "You (or your internal lead) fill out quick structured forms.",
  },
  {
    n: "03",
    title: "Pre-Production Call",
    body: "We walk you through the process, assign responsibilities, and make sure everyone is aligned. Your main lift: scheduling your stakeholders for production day.",
  },
  {
    n: "04",
    title: "Call Sheet + Details Delivered",
    body: "You get a clear schedule, interview plan, and shot priorities.",
  },
  {
    n: "05",
    title: "Production Day",
    body: "A TPW mini-crew captures interviews + B-roll on-site. High efficiency. Zero chaos. We guide everything.",
  },
  {
    n: "06",
    title: "Post-Production",
    note: "2 weeks",
    body: "We cut your full suite of videos and stills.",
  },
  {
    n: "07",
    title: "Feedback Round",
    body: "One consolidated revision pass across all deliverables.",
  },
];

const reasons = [
  "Proven TPW process distilled into a fast, approachable package",
  "High-value storytelling without the full custom-production overhead",
  "Low lift for your team — just show up and answer questions",
  "Designed for small businesses but executed at agency quality",
  "Content library in 14 days, not months",
];

const addons = [
  {
    title: "Creative Consult",
    price: "+$1,250",
    body: "A TPW writer or creative director reviews your Discovery Forms and provides a round of written feedback to strengthen your brand story, founder message, and stakeholder talking points.",
  },
  {
    title: "Team Headshots",
    price: "+$500",
    note: "1–8 people",
    body: "Professional on-site headshots captured during production day. Includes light retouching and up to 8 final edited portraits.",
  },
  {
    title: "Team Headshots",
    price: "+$2,000",
    note: "8–20 people",
    body: "Professional on-site headshots captured during production day. Includes light retouching and up to 20 final edited portraits.",
  },
  {
    title: "Brand Photography Mini-Pack",
    price: "+$1,250",
    body: "An expanded photo session added to production day. Includes 15 additional edited stills of people, product, and environment.",
  },
  {
    title: "Social Kickstart Pack",
    price: "+$3,000",
    body: "A 30-day starter kit using Story Starter footage and photos: 8 edited posts (video or photo), suggested captions, and a simple posting schedule.",
  },
  {
    title: "Additional Stakeholder Statements",
    price: "+$650 each",
    body: "Add more 30–60 second stakeholder videos beyond the three included in the core package.",
  },
  {
    title: "Longform Interview Transcript + Key Takeaways",
    price: "+$500",
    body: "Formatted transcripts of your interviews plus a clean summary of key messages and usable quotes for marketing, pitch decks, or your website.",
  },
  {
    title: "Premium Color Grade Upgrade",
    price: "+$500",
    body: "A DP-led color pass across all films for a more polished, cinematic finish.",
  },
  {
    title: "Full Photo Gallery Delivery",
    price: "+$600",
    body: "Receive the full gallery of lightly corrected stills from the shoot, instead of only the 10 edited selects.",
  },
  {
    title: "Extra Edit Rounds",
    price: "+$750 per round",
    body: "More rounds of revision with the TPW editor. This allows you to tweak and adjust the final product to your vision.",
  },
];

// Shared label style
const sectionLabel: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#999",
  fontWeight: 600,
};

const sectionLabelDark: React.CSSProperties = {
  ...sectionLabel,
  color: "#444",
};

export default function Page() {
  return (
    <>
      {/* ── STICKY HEADER ────────────────────────────────────────────────── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: "#fff",
          borderBottom: "1px solid #e8e8e8",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 48px",
          height: 64,
        }}
      >
        <Image
          src="/TPW_black_logo.png"
          alt="The Public Works"
          width={125}
          height={40}
          style={{ objectFit: "contain" }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <span style={{ fontSize: 12, color: "#aaa", letterSpacing: "0.06em" }}>Story Starter</span>
          <a
            href={CTA_URL}
            style={{
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
              padding: "8px 20px",
              backgroundColor: "#0a0a0a",
              borderRadius: 2,
            }}
          >
            Get Started
          </a>
        </div>
      </header>

    <main>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          backgroundColor: "#0a0a0a",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "0 48px",
          paddingTop: 64,
        }}
      >
        {/* Nav spacer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "24px 0",
            borderBottom: "1px solid #1c1c1c",
          }}
        >
          <span style={{ fontSize: 12, color: "#2a2a2a", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            A packaged production service
          </span>
        </div>

        {/* Headline */}
        <div style={{ paddingTop: 40, paddingBottom: 40 }}>
          <h1
            style={{
              fontSize: "clamp(56px, 9vw, 120px)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
              color: "#fff",
              marginBottom: 48,
              maxWidth: 1000,
            }}
          >
            A packaged
            <br />
            production service
            <br />
            for brands ready
            <br />
            to grow.
          </h1>
          <p style={{ fontSize: 20, color: "#888", fontWeight: 300, maxWidth: 520, lineHeight: 1.6, marginBottom: 0 }}>
            Photo and video. Flat rate. Delivered in two weeks.
          </p>
        </div>

        {/* Bottom detail bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
            borderTop: "1px solid #1c1c1c",
          }}
        >
          <div style={{ display: "flex", gap: 40 }}>
            {[
              { label: "Price", value: "$13,000 flat" },
              { label: "Timeline", value: "14-day delivery" },
              { label: "On-site", value: "One production day" },
            ].map((item) => (
              <div key={item.label}>
                <p style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#333", marginBottom: 4 }}>
                  {item.label}
                </p>
                <p style={{ fontSize: 13, color: "#888", fontWeight: 400 }}>{item.value}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg className="scroll-arrow" width={14} height={14} viewBox="0 0 16 16" fill="none" style={{ color: "#333" }}>
              <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#333" }}>Scroll</span>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#fff", padding: "100px 48px", borderTop: "1px solid #e8e8e8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ ...sectionLabel, marginBottom: 48 }}>Who this is for</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <p
              style={{
                fontSize: "clamp(22px, 2.4vw, 30px)",
                fontWeight: 400,
                lineHeight: 1.55,
                color: "#0a0a0a",
                letterSpacing: "-0.01em",
              }}
            >
              Startups, small businesses, and any company that knows they need
              content but doesn&apos;t know where to start — or doesn&apos;t
              have the bandwidth to do it themselves.
            </p>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.9, color: "#555", marginBottom: 24 }}>
                If you need to tell your story, build trust, and find an audience,
                Story Starter gives you a seamless, low-lift, proven process for
                creating the essential assets every brand needs.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.9, color: "#555" }}>
                Whether you&apos;re looking to build awareness, generate traffic,
                or make the phone ring, our process is built to address your
                target audience and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATEMENT BREAK ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "100px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "clamp(32px, 4.5vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              color: "#fff",
              maxWidth: 900,
            }}
          >
            One production day. Two weeks of post.{" "}
            <span style={{ color: "#555" }}>
              A content library built to work across every channel.
            </span>
          </p>
        </div>
      </section>

      {/* ── WHAT YOU GET ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f5f5f5", padding: "100px 48px", borderTop: "1px solid #e8e8e8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <p style={{ ...sectionLabel, marginBottom: 48 }}>What you get</p>

          {/* Price */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 72, paddingBottom: 72, borderBottom: "1px solid #e0e0e0" }}>
            <div>
              <p
                style={{
                  fontSize: "clamp(64px, 9vw, 112px)",
                  fontWeight: 700,
                  letterSpacing: "-0.045em",
                  lineHeight: 1,
                  color: "#0a0a0a",
                  marginBottom: 8,
                }}
              >
                $13,000
              </p>
              <p style={{ fontSize: 13, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Flat rate — no surprises
              </p>
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#555" }}>
              A proven process to deliver you a powerful content package to tell
              your story through photos and video. Customizable to address your
              unique communication needs based on your business goals.
            </p>
          </div>

          {/* Deliverables */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px" }}>

            {/* Films */}
            <div>
              <p style={{ ...sectionLabel, marginBottom: 24 }}>Films</p>
              <ul style={{ listStyle: "none" }}>
                {films.map((f, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 15,
                      color: "#111",
                      fontWeight: 400,
                      padding: "18px 0",
                      borderBottom: "1px solid #e0e0e0",
                      borderTop: i === 0 ? "1px solid #e0e0e0" : "none",
                      lineHeight: 1.4,
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#ccc", flexShrink: 0, display: "inline-block" }} />
                    {f.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo */}
            <div>
              <p style={{ ...sectionLabel, marginBottom: 24 }}>Photo</p>
              <ul style={{ listStyle: "none" }}>
                {photos.map((p, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 15,
                      color: "#111",
                      fontWeight: 400,
                      padding: "18px 0",
                      borderBottom: "1px solid #e0e0e0",
                      borderTop: i === 0 ? "1px solid #e0e0e0" : "none",
                      lineHeight: 1.4,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                    }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#ccc", flexShrink: 0, display: "inline-block", marginTop: 8 }} />
                    <span>
                      {p.title}
                      {p.note && (
                        <span style={{ display: "block", fontSize: 12, color: "#999", marginTop: 4, fontWeight: 400 }}>
                          {p.note}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── THE PROCESS ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#fff", padding: "100px 48px", borderTop: "1px solid #e8e8e8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <p style={{ ...sectionLabel, marginBottom: 48 }}>The process</p>

          {/* Intro */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 72, paddingBottom: 72, borderBottom: "1px solid #ebebeb" }}>
            <p style={{ fontSize: "clamp(22px, 2.2vw, 28px)", fontWeight: 400, lineHeight: 1.5, color: "#0a0a0a", letterSpacing: "-0.01em" }}>
              A tight, predictable workflow that respects your time.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: "#555" }}>
              A TPW Director and producer walk you through refining your own
              story and educate you on the steps to bring it to life. Once
              we&apos;ve locked in a plan, a TPW Director and Director of
              Photography come to your business for one focused production day.
              We interview 3–8 stakeholders, capture essential B-roll, and
              build a suite of polished deliverables.
            </p>
          </div>

          {/* Steps */}
          <div>
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 1fr",
                  gap: "0 48px",
                  padding: "36px 0",
                  borderBottom: "1px solid #ebebeb",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: 700,
                    color: "#ebebeb",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    display: "block",
                    paddingTop: 2,
                  }}
                >
                  {step.n}
                </span>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#0a0a0a", lineHeight: 1.4, paddingTop: 6 }}>
                  {step.title}
                  {step.note && (
                    <span style={{ display: "inline", fontSize: 12, color: "#bbb", fontWeight: 400, marginLeft: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      {step.note}
                    </span>
                  )}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#777", paddingTop: 6 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── WHY STORY STARTER WORKS ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "100px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ ...sectionLabelDark, marginBottom: 64 }}>Why it works</p>
          <ul style={{ listStyle: "none" }}>
            {reasons.map((r, i) => (
              <li
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 48,
                  padding: "32px 0",
                  borderTop: "1px solid #1a1a1a",
                  borderBottom: i === reasons.length - 1 ? "1px solid #1a1a1a" : "none",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 40, fontWeight: 700, color: "#1e1e1e", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 300, lineHeight: 1.5, color: "#d0d0d0" }}>
                  {r}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ADD-ONS ──────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#fff", padding: "100px 48px", borderTop: "1px solid #e8e8e8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 64, paddingBottom: 48, borderBottom: "1px solid #ebebeb" }}>
            <p style={sectionLabel}>Add-ons</p>
            <p style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 300, color: "#0a0a0a", maxWidth: 480, textAlign: "right", lineHeight: 1.5 }}>
              Customize your package with any of the following.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px" }}>
            {addons.map((a, i) => (
              <div
                key={i}
                style={{ padding: "28px 0", borderBottom: "1px solid #ebebeb" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, marginBottom: 10 }}>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: "#0a0a0a", lineHeight: 1.35 }}>
                      {a.title}
                    </h3>
                    {a.note && (
                      <span style={{ fontSize: 12, color: "#aaa", display: "block", marginTop: 2 }}>
                        {a.note}
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#0a0a0a", whiteSpace: "nowrap", flexShrink: 0, letterSpacing: "-0.01em" }}>
                    {a.price}
                  </span>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: "#888" }}>
                  {a.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "100px 48px", color: "#fff", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 80, paddingBottom: 80, borderBottom: "1px solid #1a1a1a" }}>
            <div>
              <p style={{ ...sectionLabelDark, marginBottom: 32 }}>The Public Works</p>
              <h2
                style={{
                  fontSize: "clamp(40px, 5.5vw, 80px)",
                  fontWeight: 700,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.0,
                  color: "#fff",
                }}
              >
                Ready to tell
                <br />
                your story?
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end", gap: 24 }}>
              <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8, maxWidth: 380 }}>
                Story Starter is a great fit for brands that know they need to
                move but want a clear, guided process to get there.
              </p>
              <a
                href={CTA_URL}
                style={{
                  display: "inline-block",
                  padding: "14px 32px",
                  backgroundColor: "#fff",
                  color: "#0a0a0a",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  borderRadius: 2,
                }}
              >
                Start Your Story →
              </a>
              <p style={{ fontSize: 12, color: "#333" }}>
                hello@thepublicworks.biz
              </p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 12, color: "#333" }}>
              © {new Date().getFullYear()} The Public Works. Denver, CO.
            </p>
            <p style={{ fontSize: 12, color: "#2a2a2a" }}>Story Starter</p>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}
