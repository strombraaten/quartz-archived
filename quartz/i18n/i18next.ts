import en from "./locales/en.json"
import fr from "./locales/fr.json"
import no from "./locales/no.json"

const TRANSLATION = {
  "en-US": en,
  "fr-FR": fr,
  "no-NB": no,
} as const

type TranslationOptions = {
  [key: string]: string
}

export const i18n = (lang = "no-NB", key: string, options?: TranslationOptions) => {
  const locale =
    Object.keys(TRANSLATION).find(
      (key) =>
        key.toLowerCase() === lang.toLowerCase() || key.toLowerCase().includes(lang.toLowerCase()),
    ) ?? "no-NB"
  const getTranslation = (key: string) => {
    const keys = key.split(".")
    let translationString: string | Record<string, unknown> | undefined =
      TRANSLATION[locale as keyof typeof TRANSLATION]
    keys.forEach((key) => {
      // Properly handle potential undefined values
      if (translationString && typeof translationString === 'object') {
        translationString = translationString[key]
      } else {
        translationString = undefined;
      }
    })
    return translationString
  }
  let translationString = getTranslation(key);
  if (translationString === undefined) {
    // Provide a fallback for missing translations
    translationString = `Missing translation for "${key}"`;
  } else if (options) {
    translationString = translationString.toString();
    Object.keys(options).forEach((optionKey) => {
      translationString = translationString.replace(`{{${optionKey}}}`, options[optionKey])
    });
  }
  return translationString.toString();
}
