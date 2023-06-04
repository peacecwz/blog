import {getFeed} from "@web/services/feed.service";

export const runtime = 'edge';

export async function GET(request: Request) {
    const feeds = await getFeed('https://blog.barisceviz.com');

    return new Response(JSON.stringify(feeds), {
        status: 200,
    });
}
