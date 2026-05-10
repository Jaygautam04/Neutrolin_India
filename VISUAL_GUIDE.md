# Nutrolin India Website - Visual Design Guide

## 🎨 Design System

### Color Palette

#### Primary Colors
```
Dark Green (Primary)
Hex: #1B4D2C
RGB: 27, 77, 44
Used for: Main branding, headings, primary buttons
```

```
Mid Green (Secondary)
Hex: #2d7a4a
RGB: 45, 122, 74
Used for: Hover states, accents, secondary buttons
```

```
Golden Yellow (Accent)
Hex: #f4d03f
RGB: 244, 208, 63
Used for: CTAs, highlights, badges
```

#### Neutral Colors
```
White: #FFFFFF
Light Gray: #f5f5f5 (backgrounds)
Muted Foreground: #6b7280
Dark Mode: #0f172a / #1e293b / #334155
```

### Typography

**Heading Font**: Geist (default system font)
- h1: 3.5rem (56px) - Bold, tracking-tight
- h2: 2.25rem (36px) - Bold
- h3: 1.25rem (20px) - Semibold

**Body Font**: Geist (default system font)
- Regular: 1rem (16px)
- Small: 0.875rem (14px)
- Line height: 1.4-1.6

### Spacing Scale (Tailwind)
- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 2.5rem (40px)

## 🏗️ Layout Components

