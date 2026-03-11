import { useState } from "react";

const webDevSteps = [
  {
    phase: "Phase 1",
    label: "Foundations",
    duration: "0–2 months",
    color: "#00e5ff",
    items: [
      { title: "HTML Basics", desc: "Structure, tags, semantic elements, forms" },
      { title: "CSS Fundamentals", desc: "Box model, flexbox, grid, responsive design" },
      { title: "Git & GitHub", desc: "Version control, commits, pushing code" },
      { title: "Design Basics", desc: "Color theory, typography, spacing, contrast" },
    ],
  },
  {
    phase: "Phase 2",
    label: "Building Blocks",
    duration: "2–5 months",
    color: "#39ff14",
    items: [
      { title: "JavaScript", desc: "DOM manipulation, events, ES6+, fetch API" },
      { title: "Figma", desc: "Wireframing, prototyping, UI component design" },
      { title: "CSS Advanced", desc: "Animations, variables, preprocessors (Sass)" },
      { title: "Responsive & Accessibility", desc: "Mobile-first, ARIA, best practices" },
    ],
  },
  {
    phase: "Phase 3",
    label: "Going Deeper",
    duration: "5–9 months",
    color: "#ff6b35",
    items: [
      { title: "React or Vue", desc: "Components, state, props, hooks, routing" },
      { title: "UI/UX Design", desc: "User flows, design systems, Figma deep dive" },
      { title: "Tailwind CSS", desc: "Utility-first styling, rapid prototyping" },
      { title: "Deploy Projects", desc: "Vercel, Netlify — build your portfolio" },
    ],
  },
  {
    phase: "Phase 4",
    label: "Intermediate 🎯",
    duration: "9–12 months",
    color: "#f7c948",
    items: [
      { title: "Backend Basics", desc: "Node.js, REST APIs, databases (MongoDB/SQL)" },
      { title: "Portfolio & Brand", desc: "Personal site, 3–5 showcase projects" },
      { title: "Client Projects", desc: "Freelance work, real-world experience" },
      { title: "Business Ready", desc: "Pricing, proposals, project scoping" },
    ],
  },
];

const videoEditSteps = [
  {
    phase: "Phase 1",
    label: "Foundations",
    duration: "0–2 months",
    color: "#ff2d78",
    items: [
      { title: "Pick Your Software", desc: "DaVinci Resolve (free) or Premiere Pro" },
      { title: "Interface & Timeline", desc: "Cuts, trim, import/export, basic tools" },
      { title: "Storytelling Basics", desc: "Pacing, structure, narrative flow" },
      { title: "File Management", desc: "Organize footage, naming conventions" },
    ],
  },
  {
    phase: "Phase 2",
    label: "Core Skills",
    duration: "2–5 months",
    color: "#bf5fff",
    items: [
      { title: "Color Grading", desc: "LUTs, correction, cinematic looks" },
      { title: "Audio Editing", desc: "Mixing, noise removal, music sync" },
      { title: "Transitions & Effects", desc: "Jump cuts, J-cuts, motion effects" },
      { title: "YouTube / Reels", desc: "Format for short-form social media" },
    ],
  },
  {
    phase: "Phase 3",
    label: "Going Deeper",
    duration: "5–9 months",
    color: "#ff9500",
    items: [
      { title: "Motion Graphics", desc: "After Effects or Fusion — titles, intros" },
      { title: "Advanced Color", desc: "Scopes, masks, secondary color grading" },
      { title: "Brand Videos", desc: "Ads, promo content, client-style work" },
      { title: "Thumbnail Design", desc: "Photoshop/Canva, CTR-focused design" },
    ],
  },
  {
    phase: "Phase 4",
    label: "Intermediate 🎯",
    duration: "9–12 months",
    color: "#f7c948",
    items: [
      { title: "Reel & Portfolio", desc: "Highlight reel showcasing your range" },
      { title: "Client Workflow", desc: "Revisions, file delivery, communication" },
      { title: "Niche Down", desc: "YouTube, weddings, ads, social media" },
      { title: "Business Ready", desc: "Rates, contracts, finding first clients" },
    ],
  },
];

