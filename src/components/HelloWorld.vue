<template>
  <FontAwesomeIcon :icon="icon" />
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faStroopwafel, faDragon } from '@fortawesome/free-solid-svg-icons';


config.autoAddCss = false;

export default {
  components: {
    FontAwesomeIcon,
  },
  mounted() {
    // This will only work on your root Vue component since it's using $parent
    const { shadowRoot } = this.$parent.$options;
    const id = 'fa-styles';

    if (!shadowRoot.getElementById(`${id}`)) {
      const faStyles = document.createElement('style');
      faStyles.setAttribute('id', id);
      faStyles.textContent = dom.css();
      shadowRoot.appendChild(faStyles);
    }
  },
  computed: {
    icon() {
      const icons = [faCoffee, faStroopwafel, faDragon];

      return icons[Math.floor(Math.random() * 3)];
    }
  }
}
</script>


<style scoped>
</style>
