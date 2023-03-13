<template>
  <div>
    <li>
      <router-link :to="menu.url" v-if="menu.url!=null"><i class="fa fa-home"></i>1{{ menu.name }}</router-link>
      <a v-else><i class="fa fa-home"></i>2{{ menu.name }}</a>
      <ul class="submenu" v-if="menu.children.length>0">
        <tree-menu v-for="childMenu in menu.children" :key="childMenu.id" :menu="childMenu"></tree-menu>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: "TreeMenu",
  props:['menu']
}
</script>

<style scoped>

</style>