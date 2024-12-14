import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";

import Troubleshooting from "./components/contents/Troubleshooting";
import Repositories from "./components/contents/Repositories";
import IntroducingProps from "./interfaces/IntroducingProps";
import Introducing from "./components/contents/Introducing";
import RepositoryProps from "./interfaces/RepositoryProps";
import Loading from "./components/contents/Loading";
import Footer from "./components/contents/Footer";
import Header from "./components/contents/Header";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>();

  const [introducing, setIntroducing] = useState<IntroducingProps>();
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_INTRODUCING_API_PATH, {
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

    fetch(import.meta.env.VITE_REPOSITORIES_API_PATH, {
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
    return <Troubleshooting error={error} />;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <ThemeProvider
        defaultTheme="light"
        storageKey="vite-ui-theme"
      >
        <Header />
        <Introducing
          bio={introducing?.bio}
          avatar_url={introducing?.avatar_url}
        />
        <Repositories
          repositories={repositories}
          setIsLoaded={setIsLoaded}
          setError={setError}
        />
        <Footer />
      </ThemeProvider>
    );
  }
}