function RoadmapColumn({ title, emoji, steps, accentColor }) {
  const [openPhase, setOpenPhase] = useState(null);

  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        textAlign: "center",
        marginBottom: "2rem",
      }}>
        <div style={{ fontSize: "2.8rem", marginBottom: "0.3rem" }}>{emoji}</div>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
          fontWeight: 800,
          color: accentColor,
          letterSpacing: "-0.02em",
          margin: 0,
          textTransform: "uppercase",
        }}>{title}</h2>
        <p style={{ color: "#666", fontSize: "0.8rem", marginTop: "0.3rem", fontFamily: "'DM Mono', monospace" }}>12-month beginner → intermediate</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {steps.map((step, i) => {
          const isOpen = openPhase === i;
          return (
            <div key={i}
              onClick={() => setOpenPhase(isOpen ? null : i)}
              style={{
                border: `1.5px solid ${isOpen ? step.color : "#222"}`,
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.25s, box-shadow 0.25s",
                boxShadow: isOpen ? `0 0 20px ${step.color}33` : "none",
                background: "#0d0d0d",
              }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                padding: "0.9rem 1.1rem",
              }}>
                <div style={{
                  width: "28px", height: "28px",
                  borderRadius: "50%",
                  background: step.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: "#000",
                  flexShrink: 0,
                  fontFamily: "'DM Mono', monospace",
                }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#fff",
                  }}>{step.label}</div>
                  <div style={{
                    fontSize: "0.7rem",
                    color: "#555",
                    fontFamily: "'DM Mono', monospace",
                  }}>{step.duration}</div>
                </div>
                <div style={{
                  color: step.color,
                  fontSize: "1rem",
                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.25s",
                }}>›</div>
              </div>

              {isOpen && (
                <div style={{
                  padding: "0 1.1rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  borderTop: `1px solid ${step.color}44`,
                  paddingTop: "0.8rem",
                }}>
                  {step.items.map((item, j) => (
                    <div key={j} style={{
                      display: "flex",
                      gap: "0.7rem",
                      alignItems: "flex-start",
                    }}>
                      <div style={{
                        width: "6px", height: "6px",
                        borderRadius: "50%",
                        background: step.color,
                        marginTop: "0.35rem",
                        flexShrink: 0,
                      }} />
                      <div>
                        <div style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.82rem",
                          color: "#ddd",
                        }}>{item.title}</div>
                        <div style={{
                          fontSize: "0.72rem",
                          color: "#555",
                          fontFamily: "'DM Mono', monospace",
                          lineHeight: 1.4,
                        }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "#080808",
        padding: "2.5rem 1.5rem",
        fontFamily: "'DM Mono', monospace",
      }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.7rem",
            color: "#444",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "0.6rem",
          }}>YOUR 12-MONTH PLAN</p>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}>FROM ZERO<br />
            <span style={{
              background: "linear-gradient(90deg, #00e5ff, #ff2d78)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>TO BUSINESS</span>
          </h1>
          <p style={{
            color: "#444",
            marginTop: "0.8rem",
            fontSize: "0.78rem",
            letterSpacing: "0.05em",
          }}>Click each phase to expand your roadmap</p>
        </div>

        {/* Columns */}
        <div style={{
          display: "flex",
          gap: "2rem",
          maxWidth: "860px",
          margin: "0 auto",
          flexWrap: "wrap",
        }}>
          <RoadmapColumn
            title="Web Dev & Design"
            emoji="🖥️"
            steps={webDevSteps}
            accentColor="#00e5ff"
          />
          <RoadmapColumn
            title="Video Editing"
            emoji="🎬"
            steps={videoEditSteps}
            accentColor="#ff2d78"
          />
        </div>

        {/* Business Banner */}
        <div style={{
          maxWidth: "860px",
          margin: "2.5rem auto 0",
          border: "2.5px solid #00d9ffc9",
          borderRadius: "12px",
          padding: "1.2rem 1.5rem",
          background: "linear-gradient(90deg, #10363a, #4e0d24)",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
          boxShadow: "0 0 30px #ff0a7cc9",
        }}>
          <div style={{ fontSize: "1.8rem" }}>🚀</div>
          <div>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              color: "#f7c948",
              fontSize: "1rem",
              letterSpacing: "-0.01em",
            }}>Month 12+ — #Launch Your Business Together</div>
            <div style={{
              color: "#ffffff",
              fontSize: "0.72rem",
              fontFamily: "'DM Mono', monospace",
              marginTop: "0.3rem",
              lineHeight: 1.6,
            }}>
              Web dev + design + video editing = a full creative agency. Offer websites, branding, and video content as a package. Start with small local businesses and content creators.
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
