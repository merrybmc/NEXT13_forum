import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';

export default async function List() {
  const db = (await connectDB).db('forum');
  //   const client = await connectDB;
  //   const db = client.db('forum'); // db 연결
  let result = await db.collection('post').find().toArray(); // post 컬렉션에 있는 모든 정보 가져오기

  return (
    <div className='list-bg'>
      {result?.map((data) => {
        return (
          //   <Link href={`/detail/${data._id}`}>
          <DetailLink id={data._id}>
            <div className='list-item' key={data.id}>
              <h4>{data.title}</h4>
              <p>{data.content}</p>
            </div>
          </DetailLink>
          //   </Link>
        );
      })}
    </div>
  );
}
