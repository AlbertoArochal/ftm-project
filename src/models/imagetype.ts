export type ImageType = {
    type: string;
    id: number;
    title: string;
    author: string;
    created_at: string;
    main_attachment: {
        big: string;
        small: string;
    };
    likes_count: number;
    liked: boolean;
    links: [
        {
            rel: string;
            uri: string;
            methods: string;
        },
        {
            rel: string;
            uri: string;
            methods: string;
        }
    ];
};
