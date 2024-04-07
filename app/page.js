import { connectDB } from '@/util/database';

export default async function Home() {
  // DB 입출력 코드는 서버 컴포넌트 안에서 쓰기 권장
  const client = await connectDB;
  const db = client.db('forum'); // db 연결
  let result = await db.collection('post').find().toArray(); // post 컬렉션에 있는 모든 정보 가져오기

  console.log(result);
  return (
    <div>
      {result[0]?.title} {result[0]?.content}
    </div>
  );
}
