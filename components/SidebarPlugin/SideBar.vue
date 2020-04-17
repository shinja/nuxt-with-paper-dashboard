<template>
  <div
    class="sidebar"
    :data-background-color="backgroundColor"
    :data-active-color="activeColor"
  >
    <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
    <!-- -->
    <div id="style-3" class="sidebar-wrapper">
      <div class="logo">
        <a href="#" class="simple-text">
          <div class="logo-img">
            <img src="@/assets/img/vue-logo.png" alt="" />
          </div>
          {{ title }}
        </a>
      </div>
      <slot> </slot>
      <ul class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot name="links">
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="index"
            :to="link.path"
            :name="link.name"
            :icon="link.icon"
          >
          </sidebar-link>
        </slot>
      </ul>
      <moving-arrow :move-y="arrowMovePx"> </moving-arrow>
    </div>
  </div>
</template>
<script>
import MovingArrow from './MovingArrow'
import SidebarLink from './SidebarLink'
export default {
  components: {
    MovingArrow,
    SidebarLink
  },
  props: {
    title: {
      type: String,
      default: 'Paper Dashboard'
    },
    backgroundColor: {
      type: String,
      default: 'black',
      validator: (value) => {
        const acceptedValues = ['white', 'black', 'darkblue']
        return acceptedValues.includes(value)
      }
    },
    activeColor: {
      type: String,
      default: 'success',
      validator: (value) => {
        const acceptedValues = [
          'primary',
          'info',
          'success',
          'warning',
          'danger'
        ]
        return acceptedValues.includes(value)
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      autoClose: this.autoClose,
      addLink: this.addLink,
      removeLink: this.removeLink
    }
  },
  data() {
    return {
      linkHeight: 65,
      activeLinkIndex: 0,
      windowWidth: 0,
      isWindows: false,
      hasAutoHeight: false,
      links: []
    }
  },
  computed: {
    /**
     * Styles to animate the arrow near the current active sidebar link
     * @returns {{transform: string}}
     */
    arrowMovePx() {
      return this.linkHeight * this.activeLinkIndex
    }
  },
  mounted() {
    this.$watch('$route', this.findActiveLink, {
      immediate: true
    })
  },
  methods: {
    findActiveLink() {
      this.links.forEach((link, index) => {
        if (link.isActive()) {
          this.activeLinkIndex = index
        }
      })
    },
    addLink(link) {
      const index = this.$slots.links.indexOf(link.$vnode)
      this.links.splice(index, 0, link)
    },
    removeLink(link) {
      const index = this.links.indexOf(link)
      if (index > -1) {
        this.links.splice(index, 1)
      }
    }
  }
}
</script>
<style></style>
