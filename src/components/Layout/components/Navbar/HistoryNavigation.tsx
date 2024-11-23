import { Space } from 'antd';

import NavigationButton from './NavigationButton';
import ForwardBackwardsButton from './ForwardBackwardsButton';

import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { FaSpotify } from 'react-icons/fa6';

const HistoryNavigation = memo(() => {
  const { t } = useTranslation(['navbar']);
  return (
    <Space>
            <img src="/icons/674e9e787721928b6afab52b55966c6e.ico" alt="Navigation" style={{
          cursor: 'pointer', // Thêm hiệu ứng trỏ chuột nếu cần.
          width: '185.45px',     // Kích thước ảnh (chỉnh theo ý bạn).
          height: '50px',
        }} />

      <div className='flex flex-row items-center gap-2 h-full'>
        <ForwardBackwardsButton flip />
        <ForwardBackwardsButton flip={false} />
      </div>
    </Space>
  );
});

export default HistoryNavigation;