### Header/Navigation
- Height: 64px
- Sticky positioning for desktop
- Mobile hamburger menu on screens < 768px
- Company logo on left
- Navigation menu center
- Dark green background (#1B4D2C)
- Smooth transitions

### Hero Section
- Full viewport height on desktop
- Gradient background from white to muted
- Large heading: "Premium Agro-Chemicals"
- Subheading with premium tagline
- Two CTA buttons (Primary + Outline)
- Statistics cards at bottom
- Animated floating elements (subtle)

### Product Cards
- Width: 100% of grid (responsive)
- Height: Auto with min-height
- Rounded corners: 8px
- Box shadow on hover
- Glassmorphism effect (semi-transparent background)
- Product image placeholder
- Product name, category, composition
- Modal dialog on click for full details
- Hover scale animation: 1.05x

### Category Cards
- 6 cards in responsive grid (3 cols on desktop, 2 on tablet, 1 on mobile)
- Icon badge top-left
- Category name and description
- Product count
- Arrow icon (hover effect)
- Glass background
- Hover effects: scale, shadow, shadow

### Featured Products Section
- Section background: white (light) / slate-950 (dark)
- Product grid: 3 columns (desktop), 2 (tablet), 1 (mobile)
- Gap: 24px
- Section padding: 80px top/bottom
- Title + subtitle with right-aligned button

### Footer
- Background: Dark Green (#1B4D2C)
- Text color: White/Light
- Grid: 4 columns (desktop), 2 (tablet), 1 (mobile)
- Links have hover color change to accent
- Divider line at bottom
- Copyright text + legal links

### Contact Section
- Two-column layout (desktop), stacked (mobile)
- Contact info cards on left
- Contact form on right
- Form inputs with focus ring
- Form background: Semi-transparent white
- Button: Primary green with secondary hover

## 🎬 Animations & Effects

### Fade In
```css
animation: fadeInUp 0.7s ease-out forwards;
delay: varies (0s, 100ms, 200ms, etc.)
```

### Scale On Hover
```css
Hover: scale(1.05)
Transition: 300ms ease-out
Applied to: Cards, buttons, category items
```

### Slide In
```css
animation: slideInDown 0.6s ease-out
Applied to: Form sections
```

### Glow Effect
```css
Filter: drop-shadow(0 0 8px rgba(27, 77, 44, 0.15))
Applied to: Hero elements
```

## 📱 Responsive Breakpoints

```
Mobile: < 640px
- Single column layouts
- Full-width buttons
- Large touch targets (48px minimum)

Tablet: 640px - 1024px
- 2-column grids
- Adjusted font sizes
- Optimized spacing

Desktop: > 1024px
- 3+ column grids
- Full horizontal menu
- Maximum container width: 1280px
```

## 🎯 Key Visual Elements

### Glassmorphism Cards
- Background: rgba(255, 255, 255, 0.1) / rgba(0, 0, 0, 0.05)
- Backdrop filter: blur(10px)
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Border-radius: 12px

### Product Image Areas
- Aspect ratio: 4:3 or 16:9
- Object-fit: cover
- Image height: 240px (featured), auto (product cards)

### Buttons

**Primary Button**
- Background: Dark Green (#1B4D2C)
- Text: White
- Padding: 12px 32px
- Border-radius: 8px
- Hover: Mid Green (#2d7a4a)
- Transition: 300ms
- Font weight: 600

**Outline Button**
- Background: Transparent
- Border: 2px solid Dark Green
- Text: Dark Green
- Hover: Background to Light Green
- Transition: 300ms

**Icon Button**
- Size: 40px × 40px
- Icon size: 20px
- Background: Hover only
- Rounded: Full circle

### Badge/Tag
- Background: Golden Yellow
- Text: Dark
- Padding: 4px 12px
- Border-radius: 20px
- Font size: 12px
- Font weight: 600

## 🌙 Dark Mode

### Dark Mode Colors
- Background: #0f172a (darkest)
- Card/Section: #1e293b (dark)
- Hover: #334155 (medium-dark)
- Text: #f1f5f9 (light)
- Muted: #94a3b8 (muted)

### Dark Mode Adjustments
- All green colors lighter/brighter
- Accent yellow slightly adjusted
- More contrast on text
- Cards have subtle border
- Icons color-adjusted

## 🎪 Section Layouts

### Hero Section
```
Container: Full width
Padding: 80px top (64px + 16px) to accommodate header
Gradient: Top to bottom
Content: Centered, max-width 1280px
```

### Product Grid Section
```
Container: 1280px max width, centered
Padding: 80px (vertical), 20px (horizontal)
Grid: 3 columns (auto, 2 on tablet, 1 on mobile)
Gap: 24px
```

### Feature Cards Section
```
Container: Full width, alternating colors
Padding: 80px
Grid: 6 items in 3 columns
Card height: Auto, minimum 200px
```

## 🎨 Styling Best Practices Applied

1. **Semantic HTML** - Using proper heading hierarchy
2. **Accessibility** - Color contrast ratios meet WCAG standards
3. **Performance** - No unnecessary animations
4. **Mobile First** - Base styles for mobile, enhanced for larger screens
5. **Consistency** - Repeated patterns and spacing scales
6. **Visual Hierarchy** - Clear importance through size, color, spacing
7. **Whitespace** - Generous spacing for premium feel
8. **Typography** - Limited font families (single family with weights)

## 📸 Key Page Sections

### Home Page
1. Header (fixed)
2. Hero Section (full viewport)
3. Product Categories (6 cards)
4. Featured Products (6 products, grid)
5. Why Choose Us (6 features)
6. Call-to-Action Section
7. Newsletter Signup
8. Footer

### Products Page
1. Header
2. Breadcrumb Navigation
3. Category Filter Buttons
4. Products Grid (all 41)
5. Footer

### Category Page
1. Header
2. Breadcrumb Navigation
3. Category Title + Description
4. Category Filter (active highlighted)
5. Filtered Products Grid
6. Footer

### Contact Page
1. Header
2. Breadcrumb Navigation
3. Contact Info Cards (left)
4. Contact Form (right)
5. Why Choose Section
6. Footer

## ✨ Polish Details

- Smooth scroll behavior
- Cursor changes to pointer on interactive elements
- Outlines on focus for keyboard navigation
- Transitions on all interactive states
- No layout shift on image load
- Proper image lazy loading
- Optimized bundle size
- Fast time to interactive

---

This visual guide ensures consistent application of the Nutrolin India brand throughout the website, creating a professional, premium agricultural product experience.
