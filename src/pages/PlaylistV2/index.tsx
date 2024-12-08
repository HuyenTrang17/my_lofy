// Components
import { PlaylistList } from './table';
import { PlaylistHeaderV2 } from './headerV2';

// Utils
import { useParams } from 'react-router-dom';
import { getImageAnalysis2 } from '../../utils/imageAnyliser';
import { FC, RefObject, useEffect, useRef, useState } from 'react';

// Redux
import { playlistActions } from '../../store/slices/playlist';
import { useAppDispatch, useAppSelector } from '../../store/store';

// Constants
import { DEFAULT_PAGE_COLOR } from '../../constants/spotify';
import tinycolor from 'tinycolor2';

const PlaylistViewV2: FC<{ container: RefObject<HTMLDivElement> }> = (props) => {
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const { playlistId } = useParams<{ playlistId: string }>();

  const [color, setColor] = useState<string>(DEFAULT_PAGE_COLOR);
  const playlist = useAppSelector((state) => state.playlist.playlist);

  useEffect(() => {
    if (playlist && playlist.images?.length) {
      getImageAnalysis2(playlist?.images[0].url).then((color) => {
        let item = tinycolor(color);
        while (item.isLight()) {
          item = item.darken(10);
        }
        setColor(item.toHexString());
      });
    }
  }, [playlist]);

  useEffect(() => {
    if (playlistId) {
      dispatch(playlistActions.fetchPlaylist(playlistId));
    }
    return () => {
      dispatch(playlistActions.setPlaylist({ playlist: null }));
    };
  }, [dispatch, playlistId]);

  if (!playlist) return null;

  return (
    <div style={{ 
                background:"#1C1C1E",

    }}>
 <div className='Playlist-section' ref={containerRef} style={{display:"flex"}}>
      <PlaylistHeaderV2 color={color} container={props.container} sectionContainer={containerRef}  />
      <PlaylistList color={color} />
    </div>
    <img src="/images/danhsachcasi.png" alt="" style={{
        padding:"24px"
    }} />

    </div>
   
  );
};

PlaylistViewV2.displayName = 'PlaylistView';

export default PlaylistViewV2;
