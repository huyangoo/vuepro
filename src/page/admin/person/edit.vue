<template>
  <form class="layui-form">
    <div class="layui-form-item">
      <label class="layui-form-label">姓名</label>
      <div class="layui-input-block">
        <input name="name" :value="person.name" class="layui-input" type="text" placeholder="请输入姓名"
               lay-verify="required"/>
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">性别</label>
      <div class="layui-input-block">
        <input type="radio" name="sex" value="0" title="男" :checked="person.sex == 0">
        <input type="radio" name="sex" value="1" title="女" :checked="person.sex == 1">
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">年龄</label>
      <div class="layui-input-block">
        <input name="age" :value="person.age" type="number" class="layui-input" placeholder="请输入年龄">
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">电话</label>
      <div class="layui-input-block">
        <input name="phone" :value="person.phone" type="text" class="layui-input" placeholder="请输入电话"
               lay-verify="required|phone">
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">生日</label>
      <div class="layui-input-block">
        <input name="birthday" id="birthday" type="text" class="layui-input"
               placeholder="yyyy-mm-dd" lay-verify="required|date">
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">地址</label>
      <div class="layui-input-block">
        <select name="address" :value="person.address">
          <option value="">请选择一个城市</option>
          <option value="北京">北京</option>
          <option value="上海">上海</option>
          <option value="杭州">杭州</option>
        </select>
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">爱好</label>
      <div class="layui-input-block">
        <input type="checkbox" name="boxStr" title="写作" checked>
        <input type="checkbox" name="boxStr" title="发呆">
        <input type="checkbox" name="boxStr" title="禁用" disabled>
      </div>
    </div>
    <div class="layui-form-item">
      <div class="layui-input-block">
        <button class="layui-btn" lay-submit lay-filter="submit">立即提交</button>
        <button type="reset" class="layui-btn layui-btn-primary">重置</button>
      </div>
    </div>
  </form>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  import { person } from '@/service'

  const {mapActions, mapState} = createNamespacedHelpers('personMd')

  export default {
    props: {
      id: String
    },
    computed: {
      ...mapState(['person'])
    },
    methods: {
      ...mapActions(['getPerson']),
      save (feild) {
        feild.birthday = new Date(feild.birthday).getTime()
        if (this.id) {
          feild.id = this.id
        }
        person.save(feild).then(() => {
          let index = parent.layer.getFrameIndex(window.name)
          parent.layer.close(index)
        })
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$layui.form.render()
        this.$layui.laydate.render({
          elem: '#birthday',
          value: new Date(this.person.birthday)
        })
      })
    },
    updated () {
      this.$nextTick(() => {
        this.$layui.form.render()
        this.$layui.laydate.render({
          elem: '#birthday',
          value: new Date(this.person.birthday)
        })
      })
    },
    created () {
      if (this.id) {
        this.getPerson(this.id)
      }
      this.$layui.form.on('submit(submit)', (data) => {
        this.save(data.field)
        return false
      })
    }
  }
</script>

<style>
  .layui-form {
    margin: 20px;
  }
</style>
