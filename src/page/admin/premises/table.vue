<template>
  <table id="demo" lay-filter="test"></table>
</template>

<script>
  export default {
    computed: {
      preList () {
        return [
          {
            name: '楼盘1',
            protype: '普通住宅'
          },
          {
            name: '楼盘1',
            protype: '普通住宅'
          },
          {
            name: '楼盘1',
            protype: '普通住宅'
          }
        ]
      }
    },
    created () {
      let _this = this
      this.$layui.use('table', function (table) {
        table.render({
          elem: '#demo',
          data: _this.preList,
          cols: [[
            {field: 'name', title: '楼盘名称', width: 100},
            {field: 'protype', title: '物业类型', width: 100}
          ]]
        })
      })
    }
  }
</script>

<style>
</style>
