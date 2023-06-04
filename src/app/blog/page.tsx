"use client";
import {FC, useEffect, useState} from "react";
import {MediumFeed, MediumFeedItem} from "@web/services/feed.service";
import {useRouter} from "next/navigation";

export const runtime = 'nodejs';

const Post: FC<{ data: MediumFeedItem }> = ({data}) => {
    const {push} = useRouter();

    return (
        <div
            className="flex flex-col max-w-sm bg-white px-6 py-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative aspect-w-16 aspect-h-9">
                <img
                    className="object-cover w-full h-full rounded-xl"
                    src={data.imageUrl}
                    alt={data.title}
                />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                {data.title}
            </h1>
            <div className="my-4 space-y-1">
                <div className="flex space-x-1">
                  <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                    <p>{data.publishedDate}</p>
                </div>
                <div className="flex space-x-1">
                      <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-indigo-600 mb-1.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                    <p>{data.tags.join(", ")}</p>
                </div>
                <div className="flex space-x-1">
                      <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-indigo-600 mb-1.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </span>
                    <p>{data.author}</p>
                </div>
            </div>
            <button
                onClick={() => push(data.link)}
                className="mt-auto text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg"
            >
                Read More
            </button>
        </div>
    );
};


export default function Home() {
    const [posts, setPosts] = useState<MediumFeedItem[]>();

    useEffect(() => {
        const getFeed = async () => {
            const response = await fetch(`/api/feed`).then(res => res.json()) as MediumFeed;

            setPosts(response.posts);
        }

        getFeed();
    }, []);

    return (
        <div>
            <div
                className="min-h-screen bg-gray-50 flex justify-center items-center py-20">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    {posts?.map((post, index) => (
                        <Post key={index} data={post}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
