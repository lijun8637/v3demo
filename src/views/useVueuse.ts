import { reactive, toRefs } from "vue";
import axios from "axios";
import { useAsyncState } from "@vueuse/core";

const useVueuse = async () => {
  const data: { err: any; res: any } = reactive({
    err: reactive({}),
    res: reactive({}),
  });

  const resError = (err: any) => {
    data.err.value = err;
    console.log(err);
  };

  const { state, isReady, isLoading, execute, error } = useAsyncState(
    // https://jsonplaceholder.typicode.com/todos/1
    axios.get("https://www.baidu.com").then((t) => t.data),
    { id: 233 },
    {
      onError: resError,
      resetOnExecute: false,
    }
  );
  console.log(state.value, isReady.value, isLoading.value, error.value);

  const res = await execute(1000, { name: 545 });
  data.res.value = res;

  return {
    ...toRefs(data),
    resVal: res,
    state,
    isLoading,
    isReady,
  };
};

export default useVueuse;
