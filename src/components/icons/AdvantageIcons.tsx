import Image from 'next/image';

export const IFESIcon = () => (
  <Image 
    src="/icons/ifes-icon-color.svg" 
    alt="IFES" 
    width={109} 
    height={40}
    style={{ width: 'auto', height: '100%', objectFit: 'contain' }}
  />
);

export const EUIcon = () => (
  <Image 
    src="/icons/eu-icon-color.svg" 
    alt="EU" 
    width={40} 
    height={40}
    style={{ width: 'auto', height: '100%', objectFit: 'contain' }}
  />
);

export const BoxesIcon = () => (
  <Image 
    src="/icons/boxes-icon-color.svg" 
    alt="Own Production" 
    width={40} 
    height={40}
    style={{ width: 'auto', height: '100%', objectFit: 'contain' }}
  />
);

export const SupportIcon = () => (
  <Image 
    src="/icons/support-icon-color.svg" 
    alt="Trusted Support" 
    width={40} 
    height={40}
    style={{ width: 'auto', height: '100%', objectFit: 'contain' }}
  />
);