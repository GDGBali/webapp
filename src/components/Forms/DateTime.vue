<template>
  <v-menu
    :ref="menuRef"
    :close-on-content-click="false"
    v-model="menuModel"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
    light
  >
    <v-text-field
      slot="activator"
      v-model="valueModel"
      :label="label"
      :prepend-icon="pickerType === 'date' ? 'event' : 'access_time'"
      readonly
    />
    <v-date-picker
      v-if="pickerType === 'date'"
      v-model="valueModel" 
      first-day-of-week="1" 
      scrollable 
      @input="updateValue(menuRef)"
    />
    <v-time-picker
      v-else
      v-model="valueModel"
      full-width
      format="24hr"
      @change="updateValue(menuRef)"
    />
  </v-menu>
</template>

<script>
export default {
  props: {
    menuRef: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    pickerType: {
      type: String,
      default: 'date',
    },
    pickerValue: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    menuModel: false,
  }),
  methods: {
    updateValue: function(ref) {
      this.$refs[ref].save(this.pickerValue);
    },
  },
  computed: {
    valueModel: {
      get() {
        return this.pickerValue;
      },
      set(value) {
        this.$emit('update:pickerValue', value);
      },
    },
  },
};
</script>
