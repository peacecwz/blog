'use client';

import React, { useState } from 'react';

export default function Sponsored() {
    return (
        <div className="fixed bottom-5 right-5 bg-white rounded-lg shadow-lg p-4 z-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* START ADVERTISER: tapis.nl from awin.com */}
            <a
                rel="sponsored"
                href="https://www.awin1.com/cread.php?s=3812148&v=110194&q=507293&r=1826916"
                className="block"
            >
                <img
                    src="https://www.awin1.com/cshow.php?s=3812148&v=110194&q=507293&r=1826916"
                    alt="Advertisement from tapis.nl"
                    className="w-full h-auto rounded"
                />
            </a>
            {/* END ADVERTISER: tapis.nl from awin.com */}
        </div>
    );
}