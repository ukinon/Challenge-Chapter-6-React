import { useContext, useState } from "react";
import { CarContext } from "../contexts/FilterContext";

function CarFilterBox() {
  const { carFilter } = useContext(CarContext);
  const [filter, setFilter] = useState({
    type: "",
    date: "",
    time: "",
    capacity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    carFilter(filter.type, filter.date, filter.time, filter.capacity);
    console.log(filter);
  };

  return (
    <div
      className="d-flex justify-content-center w-100 bg-white position-absolute text-start "
      id="box"
    >
      <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <div
          className="p-4 position-absolute bg-white shadow-lg w-75 rounded-3 d-flex flex-column flex-lg-row justify-content-center gap-2"
          style={{ marginTop: "-40px" }}
        >
          <div className="d-flex flex-column w-100 justify-content-between">
            <label htmlFor="tipe">Tipe Driver</label>
            <select
              className="form-select form-select-sm p-2 input"
              style={{ fontSize: "small" }}
              id="tipe"
              aria-label="Default select example"
              name="type"
              onChange={handleInputChange}
            >
              <option value="default">Pilih Tipe Driver</option>
              <option value={true}>Dengan Sopir</option>
              <option value={false}>Tanpa Sopir (Lepas Kunci)</option>
            </select>
          </div>

          <div className="d-flex flex-column w-100 justify-content-between">
            <label htmlFor="tanggal">Tanggal</label>
            <input
              id="tanggal"
              style={{ fontSize: "small" }}
              type="date"
              className="input p-2 pe-2 ps-2 border rounded-1 border-1"
              name="date"
              onChange={handleInputChange}
            />
          </div>

          <div className="d-flex flex-column w-100 justify-content-between">
            <label htmlFor="waktu">Waktu Jemput/Ambil</label>
            <select
              style={{ fontSize: "small" }}
              className="form-select form-select-sm p-2 input"
              id="waktu"
              aria-label="Default select example"
              name="time"
              onChange={handleInputChange}
            >
              <option defaultValue={null} value="false">
                Pilih Waktu
              </option>
              <option value="08:00">08:00 WIB</option>
              <option value="09:00">09:00 WIB</option>
              <option value="10:00">10:00 WIB</option>
              <option value="11:00">11:00 WIB</option>
              <option value="12:00">12:00 WIB</option>
            </select>
          </div>

          <div className="d-flex flex-column w-100 justify-content-between">
            <label htmlFor="jumlah">Jumlah Penumpang (opsional)</label>
            <div className="input-group">
              <input
                type="number"
                id="jumlah"
                placeholder="Jumlah Penumpang"
                style={{ fontSize: "small" }}
                className="form-control border-end-0 rounded-start-1 input"
                name="capacity"
                onChange={handleInputChange}
              />
              <span className="input-group-text border-start-0 bg-white rounded-end-1">
                <i data-feather="users" className="w-75"></i>
              </span>
            </div>
          </div>

          <div className="d-flex align-items-end w-50">
            <button
              style={{ backgroundColor: "#5CB85F", fontSize: "small" }}
              type="submit"
              className="w-100 h-auto p-2 btn text-white rounded-1"
              id="load-btn"
            >
              Cari Mobil
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarFilterBox;
