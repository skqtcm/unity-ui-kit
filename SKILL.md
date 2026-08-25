# Unity UI Kit — AI Skill for Layout Generation

> **Version:** 1.2 | **Last updated:** 2026-08-24
> **Purpose:** Instruct AI assistants (Claude, ChatGPT, Copilot, Cursor) to generate HTML mockups and prototypes using ONLY the Unity UI Kit CSS framework — no custom CSS, no inline styles, no hardcoded values.

---

## RULES (Non-negotiable)

1. **NEVER write custom CSS.** Not a single rule, not a `<style>` block, not a class definition.
2. **NEVER use inline styles** except the explicit exceptions listed in "ALLOWED INLINE STYLES" below.
3. **NEVER hardcode colors, spacing, fonts, or shadows.** Everything comes from kit classes and tokens.
4. **ONLY use classes documented in this file.** If a class doesn't exist here, it doesn't exist.
5. **ONLY use the HTML structure patterns shown here.** Don't invent element nesting.
6. **Always include the two CDN links (Public Sans font + Material Symbols icons) + kit CSS + kit JS** in every HTML file.

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
| `unity-topbar` | White topbar. 64px height, bottom border. |
| `unity-topbar-branded` | Gradient topbar (logged-out state). |
| `unity-topbar-logo` | Logo container inside topbar. |
| `unity-topbar-logo-placeholder` | Text placeholder when logo SVG unavailable. |
| `unity-topbar-hamburger` | Menu toggle icon in topbar. |
| `unity-topbar-title` | App title text in topbar. |
| `unity-topbar-spacer` | Flex spacer to push items right. |
| `unity-topbar-search` | Search input box in topbar. |
| `unity-topbar-tools` | Icon toolbar group (settings, notifications). |
| `unity-topbar-icon` | 40px icon button (hover highlight). |
| `unity-topbar-avatar` | 36px circular avatar placeholder. |
| `unity-block-header` | Sub-page header (back arrow + title + badge + actions). |

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
| `unity-text-success` | #008817 (success green) |
| `unity-text-warning` | #FACE00 (warning yellow) |
| `unity-text-danger` | #B21D38 (flagged red) |

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

**Full-width (block) button:** Add `unity-btn-block` — width 100%, text left-aligned.
```html
<button class="unity-btn unity-btn-secondary unity-btn-sm unity-btn-block">
  <span class="material-symbols-outlined icon-sm">upload</span> Upload File
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
- `unity-label-required` — adds dark blue asterisk (*)
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

**When to use which grid:**
- `unity-form-grid` — auto-responsive columns (wraps on narrow screens). Use inside cards for data entry forms.
- `unity-filter-grid-{n}` — fixed N columns. Use inside `unity-search-panel` for filter controls.

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
  <div class="unity-tabs-underline">
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

### Tabs

`unity-tabs-underline` is the standard tab component (matches Figma). Blue underline for active, gray text for inactive.

```html
<div class="unity-tabs-underline">
  <div class="unity-tab active">Overview</div>
  <div class="unity-tab">Details</div>
  <div class="unity-tab">History</div>
</div>
```

Use `unity-tabs-underline` everywhere — both in `unity-topbar` and in content areas. The legacy raised `unity-tabs` is available but NOT the Figma standard.

### Topbar — Logged In (with hamburger, search, tools)

```html
<div class="unity-topbar">
  <div class="unity-topbar-hamburger">
    <span class="material-symbols-outlined">menu</span>
  </div>
  <span class="unity-topbar-title">App Title</span>
  <div class="unity-topbar-spacer"></div>
  <div class="unity-topbar-search">
    <span class="material-symbols-outlined icon-sm unity-text-secondary">search</span>
    <input type="text" placeholder="Search">
  </div>
  <div class="unity-topbar-tools">
    <div class="unity-topbar-icon"><span class="material-symbols-outlined">settings</span></div>
    <div class="unity-topbar-icon"><span class="material-symbols-outlined">notifications</span></div>
  </div>
  <div class="unity-topbar-avatar"><span class="material-symbols-outlined">person</span></div>
</div>
```

### Topbar — Branded/Logged Out (gradient)

```html
<div class="unity-topbar-branded">
  <div class="unity-topbar-logo">
    <img src="path/to/logo-white.svg" alt="LQTCHS">
  </div>
