````md
# Project Overview

This project is an Angular wedding after-party website.

Primary purpose:
- present wedding after-party information
- show event details and location
- display guest information
- provide RSVP form
- provide gallery page
- keep the design elegant, clean and responsive

The project follows:
- Angular standalone component architecture
- mobile-first responsive design
- component-based structure
- service-based API communication
- clean separation of templates, styles and logic

---

# Technologies

## Main Stack
- Angular 19
- TypeScript
- Standalone Components
- Angular Router
- Reactive Forms
- RxJS
- HTML
- CSS

## Hosting and Deployment
- GitHub repository
- Vercel deployment
- Vercel serverless functions where needed

## Assets
- custom PNG icons
- SVG icons where explicitly used
- wedding-style images
- static assets in `src/app/assets/images`

---

# Project Structure

```text
src/app/components
src/app/models
src/app/services
src/app/assets/images
````

---

## components

Contains Angular standalone components.

Typical component files:

* `.ts`
* `.html`
* `.css`

Rules:

* keep components focused
* preserve standalone component imports
* keep templates readable
* keep component logic simple
* do not move API logic into components
* do not introduce unnecessary shared abstractions
* preserve existing routes and component names unless explicitly requested

---

## models

Contains TypeScript models, DTOs, interfaces and types.

Rules:

* keep models simple
* prefer interfaces/types for request and response objects
* preserve existing API payload structure
* avoid mixing UI-only state with backend DTOs unless already established
* use meaningful names

---

## services

Contains Angular services.

Rules:

* services handle API communication
* services contain reusable frontend business/API logic
* components should call services instead of using `HttpClient` directly
* keep endpoint handling consistent with existing patterns
* do not expose secrets in frontend code
* avoid hardcoded production-only URLs unless already used by the project

---

## assets/images

Contains visual assets.

Rules:

* preserve existing asset paths
* keep icons visually consistent
* prefer existing icons before adding new ones
* use transparent PNGs where the existing design uses transparent PNGs
* do not rename assets unless explicitly requested
* do not remove assets unless verified as unused

---

# Visual Design

The website should preserve its wedding identity.

Design principles:

* elegant
* soft
* warm
* clean
* centered
* mobile-friendly
* visually balanced

Style characteristics:

* soft warm background
* white cards
* subtle shadows
* golden accent color
* serif typography
* careful spacing
* consistent icons
* responsive layout

Avoid:

* corporate-looking UI
* heavy shadows
* harsh borders
* aggressive colors
* unnecessary animations
* layout changes that break the wedding style

---

# Responsive Design Rules

The project is mobile-first.

Always:

* write base styles for mobile first
* add tablet media queries only when needed
* add desktop media queries only when needed
* preserve visual balance across screen sizes
* check spacing, width and alignment on mobile, tablet and desktop

Avoid:

* desktop-first CSS
* duplicated media query logic
* unnecessary breakpoint changes
* fixed widths that break mobile layout
* layout jumps between breakpoints

---

# CSS Rules

When modifying CSS:

* preserve existing class names where possible
* keep selectors readable
* avoid overly specific selectors
* avoid duplicated declarations
* keep spacing consistent
* preserve card layout behavior
* ensure shadows do not visually overflow in a broken way
* preserve page frame behavior
* preserve mobile-first structure

Preferred order:

1. layout
2. spacing
3. typography
4. colors
5. images/icons
6. states
7. media queries

---

# Angular Rules

## General

Always:

* preserve standalone component architecture
* preserve existing imports unless safely removable
* keep TypeScript strict and readable
* keep methods small and focused
* use meaningful names
* preserve routing behavior
* inspect related `.ts`, `.html` and `.css` files together
* generate complete updated files when the user asks for complete files

Avoid:

* unnecessary libraries
* unnecessary refactoring
* changing unrelated files
* changing route paths unless explicitly requested
* mixing unrelated UI changes with functional changes
* adding complex abstractions to a small wedding website

---

# Template Rules

HTML templates should be:

* semantic
* readable
* accessible where practical
* consistent with existing structure

Prefer:

* clear section structure
* readable class names
* simple Angular bindings
* form bindings consistent with the component

Avoid:

* excessive nesting
* inline styles
* duplicated markup
* hidden logic in templates

---

# Reactive Forms Rules

The RSVP page uses Reactive Forms.

When modifying RSVP functionality:

* preserve form controls
* preserve validation behavior
* preserve typed values
* preserve submit flow
* preserve success/error flash messages
* preserve disabled/submitted state handling
* preserve API payload unless explicitly requested

Avoid:

* enabling submit while request is in progress
* resetting the form before success feedback is visible
* breaking validation messages
* changing field names without updating the service/model/API

---

# API and Vercel Rules

The website may use Vercel serverless functions for backend-like behavior.

When modifying API calls:

* inspect existing service first
* preserve endpoint naming
* preserve error handling
* keep local and production deployment in mind
* do not expose environment variables in frontend code
* do not put secrets into Angular files

For Vercel functions:

* preserve existing module format
* handle CORS carefully
* support `OPTIONS` requests when needed
* keep server-side environment variables server-side only

---

# GitHub and Deployment Rules

The project is versioned on GitHub and deployed to Vercel.

When modifying files:

* keep changes focused
* avoid generated noise
* avoid unnecessary formatting-only changes
* preserve existing deployment assumptions
* avoid changes that would break Vercel build
* check `package.json` before suggesting commands

Preferred validation:

```bash
npm install
npm run build
ng serve
```

If `package.json` defines different scripts, use those instead.

---

# Asset and Icon Rules

The website uses custom wedding-style icons.

Always preserve:

* icon color consistency
* visual size consistency
* stroke thickness consistency
* transparent background where used
* alignment with text fields and cards

When adjusting icons:

* align visually, not only mathematically
* check mobile and desktop sizes
* avoid stretching icons
* avoid mixing different icon styles
* avoid changing icon color unless explicitly requested

---

# AI Assistant Behavior

When modifying code:

* first analyze related files
* identify impacted components/services/models
* explain planned changes before larger modifications
* preserve existing architecture
* preserve naming conventions
* preserve responsive behavior
* avoid unrelated changes
* avoid unnecessary dependencies

When generating code:

* prefer complete, directly usable files
* keep code concise and readable
* follow existing project patterns
* keep mobile-first styling
* include tablet and desktop media queries when relevant

When refactoring:

* preserve behavior
* avoid unnecessary rewrites
* avoid changing public routes or API payloads
* update related files together
* mention possible risks

When uncertain:

* inspect project files first
* do not invent architecture
* ask only when the missing information blocks safe implementation

---

# Preferred Workflow

For non-trivial tasks:

1. Analyze current implementation
2. Identify impacted files
3. Propose a short implementation plan
4. Implement focused changes
5. Validate TypeScript, template bindings, CSS and responsive behavior
6. Summarize changed files and remaining risks

---

# Output Style

Responses should be:

* concise
* technical
* practical
* implementation-focused

Before major modifications:

* provide a short plan
* list impacted files
* mention risks if any

After modifications:

* summarize what changed
* list changed files
* suggest validation commands

```
```
