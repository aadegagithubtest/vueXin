<template>

    <div style="margin-top: 30px">
        <div style="margin-top: 20px;">

            <x-collapse :selected.sync="selectTab" exhibition>
                <template slot="description">
                    <x-button-group>
                        <x-button @click="theSize='big'">big</x-button>
                        <x-button @click="theSize='medium'">medium</x-button>
                        <x-button @click="theSize='small'">small</x-button>
                    </x-button-group>
                    <br>
                    <br>
                    <br>
                    <x-cascader :source.sync="source"
                                :selected.sync="selected"
                                :loadData="example"
                                dynamic
                                :size="theSize">
                    </x-cascader>

                    <div style="margin-top: 40px;color: #999999">
                        使用 <code>size</code>控制cascader的大小，目前只有 <code>big</code> <code>medium</code> <code>small</code>。
                        默认是 <code>medium</code>
                    </div>
                </template>
                <x-collapse-item name="1" title="展示代码" title2="隐藏代码">
                    <div v-html="html"></div>
                    <br>
                    <div  v-html="js"></div>
                </x-collapse-item>
            </x-collapse>
        </div>
    </div>
</template>

<script>
    import ButtonGroup from '../../../src/currency/button-group'
    import Button from '../../../src/currency/button'
    import collapse from '../../../src/Exhibition/collapse'
    import collapseItem from '../../../src/Exhibition/collapse-item'
    import Cascader from '../../../src/form data/cascader'
    import address from '../../../tests/fixtures/address.js'
    import marked from 'marked'

    function ajax(parent_id = 0){
        return new Promise(resolve=>{
            let res = address.filter(item=>item.parent_id===parent_id)
            resolve(res)
        })
    }
    export default {
        name: "grid-arrange",
        created(){
            ajax(0).then(res=>{
                this.source = res
            })
        },

        data(){
            return {
                selectTab:[1],
                selected:[1],
                theSize:'small',
                input1:'```html\n' +
                    '<x-button-group>\n' +
                    '    <x-button @click="theSize=\'big\'">big</x-button>\n' +
                    '    <x-button @click="theSize=\'medium\'">medium</x-button>\n' +
                    '    <x-button @click="theSize=\'small\'">small</x-button>\n' +
                    '</x-button-group>\n' +
                    '\n' +
                    '<x-cascader :source.sync="source"\n' +
                    '    :selected.sync="selected"\n' +
                    '    :loadData="example"\n' +
                    '    dynamic\n' +
                    '    :size="theSize">\n' +
                    '</x-cascader>\n' +
                    '```',
                input2:'```js\n' +
                    'export default {\n' +
                    '    data(){\n' +
                    '        return{\n' +
                    '            theSize:\'small\',\n' +
                    '        }\n' +
                    '    }\n' +
                    '}\n' +
                    '```',
                source:[]
            }
        },
        methods:{
            example({id},updateSource){
                ajax(id).then(res=>{
                    updateSource(res)
                })
            }
        },
        components:{
            'x-collapse':collapse,
            'x-collapse-item':collapseItem,
            'x-cascader':Cascader,
            'x-button':Button,
            'x-button-group':ButtonGroup
        },
        computed: {
            html() {
                return marked(this.input1)
            },
            js() {
                return marked(this.input2)
            },
        },
        beforeDestroy(){
            this.$el.remove()
        },
    }
</script>

<style scoped>

</style>