</div>
```

### Navigation — Sidebar

Purple gradient sidebar, 216px wide, 48px-tall nav links. Active link uses subtle white overlay. Includes search row, badge counts, and footer section.

```html
<aside class="unity-navbar">
  <div class="unity-navbar-logo">
    <img src="path/to/logo-white.svg" alt="Leidos QTC Health Services">
  </div>
  <div class="unity-navbar-search">
    <span class="material-symbols-outlined icon-sm">search</span> Search
  </div>
  <a href="#" class="unity-nav-link active">
    <span class="material-symbols-outlined icon-sm">cases</span> Case Management
    <span class="unity-nav-link-badge">11</span>
  </a>
  <a href="#" class="unity-nav-link">
    <span class="material-symbols-outlined icon-sm">note_add</span> New Referral
  </a>
  <div class="unity-navbar-footer">
    <a href="#" class="unity-nav-link">
      <span class="material-symbols-outlined icon-sm">history</span> History
    </a>
  </div>
</aside>
```

| Class | Purpose |
|-------|---------|
| `unity-navbar` | Sidebar container (216px, gradient, full-height) |
| `unity-navbar-collapsed` | Collapsed sidebar variant (56px, icons-only) |
| `unity-navbar-logo` | Logo area in sidebar |
| `unity-navbar-search` | Search row in sidebar |
| `unity-navbar-footer` | Footer section (auto margin-top, border separator) |
| `unity-nav-link` | Nav item (48px height, icon + label) |
| `unity-nav-link-badge` | Red count badge on nav link |

### Block Header (sub-page navigation)

```html
<div class="unity-block-header">
  <div class="unity-block-header-back">
    <span class="material-symbols-outlined">arrow_back</span>
  </div>
  <span class="unity-block-header-title">Title</span>
  <div class="unity-block-header-meta">
    <span class="unity-block-header-id">6347249.2</span>
    <span class="unity-block-header-label">FOH</span>
  </div>
  <div class="unity-block-header-actions">
    <div class="unity-topbar-icon"><span class="material-symbols-outlined">more_vert</span></div>
  </div>
</div>
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
    <span class="unity-paginator-page"><span class="material-symbols-outlined icon-sm">chevron_left</span></span>
    <span class="unity-paginator-page active">1</span>
    <span class="unity-paginator-page">2</span>
    <span class="unity-paginator-page">3</span>
    <span class="unity-paginator-ellipsis">...</span>
    <span class="unity-paginator-page">100</span>
    <span class="unity-paginator-page"><span class="material-symbols-outlined icon-sm">chevron_right</span></span>
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

Note: Leave separator spans empty — the "/" is auto-generated by CSS.

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
// Default duration: 5000ms (auto-dismisses)
```

For static prototypes showing a visible toast:
```html
<div class="unity-toast unity-toast-success visible">
  <span class="material-symbols-outlined icon-sm">check_circle</span>
  <span>Record saved successfully</span>
</div>
```

Variants: `unity-toast-info`, `unity-toast-success`, `unity-toast-warning`, `unity-toast-error`

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

**Editable cell (icon + value inline):** Use inside `<td>` for clickable edit actions:
```html
<td><a class="unity-action-link"><span class="material-symbols-outlined icon-sm">edit</span> 8888888888</a></td>
```

---

## LAYOUT UTILITIES

### Flex

| Class | Behavior |
|-------|----------|
| `unity-row` | `display:flex; align-items:center; gap:8px` |
| `unity-row-between` | `display:flex; align-items:center; justify-content:space-between` |
| `unity-col` | `display:flex; flex-direction:column; gap:8px` |

### Gap

`unity-gap-4`, `unity-gap-8`, `unity-gap-12`, `unity-gap-16`, `unity-gap-20`, `unity-gap-24`

Use `unity-gap-*` to override the default 8px gap on `unity-row` or `unity-col`. Use `unity-mt-*`/`unity-mb-*` for spacing between independent sections that are not in a flex container.

### Padding

`unity-p-8`, `unity-p-12`, `unity-p-16`, `unity-p-24`

### Margin

`unity-mt-8`, `unity-mt-16`, `unity-mt-24`, `unity-mb-8`, `unity-mb-16`, `unity-mb-24`

### 12-Column Grid

**CAUTION:** `unity-col` (standalone) is a flex-column utility. `unity-col-{n}` is a grid column span. They are different systems — do not confuse them. You can combine both on one element: `<div class="unity-col-4 unity-col unity-gap-12">` (grid span of 4, flex-column inside).

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

## STATE CLASSES

These classes control visibility and active states across components:

| Class | Used on | Effect |
|-------|---------|--------|
| `visible` | `.unity-modal-overlay`, `.unity-dropdown-menu`, `.unity-menu` | Makes the element visible (default is hidden) |
| `active` | `.unity-tab`, `.unity-paginator-page`, `.unity-nav-link`, `.unity-step`, `.unity-switch` | Active/current state |
| `completed` | `.unity-step` | Step is done (shows checkmark, green connector) |
| `disabled` | `tr`, `.unity-listbox-item` | Muted/non-interactive state |
| `selected` | `.unity-radio-option`, `.unity-listbox-item` | Currently selected item |

For static prototypes showing modals/dropdowns, add `visible` to the overlay/menu element.

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
3. `style="width:Npx"` on table `<th>` — fixed column widths (e.g., checkbox column)
4. **Page-level layout structure** (used exactly once per page):
   - `style="flex-direction:row;"` on `.unity-page` — enables sidebar layout
   - `style="flex:1; display:flex; flex-direction:column;"` on the main content wrapper div beside the sidebar
   - `style="margin-top:48px;"` on secondary layout examples in the same file

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

### Recipe: Detail View with Sidebar (Expanded)

```
unity-page (style="flex-direction:row;")
├── aside.unity-navbar (sidebar, 216px)
│   ├── unity-navbar-logo → <img> white logo
│   ├── unity-navbar-search (icon + "Search")
│   ├── unity-nav-link.active (icon + label + optional unity-nav-link-badge)
│   ├── unity-nav-link (×n)
│   └── unity-navbar-footer
│       └── unity-nav-link (×n)
└── div (style="flex:1; display:flex; flex-direction:column;")
    ├── unity-content
    │   ├── unity-breadcrumb
    │   ├── unity-page-header
    │   ├── unity-grid (info cards)
    │   └── unity-card (stepper, etc.)
    └── unity-footer
