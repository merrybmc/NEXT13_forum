import { connectDB } from '@/util/database';

export async function GET(request) {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  return new Response(console.log(result));
}
