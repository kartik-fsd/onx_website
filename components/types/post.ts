// src/types/post.ts

export type PostBody =
    | { type: 'quote'; quote: string }
    | { type: 'paragraph'; paragraph: string }
    | { type: 'image'; image: { src: string; caption: string } };

export interface Post {
    title: string;
    slug: string;
    category: string;
    description: string;
    src: string;
    caption: string;
    authorId: number;
    body: PostBody[];
    isFeature: Boolean;
    blog_read: number;
}

export type BodyField =
    | { paragraph: string }
    | { image: { src: string; caption: string } }
    | { subheading: string }
    | { quote: string };

export interface BlogFormData {
    title: string;
    slug: string;
    category: string;
    description: string;
    src: string;
    caption: string;
    authorId?: string;
    isFeature?: boolean;
    body: BodyField[];
    blog_read: number;
}

export interface BlogFormData {
    title: string;
    slug: string;
    category: string;
    description: string;
    mainImage: {
        src: string;
        caption: string;
    };
    authorId?: string;
    isFeature?: boolean;
    body: BodyField[];
    blog_read: number;
}

// Assuming BodyField has 'paragraph', 'image', and 'quote'
export type BodyFieldErrors = {
    body?: {
        [key: number]: {
            paragraph?: { message?: string };
            image?: {
                src?: { message?: string };
                caption?: { message?: string };
            };
            quote?: { message?: string };
        };
    };
};
