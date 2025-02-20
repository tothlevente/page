import { introducingData, repositoriesData } from "./api/AtomApi";
import { ThemeProvider } from "@/components/themes/ThemeProvider";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { useAtom } from "jotai";

import Repositories from "./components/repositories/Repositories";
import ErrorHandling from "./components/boundary/ErrorHandling";
import Introducing from "./components/introducing/Introducing";
import Loading from "./components/suspense/Loading";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
