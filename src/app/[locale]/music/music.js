"use client";

import useSWR from "swr";
import useFadeIn from "@/hooks/useFadeIn";
import Headline from "@/components/Headline";
import Button from "@/components/Button";
import Quote from "@/components/Quote";
import ArrowRight from "@/../public/icons/arrow_right.svg";
import ButtonPageTransition from "@/components/ButtonPageTransition";
import ArrowLeftIcon from "@/../public/icons/arrow_left.svg";
import React, { useEffect, useState } from "react";
import AudioCard from "@/components/AudioCard";

export const CurrentTrackContext = React.createContext();

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Music() {
  const { data, error, isLoading, isValidating } = useSWR(
    "/api/music",
    fetcher,
    { refreshInterval: 1000 }
  );
  const [currentTrack, setCurrentTrack] = useState();

  useEffect(() => {
    // window.onSpotifyIframeApiReady = (IFrameAPI) => {
    //   const element = document.getElementById('embed-iframe');
    //   const options = {
    //       uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
    //     };
    //   const callback = (EmbedController) => {};
    //   IFrameAPI.createController(element, options, callback);
    // };
  }, []);

  useEffect(() => {
    console.log(error);
    console.log(data);
  }, [data, error]);

  useFadeIn("right");

  return (
    <div className="page-music">
      <ButtonPageTransition
        className="link-back anime fade-in"
        location="/"
        redirectBack={true}
      >
        <ArrowLeftIcon />
      </ButtonPageTransition>
      <main>
        <div className="container-fluid">
          <div className="row anime fade-in">
            <div className="col-md-10 offset-md-1 col-lg-8 col-xl-6">
              <Headline copy1="musica." copy2="music." />
            </div>
          </div>
          <div className="row anime fade-in">
            <CurrentTrackContext.Provider
              value={{ currentTrack, setCurrentTrack }}
            >
              <section className="col-md-7 offset-md-1 col-xl-6">
                <h3>Top Tracks</h3>
                <p>
                  Curious what my all time favourites are? Have a look below.
                </p>
                {data &&
                  data.tracks.map((track) => (
                    <AudioCard
                      key={track.title}
                      title={track.title}
                      artist={track.artist}
                      imgSrc={track.imgSrc}
                      previewURL={track.previewURL}
                      externalURL={track.externalURL}
                    />
                  ))}
              </section>
              <section className="col-md-10 offset-md-1 col-xl-6">
                <h3>Favourite Playlists</h3>
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9gPDOAK0Yqv?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbITWG1ZJKYt?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </section>
            </CurrentTrackContext.Provider>
          </div>
        </div>
      </main>
    </div>
  );
}
