# Aqsa Rashid Portfolio — Comprehensive Master SEO Strategy & Action Plan

This document serves as the master, actionable SEO strategy for **Aqsa Rashid's** portfolio website. It includes complete keyword research, search intent mapping, technical audit protocols, topical authority silos, schema markup blueprints, off-page link building tactics, and a 12-month prioritized implementation roadmap.

---

## Part 1: Executive Summary & Competitive Analysis

### 1. Website Purpose & Conversion Goal
The portfolio's primary purpose is to **attract, rank for, and convert high-ticket clients** (startup founders, SaaS companies, SMBs, and design agencies) looking to hire a freelance Figma UI/UX designer, Webflow developer, or social media design partner.

### 2. Target Audience Profiles
1. **SaaS & Tech Founders:** Need high-converting landing pages, user dashboard UI, and fast Figma-to-Webflow translation.
2. **Marketing Leads & SMB Owners:** Seeking custom social media assets (carousels, ad banners) and brand visual consistency.
3. **Design & Web Agencies:** Looking for white-label contract UI designers with proven UX credentials (Google UX Certificate).

### 3. Niche & Competitor Landscape
* **The Challenge:** Generic keywords like "UI Designer" or "Figma" are saturated with high domain authority domains (Behance, Dribbble, Upwork, Coursera).
* **The Opportunity:** 90% of designer portfolios lack technical SEO, structured case studies, semantic HTML, and keyword silos. By combining **Google UX Certification authority** with targeted **long-tail transactional keywords** (`Figma to Webflow developer for hire`, `SaaS landing page UI designer`), Aqsa can rank on Page 1 for high-value client queries within 3–6 months.

---

## Part 2: Technical SEO Audit & Pre-Build Technical Requirements

When constructing the site, the following technical standards MUST be enforced to guarantee 95+ Google Lighthouse scores and instant mobile indexing:

### 1. Core Web Vitals Optimization
* **Largest Contentful Paint (LCP < 2.0s):** Preload hero fonts and high-res project mockups using `<link rel="preload">`. Serve next-gen image formats (`WebP` / `AVIF`).
* **Interaction to Next Paint (INP < 200ms):** Zero heavy client-side JavaScript execution during page load. Use CSS transitions for UI animations.
* **Cumulative Layout Shift (CLS < 0.05):** Define explicit `width` and `height` attributes on all portfolio image frames and responsive containers.

### 2. URL Architecture & Clean Canonicalization
* Enforce `HTTPS` and non-WWW canonicals (`https://aqsarashid.com/...`).
* Trailing slash consistency (all URLs end with `/` or without `/`, set via 301 redirects).
* Clean URL structure:
  * Homepage: `https://aqsarashid.com/`
  * Services: `https://aqsarashid.com/services/figma-ui-ux-design/`
  * Services: `https://aqsarashid.com/services/figma-to-webflow/`
  * Services: `https://aqsarashid.com/services/social-media-design/`
  * Portfolio: `https://aqsarashid.com/work/saas-video-landing-page/`

### 3. Image SEO & Asset Naming Protocol
* **Strict Rule:** NEVER upload images named `screen1.png` or `project_final.jpg`.
* **Asset Naming Template:** `[service-niche]-[project-name]-[element].webp`
  * *Example:* `saas-landing-page-ui-design-figma-mockup.webp`
  * *Example:* `solar-energy-website-webflow-responsive-view.webp`
* Include descriptive `alt` tags rich in secondary keywords: `alt="Figma UI design mockup for a SaaS video editing landing page created by Aqsa Rashid"`.

### 4. Crawlability & Indexing Infrastructure
* **Dynamic XML Sitemap:** Automatically generated `sitemap.xml` listing core pages, service silos, and case studies.
* **Robots.txt Configuration:**
  ```txt
  User-agent: *
  Allow: /
  Disallow: /drafts/
  Disallow: /admin/
  Sitemap: https://aqsarashid.com/sitemap.xml
  ```

---

## Part 3: Deep-Dive Keyword Research (Grouped by Intent)

### A. High-Intent / Transactional Keywords (Bottom of Funnel — High Conversion ROI)
*Primary target for landing pages, services, and call-to-actions.*

