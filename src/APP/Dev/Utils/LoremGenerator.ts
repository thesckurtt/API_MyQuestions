import { loremIpsum } from "lorem-ipsum";
export class LoremGenerator {
  /**
   * ## Generate abstract phrase with lorem ipsum
   * ---
   * Generate phrases with the possibility includes prefix, suffix
   * and set the length of the text
   * @param prefix - Prefix of the text "[...]my text"
   * @param suffix - Suffix of the text "my text[...]"
   * @param length - Length of the phrase | Default 5
   * @returns {string} - The phrase
   */
  public static LoremPhrase(length?: number, prefix?: string, suffix?: string) {
    const phrase: string = loremIpsum({
      count: length ?? 5, // Number of "words", "sentences", or "paragraphs"
      format: "plain", // "plain" or "html"
      units: "words", // paragraph(s), "sentence(s)", or "word(s)"
    });

    return `${prefix ? prefix : ""}${phrase}${
      suffix ? suffix : ""
    }`;
  }
}
