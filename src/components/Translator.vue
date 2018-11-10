<template>
  <div class="container">
    <div class="row">
      <div class="col mb-4">
        <div class="form-group">
          <label for="inputLanguage">Input Language</label>
          <select class="form-control" id="inputLanguage" v-model="inputLanguage">
            <option value="auto">Auto</option>
            <option :value="language.code" v-for="language in LanguageList" :key="language.code">
              {{ language.name }}</option>
          </select>
        </div>
      </div>
      <div class="col mb-4">
        <div class="form-group">
          <label for="outputLanguage">Output Language</label>
          <select class="form-control" id="outputLanguage" v-model="outputLanguage">
            <option :value="language.code" v-for="language in LanguageList" :key="language.code">
              {{ language.name }}</option>
          </select>
        </div>
      </div>
      <div class="w-100"></div>
      <div class="col">
        <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="!validInputText()">
          <strong>Type something on input text!</strong>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <label for="input-text">Input Text</label>
        <div class="input-group">
          <textarea class="form-control" id="input-text" rows="15" 
            aria-label="Input Text" v-model="inputText"></textarea>
        </div>
        <div>Detected Language: {{ detectedLanguage }}</div>
      </div>
      <div class="col">
        <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="!validateLanguageSelect()">
          <strong>Select different Input/Output Language!</strong>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <label for="output-text">Translated Text</label>
        <div class="card text-center" id="output-text">
          <div class="card-body">
            <p class="card-text text-justify">{{ outputText }}</p>
          </div>
          <div class="card-footer text-muted text-right">
            <div v-if='isLoading'>
              <p class="my-0">loading ...</p>
            </div>
            <div v-else>
              <a href="#">copy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Translator.js"></script>
