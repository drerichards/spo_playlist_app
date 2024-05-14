import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Table, Tr, Td, Th, DummyHeader } from "./styles";
import { EXPLICIT_ICON } from "@/utils/assets";
import AudioPlayer from "../AudioPlayer";
import { PAUSE_ICON, PLAY_ICON } from "@/utils/assets";

interface TrackProps {
  tracks: Track[];
}

const TracksTable: React.FC<TrackProps> = ({ tracks }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>#</Th>
          <Th>Title</Th>
          <Th>Album</Th>
          <Th>Explicit</Th>
          <Th>Popularity</Th>
          <Th>f</Th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track, index) => (
          <Tr key={track.id}>
            <Td>{index + 1}</Td>
            <Td>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image
                  src={track.album.images[track.album.images.length - 1].url} // gets last one
                  alt="Album Art"
                  width={45}
                  height={45}
                  priority // load image faster if in viewport
                />
                <div style={{ marginLeft: "10px" }}>
                  <div>
                    <Link href={track.external_urls.spotify} passHref>
                      {track.name}
                    </Link>
                  </div>
                  <div>
                    {track.artists.map((artist, idx) => (
                      <span key={artist.id}>
                        <Link href={artist.external_urls.spotify} passHref>
                          {artist.name}
                        </Link>
                        {idx < track.artists.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Td>
            <Td>
              <Link href={track.album.external_urls.spotify} passHref>
                {track.album.name}
              </Link>
            </Td>
            <Td>
              {track.explicit ? (
                <div style={{ fill: "#B50F0F" }}>{EXPLICIT_ICON}</div>
              ) : (
                "-"
              )}
            </Td>
            <Td>{track.popularity}</Td>
            <Td>
              <AudioPlayer previewUrl={track.preview_url} />
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TracksTable;

// {tracks.map((track, index) => (
//     <tr key={track.id}>
//       <Td>{index + 1}</Td>
//       <Td>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <Image
//             src={track.album.href}
//             alt="Album Art"
//             width={50}
//             height={50}
//           />
//           <div style={{ marginLeft: "10px" }}>
//             <div>
//               <Link href={track.href} passHref>
//                 {track.name}
//               </Link>
//             </div>
//             <div>
//               {track.artists.map((artist, idx) => (
//                 <span key={artist.id}>
//                   <Link href={artist.href} passHref>
//                     {artist.name}
//                   </Link>
//                   {idx < track.artists.length - 1 ? ", " : ""}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Td>
//       <Td>
//         <Link href={track.album.href} passHref>
//           {track.album.name}
//         </Link>
//       </Td>
//       <Td>{track.explicit ? "Yes" : "No"}</Td>
//       <Td>{track.popularity}</Td>
//       <Td>
//         <button>Play/Pause</button>
//       </Td>
//     </tr>
//   ))}
