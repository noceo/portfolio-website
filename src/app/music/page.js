import { SWRConfig } from "swr";
import Music from "./music";

export default async function MusicWrapper() {
  // SWR hooks inside the `SWRConfig` boundary will use those values.
  return (
    // <SWRConfig value={{ article }}>
    <>
      <Music />
      <script src="https://open.spotify.com/embed-podcast/iframe-api/v1" async></script>
    </>
    // </SWRConfig>
  );
}
