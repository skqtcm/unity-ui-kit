# Unity UI Kit — AI Skill for Layout Generation

> **Version:** 1.2 | **Last updated:** 2026-08-24
> **Purpose:** Instruct AI assistants (Claude, ChatGPT, Copilot, Cursor) to generate HTML mockups and prototypes using ONLY the Unity UI Kit CSS framework — no custom CSS, no inline styles, no hardcoded values.

---

## RULES (Non-negotiable)

1. **NEVER write custom CSS.** Not a single rule, not a `<style>` block, not a class definition.
2. **NEVER use inline styles.** No `style="..."` attributes on any element.
3. **NEVER hardcode colors, spacing, fonts, or shadows.** Everything comes from kit classes and tokens.
4. **ONLY use classes documented in this file.** If a class doesn't exist here, it doesn't exist.
5. **ONLY use the HTML structure patterns shown here.** Don't invent element nesting.
6. **Always include the three CDN links + kit CSS + kit JS** in every HTML file.

---

## Setup (required in every HTML file)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Page Title</title>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
<link href="path/to/unity-ui-kit.css" rel="stylesheet">
<script src="path/to/unity-ui-kit.js" defer></script>
</head>
<body>
<div class="unity-page">
  <!-- Page content here -->
</div>
</body>
</html>
```

---

## COMPLETE CLASS REFERENCE

### Page Structure

| Class | Purpose |
|-------|---------|
| `unity-page` | Root wrapper. `min-height:100vh`, flex column. |
| `unity-content` | Main content area. `flex:1`, padding 24px, flex-col, gap 20px. |
| `unity-page-header` | Flex row, space-between. For title + action buttons. |
| `unity-container` | Max-width 1440px, centered, horizontal padding 24px. |

### Typography

| Class | Renders |
|-------|---------|
| `unity-h1` | 24px / 32px, SemiBold |
| `unity-h2` | 20px / 26px, SemiBold |
| `unity-h3` | 18px / 24px, SemiBold |
| `unity-h4` | 16px / 24px, SemiBold |
| `unity-h5` | 14px / 20px, SemiBold |
| `unity-h6` | 14px / 20px, Bold |
| `unity-body` | 14px / 20px, Regular |
| `unity-body-semibold` | 14px / 20px, SemiBold |
| `unity-body-light` | 14px / 20px, Light |
| `unity-sub` | 12px / 150%, Light |
| `unity-sub-bold` | 12px / 150%, Bold |
| `unity-table-heading` | 13px, SemiBold, uppercase, letter-spacing |
| `unity-badge-text` | 10.5px / 150%, SemiBold |

### Text Color Utilities

| Class | Color |
|-------|-------|
| `unity-text-primary` | #212B36 (default text) |
| `unity-text-secondary` | #848086 (muted) |
| `unity-text-placeholder` | #6B7280 |
| `unity-text-disabled` | #BDB8C1 |

### Icons (Material Symbols)

```html
<span class="material-symbols-outlined">icon_name</span>
<span class="material-symbols-outlined icon-sm">icon_name</span>   <!-- 16px -->
<span class="material-symbols-outlined icon-lg">icon_name</span>   <!-- 24px -->
<span class="material-symbols-outlined icon-xl">icon_name</span>   <!-- 32px -->
<span class="material-symbols-outlined filled">icon_name</span>    <!-- Solid fill -->
```

Sizes: `icon-sm` (16px), default (20px), `icon-lg` (24px), `icon-xl` (32px).
Add `filled` class for solid variant.

Browse icons: https://fonts.google.com/icons

### Buttons

**Structure:** `<button class="unity-btn {variant} {size}">Label</button>`

**Variants:**

| Class | Look |
|-------|------|
| `unity-btn-primary` | Blue filled |
| `unity-btn-secondary` | White with blue border |
| `unity-btn-link` | Transparent, blue text |
| `unity-btn-danger` | Red filled |
| `unity-btn-success` | Green filled |
| `unity-btn-warning` | Orange filled |
| `unity-btn-disabled` | Gray, no interaction |

**Sizes:**

| Class | Height |
|-------|--------|
| `unity-btn-lg` | 40px |
| `unity-btn-md` | 36px |
| `unity-btn-sm` | 32px |

**With icon:**
```html
<button class="unity-btn unity-btn-primary unity-btn-md">
  <span class="material-symbols-outlined icon-sm">add</span> Add New
