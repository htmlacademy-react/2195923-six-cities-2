import 'leaflet/dist/leaflet.css';
import { Icon, Marker, layerGroup } from 'leaflet';
import { useRef, useEffect } from 'react';
import { PreviewOffer, City } from '../../types/offer';
import useMap from '../../hooks/use-map';
import { MapIconURL } from '../../const';

type MapProps = {
  offers: PreviewOffer[];
  city: City;
  type: string;
  activeCard?: string;
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

function Map({offers, city, type, activeCard} : MapProps) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(offer.id === activeCard ? activeIcon : passiveIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCard]);

  return (
    <section className={`${type}__map map`} ref={mapRef}></section>
  );
}

export default Map;
