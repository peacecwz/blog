'use client';

// Device type enum
export enum DeviceType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

// Function to detect device type based on user agent and screen size
export function useDeviceDetection(): DeviceType {
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
  // This can only run on the client side
  if (typeof window === 'undefined') {
    return DeviceType.DESKTOP; // Default for SSR
  }

  return useDeviceDetection();
}
