<template>
    <div class="custom-tree-container">
<div class="block">
    <p>使用 scoped slot</p>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
    </div>
</template>

<script>
  let id = 1000;

  export default {
    data() {
      const data = [{
        id: '1',
        label: 'Fashion',
        children: [{
          id: '1-1',
          label: 'Men\'s Fashion',
          children: [{
            id: '1-1-1',
            label: 'Suit'
          },{
            id: '1-1-2',
            label: 'Shoes'
          }]
        },{
            id: '1-2',
            label: 'Womwen\'s Fashion'
        }]
      }, {
        id: '2',
        label: 'Computers & Accessories',
        children: [{
          id: '2-1',
          label: 'Desktops'
        }, {
          id: '2-2',
          label: 'Laptops'
        },{
          id: '2-3',
          label: 'Tablets'
        }]
      }, {
        id: '3',
        label: '一级 3',
        children: [{
          id: '3-1',
          label: '二级 3-1'
        }, {
          id: '3-2',
          label: '二级 3-2'
        }]
      }];
      //This is the testing data
     console.log(data);
     console.log("stringify : " + JSON.parse(JSON.stringify(data)));

      return {
        data: JSON.parse(JSON.stringify(data))
      }
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'test', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      }
    }
  };
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>