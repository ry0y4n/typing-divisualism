<template>
  <transition name="modal" appear>
    <div class="modal__overlay">
      <div class="modal__window">
        <div class="modal__content">
          <h1 class="title">
            このサイトの楽しみ方
          </h1>
          <div>
            <vue-typed-js :strings="['1．ランダムなトピックを設定する．（例：騙される奴が悪いか．障害者が殺されるのは皆にとって得か．年収が低い人はバカか）']">
              <h1 class="desc">
                <span class="typing" />
              </h1>
            </vue-typed-js>
            <vue-typed-js :strings="['^1000 2．それぞれの分人で思ったことを素直に書き込んでみる．']">
              <h1 class="desc">
                <span class="typing" />
              </h1>
            </vue-typed-js>
            <vue-typed-js :strings="['^2000 3．下部ボタンを押して，次のプレイページでの様子を鑑賞しながら，分人の言葉が混ざり合う感触を楽しむ．']">
              <h1 class="desc">
                <span class="typing" />
              </h1>
            </vue-typed-js>
            <button class="btn" @click="change">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

export default Vue.extend({
  methods: {
    change () {
      this.$emit('changeFlag2')
    }
  }
})
</script>

<style lang="scss" scoped>
.modal {
  &__overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  &__window {
    height: 70%;
    width: 70%;
    overflow: hidden;
    background-color: white;
  }

  &__content {
    height: 100%;
    padding: 30px;
  }
}

// transition
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
  .modal__window {
    transition: opacity 0.4s, transform 0.4s;
  }
}
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
  .modal__window {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.modal__content {
  margin: 0 50px 0;
  position: relative;
  .title {
    font-size: 60px;
    text-align: center;
  }
  .desc {
    margin-top: 50px;
    font-size: 25px;
  }
  .btn {
    position: absolute;
    bottom: 30px;
    right: 50%;
    font-size: 20px;
  }
}

</style>
