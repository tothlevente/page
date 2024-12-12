import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";

import Repositories from "./components/contents/Repositories";
import Introducing from "./components/contents/Introducing";
import Footer from "./components/contents/Footer";
import Header from "./components/contents/Header";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>();

  const [introducing, setIntroducing] = useState([]);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/tothlevente", {
      headers: {
        Authorization: `token ${import.meta.env.VITE_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setIntroducing(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

    fetch("https://api.github.com/users/tothlevente/repos", {
      headers: {
        Authorization: `token ${import.meta.env.VITE_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setRepositories(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div className="text-lg font-semibold ">{error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
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
}
