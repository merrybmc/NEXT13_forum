import React from 'react';

export default function Write() {
  return (
    <div>
      글작성
      <form action='api/write' method='POST'>
        <button type='submit'>버튼</button>
      </form>
    </div>
  );
}
