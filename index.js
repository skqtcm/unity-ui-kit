const kit = require('./unity-ui-kit-complete.json');
const icons = require('./unity-ui-kit-icons.json');
const materialIcons = require('./unity-ui-kit-material-icons.json');

module.exports = {
  meta: kit.meta,
  colors: kit.colors,
  typography: kit.typography,
  spacing: kit.spacing,
  effects: kit.effects,
  components: kit.components,
  icons: icons.icons,
  materialIcons: materialIcons,
  usage: kit.usage,

  getComponent(name) {
    return kit.components.find(c => c.name === name && !c.deprecated);
  },

  getComponentByKey(key) {
    return kit.components.find(c => c.key === key);
  },

  getIcon(name) {
    return icons.icons[name] || null;
  },

  getMaterialIcon(name) {
    return materialIcons.icons.includes(name) ? { name, usage: `<span class="material-symbols-outlined">${name}</span>` } : null;
  },

  listMaterialIcons() {
    return materialIcons.icons;
  },

  getColor(name) {
    return kit.colors.primitives[name] || kit.colors.semantic.tokens[name] || null;
  },

  getSpacing(name) {
    return kit.spacing.tokens[name] || null;
  },

  getTextStyle(name) {
    return kit.typography.styles[name] || null;
  },

  getEffect(name) {
    return kit.effects[name] || null;
  },

  listComponents({ deprecated = false } = {}) {
    return kit.components.filter(c => deprecated || !c.deprecated);
  }
};
