import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Slider from './slider'
import Content from './content'
import plugin from './plugin.js'



Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-slider', Slider)
Vue.component('g-content', Content)
Vue.use(plugin)


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        value: 'v-model'
    },
    methods: {
        inputChange(e) {
            console.log(e)
        },
        Change(e) {
            console.log(e)
        },
        blur(e) {
            console.log(e)
        },
        focus(e) {
            console.log(e)
        },
        showMsg() {
            this.$toast('<p style="color: red">你xx，叫你关机你不关机</p>',{
                closeButton:{
                    text:'cas',
                    callback(){
                        console.log('鲁迅在书桌上刻了一个草字')
                    }
                },
                enableHTML:true
            })
        },

    },


})




