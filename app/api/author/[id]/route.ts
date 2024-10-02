import pool from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { RowDataPacket } from 'mysql2'; // Import the RowDataPacket type

// Define a type for the expected structure of the author data
interface AuthorRow extends RowDataPacket {
    id: number;
    name: string;
    avatar: string;
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        // Fetch the author by ID and typecast the result as an array of AuthorRow
        const [rows] = await pool.query<AuthorRow[]>( // Explicitly type the query result
            `
      SELECT id, author_name AS name, avatar ,bio
      FROM author 
      WHERE id = ? 
    `,
            [id]
        );

        // Check if the author exists
        if (!Array.isArray(rows) || rows.length === 0) {
            return NextResponse.json({ error: 'Author not found' }, { status: 404 });
        }

        // Extract author details from the first row
        const { id: authorId, name, avatar, bio } = rows[0];

        // Structure the response object
        const author = {
            id: authorId,
            name,
            avatar,
            bio,
            slug: {
                current: name,
            },
        };

        return NextResponse.json(author, { status: 200 });
    } catch (error) {
        console.error('Error fetching author:', error);
        return NextResponse.json({ error: 'Failed to fetch author' }, { status: 500 });
    }
}