</button>
```

**Disabled:** Add `disabled` attribute OR `unity-btn-disabled` class.

### Segmented Button Group

```html
<div class="unity-btn-group">
  <button class="unity-btn unity-btn-sm unity-btn-group-active">
    <span class="material-symbols-outlined icon-sm">icon</span> Active
  </button>
  <button class="unity-btn unity-btn-sm unity-btn-group-inactive">
    <span class="material-symbols-outlined icon-sm">icon</span> Inactive
  </button>
</div>
```

### Inputs & Forms

**Text input:**
```html
<div class="unity-form-field">
  <label class="unity-label">Field Name</label>
  <input class="unity-input" type="text" placeholder="Enter value">
  <span class="unity-help-text">Helper text</span>
</div>
```

**Modifiers:**
- `unity-label-required` — adds red asterisk
- `unity-label-uppercase` — 11px, uppercase, bold, letter-spacing
- `unity-input-error` — red border
- `unity-help-text-error` — red help text
- `unity-select` — adds dropdown arrow (use with `unity-input`)
- `unity-textarea` — multi-line (use with `unity-input`)

**Select:**
```html
<select class="unity-input unity-select">
  <option>Option 1</option>
</select>
```

**Date range:**
```html
<div class="unity-date-range">
  <input class="unity-input" type="date">
  <span class="unity-date-range-separator">to</span>
  <input class="unity-input" type="date">
</div>
```

**Form grid (equal columns):**
```html
<div class="unity-form-grid">
  <div class="unity-form-field">...</div>
  <div class="unity-form-field">...</div>
</div>
```

### Filter Grids (for search panels)

```html
<div class="unity-filter-grid unity-filter-grid-5">
  <!-- 5 equal columns of form fields -->
</div>
```

Options: `unity-filter-grid-2`, `unity-filter-grid-3`, `unity-filter-grid-4`, `unity-filter-grid-5`

### Checkboxes & Radios

```html
<!-- Checkbox -->
<label class="unity-checkbox"><input type="checkbox" checked> Label</label>

<!-- Radio inline -->
<label class="unity-radio"><input type="radio" name="g" checked> Option</label>

<!-- Radio card -->
<div class="unity-radio-group">
  <label class="unity-radio-option">
    <input type="radio" name="g" checked>
    <span>Card label</span>
  </label>
</div>
```

### Toggle / Switch

```html
<label class="unity-switch-label">
  <button class="unity-switch" role="switch" aria-checked="true" data-unity-switch></button>
  <span>Label</span>
</label>
```

### Cards

```html
<div class="unity-card">
  <div class="unity-card-header">
    <h3 class="unity-card-title">Title</h3>
    <button class="unity-btn unity-btn-link unity-btn-sm">Action</button>
  </div>
  <!-- content -->
</div>
```

### Panel

```html
<div class="unity-panel">
  <!-- Content — similar to card but with drawer-style shadow and no padding -->
</div>
```

### Data Section (table container)

```html
<div class="unity-data-section">
  <div class="unity-toolbar">...</div>
  <div class="unity-table-wrapper">
    <table class="unity-table unity-table-dense">
      <thead><tr><th>Column</th></tr></thead>
      <tbody><tr><td>Data</td></tr></tbody>
    </table>
  </div>
  <div class="unity-paginator">...</div>
</div>
```

**Rule:** Always wrap toolbar + table + pagination in `unity-data-section` to get the white panel with border/shadow.

### Tables

```html
<div class="unity-table-wrapper">
  <table class="unity-table">
    <thead><tr><th>Column</th></tr></thead>
    <tbody><tr><td>Data</td></tr></tbody>
  </table>
</div>
```

**Modifiers:**
- `unity-table-dense` — compact padding (8px/10px) for data grids
- `th.sortable` — pointer cursor + hover state
- `tr.disabled` — muted text

### Messages / Alerts

```html
<div class="unity-message unity-message-warning">
  <span class="material-symbols-outlined filled">warning</span>
  <span>Warning text</span>
