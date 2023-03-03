export type TDefaultLocale = "en" | "fr";

export interface ILanguageProvider {
  defaultLocale: TDefaultLocale;
  children: JSX.Element;
  messages: {
    [lang in TDefaultLocale]: {
      [globalKey: string]: { [messageKey: string]: string };
    };
  };
}
