// Components
import { Col } from 'antd';
import { LibraryTitle } from '../Title';
import { ListItemComponent } from './ListCards';
import { CompactItemComponent } from './CompactCards';
import { LibraryFilters, SearchArea } from '../Filters';

// Redux
import { useAppDispatch, useAppSelector } from '../../../../../store/store';
import { getLibraryItems } from '../../../../../store/slices/yourLibrary';
import { GridItemComponent } from '../../../../Lists/list';
import { memo, useMemo } from 'react';
import { isActiveOnOtherDevice } from '../../../../../store/slices/spotify';
import useIsMobile from '../../../../../utils/isMobile';
import { getLibraryCollapsed, uiActions } from '../../../../../store/slices/ui';
import { LanguageButton } from '../Language';
import { LibraryLoginInfo } from './loginInfo';
import styles from "../../../../../styles/Sidebar.module.css"; // Import CSS module


const COLLAPSED_STYLE = {
  overflowY: 'scroll',
  height: '100%',
} as const;

const YourLibrary = () => {
  const collapsed = useAppSelector(getLibraryCollapsed);
  const user = useAppSelector((state) => !!state.auth.user);
  const activeOnOtherDevice = useAppSelector(isActiveOnOtherDevice);

  const heightValue = useMemo(() => {
    let value = 310;
    if (!user) value = 270;
    if (collapsed) value = 218;
    if (activeOnOtherDevice) value += 50;
    return value;
  }, [user, collapsed, activeOnOtherDevice]);

  return (
    <div className={styles.sidebar}>
<img src="/icons/signin_menu.png" alt="" />      <ul className={styles.menu}>
        <li className={styles.menuItem}>
        <img src="/icons/icon.png" alt="Thư viện" style={{
          padding:"10px"
        }} />
          Thư viện
        </li>
        <li className={`${styles.menuItem} ${styles.active}`}>
        <img src="/icons/icon1.png" alt="Thư viện" style={{
          padding:"10px"
        }} />           Khám phá
        </li>
        <li className={styles.menuItem}>
<img src="/icons/icon2.png" alt="Thư viện" style={{
          padding:"10px"
        }} />           #MylofyChart
        </li>
        <li className={styles.divider}></li>
        <li className={styles.menuItem}>
        <img src="/icons/icon3.png" alt="Thư viện" style={{
          padding:"10px"
        }} />          BXH mới
        </li>
        <li className={styles.menuItem}>
        <img src="/icons/icon4.png" alt="Thư viện" style={{
          padding:"10px"
        }} />          Chủ đề & Thể loại
        </li>
        <li className={styles.menuItem}>
        <img src="/icons/icon5.png" alt="Thư viện" style={{
          padding:"10px"
        }} />           Top 100
        </li>
      </ul>
    </div>
  );
};

const AnonymousContent = () => {
  return <LibraryLoginInfo />;
};

const LoggedContent = memo(() => {
  const isMobile = useIsMobile();
  const dispatch = useAppDispatch();
  const items = useAppSelector(getLibraryItems);
  const collapsed = useAppSelector(getLibraryCollapsed);
  const view = useAppSelector((state) => state.yourLibrary.view);

  return (
    <>
      {!collapsed ? <SearchArea /> : null}

      <div
        className={`${collapsed ? 'collapsed' : ''} ${
          !collapsed && view === 'GRID' ? 'grid-view' : ''
        }`}
      >
        {items.map((item) => {
          if (collapsed) return <ListItemComponent key={item.id} item={item} />;

          return (
            <div
              key={item.id}
              onClick={isMobile ? () => dispatch(uiActions.collapseLibrary()) : undefined}
            >
              {view === 'LIST' ? <ListItemComponent key={item.id} item={item} /> : ''}
              {view === 'COMPACT' ? <CompactItemComponent key={item.id} item={item} /> : ''}
              {view === 'GRID' ? <GridItemComponent key={item.id} item={item} /> : ''}
            </div>
          );
        })}
      </div>
    </>
  );
});

export default YourLibrary;
