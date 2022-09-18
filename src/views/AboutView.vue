<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>errs:{{ errs }}</div>
    <div>resVal:{{ resVal }}</div>
    <div>states:{{ states }}</div>
    <div>res:{{ res }}</div>

    <div>isLoading:{{ isLoading }}</div>
  </div>
</template>
<script setup lang="ts">
import useVueuse from "./useVueuse";

const { err, state, res, resVal, isLoading } = useVueuse();
console.log(err, state, resVal);

// import { reactive, toRefs, ref } from "vue";
// import axios from "axios";
// import { useAsyncState } from "@vueuse/core";
// let errs: any = reactive({});
// let resVal = reactive({});
// let states = reactive({});

// const useVueuse = async () => {
//   const resError = (err: any) => {
//     errs.value = err;
//     console.log(err);
//   };
//   const { state, isReady, isLoading, execute, error } = useAsyncState(
//     // https://jsonplaceholder.typicode.com/todos/1
//     axios.get("https://www.baidu.com").then((t) => t.data),
//     { id: 233 },
//     {
//       onError: resError,
//       resetOnExecute: false,
//     }
//   );
//   states.value = state;
//   console.log(state.value, isReady.value, isLoading.value, error.value);

//   const res = await execute(1000, { name: 545 });
//   resVal.value = res;

//   return {
//     resVal: res,
//     state,
//     isLoading,
//     isReady,
//   };
// };

useVueuse();
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
