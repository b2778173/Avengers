<template>


  <el-table
      :data="tableData"
      style="width: 70%" height='500' :default-sort = "{prop: 'date', order: 'descending'}"
   stripe>
      <el-table-column sortable 
        prop="create_dt"
        label="上架日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="pro_name"
        label="商品名稱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="pro_type"
        label="商品分類"
        width="180">
      </el-table-column>
      <el-table-column
        prop="pro_amount"
        label="商品庫存">
      </el-table-column>
       <el-table-column
        prop="pro_status"
        label="商品狀態">
      </el-table-column>
      <el-table-column 
       label="操作"
       width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>


    </el-table>
  
</template>

<script>
export default {
      data() {
        return {
          tableData: [{
            create_dt:'2016-05-05',
            pro_name: '',
            pro_type: '王小虎',
            pro_amount: '上海市普陀区金沙江路 1518 弄',
            pro_status:''
          }, {
            create_dt:'2016-05-04',
            pro_name: '',
            pro_type: '王小虎',
            pro_amount: '上海市普陀区金沙江路 1518 弄',
            pro_status:''
          }, {
            create_dt:'2016-05-03',
            pro_name: '',
            pro_type: '王小虎',
            pro_amount: '上海市普陀区金沙江路 1518 弄',
            pro_status:''
          }, {
            create_dt:'2016-05-02',
            pro_name: '',
            pro_type: '王小虎',
            pro_amount: '上海市普陀区金沙江路 1518 弄',
            pro_status:''
          },{
            create_dt:'2016-05-02',
            pro_name: '',
            pro_type: '王小虎',
            pro_amount: '上海市普陀区金沙江路 1518 弄',
            pro_status:''
          },{
            create_dt:'2016-05-02',
            pro_name: '',
            pro_type: '王小虎',
            pro_amount: '上海市普陀区金沙江路 1518 弄',
            pro_status:''
          },{
            create_dt:'2016-05-02',
            pro_name: '',
            pro_type: '王小虎',
            pro_amount: '上海市普陀区金沙江路 1518 弄',
            pro_status:''
          },{
            create_dt:'2016-05-02',
            pro_name: '',
            pro_type: '王小虎',
            pro_amount: '上海市普陀区金沙江路 1518 弄',
            pro_status:''
          }]
        }
        },methods: {
        // formatter(row, column) {
        //   return row.address;
        // }
      }
    }
</script>