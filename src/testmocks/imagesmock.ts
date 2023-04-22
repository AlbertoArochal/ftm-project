import { ImageType } from "../models/imagetype";

export const ImagesMock: ImageType[] = [
    {
        type: "image",
        id: 1,
        title: "Image 1",
        author: "Author 1",
        created_at: "2020-01-01",
        main_attachment: {
            big: "https://picsum.photos/200/300",
            small: "https://picsum.photos/200/300",
        },
        likes_count: 1,
        liked: false,
        links: [
            {
                rel: "self",
                uri: "https://picsum.photos/200/300",
                methods: "GET",
            },
            {
                rel: "like",
                uri: "https://picsum.photos/200/300",
                methods: "POST",
            },
        ],
    },

    {
        type: "image",
        id: 2,
        title: "Image 2",
        author: "Author 2",
        created_at: "2020-01-01",
        main_attachment: {
            big: "https://picsum.photos/200/300",
            small: "https://picsum.photos/200/300",
        },
        likes_count: 1,
        liked: false,
        links: [
            {
                rel: "self",
                uri: "https://picsum.photos/200/300",
                methods: "GET",
            },
            {
                rel: "like",
                uri: "https://picsum.photos/200/300",
                methods: "POST",
            },
        ],
    },
];
