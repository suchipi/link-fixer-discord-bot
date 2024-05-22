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
    const urls = getUrls(
      content,
      /(?:\|\|\s?)?https?:\/\/x\.com\/[^\s]+(?:\s?\|\|)?/g,
    );
    if (urls.length > 0) {
      return urls
        .map((url) => url.replace("//x.com/", "//vxtwitter.com/"))
        .join("\n");
    } else {
      return null;
    }
  },
  "//twitter.com/": (content) => {
    const urls = getUrls(
      content,
      /(?:\|\|\s?)?https?:\/\/twitter\.com\/[^\s]+(?:\s?\|\|)?/g,
    );
    if (urls.length > 0) {
      return urls
        .map((url) => url.replace("//twitter.com/", "//vxtwitter.com/"))
        .join("\n");
    } else {
      return null;
    }
  },
  "//instagram.com/": (content) => {
    const urls = getUrls(
      content,
      /(?:\|\|\s?)?https?:\/\/instagram\.com\/[^\s]+(?:\s?\|\|)?/g,
    );
    if (urls.length > 0) {
      return urls
        .map((url) => url.replace("//instagram.com/", "//ddinstagram.com/"))
        .join("\n");
    } else {
      return null;
    }
  },
  "//www.instagram.com/": (content) => {
    const urls = getUrls(
      content,
      /(?:\|\|\s?)?https?:\/\/www\.instagram\.com\/[^\s]+(?:\s?\|\|)?/g,
    );
    if (urls.length > 0) {
      return urls
        .map((url) =>
          url.replace("//www.instagram.com/", "//www.ddinstagram.com/"),
        )
        .join("\n");
    } else {
      return null;
    }
  },
  "//tiktok.com/": (content) => {
    const urls = getUrls(
      content,
      /(?:\|\|\s?)?https?:\/\/tiktok\.com\/[^\s]+(?:\s?\|\|)?/g,
    );
    if (urls.length > 0) {
      return urls
        .map((url) => url.replace("//tiktok.com/", "//vxtiktok.com/"))
        .join("\n");
    } else {
      return null;
    }
  },
  "//www.tiktok.com/": (content) => {
    const urls = getUrls(
      content,
      /(?:\|\|\s?)?https?:\/\/www\.tiktok\.com\/[^\s]+(?:\s?\|\|)?/g,
    );
    if (urls.length > 0) {
      return urls
        .map((url) => url.replace("//www.tiktok.com/", "//www.vxtiktok.com/"))
        .join("\n");
    } else {
      return null;
    }
  },
  "//reddit.com/": (content) => {
    const urls = getUrls(
      content,
      /(?:\|\|\s?)?https?:\/\/reddit\.com\/[^\s]+(?:\s?\|\|)?/g,
    );
    if (urls.length > 0) {
      return urls
        .map((url) => url.replace("//reddit.com/", "//vxreddit.com/"))
        .join("\n");
    } else {
      return null;
    }
  },
  "//www.reddit.com/": (content) => {
    const urls = getUrls(
      content,
      /(?:\|\|\s?)?https?:\/\/www\.reddit\.com\/[^\s]+(?:\s?\|\|)?/g,
    );
    if (urls.length > 0) {
      return urls
        .map((url) => url.replace("//www.reddit.com/", "//www.vxreddit.com/"))
        .join("\n");
    } else {
      return null;
    }
  },

  "//pixiv.com/": (content) => {
    const urls = getUrls(
      content,
      /(?:\|\|\s?)?https?:\/\/pixiv\.com\/[^\s]+(?:\s?\|\|)?/g,
    );
    if (urls.length > 0) {
      return urls
        .map((url) => url.replace("//pixiv.com/", "//phixiv.com/"))
        .join("\n");
    } else {
      return null;
    }
  },
  "//www.pixiv.com/": (content) => {
    const urls = getUrls(
      content,
      /(?:\|\|\s?)?https?:\/\/www\.pixiv\.com\/[^\s]+(?:\s?\|\|)?/g,
    );
    if (urls.length > 0) {
      return urls
        .map((url) => url.replace("//www.pixiv.com/", "//www.phixiv.com/"))
        .join("\n");
    } else {
      return null;
    }
  },
  "//pixiv.net/": (content) => {
    const urls = getUrls(
      content,
      /(?:\|\|\s?)?https?:\/\/pixiv\.net\/[^\s]+(?:\s?\|\|)?/g,
    );
    if (urls.length > 0) {
      return urls
        .map((url) => url.replace("//pixiv.net/", "//phixiv.net/"))
        .join("\n");
    } else {
      return null;
    }
  },
  "//www.pixiv.net/": (content) => {
    const urls = getUrls(
      content,
      /(?:\|\|\s?)?https?:\/\/www\.pixiv\.net\/[^\s]+(?:\s?\|\|)?/g,
    );
    if (urls.length > 0) {
      return urls
        .map((url) => url.replace("//www.pixiv.net/", "//www.phixiv.net/"))
        .join("\n");
    } else {
      return null;
    }
  },
};
