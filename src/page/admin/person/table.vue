<template>
  <div>
    <button class="layui-btn" @click="addPerson">添加</button>
    <button class="layui-btn" @click="refresh">刷新</button>
    <div id="btn-temp">
      <button class="layui-btn layui-btn-small" lay-event="edit"><i class="layui-icon"></i></button>
    </div>
    <table id="demo" class="layui-table" lay-filter="test" lay-even>
      <thead>
      <tr>
        <th lay-data="{field:'id', width:80, sort: true}">ID</th>
        <th lay-data="{field:'name', width:80}">用户名</th>
        <th lay-data="{field:'sex', width:80, sort: true}">性别</th>
        <th lay-data="{field:'age', width:80}">年龄</th>
        <th lay-data="{field:'phone', width:150}">电话</th>
        <th lay-data="{field:'birthday', width:150, sort: true}">生日</th>
        <th lay-data="{field:'address', width:135}">地址</th>
        <th lay-data="{toolbar: '#btn-temp', fixed: 'right', align: 'center', width:150}">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in persons" v-bind:key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.sex}}</td>
        <td>{{item.age}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.birthday}}</td>
        <td>{{item.address}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {createNamespacedHelpers} from 'vuex'
  const { mapActions, mapGetters } = createNamespacedHelpers('personMd')

  export default {
    computed: {
      ...mapGetters(['persons'])
    },
    methods: {
      ...mapActions([
        'getPersons'
      ]),
      viewDetail (id) {
        this.$layui.layer.open({
          type: 2,
          shade: 0,
          maxmin: true,
          area: ['600px', '550px'],
          content: '#/person/edit/' + id
        })
      },
      addPerson () {
        this.$layui.layer.open({
          type: 2,
          area: ['600px', '550px'],
          content: '#/person/edit/'
        })
      },
      refresh () {
        this.getPersons()
      }
    },
    created () {
      this.$nextTick(() => {
        let _this = this, table = this.$layui.table, layer = this.$layui.layer
        this.getPersons()
        table.on('tool(test)', function (obj) {
          var data = obj.data
          var layEvent = obj.event
          if (layEvent === 'detail') {
            layer.alert('event:' + layEvent + ';id:' + data.id)
          } else if (layEvent === 'edit') {
            _this.viewDetail(data.id)
          }
        })
      })
    },
    updated () {
      this.$nextTick(() => {
        this.$layui.table.init('test')
      })
    }
  }
</script>

<style>
  #btn-temp{display: none;}
</style>
