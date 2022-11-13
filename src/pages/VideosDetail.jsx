import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideosDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section>
      <article>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/M7lc1UVf-VE?${video.id}`}
          frameborder="0"
        ></iframe>
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
        </div>
        <pre>{description}</pre>
      </article>
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
