<template>
  <div style="background-color:rgb(190, 233, 229,.5)">
    <div
      key="1"
      id="generator"
      :class="
        !isGenerated
          ? 'generator shadow-2xl max-w-screen-sm mx-auto py-4 px-9'
          : 'generator-full max-w-screen-lg w-screen h-screen py-10 px-20'
      "
      class="relative"
      v-cloak
    >
      <div
        :class="!isGenerated ? 'grid-cols-4 gap-y-4' : 'grid-cols-12 gap-y-6'"
        class="grid auto-rows-auto gap-x-5 place-content-center"
      >
        <div
          class="justify-self-center"
          :class="!isGenerated ? 'col-span-4' : 'col-span-12'"
        >
          <img v-if="!isGenerated" src="/assets/images/coldiac-kuning.png" />
          <img v-else src="/assets/images/1080/coldiac-kuning-1080.png" />
        </div>
        <div
          class="justify-self-center"
          :class="!isGenerated ? 'col-span-4' : 'col-span-12'"
        >
          <img
            v-if="!isGenerated"
            src="/assets/images/logo-beautiful-day-long-1.png"
          />
          <img
            v-else
            src="/assets/images/1080/logo-beautiful-day-long-1080.png"
          />
        </div>
        <div
          class="aspect-w-1 aspect-h-1"
          :class="
            !isGenerated ? 'col-span-2' : 'col-span-5 col-start-1 my-auto'
          "
        >
          <photo-box
            :inputPhoto="0"
            ref="photoBox0"
            @uploadedPhoto="handleUploadedPhoto"
          />
        </div>
        <div
          class="flex flex-col justify-center"
          :class="!isGenerated ? 'col-span-2' : 'col-span-5 col-start-8'"
        >
          <p
            :class="
              !isGenerated
                ? 'input-shadow-sm'
                : 'text-logo-shadow-generate lg:text-4xl'
            "
          >
            Hello it's me
          </p>
          <textarea
            v-model="inputName"
            v-if="!isGenerated"
            maxlength="40"
            rows="2"
            class="mt-4 p-2 resize-none text-xl max-w-full bg-transparent border-2 border-white rounded text-area-name"
          ></textarea>
          <div
            v-else
            class="mt-1 p-2 resize-none text-xl max-w-full bg-transparent text-black rounded text-6xl text-name-shadow-generate"
          >
            {{ inputName }}
          </div>
        </div>
        <div
          :class="
            !isGenerated ? 'col-span-4' : 'col-span-10 col-start-1 -mt-4 mb-4'
          "
        >
          <p
            :class="
              !isGenerated
                ? 'input-shadow-sm'
                : 'text-logo-shadow-generate lg:text-4xl'
            "
          >
            A GOOD THING THAT I SAW, DID,<br />OR EXPERIENCED TODAY
          </p>
        </div>
        <div
          v-if="!isGenerated"
          class="flex flex-col relative z-10"
          :class="
            !isGenerated
              ? 'col-span-2 justify-center'
              : 'col-span-5 col-start-1 justify-start'
          "
        >
          <p class="input-shadow-sm">Describe the moment</p>
          <t-textarea
            v-model="inputDescribe"
            wrap="hard"
            maxlength="150"
            rows="4"
            cols="20"
            classes="mt-2 resize-none max-w-full bg-transparent border-2 border-white rounded text-area-describe"
            style="width:100%"
          ></t-textarea>
          <small class="mt-2 text-right"
            >{{ 150 - inputDescribe.length }}/150</small
          >
        </div>
        <div v-else class="-mt-6 relative z-10 col-span-5 col-start-1">
          <span class="text-4xl input-shadow-sm" v-html="inputDescribe" />
        </div>
        <div
          class="aspect-w-1 aspect-h-1"
          :class="
            !isGenerated ? 'col-span-2' : 'col-span-5 col-start-8 my-auto'
          "
        >
          <photo-box
            :inputPhoto="1"
            ref="photoBox1"
            @uploadedPhoto="handleUploadedPhoto"
          />
        </div>
        <div
          class="text-center relative"
          :class="!isGenerated ? 'col-span-4' : 'col-span-12 -mt-4 mb-4'"
        >
          <img
            :src="
              !isGenerated
                ? '/assets/images/cewek-1.png'
                : '/assets/images/1080/cewek-1080.png'
            "
            class="absolute -bottom-1"
            :class="!isGenerated ? 'h-20' : ''"
          />
          <p
            :class="
              !isGenerated
                ? 'input-shadow-sm'
                : 'text-logo-shadow-generate lg:text-4xl'
            "
          >
            THE THINGS/PEOPLE<br />I AM GRATEFUL FOR TODAY
          </p>
        </div>
        <div
          class="aspect-w-1 aspect-h-1"
          :class="
            !isGenerated ? 'col-span-2' : 'col-span-5 col-start-1 my-auto'
          "
        >
          <photo-box
            :inputPhoto="2"
            ref="photoBox2"
            @uploadedPhoto="handleUploadedPhoto"
          />
        </div>
        <div
          class="aspect-w-1 aspect-h-1"
          :class="
            !isGenerated ? 'col-span-2' : 'col-span-5 col-start-8 my-auto'
          "
        >
          <photo-box
            :inputPhoto="3"
            ref="photoBox3"
            @uploadedPhoto="handleUploadedPhoto"
          />
        </div>
        <div
          class="flex flex-col text-center"
          :class="!isGenerated ? 'col-span-4' : 'col-span-12'"
        >
          <p
            :class="
              !isGenerated
                ? 'input-shadow-sm text-2xl'
                : 'text-logo-shadow-generate text-4xl -mt-4'
            "
          >
            THIS IS MY DAY FELT
          </p>
          <div
            class="flex"
            :class="
              !isGenerated ? 'justify-around' : 'flex-col justify-center mt-2'
            "
          >
            <div
              class="w-full flex"
              :class="!isGenerated ? 'justify-around' : 'justify-center'"
            >
              <button
                v-for="(emoticon, index) in emoticons"
                :key="index"
                class="outline-none text-center"
                @click="selectEmoticon(index)"
                :data-html2canvas-ignore="activeEmoticon !== index"
              >
                <span
                  v-html="emoticon"
                  :class="!isGenerated ? 'text-3xl mr-4' : 'text-6xl'"
                >
                </span>
                <hr
                  :class="
                    activeEmoticon === index && !isGenerated
                      ? 'emoticon-border'
                      : 'hidden'
                  "
                />
              </button>
            </div>
            <template v-if="isGenerated">
              <p class="input-shadow-sm text-3xl mt-8 mb-4">HOW ABOUT YOU ?</p>
              <p class="input-shadow-sm text-2xl">
                GET THE REFLECTION TEMPLATE ON BEAUTIFULDAY.COLDIAC.COM
                <br />MAKE YOUR OWN REFLECTION<br />
                WHILE LISTEN TO COLDIAC NEWEST SINGLE “BEAUTIFUL DAY”<br />
                ON ALL YOUR FAVOURITE DIGITAL STREAMING PLATFORM
              </p>
            </template>
          </div>
        </div>
        <div
          data-html2canvas-ignore
          v-if="!isGenerated"
          class="place-self-center col-span-2 col-start-2"
        >
          <button
            class="block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600"
            @click="generate"
          >
            DOWNLOAD
          </button>
        </div>
      </div>
      <cropper-modal
        data-html2canvas-ignore
        ref="imagePreview"
        :previewImage="cPreviewImage"
        @close="cPreviewImage = null"
        @save="saveImagePreview"
      />
    </div>
    <t-modal ref="generateModal" data-html2canvas-ignore>
      <div class="flex flex-col justify-center items-center">
        <template v-if="!isChromeIos">
          <div
            class="mb-2 loader ease-linear rounded-full border-8 border-t-8 h-16 w-16"
          ></div>
          <p>Generating ...</p>
        </template>
        <div class="flex flex-col justify-center items-center" v-else>
          <p class="select-none">Hold this image to save</p>
          <img ref="resultImageModal" class="w-1/2 my-4" />
          <button
            class="block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600"
            @click="toggleGenerated = false"
          >
            Done
          </button>
        </div>
      </div>
    </t-modal>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
