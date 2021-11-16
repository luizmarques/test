import { Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { FormField } from "../FormField";
import { LoadGoogleScript } from "./load";

const AutocompleteField = ({ label, value, onChange, ...inputProps }) => {
  const autoCompleteRef = useRef();

  const handleChange = () => {
    const place = autoCompleteRef.current.getPlace();
    if (place.formatted_address) {
      const address = {
        address: place.formatted_address,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      onChange(address);
    }
  };
  return (
    <LoadGoogleScript>
      <Autocomplete
        onLoad={(autocomplete) => (autoCompleteRef.current = autocomplete)}
        onPlaceChanged={handleChange}
        restrictions={{
          country: "br",
        }}
        bounds={undefined}
      >
        <FormField
          {...inputProps}
          label={label}
          placeholder={inputProps.placeholder}
          defaultValue={value?.address}
          onChange={(e) => onChange(undefined)}
        />
      </Autocomplete>
    </LoadGoogleScript>
  );
};

export default AutocompleteField;

//  avo  =   joão (autocompletar)
//  filho  =   pedro (AutocompleteField)
//  neto  =   tiago (input)
