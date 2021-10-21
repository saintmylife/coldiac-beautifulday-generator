<template>
  <transition name="fade">
    <div
      v-if="!cCropperImage"
      class="border border-black flex justify-center items-center"
      @click="uploadPhoto"
    >
      <input
        type="file"
        accept="image/jpeg"
        class="hidden"
        ref="inputFile"
        @change="loadPhoto"
      />
      <p class="self-center cursor-default">Upload Photo</p>
    </div>
    <img v-else class="rounded" :src="cCropperImage" alt="" />
  </transition>
</template>
<script>
export default {
  props: {
    inputPhoto: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    image: {
      src: null,
      type: null,
    },
    cropperImage: null,
  }),
  methods: {
    getMimeType: function(file, fallback = null) {
      const byteArray = new Uint8Array(file).subarray(0, 4);
      let header = "";
      for (let i = 0; i < byteArray.length; i++) {
        header += byteArray[i].toString(16);
      }
      switch (header) {
        case "89504e47":
          return "image/png";
        case "47494638":
          return "image/gif";
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
        case "ffd8ffe3":
        case "ffd8ffe8":
          return "image/jpeg";
        default:
          return fallback;
      }
    },
    revokeImageUrl: function() {
      if (this.image.src) {
        URL.revokeObjectURL(this.image.src);
        this.image.type = null;
      }
    },
    uploadPhoto: function() {
      this.$refs.inputFile.click();
    },
    loadPhoto: function(event) {
      const { files } = event.target;
      if (files && files[0]) {
        this.revokeImageUrl();
        const blob = URL.createObjectURL(files[0]);
        const reader = new FileReader();
        reader.onload = async (e) => {
          this.image = {
            src: blob,
            type: await this.getMimeType(e.target.result, files[0].type),
          };
          this.$emit("uploadedPhoto", this.image, this.inputPhoto);
        };
        reader.readAsArrayBuffer(files[0]);
      }
    },
  },
  computed: {
    cCropperImage: {
      get: function() {
        return this.cropperImage;
      },
      set: function(value) {
        this.cropperImage = value;
      },
    },
  },
};
</script>
