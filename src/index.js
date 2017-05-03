import Vue from "vue/dist/vue.js";
import mapProps from "./mapProps";

const base = {
  props: ["message"],
  template: `<div>{{message}}<br>{{mapProps}}<br></div>`
};

const enhance = mapProps(props => ({
  ...props,
  mapProps: "mapProps"
}));

new Vue({
  el: "#root",
  data: {},
  template: `
    <div>
      <enhanced message="this is a message"></enhanced>
    </div>
  `,
  components: {
    enhanced: enhance(base)
  }
});
