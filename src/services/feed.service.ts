import { XMLParser } from "fast-xml-parser";

export interface MediumFeed {
    title: string;
    description: string;
    link: string;
    lastUpdatedDate: string;
    imageUrl: string;
    posts: MediumFeedItem[];
}

export interface MediumFeedItem {
    id: string;
    title: string;
    imageUrl: string;
    author: string;
    link: string;
    content: string;
    publishedDate: string;
    lastUpdatedDate: string;
    tags: string[];
}

export const getFeed = async (blogUrl: string): Promise<MediumFeed> => {
    const parser = new XMLParser();
    const xmlFeed = await fetch(
        `https://medium.com/m/global-identity-2?redirectUrl=${encodeURI(
            blogUrl
        )}%2Ffeed`,
        {
            method: "GET",
            redirect: "follow",
        }
    ).then((res) => res.text());
    const {
        rss: {
            channel: {
                title,
                description,
                link,
                lastBuildDate,
                image: {url: imageUrl},
                item,
            },
        },
    } = parser.parse(xmlFeed);
    const result: MediumFeed = {
        title: title,
        description: description,
        imageUrl: imageUrl,
        lastUpdatedDate: lastBuildDate,
        link: link,
        posts: item.map(
            (i: any) =>
                <MediumFeedItem>{
                    id: i.guid,
                    content: i["content:encoded"],
                    imageUrl: exportImage(i["content:encoded"]),
                    author: i["dc:creator"],
                    lastUpdatedDate: i["atom:updated"],
                    link: i["link"],
                    publishedDate: i["pubDate"],
                    tags: i["category"],
                    title: i["title"],
                }
        ),
    };

    return result;
};

const exportImage = (html: string) => {
    const figureFirst = html
        .substring(0, html.indexOf("</figure>"))
        .replace("</figure>", "");

    const img = figureFirst
        .substring(figureFirst.indexOf("<figure>"))
        .replace("<figure>", "");

    const src = img.substring(img.indexOf('src="')).replace('src="', "");

    return src.substring(0, src.indexOf('"')).replace('"', "").trim();
};
