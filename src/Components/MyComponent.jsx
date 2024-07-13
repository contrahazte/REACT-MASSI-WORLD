import React from 'react';
import {useCurrentLocation }from './useCurrentLocation';

const MyComponent = () => {
  const { location, getCurrentLocation, error, loading } = useCurrentLocation();

  return (
    <div>
      {loading ? (
        'Loading...'
      ) : error ? (
        `Error: ${error}`
      ) : (
        `Latitude: ${location.latitude}, Longitude: ${location.longitude}`
      )}
      <button onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  );
};

export default MyComponent;