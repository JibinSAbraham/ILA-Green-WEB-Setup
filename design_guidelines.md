# Ila Green - Design Guidelines

## Design Approach
**Selected Approach:** Corporate Design System  
**Rationale:** B2B service website requiring professional credibility, clear information hierarchy, and trust-building elements. Drawing inspiration from enterprise sustainability platforms and corporate service providers.

**Key Design Principles:**
- Professional credibility through clean, structured layouts
- Data-driven impact visualization
- Trust-building through transparency and clarity
- Action-oriented for lead generation

---

## Typography

**Font Families:**
- Primary: Inter (headings, UI elements) - clean, modern, professional
- Secondary: Source Sans Pro (body text) - excellent readability

**Hierarchy:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headlines: text-3xl md:text-4xl lg:text-5xl, font-bold
- Subsection Titles: text-2xl md:text-3xl, font-semibold
- Card/Feature Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Small Text/Captions: text-sm, font-normal

---

## Layout System

**Spacing Units:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-20 lg:py-24
- Component spacing: gap-6 md:gap-8
- Card padding: p-6 md:p-8
- Tight spacing: space-y-4
- Generous spacing: space-y-8 md:space-y-12

**Container Strategy:**
- Max width: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Content sections: max-w-6xl
- Text-heavy content: max-w-4xl

---

## Page Structure (7 Sections)

### 1. Hero Section
- Large hero image with professional office/sustainability scene
- Height: min-h-[500px] md:min-h-[600px] lg:min-h-[700px]
- Headline + subheadline (50-60 characters)
- Primary CTA button with backdrop-blur-md bg-white/10 treatment
- Trust indicator: "Serving 100+ Indian Businesses" badge

### 2. Impact Metrics Bar
- Full-width section immediately after hero
- 3-column grid: lg:grid-cols-3
- Large numbers with units (e.g., "50,000+ Kg Waste Diverted")
- Icon + Number + Label format
- Counters with subtle animation on scroll

### 3. Services Grid
- 2x2 grid: md:grid-cols-2 lg:grid-cols-2
- Services: Waste Audits, CSR Initiatives, Employee Training, Impact Reporting
- Each card: icon, title, 2-3 bullet points
- Card style: border, subtle shadow on hover

### 4. CSR Project Showcase
- 3-column grid: lg:grid-cols-3
- Project cards: Image placeholder + Title + Description + Impact metric
- Projects: School Programs, Employee Volunteering, E-waste Collection
- Asymmetric layout: Featured project spans 2 columns

### 5. Why Choose Ila Green
- 2-column split: lg:grid-cols-2
- Left: Large title + description
- Right: 4 value propositions with checkmark icons
- Values: Transparent, Measurable Impact, End-to-end Support, Professional Solutions

### 6. Process Timeline
- Horizontal timeline for desktop, vertical for mobile
- 4 steps: Audit → Plan → Execute → Report
- Connected with lines/arrows
- Each step: number badge, title, brief description

### 7. Contact Section
- 2-column layout: lg:grid-cols-5
- Left (3 columns): Contact form (Name, Email, Company, Message)
- Right (2 columns): Company info, office location, response time
- Footer below: Quick links, social media, copyright

---

## Component Library

**Navigation:**
- Sticky header: sticky top-0 backdrop-blur-lg
- Logo + navigation links + CTA button
- Mobile: Hamburger menu

**Buttons:**
- Primary CTA: px-8 py-4, text-lg, rounded-lg, font-semibold
- Secondary: border variant
- On images: backdrop-blur-md bg-white/10 border border-white/20

**Cards:**
- Service cards: rounded-xl border p-8, hover:shadow-lg transition
- Project cards: rounded-xl overflow-hidden, image + content overlay
- Metric cards: text-center, large numbers, icon above

**Form Elements:**
- Input fields: rounded-lg border px-4 py-3
- Labels: text-sm font-medium mb-2
- Form width: max-w-xl

**Icons:**
- Use Heroicons via CDN
- Size: w-8 h-8 for section icons, w-6 h-6 for inline icons

---

## Images

**Required Images:**
1. **Hero Image:** Professional office environment with sustainability focus - employees collaborating, waste segregation bins visible, bright and modern office setting. Full-width background image.

2. **CSR Project Images (3):**
   - School program: Children learning waste segregation
   - Employee volunteering: Team in branded t-shirts at cleanup drive
   - E-waste collection: Organized collection bins with electronics

3. **About Section Image:** Team photo or facility tour showing professional waste management operations

**Image Treatment:**
- Hero: Subtle overlay (bg-black/40) for text readability
- Project cards: Aspect ratio 16:9, object-cover
- All images: rounded-lg for consistency

---

## Animation Strategy

**Minimal & Purposeful:**
- Fade-in on scroll for sections (opacity + translateY)
- Number counters for impact metrics (count-up animation)
- Smooth transitions on hover states (transition-all duration-300)
- NO complex animations, parallax, or scroll-triggered effects

---

## Accessibility

- Semantic HTML throughout
- Form labels properly associated
- Focus states: ring-2 ring-offset-2
- Alt text for all images
- ARIA labels for icon-only buttons
- Keyboard navigation support