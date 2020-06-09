<template>
    <div>
        <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
            <li v-for="item in list">
                <img :src="item"  class="img">
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    data () {
        return {
            testdata:'',
            flag:9,
            loading: false,
            list: [
                "./static/img/mn_1.jpg",
                "./static/img/mn_2.jpg",
                "./static/img/mn_3.jpg",
                "./static/img/mn_4.jpg",
                "./static/img/mn_5.jpg",
                "./static/img/mn_6.jpg",
                "./static/img/mn_7.jpg",
                "./static/img/mn_8.jpg"
            ]     
        }
    },
    methods: {
        loadMore() {
            this.loading = true;
            let temp = "./static/img/mn_"
            if(this.flag <= 60){
                for (let i = 1; i <= 8; i++) {
                    this.list.push(temp + this.flag + '.jpg')
                    this.flag++
                }
            }
            
            this.loading = false;
        },
        init(){
            this.$http.get('/api/getdata').then(res => {
                console.log(res)
                this.testdata = res.data
            })   
        } 
    },
    mounted () {
        this.flag = 9
        //this.init()
    }
}

</script>


<style scoped>
    .img{
        display: inline-block;
        height: auto;
        width: 100%;
    }
</style>
