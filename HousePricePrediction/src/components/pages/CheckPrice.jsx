import React, { useState } from "react";
import NavBar from "../NavBar";

export default function CheckPrice() {
  
  const [area, setArea] = useState(0);
  const [floors, setFloors] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [doors, setDoors] = useState(0);
  const [cupboards, setCupboards] = useState(0);
  const [windows, setWindows] = useState(0);
  const [price, setPrice] = useState(0);

  function calculatePrice(e) {
    e.preventDefault();
    let floorsCost = floors * 400000;
    let roomsCost = rooms * 250000;
    let doorsCost = doors * 20000;
    let cupboardsCost = cupboards * 15000;
    let windowsCost = windows * 15000;
    let totalCost = floorsCost + roomsCost + doorsCost + cupboardsCost + windowsCost;
    setPrice(totalCost);
  }

  return (
    <>
      <NavBar page="checkprice"/>
      <div className="container mt-5">
        <div class="card w-100">
          <div class="card-header">Fill the Form</div>
          <div class="card-body">
            <form onSubmit={calculatePrice}>
              <input
                class="form-control"
                type="number"
                placeholder="Enter area of house in fts.sq"
                aria-label="default input example"
                onChange={(e) => {
                  setArea(e.target.value);
                }}
              />
              <br />
              <input
                class="form-control"
                type="number"
                placeholder="Enter number of Floors"
                aria-label="default input example"
                onChange={(e) => {
                  setFloors(e.target.value);
                }}
              />
              <br />
              <input
                class="form-control"
                type="number"
                placeholder="Enter number of rooms"
                aria-label="default input example"
                onChange={(e) => {
                  setRooms(e.target.value);
                }}
              />
              <br />
              <input
                class="form-control"
                type="number"
                placeholder="Enter number of Doors"
                aria-label="default input example"
                onChange={(e) => {
                  setDoors(e.target.value);
                }}
              />
              <br />
              <input
                class="form-control"
                type="number"
                placeholder="Enter number of cupboards"
                aria-label="default input example"
                onChange={(e) => {
                  setCupboards(e.target.value);
                }}
              />
              <br />
              <input
                class="form-control"
                type="number"
                placeholder="Enter number of windows"
                aria-label="default input example"
                onChange={(e) => {
                  setWindows(e.target.value);
                }}
              />
              <br />
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Calculate Cost
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Details
                      </h1>
                    </div>
                    <div class="modal-body">
                      <table class="table">
                        {/* table-bordered border-dark */}
                        <tbody>
                          <tr>
                            <td>Area</td>
                            <td>{area} fts.sq</td>
                          </tr>
                          <tr>
                            <td>Floors</td>
                            <td>{floors}</td>
                          </tr>
                          <tr>
                            <td>Rooms</td>
                            <td>{rooms}</td>
                          </tr>
                          <tr>
                            <td>Doors</td>
                            <td>{doors}</td>
                          </tr>
                          <tr>
                            <td>Cupboards</td>
                            <td>{cupboards}</td>
                          </tr>
                          <tr>
                            <td>Windows</td>
                            <td>{windows}</td>
                          </tr>
                          <tr>
                            <td className="text-danger">Total Price</td>
                            <td className="text-danger">
                              ~ ₹ {price.toLocaleString("en-IN")}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
