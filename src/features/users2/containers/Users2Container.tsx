import { useUsers2 } from "../hooks/useUser2";

export function Users2Container() {
  const { data } = useUsers2();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
