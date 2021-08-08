<template>
  <div class="masonry-lite">
    <slot></slot>
  </div>
</template>
<script>
import { calcPositions } from './index.js';
export default {
  name: 'MasonryLite',
  props: {
    gap: {
      type: Number,
      default: 12,
    },
    columns: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.doLayout();
  },
  methods: {
    doLayout() {
      const children = [...this.$el.querySelectorAll('.masonry-item')];
      if (children.length === 0) {
        return;
      }
      const { positions, containerHeight } = calcPositions({
        elements: children,
        columns: this.columns,
        gap: this.gap,
      });
      children.forEach((item, index) => {
        item.style.cssText = `left:${positions[index].left}px;top:${positions[index].top}px;`;
      });
      this.$el.style.height = `${containerHeight}px`;
    },
  },
};
</script>
<style lang="scss" scoped>
.masonry-lite {
  position: relative;
}
.masonry-item {
  position: absolute;
}
</style>