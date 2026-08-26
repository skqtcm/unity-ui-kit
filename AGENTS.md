# Unity UI Kit — Agent Instructions

This repository is a CSS-only UI component kit for Leidos QTC Health Services (LQTCHS). It mirrors a Figma design system and provides ready-to-use classes for building enterprise interfaces.

## Primary Instruction File

Read and follow **SKILL.md** at the root of this repository. It contains the complete class reference, HTML patterns, decision tree, and anti-patterns list.

## Key Rules

1. **No custom CSS** — use only classes from `unity-ui-kit.css`
2. **No logo placeholders** — always use the actual Leidos logo: `<img src="../assets/logo-lqtchs-dark-blue.svg" alt="LQTCHS">`
3. **Required stylesheet**: `<link rel="stylesheet" href="../unity-ui-kit.css">`
4. **Required icon font**: `<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">`
5. **Output location**: place generated pages in the `templates/` folder

## File Map

| File | Purpose |
|------|---------|
| `SKILL.md` | Full AI instruction set (class reference, patterns, rules) |
| `unity-ui-kit.css` | The CSS framework — all component styles |
| `figma-to-css-map.json` | Figma token → CSS class mapping for design-to-code |
| `snippets.html` | Live component showcase |
| `templates/` | Generated page templates |
| `assets/` | Logos and static images |

## Quick Start for Agents

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="../unity-ui-kit.css">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Use Unity UI Kit classes only -->
</body>
</html>
```

## Token Lookups

When matching a Figma design, consult `figma-to-css-map.json` for the correct CSS class corresponding to each Figma component or token.