</div>
```

Variants: `unity-message-info`, `unity-message-success`, `unity-message-warning`, `unity-message-error`

### Badges

```html
<span class="unity-badge unity-badge-success">OK</span>
```

Variants: `unity-badge-default` (blue), `unity-badge-success` (green bg), `unity-badge-warning` (yellow bg), `unity-badge-danger` (red bg), `unity-badge-secondary` (gray)

### Tags

```html
<span class="unity-tag unity-tag-success">
  <span class="material-symbols-outlined icon-sm">check</span> Active
</span>
```

Variants: `unity-tag-primary`, `unity-tag-success`, `unity-tag-warning`, `unity-tag-danger`, `unity-tag-info`

### Chips

```html
<span class="unity-chip">Default</span>
<span class="unity-chip unity-chip-active">Selected</span>
<span class="unity-chip">Filter <button class="unity-chip-remove" aria-label="Remove">&times;</button></span>
```

Variants: `unity-chip-active`, `unity-chip-primary`, `unity-chip-success`, `unity-chip-warning`, `unity-chip-danger`
Modifier: `unity-chip-square` (rounded corners instead of pill)

### Navigation — Topbar

```html
<div class="unity-topbar">
  <div class="unity-topbar-logo">
    <img src="path/to/logo.svg" alt="LQTCHS">
  </div>
  <div class="unity-tabs">
    <div class="unity-tab active">Active</div>
    <div class="unity-tab">Other</div>
  </div>
</div>
```

When logo asset is unavailable, use placeholder:
```html
<div class="unity-topbar-logo">
  <div class="unity-topbar-logo-placeholder">LOGO</div>
</div>
```

### Underline Tabs (content areas)

```html
<div class="unity-tabs-underline">
  <div class="unity-tab active">Overview</div>
  <div class="unity-tab">Details</div>
  <div class="unity-tab">History</div>
</div>
```

Use `unity-tabs-underline` for inline/content navigation. Use raised `unity-tabs` only inside `unity-topbar`.

### Navigation — Sidebar

```html
<aside class="unity-navbar">
  <a href="#" class="unity-nav-link active">
    <span class="material-symbols-outlined icon-sm">dashboard</span> Dashboard
  </a>
  <a href="#" class="unity-nav-link">
    <span class="material-symbols-outlined icon-sm">settings</span> Settings
  </a>
</aside>
```

### Branded Header (purple)

```html
<div class="unity-header-branded">
  <div class="unity-header-branded-title">
    <span class="unity-header-branded-dot"></span>
    <h1 class="unity-h2">Page Title</h1>
  </div>
  <div class="unity-btn-group">...</div>
</div>
```

### Search Panel

```html
<div class="unity-search-panel">
  <div class="unity-filter-grid unity-filter-grid-5">
    <!-- form fields -->
  </div>
  <div class="unity-actions-right">
    <button class="unity-btn unity-btn-secondary unity-btn-md">Reset</button>
    <button class="unity-btn unity-btn-primary unity-btn-md">Search</button>
  </div>
</div>
```

### Toolbar

```html
<div class="unity-toolbar">
  <div class="unity-toolbar-left">
    <div class="unity-filter-inline">
      <span>FILTER:</span>
      <input type="text">
    </div>
  </div>
  <div class="unity-toolbar-right">
    <button class="unity-btn unity-btn-sm unity-btn-success">Action</button>
  </div>
</div>
```

### Modal

```html
<button data-unity-modal-open="my-modal">Open</button>

<div class="unity-modal-overlay" id="my-modal" role="dialog" aria-modal="true" aria-labelledby="my-modal-title">
  <div class="unity-modal">
    <div class="unity-modal-header">
      <h2 class="unity-modal-title" id="my-modal-title">Title</h2>
      <button class="unity-modal-close" data-unity-modal-close aria-label="Close">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
    <div class="unity-modal-body"><p>Content</p></div>
    <div class="unity-modal-footer">
      <button class="unity-btn unity-btn-secondary unity-btn-md" data-unity-modal-close>Cancel</button>
      <button class="unity-btn unity-btn-primary unity-btn-md">Save</button>
    </div>
  </div>
</div>
```

### Dropdown Menu

```html
<div class="unity-dropdown-menu">
  <a href="#">Edit</a>
  <a href="#">Duplicate</a>
  <hr class="unity-divider">
  <a href="#" class="unity-dropdown-danger">Delete</a>
