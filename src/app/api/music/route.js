import { getTopTracks } from "@/lib/spotify";

export async function GET() {
  const { items } = await getTopTracks();

  const tracks = items.map((track) => ({
    title: track.name,
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
  }));

  console.log(tracks);
  return Response.json({ tracks });
}
