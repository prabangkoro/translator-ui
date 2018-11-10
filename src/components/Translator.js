import axios from "axios"
import _ from "lodash"
import {LanguageList} from "./lib/langs"

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
      isLoading: false,
      detectedLanguage: '',
      LanguageList,
      inputLanguage: 'id',
      outputLanguage: 'en'
    }
  },
  methods: {
    translateText() {
      this.isLoading = true
      let source = this.inputLanguage
      // this is bad conditional handler :(((
      if (source === 'auto') source = this.detectedLanguage || 'id'
      if (source === 'und') source = 'id'
      let target = this.outputLanguage
      if (source === target) {
        if (source === 'id') source = 'en'
        else source = 'id'
      }
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
    },
    detectLanguage () {
      axios({
        method: 'post',
        url: endpoints.detectLanguage,
        baseURL: baseUrl,
        params: {
          q: this.inputText
        }
      }).then((res) => {
        this.detectedLanguage = res.data.data.detectedLanguage
      }).catch((err) => {
        this.detectedLanguage = err
      })
    },
    validateLanguageSelect () {
      if (this.inputLanguage !== this.outputLanguage) return true
      this.outputText = '-'
      return false 
    },
    validInputText () {
      return this.inputText !== ''
    }
  },
  watch: {
    inputText: function () {
      if (!this.validateLanguageSelect()) return
      if (!this.validInputText()) return 
      this.debouncedTranslateText()
      this.deboucedDetectLanguage()
    },
    inputLanguage: function () {
      if (!this.validateLanguageSelect()) return
      if (!this.validInputText()) return 
      this.debouncedTranslateText()
    },
    outputLanguage: function () {
      if (!this.validateLanguageSelect()) return
      if (!this.validInputText()) return 
      this.debouncedTranslateText()
    }
  },
  created () {
    this.debouncedTranslateText = _.debounce(this.translateText, 500)
    this.deboucedDetectLanguage = _.debounce(this.detectLanguage, 500)
  }
}