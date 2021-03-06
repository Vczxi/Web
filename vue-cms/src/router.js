import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
//子组件路由
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

var router = new VueRouter({
    routes:[
       {path:'/',redirect:'/home'},
       {path:'/home',component:HomeContainer},
       {path:'/member',component:MemberContainer},
       {path:'/shopcar',component:ShopcarContainer},
       {path:'/search',component:SearchContainer},
       {path:'/home/newslist',component:NewsList},
       //route后面需要唯一id标识符
       {path:'/home/newsinfo/:id',component:NewsInfo},
       {path:'/home/photolist',component:PhotoList},
       //图片id
       {path:'/home/photoinfo/:id',component:PhotoInfo},
       {path:'/home/goodslist',component:GoodsList},
       {path:'/home/goodsinfo/:id',component:GoodsInfo,name:"goodsinfo"},
       {path:'/home/goodsdesc/:id',component:GoodsDesc,name:"goodsdesc"},
       {path:'/home/goodscomment/:id',component:GoodsComment,name:"goodscomment"},
    ],
    linkActiveClass:'mui-active'        //设置默认的路由高亮类，默认的类叫router-link-active

})

//把路由对象暴露出去
export default router