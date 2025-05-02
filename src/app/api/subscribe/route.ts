import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    // Get the path to subscribers.txt
    const filePath = path.join(process.cwd(), 'data', 'subscribers.txt');
    
    // Read existing subscribers
    let content = '';
    try {
      content = await fs.readFile(filePath, 'utf8');
    } catch (error) {
      // File doesn't exist yet, that's okay
    }
    
    // Add new subscriber if not already present
    const subscribers = content.split('\n').filter(Boolean);
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      await fs.writeFile(filePath, subscribers.join('\n'));
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}