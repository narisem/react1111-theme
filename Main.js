import { useTheme } from "../context/ThemeContext";

const Main = () => {
    const [theme] = useTheme();
  return (
    <main className={`content-${theme}`}>
    <h1>테마 변경 해보실까요--</h1>
  </main>
  );
};

export default Main;
