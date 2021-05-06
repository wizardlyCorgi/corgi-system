<template>
  <div class="data">
    <el-row>
      <el-button type="primary" plain>新增</el-button>
      <el-button type="danger" plain>删除</el-button>
    </el-row>
    <div class="table" style="">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{
          textAlign: 'center'
        }"
        :cell-style="{
          textAlign: 'center'
        }"
      >
        <el-table-column prop="id" label="ID" width="100px"> </el-table-column>
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="phoneNumber" label="电话"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >上移</el-button
            >
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >下移</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
const tableItem = {
  date: '2016-05-02',
  name: '王小虎',
  phoneNumber: '13706086994',
  address: '深圳市南山区南头古城'
}
const tableData = Array(20)
  .fill(tableItem)
  .map((i, x) => {
    return { id: x + 1, ...i }
  })
export default {
  methods: {
    handleEdit (index, row) {
      console.log(row)
    },
    handleDelete (index, row) {
      console.log(row)
    }
  },

  data () {
    return {
      tableData: tableData
    }
  }
}
</script>
<style lang="less" scoped>
.data {
  .table {
    margin-top: 20px;
    border: 1px solid #ebeef5;
    border-bottom: 0;
  }
}
</style>
