<template>
    <div id="container">
        <div id="data">
            <menus :itemsData="items"  v-on:showList="lzl"></menus>
        </div>
        <div id="todo">
            <todo :itemsData="items" :showList="todoList" :itemTitle="title"></todo>
        </div>
    </div>
</template>

<script>
    import menus from './menus'
    import todo from './todo'

    export default {
        data(){
            return{
                todoList:[],
                title:'',
                items:[
                    {
                        title:'星期一',index:1,show:true,
                        todoList:['洗衣服','做饭']
                    },
                    {
                        title:'星期二',index:2,show:true,
                        todoList:[]
                    }
                ]
            }
        },
        computed:{
            
        },
        components:{
            menus,todo
        },
        methods:{
            lzl:function(arr){
                this.title=arr[0]
                this.todoList=arr[1]
                
            }
        }
    }
</script>
<style>
    @import '../common/style.css'
</style>





