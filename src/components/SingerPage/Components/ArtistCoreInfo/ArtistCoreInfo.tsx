import React from "react";
import { Artist } from "../../../../DbScheme.ts";
import styles from "./ArtistCoreInfo.module.css";
import DynamicImage from "../../../Common/DynamicImage/DynamicImage.tsx";
import SectionHeader from "../../../Common/Text/SectionHeader/SectionHeader.tsx";
import ParagraphHeader from "../../../Common/Text/ParagraphHeader/ParagraphHeader.tsx";
import IndentHeader from "../../../Common/Text/IndentHeader/IndentHeader.tsx";
import CommonText from "../../../Common/Text/CommonText/CommonText.tsx";

export function ArtistCoreInfo({ artist }: { artist: Artist }) {
  return (
    <section className={styles.ArtistCoreInfoSection}>
      <div className={styles.titleRoot}>
        <SectionHeader Data={artist.Name} style={{width: "390px"}}></SectionHeader>
        <ParagraphHeader Data={artist.Years}></ParagraphHeader>
      </div>
      <div className={styles.body}>
        <div className={styles.timeline}>
          {artist.Biography.map((e) => (
            <div className={styles.fact} key={e.info}>
              <div className={styles.Date}>
                <IndentHeader Data={e.date}></IndentHeader>
              </div>
              <CommonText Data={e.info} style={{width: "460px"}}></CommonText>
            </div>
          ))}
        </div>
        <DynamicImage
          Src={artist.Gallery[0]}
          Alt={artist.Name}
          Width="400px"
          Height="500px"
        ></DynamicImage>
      </div>
    </section>
  );
}