</div>
```

Trigger with `data-unity-dropdown` attribute on a button.

### Context Menu

```html
<div class="unity-menu">
  <button class="unity-menu-item"><span class="material-symbols-outlined icon-sm">edit</span> Edit</button>
  <div class="unity-menu-divider"></div>
  <button class="unity-menu-item unity-menu-item-danger">Delete</button>
</div>
```

### Listbox

```html
<div class="unity-listbox" role="listbox">
  <div class="unity-listbox-item selected" role="option" aria-selected="true">Selected</div>
  <div class="unity-listbox-item" role="option">Option</div>
  <div class="unity-listbox-item disabled" role="option" aria-disabled="true">Disabled</div>
</div>
```

### Pagination

```html
<div class="unity-paginator">
  <span>1-10 of 47 records</span>
  <div class="unity-paginator-pages">
    <span class="unity-paginator-page active">1</span>
    <span class="unity-paginator-page">2</span>
    <span class="unity-paginator-page">3</span>
    <span class="unity-paginator-ellipsis">...</span>
    <span class="unity-paginator-page">100</span>
    <button class="unity-paginator-text">Next</button>
    <span class="unity-paginator-separator">|</span>
    <button class="unity-paginator-text">Last</button>
  </div>
</div>
```

### Stepper

```html
<div class="unity-stepper">
  <div class="unity-step completed">
    <div class="unity-step-number"><span class="material-symbols-outlined icon-sm">check</span></div>
    <span class="unity-sub-bold">Step 1</span>
  </div>
  <div class="unity-step-connector"></div>
  <div class="unity-step active">
    <div class="unity-step-number">2</div>
    <span class="unity-sub-bold">Step 2</span>
  </div>
  <div class="unity-step-connector"></div>
  <div class="unity-step">
    <div class="unity-step-number">3</div>
    <span class="unity-sub-bold">Step 3</span>
  </div>
</div>
```

### Progress Bar

```html
<div class="unity-progress-label"><span>Upload</span><span>72%</span></div>
<div class="unity-progress">
  <div class="unity-progress-bar" style="width:72%"></div>
</div>
```

Set width via `style="width:XX%"` as the ONLY allowed inline style (dynamic data binding).
Variants: `unity-progress-bar-success`, `unity-progress-bar-warning`, `unity-progress-bar-danger`
Sizes: `unity-progress-sm` (4px), default (8px), `unity-progress-lg` (12px)

### Breadcrumb

```html
<nav class="unity-breadcrumb">
  <a href="#">Home</a>
  <span class="unity-breadcrumb-separator"></span>
  <a href="#">Section</a>
  <span class="unity-breadcrumb-separator"></span>
  <span class="unity-breadcrumb-current">Current Page</span>
</nav>
```

### Tooltips

```html
<button data-unity-tooltip="Tooltip text">Hover me</button>
```

### Accordion

```html
<button data-unity-collapse="section-1" aria-expanded="false">Toggle</button>
<div id="section-1">
  <p>Collapsible content</p>
</div>
```

### Avatar

```html
<div class="unity-avatar unity-avatar-sm">JD</div>  <!-- 28px -->
<div class="unity-avatar">MR</div>                   <!-- 36px -->
<div class="unity-avatar unity-avatar-lg">SK</div>   <!-- 48px -->
```

### Spinner

```html
<div class="unity-spinner"></div>
```

### Empty State

```html
<div class="unity-empty-state">
  <span class="material-symbols-outlined unity-empty-state-icon">inbox</span>
  <div class="unity-empty-state-title">No Data Found</div>
  <div class="unity-empty-state-description">Description text here.</div>
  <button class="unity-btn unity-btn-primary unity-btn-md">Action</button>
</div>
```

### Skeleton Loader

```html
<div class="unity-skeleton unity-skeleton-text"></div>
<div class="unity-skeleton unity-skeleton-heading"></div>
<div class="unity-skeleton unity-skeleton-avatar"></div>
<div class="unity-skeleton unity-skeleton-btn"></div>
<div class="unity-skeleton unity-skeleton-card"></div>
```

### Toast (JavaScript)

```js
Unity.toast.show({ message: 'Saved!', type: 'success', duration: 5000 });
// Types: info, success, warning, error
```

### Divider

```html
<hr class="unity-divider">
```

### Footer

```html
<div class="unity-footer">
  <div class="unity-footer-cui">Controlled Unclassified Information</div>
  <div class="unity-footer-row">
    <div class="unity-footer-copyright">Copyright &copy; 1980-2026 <a href="#">QTC</a></div>
    <div class="unity-footer-links">
      <a href="#">Privacy</a>
      <a href="#">Terms of Use</a>
    </div>
  </div>
