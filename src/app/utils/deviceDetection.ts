'use client';

import { useEffect, useState } from 'react';

// Device type enum
export enum DeviceType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

// Function to detect device type based on user agent and screen size
// This is a regular function, not a hook
export function detectDeviceType(): DeviceType {
  // This can only run on the client side
  if (typeof window === 'undefined') {
    return DeviceType.DESKTOP; // Default for SSR
  }

  // Get the current window width
  const width = window.innerWidth;

  // Check for mobile devices first via user agent
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobileUserAgent = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

  // Determine device type based on screen width
  // Common breakpoints: Mobile < 768px, Tablet 768px-1024px, Desktop > 1024px
  if (width < 768 || (isMobileUserAgent && width < 1024)) {
    return DeviceType.MOBILE;
  } else if (width >= 768 && width <= 1024) {
    return DeviceType.TABLET;
  } else {
    return DeviceType.DESKTOP;
  }
}

// Hook to get device type and handle window resize
export function useDeviceType(): DeviceType {
  // Always initialize with a default value
  const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.DESKTOP);
  
  // Use effect to update the device type after mount and on resize
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    
    // Set the initial device type
    setDeviceType(detectDeviceType());
    
    // Create the resize handler
    const handleResize = () => {
      setDeviceType(detectDeviceType());
    };
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return deviceType;
}
