<template lang="html">
  <div class="content">
    <el-row :gutter="20">
      <el-col :span="4" :offset="3">
        <div class="sidebar">
          <el-card class="filter-card" shadow="hover">
            <div class="item head">
              图书筛选
            </div>
            <div class="item">
              <el-link :underline="false">价格从高到低</el-link>
            </div>
            <div class="item">
              <el-link :underline="false">价格从低到高</el-link>
            </div>
            <div class="item">
              <el-input v-model="input" placeholder="最低价" class="filer_price"></el-input> -
              <el-input v-model="input" placeholder="最高价" class="filer_price"></el-input>
              <el-button>确定</el-button>
            </div>
          </el-card>
          <el-card class="category-card" shadow="hover">
            <div class="item head">
              图书类别
            </div>
            <div v-for="category in categorys" :key="category" class="item">
              <el-link :underline="false">{{ category }}</el-link>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="head" style="float:left;">
          热门推荐
        </div>
        <div class="booklist">
          <el-card v-for="(book, index) in booklist"  :key="index" :body-style="{ padding: '0px' }" shadow="hover" class="book-card">
            <img :src="book.src" class="image">
            <div style="padding: 14px;text-align:left;">
              <div><router-link :to="{ name: '详情', params: { bookid: index} }">{{book.bookname}}</router-link></div>
              <div>{{book.author}}</div>
              <div>
                <span>{{book.price}}</span>
              </div>
            </div>
          </el-card>
        </div>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="100">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  data(){
    return {
      input: '',
      categorys: [
        "全部",
        "小说",
        "玄幻",
        "校园",
        "青春",
        "热血",
        "文学"
      ],
      booklist:[
        {
          src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          bookname: "金瓶梅",
          price: "1￥",
          author: "鲁迅"
        },
        {
          src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          bookname: "金瓶梅",
          price: "1￥",
          author: "鲁迅"
        },
        {
          src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          bookname: "金瓶梅",
          price: "1￥",
          author: "鲁迅"
        },
        {
          src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          bookname: "金瓶梅",
          price: "1￥",
          author: "鲁迅"
        },
        {
          src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          bookname: "金瓶梅",
          price: "1￥",
          author: "鲁迅"
        },
        {
          src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          bookname: "金瓶梅",
          price: "1￥",
          author: "鲁迅"
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.pagination{
  margin: 20px;
}
.content{
  margin-top: 15px;
}
.el-col{
  border-radius: 4px;
}
.sidebar{

}
.booklist{
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
}
.filer_price{
  width: 70px;
}
.item{
  padding-bottom: 5px;
}
.category-card{
  margin-top: 5px;
}
.head{
  font-weight: bold;
}
.book-card{
  width: 200px;
  margin: 10px;
}
</style>
