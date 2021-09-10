import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import ReactMapboxGl from "react-mapbox-gl";
import styles from "../../../styles/MapBoxG.module.css";
import useStates from "../../../hooks/useState";
import { Height } from "@material-ui/icons";
import * as parkData from "../../data/skateboard-parks.json";
import handler from "../../../pages/api/hello";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoibmdvdW5zZTcxIiwiYSI6ImNrbXgxMWt2aDAwOGYzMWsxczRyM3I4NGMifQ.yzwLdIOYMciU71p9O2httQ";

const MapDispay = () => {
  const [state, setState]: any = useStates({
    viewPost: {
      latitude: 11.58018945114662,
      longitude: 104.89686953592626,
      zoom: 15,
      with: "80vw",
      height: "80vh",
    },
    selectedPark: null,
  });
  const { viewPost, selectedPark } = state;

  const [viewPort, setViewPort] = useState({
    latitude: 11.58018945114662,
    longitude: 104.89686953592626,
    width: "100%",
    height: "100%",
    zoom: 20,
  });

  useEffect(() => {
    const listener = (e: any) => {
      if (e.key === "Escape") {
        setState({ ...state, selectedPark: null });
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  const handleClickBtn = (park: any) => {
    setState({ ...state, selectedPark: park });
    console.log("you click", park);
  };
  return (
    <div className={styles.body}>
      <ReactMapGL
        {...viewPort}
        mapStyle="mapbox://styles/ngounse71/ckte6mg5e03bc18tafmiubmya"
        // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapboxApiAccessToken={
          "pk.eyJ1IjoibmdvdW5zZTcxIiwiYSI6ImNrbXgxMWt2aDAwOGYzMWsxczRyM3I4NGMifQ.yzwLdIOYMciU71p9O2httQ"
        }
        onViewportChange={(viewPort: any) => {
          setViewPort(viewPort);
        }}
      >
        {parkData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button onClick={() => handleClickBtn(park)}>
              <img
                className={styles.icon}
                src="https://i.pinimg.com/originals/83/f5/3d/83f53d97fa71ccb8684f3071f1ef6b69.jpg"
              ></img>
            </button>
          </Marker>
        ))}
        {selectedPark && (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => setState({ selectedPark: null })}
          >
            <h2>{selectedPark?.properties?.NAME}</h2>
            <p>{selectedPark?.properties?.FACILITY}</p>
            <p>{selectedPark?.properties?.DESCRIPTIO}</p>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default MapDispay;
