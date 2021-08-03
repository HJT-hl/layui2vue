import {h,defineComponent, VNode} from 'vue'
export default defineComponent({
  props : {
    v  : {
      type : String,
      default : 'default'
    }
  },
  render(){
    console.log("我渲染了")
    const v = this.$props.v
    return <div>
      <span>孩子</span>
      <div>{v}</div>
    </div>
  }
})
