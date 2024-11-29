// Components
import { Col, Row } from 'antd';
import { HomeHeader } from './header';
import { TopTracks } from '../components/topTracks';
import { MadeForYou } from '../components/madeForYou';
import { NewReleases } from '../components/newReleases';
import { FeaturePlaylists } from '../components/featurePlaylists';

// Utils
import { FC, memo, RefObject, useRef, useState } from 'react';
import { RecentlyPlayed } from '../components/recentlyPlayed';
import { TopMixes } from '../components/topMixes';
import { useAppSelector } from '../../../store/store';
import { Rankings } from '../components/rankings';
import { Trending } from '../components/trending';
import { FavouriteArtists } from '../components/favouriteArtists';
import { YourPlaylists } from '../components/yourPlaylists';
import useIsMobile from '../../../utils/isMobile';

interface HomePageContainerProps {
  container: RefObject<HTMLDivElement>;
}

const HomePageContainer: FC<HomePageContainerProps> = memo((props) => {
  const { container } = props;
  const [color, setColor] = useState('rgb(66, 32, 35)');

  const isMobile = useIsMobile();
  const sectionContainerRef = useRef<HTMLDivElement>(null);
  const user = useAppSelector((state) => !!state.auth.user);
  const section = useAppSelector((state) => state.home.section);

  return (
    <div ref={sectionContainerRef}>
      <HomeHeader color={color} container={container} sectionContainer={sectionContainerRef} />
      <div
        className='Home-seccion'
        style={{
          paddingTop: isMobile ? 50 : 0,
          transition: 'background: 5s',
          background:" #1C1C1E !important"

        }}
      >
        <Row gutter={user ? [16, 16] : undefined}>
          <img src="https://s3-alpha-sig.figma.com/img/49e1/9ad8/d8fcbf0bfb2daa51bd1e8a7e893c8ff8?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aEaWDFCgDfBw8NxZYNaagSwi9PrySPVyLo0FF420LYPgGXEr69uVilDPwb7Xgy--niOhR9wBCpY3U6qo2zsJ8BpdB8a4jUJCpbQ1smfeCyGSmS8fQ56u1ZJ~mfwoZxkqYP5X5KOdaZKUjTs0q6W7--RY3yvTDBfcIedtewtSpQCA1uSKh~Of2cwvlm6LhYK7RtdUGStSjYmjgb8oc-bK0m2sLvrhSRemkAGuHPZCvDhK9f8xwaz3EI3dBIfULIQ56z4vsINdVS8SDL3wdM8EYmrHeuH-V7rjGa6z6K5F6GF7AIxv8v32NfrhvEVjivZs1knCgQ7NgKhIT0Qowp~FeA"
            style={{
              width: "100%",
              height: "302.05px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              margin: "20px auto",
              display: "block",
              background:" #1C1C1E !important"

            }}
          />
          <div style={{
            display: "flex", width: "100%", height: "200px"
          }}>
            <img
              src="/images/banner/1731418510778_org.jpg"
              alt="Banner"
              style={{
                width: '25%', height: 'auto',
                border: '15px solid black',
                borderRadius: '24px'
              }}
            />
            <img
              src="/images/banner/1731593959331_org.jpg"
              alt="Banner"
              style={{
                width: '25%', height: 'auto',
                border: '15px solid black',
                borderRadius: '24px'
              }}
            />
            <img
              src="/images/banner/1731675560589_org.jpg"
              alt="Banner"
              style={{
                width: '25%', height: 'auto',
                border: '15px solid black',
                borderRadius: '24px'
              }}
            />
            <img
              src="/images/banner/1731675908040_org.jpg"
              alt="Banner"
              style={{
                width: '25%', height: 'auto',
                border: '15px solid black',
                borderRadius: '24px'
              }}
            />
          </div>

          {/* {user ? (
            <Col span={24}>
              <MadeForYou />
            </Col>
          ) : null}

          {user ? (
            <Col span={24}>
              <TopMixes />
            </Col>
          ) : null}

          {user && section === 'ALL' ? (
            <Col span={24}>
              <RecentlyPlayed />
            </Col>
          ) : null}

          <Col span={24}>
            <FeaturePlaylists />
          </Col> */}

          {/* {user ? (
            <Col span={24}>
              <YourPlaylists />
            </Col>
          ) : null} */}

          <Col span={24}>
            <NewReleases />
          </Col>

          {/* {!user || section === 'MUSIC' ? (
            <Col span={24}>
              <Rankings />
            </Col>
          ) : null}

          {!user || section === 'MUSIC' ? (
            <Col span={24}>
              <Trending />
            </Col>
          ) : null}

          {user && section === 'ALL' ? (
            <Col span={24}>
              <FavouriteArtists />
            </Col>
          ) : null} */}
        </Row>
      </div>
    </div>
  );
});

export default HomePageContainer;
