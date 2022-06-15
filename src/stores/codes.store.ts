import { defineStore } from 'pinia'

import { codes, CodeOutput } from '../mocks/codes.mocks'

type CodeStore = {
  codes: CodeOutput
}

export const useCodeStore = defineStore({
  id: 'codeStore',
  state: () => <CodeStore>({
    codes: [],
  }),
  getters: {
    getCodes: (store) => {
      console.log(store)
      return store.codes
    }
  },
  actions: {
    fetchCodes() {
      this.codes = codes
    }
  }
})
