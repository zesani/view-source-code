<template lang="html">
  <div class="SourceCode">
    <div class="nameFile">
      {{code.nameFile}}
    </div>
    <pre>
      <code class="hljs">{{{highlight(code.text)}}}</code>
    </pre>
  </div>

</template>

<script>
export default {
  props: ['highlight', 'code'],
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
.SourceCode {
  height: 550px;
  background-color: #282c34;
}
.nameFile {
  height: 20px;
  color: #e4e6d7;
  background-color: #1f212a;
  padding-left: 160px;
}
</style>
