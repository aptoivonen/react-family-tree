import React, { useEffect, useRef } from 'react';
import { create } from 'pinch-zoom-pan';

interface PinchZoomPanProps {
  children: React.ReactNode;
}

const MIN = 0.5;
const MAX = 2.5;
const CAPTURE_WHEEL = true;

const PinchZoomPan = React.memo(function PinchZoomPan({
  children,
}: PinchZoomPanProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const canvas = create({
      element,
      minZoom: MIN,
      maxZoom: MAX,
      captureWheel: CAPTURE_WHEEL,
    });
    // eslint-disable-next-line consistent-return
    return canvas.destroy;
  }, []);

  return (
    <div
      ref={root}
      className="relative h-full [transform:translateZ(0)] overflow-hidden"
    >
      <div className="absolute w-0 h-0 translate-x-0 translate-y-0 scale-100 origin-center will-change-transform">
        <div className="absolute -translate-y-1/2 -translate-x-1/2">
          {children}
        </div>
      </div>
    </div>
  );
});

export default PinchZoomPan;
