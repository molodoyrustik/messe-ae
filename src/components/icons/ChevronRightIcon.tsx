import { SvgIcon, SvgIconProps } from '@mui/material';

export default function ChevronRightIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <path 
        d="M6.75 13.5L11.25 9L6.75 4.5" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
}