//get the value from url

const urlParams = new URLSearchParams(window.location.search);
var from1 = urlParams.get("FromCity1");
var to1 = urlParams.get("ToCity1");
var from2 = urlParams.get("FromCity2");
var to2 = urlParams.get("ToCity2");
var TripType = urlParams.get("TripType");
var CabinType = urlParams.get("CabinType");
var resultrandom = Math.floor(Math.random() * 14) + 1;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
// Used like so
var airlinesArray = [
  "./assets/images/c&b_AC.png",
  "./assets/images/c&b_airasia.png",
  "./assets/images/c&b_aircanada.png",
  "./assets/images/c&b_airchina.png",
  "./assets/images/c&b_airIndia.png",
  "./assets/images/c&b_americanAirlines.png",
  "./assets/images/c&b_CopaAirline.png",
  "./assets/images/c&b_egyptAir.png",
  "./assets/images/c&b_LD.png",
  "./assets/images/c&b_OA.png",
  "./assets/images/c&b_QA.png",
  "./assets/images/c&b_turkishAirlines.png",
  "./assets/images/c&b_UA.png",
  "./assets/images/c&b_united.png",
];
shuffle(airlinesArray);
var resultArray = Array(resultrandom);
var priceArray = Array.from({ length: resultArray.length }, () =>
  Math.floor(Math.random() * 9000)
);
const minValue = Math.min(...priceArray);
const maxValue = Math.max(...priceArray);

$("#minRangePrice").text("₹" + minValue);
$("#maxRangePrice").text("₹" + maxValue);

var baggageArray = Array.from(
  { length: resultArray.length },
  () => Math.floor(Math.random() * 2) + 1
);

var seatsAvalaibleArray = Array.from(
  { length: resultArray.length },
  () => Math.floor(Math.random() * 10) + 1
);
var stopsArray = Array.from({ length: resultArray.length }, () =>
  Math.floor(Math.random() * 3)
);
var stopsArray2 = Array.from({ length: resultArray.length }, () =>
  Math.floor(Math.random() * 3)
);

var depResultTime = Array.from({ length: resultArray.length }, () => {
  hrs = Math.round(Math.random() * 24);
  mins = Math.round(Math.random() * 60);
  return hrs + ":" + mins;
});
var arrResultTime = Array.from({ length: resultArray.length }, () => {
  hrs = Math.round(Math.random() * 24);
  mins = Math.round(Math.random() * 60);
  return hrs + ":" + mins;
});
var depResultTime2 = Array.from({ length: resultArray.length }, () => {
  hrs = Math.round(Math.random() * 24);
  mins = Math.round(Math.random() * 60);
  return hrs + ":" + mins;
});
var arrResultTime2 = Array.from({ length: resultArray.length }, () => {
  hrs = Math.round(Math.random() * 24);
  mins = Math.round(Math.random() * 60);
  return hrs + ":" + mins;
});

var hoursTravel = Array.from({ length: resultArray.length }, () => {
  hrs = Math.round(Math.random() * 24);
  return hrs;
});
var minsTravel = Array.from({ length: resultArray.length }, () => {
  mins = Math.round(Math.random() * 24);
  return mins;
});
var hoursTravel2 = Array.from({ length: resultArray.length }, () => {
  hrs = Math.round(Math.random() * 24);
  return hrs;
});
var minsTravel2 = Array.from({ length: resultArray.length }, () => {
  mins = Math.round(Math.random() * 24);
  return mins;
});

