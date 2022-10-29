import { defineStore } from 'pinia'

interface State {
  counter: number;

}
// Options API
export const useCounterStore = defineStore('counter', {
  state: (): State => {
    return {
      counter: 0
    }
  },
  getters: {
    double: (state) => {
      return state.counter * 2
    }
  },
  actions: {
    incerment: function () {
      this.counter += 1
    }
  }
})

// Components API
// export const useCounterStore = defineStore('counter', () => {
//   const counter = ref<number>(0)

//   const incerment = () => {
//     counter.value += 1
//   }

//   return {
//     counter,
//     double: computed(() => (counter.value * 2)),
//     incerment
//   }
// })