import PhotoBox from "@/components/PhotoBox.vue";
import GeneratorPreview from "@/components/GeneratorPreview.vue";
// import "@/assets/css/bocah.css";
export default {
  components: {
    PhotoBox,
    CropperModal: () => import("@/components/PreviewImage/CropperModal.vue"),
    GeneratorPreview,
  },
  data: () => ({
    inputName: "",
    inputNameSlug: null,
    inputDescribe: "",
    inputPhoto: "",
    isPreviewImageLoaded: false,
    previewImage: {},
    previewImageIndex: "",
    isGenerated: false,
    emoticons: [`&#128512;`, `&#128514;`, `&#128525;`, `&#128557;`],
    emoticonIndex: 0,
    chromeIos: false,
  }),
  computed: {
    cPreviewImage: {
      get: function() {
        return this.previewImage;
      },
      set: function(value) {
        return (this.previewImage = value);
      },
    },
    togglePreviewImageLoaded: {
      get: function() {
        return this.isPreviewImageLoaded;
      },
      set: function(value) {
        this.isPreviewImageLoaded = value;
      },
    },
    cPreviewImageIndex: {
      get: function() {
        return this.previewImageIndex;
      },
      set: function(value) {
        this.previewImageIndex = value;
      },
    },
    activeEmoticon: {
      get: function() {
        return this.emoticonIndex;
      },
      set: function(index) {
        this.emoticonIndex = index;
      },
    },
    toggleGenerated: {
      get: function() {
        return this.isGenerated;
      },
      set: function(value) {
        this.isGenerated = value;
        if (value) {
          this.$refs.generateModal.show();
        } else {
          this.$refs.generateModal.hide();
        }
      },
    },
    slug: {
      get: function() {
        return this.inputNameSlug;
      },
      set: function(value) {
        this.inputNameSlug = value;
      },
    },
    isChromeIos: {
      get: function() {
        return this.chromeIos;
      },
      set: function(value) {
        this.chromeIos = value;
      },
    },
  },
  methods: {
    handleUploadedPhoto: function(photo, elIndex) {
      this.cPreviewImage = photo;
      this.$refs.imagePreview.cPreviewImageIndex = elIndex;
      this.$refs.imagePreview.showPreview();
    },
    saveImagePreview: function(result, elIndex) {
      this.$refs[`photoBox${elIndex}`].cCropperImage = result;
      this.$refs.imagePreview.hidePreview();
    },
    selectEmoticon: function(index) {
      this.activeEmoticon = index;
    },
    convertSlug: function() {
      this.slug = this.inputName
        .toLowerCase() // LowerCase
        .replace(/\s+/g, "-") // space to -
        .replace(/&/g, `-and-`) // & to and
        .replace(/--/g, `-`); // -- to -
    },
    generate: function() {
      this.toggleGenerated = true;
      this.$nextTick(async () => {
        const generatorWrapper = document.querySelector("#generator");
        await this.convertSlug();
        await html2canvas(generatorWrapper, {
          scale: 1,
          width: 1080,
          height: 1920,
          windowWidth: 1080,
          windowHeight: 1920,
        }).then((result) => {
          const base64 = result.toDataURL("image/jpeg", 1);
          if (this.$device.browser.chrome_mobile_ios) {
            this.isChromeIos = true;
            this.$nextTick(() => {
              this.$refs.resultImageModal.setAttribute("src", base64);
            });
          } else {
            const downloadElement = document.createElement("a");
            downloadElement.href = base64.replace(
              "image/jpeg",
              "image/octet-stream"
            );
            downloadElement.download = `${
              this.slug ? this.slug : "coldiac-beautiful-day"
            }.jpg`;
            downloadElement.click();
            setTimeout(() => (this.toggleGenerated = false), 500);
          }
        });
      });
    },
  },
};
</script>
<style scoped>
.generator {
  background-color: #bee9e5;
  /* font-family: "Bocah"; */
  background-image: url("/assets/images/tumbuhan-bawah.png"),
    url("/assets/images/cloudy-1.png"),
    url("/assets/images/cloudy-left-center.png"),
    url("/assets/images/cloudy-right-bottom.png");
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: bottom center, 80% 11%, left 35%, right 70%;
  background-size: contain, 60%, 30%, 30%;
  /* overflow-y: scroll; */
  transition: width 0.5s ease-in-out;
}
.generator-full {
  background-color: #bee9e5;
  /* font-family: "Bocah"; */
  max-height: 1920px;
  background-image: url("/assets/images/1080/tumbuhan-bawah-1080.png"),
    url("/assets/images/1080/cloudy-1080.png"),
    url("/assets/images/1080/cloudy-1080-left.png"),
    url("/assets/images/1080/cloudy-1080-right.png");
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: bottom center, 80% 11%, left 35%, right 70%;
  background-size: contain, 60%, 30%, 30%;
  overflow: hidden;
  transition: width 0.5s ease-in-out;
}
/* max character = width * (height/line-height) */
.text-area-name {
  height: 7ch;
  width: 19ch;
  line-height: 2ch;
  overflow: hidden;
  box-sizing: border-box;
}
.text-area-describe {
  height: 12ch;
  width: 19ch;
  line-height: 2.25ch;
  overflow: hidden;
}
.loader {
  border-color: #f5c951;
  border-top-color: #bee9e5;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.emoticon-border {
  border-color: black;
  border-width: 1px;
  width: 50%;
  margin-left: 5px;
}
.input-shadow-sm {
  text-shadow: 1px 1px rgb(255, 255, 255);
}
.input-shadow {
  text-shadow: 5px 5px rgb(255, 255, 255);
}
.text-name-shadow-generate {
  text-shadow: 3px 3px rgb(255, 255, 255);
}
.text-logo-shadow-generate {
  text-shadow: 2.5px 2.5px rgb(255, 255, 255);
}
</style>
