import { env } from "process";

// NOTE: regexp must have the 'g' flag or else `matchAll` will throw
function getUrls(content: string, regexp: RegExp): Array<string> {
  const urls: Array<string> = [];
  for (const matches of content.matchAll(regexp)) {
    const url = matches[0];
    urls.push(url);
  }
  return urls;
}

export const replacements: {
  [identifier: string]: (content: string) => string | null;
} = {
  "//x.com/": (content) => {
    const urls = getUrls(content, /https?:\/\/x\.com\/[^\s]+/g);
    if (urls.length > 0) {
      return urls
        .map((url) => url.replace("//x.com/", `//${env.FXTWITTER_URL}/`))
        .join("\n");
    } else {
      return null;
    }
  },
  "//twitter.com/": (content) => {
    const urls = getUrls(content, /https?:\/\/twitter\.com\/[^\s]+/g);
    if (urls.length > 0) {
      return urls
        .map((url) => url.replace("//twitter.com/", `//${env.FXTWITTER_URL}/`))
        .join("\n");
    } else {
      return null;
    }
  },
};
