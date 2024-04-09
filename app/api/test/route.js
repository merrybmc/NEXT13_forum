export async function GET(request) {
  return new Response(console.log('123'));
  // return response.status(200).json('처리완료');
}
