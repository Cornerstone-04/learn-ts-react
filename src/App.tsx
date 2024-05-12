import {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface User {
  id: number;
  username: string;
}

type fibFunction = (n: number) => number;
const fib: fibFunction = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 20;

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("mounting");
    console.log("users: ", users);

    return (): void => console.log("unmounting");
  }, [users]);

  const handleCount = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  );

  const result = useMemo<number>((): number => fib(myNum), [myNum]);

  return (
    <div className="App">
      <h1>App</h1>
      <p>{count}</p>
      <button onClick={handleCount}>Click</button>
      <h2>{result}</h2>
      <input type="text" name="" id="" ref={inputRef} className="text-black"/>
    </div>
  );
};

export default App;
