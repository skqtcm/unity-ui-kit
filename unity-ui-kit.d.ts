/** Unity UI Kit v1.0 — Type definitions for unity-ui-kit-complete.json */

export interface UnityUIKit {
  meta: Meta;
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  effects: Record<string, EffectStyle>;
  components: ComponentSet[];
  icons: { _ref: string; count: number };
  usage: UsageSnippets;
}

export interface Meta {
  name: string;
  figmaFileKey: string;
  figmaFileUrl: string;
  libraryKey: string;
  fontFamily: string;
  totalComponentSets: number;
  totalIcons: number;
  version: string;
  exportedAt: string;
}

export interface ColorToken {
  key: string;
  hex: string;
  rgb?: [number, number, number];
  usage?: string;
}

export interface Colors {
  collectionKey: string;
  modes: ["Light", "Dark"];
  primitives: Record<string, ColorToken>;
  semantic: {
    collectionKey: string;
    tokens: Record<string, ColorToken>;
  };
}

export interface TextStyle {
  key: string;
  weight: "Light" | "Regular" | "SemiBold" | "Bold";
  size: number;
  lineHeight: string;
}

export interface Typography {
  fontFamily: string;
  fontWeights: string[];
  styles: Record<string, TextStyle>;
}

export interface SpacingToken {
  key: string;
  value: number;
}

export interface Spacing {
  collectionKey: string;
  tokens: Record<string, SpacingToken>;
}

export interface EffectStyle {
  key: string;
  type: "DROP_SHADOW";
  offset: [number, number];
  blur: number;
  spread: number;
  color: string;
}

export interface ComponentProperty {
  type: "VARIANT" | "BOOLEAN" | "TEXT" | "INSTANCE_SWAP";
  key: string;
  options?: string[];
  default?: string | boolean;
  preferredValues?: Array<{ type: string; key: string }>;
}

export interface ComponentDependency {
  name: string;
  key: string;
}

export interface ComponentSet {
  name: string;
  key: string;
  nodeId: string;
  page: string;
  properties: Record<string, ComponentProperty>;
  dependencies?: ComponentDependency[];
  deprecated?: boolean;
}

export interface IconEntry {
  key: string;
  nodeId: string;
}

export interface IconsFile {
  meta: { name: string; version: string; exportedAt: string; totalIcons: number };
  icons: Record<string, IconEntry>;
}

export interface UsageSnippets {
  importVariable: string;
  importStyle: string;
  importComponentSet: string;
  importComponent: string;
  bindColorToFill: string;
  bindSpacing: string;
  applyTextStyle: string;
  applyEffect: string;
  loadFonts: Array<{ family: string; style: string }>;
}
