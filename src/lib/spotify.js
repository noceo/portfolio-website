const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getTopTracks = async (
  limit = 10,
  offset = 0,
  time_range = "long_term"
) => {
  const { access_token } = await getAccessToken();
  const params = new URLSearchParams({
    limit,
    offset,
    time_range,
  });

  const response = await fetch(`${TOP_TRACKS_ENDPOINT}?${params}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response.json();
};
