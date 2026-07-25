/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Kit (ConvertKit) form ID. Unset disables the email capture forms. */
  readonly VITE_KIT_FORM_ID?: string;
  /** Formspree form ID. Unset disables the contact form. */
  readonly VITE_FORMSPREE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
