# Unity UI Kit v1.1

A complete design system extracted from the **Unity UI Kit v1.0 Figma library**, packaged as:
- CSS framework with design tokens
- JavaScript interaction behaviors
- Material Design icon integration
- HTML component snippets & page templates
- Figma-to-CSS class mapping

Built for creating pixel-accurate, accessible HTML prototypes that match the Figma design system.

---

## Quick Start

Add these three lines to any HTML file:

```html
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
<link href="path/to/unity-ui-kit.css" rel="stylesheet">
<script src="path/to/unity-ui-kit.js" defer></script>
```

Then use Unity classes:

```html
<button class="unity-btn unity-btn-primary unity-btn-lg">
  <span class="material-symbols-outlined icon-sm">add</span> Add New
</button>
```

---

## File Structure

```
unity-ui-kit/
├── unity-ui-kit.css              # Full CSS framework (tokens + components)
├── unity-ui-kit.js               # JS behaviors (modal, tabs, toast, etc.)
├── unity-ui-kit-complete.json    # Raw design tokens from Figma
├── unity-ui-kit-icons.json       # 3,768 Figma icon component keys
├── unity-ui-kit-material-icons.json  # 3,899 Material Symbols icon names
├── figma-to-css-map.json         # Figma component → CSS class mapping
├── snippets.html                 # Interactive component gallery
├── index.js                      # Node.js API for querying tokens
├── unity-ui-kit.d.ts             # TypeScript definitions
├── package.json
└── templates/
    ├── page-table.html           # Table/list page starter
    ├── page-form.html            # Form page starter
    ├── page-dashboard.html       # Dashboard with KPI cards
    └── page-detail.html          # Detail view with sidebar nav
```

---

## Design Tokens

All tokens from the Figma library are available as CSS custom properties:

### Colors

```css
/* Primitives */
--unity-primary-blue: #235899;
--unity-dark-blue: #1E2F5A;
--unity-leidos-purple: #4C3291;
--unity-success-green: #008817;
--unity-flagged-red: #B21D38;
--unity-warning-yellow: #FACE00;
--unity-flagged-light: #FDE8E8;
--unity-warning-light: #FAE3D2;
--unity-success-light: #CDFFD6;
--unity-light-red: #FF5757;
--unity-light-green: #2EB745;
--unity-light-orange: #FFAD52;
--unity-light-blue: #679AD8;

/* Semantic */
--unity-bg-main: #FFFFFF;
--unity-bg-filled: #F0F2F5;
--unity-text-primary: #212B36;
--unity-text-secondary: #848086;
--unity-stroke-gray: #D9D9D9;
--unity-divider: #E5E7EB;

/* Button States */
--unity-btn-primary-hover: #0B3971;
--unity-btn-primary-active: #04254D;
--unity-btn-link-hover: #EAF2FB;
```

### Spacing

```css
--unity-space-4: 4px;
--unity-space-8: 8px;
--unity-space-12: 12px;
--unity-space-16: 16px;
--unity-space-20: 20px;
--unity-space-24: 24px;
--unity-space-32: 32px;
--unity-space-48: 48px;
--unity-space-64: 64px;
```

### Typography

| Class | Size | Weight | Use |
|-------|------|--------|-----|
| `.unity-h1` | 24px/32px | SemiBold | Page titles |
| `.unity-h2` | 20px/26px | SemiBold | Section titles |
| `.unity-h3` | 18px/24px | SemiBold | Card titles |
| `.unity-h4` | 16px/24px | SemiBold | Sub-sections |
| `.unity-h5` | 14px/20px | SemiBold | Labels, emphasis |
| `.unity-h6` | 14px/20px | Bold | Strong labels |
| `.unity-body` | 14px/20px | Regular | Body text |
| `.unity-body-semibold` | 14px/20px | SemiBold | Emphasized body |
| `.unity-sub` | 12px/150% | Light | Captions, helper |
| `.unity-sub-bold` | 12px/150% | Bold | Badge text |

### Effects / Shadows

