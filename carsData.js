async function fetchData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
  );
  const cars = await response.json();

  return cars; // Mengembalikan data mobil tanpa objek
}

export const carsData = await fetchData();
