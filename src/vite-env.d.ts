/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TOKEN: string;
  readonly VITE_INTRODUCING_API_PATH: string;
  readonly VITE_REPOSITORIES_API_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
