<template>
  <div>
    <v-row class="upload-area">
      <v-col>
        <v-file-input
          v-model="Image"
          accept="image/*"
          label="Select Image"
          show-size
          @change="preview"
        >
        </v-file-input>
      
        <v-img v-if="src" :src="src"></v-img>
        <template v-else>
          <v-row class="upload-icon-area">
            <v-col>
              <v-icon class="upload-icon" x-large>account_circle</v-icon>
            </v-col>
          </v-row>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: null,
      image: null,
    };
  },
  computed: {
    Image: {
      get() {
        return this.image;
      },
      set(payload) {
        this.image = payload;
      },
    },
    src() {
      return this.image ? this.url : "";
    },
  },
  methods: {
    preview() {
      if (!this.image) return;

      this.url = URL.createObjectURL(this.image);
    },
    emitInput() {
      this.$emit("input", this.image);
    },
  },
};
</script>

<style>
.upload-area {
  border: 1px solid grey;
  border-radius: 5px;
  margin: 0px 10px;
}

.upload-icon-area {
  text-align-last: center;
}

.upload-icon-area i{
  font-size: 182px!important;
}
</style>