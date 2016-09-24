<template>
  <div class="box">
    <path :on-click="onClick" :on-click-back="onClickBack" :keys="keys" :undefined-root="undefinedRoot"></path>
    <source-code :code="code" :highlight="highlight"></source-code>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import SourceCode from './components/SourceCode'
import Path from './components/Path'
export default {
  data () {
    return {
      v: {
        'src': {
          'type': 'directory',
          'root': {},
          'App.vue': {
            'type': 'file',
            'root': {},
            'text': 'var k = 20'
          },
          'components': {
            'type': 'directory',
            'root': {},
            'Hello.vue': {
              'type': 'file',
              'root': {},
              'text': 'var c = 20'
            }
          }
        }
      },
      code: {
        nameFile: '',
        text: ''
      },
      now: {}
    }
  },
  components: {
    SourceCode,
    Path
  },
  methods: {
    highlight: function (value) {
      if (value !== undefined) {
        return hljs.highlightAuto(value, ['javascript']).value
      }
    },
    onClick: function (select) {
      if (this.now[select].type === 'directory') {
        var temp = this.now
        this.now = this.now[select]
        this.now.root = temp
      } else {
        this.code.nameFile = select
        this.code.text = this.now[select].text
      }
    },
    onClickBack: function () {
      this.now = this.now.root
    }
  },
  computed: {
    keys: function () {
      return Object.keys(this.now)
    },
    undefinedRoot: function () {
      return (this.now.root !== undefined)
    }
  },
  ready: function () {
    this.now = this.v
    this.root = this.now
  }
}
</script>

<style>
@import url("../node_modules/highlight.js/styles/atom-one-dark.css");
body {
  background-color: rgb(74, 74, 74);
  padding-top: 5px;
}

</style>
