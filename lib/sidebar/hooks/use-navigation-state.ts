'use client';

import { useState, useCallback } from "react";

import { DEFAULT_ACTIVE_ITEM } from "@/lib/sidebar/navigation";
<<<<<<< HEAD
import { NavigationItemId } from "@/lib/sidebar/navigation";
=======
import { NavigationItemId } from "@/types/navigation";
>>>>>>> 72f5e9a42557f609ed5df97c0146627fd02270af

export function useNavigationState(initialItem: NavigationItemId = DEFAULT_ACTIVE_ITEM) {
  const [activeItem, setActiveItem] = useState<NavigationItemId>(initialItem);

  const handleItemClick = useCallback((id: NavigationItemId) => {
    setActiveItem(id);
  }, []);

  const resetToDefault = useCallback(() => {
    setActiveItem(DEFAULT_ACTIVE_ITEM);
  }, []);

  return {
    activeItem,
    setActiveItem: handleItemClick,
    resetToDefault,
  };
}
