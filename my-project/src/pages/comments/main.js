import Vue from 'vue'
import Comment from './Comment.vue'

Vue.config.productionTip = false

const app = new Vue(Comment)
app.$mount()

export default{
    config:{
        navigationBarTitleText:'评论列表',
        enablePullDownRefresh:true
    }
}
