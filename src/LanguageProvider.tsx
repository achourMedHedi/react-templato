import { FC, useState } from "react";
import { IntlProvider } from "use-intl";
import { ILanguageProvider } from "./types";

const LanguageProvider: FC<ILanguageProvider> = ({
  messages,
  defaultLocale,
  children,
}) => {
  const [locale, setLocale] = useState();
//   fetch api on server side
  return (
    <IntlProvider messages={messages[defaultLocale]} locale={defaultLocale}>
      {children}
    </IntlProvider>
  );
};

export default LanguageProvider;
