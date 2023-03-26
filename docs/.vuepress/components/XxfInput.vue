<template>
  <div>
    <div>124</div>
  <span>124</span>
  <div>{{ input }}</div>
  <div>{{ input }}</div>
  <div>{{ input }}</div>
  </div>
</template>

<script>
  export default {
    name: 'XxfInput',
    props: {
      config: {
        type: Object,
        default: () => {}
      },
      form: {
        type: Object,
        default: () => {}
      },
      prop: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        input: 123
      };
    },
    methods: {
      // initWatch() {
      //   if (this.config.linkValue && typeof this.config.linkFunction === 'function') {
      //     this.config.linkValue.forEach(element => {
      //       const watchKey = `form.${element}`
      //       console.log(watchKey);
      //       this.$watch(watchKey, (newValue, oldValue) => {
      //         this.config.linkFunction(this.form, newValue, oldValue)
      //       })
      //     });
      //   }
      }
  };
</script>