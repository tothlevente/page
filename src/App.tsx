import { introducingData, repositoriesData } from "./api/AtomApi";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { useAtom } from "jotai";

import Repositories from "./components/layouts/Repositories";
import Introducing from "./components/layouts/Introducing";
import ErrorHandling from "./components/error-handling";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Loading from "./components/loading";

export default function App() {
  const [{ bio, avatar_url }] = useAtom(introducingData);
  const [repositories] = useAtom(repositoriesData);

  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <ErrorBoundary fallback={<ErrorHandling />}>
        <Header />
        <Suspense fallback={<Loading />}>
          <Introducing
            bio={bio}
            avatar_url={avatar_url}
          />
          <Repositories repositories={repositories} />
        </Suspense>
        <Footer />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
