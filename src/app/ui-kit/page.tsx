'use client';

import UIKitLayout, { defaultUIKitSections } from '../../components/ui-kit/UIKitLayout';
import ColorPalette from '../../components/ui-kit/ColorPalette';
import TypographyShowcase from '../../components/ui-kit/TypographyShowcase';
import ButtonShowcase from '../../components/ui-kit/ButtonShowcase';

export default function UIKitPage() {
  const sections = [
    {
      ...defaultUIKitSections[0],
      component: <ColorPalette />,
    },
    {
      ...defaultUIKitSections[1],
      component: <TypographyShowcase />,
    },
    {
      ...defaultUIKitSections[2],
      component: <ButtonShowcase />,
    },
  ];

  return <UIKitLayout sections={sections} />;
}
