import { SvgIcon, SvgIconProps } from '@mui/material';

export default function FilterIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path 
        d="M5 7.5C4.44772 7.5 4 7.94772 4 8.5C4 9.05228 4.44772 9.5 5 9.5V7.5ZM5 8.5V9.5H11.5V8.5V7.5H5V8.5Z" 
        fill="currentColor"
      />
      <path 
        d="M19 15.5C19.5523 15.5 20 15.0523 20 14.5C20 13.9477 19.5523 13.5 19 13.5V15.5ZM19 14.5V13.5H13V14.5V15.5H19V14.5Z" 
        fill="currentColor"
      />
      <path 
        d="M19 9.5C19.5523 9.5 20 9.05228 20 8.5C20 7.94772 19.5523 7.5 19 7.5L19 9.5ZM19 8.5L19 7.5L16 7.5L16 8.5L16 9.5L19 9.5L19 8.5Z" 
        fill="currentColor"
      />
      <path 
        d="M5 15.5C4.44772 15.5 4 15.0523 4 14.5C4 13.9477 4.44772 13.5 5 13.5L5 15.5ZM5 14.5L5 13.5L8.5 13.5L8.5 14.5L8.5 15.5L5 15.5L5 14.5Z" 
        fill="currentColor"
      />
      <circle 
        cx="13.75" 
        cy="8.5" 
        r="1.5" 
        stroke="currentColor" 
        strokeWidth="2"
        fill="none"
      />
      <circle 
        cx="10.75" 
        cy="14.5" 
        r="1.5" 
        stroke="currentColor" 
        strokeWidth="2"
        fill="none"
      />
    </SvgIcon>
  );
}