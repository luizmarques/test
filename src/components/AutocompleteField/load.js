import { useLoadScript } from "@react-google-maps/api";
import { Alert, Spinner } from "react-bootstrap";

const libraries = ["places"];

export const LoadGoogleScript = ({ children }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries,
  });

  if (loadError) {
    return (
      <Alert variant="danger">
        Falha ao carregar o Google. Recarregue a página.
      </Alert>
    );
  }

  if (!isLoaded) {
    return (
      <Spinner animation="border" role="status" className="mr-2">
        <span className="sr-only">Carregando...</span>
      </Spinner>
    );
  }
  return children;
};
