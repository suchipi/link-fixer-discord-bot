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

function replaceAndClean(content: string): string {
  let c = content.replace(/\/\/(x|twitter).com\//, `//${env.FXTWITTER_URL}/`);
  c = c.replace(/\?.*/, "");

  return c;
}

export const replacements: {
  [identifier: string]: (content: string) => string | null;
} = {
  "//x.com/": (content) => {
    const urls = getUrls(content, /https?:\/\/x\.com\/[^\s]+/g);
    if (urls.length > 0) {
      return urls.map((url) => replaceAndClean(url)).join("\n");
    } else {
      return null;
    }
  },
  "//twitter.com/": (content) => {
    const urls = getUrls(content, /https?:\/\/twitter\.com\/[^\s]+/g);
    if (urls.length > 0) {
      return urls.map((url) => replaceAndClean(url)).join("\n");
    } else {
      return null;
    }
  },
};
