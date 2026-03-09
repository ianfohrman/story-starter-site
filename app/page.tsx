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

export default function Page() {
  return (
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
          padding: "48px",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", fontWeight: 500 }}>
            The Public Works
          </span>
          <a
            href="mailto:hello@thepublicworks.biz"
            style={{
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#555",
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.15s",
            }}
          >
            Get Started
          </a>
        </div>

        {/* Center headline */}
        <div style={{ maxWidth: 960, paddingTop: 80 }}>
          <p style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", marginBottom: 32, fontWeight: 500 }}>
            Story Starter
          </p>
          <h1
            style={{
              fontSize: "clamp(52px, 8vw, 112px)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              marginBottom: 40,
              color: "#fff",
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
          <p style={{ fontSize: 18, color: "#777", fontWeight: 300, maxWidth: 480, lineHeight: 1.6 }}>
            Photo and video. Flat rate. Delivered in two weeks.
          </p>
        </div>

        {/* Scroll indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 80 }}>
          <svg
            className="scroll-arrow"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            style={{ color: "#444" }}
          >
            <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#444" }}>Scroll</span>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#fff", padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "200px 1fr", gap: 80, alignItems: "start" }}>
          <div style={{ paddingTop: 6 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#bbb", fontWeight: 500 }}>
              Who this is for
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "clamp(22px, 2.5vw, 30px)",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "#0a0a0a",
                marginBottom: 36,
              }}
            >
              Startups, small businesses, and any company that knows they need
              content but doesn&apos;t know where to start — or doesn&apos;t
              have the bandwidth to do it themselves.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "#666", marginBottom: 20 }}>
              If you need to tell your story, build trust, and find an audience,
              Story Starter gives you a seamless, low-lift, proven process for
              creating the essential assets every brand needs.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "#666" }}>
              Whether you&apos;re looking to build awareness, generate traffic,
              or make the phone ring, our process is built to address your
              target audience and goals.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f4f4f4", padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Price + intro */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 80, alignItems: "start", marginBottom: 80 }}>
            <div style={{ paddingTop: 6 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#bbb", fontWeight: 500 }}>
                What you get
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "clamp(56px, 8vw, 104px)",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: "#0a0a0a",
                  marginBottom: 12,
                }}
              >
                $13,000
              </p>
              <p style={{ fontSize: 14, color: "#999", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 36 }}>
                Flat rate
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "#666", maxWidth: 560 }}>
                A proven process to deliver you a powerful content package to tell
                your story through photos and video. The process is customizable
                to address your unique communication needs based on your business
                goals.
              </p>
            </div>
          </div>

          {/* Deliverables */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 80 }}>
            <div />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 64px" }}>

              {/* Films */}
              <div>
                <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#bbb", fontWeight: 500, marginBottom: 28 }}>
                  Films
                </p>
                <ul style={{ listStyle: "none" }}>
                  {films.map((f, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: 15,
                        color: "#0a0a0a",
                        fontWeight: 400,
                        padding: "16px 0",
                        borderBottom: "1px solid #e0e0e0",
                        lineHeight: 1.4,
                      }}
                    >
                      {f.title}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Photo */}
              <div>
                <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#bbb", fontWeight: 500, marginBottom: 28 }}>
                  Photo
                </p>
                <ul style={{ listStyle: "none" }}>
                  {photos.map((p, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: 15,
                        color: "#0a0a0a",
                        fontWeight: 400,
                        padding: "16px 0",
                        borderBottom: "1px solid #e0e0e0",
                        lineHeight: 1.4,
                      }}
                    >
                      {p.title}
                      {p.note && (
                        <span style={{ display: "block", fontSize: 12, color: "#999", marginTop: 4 }}>
                          {p.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROCESS ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#fff", padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Intro */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 80, marginBottom: 80 }}>
            <div style={{ paddingTop: 6 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#bbb", fontWeight: 500 }}>
                The process
              </p>
            </div>
            <div>
              <p style={{ fontSize: "clamp(22px, 2.2vw, 28px)", fontWeight: 300, lineHeight: 1.55, color: "#0a0a0a", marginBottom: 24 }}>
                A tight, predictable workflow that respects your time.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "#666", maxWidth: 600 }}>
                A TPW Director and producer walk you through refining your own
                story and educate you on the steps to bring it to life. Once
                we&apos;ve helped you refine your story, we lock in a plan and a
                TPW Director and Director of Photography come to your business
                for one focused production day. We interview 3–8 stakeholders,
                capture essential B-roll, and build a suite of polished
                deliverables designed to work across your website, pitch decks,
                social channels, and fundraising materials.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 80 }}>
            <div />
            <div>
              {steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1fr",
                    gap: 32,
                    padding: "32px 0",
                    borderTop: "1px solid #ebebeb",
                  }}
                >
                  <span style={{ fontSize: 12, color: "#ccc", fontWeight: 500, paddingTop: 3, letterSpacing: "0.04em" }}>
                    {step.n}
                  </span>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
                      <h3 style={{ fontSize: 17, fontWeight: 600, color: "#0a0a0a", lineHeight: 1.3 }}>
                        {step.title}
                      </h3>
                      {step.note && (
                        <span style={{ fontSize: 12, color: "#bbb", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                          {step.note}
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: "#777" }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #ebebeb" }} />
            </div>
          </div>

        </div>
      </section>

      {/* ── WHY STORY STARTER WORKS ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "120px 48px", color: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "200px 1fr", gap: 80 }}>
          <div style={{ paddingTop: 6 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#444", fontWeight: 500 }}>
              Why it works
            </p>
          </div>
          <ul style={{ listStyle: "none" }}>
            {reasons.map((r, i) => (
              <li
                key={i}
                style={{
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: "#ccc",
                  padding: "28px 0",
                  borderTop: "1px solid #1e1e1e",
                  borderBottom: i === reasons.length - 1 ? "1px solid #1e1e1e" : "none",
                }}
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ADD-ONS ──────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#fff", padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 80, marginBottom: 64 }}>
            <div style={{ paddingTop: 6 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#bbb", fontWeight: 500 }}>
                Add-ons
              </p>
            </div>
            <p style={{ fontSize: "clamp(20px, 2.2vw, 26px)", fontWeight: 300, lineHeight: 1.6, color: "#0a0a0a" }}>
              Customize your package with any of the following.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 80 }}>
            <div />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 64px" }}>
              {addons.map((a, i) => (
                <div
                  key={i}
                  style={{
                    padding: "28px 0",
                    borderTop: "1px solid #ebebeb",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 10 }}>
                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 600, color: "#0a0a0a", lineHeight: 1.3 }}>
                        {a.title}
                      </h3>
                      {a.note && (
                        <span style={{ fontSize: 12, color: "#999", fontWeight: 400, display: "block", marginTop: 2 }}>
                          {a.note}
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", whiteSpace: "nowrap", flexShrink: 0 }}>
                      {a.price}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: "#999" }}>
                    {a.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "100px 48px", color: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#444", fontWeight: 500, marginBottom: 28 }}>
                The Public Works
              </p>
              <h2
                style={{
                  fontSize: "clamp(40px, 5.5vw, 80px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
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
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.75, maxWidth: 380 }}>
                Story Starter is a great fit for brands that know they need to
                move but want a clear, guided process to get there.
              </p>
              <a
                href="mailto:hello@thepublicworks.biz"
                style={{
                  display: "inline-block",
                  padding: "14px 32px",
                  backgroundColor: "#fff",
                  color: "#0a0a0a",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  borderRadius: 4,
                }}
              >
                Let&apos;s talk →
              </a>
              <p style={{ fontSize: 12, color: "#333" }}>
                hello@thepublicworks.biz
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: 96,
              paddingTop: 24,
              borderTop: "1px solid #1a1a1a",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: 12, color: "#333" }}>
              © {new Date().getFullYear()} The Public Works. Denver, CO.
            </p>
            <p style={{ fontSize: 12, color: "#2a2a2a" }}>
              Story Starter
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
