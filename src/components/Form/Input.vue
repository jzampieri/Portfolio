<template>
  <div class="input-wrapper" :class="{ focused, hasValue: modelValue }">
    <label v-if="label" :for="id" class="input-label">{{ label }}</label>
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
    border-color: var(--color-primary, #10a37f);
    box-shadow: 0 0 0 3px rgba(16, 163, 127, 0.2);
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

.input-field {
  font-family: inherit;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid #333;
  border-radius: 0.6rem;
  outline: none;
  transition: all 0.2s ease;
  width: 100%;
}
</style>
