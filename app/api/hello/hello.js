import { NextResponse } from 'next/server'
export const GET = async (req, res) => {
    return new NextResponse({ 
        status: 200,
        body: { message: 'Hello World' }
    })
}