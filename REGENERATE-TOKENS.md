# How to regenerate Unity UI Kit tokens

When the Unity UI Kit Figma file is updated, regenerate these files:

## Files produced
- `unity-ui-kit-complete.json` — tokens + all 232 component APIs (241 KB)
- `unity-ui-kit-icons.json` — 3,768 icon keys (438 KB)
- `unity-ui-kit.d.ts` — TypeScript type definitions

## Steps to regenerate

1. Open Claude Code in this project directory
2. Run: "Pull latest tokens from Unity UI Kit https://www.figma.com/design/4k8jrWQQxHYeDseVQzZWGe/Unity-UI-Kit-v1.0"
3. Claude will use `list_file_components_for_code_connect` to get all components and rebuild the JSON

## Source
- Figma file: https://www.figma.com/design/4k8jrWQQxHYeDseVQzZWGe/Unity-UI-Kit-v1.0
- Library key: `lk-444236f8ed9831ee8657fa59e77f4cc8f33bb8f3af92735508e3efff11da885e45979587e619072a60ed26e89222534bfd10dee07e01a84d040832b9d3bc6775`
- Last exported: 2026-08-22
