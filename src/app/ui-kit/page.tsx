'use client';

import UIKitLayout, { defaultUIKitSections } from '../../components/ui-kit/UIKitLayout';
import ColorPalette from '../../components/ui-kit/ColorPalette';
import TypographyShowcase from '../../components/ui-kit/TypographyShowcase';
import ButtonShowcase from '../../components/ui-kit/ButtonShowcase';
import FormShowcase from '../../components/ui-kit/FormShowcase';
import ChipShowcase from '../../components/ui-kit/ChipShowcase';
import MenuShowcase from '../../components/ui-kit/MenuShowcase';

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
    {
      ...defaultUIKitSections[3],
      component: <FormShowcase />,
    },
    {
      ...defaultUIKitSections[4],
      component: <ChipShowcase />,
    },
    {
      ...defaultUIKitSections[5],
      component: <MenuShowcase />,
    },
  ];

  return <UIKitLayout sections={sections} />;
}
