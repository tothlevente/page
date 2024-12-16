import IntroducingProps from "@/interfaces/IntroducingProps";
import RepositoryProps from "@/interfaces/RepositoryProps";

import { atom } from "jotai";

export const introducingData = atom(async () => {
  const response = await fetch(import.meta.env.VITE_INTRODUCING_API_PATH, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_TOKEN}`,
    },
  });

  const data: IntroducingProps = await response.json();
  return data;
});

export const repositoriesData = atom(async () => {
  const response = await fetch(
    import.meta.env.VITE_REPOSITORIES_API_PATH,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_TOKEN}`,
      },
    }
  );

  const data: RepositoryProps[] = await response.json();
  return data;
});
