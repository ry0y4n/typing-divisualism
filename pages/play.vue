<template>
  <div>
    <h2>{{ this.totalText }}</h2>
    <h3>{{ this.totalTextDiff }}</h3>
    <h3>{{ this.trimTextDiff }}</h3>
    <h2>{{ this.$store.state.badTextDiff }}</h2>
    <h2>{{ this.$store.state.goodTextDiff }}</h2>
    <h2>{{ this.$store.state.weirdTextDiff }}</h2>
    <h3>{{ this.$store.state.badTextDiff }}</h3>
    <h3>{{ this.trimBadText }}</h3>
    <vue-typed-js :strings="this.$store.state.badTextDiff" :smart-backspace="true">
      <h1 class="typing" />
    </vue-typed-js>
    <vue-typed-js :strings="['よ','よr', 'より', 'よりs','より', 'よ', 'よr', 'よろ','よろし', 'よろしく']" :smart-backspace="true">
      <h1 class="typing" />
    </vue-typed-js>
    <vue-typed-js :strings="this.$store.state.goodTextDiff">
      <h1 class="typing" />
    </vue-typed-js>
    <vue-typed-js :strings="this.$store.state.weirdTextDiff">
      <h1 class="typing" />
    </vue-typed-js>
    <vue-typed-js :strings="this.totalText">
      <h1 class="typing" />
    </vue-typed-js>
    <vue-typed-js :strings="[this.trimBadText]" :smart-backspace="true">
      <h1 class="typing" />
    </vue-typed-js>
    <vue-typed-js :strings="[this.trimText]" :smart-backspace="true">
      <h1 class="typing" />
    </vue-typed-js>
    <vue-typed-js :strings="[this.trimTextDiff]" :smart-backspace="true">
      <h1 class="typing" />
    </vue-typed-js>
    <vue-typed-js :strings="this.message" :smart-backspace="true">
      <h1 class="typing" />
    </vue-typed-js>
    <vue-typed-js :strings="['This is momosuke', 'This is モモスケ']" :smart-backspace="true">
      <h1 class="typing" />
    </vue-typed-js>
  </div>
</template>
<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

export default Vue.extend({
  data () {
    return {
      message: ['yoroaiku', 'yorosiku']
    }
  },
  computed: {
    totalText () {
      let badText = []
      let goodText = []
      let weirdText = []
      badText = this.$store.state.badText
      goodText = this.$store.state.goodText
      weirdText = this.$store.state.weirdText
      const maxLength = Math.max(badText.length, goodText.length, weirdText.length)
      const result = []
      for (let i = 0; i < maxLength; i++) {
        if (i < badText.length) { result.push(badText[i]) }
        if (i < goodText.length) { result.push(goodText[i]) }
        if (i < weirdText.length) { result.push(weirdText[i]) }
      }
      return result
    },
    totalTextDiff () {
      let badTextDiff = []
      let goodTextDiff = []
      let weirdTextDiff = []
      badTextDiff = this.$store.state.badTextDiff
      goodTextDiff = this.$store.state.goodTextDiff
      weirdTextDiff = this.$store.state.weirdTextDiff
      const maxLength = Math.max(badTextDiff.length, goodTextDiff.length, weirdTextDiff.length)
      const result = []
      for (let i = 0; i < maxLength; i++) {
        if (i < badTextDiff.length) { result.push(badTextDiff[i]) }
        if (i < goodTextDiff.length) { result.push(goodTextDiff[i]) }
        if (i < weirdTextDiff.length) { result.push(weirdTextDiff[i]) }
      }
      return result
    },
    trimBadText () {
      let badTextDiff = []
      badTextDiff = this.$store.state.badTextDiff
      let result = ''
      for (let i = 0; i < badTextDiff.length; i++) {
        result = result + badTextDiff[i]
      }
      return result
    },
    trimText () {
      let text = []
      text = this.totalText
      let result = ''
      for (let i = 0; i < text.length; i++) {
        result = result + text[i]
      }
      return result
    },
    trimTextDiff () {
      let text = []
      text = this.totalTextDiff
      let result = ''
      for (let i = 0; i < text.length; i++) {
        result = result + text[i]
      }
      return result
    }
  }
})
</script>

<style scoped>

</style>
