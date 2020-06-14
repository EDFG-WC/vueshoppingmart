<template>
    <div>
      <!-- 面包屑导航区 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品分类</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 卡片视图 -->
      <el-card>
        <el-row>
          <el-col>
            <el-button type="primary">添加分类</el-button>
          </el-col>
        </el-row>
        <!--表格-->
        <tree-table
          :data="cateList"
          :columns = "columns"
          :selection-type="false"
          :expand-type="false"
          show-index
          border
        ></tree-table>
        <!--分页-->
      </el-card>
    </div>
</template>

<script>
export default {
  name: 'Categories',
  methods: {
    async getCateList () {
      const { data: res } = await this.$axios.get('categories', { params: this.queryInfo })
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品分类失败!')
      }
      console.log(res)
      this.cateList = res.data.result
      this.total = res.data.total
    }
  },
  data () {
    return {
      cateList: [],
      // 查询条件
      queryInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5
      },
      // 总记录条数
      total: 0,
      columns: [{
        label: '分类名称',
        prop: 'cat_name'
      }]
    }
  },
  created () {
    this.getCateList()
  }
}
</script>

<style scoped>

</style>
