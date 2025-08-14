import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export default function usePageTracking(trackingId: string) {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(trackingId);
  }, [trackingId]);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);
}
