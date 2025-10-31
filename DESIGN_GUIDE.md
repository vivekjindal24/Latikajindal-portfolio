# 🎨 Visual Design Guide

## Color Palette

```
Navy (Primary)     → #0A192F  [Dark navy blue - professional & academic]
Gold (Accent)      → #D4AF37  [Rich gold - prestige & excellence]
Background         → #FDFDFB  [Off-white - clean & readable]
Text               → #1A1A1A  [Dark charcoal - high contrast]
```

---

## Section Layout Overview

### 1️⃣ Hero Section (Full Screen)
```
┌─────────────────────────────────────────┐
│         GRADIENT BACKGROUND             │
│              (Navy → White)             │
│                                         │
│        Dr. Latika Jindal               │
│        Associate Professor              │
│   Dept. of Computer Science & Eng.     │
│      Medi-Caps University, Indore      │
│                                         │
│  "Versatile academic with 15+ years"   │
│                                         │
│  [LinkedIn] [Email] [CV] [Scholar]     │
│                                         │
│              ↓ Scroll                   │
└─────────────────────────────────────────┘
```

### 2️⃣ About Section (Two Columns)
```
┌─────────────────────────────────────────┐
│            About Me                     │
│         ═══════════                     │
│                                         │
│  [Bio Text]        │  [Personal Card]  │
│  Professional      │   • DOB            │
│  description,      │   • Languages      │
│  research areas    │   • Email          │
│  and expertise     │   • Phone          │
│                    │   • Address        │
│                    │   • Family         │
└─────────────────────────────────────────┘
```

### 3️⃣ Experience Section (Vertical Timeline)
```
┌─────────────────────────────────────────┐
│           Experience                    │
│         ═══════════                     │
│         15+ Years                       │
│                                         │
│    ●─── Associate Professor (2012-)    │
│    │    Medi-Caps University           │
│    │                                    │
│    ●─── Assistant Professor (2011-12)  │
│    │    SKSITS                         │
│    │                                    │
│    ●─── Assistant Professor (2008-09)  │
│         SD Bansal                       │
└─────────────────────────────────────────┘
```

### 4️⃣ Education Section (Three Cards)
```
┌─────────────────────────────────────────┐
│           Education                     │
│         ═══════════                     │
│                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐│
│  │  Ph.D.  │  │ M.TECH  │  │  B.E.   ││
│  │  2019   │  │  2012   │  │  2008   ││
│  │  JNU    │  │  RGPV   │  │  RGPV   ││
│  └─────────┘  └─────────┘  └─────────┘│
└─────────────────────────────────────────┘
```

### 5️⃣ Publications Section (Expandable List)
```
┌─────────────────────────────────────────┐
│     Research Publications               │
│         ═══════════                     │
│  16 Publications in Int'l Journals      │
│                                         │
│  📄 Title: Neural Network-Based...     │
│     Authors: Bhavana Tiwari, Latika... │
│     Journal: Ingenierie Des Systemes   │
│     [Scopus] [2025] [🔗 DOI Link]     │
│  ────────────────────────────────       │
│  📄 Title: Automating cricket...       │
│     ...                                 │
│                                         │
│  [Show All 16 Publications] Button     │
└─────────────────────────────────────────┘
```

### 6️⃣ Patents Section (Grid Layout)
```
┌─────────────────────────────────────────┐
│            Patents                      │
│         ═══════════                     │
│       6 Published Patents               │
│                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────┐│
│  │Blockchain│  │Mental    │  │Crypto ││
│  │& IOT     │  │Health    │  │Secure ││
│  │Banking   │  │Tracking  │  │System ││
│  │[#1]      │  │[#2]      │  │[#3]   ││
│  │🔒 Pub.   │  │🔒 Pub.   │  │🔒 Pub.││
│  └──────────┘  └──────────┘  └───────┘│
│                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────┐│
│  │Fraud     │  │Wheat     │  │Diabetic││
│  │Detection │  │Disease   │  │Retino. ││
│  │[#4]      │  │[#5]      │  │[#6]   ││
│  └──────────┘  └──────────┘  └───────┘│
└─────────────────────────────────────────┘
```

