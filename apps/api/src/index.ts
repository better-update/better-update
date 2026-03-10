export default {
  fetch(_request, _env, _ctx) {
    return new Response("Hello from API");
  },
} satisfies ExportedHandler<Env>;