```css
--unity-shadow-container: 0px 1px 2px 0px rgba(0, 0, 0, 0.08);
--unity-shadow-dialog: 0px 1px 3px 0px rgba(0, 0, 0, 0.30);
--unity-shadow-drawer: -4px 0px 8px 0px rgba(0, 0, 0, 0.08);
--unity-focus-default: 0 0 0 2.8px rgba(191, 219, 254, 1);
--unity-focus-error: 0 0 0 2.8px rgba(254, 191, 191, 1);
```

---

## Components

### Buttons

```html
<!-- Variants -->
<button class="unity-btn unity-btn-primary unity-btn-lg">Primary</button>
<button class="unity-btn unity-btn-secondary unity-btn-md">Secondary</button>
<button class="unity-btn unity-btn-link unity-btn-md">Link</button>
<button class="unity-btn unity-btn-danger unity-btn-sm">Danger</button>
<button class="unity-btn unity-btn-disabled unity-btn-lg" disabled>Disabled</button>

<!-- With icon -->
<button class="unity-btn unity-btn-primary unity-btn-lg">
  <span class="material-symbols-outlined icon-sm">save</span> Save
</button>
```

**Sizes:** `unity-btn-lg` (40px), `unity-btn-md` (36px), `unity-btn-sm` (32px)

### Inputs & Forms

```html
<div class="unity-form-field">
  <label class="unity-label unity-label-required">Field Name</label>
  <input class="unity-input" type="text" placeholder="Enter value">
  <span class="unity-help-text">Helper text</span>
</div>

<!-- Select -->
<select class="unity-input unity-select">
  <option>Option 1</option>
</select>

<!-- Textarea -->
<textarea class="unity-input unity-textarea" rows="4"></textarea>

<!-- Error state -->
<input class="unity-input unity-input-error" value="Invalid">
<span class="unity-help-text unity-help-text-error">Error message</span>

<!-- Form grid (3 columns) -->
<div class="unity-form-grid" style="grid-template-columns: repeat(3, 1fr);">
  <div class="unity-form-field">...</div>
  <div class="unity-form-field">...</div>
  <div class="unity-form-field">...</div>
</div>
```

### Checkboxes & Radios

```html
<!-- Checkbox -->
<label class="unity-checkbox">
  <input type="checkbox" checked> Label text
</label>

<!-- Radio (inline) -->
<label class="unity-radio">
  <input type="radio" name="group" checked> Option A
</label>

<!-- Radio (card-style) -->
<div class="unity-radio-group">
  <label class="unity-radio-option">
    <input type="radio" name="choice" checked>
    <span>Accept this Service Member</span>
  </label>
  <label class="unity-radio-option">
    <input type="radio" name="choice">
    <span>Remove from Event</span>
  </label>
</div>
```

### Cards

```html
<div class="unity-card">
  <div class="unity-card-header">
    <h3 class="unity-card-title">Title</h3>
    <button class="unity-btn unity-btn-link unity-btn-sm">Action</button>
  </div>
  <!-- Card content -->
</div>
```

### Tables

```html
<div class="unity-card">
  <div class="unity-table-wrapper">
    <table class="unity-table">
      <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th>Name</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox"></td>
          <td><strong>JOHNSON</strong>, Michael</td>
          <td><span class="unity-badge unity-badge-warning">Pending</span></td>
          <td><a class="unity-action-link">Resolve</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="unity-paginator">
    <span>1-10 of 47</span>
    <div class="unity-paginator-pages">
      <span class="unity-paginator-page active">1</span>
      <span class="unity-paginator-page">2</span>
      <span class="unity-paginator-page">3</span>
    </div>
  </div>
</div>
```

### Messages / Alerts

```html
<div class="unity-message unity-message-warning">
  <span class="material-symbols-outlined filled">warning</span>
  <span>Warning message text</span>
</div>

<!-- Variants: unity-message-info, unity-message-success, unity-message-warning, unity-message-error -->
```

### Badges & Tags

```html
<!-- Badges (rounded pills) -->
<span class="unity-badge unity-badge-default">Default</span>
<span class="unity-badge unity-badge-success">OK</span>
<span class="unity-badge unity-badge-warning">Pending</span>
<span class="unity-badge unity-badge-danger">Error</span>

<!-- Tags (with icons) -->
<span class="unity-tag unity-tag-success">
  <span class="material-symbols-outlined icon-sm">check</span> Active
</span>
```

