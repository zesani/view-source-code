<template lang="html">
  <div class="Path">
    <div class="ui list">
      <div class="item" @click="onClickBack()" v-show="undefinedRoot">
        <i class="folder icon"></i>
        <div class="content">
          <div class="header">...</div>
        </div>
      </div>
    </div>
    <div class="" v-for="key in keys">
      <div class="ui list">
        <div class="item"  @click="onClick(key)" v-if="key!='type' && key!='root'">
          <i class="folder icon"></i>
          <div class="content">
            <div class="header">{{key}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['onClick', 'onClickBack', 'keys', 'undefinedRoot'],
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
.Path {
  float: left;
  /*border: 1px solid black;*/
  width: 150px;
  height: 550px;
  background-color: rgb(33, 38, 46);
  padding-top: 20px;
  padding-left: 20px;
}
</style>
