<template>
    <div>
        <router-view/>
        <mt-tabbar v-model="selected" :fixed="true">
            <mt-tab-item id="外卖">
                <mt-button type="danger" size="large" @click.native="handleClick(1)">外卖</mt-button>
                
            </mt-tab-item>
            <mt-tab-item id="订单">
                <mt-button type="danger" size="large" @click.native="handleClick(2)">订单</mt-button>
                
            </mt-tab-item>
            <mt-tab-item id="发现">
                <mt-button type="danger" size="large" @click.native="handleClick(3)">发现</mt-button>
                
            </mt-tab-item>
            <mt-tab-item id="我的">
                <mt-button type="danger" size="large" @click.native="handleClick(4)">我的</mt-button>
                
            </mt-tab-item>
        </mt-tabbar>    
    </div>
</template>

<script>
export default {
    data () {
        return {
            selected:''    
        }
    },
    
    methods: {
        handleClick(val){
            let c = 'c' + val
            this.$router.push({name:c})
        }    
    },

    mounted () {
        
        
    }
} 
</script>


<style scope>
    
</style>
