export default function page() {
  return (
    <div>
      <form action='api/time' method='POST' resquest={new Date()}>
        <button type='submit'>버튼</button>
      </form>
    </div>
  );
}
