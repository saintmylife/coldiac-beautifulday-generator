<template>
  <div class="vertical-buttons justify-evenly w-full">
    <button
      :disabled="toggleIsLeaving"
      class="square-button"
      @click="cropperBtn('close')"
    >
      <img :src="require('@/assets/icons/close.svg')" />
    </button>
    <button
      :disabled="toggleIsLeaving"
      class="square-button"
      @click="$emit('flip', true, false)"
    >
      <img :src="require('@/assets/icons/flip-horizontal.svg')" />
    </button>
    <button
      :disabled="toggleIsLeaving"
      class="square-button"
      @click="$emit('flip', false, true)"
    >
      <img :src="require('@/assets/icons/flip-vertical.svg')" />
    </button>
    <button
      :disabled="toggleIsLeaving"
      class="square-button"
      @click="$emit('rotate', -90)"
    >
      <img :src="require('@/assets/icons/rotate-counter-clockwise.svg')" />
    </button>
    <button
      :disabled="toggleIsLeaving"
      class="square-button"
      @click="$emit('rotate', 90)"
    >
      <img :src="require('@/assets/icons/rotate-clockwise.svg')" />
    </button>
    <button
      :disabled="toggleIsLeaving"
      class="square-button"
      @click="cropperBtn('save')"
    >
      <svg
        v-if="toggleIsLeaving"
        class="animate-spin rounded-full border-b-2 h-5 w-5"
        viewBox="0 0 24 24"
      ></svg>
      <img v-else :src="require('@/assets/icons/download.svg')" />
    </button>
  </div>
</template>
<script>
export default {
  data: () => ({
    isLeaving: false,
  }),
  computed: {
    toggleIsLeaving: {
      get: function() {
        return this.isLeaving;
      },
      set: function(value) {
        return (this.isLeaving = value);
      },
    },
  },
  methods: {
    cropperBtn: function(to) {
      this.toggleIsLeaving = true;
      setTimeout(() => this.$emit(to), 500);
    },
  },
};
</script>
<style scoped>
.vertical-buttons {
  position: absolute;
  top: 5%;
  left: 0;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  /* width: 100%; */
}
.square-button {
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background 0.5s;
}
.square-button:hover {
  background: black;
}
</style>