### Modals

```html
<!-- Trigger -->
<button data-unity-modal-open="my-modal">Open</button>

<!-- Modal -->
<div class="unity-modal-overlay" id="my-modal" role="dialog" aria-modal="true" aria-labelledby="my-modal-title">
  <div class="unity-modal">
    <div class="unity-modal-header">
      <h2 class="unity-modal-title" id="my-modal-title">Title</h2>
      <button class="unity-modal-close" data-unity-modal-close aria-label="Close">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
    <div class="unity-modal-body">
      <p>Content here</p>
    </div>
    <div class="unity-modal-footer">
      <button class="unity-btn unity-btn-secondary unity-btn-md" data-unity-modal-close>Cancel</button>
      <button class="unity-btn unity-btn-primary unity-btn-md">Save</button>
    </div>
  </div>
</div>
```

### Toasts (JS)

```js
Unity.toast.show({ message: 'Record saved!', type: 'success' });
Unity.toast.show({ message: 'Upload failed', type: 'error', duration: 8000 });
```

### Tooltips

```html
<button data-unity-tooltip="Helpful hint text">Hover me</button>
```

### Dropdowns

```html
<div style="position:relative; display:inline-block;">
  <button class="unity-btn unity-btn-secondary unity-btn-md" data-unity-dropdown>
    Menu <span class="material-symbols-outlined icon-sm">expand_more</span>
  </button>
  <div class="unity-dropdown-menu" style="display:none;">
    <a href="#">Edit</a>
    <a href="#">Delete</a>
  </div>
</div>
```

### Accordion / Collapsible

```html
<button data-unity-collapse="section-1" aria-expanded="false">Toggle Section</button>
<div id="section-1" style="display:none;">
  <p>Collapsible content</p>
</div>
```

### Chips

```html
<!-- Default -->
<span class="unity-chip">Label</span>

<!-- With icon -->
<span class="unity-chip"><span class="material-symbols-outlined icon-sm">label</span> Tag</span>

<!-- Active / selected -->
<span class="unity-chip unity-chip-active"><span class="material-symbols-outlined icon-sm">check</span> Selected</span>

<!-- Removable -->
<span class="unity-chip">Filter <button class="unity-chip-remove" aria-label="Remove">&times;</button></span>
```

### Menu

```html
<div class="unity-menu">
  <button class="unity-menu-item"><span class="material-symbols-outlined icon-sm">edit</span> Edit</button>
  <button class="unity-menu-item"><span class="material-symbols-outlined icon-sm">content_copy</span> Duplicate</button>
  <hr class="unity-divider">
  <button class="unity-menu-item unity-menu-item-danger"><span class="material-symbols-outlined icon-sm">delete</span> Delete</button>
</div>
```

### Listbox

```html
<div class="unity-listbox" role="listbox">
  <div class="unity-listbox-item selected" role="option" aria-selected="true">
    <span>Selected Item</span>
    <span class="material-symbols-outlined icon-sm">check</span>
  </div>
  <div class="unity-listbox-item" role="option">
    <span>Another Item</span>
  </div>
  <div class="unity-listbox-item disabled" role="option" aria-disabled="true">
    <span>Disabled Item</span>
  </div>
</div>
```

### Progress Bar

```html
<div class="unity-progress-label"><span>Upload</span><span>72%</span></div>
<div class="unity-progress">
  <div class="unity-progress-bar" style="width:72%;"></div>
</div>

<!-- Variants: unity-progress-bar-success, unity-progress-bar-warning, unity-progress-bar-danger -->
<!-- Sizes: unity-progress-sm (4px), default (8px), unity-progress-lg (12px) -->
```

### Breadcrumb

```html
<nav class="unity-breadcrumb">
  <a href="#">Dashboard</a>
  <span class="unity-breadcrumb-separator"></span>
  <a href="#">Events</a>
  <span class="unity-breadcrumb-separator"></span>
  <span class="unity-breadcrumb-current">Detail</span>
</nav>
```

### Toggle / Switch

```html
<label class="unity-switch-label">
  <button class="unity-switch" role="switch" aria-checked="true" data-unity-switch></button>
  <span>Label text</span>
</label>

<!-- Disabled -->
<button class="unity-switch" role="switch" aria-checked="false" disabled data-unity-switch></button>
```

