"use client"

import { useState, useEffect, useCallback, useRef } from "react"

export function useNavigationMorph(contentSwitchDelay = 300) {
  const [isCollapsed, setIsCollapsed] = useState(false)
<<<<<<< HEAD
  const [showTabBarsContent, setShowTabBarsContent] = useState(false)
=======
  const [showToolbarContent, setShowToolbarContent] = useState(false)
>>>>>>> 72f5e9a42557f609ed5df97c0146627fd02270af
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const isTransitioningRef = useRef(false)

  const toggleCollapse = useCallback(() => {
    if (isTransitioningRef.current) return
    isTransitioningRef.current = true
    setIsCollapsed((prev) => !prev)

    // Reset transition lock after animation completes
    setTimeout(() => {
      isTransitioningRef.current = false
    }, contentSwitchDelay + 100)
  }, [contentSwitchDelay])

  const collapse = useCallback(() => {
    if (!isCollapsed && !isTransitioningRef.current) {
      toggleCollapse()
    }
  }, [isCollapsed, toggleCollapse])

  const expand = useCallback(() => {
    if (isCollapsed && !isTransitioningRef.current) {
      toggleCollapse()
    }
  }, [isCollapsed, toggleCollapse])

  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    if (isCollapsed) {
<<<<<<< HEAD
      // Show tab bars content after delay
      timerRef.current = setTimeout(() => {
        setShowTabBarsContent(true)
      }, contentSwitchDelay)
    } else {
      // Hide tab bars content immediately when expanding
      setShowTabBarsContent(false)
=======
      // Show toolbar content after delay
      timerRef.current = setTimeout(() => {
        setShowToolbarContent(true)
      }, contentSwitchDelay)
    } else {
      // Hide toolbar content immediately when expanding
      setShowToolbarContent(false)
>>>>>>> 72f5e9a42557f609ed5df97c0146627fd02270af
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [isCollapsed, contentSwitchDelay])

  return {
    isCollapsed,
    showTabBarsContent,
    toggleCollapse,
    collapse,
    expand,
  }
}
