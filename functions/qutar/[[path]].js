export async function onRequest(context) {
  return new Response("DEBUG: The Function is ALIVE and matching this path!", {
    status: 200
  });
}