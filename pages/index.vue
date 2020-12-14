<template>
  <div>
    <div class="shutter"></div>
    <div class="container">
      <div>
        <vue-typed-js :strings="['^2000IVISUALISM']" :type-speed="100" :show-cursor="false">
          <h1 class="title">
            D<span class="typing" />
          </h1>
        </vue-typed-js>
        <div>
          <p class="guys">悪い奴</p>
          <textarea
            ref="badguy"
            rows="5"
            cols="50"
            :value="badText"
            placeholder="Be a 'bad' guy"
            @keydown="trigger"
          />
        </div>
        <div>
          <p class="guys">良い奴</p>
          <textarea
            ref="goodguy"
            rows="5"
            cols="50"
            :value="goodText"
            placeholder="Be a 'good' guy"
            @keydown="trigger"
          />
        </div>
        <div>
          <p class="guys">変な奴</p>
          <textarea
            ref="weirdguy"
            rows="5"
            cols="50"
            :value="weirdText"
            placeholder="Be a 'weird' guy"
            @keydown="trigger"
          />
        </div>
        <!-- <vue-typed-js :strings="['^1000 分人主義 ^500 それは苦しい']">
          <h1 class="typing" />
        </vue-typed-js>
        <vue-typed-js :strings="['〇〇と言いますが何か？']">
          <h1>自己紹介 <span class="typing" /></h1>
        </vue-typed-js>
        <button @click="store">
          ストアへ保存
        </button>
        <button @click="log">
          ストアを出力
        </button> -->
        <a class="btn" @click="routePlayPage">
          <span>プレイページへ</span>
        </a>
      </div>
    </div>
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

<style lang="scss">
.shutter {
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:#1e1e1e;
  z-index:9999;

  -webkit-animation: byeShutter 2.6s forwards;
          animation: byeShutter 2.6s forwards;
}
.shutter::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  width: 0;
  height: 1px;

  -webkit-animation: shutterOpen 2.6s forwards;
          animation: shutterOpen 2.6s forwards;
}
@keyframes byeShutter {
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
}
@keyframes shutterOpen {
  0% {
    width: 0;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  90% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 100%;
    height: 100%;
  }
}
@keyframes contentScale {
  70% {
    -webkit-transform: perspective(800px) scale(0.9) rotateX(15deg);
            transform: perspective(800px) scale(0.9) rotateX(15deg);
  }
  100% {
    -webkit-transform: perspective(800px) scale(1) rotateX(0);
            transform: perspective(800px) scale(1) rotateX(0);
  }
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .title {
    width: 100%;
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

  .guys {
    font-size: 24px;
    margin-top: 25px;
    margin-bottom: 5px;
    padding-left: 20px;
    letter-spacing: 5px;
  }

  textarea {
    border: solid 2px;
    border-radius: 5px;
    font-size: 30px;
    width: 100%;
  }
  textarea::placeholder {
    color: #FAFAFA;
  }
  textarea::-webkit-resizer {
      display: none;
  }

  .btn {
    margin: 50px 0 100px;
    display: inline-block;
    position: relative;
    width: 160px;
    height: 50px;
    line-height:50px;
    text-align: center;
    text-decoration: none;
    color: #1B1B1B;
    background: #fff;

    span::before {
      display: inline-block;
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      bottom: 0px;
      left: 0px;
      border-bottom: 1px solid #1B1B1B;
      border-left: 1px solid #1B1B1B;
    }
    span::after {
      display: inline-block;
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      bottom: 0px;
      right: 0px;
      border-bottom: 1px solid #1B1B1B;
      border-right: 1px solid #1B1B1B;
    }
  }
  .btn::before {
    display: inline-block;
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0px;
    left: 0px;
    border-top: 1px solid #1B1B1B;
    border-left: 1px solid #1B1B1B;
  }
  .btn::after {
    display: inline-block;
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0px;
    right: 0px;
    border-top: 1px solid #1B1B1B;
    border-right: 1px solid #1B1B1B;
  }
  .btn:hover {
    cursor: pointer;
    text-decoration: none;
    transition: transform .3s;
    transform-origin: center;
    transform: scale(1.05, 1.05);
  }
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
