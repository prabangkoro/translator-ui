import axios from "axios"
import _ from "lodash"

const baseUrl = 'http://localhost:3000'
const endpoints = {
  translate: '/translate',
  autoTranslate: '/auto-translate',
  detectLanguage: '/detect-language'
}

export default {
  name: 'translator',
  data: function () {
    return {
      inputText: '',
      outputText: '',
      isLoading: false
    }
  },
  methods: {
    translateText() {
      this.isLoading = true
      let source = 'id'
      let target = 'en'
      axios({
        method: 'post',
        url: endpoints.translate,
        baseURL: baseUrl,
        params: {
          q: this.inputText,
          s: source,
          t: target
        }
      }).then((res) => {
        this.outputText = res.data.data.translatedText
      }).catch((err) => {
        this.outputText = err
      }).then(() => {
        this.isLoading = false
      })
    }
  },
  watch: {
    inputText: function () {
      this.debouncedTranslateText()
    }
  },
  created () {
    this.debouncedTranslateText = _.debounce(this.translateText, 500)
  }
}