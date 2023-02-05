/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string;
  readonly PUBLIC_CLOUDINARY_API_KEY: string;
  readonly PUBLIC_GA_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
