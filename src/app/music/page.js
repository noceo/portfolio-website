import { SWRConfig } from "swr";
import Music from "./music";

export default async function MusicWrapper() {
  // SWR hooks inside the `SWRConfig` boundary will use those values.
  return (
    // <SWRConfig value={{ article }}>
    <Music />
    // </SWRConfig>
  );
}
