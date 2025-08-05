<template>
  <div class="input-wrapper" :class="{ focused, hasValue: modelValue }">
    <label v-if="label" :for="id" class="input-label">{{ label }}</label>
    <div class="input-container">
      <input
        :id="id"
        type="text"
        class="input-field"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="focused = true"
        @blur="focused = false"
      />
      <button class="send-button" @click="$emit('submit')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 20v-6l9-2-9-2V4l18 8-18 8Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-control",
  props: {
    id: String,
    label: String,
    modelValue: String,
    placeholder: String
  },
  data() {
    return {
      focused: false
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;

  &.focused .input-field,
  .input-field:focus {
    // border-color: var(--color-primary, #10a37f);
    // box-shadow: 0 0 0 3px rgba(16, 163, 127, 0.2);
  }

  &.hasValue .input-label {
    opacity: 0.8;
  }
}

.input-label {
  font-size: 0.85rem;
  color: #aaa;
  transition: opacity 0.2s ease;
}

.input-container {
  display: flex;
  align-items: center;
  background-color: $cinza;
  border-radius: $border-radius;
  overflow: hidden;
  width: 20rem;
  max-height: 3rem;
}

.input-field {
  flex: 1;
  font-size: 1rem;
  padding: 1rem;
  border: none;
  outline: none;
  background: transparent;
}

.send-button {
  background: none;
  border: none;
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #888;
  transition: color 0.2s ease;

  &:hover {
    color: #10a37f; // cor de destaque no hover
  }
}
</style>