### Empty State

```html
<div class="unity-empty-state">
  <span class="material-symbols-outlined unity-empty-state-icon">inbox</span>
  <div class="unity-empty-state-title">No Events Found</div>
  <div class="unity-empty-state-description">Nothing matches your filter criteria.</div>
  <button class="unity-btn unity-btn-primary unity-btn-md">Create Event</button>
</div>
```

### Skeleton Loader

```html
<!-- Text skeleton -->
<div class="unity-skeleton unity-skeleton-text"></div>
<div class="unity-skeleton unity-skeleton-text"></div>
<div class="unity-skeleton unity-skeleton-text" style="width:60%;"></div>

<!-- Heading -->
<div class="unity-skeleton unity-skeleton-heading"></div>

<!-- Avatar, button, card shapes -->
<div class="unity-skeleton unity-skeleton-avatar"></div>
<div class="unity-skeleton unity-skeleton-btn"></div>
<div class="unity-skeleton unity-skeleton-card"></div>
```

---

## Layout

### Page Structure

```html
<div class="unity-page">
  <div class="unity-topbar">...</div>
  <div class="unity-content">
    <div class="unity-page-header">
      <h1 class="unity-h2">Page Title</h1>
    </div>
    <!-- Page content -->
  </div>
  <div class="unity-footer">...</div>
</div>
```

### Responsive Grid

```html
<!-- 12-column grid -->
<div class="unity-grid">
  <div class="unity-col-8">Main content (8/12)</div>
  <div class="unity-col-4">Sidebar (4/12)</div>
</div>

<!-- Responsive: full width on mobile, 2 columns on medium, 3 on large -->
<div class="unity-grid">
  <div class="unity-col-12 unity-md-col-6 unity-lg-col-4">Item</div>
  <div class="unity-col-12 unity-md-col-6 unity-lg-col-4">Item</div>
  <div class="unity-col-12 unity-md-col-6 unity-lg-col-4">Item</div>
</div>
```

**Breakpoints:** sm=640px, md=768px, lg=1024px, xl=1280px, 2xl=1440px

### Container

```html
<div class="unity-container">
  <!-- Max-width 1440px, centered, with 24px horizontal padding -->
</div>
```

### Flex Utilities

```html
<div class="unity-row unity-gap-16">...</div>   <!-- Horizontal flex -->
<div class="unity-col unity-gap-12">...</div>   <!-- Vertical flex -->
```

**Gap:** `unity-gap-4`, `unity-gap-8`, `unity-gap-12`, `unity-gap-16`, `unity-gap-20`, `unity-gap-24`

**Padding:** `unity-p-8`, `unity-p-12`, `unity-p-16`, `unity-p-24`

**Margin:** `unity-mt-8`, `unity-mt-16`, `unity-mt-24`, `unity-mb-8`, `unity-mb-16`, `unity-mb-24`

---

## Dark Mode

Dark mode activates automatically via OS preference, or manually with a class:

```html
<!-- Auto (OS preference) -->
<body>...</body>

<!-- Manual -->
<body class="unity-dark">...</body>
```

All token overrides apply automatically — no component class changes needed.

---

## Animations

```html
<!-- Utility classes -->
<div class="unity-animate-fade-in">Fades in</div>
<div class="unity-animate-slide-up">Slides up</div>
<div class="unity-animate-scale-in">Scales in (modals)</div>

<!-- Auto-applied by JS behaviors -->
<!-- Modals get .entering class with scale-in animation -->
<!-- Toasts get .entering class with slide-up animation -->
```

---

## Icons

**3,899 Material Symbols** available via CDN:

```html
<!-- Default (20px) -->
<span class="material-symbols-outlined">settings</span>

<!-- Sizes -->
<span class="material-symbols-outlined icon-sm">check</span>   <!-- 16px -->
<span class="material-symbols-outlined icon-lg">home</span>    <!-- 24px -->
<span class="material-symbols-outlined icon-xl">error</span>   <!-- 32px -->

<!-- Filled variant -->
<span class="material-symbols-outlined filled">favorite</span>
```

