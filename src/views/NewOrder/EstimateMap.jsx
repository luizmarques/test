import { useSelector } from "react-redux";
import { LoadGoogleScript } from "../../components/AutocompleteField/load";
import { GoogleMap, Marker } from "@react-google-maps/api";
import styled from "styled-components";
import pinA from "../../assets/pin-a.svg";
import pinB from "../../assets/pin-b.svg";

const EstimateMap = () => {
  const currentEstimate = useSelector((state) => state.order.currentEstimate);

  const handleLoadMap = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    if (!!currentEstimate.pickupAddress) {
      bounds.extend({
        lat: currentEstimate?.pickupAddress?.lat,
        lng: currentEstimate?.pickupAddress?.lng,
      });
      bounds.extend({
        lat: currentEstimate?.deliveryAddress?.lat,
        lng: currentEstimate?.deliveryAddress?.lng,
      });

      map.setCenter(bounds.getCenter());
      map.fitBounds(bounds);
    }
  };

  return (
    <GoogleMapWrap>
      <LoadGoogleScript>
        <GoogleMap
          mapContainerStyle={{
            minHeight: 330,
            minWidth: 440,
            flex: "1",
          }}
          center={{ lat: 0, lng: 0 }}
          zoom={15}
          onLoad={handleLoadMap}
          clickableIcons={false}
          options={{
            disableDefaultUI: true,
            disableDoubleClickZoom: true,
            draggable: false,
            draggableCursor: "pointer",
          }}
        >
          <Marker
            icon={pinA}
            position={{
              lat: currentEstimate.pickupAddress.lat,
              lng: currentEstimate.pickupAddress.lng,
            }}
          />
          <Marker
            icon={pinB}
            position={{
              lat: currentEstimate.deliveryAddress.lat,
              lng: currentEstimate.deliveryAddress.lng,
            }}
          />
        </GoogleMap>
      </LoadGoogleScript>
    </GoogleMapWrap>
  );
};

export default EstimateMap;

const GoogleMapWrap = styled.div`
  a[href^="http://maps.google.com/maps"]
  {
    display: none !important;
  }
  a[href^="https://maps.google.com/maps"]
  {
    display: none !important;
  }
  .gmnoprint a,
  .gmnoprint span,
  .gm-style-cc {
    display: none;
  }
  .gmnoprint div {
    background: none !important;
  }
`;
