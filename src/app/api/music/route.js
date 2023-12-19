import { getTopTracks } from "@/lib/spotify";

export async function GET() {
  const { items } = await getTopTracks();

  const tracks = items.map((track) => ({
    title: track.name,
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    previewURL: track.preview_url,
    externalURL: track.external_urls.spotify,
    imgSrc: track.album.images?.[0].url,
  }));

  console.log(tracks);
  return Response.json({ tracks });
}
