<template>
    <div>
        <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
            <li v-for="item in list">
                <img :src="item"  class="img">
            </li>
        </ul>
        {{testdata}}
    </div>

</template>

<script>
export default {
    data () {
        return {
            testdata:'',
            loading: false,
            list: [
                "./static/image/1.PNG",
                "./static/image/2.PNG",
                "./static/image/3.PNG",
                "./static/image/4.PNG",
                "./static/image/5.PNG",
                "./static/image/6.PNG",
                "./static/image/7.PNG",
                "./static/image/8.PNG"
            ]     
        }
    },
    methods: {
        loadMore() {
            this.loading = true;
            let temp = "./static/image/"
            /*setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 8; i++) {
                    this.list.push(temp + i + '.PNG');
                }
                this.loading = false;
            }, 2500);*/
        },
        init(){
            this.$http.get('/api/getdata').then(res => {
                console.log(res)
                this.testdata = res.data
            })   
        } 
    },
    mounted () {
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
