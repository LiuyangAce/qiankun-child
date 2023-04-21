import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* eslint-disable */
let instance = null;

function render(props = {}) {
  const { container } = props;

  instance = createApp(App)
    .use(store)
    .use(router)
    .mount(container ? container.querySelector("#app") : "#app");
}
export async function mount(props) {
  console.log("in function mount...", props);
  render(props);
}
//判断当前运行环境是独立运行的还是在父应用里面进行运行，配置全局的公共资源路径
// if (window.__POWERED_BY_QIANKUN__) {
//   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
// }
//如果是独立运行window.__POWERED_BY_QIANKUN__=undefined
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

console.log(
  "window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__:",
  window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
);
console.log("window.__POWERED_BY_QIANKUN__:", window.__POWERED_BY_QIANKUN__);
console.log("__webpack_public_path__:", __webpack_public_path__);

//最后暴露的三个方法是固定的，加载渲染以及销毁
export async function bootstrap() {
  console.log("in function bootstrap...");
}

export async function unmount() {
  console.log("in function unmount...");
  instance.$destroy();
}
export async function update(props) {
  console.log("update props:", props);
}
