<template>
  <div class="input-control">
    <label v-if="label != ''">{{ label }}</label>
    <!-- <a href="#" @click.prevent="togglePassView()" v-if="type === 'password'" class="btPassWatch">
      <fa :icon="['fas', 'eye']" v-if="!showPass"></fa>
      <fa :icon="['fas', 'eye-slash']" v-else></fa>
    </a> -->
    <fa :icon="['fas', 'asterisk']" :class="['requiredIcon','color-primary',{ hasLabel: label != '' }]" v-if="required" />
    
    <span>
      <a href="#" @click.prevent="emitSearch()" v-if="search && !disabled" :class="['btnSearch',{ prevent: preventSearchButton }]" v-bind="$attrs">
        <fa :icon="['fas', 'magnifying-glass']" class="color-primary icon"></fa>
      </a>
      <a href="#" @click.prevent="togglePassView()" v-if="type == 'password'" class="btnPassView">
        <fa :icon="['fas', 'eye']" class=" icon" v-if="inputType == 'password'"></fa>
        <fa :icon="['fas', 'eye-slash']" class="icon" v-else></fa>
      </a>
      <fa :icon="['fal', 'files']" class="fileIcon" v-if="type == 'file'"/>

      <input
        v-if="!masking"
        :type="inputType"
        :class="[
          'form-control',
          { error: !valid },
          cssClass
        ]"
        :name="name"
        :placeholder="placeholder"
        @focus="focus"
        @blur="blur"
        @change="change"
        @input="input"
        @keyup="keyup"
        @keydown="keydown"
        v-bind="$attrs"
        v-bind:value="modelValue"
        :autocomplete="autocomplete"
        ref="input"
        v-money="ismoney ? money : false"
        :required="required"
        :disabled="disabled"
      />
      <input
        v-else
        :type="type"
        :class="[
          'form-control',
          { error: !valid },
          cssClass
        ]"
        :name="name"
        :placeholder="placeholder"
        @focus="focus"
        @blur="blur"
        @change="change"
        @input="input"
        @keyup="keyup"
        @keydown="keydown"
        v-bind="$attrs"
        v-bind:value="modelValue"
        :autocomplete="autocomplete"
        ref="input"
        v-mask="masks[masking]"
        :required="required"
        :disabled="disabled"
      />
    </span>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask'
import { VMoney } from 'v-money'

