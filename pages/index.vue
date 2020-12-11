<template>
  <div class="container">
    <div>
      <h1 class="title">
        divisualism
      </h1>
      <div>
        <p>悪い奴</p>
        <h4>{{ badText }}</h4>
        <textarea ref="badguy" :value="badText" placeholder="be a bad guy" @keydown="trigger" />
      </div>
      <div>
        <p>良い奴</p>
        <h4>{{ goodText }}</h4>
        <textarea ref="goodguy" :value="goodText" placeholder="be a good guy" @keydown="trigger" />
      </div>
      <div>
        <p>変な奴</p>
        <h4>{{ weirdText }}</h4>
        <textarea ref="weirdguy" :value="weirdText" placeholder="be a weird guy" @keydown="trigger" />
      </div>
      <vue-typed-js :strings="['^1000 分人主義 ^500 それは苦しい']">
        <h1 class="typing" />
      </vue-typed-js>
      <vue-typed-js :strings="['〇〇と言いますが何か？']">
        <h1>自己紹介 <span class="typing" /></h1>
      </vue-typed-js>
      <div class="links">
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <button @click="store">
      ストアへ保存
    </button>
    <button @click="log">
      ストアを出力
    </button>
    <button @click="routePlayPage">
      プレイページへ
    </button>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)
export default Vue.extend({
  data () {
    return {
      start: 0,
      timer: 0,
      interval: 0,
      accum: 0,
      badText: '',
      goodText: '',
      weirdText: '',
      badTextDiff: [],
      badIntervalDiff: [],
      goodTextDiff: [],
      goodIntervalDiff: [],
      weirdTextDiff: [],
      weirdIntervalDiff: []
    }
  },
  watch: {
    badText () {
      console.log(this.badText)
      console.log(this.interval.toFixed(2))
      this.badTextDiff.push(this.badText)
      this.badIntervalDiff.push(this.interval.toFixed(2))
    },
    goodText () {
      console.log(this.goodText)
      console.log(this.interval.toFixed(2))
      this.goodTextDiff.push(this.goodText)
      this.goodIntervalDiff.push(this.interval.toFixed(2))
    },
    weirdText () {
      console.log(this.weirdText)
      console.log(this.interval.toFixed(2))
      this.weirdTextDiff.push(this.weirdText)
      this.weirdIntervalDiff.push(this.interval.toFixed(2))
    }
  },
  mounted () {
    this.$nextTick(() => {
      const $inputBad = this.$refs.badguy
      $inputBad.addEventListener('keyup', this.updateBad)
      $inputBad.addEventListener('compositionend', this.updateBad)
      $inputBad.addEventListener('focus', this.startTimer)
      $inputBad.addEventListener('blur', this.stopTimer)
      $inputBad.addEventListener('blur', this.resetTimer)

      const $inputGood = this.$refs.goodguy
      $inputGood.addEventListener('keyup', this.updateGood)
      $inputGood.addEventListener('compositionend', this.updateGood)
      $inputGood.addEventListener('focus', this.startTimer)
      $inputGood.addEventListener('blur', this.stopTimer)
      $inputGood.addEventListener('blur', this.resetTimer)

      const $inputWeird = this.$refs.weirdguy
      $inputWeird.addEventListener('keyup', this.updateWeird)
      $inputWeird.addEventListener('compositionend', this.updateWeird)
      $inputWeird.addEventListener('focus', this.startTimer)
      $inputWeird.addEventListener('blur', this.stopTimer)
      $inputWeird.addEventListener('blur', this.resetTimer)
    })
  },
  methods: {
    trigger (event) {
      if (event.keyCode !== 13) { }

      // 実行したい処理
      // console.log(event.keyCode)
      // console.log(this.title)
      // console.log(this.body)
    },
    update (e) {
      this.title = e.target.value
    },
    updateBad (e) {
      this.badText = e.target.value
    },
    updateGood (e) {
      this.goodText = e.target.value
    },
    updateWeird (e) {
      this.weirdText = e.target.value
    },

    // タイマー
    startTimer () {
      this.active = true
      this.start = Date.now()
      this.timer = window.setInterval(() => { this.interval = this.accum + (Date.now() - this.start) * 0.001 }, 10) // 10msごとに現在時刻とstartを押した時刻の差を足す
    },
    stopTimer () {
      this.active = false
      this.accum = this.interval
      clearInterval(this.timer)
    },
    resetTimer () {
      this.interval = 0
      this.accum = 0
      this.start = Date.now()
    },
    store () {
      this.$store.state.badTextDiff = this.badTextDiff
      this.$store.state.goodTextDiff = this.goodTextDiff
      this.$store.state.weirdTextDiff = this.weirdTextDiff
      this.$store.state.badText = this.badText
      this.$store.state.goodText = this.goodText
      this.$store.state.weirdText = this.weirdText
    },
    log () {
      console.log(this.$store.state.badTextDiff)
    },
    routePlayPage () {
      this.store()
      this.$router.push('/play')
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
