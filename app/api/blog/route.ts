// src/app/api/posts/route.ts

import pool from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        // Connect to the MySQL database
        const connection = await pool.getConnection();

        try {
            // Fetch all posts with their body content and author data
            const [rows] = await connection.execute(`
                SELECT 
                    p.id, p.title, p.slug, p.category,p.slug,
                    p.mainImageSrc, p.mainImageCaption, p.authorId, p.createdAt as date, p.isFeature ,
                    a.id as authorId, a.author_name, a.avatar 
                FROM posts p
                LEFT JOIN author a ON p.authorId = a.id
            `) as [any[], any];

            if (rows.length === 0) {
                return NextResponse.json({ error: 'No posts found' }, { status: 404 });
            }

            // Structure the response to group body content under each post
            const posts = Object.values(
                rows.reduce((acc: any, row: any) => {
                    const {
                        id, title, category, slug,
                        mainImageSrc, authorId,
                        mainImageCaption, date, isFeature,
                        author_name, avatar
                    } = row;

                    if (!acc[id]) {
                        acc[id] = {
                            id,
                            description: title,
                            name: category,
                            imageSrc: mainImageSrc,
                            imageAlt: mainImageCaption,
                            slug,
                            isFeature,
                            date,
                            authorId,
                            author: author_name,
                            authorImageSrc: avatar
                        };
                    }
                    return acc;
                }, {})
            );

            return NextResponse.json(posts, { status: 200 });
        } finally {
            await connection.release();
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}
