<template>
  <transition name="modal" appear>
    <div class="modal__overlay">
      <div class="modal__window">
        <div class="modal__content">
          <h1 class="title">
            分人主義
          </h1>
          <vue-typed-js :strings="['分人主義では個人を不可分とせず，自分とは相手との相互作用で形成される種々様々な存在を「分人」と定義する．']">
            <h1 class="desc">
              <span class="typing" />
            </h1>
          </vue-typed-js>
          <vue-typed-js :strings="['「本当の自分」というものなど存在せず，「地元の悪い奴と下世話な話で盛り上がる自分」も「仕事を頑張る自分」も全て「自分」なんだという考えなどが例である．']">
            <h1 class="desc">
              <span class="typing" />
            </h1>
          </vue-typed-js>
          <vue-typed-js :strings="['分人の構成は，異なる積木が重ねられているように，それぞれが混ざり合わない部分もあれば，水彩絵の具が画用紙の上で滲むように混ざり合っていく部分もある．その混ざり合った部分が，個性なのか，それとも，他とは完全に切り離された部分が個性の中心的な位置をしめていくのか．']">
            <h1 class="desc">
              <span class="typing" />
            </h1>
          </vue-typed-js>
          <div>
            <button class="btn" @click="change">
              次へ
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
      this.$emit('changeFlag')
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
