import { Howl, Howler } from "howler";
import PlayIcon from "@/../public/icons/play.svg";
import PauseIcon from "@/../public/icons/pause.svg";
// import ProgressIcon from "";
import { useContext, useEffect, useRef, useState } from "react";
import { CurrentTrackContext } from "@/app/[locale]/music/music";

const fadeOutTime = 4000;

export default function AudioCard({
  title,
  artist,
  imgSrc,
  previewURL,
  externalURL,
}) {
  const [isPlaying, setPlaying] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFading, setFading] = useState(false);

  const audio = useRef();
  const progressIntervalID = useRef();
  const fadeOutTimeoutID = useRef();

  const currentTrackContext = useContext(CurrentTrackContext);

  useEffect(() => {
    audio.current = new Howl({
      src: [previewURL],
      html5: true,
    });

    audio.current.on("play", () => {
      currentTrackContext.setCurrentTrack(previewURL);
      fadeOutTimeoutID.current = setTimeout(() => {
        audio.current.fade(1, 0, fadeOutTime);
      }, (audio.current.duration() - audio.current.seek()) * 1000 - fadeOutTime);
    });

    audio.current.on("pause", () => {
      clearTimeout(fadeOutTimeoutID.current);
    });

    audio.current.on("end", () => {
      console.log("END");
      clearInterval(progressIntervalID.current);
      setPlaying(false);
      setProgress(0);
    });
  }, []);

  useEffect(() => {
    if (currentTrackContext.currentTrack !== previewURL) {
      audio.current.pause();
      clearInterval(progressIntervalID.current);
      setPlaying(false);
    }
  }, [currentTrackContext.currentTrack]);

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  const calcProgress = () => {
    const currentPosition = audio.current.seek();
    const duration = audio.current.duration();
    setProgress(currentPosition / duration);
  };

  const togglePlay = () => {
    if (audio.current.playing()) {
      clearInterval(progressIntervalID.current);
      // calcProgress();
      audio.current.pause();
    } else {
      progressIntervalID.current = setInterval(() => {
        calcProgress();
      }, 1000);
      audio.current.play();
    }
    setPlaying((prev) => !prev);
  };

  const renderControls = () => {
    if (isLoading) return <span class="loader"></span>;
    return isPlaying ? <PauseIcon /> : <PlayIcon />;
  };

  return (
    <div className="audio-card">
      <div className="audio-cover interactable">
        <img src={imgSrc} />
        <div
          className="audio-cover__controls"
          onClick={togglePlay}
          style={isPlaying ? { opacity: "1" } : null}
        >
          {renderControls()}
          <div className="progress-circle">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                r="25"
                cx="25"
                cy="25"
                stroke="#ffffff"
                fill="transparent"
                strokeWidth="5"
                strokeLinecap="butt"
                strokeDashoffset={`${157.08 - progress * 157.08}px`}
                strokeDasharray="157.08px"
                style={
                  isPlaying
                    ? { transition: "stroke-dashoffset 0.5s ease-in-out" }
                    : null
                }
              ></circle>
            </svg>
          </div>
        </div>
      </div>
      <div className="audio-info">
        <a href={externalURL} target="_blank">
          <span className="audio-info__title">{title}</span>
          <span className="audio-info__artist">{artist}</span>
        </a>
      </div>
    </div>
  );
}
