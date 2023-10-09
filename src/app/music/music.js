"use client";

import useSWR from "swr";
import useFadeIn from "@/hooks/useFadeIn";
import Headline from "@/components/Headline";
import Button from "@/components/Button";
import Quote from "@/components/Quote";
import ArrowRight from "../../../public/icons/arrow_right.svg";
import ButtonPageTransition from "@/components/ButtonPageTransition";
import ArrowLeftIcon from "../../../public/icons/arrow_left.svg";
import { useEffect } from "react";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Music() {
  const { data, error, isLoading, isValidating } = useSWR("/api/music", fetcher, { refreshInterval: 10000000 });

  useEffect(() => {
    console.log(error);
    console.log(data);
  }, [data, error]);

  useFadeIn("right");

  return (
    <div className="page-about">
      <ButtonPageTransition className="link-back anime fade-in" location="/" redirectBack={true}>
        <ArrowLeftIcon />
      </ButtonPageTransition>
      <main>
        {data && (
          <ul>
            {data.tracks.map((track) => (
              <li key={track.title}>{track.title}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