</div>
```

### Action Link

```html
<a class="unity-action-link">Edit</a>
```

---

## LAYOUT UTILITIES

### Flex

| Class | Behavior |
|-------|----------|
| `unity-row` | `display:flex; align-items:center; gap:8px` |
| `unity-col` | `display:flex; flex-direction:column; gap:8px` |

### Gap

`unity-gap-4`, `unity-gap-8`, `unity-gap-12`, `unity-gap-16`, `unity-gap-20`, `unity-gap-24`

### Padding

`unity-p-8`, `unity-p-12`, `unity-p-16`, `unity-p-24`

### Margin

`unity-mt-8`, `unity-mt-16`, `unity-mt-24`, `unity-mb-8`, `unity-mb-16`, `unity-mb-24`

### 12-Column Grid

```html
<div class="unity-grid">
  <div class="unity-col-8">Main</div>
  <div class="unity-col-4">Sidebar</div>
</div>
```

Columns: `unity-col-1` through `unity-col-12`
Responsive: `unity-md-col-{n}` (768px+), `unity-lg-col-{n}` (1024px+)

### Visibility

| Class | Behavior |
|-------|----------|
| `unity-hidden-sm` | Hidden below 640px |
| `unity-hidden-md` | Hidden below 768px |
| `unity-hidden-lg` | Hidden below 1024px |
| `unity-visible-md` | Shown only at 768px+ |
| `unity-visible-lg` | Shown only at 1024px+ |

### Right-Aligned Actions

```html
<div class="unity-actions-right">
  <button class="unity-btn ...">Cancel</button>
  <button class="unity-btn ...">Submit</button>
</div>
```

---

## ANIMATIONS

| Class | Effect |
|-------|--------|
| `unity-animate-fade-in` | Fade in (200ms) |
| `unity-animate-fade-out` | Fade out (200ms) |
| `unity-animate-slide-up` | Slide up + fade (200ms) |
| `unity-animate-slide-down` | Slide down + fade (200ms) |
| `unity-animate-slide-in-right` | Slide from right (200ms) |
| `unity-animate-scale-in` | Scale from 95% + fade (200ms) |

---

## DATA ATTRIBUTES (JavaScript behaviors)

| Attribute | Behavior |
|-----------|----------|
| `data-unity-modal-open="id"` | Opens modal with that ID |
| `data-unity-modal-close` | Closes nearest parent modal |
| `data-unity-dropdown` | Toggles next sibling `.unity-dropdown-menu` |
| `data-unity-tooltip="text"` | Shows tooltip on hover/focus |
| `data-unity-collapse="id"` | Toggles element visibility (animated) |
| `data-unity-switch` | Toggle switch on/off (updates `aria-checked`) |

---

## DARK MODE

Add `unity-dark` class to `<body>` or any container. All tokens auto-adapt.
Also responds to `@media (prefers-color-scheme: dark)` automatically.

---

## ALLOWED INLINE STYLES (exceptions)

The following are the ONLY cases where inline `style` is acceptable:

1. `style="width:XX%"` on `.unity-progress-bar` — dynamic data binding
2. `style="grid-template-columns: repeat(N, 1fr)"` on `.unity-form-grid` — when filter-grid classes don't match

**Everything else must use kit classes.**

---

## PAGE RECIPES

### Recipe: Data Table Page (like Workflow Queue)

```
unity-page
├── unity-header-branded (or unity-topbar)
├── unity-search-panel
│   ├── unity-filter-grid unity-filter-grid-5
│   │   └── unity-form-field (×5)
│   ├── unity-filter-grid unity-filter-grid-4
│   │   └── unity-form-field (×4, one with unity-date-range)
│   └── unity-actions-right
│       └── unity-btn (Reset + Search)
├── unity-data-section  ← groups toolbar + table + pagination
│   ├── unity-toolbar
│   │   ├── unity-toolbar-left → unity-filter-inline
│   │   └── unity-toolbar-right → unity-btn (bulk actions)
│   ├── unity-table-wrapper
│   │   └── table.unity-table.unity-table-dense
│   └── unity-paginator
│       └── unity-paginator-pages (page numbers + text nav)
└── unity-footer
```

**Rule:** Always wrap `unity-toolbar` + `unity-table-wrapper` + `unity-paginator` inside a `unity-data-section` container. This provides the white background, border, and shadow that groups them as one visual unit.

### Recipe: Dashboard

```
unity-page
├── unity-topbar
├── unity-content
│   ├── unity-page-header (title + buttons)
│   ├── unity-grid (KPI cards: 4× unity-card unity-col-3)
│   ├── unity-grid
│   │   ├── unity-card unity-col-8 (table)
│   │   └── unity-col-4 (alerts + quick actions)
│   └── ...
└── unity-footer
```

### Recipe: Detail View with Sidebar

```
unity-page (flex-direction: row via utility)
├── aside.unity-navbar (sidebar)
└── div (flex:1, flex-col)
    ├── unity-content
    │   ├── unity-breadcrumb
    │   ├── unity-page-header
    │   ├── unity-grid (info cards)
    │   └── unity-card (stepper, etc.)
    └── unity-footer