```

### Recipe: Detail View with Sidebar (Collapsed)

```
unity-page (style="flex-direction:row;")
├── aside.unity-navbar-collapsed (56px icon-only)
│   ├── unity-navbar-logo → <img> white logo (28px)
│   ├── unity-nav-link (icon only, badges position absolute top-right)
│   └── unity-navbar-footer
│       └── unity-nav-link (icon only)
└── div (style="flex:1; display:flex; flex-direction:column;")
    ├── unity-topbar (hamburger + title + spacer + tools + avatar)
    ├── unity-block-header (optional sub-page nav)
    ├── unity-content
    └── unity-footer
```

### Recipe: Full Navigation Layout (Sidebar + Topbar + Block Header)

```
unity-page (style="flex-direction:row;")
├── aside.unity-navbar
└── div (style="flex:1; display:flex; flex-direction:column;")
    ├── unity-topbar
    │   ├── unity-topbar-hamburger
    │   ├── unity-topbar-title
    │   ├── unity-topbar-spacer
    │   ├── unity-topbar-search
    │   ├── unity-topbar-tools → unity-topbar-icon (×n)
    │   └── unity-topbar-avatar
    ├── unity-block-header
    │   ├── unity-block-header-back
    │   ├── unity-block-header-title
    │   ├── unity-block-header-meta (unity-block-header-id + unity-block-header-label)
    │   └── unity-block-header-actions
    ├── unity-content
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

### Recipe: Login / Unauthenticated Page

```
unity-page
├── unity-topbar-branded (gradient bar with white logo)
├── unity-content
│   ├── unity-page-header (welcome title)
│   └── unity-card (sign-in form)
│       ├── unity-card-header
│       └── unity-col unity-gap-16
│           ├── unity-form-field (username)
│           ├── unity-form-field (password)
│           └── unity-btn unity-btn-primary unity-btn-lg unity-btn-block
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
| White header with tabs | `unity-topbar` + `unity-tabs-underline` |
| Toggle between views | `unity-btn-group` |
| Filter form above a table | `unity-search-panel` + `unity-filter-grid-{n}` |
| Quick filter + bulk actions bar | `unity-toolbar` |
| Toolbar + table + pagination grouped | `unity-data-section` (wrap all three) |
| Dense data table (many columns) | `unity-table unity-table-dense` |
| Simple table in a card (no toolbar/pagination) | `unity-card` containing `unity-table` |
| Standard table | `unity-table` |
| Tabs (any context) | `unity-tabs-underline` |
| Status indicator (short text) | `unity-badge` |
| Status indicator (with icon) | `unity-tag` |
| Removable filter tokens | `unity-chip` + `unity-chip-remove` |
| Side navigation (dark) | `unity-navbar` + `unity-nav-link` |
| Drawer/slide-out panel (no padding) | `unity-panel` |
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
