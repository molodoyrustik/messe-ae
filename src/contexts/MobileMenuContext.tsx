'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MobileMenuContextType {
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

export const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ isDrawerOpen, setDrawerOpen, isModalOpen, setModalOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error('useMobileMenu must be used within a MobileMenuProvider');
  }
  return context;
};