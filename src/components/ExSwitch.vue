
<script>
import { Switch } from 'element-ui'
export default {
  name: 'ExSwitch',
  // mixins: [Switch],
  extends: Switch,
  props: {
    beforeChange: {
      type: Function,
      default: () => Promise.resolve(true)
    }
  },
  created () {
  },
  methods: {
    handleChange(event){
      // 在elementUI switch.vue中找到handleChange的代码
      // node_modules\element-ui\packages\switch\src\component.vue
      this.beforeChange().then(res => {
        const val = this.checked ? this.inactiveValue : this.activeValue;
        this.$emit('input', val);
        this.$emit('change', val);
        this.$nextTick(() => {
          // set input's checked property
          // in case parent refuses to change component's value
          this.$refs.input.checked = this.checked;
        });
      })
    }
  }
}
</script>

<style>

</style>