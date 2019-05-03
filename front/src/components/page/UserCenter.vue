<template lang="html">
  <div class="content">
    <el-row :gutter="20">
        <el-col :span="3" :offset="6">
          <el-menu
            default-active="1">
            <el-menu-item index="1">
              <span slot="title">我的订单</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">收货地址</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="9">
          <div>
            <div style="font-weight:bold;text-align:left;">
              我的订单
            </div>
            <div class="orderlist" style="text-align: left;margin-top:20px;" >
              <el-card class="order" v-for="item in orders"  :key="item.order_id">
                <div class="order-info">
                  <span class="text">时间：{{item.date}}</span>
                  <span class="text">订单ID：{{item.order_id}}</span>
                  <span class="text">共 {{item.count}} 件商品</span>
                  <span class="text">总付款 {{item.cost}} 元</span>
                </div>
                <div v-for="book in item.booklist"  :key="book.book_id" style="margin:10px;">
                  <el-row>
                      <el-col :span="4">
                          <el-image :src="book.picture" style="width:80px;height:80px;"></el-image>
                      </el-col>
                      <el-col :span="12" style="line-height:20px;padding:10px;">
                          <div>
                            {{book.title}}
                          </div>
                          <div>
                            {{book.price}}
                          </div>
                          <div>
                            购买数量：{{book.quautity}}
                          </div>
                      </el-col>
                  </el-row>
                </div>
              </el-card>
            </div>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      orders: [
        {
          order_id: '123dd3455',
          date: '2018/3/4',
          count: 5,
          cost: "33$",
          booklist: [
            {
              price: '3$',
              quautity: 3,
              title: '金瓶梅',
              picture: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              book_id: 'ss333'
            },
            {
              price: '3$',
              quautity: 6,
              title: '笑傲江湖',
              picture: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              book_id: '3d33'
            }
          ]
        },
        {
          order_id: '1233455',
          date: '2018/3/4',
          booklist: [
            {
              price: '3$',
              quautity: 3,
              title: '金瓶梅',
              picture: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              book_id: '333'
            },
            {
              price: '3$',
              quautity: 3,
              title: '金瓶梅',
              picture: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              book_id: '3dff33'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.text{
  font-size: 15px;
  margin-right: 20px;
}
.content{
  margin-top: 15px;
}
.text {
  font-size: 13px;
}
.item {
  padding: 18px 0;
}
.order{
  margin-bottom: 10px;
}
</style>
