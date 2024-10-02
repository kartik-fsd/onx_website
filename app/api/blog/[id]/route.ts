import pool from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        // Connect to the MySQL database
        const connection = await pool.getConnection();

        try {
            // Fetch the post by ID with its body content
            const [rows] = await connection.execute(`
                SELECT 
                    p.id, p.title, p.slug, p.category, p.description, 
                    p.mainImageSrc, p.mainImageCaption, p.authorId, p.createdAt as publishedAt ,
                    pb.type, pb.content, pb.src, pb.caption ,p.blog_read as estReadingTime
                FROM posts p
                LEFT JOIN post_body pb ON p.id = pb.postId
                WHERE p.id = ?
            `, [id]) as [any[], any];

            if (rows.length === 0) {
                return NextResponse.json({ error: 'Post not found' }, { status: 404 });
            }

            // Structure the response to group body content under the post
            const post = rows.reduce((acc: any, post: any) => {
                const {
                    id, title, slug, category, description,
                    mainImageSrc, mainImageCaption, authorId,
                    type, content, src, caption, publishedAt, estReadingTime
                } = post;

                if (!acc.id) {
                    acc = {
                        id,
                        title,
                        slug,
                        category,
                        description,
                        mainImage: {
                            src: mainImageSrc,
                            caption: mainImageCaption,
                        },
                        authorId,
                        body: [],
                        publishedAt,
                        estReadingTime
                    };
                }

                if (type === 'paragraph' || type === 'quote' || type === 'subheading') {
                    acc.body.push({ type, content });
                } else if (type === 'image') {
                    acc.body.push({ type, src, caption });
                }

                return acc;
            }, {});
            // Fetch author data using the existing API
            const authorResponse = await fetch(`${req.nextUrl.origin}/api/author/${post.authorId}`);
            if (!authorResponse.ok) {
                return NextResponse.json({ error: 'Failed to fetch author' }, { status: 500 });
            }

            const author = await authorResponse.json();
            post.author = author;

            return NextResponse.json(post, { status: 200 });
        } finally {
            await connection.release();
        }
    } catch (error) {
        console.error('Error fetching post:', error);
        return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
    }
}
