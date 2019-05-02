<template>

  <div>
    <v-header/>
  <el-table
      :data="tableData"
      style="width: 90%" height='500' :default-sort = "{prop: 'date', order: 'descending'}"
   stripe>

      <el-table-column sortable 
        label="上架日期"
        width="180">   
      <template  slot-scope="scope2">{{scope2.row.create_dt}} </template>
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
        label="商品狀態"
        width="100"
        :filters="[{ text: '開啟', value: '開啟' }, { text: '關閉', value: '關閉' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
        >
        <template slot-scope="scope">
        <el-tag
          :type="scope.row.pro_status === '開啟' ? 'success' : 'danger'"
          disable-transitions>{{scope.row.pro_status}}</el-tag>
      </template>
      </el-table-column>
      <el-table-column 
       label="操作"
       width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">編輯</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">刪除</el-button>
      </template>
    </el-table-column>


    </el-table>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script>
import vHeader from "@/components/vHeader";
import Mock from 'mockjs';
export default {
      
      components: {vHeader},
      

      data() {
        return {
          tableData: [{
            create_dt: Mock.mock('@date("yyyy-MM-dd")'),
            pro_name: '',
            pro_type: '王小虎',
            pro_amount:Mock.mock('@integer(1, 1000)'),
            pro_status:'開啟'
          }, {
            create_dt:Mock.mock('@date("yyyy-MM-dd")'),
            pro_name: '開啟',
            pro_type: '王小虎',
            pro_amount:Mock.mock('@integer(1, 1000)'),
            pro_status:'開啟'
          }, {
            create_dt: Mock.mock('@date("yyyy-MM-dd")'),
            pro_name: '關閉',
            pro_type: '王小虎',
            pro_amount:Mock.mock('@integer(1, 1000)'),
            pro_status:'開啟'
          }, {
            create_dt: Mock.mock('@date("yyyy-MM-dd")'),
            pro_name: '',
            pro_type: '王小虎',
            pro_amount:Mock.mock('@integer(1, 1000)'),
            pro_status:'開啟'
          },{
            create_dt: Mock.mock('@date("yyyy-MM-dd")'),
            pro_name: '',
            pro_type: '王小虎',
            pro_amount:Mock.mock('@integer(1, 1000)'),
            pro_status:'關閉'
          },{
            create_dt: Mock.mock('@date("yyyy-MM-dd")'),
            pro_name: '',
            pro_type: '王小虎',
            pro_amount:Mock.mock('@integer(1, 1000)'),
            pro_status:'開啟'
          },{
            create_dt: Mock.mock('@date("yyyy-MM-dd")'),
            pro_name: '',
            pro_type: '王小虎',
            pro_amount:Mock.mock('@integer(1, 1000)'),
            pro_status:'開啟'
          },{
            create_dt: Mock.mock('@date("yyyy-MM-dd")'),
            pro_name: '',
            pro_type: '王小虎',
            pro_amount:Mock.mock('@integer(1, 1000)'),
            pro_status:'關閉'
          }]
        }
        },methods: {
        // formatter(row, column) {
        //   return row.address;
        // }
      }
    }
</script>