import { introducingData, repositoriesData } from "./api/AtomApi";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { useAtom } from "jotai";

import Repositories from "./components/contents/Repositories";
import Introducing from "./components/contents/Introducing";
import Footer from "./components/contents/Footer";
import Header from "./components/contents/Header";
import Loading from "./components/loading";
import ErrorHandling from "./components/error-handling";

export default function App() {
  const [{ bio, avatar_url }] = useAtom(introducingData);
  const [repositories] = useAtom(repositoriesData);

  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <Header />
      <ErrorBoundary fallback={<ErrorHandling />}>
        <Suspense fallback={<Loading />}>
          <Introducing
            bio={bio}
            avatar_url={avatar_url}
          />
          <Repositories repositories={repositories} />
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </ThemeProvider>
  );
}
