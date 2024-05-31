import * as Font from "expo-font";

/**
 * Loads custom fonts asynchronously.
 *
 * @returns {Promise<void>} A promise that resolves when the fonts are loaded.
 */
export const useFonts = (): Promise<void> => {
  return Font.loadAsync({
    Danfo: require("@assets/fonts/Danfo-Regular-VariableFont_ELSH.ttf"),
  });
};
