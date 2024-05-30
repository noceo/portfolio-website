"use client";

import useSWR from "swr";
import useFadeIn from "@/hooks/useFadeIn";
import Headline from "@/components/Headline";
import ButtonPageTransition from "@/components/ButtonPageTransition";
import ArrowLeftIcon from "@/../public/icons/arrow_left.svg";
import React, { useEffect, useRef, useState } from "react";
import AudioCard from "@/components/AudioCard";

export const CurrentTrackContext = React.createContext();

const fetcher = (url) => fetch(url).then((r) => r.json());

const spotifyPlaylistURIs = [
  "spotify:playlist:37i9dQZF1DX9gPDOAK0Yqv",
  "spotify:playlist:37i9dQZF1DXbITWG1ZJKYt",
  // "https://open.spotify.com/embed/playlist/37i9dQZF1DX9gPDOAK0Yqv?utm_source=generator&theme=0",
  // "https://open.spotify.com/embed/playlist/37i9dQZF1DXbITWG1ZJKYt?utm_source=generator",
];

export default function Music() {
  const { data, error } = useSWR("/api/music", fetcher);
  const [currentTrack, setCurrentTrack] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const iFrameControllers = useRef([]);
  const currentTrackRef = useRef();
  currentTrackRef.current = currentTrack;
  const currentIFrameControllerRef = useRef(null);

  useEffect(() => {
    if (currentIFrameControllerRef.current !== null && currentTrack) {
      iFrameControllers.current[currentIFrameControllerRef.current].pause();
    }
  }, [currentTrack]);

  useEffect(() => {
    const spotifyControllers = [];
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      const elements = document.getElementsByClassName("embed-iframe");
      let i = 0;
      while (elements.length) {
        const options = {
          uri: spotifyPlaylistURIs[i],
        };
        const callback = (controller) => {
          spotifyControllers.push(controller);
          controller.addListener("playback_update", (e) => {
            // Stop current track playback if iframe starts to play
            currentIFrameControllerRef.current = Array.prototype.indexOf.call(
              controller.iframeElement.parentNode.children,
              controller.iframeElement
            );

            if (currentTrackRef.current && !e.data.isPaused) {
              setCurrentTrack(null);
            }
          });
        };
        IFrameAPI.createController(elements[0], options, callback);
        i++;
      }
      iFrameControllers.current = spotifyControllers;
    };
  }, []);

  useFadeIn("right");

  function onBackButtonClick() {
    setCurrentTrack(null);
  }

  return (
    <div className="page-music">
      <ButtonPageTransition
        className="link-back anime fade-in"
        location="/"
        redirectBack={true}
        onBeforeTransition={onBackButtonClick}
      >
        <ArrowLeftIcon />
      </ButtonPageTransition>
      <main>
        <div className="container">
          <div className="row anime fade-in">
            <div className="col-md-10 offset-md-1 col-lg-8 col-xl-6">
              <Headline copy1="musica." copy2="music." />
            </div>
          </div>
          <div className="row anime fade-in">
            <section className="col-md-7 offset-md-1 col-xl-6">
              <h3>Top Tracks</h3>
              <p>Curious what my all time favourites are? Have a look below.</p>
              {data &&
                data.tracks.map((track) => (
                  <AudioCard
                    key={track.title}
                    title={track.title}
                    artist={track.artist}
                    imgSrc={track.imgSrc}
                    previewURL={track.previewURL}
                    externalURL={track.externalURL}
                    currentTrack={currentTrack}
                    setCurrentTrack={setCurrentTrack}
                  />
                ))}
            </section>
            <section className="col-md-10 offset-md-1 col-xl-6">
              <h3>Favourite Playlists</h3>
              <div>
                {spotifyPlaylistURIs.map((url, i) => (
                  <div key={url} data-id={i} className="embed-iframe" />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
