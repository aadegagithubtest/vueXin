<template>
  <div
    class="sidebar-group"
    :class="{ first, collapsable }"
  >
    <p
      class="sidebar-heading"
      :class="{ open }"
      @click="$emit('toggle')"
    >
      <span>{{ item.title }}</span>
      <span
        class="arrow1"
        v-if="collapsable"
        :class="open ? 'down' : 'right'">
      </span>
    </p>

    <DropdownTransition>
      <ul
        ref="items"
        class="sidebar-group-items"
        v-if="open || !collapsable"
      >
        <li v-for="(child,index) in item.children" @click="xxx(index)" ref="li">
          <SidebarLink :item="child"/>
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'
import DropdownTransition from './DropdownTransition.vue'

export default {
  name: 'SidebarGroup',
  props: ['item', 'first', 'open', 'collapsable'],
  components: { SidebarLink, DropdownTransition },
    data(){
      return {
          selected:null
      }
    },
    mounted(){
        this.$refs.li && this.$refs.li.forEach((item,index)=>{
            if(item.querySelector('li')&&item.querySelector('li').classList.contains('active')){
                this.selected = index
            }

        })
    },
    inject:['eventBus'],
    methods:{
      xxx(index){
          if(this.$route.path==='/install/'){
              this.eventBus.$emit('xxx',true)
              this.selected = -1
              return
          }
          if(index===this.selected)return
          let distance
              distance=index-this.selected
            if(distance<0){
                this.eventBus.$emit('xxx',false)
            }else{
                this.eventBus.$emit('xxx',true)
            }
               this.selected = index
      }
    },
}
</script>

<style lang="stylus">
.sidebar-group
  &:not(.first)
    margin-top 1em
  .sidebar-group
    padding-left 0.5em
  &:not(.collapsable)
    .sidebar-heading
      cursor auto
      color inherit

.sidebar-heading
  color rgb(81, 90, 110)
  transition .4s all ease
  cursor pointer
  font-size 1.1em
  font-weight bold
  // text-transform uppercase
  padding 0 1.5rem
  margin-top 0
  margin-bottom 0.5rem
  &.open, &:hover
    color #e0620d
  .arrow1
    position relative
    top -0.12em
    left 0.5em
  &:.open .arrow
    top -0.18em

.sidebar-group-items
  transition height .1s ease-out

</style>
