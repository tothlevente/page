import { ThemeProvider } from "@/components/theme-provider";

import Repositories from "./components/contents/Repositories";
import Introducing from "./components/contents/Introducing";
import Footer from "./components/contents/Footer";
import Header from "./components/contents/Header";

export default function App() {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <Header />
      <Introducing />
      <Repositories />
      <Footer />
    </ThemeProvider>
  );
}
