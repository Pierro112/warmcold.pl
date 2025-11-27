import { useEffect, useRef } from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface GoogleMapsRouteProps {
  cityName: string;
  cityLat: number;
  cityLng: number;
  distance: number;
  className?: string;
}

const SZAMOTULY_LAT = 52.6122;
const SZAMOTULY_LNG = 16.5778;
const SZAMOTULY_ADDRESS = 'ul. Braci Czeskich 14, 64-500 Szamotuły';

export default function GoogleMapsRoute({
  cityName,
  cityLat,
  cityLng,
  distance,
  className = '',
}: GoogleMapsRouteProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if Google Maps API is loaded
    if (!window.google) {
      console.warn('Google Maps API not loaded');
      return;
    }

    if (!mapRef.current) return;

    // Initialize map
    const map = new google.maps.Map(mapRef.current, {
      zoom: 9,
      center: { lat: (SZAMOTULY_LAT + cityLat) / 2, lng: (SZAMOTULY_LNG + cityLng) / 2 },
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });

    // Add marker for Szamotuły (warm&cold HQ)
    new google.maps.Marker({
      position: { lat: SZAMOTULY_LAT, lng: SZAMOTULY_LNG },
      map,
      title: 'warm&cold - Szamotuły',
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="52" viewBox="0 0 40 52">
            <path d="M20 0C8.954 0 0 8.954 0 20c0 14 20 32 20 32s20-18 20-32c0-11.046-8.954-20-20-20z" fill="#25344c"/>
            <circle cx="20" cy="20" r="8" fill="white"/>
          </svg>
        `),
        scaledSize: new google.maps.Size(40, 52),
        anchor: new google.maps.Point(20, 52),
      },
    });

    // Add marker for destination city
    new google.maps.Marker({
      position: { lat: cityLat, lng: cityLng },
      map,
      title: cityName,
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 32 42">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 11.2 16 25.6 16 25.6s16-14.4 16-25.6c0-8.837-7.163-16-16-16z" fill="#ef4444"/>
            <circle cx="16" cy="16" r="6" fill="white"/>
          </svg>
        `),
        scaledSize: new google.maps.Size(32, 42),
        anchor: new google.maps.Point(16, 42),
      },
    });

    // Draw route
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map,
      suppressMarkers: true, // We already have custom markers
      polylineOptions: {
        strokeColor: '#25344c',
        strokeWeight: 4,
        strokeOpacity: 0.7,
      },
    });

    directionsService.route(
      {
        origin: { lat: SZAMOTULY_LAT, lng: SZAMOTULY_LNG },
        destination: { lat: cityLat, lng: cityLng },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === 'OK' && result) {
          directionsRenderer.setDirections(result);
        }
      }
    );
  }, [cityName, cityLat, cityLng]);

  const handleDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${SZAMOTULY_LAT},${SZAMOTULY_LNG}&destination=${cityLat},${cityLng}&travelmode=driving`;
    window.open(url, '_blank');
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
      {/* Map Container */}
      <div ref={mapRef} className="w-full h-[400px] bg-gray-100" />

      {/* Info Panel */}
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#25344c]/10 flex items-center justify-center">
            <MapPin className="h-6 w-6 text-[#25344c]" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#25344c] mb-1">Dojazd z Szamotuł</h3>
            <p className="text-gray-600">
              Obsługujemy <strong>{cityName}</strong> i okolice. Odległość z naszej siedziby to około <strong>{distance} km</strong>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#25344c] flex items-center justify-center">
            <Navigation className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1 text-sm">
            <p className="font-medium text-gray-900">Nasza siedziba:</p>
            <p className="text-gray-600">{SZAMOTULY_ADDRESS}</p>
          </div>
        </div>

        <button
          onClick={handleDirections}
          className="w-full py-3 px-4 bg-[#25344c] text-white font-medium rounded-lg hover:bg-[#2d3f5a] transition-colors flex items-center justify-center gap-2"
        >
          <Navigation className="h-5 w-5" />
          Wyznacz trasę w Google Maps
        </button>

        <p className="text-sm text-gray-500 text-center">
          Dojazd i wycena <strong>BEZPŁATNA</strong> w promieniu 50 km od Szamotuł
        </p>
      </div>
    </div>
  );
}

// TypeScript global declaration for Google Maps
declare global {
  interface Window {
    google: typeof google;
  }
}
