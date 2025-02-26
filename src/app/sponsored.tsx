import React from 'react';
import dynamic from 'next/dynamic';

// Import the client component with dynamic import to ensure it only runs on the client
const SponsoredClient = dynamic(() => import('./components/sponsored.client'), {
  ssr: false // This ensures the component only renders on the client side
});

export default function Sponsored() {
  return <SponsoredClient />;
}