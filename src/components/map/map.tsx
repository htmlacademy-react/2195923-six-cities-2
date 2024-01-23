import 'leaflet/dist/leaflet.css';
import { Icon, Marker, layerGroup } from 'leaflet';
import { useRef, useEffect } from 'react';
import { PreviewOffer, CityName, City } from '../../types/offer';
import useMap from '../../hooks/use-map';
import { MapIconURL, Cities } from '../../const';
import { getActiveCard } from '../../store/offer-data/offer-data.selectors';
import { useAppSelector } from '../../hooks/use-app-selector';

type MapProps = {
  offers: (PreviewOffer | undefined)[];
  cityName: CityName;
  type: string;
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

function Map({offers, cityName, type} : MapProps) {
  const activeCard = useAppSelector(getActiveCard);
  const cityLocation = (Cities.find((city) => city.name === cityName) as City).location;

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        if (offer) {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          });
          marker
            .setIcon(offer.id === activeCard ? activeIcon : passiveIcon)
            .addTo(markerLayer);
        }
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
