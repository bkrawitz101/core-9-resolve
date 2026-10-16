# **BUILD & ASSEMBLY IMPLEMENTATION PLAN — CORE9 RESOLVE™ BUSINESS**

Antigravity Modular Web Workflow — Layer 4 (Stage-Gated Execution & QA Protocol)

* **Project Name:** CORE9 RESOLVE™ Business  
* **Tech Stack:** React \+ Vite \+ Tailwind CSS \+ Lucide Icons

# **AGENT EXECUTION RULES (CRITICAL)**

1. **SEPARATE AUTHORSHIP FROM DESIGN:** You have full creative responsibility for visual presentation, layout, navigation, responsiveness, and digital experience. The approved words, concepts, terminology, and methodology remain unchanged.  
2. **STAGE-GATED BUILD:** Complete and approve Stage 1 (Landing Page Only) before building Stages 2, 3, and 4\.  
3. **BOOKING BUTTON SAFEGUARD:** The two Discovery buttons (S1\_CTA\_PRIMARY and S5\_CTA\_PRIMARY, plus NAV\_CTA\_PRIMARY) must reach the same booking or inquiry destination. Until that live destination is configured, they must open a clean "Discovery Session Request — Configuration Pending / Direct Contact" modal rather than appearing to accept live automated calendar bookings.

# **1\. APPLICATION FILE TREE ARCHITECTURE**

/src

 ├── /data

 │    └── businessCopyDeck.ts       \<-- 1:1 export from CORE9\_Business\_03\_Verbatim\_Copy\_Deck

 ├── /styles

 │    └── businessTheme.css         \<-- Deep Navy (\#070B14), Graphite (\#111726), Warm White (\#F7F5F0), Bronze (\#C59B5F)

 ├── /components

 │    ├── /layout

 │    │    ├── ExecutiveNavbar.tsx  \<-- Home | Approach | Team \+ Book a Discovery Session CTA \+ Mobile Drawer

|---|

 │    ├── /landing (STAGE 1\)

 │    │    ├── Section01Hero.tsx

 │    │    ├── Section02Recognition.tsx

 │    │    ├── Section03Difference.tsx

 │    │    ├── Section04Pathway.tsx

 │    │    ├── Section05Invitation.tsx

 │    │    └── ArchitecturalConvergenceSvg.tsx

 │    └── /modals

 │         └── DiscoveryInquiryModal.tsx

 ├── /pages

 │    ├── LandingPageStage1.tsx     \<-- STAGE 1 DELIVERABLE (Default Route '/')

 │    ├── OurApproachStage2.tsx     \<-- STAGE 2 DELIVERABLE ('/approach')

 │    ├── OurTeamStage2.tsx         \<-- STAGE 2 DELIVERABLE ('/team' — Standalone Digital Business Card)

 │    ├── Core9SystemStage3.tsx     \<-- STAGE 3 DELIVERABLE ('/system')

 │    └── BroadcastBlogStage4.tsx   \<-- STAGE 4 DELIVERABLE ('/insights')

 └── App.tsx

# **2\. THE 4-STAGE IMPLEMENTATION SEQUENCE (FROM PART 6 OF BRIEF)**

## **STAGE 1 — LANDING PAGE ONLY (IMMEDIATE PRIORITY)**

* **Scope:** Build ONLY the five approved sections (01 Hero, 02 Recognition, 03 The Difference, 04 The Pathway, 05 Invitation), mobile navigation, responsive layout, and Discovery call to action.  
* **Constraint:** No additional content or unapproved pages on the landing view. Review and approve before proceeding to Stage 2\.

## **STAGE 2 — OUR APPROACH & OUR TEAM**

* **Scope:** Build /approach and /team using the approved source text in businessCopyDeck.ts and the exact authorship distinctions (Svetlana Pritzker, Vasili Cojemeachin, Brian Krawitz).  
* **Digital Business Card Requirement:** Ensure /team is clean, self-contained, and shareable as a direct "visiting card" URL for prospective partners and executives.

## **STAGE 3 — DEEPER METHODOLOGY**

* **Scope:** Add the Nine Intelligences, Four Spheres, CORE9 architecture (CORE • NINE • RESOLVE), and diagnostic explanations (Functional Gaps & Performance Loss Matrix) using expandable sections or dedicated sub-views.

## **STAGE 4 — SERVICES, ROADMAPS & BROADCAST BLOG**

* **Scope:** Add detailed engagement pathways (Discovery \-\> Intensive \-\> Strategic Guidance, Performance Map, 30/60/90-Day Roadmap, Executive Reset, Ongoing Advisory) plus the SEO Video/Podcast Broadcast Blog for 5–7 minute explainers. SAGE remains in its own separate experience.

# **3\. STAGE 1 COMPONENT-TO-COPY BINDING REGISTRY**

| Section | Component | Bound Copy IDs (businessCopyDeck.ts) | Target Interaction |
| :---- | :---- | :---- | :---- |
| **Navigation** | \<ExecutiveNavbar /\> | NAV\_BRAND, NAV\_LINK\_HOME, NAV\_LINK\_APPROACH, NAV\_LINK\_TEAM, NAV\_CTA\_PRIMARY | Anchors Home; links Approach & Team; triggers Discovery destination |
| **01 / Hero** | \<Section01Hero /\> | S1\_EYEBROW, S1\_H1, S1\_P1, S1\_P2, S1\_P3, S1\_CTA\_PRIMARY | Renders converging bronze-gold geometry; CTA opens Discovery destination |
| **02 / Recognition** | \<Section02Recognition /\> | S2\_EYEBROW, S2\_H2, S2\_ITEM\_1, S2\_ITEM\_2, S2\_ITEM\_3, S2\_ITEM\_4 | 2x2 architectural cards on Warm White canvas |
| **03 / Difference** | \<Section03Difference /\> | S3\_EYEBROW, S3\_H2, S3\_BODY, S3\_LINK\_SECONDARY | Highlights 5 whole-system nodes; links to /approach |
| **04 / Pathway** | \<Section04Pathway /\> | S4\_EYEBROW, S4\_H2, S4\_STEP\_01..04\_\* | 4-step horizontal progression (01 Discover \-\> 04 Execute) |
| **05 / Invitation** | \<Section05Invitation /\> | S5\_EYEBROW, S5\_H2, S5\_BODY, S5\_CTA\_PRIMARY | Matches S1\_CTA\_PRIMARY destination |

# **4\. PRE-LAUNCH AUDIT CHECKLIST (STAGE 1 GATE)**

* **Exact Script Verification:** Every word in Sections 01–05 matches Part 2 of the PDF specification character-for-character.  
* **Discovery Button Safeguard:** Both Discover What's Holding You Back and Book a Discovery Session route to the identical inquiry handler and do not fake live calendar booking prior to configuration.  
* **Visual Tone Check:** Deep Navy (\#070B14), Graphite (\#111726), Warm White (\#F7F5F0), and Restrained Bronze/Gold (\#C59B5F) converging geometry—zero stock photos, mountains, or esoteric symbols.  
* **Mobile-First Check:** Single mobile menu replaces desktop links on small screens; typography scales cleanly at 375px, 768px, and 1440px.

