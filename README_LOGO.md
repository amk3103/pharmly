# Pharmly Logo & Branding Guide

## Logo Source

**IMPORTANT**: The Pharmly logo is sourced from the official brand guidelines image:
- **File**: `src/imports/pharmly-logo.png`
- **Usage**: Always use this exact logo file - do NOT recreate or redesign
- **Format**: PNG image
- **Contains**: Logo icon + "Pharmly" text + tagline

## Logo Design Elements

The Pharmly logo features:
- **Icon**: Heart shape integrated with a capsule (pill)
  - Teal heart lobe (#00A6A6)
  - Purple/blue capsule forming part of the heart (#52489C)
  - White outline with teal checkmark inside
  - Diagonal orientation for dynamic appearance
- **Text**: "Pharmly" in purple (#52489C)
- **Tagline**: "Your prescriptions, simplified."

## Typography

**Primary Branding Text**: "Pharmly"
- Font: Poppins (rounded, modern sans-serif)
- Weight: Bold (700)
- Color: Purple (#52489C)

**Tagline**: "Your prescriptions, simplified."
- Font: Poppins
- Color: Gray (#6b7280)
- Size: Small (10-12px depending on context)

## Color Palette

**Main Colors:**
- Purple/Blue: #52489C
- Teal: #00A6A6

**Secondary/Accent Colors:**
- Yellow: #FFC759
- Pink: #FF85A3
- Light Grey: #E8E9ED

## Usage in App

### PharmlyLogo Component

The `PharmlyLogo` component provides flexible logo display:

```tsx
import PharmlyLogo from './components/PharmlyLogo';

// Default size with tagline
<PharmlyLogo size="default" showTagline={true} />

// Large size without tagline
<PharmlyLogo size="large" showTagline={false} />

// Small size
<PharmlyLogo size="small" showTagline={false} />
```

**Size Options:**
- `small`: 100x30px
- `default`: 160x50px
- `large`: 200x62px

### Screen Usage

1. **Homepage Header** (`/`)
   - Component: `PharmlyLogo` with `size="default"` and `showTagline={true}`
   - Location: Top left of screen

2. **Empty States**
   - Search results: Logo at 40% opacity, large size
   - No prescriptions: Logo at 30% opacity, large size
   - Creates calm, reassuring feeling

3. **Splash Screen** (`/splash`)
   - Logo centered in white rounded container
   - Gradient background (purple to teal)
   - Auto-redirects to home after 2.5 seconds

4. **Logo Showcase** (`/logo`)
   - Demonstrates all logo variations
   - Shows brand colors and typography
   - Reference page for developers

## Empty State Design

Empty states use the Pharmly logo to:
- Reinforce brand identity
- Create calm, reassuring atmosphere
- Maintain visual consistency
- Avoid technical or cold aesthetics

**Design Pattern:**
```tsx
<div className="flex flex-col items-center justify-center py-16">
  <div className="mb-6 opacity-30">
    <PharmlyLogo size="large" showTagline={false} />
  </div>
  <h3>No results found</h3>
  <p>Try adjusting your search or filters</p>
</div>
```

## Important Notes

1. **Never regenerate the logo** - Always use the source PNG file
2. **Maintain aspect ratio** - Use `objectFit: "contain"` to prevent distortion
3. **Opacity for empty states** - Use 30-40% opacity for subtle presence
4. **Consistent spacing** - Keep 24px (1.5rem) margins around logo
5. **White background for splash** - Logo displays best on white rounded container

## Files

All logo-related components:
- `/src/app/components/PharmlyLogo.tsx` - Main logo component
- `/src/app/components/screens/Splash.tsx` - Splash screen
- `/src/app/components/screens/EmptyPrescriptions.tsx` - Empty state component
- `/src/app/components/screens/LogoShowcase.tsx` - Logo demo page
- `/src/imports/pharmly-logo.png` - Source logo file