export default {
  name: "input-control",
  components: {

  },
  directives: { 
    mask,
    money: VMoney
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    class: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    valid: {
      type: Boolean,
      default: true
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    modelValue: {
      default: ""
    },
    cssClass: {
      type: String,
      default: ""
    },
    masking: {
      type: String,
      default: null
    },
    ismoney: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    preventSearchButton: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    }
  },
  data () {
    return {
      showPass: false,
      masks: {
        telefone: ['+## (##) #### ####', '+## (##) ##### ####'],
        fixo: '+## (##) #### ####',
        celular: '+## (##) # #### ####',
        cpf: ['###.###.###-##', '##.###.###/####-##'],
        cnpj: ['##.###.###/####-##'],
        cep: '#####-###',
        uf: 'AA',
        cartao: ['####.######.#####', '####.###.##.###', '####.######.####', '####.####.####.####'],
        validade_cartao: ['##/##'],
        cvv: ['###', '####', '#####', '######'],
        percentual: ['#%', '##%', '###%'],
        mes_ano: '##/####',
        competencia: '####/##'
        // digito: ['#','X']
      },
      masked: true,
      money: {
        decimal: ',',
        thousands: '',
        // prefix: 'R$ ',
        // suffix: ' #',
        precision: 2
      },
      hexTokens: {
        F: {
          pattern: /[0-9A-Z]/,
          transform: v => v.toLocaleUpperCase()
        }
      },
      inputType: "text"
    }
  },
  watch: {
    value (newVal, oldVal) {
      console.log("newVal:", newVal)
      console.log("oldVal:", oldVal)
    }
  },
  mounted () {
    this.inputType = this.type
    // console.log("inputType:", this.inputType)
    // console.log("type:", this.type)
  },
  methods: {
    focus (data) {
      this.$emit("focus", data)
    },
    blur (data) {
      this.$emit("blur", data)
    },
    change (data) {
      this.$emit("update:modelValue", data.target.value)
      this.emitSearch()
    },
    keyup (data) {
      this.$emit("keyup", data)
    },
    keydown (data) {
      this.$emit("keydown", data)
    },
    input (data) {
      this.$emit("update:modelValue", data.target.value)
    },
    togglePassView () {
      if ( this.showPass ) {
        this.showPass = false
        this.inputType = 'password'
      } else {
        this.showPass = true
        this.inputType = 'text'
      }
    },
    getMask () {
      let theMask

      if ( this.masking ) {
        theMask = this.masks[this.masking]

        return theMask
      }
      // console.log("getMask - masks:", this.masks)
      
    },
    emitSearch () {
      this.$emit('onsearch', this.modelValue)
    }
  }
}
</script>
<style lang="scss" scoped>
//forms
.input-control {
  position: relative;
  width: 100%; overflow: visible;

  .btPassWatch {
    position: absolute; top: 50%;
    transform: translateY(-50%);
    right: 15px;
    color: $color-primary;
  }

  .fileIcon {
    position: absolute;
    top: 50%; right: $hmg_mid;
    transform: translateY(-50%);
    font-size: 16px;
  }

  ::-webkit-calendar-picker-indicator {
    filter: brightness(200%)  
  }

  .requiredIcon {
    position: absolute;
    top: -5px;
    right: $hmg_small;
    transform: none;
    z-index: 11;
    font-size: 10px;

    &.hasLabel {
      top: 17px
    }
  }
  >span {
    position: relative;
  }
  .btnSearch {
    display: flex; width: 24px; height: 24px;
    flex-direction: column; align-items: center; align-content: center; justify-content: center;
    position: absolute; top: 50%; right: $hmg_small;
    transform: translateY(-50%);
    z-index: 100; line-height: 1;
    font-size: 16px; text-align: center;
    opacity: 1;

    .icon {
      color: $color-text !important;
      @extend %transition_4e;
    }

    &:hover {
      .icon {
        transform: scale(1.1);
        color: $color-primary !important
      }
    }
    &.prevent {
      pointer-events: none;
    }
  }
}
.form-group {
  margin-bottom: 20px;
  position: relative;
}
.form-control {
  width: 100%; height: 50px;
  border: $border-component; border-radius: $border-radius;
  box-shadow: none; outline: none;
  padding: 0 $hmg_small;
  color: $color-text;
  @extend %transition_3o;

  &.invert {
    background-color: $color-bg;
  }

  // &:readonly {
  //   background-color: $color-bg;
  //   opacity: .7;
  // }
  &:disabled,
  &[disabled='true'], 
  &[readonly='true']
  &.disabled,
  &.readonly {
    background-color: $color-fade;
    pointer-events: none;
  }

  &.mid {
    height: 36px;
    font-size: 12px;
    padding: 0 $mg_mini;
    border-radius: 2em;
  }

  &.small {
    height: 30px;
    font-size: 12px;
    padding: 0 $mg_mini;
  }

  &.small-radius {
    border-radius: $border-radius-small;
  }

  &.large {
    height: 70px;
    font-size: 23px;
    padding: 0 $mg_mid;
  }

  &.invis {
    border: 0 !important;
    border-radius: 0;
    @extend %transition_3o;
    background-color: transparent !important;
  }

  &.transparent {
    height: 30px; 
    padding: 0;
    border: 0 !important;
    border-radius: 0;
    @extend %transition_3o;
    background-color: transparent !important;
    
    &.large {
      width: 100%;
      font-weight: bold;
    }
    &.large-text {
      font-size: 16px
    }
    &:focus {
      box-shadow: none !important;
      border-bottom: $border-component-double
    }
    &:disabled {
      background-color: transparent !important;
    }
  }

  &.mid-font {
    font-size: 16px;
    font-weight: bold;
  }
  &.large-font {
    font-size: 20px;
    font-weight: bold;
  }

  &:focus {
    @extend %shadow-mid;
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: $color-fade-low;
  }

  &:-ms-input-placeholder {
    color: $color-fade-low;
  }

  &::placeholder {
    color: $color-fade-low;
  }

  &.error {
    border: 2px solid $color-alert !important;
  }

  &[type=number]{
    ::-webkit-inner-spin-button {
      opacity: 1
    }
  }
}

.btnPassView {
  position: absolute;
  right: $hmg_mid; top: 50%;
  transform: translateY(-50%);
}

</style>