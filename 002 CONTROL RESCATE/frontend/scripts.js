let userLocation = null;

// Solicita permiso para acceder al GPS
function requestLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      switchToMainScreen();
    },
    (error) => {
      alert("Se requiere acceso al GPS para continuar.");
    }
  );
}

// Cambia de la pantalla de bienvenida a la pantalla principal
function switchToMainScreen() {
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainScreen = document.getElementById("main-screen");

  welcomeScreen.style.display = "none";
  mainScreen.style.display = "block";

  initMap();
}

// Inicializa el mapa de Google Maps
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: userLocation || { lat: 40.4168, lng: -3.7038 }, // Madrid por defecto
  });

  // Muestra la posición del usuario
  if (userLocation) {
    new google.maps.Marker({
      position: userLocation,
      map,
      title: "Tu posición",
      icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    });
  }

  // Simula otros vehículos cercanos
  addNearbyVehicles(map);
}

// Agrega marcadores para otros vehículos
function addNearbyVehicles(map) {
  const vehicles = [
    { lat: 40.45, lng: -3.7, status: "listening" },
    { lat: 40.42, lng: -3.75, status: "collaborating" },
    { lat: 40.43, lng: -3.72, status: "emergency" },
  ];

  vehicles.forEach((vehicle, index) => {
    const markerColor =
      vehicle.status === "listening"
        ? "yellow"
        : vehicle.status === "collaborating"
        ? "green"
        : "red";

    new google.maps.Marker({
      position: { lat: vehicle.lat, lng: vehicle.lng },
      map,
      title: `Vehículo ${index + 1}`,
      icon: `http://maps.google.com/mapfiles/ms/icons/${markerColor}-dot.png`,
    });
  });
}

// Cierra la aplicación y limpia los datos
function logout() {
  userLocation = null;
  alert("Cerrando sesión y limpiando datos.");
  location.reload(); // Recarga la página para limpiar el estado
}
