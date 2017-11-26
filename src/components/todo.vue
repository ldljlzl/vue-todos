<template>
    <div id="todoDiv">
        <div id="topDiv">
            <div>{{itemTitle}}</div>
            <div>
                <img src="../assets/selected.png" alt="finished" id="finished" v-on:click="finishItems">
                <img src="../assets/delete.png" alt="delete" v-on:click="deleteItems">
            </div>
        </div>
        <div id="bottomDiv">
            <div id="listDiv">
                <form action="">
                    <div v-for="item in showList">
                        <input type="checkbox" name="itemOption" :value="item">
                        <label @click="select(item)">{{item}}</label>
                        <img src="../assets/delete.png" alt="delate" @click="deleteItem(item)">
                    </div>
                </form>
            </div>
            <div id="addDiv">
                <div >
                    <span v-on:click="addTodo"><img src="../assets/add.png" alt="add"></span>
                    <span v-on:click="addTodo">添加事件</span>
                </div>
            </div>   
        </div>
    </div>
</template>
<script>
export default {
    props:['itemsData','showList','itemTitle'],
    data(){
        return{
            items:this.itemsData,
        }
    },
    methods:{
        addTodo:function(){
            var addDiv=document.getElementById('addDiv').getElementsByTagName('div')[0];
            var input=document.createElement('input');
            addDiv.appendChild(input);
            var btn=document.createElement('button');
            btn.innerHTML='添加';
            addDiv.appendChild(btn);
            var list=this.showList;
            btn.addEventListener('click',function(){
                var text=input.value;
                input.value='';
                list.push(text);
                addDiv.removeChild(btn);
                addDiv.removeChild(input);
            })
        },
        select:function(item){
            let index=this.showList.indexOf(item);
            let itemOption=document.getElementsByName("itemOption");
            for (var key in itemOption) {
                if (itemOption.hasOwnProperty(key)) {
                    var element = itemOption[key];
                    if (item==element.value) {
                        element.checked=true;
                    }                    
                }
            }
        },
        deleteItem:function(item){
            let index=this.showList.indexOf(item);
            this.showList.splice(index,1);
        },
        deleteItems:function(){
            let itemOption=document.getElementsByName("itemOption");
            for (var key in itemOption) {
                if (itemOption.hasOwnProperty(key)) {
                    var element = itemOption[key];
                    if (element.checked) {
                        element.checked=false;
                        var index=this.showList.indexOf(element.value);
                        this.showList.splice(index,1);
                    }                    
                }
            }
        },
        finishItems:function(){
            let itemOption=document.getElementsByName("itemOption");
            for (var key in itemOption) {
                if (itemOption.hasOwnProperty(key)) {
                    var element = itemOption[key];
                    if (element.checked) {
                        element.checked=false;  
                        element.parentNode.getElementsByTagName('label')[0].style.textDecoration="line-through";   
                    }                    
                }
            }
        }
    },

}
</script>
<style>
    @import '../common/todo.css';
</style>