```

### Recipe: Form Page

```
unity-page
├── unity-topbar
├── unity-content
│   ├── unity-page-header
│   ├── unity-card
│   │   ├── unity-card-header
│   │   └── unity-form-grid (fields)
│   ├── unity-card (more sections)
│   └── unity-actions-right (Cancel + Save)
└── unity-footer
```

### Recipe: Modal with Form

```
unity-modal-overlay
└── unity-modal
    ├── unity-modal-header (title + close)
    ├── unity-modal-body
    │   ├── unity-form-field (fields)
    │   └── unity-radio-group (options)
    └── unity-modal-footer (Cancel + Confirm)
```

---

## DECISION TREE

| Need | Use |
|------|-----|
| Page title + actions on same row | `unity-page-header` |
| Purple branded header | `unity-header-branded` |
| White header with tabs | `unity-topbar` + `unity-tabs` |
| Toggle between views | `unity-btn-group` |
| Filter form above a table | `unity-search-panel` + `unity-filter-grid-{n}` |
| Quick filter + bulk actions bar | `unity-toolbar` |
| Toolbar + table + pagination grouped | `unity-data-section` (wrap all three) |
| Dense data table (many columns) | `unity-table unity-table-dense` |
| Standard table | `unity-table` |
| Underline tabs (content nav) | `unity-tabs-underline` |
| Status indicator (short text) | `unity-badge` |
| Status indicator (with icon) | `unity-tag` |
| Removable filter tokens | `unity-chip` + `unity-chip-remove` |
| Side navigation (dark) | `unity-navbar` + `unity-nav-link` |
| Loading placeholder | `unity-skeleton` |
| No data message | `unity-empty-state` |
| Step-by-step progress | `unity-stepper` |
| Percentage complete | `unity-progress` |
| Link in a table cell | `unity-action-link` |
| Date range filter | `unity-date-range` |
| Buttons right-aligned | `unity-actions-right` |
| Muted helper text | `unity-help-text` or `unity-sub unity-text-secondary` |
| Notification popup | `Unity.toast.show(...)` |
| Confirm action dialog | Modal pattern |
| Dense label above a field | `unity-label unity-label-uppercase` |

---

## COMMON MISTAKES TO AVOID

| Mistake | Correct Approach |
|---------|-----------------|
| Writing `style="color:red"` | Use `unity-text-*` class or wrap in a `unity-badge-danger` |
| Writing `style="margin-top:16px"` | Use `unity-mt-16` class |
| Writing `style="display:flex"` | Use `unity-row` or `unity-col` |
| Writing `style="gap:12px"` | Use `unity-gap-12` class |
| Writing `style="padding:24px"` | Use `unity-p-24` class |
| Creating a `<style>` block | Never. Use only existing classes. |
| Using `style="background:#..."` | Use semantic class like `unity-card`, `unity-search-panel`, etc. |
| Using `style="font-weight:bold"` | Use `unity-body-semibold`, `unity-h5`, etc. |
| Adding custom grid CSS | Use `unity-grid` + `unity-col-{n}` or `unity-filter-grid-{n}` |
| Inline positioning for dropdown | Use `data-unity-dropdown` + `unity-dropdown-menu` |
