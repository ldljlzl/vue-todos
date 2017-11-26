<template>
  <div id="menus">
    <div class="item" v-for="item in items">
        <div class="itemDiv" >
            <span><img src="../assets/edit.png" alt="edit" v-on:click="editItem(item.index)"></span>
            <span v-if="item.show" v-on:click="showTodoList([item.title,item.todoList])">{{item.title}}</span>
            <span v-else v-on:keyup.enter="submit(item.index)"><input type="text" v-model="item.title" ></span>            
        </div>
        <div class="itemIcon">
            <span class="num-todo"><div class="circle">{{item.todoList.length}}</div></span>
            <span><img src="../assets/close.png" alt="delate" v-on:click="delateItem(item.index)"></span>       
        </div>
            
    </div>
    <div id="add-item" class="item">
        <div v-on:click="addItem" class="itemDiv">
            <span><img src="../assets/add.png" alt="add"></span>
            <span>新增</span>
        </div>
    </div>
  </div>
  
</template>
<script>
export default {
    props:['itemsData'],
    data(){
        return{
            items:this.itemsData,
            todosList:this.list
        }
    },
    methods:{
        addItem:function(){
            this.items.push({         
                title:'新列表',index:this.items.length+1,show:true,todoList:[]
            })
        },
        editItem:function(index){
            this.items[index-1].show=false;
        },
        delateItem:function(index){
            this.items.splice(index-1,1);
            this.items.map(function(item){
                if (item.index>index) {
                    item.index=item.index-1;
                }
            })
        },
        submit:function(index){
            this.items[index-1].show=true;
        },
        showTodoList:function([title,list]){
            this.$emit("showList",[title,list])
        }

    }
}
</script>
<style>
    @import '../common/menus.css';
</style>



