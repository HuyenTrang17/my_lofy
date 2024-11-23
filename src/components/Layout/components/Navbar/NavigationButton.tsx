import type { FC } from 'react';
import { Tooltip } from '../../../Tooltip';

interface NavigationButtonProps {
  onClick: () => void;
  text: string;
  icon: JSX.Element;
}
const NavigationButton: FC<NavigationButtonProps> = ({ onClick, text, icon }) => {
  return (
 
      <img src="D:\Tải về\clone new\spotify-react-web-client\src\components\Icons\674e9e787721928b6afab52b55966c6e.ico" alt="Navigation" style={{
          cursor: 'pointer', // Thêm hiệu ứng trỏ chuột nếu cần.
          width: '50px',     // Kích thước ảnh (chỉnh theo ý bạn).
          height: '50px',
        }} />
  );
};

export default NavigationButton;
