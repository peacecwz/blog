import {getFeed} from "@web/services/feed.service";

export const runtime = 'edge';

const locales: Record<string, string> = {
    'en': 'english',
    'tr': 'turkish'
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const locale = url.searchParams.get('locale');

    let feeds = (await getFeed('https://blog.barisceviz.com')).posts;

    if (locale && locales[locale]) {
        feeds = feeds.filter((post) => post.tags.includes(locales[locale]));
    }

    return new Response(JSON.stringify(feeds), {
        status: 200,
    });
}
