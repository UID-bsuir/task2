import React from "react";
import { useParams } from "react-router-dom";
import { useDatabase } from "../../DataContext.tsx";
import styles from "./SingerPage.module.css";
import { useMemo } from "react";
import NotFoundPage from "../404Page/404Page.tsx";
import { ArtistCoreInfo } from "./Components/ArtistCoreInfo/ArtistCoreInfo.tsx";
import { Artist } from "../../DbScheme.ts";
import SectionHeader from "../Common/Text/SectionHeader/SectionHeader.tsx";
import CommonText from "../Common/Text/CommonText/CommonText.tsx";
import Map from "./Components/Map/Map.tsx";

function getEmbeded(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

function SingerPage() {
  const db = useDatabase();
  const { id } = useParams();

  const artist: Artist | undefined = useMemo(
    () => db.Artists.find((e) => e.ID == id),
    [id, db]
  );

  if (artist === undefined) return <NotFoundPage />;


  return (
    <>
      <ArtistCoreInfo artist={artist} />

      <section className={styles.CommonPlaces}>
        <SectionHeader Data={db.ArtistPage.Places.Title} style={{marginBottom: "100px"}}></SectionHeader>
        <div className={styles.placesBody}>
          <div className={styles.placesDesc}>
            <CommonText Data={artist.Places.Description}></CommonText>
          </div>
          <Map 
            Data={{
              Latitude: +artist.Places.Latitude, 
              Longitude: +artist.Places.Longitude, 
              Title: artist.Places.Title,
            }}
            style={{ width: "100%", height: "600px" }}></Map>
        </div>
      </section>

      <section className={styles.VideSection}>
        <SectionHeader style={{marginBottom: "50px"}} Data={db.ArtistPage.Video.Title}></SectionHeader>
        <iframe
          height={750}
          width="90%"
          src={"http://www.youtube.com/embed/" + getEmbeded(artist.Video.Link)}
          frameBorder="0"
          allowFullScreen
        />
      </section>

      <section>
        <SectionHeader style={{marginBottom: "50px"}} Data={db.ArtistPage.Gallery.Title}></SectionHeader>
        <div className={styles.galleryRoot}>
          {artist.Gallery.map((e) => (
            <img src={process.env.PUBLIC_URL + e} key={e} />
          ))}
        </div>
      </section>
    </>
  );
}

export default SingerPage;
