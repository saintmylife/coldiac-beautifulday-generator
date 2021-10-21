<template>
  <t-modal-preview ref="modalPreview">
    <div class="croppie-container">
      <cropper
        ref="cropper"
        class="twitter-cropper"
        background-class="twitter-cropper__background"
        foreground-class="twitter-cropper__foreground"
        image-restriction="stencil"
        :stencil-size="stencilSize"
        :stencil-props="{
          lines: {},
          handlers: {},
          movable: false,
          scalable: false,
          aspectRatio: 1 / 1,
          previewClass: 'twitter-cropper__stencil',
        }"
        :transitions="false"
        :debounce="false"
        :default-size="defaultSize"
        :min-width="150"
        :min-height="150"
        :src="cImage.src"
        default-boundaries="fill"
        priority="visibleArea"
      />
      <cropper-button
        @close="cropperModalClose"
        @flip="cropperFlip"
        @rotate="cropperRotate"
        @save="cropperSave"
      />
    </div>
  </t-modal-preview>
</template>
<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
export default {
  props: {
    previewImage: {
      type: Object,
      required: true,
      default: {},
    },
  },
  components: {
    Cropper,
    CropperButton: () => import("@/components/PreviewImage/CropperButton.vue"),
  },
  data: () => ({
    image: {},
    previewIndex: null,
  }),
  computed: {
    cImage: {
      get: function() {
        this.cImage = this.previewImage;
        return this.image;
      },
      set: function(value) {
        this.image = value;
      },
    },
    cPreviewImageIndex: {
      get: function() {
        return this.previewIndex;
      },
      set: function(value) {
        this.previewIndex = value;
      },
    },
  },
  methods: {
    showPreview: function() {
      this.$refs.modalPreview.show();
    },
    hidePreview: function() {
      this.$refs.modalPreview.hide();
    },
    defaultSize: function({ imageSize }) {
      return {
        width: Math.min(imageSize.height, imageSize.width),
        height: Math.min(imageSize.height, imageSize.width),
      };
    },
    stencilSize: function({ boundaries }) {
      return {
        width: Math.min(boundaries.height, boundaries.width) - 48,
        height: Math.min(boundaries.height, boundaries.width) - 48,
      };
    },
    cropperModalClose: function() {
      this.$refs.modalPreview.hide();
      this.cImage = {};
      this.cPreviewImageIndex = null;
    },
    cropperFlip: function(x, y) {
      this.$refs.cropper.flip(x, y);
    },
    cropperRotate: function(angle) {
      this.$refs.cropper.rotate(angle);
    },
    cropperSave: async function() {
      const result = await this.renderToCanvas();
      this.$emit("save", result, this.cPreviewImageIndex);
      this.cropperModalClose;
    },
    renderToCanvas: function() {
      const { canvas } = this.$refs.cropper.getResult();
      return canvas.toDataURL();
    },
  },
};
</script>
<style scoped>
.croppie-container {
  background: black;
  width: unset;
  height: 60vh;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
}
.twitter-cropper {
  height: 521px;
}
.twitter-cropper__background {
  background-color: #edf2f4;
}
.twitter-cropper__foreground {
  background-color: #edf2f4;
}
.twitter-cropper__stencil {
  border: solid 5px #1da1f2;
}
/* .croppie-container >>> .vue-advanced-cropper__background,
.croppie-container >>> .vue-advanced-cropper__foreground {
  background: #edf2f4;
} */
</style>
