import { Icon, Marker, layerGroup } from 'leaflet';
import { useRef, useEffect } from 'react';
import { PreviewOffer } from '../../types/offer';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { CenterCity, MapIconURL } from '../../const';

type MapProps = {
  offers: PreviewOffer[];
}

const passiveIcon = new Icon({
  iconUrl: MapIconURL.passiveIcon,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const activeIcon = new Icon({
  iconUrl: MapIconURL.activeIcon,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({offers} : MapProps) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, CenterCity[offers[0].city.name]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(passiveIcon
            // selectedPoint !== undefined && point.title === selectedPoint.title
            //   ? currentCustomIcon
            //   : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;