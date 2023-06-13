import useStore from "@/store";
const useLoading = () => {
  const { start, finish } = useStore();
  return ({
    start,
    finish,
  });
}


export default useLoading;