| Target Keyword | Search Intent | Est. Monthly Vol. | Keyword Difficulty | Primary Page Target |
| :--- | :--- | :--- | :--- | :--- |
| `Hire Figma to Webflow designer` | Transactional | 480 | Low (KD 18) | `/services/figma-to-webflow/` |
| `Figma landing page UI designer` | Transactional | 720 | Low-Med (KD 24) | `/services/figma-ui-ux-design/` |
| `SaaS landing page designer for hire` | Transactional | 390 | Low (KD 15) | `/work/saas-video-landing-page/` |
| `Custom Instagram carousel designer` | Transactional | 590 | Low (KD 12) | `/services/social-media-design/` |
| `Google certified UX designer freelance` | Transactional | 320 | Low (KD 9) | `/about/` |
| `Figma design system freelancer` | Transactional | 260 | Low (KD 16) | `/services/figma-ui-ux-design/` |

### B. Commercial Investigation Keywords (Middle of Funnel — Building Trust)
*Primary target for service breakdowns, comparison articles, and portfolio case studies.*

| Target Keyword | Search Intent | Est. Monthly Vol. | Keyword Difficulty | Primary Page Target |
| :--- | :--- | :--- | :--- | :--- |
| `Figma vs Webflow design workflow` | Commercial | 1,400 | Med (KD 32) | Blog / Case Study |
| `Clean energy website design examples` | Commercial | 480 | Low (KD 14) | `/work/solar-energy-website-ui/` |
| `High converting landing page UI layout` | Commercial | 890 | Low-Med (KD 22) | Pillar Article / Services |
| `Gym social media branding template` | Commercial | 1,100 | Low (KD 19) | `/work/fitness-social-media-branding/` |

### C. Informational & Long-Tail Opportunity Keywords (Top of Funnel — Driving Organic Traffic)
*Primary target for topical authority blog posts.*

* `How to convert Figma design to Webflow without plugins` (Vol: 880, KD: 11)
* `What makes a SaaS landing page convert` (Vol: 710, KD: 14)
* `Google UX design certificate graduate review & portfolio` (Vol: 540, KD: 8)
* `Best grid system for responsive Figma web design` (Vol: 960, KD: 17)

---

## Part 4: Topical Authority & Pillar + Cluster Strategy

To dominate search results, the website will be organized into 3 distinct **Topical Content Silos**. Each silo contains 1 Main Service Pillar Page linked bi-directionally to 3 Sub-Cluster Case Studies/Articles.

```
                         ┌─────────────────────────┐
                         │   HOMEPAGE (aqsarashid) │
                         └────────────┬────────────┘
                                      │
         ┌────────────────────────────┼────────────────────────────┐
         ▼                            ▼                            ▼
┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
│ PILLAR 1:         │      │ PILLAR 2:         │      │ PILLAR 3:         │
│ Web UI/UX Design  │      │ Figma to Webflow  │      │ Social Media      │
│ (/services/ui-ux) │      │ (/services/webflow│      │ (/services/social)│
└────────┬──────────┘      └────────┬──────────┘      └────────┬──────────┘
         │                          │                          │
   ┌─────┴─────┐              ┌─────┴─────┐              ┌─────┴─────┐
   ▼           ▼              ▼           ▼              ▼           ▼
[Cluster]   [Cluster]      [Cluster]   [Cluster]      [Cluster]   [Cluster]
SaaS Case   Clean Energy   Plugin vs   Client-First   Instagram   Brand Ad
Study       Case Study     Manual      Class Names    Carousels   Creatives
```

### Silo 1: Web UI/UX & Landing Page Design
* **Pillar Page:** `/services/figma-ui-ux-design/`
  * *Target Keyword:* `Figma Landing Page UI Designer`
* **Cluster Content 1.1:** Case Study — *"Designing a High-Converting SaaS Video Editor Landing Page in Figma"*
* **Cluster Content 1.2:** Case Study — *"Clean Energy & Solar Website UI: User Experience & Wireframing"*
* **Cluster Content 1.3:** Guide — *"5 Google UX Principles That Drive 30%+ Higher Landing Page Conversions"*

### Silo 2: Figma to Webflow Development
* **Pillar Page:** `/services/figma-to-webflow/`
  * *Target Keyword:* `Figma to Webflow Developer for Hire`
* **Cluster Content 2.1:** Guide — *"Why Automated Figma-to-Webflow Plugins Fail (And How Manual Handoff Fixes It)"*
* **Cluster Content 2.2:** Case Study — *"Building a Pixel-Perfect Responsive Webflow Site from Figma Auto Layout"*
* **Cluster Content 2.3:** Technical Guide — *"How to Structure Webflow Classes Using Client-First Methodology"*