Browse all icons: [fonts.google.com/icons](https://fonts.google.com/icons)

---

## JavaScript API

### `Unity.modal`
```js
Unity.modal.open('modal-id');   // Open by ID
Unity.modal.close('modal-id');  // Close by ID
```

### `Unity.tabs`
```js
Unity.tabs.activate(tabElement);  // Activate a specific tab
```

### `Unity.toast`
```js
Unity.toast.show({
  message: 'Text to display',
  type: 'success',    // info | success | warning | error
  duration: 5000      // ms, default 5000
});
```

### Data Attributes
| Attribute | Behavior |
|-----------|----------|
| `data-unity-modal-open="id"` | Opens modal with that ID |
| `data-unity-modal-close` | Closes parent modal |
| `data-unity-dropdown` | Toggles sibling `.unity-dropdown-menu` |
| `data-unity-tooltip="text"` | Shows tooltip on hover/focus |
| `data-unity-collapse="id"` | Toggles element visibility (animated) |
| `data-unity-switch` | Toggle switch on/off (updates `aria-checked`) |

### Keyboard Support
- **Escape** closes modals and dropdowns
- **Arrow keys** navigate between tabs and listbox items
- **Space / Enter** toggles switches
- **Focus trapping** inside open modals

---

## Accessibility (ARIA)

All interactive components include proper ARIA attributes:

| Component | ARIA Pattern |
|-----------|-------------|
| Modal | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` |
| Tabs | `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls` |
| Tooltip | `aria-describedby` (auto-generated) |
| Dropdown | `aria-expanded` on trigger |
| Accordion | `aria-expanded` on trigger |
| Switch | `role="switch"`, `aria-checked` |
| Listbox | `role="listbox"`, `role="option"`, `aria-selected`, keyboard arrow nav |
| Alert | `role="alert"` on `.unity-message` |
| Close buttons | `aria-label="Close"` |

---

## Figma Integration

### Figma-to-CSS Mapping

See `figma-to-css-map.json` for the complete mapping. Example:

| Figma Component | CSS Classes |
|----------------|-------------|
| `button_unity` (Primary, Large) | `.unity-btn .unity-btn-primary .unity-btn-lg` |
| `input` | `.unity-input` |
| `select_unity` | `.unity-input .unity-select` |
| `message` (Warning) | `.unity-message .unity-message-warning` |
| `card_content` | `.unity-card` |
| `table-th` / `table-td` | `.unity-table thead th` / `.unity-table tbody td` |
| `badge_unity` (Success) | `.unity-badge .unity-badge-success` |
| `Topbar` | `.unity-topbar` |
| `RHRP footer` | `.unity-footer` |

### Node.js API

```js
const kit = require('unity-ui-kit');

kit.getComponent('button_unity');     // Component metadata
kit.getIcon('calendar');              // Figma icon key + nodeId
kit.getMaterialIcon('warning');       // { name, usage: '<span...>' }
kit.getColor('primary-blue');         // { key, hex, rgb }
kit.getSpacing('16px');               // { key, value: 16 }
kit.getTextStyle('H1 Semibold');      // { key, weight, size, lineHeight }
kit.listMaterialIcons();              // All 3,899 icon names
```

---

## Page Templates

Ready-to-use starter pages in `/templates`:

| Template | Description |
|----------|-------------|
| `page-table.html` | Data table with filters, pagination, modal detail |
| `page-form.html` | Multi-section form with validation states |
| `page-dashboard.html` | KPI cards + activity table + alerts sidebar |
| `page-detail.html` | Sidebar navigation + detail cards + stepper |

Open `snippets.html` in a browser to see all components rendered interactively.

---

## Source

- **Figma Library:** [Unity UI Kit v1.0](https://www.figma.com/design/4k8jrWQQxHYeDseVQzZWGe/Unity-UI-Kit-v1.0)
- **232 component sets**, 3,768 icon components
- **Font:** Public Sans (Google Fonts)
- **Icons:** Material Symbols Outlined (Google Fonts)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-08-22 | Initial token export from Figma |
| 1.1 | 2026-08-24 | Material icons, CSS framework, JS behaviors, dark mode, responsive grid, animations, templates, accessibility |