for (let i = 0; i < resultArray.length; i++) {
  // const element = array[i];
  if (TripType == "oneway") {
    var resultTextHtml = `<div class="result-box mt-2 p-4">
  <div class="row align-items-center text-center">
    <div class="col-md-9 border-left-dot">
      <div class="row align-items-center text-center">
        <div class="col">
          <div
            class="result-box-img d-flex justify-content-center"
          >
            <img
              src="${airlinesArray[i]}"
              alt="c&b_airasia"
              class=""
            />
          </div>
        </div>
        <div class="col">
          <div class="result-box-deptime">
            <h5>${depResultTime[i]}</h5>
            <p>${from1}</p>
          </div>
        </div>
        <div class="col">
          <div class="result-box-stops">
            <h6>${hoursTravel[i]} h ${minsTravel[i]} m</h6>
            <p>${stopsArray[i]} stop(s)</p>
          </div>
        </div>
        <div class="col">
          <div class="result-box-returntime">
            <h5>${arrResultTime[i]}</h5>
            <p>${to1}</p>
          </div>
        </div>
        <div class="col">
          <div class="result-box-price">
            <h5 class="m-0 p-0">₹${priceArray[i]}</h5>
            <span class="m-0 p-0">per Adult</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="result-box-flight-details text-start mt-3">
            <a
              href="#collapseExample${i}"
              class="primary-text-color"
              data-bs-toggle="collapse"
              >Flight Details</a
            >
          </div>
          <div class="collapse mt-3" id="collapseExample${i}">
            <ul
              class="nav nav-tabs mb-3"
              id="ex-with-icons${i}"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="ex-with-icons-tab-1${i}"
                  data-mdb-toggle="tab"
                  href="#ex-with-icons-tabs-1${i}"
                  role="tab"
                  aria-controls="ex-with-icons-tabs-1${i}"
                  aria-selected="true"
                  ><i class="fa fa-plane fa-fw me-2"></i
                  >Flights</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="ex-with-icons-tab-2${i}"
                  data-mdb-toggle="tab"
                  href="#ex-with-icons-tabs-2${i}"
                  role="tab"
                  aria-controls="ex-with-icons-tabs-2${i}"
                  aria-selected="false"
                  ><i class="fa fa-suitcase fa-fw me-2"></i
                  >Baggage</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="ex-with-icons-tab-3${i}"
                  data-mdb-toggle="tab"
                  href="#ex-with-icons-tabs-3${i}"
                  role="tab"
                  aria-controls="ex-with-icons-tabs-3${i}"
                  aria-selected="false"
                  ><i
                    class="fa fa-indian-rupee-sign fa-fw me-2"
                  ></i
                  >Fare Summary</a
                >
              </li>
            </ul>

            <div class="tab-content" id="ex-with-icons-content${i}">
              <div
                class="tab-pane fade show active"
                id="ex-with-icons-tabs-1${i}"
                role="tabpanel"
                aria-labelledby="ex-with-icons-tab-1"
              >
                <div class="card text-start">
                  <div class="card-header">
                    <span>${from1} </span
                    ><i class="fa fa-arrow-right"></i
                    ><span class="ms-1">${to1}</span>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 border-left-dot">
                        <div class="flight-details-left">
                          <p>Airlines</p>
                          <p class="mt-3">Stops</p>
                          <p class="mt-3">Trip Type</p>
                          <p class="mt-3">Class</p>
                          <p class="mt-3">Seats</p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="flight-details-right">
                          <img
                            src="${airlinesArray[i]}"
                            alt=""
                          />
                          <p class="mt-3">${stopsArray[i]}</p>
                          <p class="mt-3 text-capitalize">${TripType}</p>
                          <p class="mt-3 text-capitalize">${CabinType}</p>
                          <p class="mt-3 text-capitalize">${seatsAvalaibleArray[i]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="ex-with-icons-tabs-2${i}"
                role="tabpanel"
                aria-labelledby="ex-with-icons-tab-2"
              >
                <div class="card text-start">
                  <div class="card-header">Baggage Details</div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 border-left-dot">
                        <div class="baggage-details-left">
                          <p>Hands on Baggage</p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="baggage-details-right">
                          <p>0${baggageArray[i]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="ex-with-icons-tabs-3${i}"
                role="tabpanel"
                aria-labelledby="ex-with-icons-tab-3${i}"
              >
                <div class="card text-start">
                  <div class="card-header">Fare Details</div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 border-left-dot">
                        <div class="fare-details-left">
                          <h5 class="">Total Price</h5>
                          <p class="mt-2">Base Fare</p>
                          <p class="mt-2">Surcharges</p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="fare-details-right">
                          <h5 class="">₹${priceArray[i]}</h5>
                          <p class="mt-2">₹0</p>
                          <p class="mt-2">₹0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="btn btn-common w-100">Book Now</div>
    </div>
  </div>
</div>`;
    $(".result-append").append(resultTextHtml);
  } else if (TripType == "round-trip") {
    var resultTextHtml = `<div class="result-box mt-2 p-4">
    <div class="row align-items-center text-center">
      <div class="col-md-9 border-left-dot">
        <h6 class="text-start round-trip-heading p-2">
          Departure <i class="fa fa-arrow-right fs-6"></i> Return
        </h6>
        <div class="row align-items-center text-center mt-3">
          <div class="col">
            <div
              class="result-box-img d-flex justify-content-center"
            >
              <img
                src="${airlinesArray[i]}"
                alt="c&b_airasia"
                class=""
              />
            </div>
          </div>
          <div class="col">
            <div class="result-box-deptime">
              <h5>${depResultTime[i]}</h5>
              <p>${from1}</p>
            </div>
          </div>
          <div class="col">
            <div class="result-box-stops">
              <h6>${hoursTravel[i]} h ${minsTravel[i]} m</h6>
              <p>${stopsArray[i]} stop(s)</p>
            </div>
          </div>
          <div class="col">
            <div class="result-box-returntime">
              <h5>${arrResultTime[i]}</h5>
              <p>${to1}</p>
            </div>
          </div>
          <div class="col invisible">
            <div class="result-box-price">
              <h5 class="m-0 p-0">₹7895</h5>
              <span class="m-0 p-0">per Adult</span>
            </div>
          </div>
        </div>

        <div class="row align-items-center text-center mt-5">
          <div class="col">
            <div
              class="result-box-img d-flex justify-content-center"
            >
              <img
                src="${airlinesArray[i]}"
                alt="c&b_airasia"
                class=""
              />
            </div>
          </div>
          <div class="col">
            <div class="result-box-deptime">
              <h5>${depResultTime2[i]}</h5>
              <p>${from2}</p>
            </div>
          </div>
          <div class="col">
            <div class="result-box-stops">
              <h6>${hoursTravel2[i]} h ${minsTravel2[i]}</h6>
              <p>${stopsArray2[i]} stop(s)</p>
            </div>
          </div>
          <div class="col">
            <div class="result-box-returntime">
              <h5>${arrResultTime2[i]}</h5>
              <p>${to2}</p>
            </div>
          </div>
          <div class="col" style="margin-top: -100px">
            <div class="result-box-price">
              <h5 class="m-0 p-0">₹${priceArray[i]}</h5>
              <span class="m-0 p-0">per Adult</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="result-box-flight-details text-start mt-3">
              <a
                href="#collapseExample${i}"
                class="primary-text-color"
                data-bs-toggle="collapse"
                >Flight Details</a
              >
            </div>
            <div class="collapse mt-3" id="collapseExample${i}">
              <ul
                class="nav nav-tabs mb-3"
                id="ex-with-icons${i}"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="ex-with-icons-tab-1${i}"
                    data-mdb-toggle="tab"
                    href="#ex-with-icons-tabs-1${i}"
                    role="tab"
                    aria-controls="ex-with-icons-tabs-1${i}"
                    aria-selected="true"
                    ><i class="fa fa-plane fa-fw me-2"></i
                    >Flights</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex-with-icons-tab-2${i}"
                    data-mdb-toggle="tab"
                    href="#ex-with-icons-tabs-2${i}"
                    role="tab"
                    aria-controls="ex-with-icons-tabs-2${i}"
                    aria-selected="false"
                    ><i class="fa fa-suitcase fa-fw me-2"></i
                    >Baggage</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex-with-icons-tab-3${i}"
                    data-mdb-toggle="tab"
                    href="#ex-with-icons-tabs-3${i}"
                    role="tab"
                    aria-controls="ex-with-icons-tabs-3${i}"
                    aria-selected="false"
                    ><i
                      class="fa fa-indian-rupee-sign fa-fw me-2"
                    ></i
                    >Fare Summary</a
                  >
                </li>
              </ul>

              <div class="tab-content" id="ex-with-icons-content${i}">
                <div
                  class="tab-pane fade show active"
                  id="ex-with-icons-tabs-1${i}"
                  role="tabpanel"
                  aria-labelledby="ex-with-icons-tab-1${i}"
                >
                  <div class="card text-start">
                    <div class="card-header d-flex">
                      <div class="">
                        <span>${from1} </span
                        ><i class="fa fa-arrow-right fs-6"></i
                        ><span class="ms-1">${to1}</span>
                      </div>
                      
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6 border-left-dot">
                          <div class="flight-details-left">
                            <p>Airlines</p>
                            <p class="mt-3">Stops</p>
                            <p class="mt-3">Trip Type</p>
                            <p class="mt-3">Class</p>
                            <p class="mt-3">Seats</p>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="flight-details-right">
                            <img
                              src="${airlinesArray[i]}"
                              alt=""
                            />
                            <p class="mt-3">${stopsArray[i]}</p>
                            <p class="mt-3 text-capitalize">
                            ${TripType}
                            </p>
                            <p class="mt-3 text-capitalize">${CabinType}</p>
                            <p class="mt-3 text-capitalize">${seatsAvalaibleArray[i]}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card text-start mt-1">
                    <div class="card-header d-flex">
                      
                      <div class="">
                        <span>${from2} </span
                        ><i class="fa fa-arrow-right fs-6"></i
                        ><span class="ms-1">${to2}</span>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6 border-left-dot">
                          <div class="flight-details-left">
                            <p>Airlines</p>
                            <p class="mt-3">Stops</p>
                            <p class="mt-3">Trip Type</p>
                            <p class="mt-3">Class</p>
                            <p class="mt-3">Seats</p>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="flight-details-right">
                            <img
                              src="${airlinesArray[i]}"
                              alt=""
                            />
                            <p class="mt-3">${stopsArray2[i]}</p>
                            <p class="mt-3 text-capitalize">
                            ${TripType}
                            </p>
                            <p class="mt-3 text-capitalize">${CabinType}</p>
                            <p class="mt-3 text-capitalize">${seatsAvalaibleArray[i]}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="ex-with-icons-tabs-2${i}"
                  role="tabpanel"
                  aria-labelledby="ex-with-icons-tab-2${i}"
                >
                  <div class="card text-start">
                    <div class="card-header">Baggage Details</div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6 border-left-dot">
                          <div class="baggage-details-left">
                            <p>Hands on Baggage</p>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="baggage-details-right">
                            <p>0${baggageArray[i]}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="ex-with-icons-tabs-3${i}"
                  role="tabpanel"
                  aria-labelledby="ex-with-icons-tab-3${i}"
                >
                  <div class="card text-start">
                    <div class="card-header">Fare Details</div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6 border-left-dot">
                          <div class="fare-details-left">
                            <h5 class="">Total Price</h5>
                            <p class="mt-2">Base Fare</p>
                            <p class="mt-2">Surcharges</p>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="fare-details-right">
                          <h5 class="">₹${priceArray[i]}</h5>
                          <p class="mt-2">₹0</p>
                          <p class="mt-2">₹0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="btn btn-common w-100">Book Now</div>
      </div>
    </div>
  </div>`;
    $(".result-append").append(resultTextHtml);
  }
}
//filter