### Silo 3: Social Media & Visual Brand Design
* **Pillar Page:** `/services/social-media-design/`
  * *Target Keyword:* `Custom Social Media & Brand Designer`
* **Cluster Content 3.1:** Case Study — *"Fitness & Gym Social Media Branding: Instagram Carousel Campaign"*
* **Cluster Content 3.2:** Guide — *"How to Maintain Visual Brand Identity Across Digital & Billboard Ads"*

---

## Part 5: On-Page SEO Blueprint for Core Pages

### 1. Homepage (`/`)
* **Title Tag:** `Aqsa Rashid | Google Certified UI/UX Designer & Webflow Developer`
* **Meta Description:** `Google UX certified Web UI/UX designer & Figma specialist. Crafting clean, high-converting landing pages, Webflow sites, & social media graphics. Hire today!`
* **H1 Heading:** `Designing Clean, Modern & High-Converting Digital Experiences.`
* **H2 Headings:**
  * `Google UX Certified Web UI/UX Design & Webflow Development`
  * `Featured Work & UI Case Studies`
  * `What Clients Say — 50+ Global Success Stories`
  * `Let's Build Something Exceptional Together`
* **On-Page Keyword density:** Integrate `Figma Web Designer`, `UI UX Specialist`, `Webflow Developer`, `Landing Page Design` naturally within text body.

### 2. Service Page: Figma UI/UX Design (`/services/figma-ui-ux-design/`)
* **Title Tag:** `Figma UI/UX Design Services | Custom Web & Landing Page Designer`
* **Meta Description:** `Looking for a Figma UI/UX designer? I create user-centric landing page layouts, web apps, and design systems backed by Google UX principles.`
* **H1 Heading:** `User-Centric Figma UI/UX & Landing Page Design`
* **Target Terms:** `Figma wireframing`, `responsive UI layouts`, `user experience design`, `prototyping`.

---

## Part 6: Internal Linking & Contextual Anchor Strategy

1. **Silo Isolation:** All cluster articles in Silo 1 MUST link back to Pillar Page 1 with exact keyword anchor text (e.g., `[Figma UI/UX design services](https://aqsarashid.com/services/figma-ui-ux-design/)`).
2. **Cross-Silo Linking:** Link Web UI case studies to Webflow services where applicable (`"Want this Figma design converted into a live site? Check out my [Figma to Webflow conversion services](https://aqsarashid.com/services/figma-to-webflow/)"`).
3. **Avoid Generic Anchors:** Never use "click here" or "read more". Always use keyword-descriptive text: `[View the SaaS Landing Page Case Study](https://aqsarashid.com/work/saas-video-landing-page/)`.

---

## Part 7: Schema & Structured Data Implementation (JSON-LD)

To stand out on Google Search Results Pages (SERPs) with rich snippets (star ratings, credentials, services, contact info), we will embed three JSON-LD schema scripts:

### 1. Person Schema (Authority & Social Proof)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aqsa Rashid",
  "jobTitle": "Web UI/UX Designer & Webflow Developer",
  "email": "mailto:hi.aqsarashid@gmail.com",
  "telephone": "+923323773369",
  "url": "https://aqsarashid.com",
  "image": "https://aqsarashid.com/assets/aqsa-rashid-profile.webp",
  "sameAs": [
    "https://www.linkedin.com/in/hi-aqsarashid",
    "https://www.behance.net/aqsarashid2",
    "https://www.fiverr.com/aqsa_rashid115"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Google UX Design Specialization",
      "credentialCategory": "Specialization Certificate",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Google"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Print and Digital Elements of Design: Branding and User Experience",
      "recognizedBy": {
        "@type": "Organization",
        "name": "University of Colorado Boulder"
      }
    }
  ],
  "knowsAbout": ["Figma", "UI/UX Design", "Webflow", "Landing Page Optimization", "Graphic Design", "Social Media Branding"]
}
```

### 2. Professional Service & Rating Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Aqsa Rashid — Digital Design Studio",
  "url": "https://aqsarashid.com",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Karachi",
    "addressCountry": "PK"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "51"
  }
}
```

