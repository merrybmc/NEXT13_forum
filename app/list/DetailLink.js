'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function DetailLink({ id, children }) {
  // 13v 부터는 빈괄호 생략
  const router = useRouter();

  const onNavigateDetailPage = () => {
    router.push(`/detail/${id}`);
  };
  return <button onClick={onNavigateDetailPage}>{children}</button>;
}
