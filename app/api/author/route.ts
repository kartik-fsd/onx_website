import pool from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        // Connect to the MySQL database
        const connection = await pool.getConnection();
        // Fetch all posts with their body content
        try {
            const [rows] = await connection.execute(`
            SELECT id , author_name as name , avatar  FROM author`) as [object[], object];
            return NextResponse.json(rows, { status: 200 });
        } finally {
            await connection.release();
        }
    } catch (error) {
        console.error('Error fetching authors:', error);
        return NextResponse.json({ error: 'Failed to fetch authors' }, { status: 500 });
    }
}