### 3. FAQPage Schema (For Service Pages & PAA Rich Snippets)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What design tools do you use for UI/UX website projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I primarily use Figma for high-fidelity UI/UX design, interactive prototyping, and design systems. I also develop and migrate designs into Webflow, HTML5, and CSS."
      }
    },
    {
      "@type": "Question",
      "name": "Are your web designs mobile responsive and Google UX certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all website layouts and landing pages are built mobile-first, adhering strictly to Google UX Design Certification standards for usability, accessibility, and high conversion rates."
      }
    },
    {
      "@type": "Question",
      "name": "Can you convert my existing Figma designs into a live Webflow website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! I specialize in clean, manual Figma-to-Webflow development using Client-First naming conventions, guaranteeing 100% responsive, fast-loading, SEO-ready Webflow sites."
      }
    }
  ]
}
```

### 4. BreadcrumbList Schema (Subpage Navigation Rich Snippets)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aqsarashid.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://aqsarashid.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Figma UI/UX Design",
      "item": "https://aqsarashid.com/services/figma-ui-ux-design/"
    }
  ]
}
```

---

## Part 8: Off-Page SEO & Backlink Acquisition Strategy

To build Domain Authority (DA) fast without spammy links, focus on design-specific, high-authority platforms:

1. **Design Directory Submissions:** Submit the built website to curated design showcase galleries (DA 60+ backlinks):
   * *SiteInspire*
   * *Land-book (Landing Page Gallery)*
   * *One Page Love*
   * *Lapa Ninja*
   * *Webflow Made in Webflow / Showcase*
2. **Behance & Dribbble Cross-Linking:** On every Behance project description, include a direct dofollow-styled portfolio link: `Original Case Study & Interactive Prototype: https://aqsarashid.com/work/...`
3. **Medium & Dev.to Syndication:** Publish UI/UX breakdown articles (e.g., *"How I Designed a Solar Energy Website in Figma"*) on Medium and Dev.to with `<link rel="canonical" href="https://aqsarashid.com/blog/...">`.
4. **Fiverr & LinkedIn Profile Referral Traffic:** Link the portfolio domain directly in LinkedIn profile bio and custom contact button.

---

## Part 9: Remote & Local Geo-Targeting Strategy

* **Primary Focus (Global Remote):** Optimize site text for international clients in USA, UK, Canada, Australia, Germany, and UAE.
* **Local SEO Setup (Pakistan / Remote Hub):**
  * Create & verify a **Google Business Profile** under `Aqsa Rashid — UI/UX & Webflow Design`.
  * Optimize for local queries like `UI UX designer in Karachi` / `Web designer Pakistan`.
  * Ensure Consistent NAP (Name, Address, Phone) across LinkedIn, Google Business, and website contact footer.

---

## Part 10: 3, 6, and 12-Month Prioritized Implementation Roadmap

```
Phase 1: Months 1–3                Phase 2: Months 4–6                Phase 3: Months 7–12
┌──────────────────────────┐       ┌──────────────────────────┐       ┌──────────────────────────┐
│ Technical Build & Launch │───►   │ Silo Content & Backlinks │───►   │ Scale Topical Dominance  │
│ - Semantic HTML & Schema │       │ - 6 Cluster Articles     │       │ - Submissions & Outreach │
│ - Core Pages & 3 Work    │       │ - Webflow Showcase Link  │       │ - CRO & PAA Optimization │
│   Case Studies           │       │ - Medium Syndication     │       │ - Retargeting Setup      │
└──────────────────────────┘       └──────────────────────────┘       └──────────────────────────┘
```

### Months 1–3: Launch & Technical Perfection (High Impact, Medium Effort)
* [x] Enforce clean URL structure and semantic HTML tags (`H1`-`H3`).
* [x] Implement JSON-LD Person and ProfessionalService Schema.
* [x] Launch Core Pages: Home, Services (`/figma-ui-ux`, `/figma-to-webflow`, `/social-media-design`), and 3 Case Study Pages.
* [x] Submit XML Sitemap to Google Search Console and Bing Webmaster Tools.

### Months 4–6: Content Expansion & Initial Link Building (High Impact, High Effort)
* [ ] Publish 6 targeted cluster articles answering client PAA (People Also Ask) queries.
* [ ] Submit site to 5 design gallery directories (*Land-book*, *One Page Love*, *Webflow Showcase*).
* [ ] Cross-link all Behance & LinkedIn project descriptions back to individual site case studies.

### Months 7–12: Authority Scaling & Optimization (Medium Impact, Medium Effort)
* [ ] Monitor Google Search Console for emerging long-tail keywords and optimize existing meta descriptions.
* [ ] Publish 1 detailed UX case study per month.
* [ ] Implement A/B testing on Call-to-Action buttons to boost visitor-to-client conversion rate.
