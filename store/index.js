import Vuex from 'vuex'

const Store = () => {
  return new Vuex.Store({
    state () {
      return {
        message: 'This is store message!',
        badText: [],
        goodText: [],
        weridText: [],
        badTextDiff: [],
        badIntervalDiff: [],
        goodTextDiff: [],
        goodIntervalDiff: [],
        weirdTextDiff: [],
        weirdIntervalDiff: []
      }
    }
  })
}

export default Store
