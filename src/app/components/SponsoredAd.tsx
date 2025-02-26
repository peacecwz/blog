'use client';

import React, { useEffect, useState } from 'react';
import { DeviceType, useDeviceType } from '../utils/deviceDetection';

// Ad configuration for different device types
interface AdConfig {
  href: string;
  imgSrc: string;
  alt: string;
}

const adConfigs: Record<DeviceType, AdConfig> = {
  [DeviceType.DESKTOP]: {
    href: 'https://www.awin1.com/cread.php?s=3812151&v=110194&q=507293&r=1826916',
    imgSrc: 'https://www.awin1.com/cshow.php?s=3812151&v=110194&q=507293&r=1826916',
    alt: 'Desktop Advertisement from tapis.nl'
  },
  [DeviceType.TABLET]: {
    href: 'https://www.awin1.com/cread.php?s=3812162&v=110194&q=507293&r=1826916',
    imgSrc: 'https://www.awin1.com/cshow.php?s=3812162&v=110194&q=507293&r=1826916',
    alt: 'Tablet Advertisement from tapis.nl'
  },
  [DeviceType.MOBILE]: {
    href: 'https://www.awin1.com/cread.php?s=3812160&v=110194&q=507293&r=1826916',
    imgSrc: 'https://www.awin1.com/cshow.php?s=3812160&v=110194&q=507293&r=1826916',
    alt: 'Mobile Advertisement from tapis.nl'
  }
};

export default function SponsoredAd() {
  // Use state to handle client-side rendering
  const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.DESKTOP);
  const [isClient, setIsClient] = useState(false);

  // Effect to update device type after mount
  useEffect(() => {
    setIsClient(true);
    const detectDeviceType = useDeviceType();
    setDeviceType(detectDeviceType);

    // Handle window resize
    const handleResize = () => {
      setDeviceType(useDeviceType());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get the appropriate ad configuration
  const adConfig = adConfigs[deviceType];

  // Don't render anything during SSR to prevent hydration mismatch
  if (!isClient) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-white rounded-lg shadow-lg p-4 z-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* START ADVERTISER: tapis.nl from awin.com */}
      <a
        rel="sponsored"
        href={adConfig.href}
        className="block"
        target="_blank"
      >
        <img
          src={adConfig.imgSrc}
          alt={adConfig.alt}
          className="w-full h-auto rounded"
          width={deviceType === DeviceType.MOBILE ? 300 : 
                 deviceType === DeviceType.TABLET ? 400 : 500}
          height={deviceType === DeviceType.MOBILE ? 250 : 
                  deviceType === DeviceType.TABLET ? 300 : 400}
        />
      </a>
      {/* END ADVERTISER: tapis.nl from awin.com */}
    </div>
  );
}