### 7️⃣ Contact Section (Form + Info)
```
┌─────────────────────────────────────────┐
│         Get in Touch                    │
│         ═══════════                     │
│                                         │
│  [Contact Info]    [Contact Form]      │
│   📧 Email         ┌──────────────┐    │
│   📱 Phone         │ Name:        │    │
│   📍 Address       ├──────────────┤    │
│                    │ Email:       │    │
│   [LinkedIn]       ├──────────────┤    │
│   [Scholar]        │ Message:     │    │
│   [ORCID]          │              │    │
│                    └──────────────┘    │
│                    [Send Message]       │
└─────────────────────────────────────────┘
```

---

## Typography Hierarchy

```
H1 (Hero Title)       → 72px / Bold / Navy
H2 (Section Titles)   → 48px / Bold / Navy
H3 (Subsections)      → 24px / Bold / Navy
Body Text             → 18px / Regular / Text
Small Text            → 14px / Regular / Text/70%
```

---

## Interactive Elements

### Buttons
```
Primary:    Navy background, White text, Gold on hover
Secondary:  Gold background, Navy text
Ghost:      Transparent, Navy border, Navy text
```

### Cards
```
┌─────────────────────────┐
│  Gold left border (4px) │ ← Hover: Shadow increases
│  White background       │   Hover: Slight lift (-2px)
│  Rounded corners (8px)  │   Transition: 300ms
└─────────────────────────┘
```

### Navigation
```
Fixed navbar:
- Transparent when at top
- White/blur when scrolled
- Active section: Gold underline
- Smooth scroll to sections
```

---

## Responsive Breakpoints

```
Mobile:     < 768px   (1 column, stacked layout)
Tablet:     768-1024px (2 columns where appropriate)
Desktop:    > 1024px   (Full multi-column layouts)
```

---

## Animation Patterns

### Section Entry
```
Fade in + Slide up
Duration: 600ms
Easing: ease-out
Stagger delay: 200ms per child
```

### Hover Effects
```
Cards:      Scale 1.05 + Shadow increase
Buttons:    Scale 1.05 + Color shift
Icons:      Rotate 360° or color change
```

### Scroll
```
Smooth scroll behavior
Parallax on hero gradient
Fade-in on viewport entry (100px margin)
```

---

## Icon Usage

From **Lucide React**:
- 📧 Mail
- 📱 Phone
- 📍 MapPin
- 💼 Briefcase
- 🎓 GraduationCap
- 📄 FileText
- 🔗 ExternalLink
- 🏆 Award
- 📚 BookOpen
- 🎤 Mic
- ❤️ Heart
- 💡 Lightbulb
- 🖥️ Cpu
- 🎵 Music

---

## Accessibility Features

- ✅ Semantic HTML5 tags (`<section>`, `<article>`, `<nav>`)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators (gold outline)
- ✅ Sufficient color contrast (WCAG AA)
- ✅ Alt text for images
- ✅ Screen reader friendly

---

## Performance Optimizations

- ✅ Code splitting by route
- ✅ Lazy loading components
- ✅ Image optimization (Next.js automatic)
- ✅ Minified CSS/JS
- ✅ Font optimization (Google Fonts)
- ✅ Tree shaking unused code

**Expected Lighthouse Score: 95+**

---

## Mobile-First Design

### Mobile View Features
```
- Hamburger menu (≡)
- Full-width sections
- Stacked cards
- Touch-optimized buttons (min 44px)
- Reduced animations for performance
- Simplified navigation
```

### Tablet View
```
- 2-column layouts
- Side-by-side cards
- Expanded menu
```

### Desktop View
```
- Multi-column grids
- Expanded timelines
- Full navigation bar
- Enhanced animations
```

---

## User Experience Flow

```
Landing → Hero (immediate impact)
   ↓
Scroll → About (who is Dr. Jindal)
   ↓
Scroll → Experience (credibility)
   ↓
Scroll → Education (qualifications)
   ↓
Scroll → Awards (recognition)
   ↓
Scroll → Publications (research impact)
   ↓
Scroll → Patents (innovation)
   ↓
Scroll → Contact (CTA)
```

---

**This design creates a professional, academic, and modern portfolio that effectively showcases Dr. Latika Jindal's impressive career and research contributions!**
