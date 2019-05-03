<template lang="html">
  <div class="content">
    <el-row :gutter="20">
        <el-col :span="6" :offset="6">
            <div class="img">
              <el-image :src="src" style="width:300px;height:400px;">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            </div>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card" shadow=none >
            <div v-for="(value, key) in bookinfos" :key="key"  style="text-align:left;">
              {{key}}：{{value}}
            </div>
            <div style="text-align:left;margin: 10px 0;">
              <span>数量</span>
              <i class="el-icon-remove lg" style="font-size:30px;padding:10px;" @click="minus"></i>
              {{ quantity }}
              <i class="el-icon-circle-plus" style="font-size:30px;padding:10px;" @click="plus"></i>
            </div>
            <div style="text-align:left;">
              <el-button style="float:left;margin: 10px 0;">加入购物车</el-button>
              <el-button style="float:right;margin: 10px 0;">现在购买</el-button>
            </div>
          </el-card>
        </el-col>
    </el-row>
    <el-row class="comment-box">
        <el-col :span="12" :offset="6">
            <div>
              评论
            </div>
            <hr>
            <div class="comment" v-for="(comment, index) in comments"  :key="index">
              <el-row>
                  <el-col :span="2">
                      <i class="el-icon-user-solid" style="font-size:35px;"></i>
                  </el-col>
                  <el-col :span="22">
                      <div>
                        {{comment.name}}
                        <span style="float: right;color:gray;">{{comment.date}}</span>
                      </div>
                      <div style="margin: 10px;color: gray;">
                        {{comment.comment}}
                      </div>
                  </el-col>
              </el-row>
            </div>
        </el-col>
    </el-row>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      src: '',
      quantity: 0,
      comments: [
        {
          name: 'john',
          comment: 'i think so',
          date: '2019/1/3'
        },
        {
          name: 'Mike',
          comment: 'good',
          date: '2019/3/4'
        },
        {
          name: 'Amy',
          comment: 'pretty good',
          date: '2019/4/5'
        }
      ],
      bookinfos: {
        title: '金瓶梅',
        category: '文学',
        author: '鲁迅',
        price: '2$',
        description: '独领风骚开发商浪费了士大夫士大夫精神了 收到了附件是打开附件是浪费了独领风骚了对方就是锻炼腹肌的死灵法师懒得浪费时间的理发师理发老师的方法'
      }
    }
  },
  methods:{
    handleClick(){
      console.log(this.$route.params);
    },
    minus(){
      if(this.quantity>0)
        this.quantity--;
    },
    plus(){
      this.quantity++;
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
.comment-box{
  margin-top: 20px;
  text-align: left;
}
.comment{
  margin: 20px 0;
}
</style>
