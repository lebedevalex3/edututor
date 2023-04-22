import React, { useEffect, useState } from 'react';

const GeoGebra = ({
  appName = 'classic',
  materialId = '',
  width = 800,
  height = 600,
  showToolBar = false,
  showAlgebraInput = false,
  showMenuBar = false,
  showZoomButtons = false,
  enableShiftDragZoom = false,
  showFullscreenButton = true,
}) => {
  const [ggbScriptLoaded, setGgbScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.geogebra.org/apps/deployggb.js';
    script.async = true;
    script.onload = () => setGgbScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!materialId) {
      console.error('Invalid GeoGebra material ID');
      return;
    }

    if (!ggbScriptLoaded) {
      return;
    }

    const ggbApplet = new window.GGBApplet(
      {
        appName,
        width,
        height,
        showToolBar,
        showAlgebraInput,
        showMenuBar,
        showZoomButtons,
        enableShiftDragZoom,
        showFullscreenButton,
        material_id: materialId,
      },
      true
    );

    ggbApplet.inject('ggb-element');
  }, [
    appName,
    materialId,
    width,
    height,
    showToolBar,
    showAlgebraInput,
    showMenuBar,
    showZoomButtons,
    enableShiftDragZoom,
    showFullscreenButton,
    ggbScriptLoaded,
  ]);

  return <div id="ggb-element"></div>;
};

export default GeoGebra;
