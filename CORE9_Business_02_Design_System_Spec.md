# **DESIGN SYSTEM & UI SPECIFICATION — CORE9 RESOLVE™ BUSINESS**

02 / VISUAL TOKENS, GRIDS & INTERACTIVE PHYSICS

* **Project Name:** CORE9 RESOLVE™ Business  
* **Design Paradigm:** Executive, Confident, Architectural, Masculine-Leaning, and Sophisticated

# **AGENT DIRECTIVE (READ FIRST)**

This document defines the exact visual language, color tokens, typography, and geometric construction for CORE9 RESOLVE™ Business.

CRITICAL RULE: Do NOT invent or hardcode marketing copy from this file. Every text node must bind strictly to CORE9\_Business\_03\_Verbatim\_Copy\_Deck.

# **1\. VISUAL DIRECTION & ARCHITECTURAL METAPHOR**

* **Core Aesthetic:** Serious strategic advisory firm—never a life-coaching website or a spiritual-development platform.  
* **Reference Visual Language:** Architectural forms, light revealing structure, and razor-sharp geometric planes converging toward a clear focal direction.  
* **Key Refinements:** Fewer words on the first screen, stronger typographic authority, restrained ornamentation, and a distinctive converging geometric identity.  
* **Strict Visual Exclusions:** No generic stock photography, no mountains, no smiling corporate teams in boardrooms, and no excessive decorative or esoteric symbols.

# **2\. COLOR TOKENS & TAILWIND CONFIGURATION**

| Token Role | CSS Variable | Hex Code | Tailwind Equivalent | Intentional Usage Rule |
| :---- | :---- | :---- | :---- | :---- |
| Primary Obsidian Navy | \--bg-navy-deep | \#070B14 | bg-\[\#070B14\] | Hero canvas & Invitation vault background |
| Architectural Graphite | \--bg-graphite | \#111726 | bg-\[\#111726\] | Elevated dark planes, cards, & geometric slabs |
| Warm White Surface | \--bg-warm-white | \#F7F5F0 | bg-\[\#F7F5F0\] | High-contrast executive reading sections (Sections 02 & 03\) |
| Crisp Alabaster Card | \--bg-card-light | \#FFFFFF | bg-white | Structured cards on Warm White sections |
| Primary Light Ink | \--text-on-dark | \#F9FAFB | text-gray-50 | Primary headlines & copy on Deep Navy/Graphite |
| Muted Metallic Slate | \--text-muted-dark | \#9CA3AF | text-gray-400 | Secondary body & eyebrows on dark surfaces |
| Primary Dark Ink | \--text-on-light | \#0F172A | text-slate-900 | Primary headlines & copy on Warm White surfaces |
| Restrained Bronze / Gold | \--accent-bronze | \#C59B5F | text-\[\#C59B5F\] | Converging light-lines, section numbers, & primary CTA accents |
| Luminous Gold Edge | \--accent-gold-bright | \#E5C185 | border-\[\#E5C185\] | Specular highlight along converging architectural vectors |

# **3\. TYPOGRAPHY & HIERARCHY SCALE**

## **3.1 Font Families**

* **Headlines (Executive Authority):** 'Plus Jakarta Sans', 'Inter', sans-serif — Weights: 600 (SemiBold), 700 (Bold); Tracking: \-0.025em.  
* **Body Copy (Clarity & Precision):** 'Inter', sans-serif — Weights: 400 (Regular), 500 (Medium); Line-height: 1.65.  
* **Architectural Indices (01 / HERO, 01..04):** 'JetBrains Mono', monospace — Weight: 500; Tracking: 0.12em; Uppercase.

## **3.2 Responsive Type Scale**

* **Hero Headline (S1\_H1):** text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-\[1.08\]  
* **Section Headline (S2\_H2..S5\_H2):** text-3xl sm:text-4xl font-bold tracking-tight leading-\[1.15\]  
* **Pathway Step Title (S4\_STEP\_\*\_TITLE):** text-xl sm:text-2xl font-semibold tracking-tight  
* **Body Lead (S1\_P1..P3, S3\_BODY, S5\_BODY):** text-lg sm:text-xl leading-relaxed  
* **Section Index Eyebrow (01 / HERO):** font-mono text-xs uppercase tracking-\[0.18em\] text-\[\#C59B5F\]

# **4\. GEOMETRIC IDENTITY & SPATIAL RHYTHM**

* **Converging Bronze Light-Lines (\<ArchitecturalConvergenceBg /\>):**  
  * Inspired directly by the Part 5 visual reference: overlapping dark navy/graphite diagonal planes (clip-path or SVG polygons) edged with a 1.5px linear-gradient bronze-gold rim light (from-transparent via-\[\#C59B5F\] to-\[\#E5C185\]) that converges toward the lower-center focal point.  
* **Max Container Width:** max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 (generous executive breathing room).  
* **Vertical Section Rhythm:** py-20 md:py-32 with 1px solid hairline dividers (border-white/10 on dark, border-slate-900/10 on warm white).  
* **Mobile-First Principle:** Clean vertical stacking on mobile (\< 768px), collapsing the desktop nav into a single refined slide-down mobile drawer.

# **5\. STAGE 1 COMPONENT SPECIFICATIONS**

## **Component 1: \<ConvergingHeroSection /\> (Section 01\)**

* **Surface:** Deep Navy (\#070B14) with subtle radial top illumination (\#162038 at 30% opacity) and intersecting diagonal graphite planes edged in bronze-gold at the base.  
* **Layout:** Centered or asymmetric architectural column (max-w-4xl), placing total focus on S1\_H1, the three concise paragraphs (S1\_P1..P3), and the bronze-trimmed primary button (S1\_CTA\_PRIMARY).

## **Component 2: \<RecognitionGrid /\> (Section 02\)**

* **Surface:** Warm White (\#F7F5F0) for stark, readable contrast after the dark hero.  
* **Layout:** 2x2 architectural grid of the 4 recognition statements (S2\_ITEM\_1..4). Each card features a left-hand 2px bronze vertical accent bar (border-l-2 border-\[\#C59B5F\]), white surface (\#FFFFFF), and subtle hover elevation.

## **Component 3: \<WholeSystemDifference /\> (Section 03\)**

* **Surface:** Architectural Graphite (\#111726) with subtle geometric vector lines connecting 5 structural nodes (Leadership, People, Processes, Resources, Execution).  
* **Layout:** Split 60/40 layout with S3\_H2, S3\_BODY, and S3\_LINK\_SECONDARY (Explore Our Approach →).

## **Component 4: \<PathwayHorizontalStepper /\> (Section 04\)**

* **Surface:** Warm White (\#F7F5F0).  
* **Layout:** 4-column connected horizontal architectural timeline (01 Discover \-\> 02 Diagnose \-\> 03 Align \-\> 04 Execute). Large monospace bronze numerals (01–04) sit above sharp horizontal connecting rules.

## **Component 5: \<ExecutiveInvitationVault /\> (Section 05\)**

* **Surface:** Deep Navy (\#070B14) with converging bronze-gold light vectors framing the final call to action (S5\_H2, S5\_BODY, S5\_CTA\_PRIMARY).

