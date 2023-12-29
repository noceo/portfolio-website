import { SWRConfig } from "swr";
import Music from "./music";

export default async function MusicWrapper() {
  return (
    // <SWRConfig value={{ article }}>
    <>
      <Music />
      <script
        src="https://open.spotify.com/embed-podcast/iframe-api/v1"
        async
      ></script>
    </>
    // </SWRConfig>
  );
}
