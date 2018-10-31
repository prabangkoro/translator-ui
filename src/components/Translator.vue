<template>
  <div class="container">
    <div class="row">
      <div class="col mb-4">
        <div class="form-group">
          <label for="inputLanguage">Input Language</label>
          <select class="form-control" id="inputLanguage">
            <option>Auto</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="col mb-4">
        <div class="form-group">
          <label for="outputLanguage">Output Language</label>
          <select class="form-control" id="outputLanguage">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="w-100"></div>
      <div class="col">
        <label for="input-text">Input Text</label>
        <div class="input-group">
          <textarea class="form-control" id="input-text" rows="15" 
            aria-label="Input Text" v-model="inputText"></textarea>
        </div>
      </div>
      <div class="col">
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
