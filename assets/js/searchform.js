//cabin class select
$(document).ready(function () {
  var classDropdownItems = document.getElementsByClassName("class-dropdown");

  for (let i = 0; i < classDropdownItems.length; i++) {
    classDropdownItems[i].addEventListener("click", function () {
      // Get the text of the selected item
      let selectedItemText = this.textContent;

      // Do something with the selected item
      document.getElementById("cabin").innerText = selectedItemText;
    });
  }

  // var passengerDropdownItems =
  //   document.getElementsByClassName("passenger-dropdown");

  // for (let i = 0; i < passengerDropdownItems.length; i++) {
  //   passengerDropdownItems[i].addEventListener("click", function () {
  //     // Get the text of the selected item
  //     let selectedItemText = this.textContent;

  //     // Do something with the selected item
  //     document.getElementById("passenger").innerText = selectedItemText;
  //   });
  // }
});
//passenger

$(document).ready(function () {
  $("#passenger").click(function () {
    var paxAdultTotal = $("#paxAdultTotal");
    var paxInfantTotal = $("#paxInfantTotal");
    var paxChildTotal = $("#paxChildTotal");

    var adultTotal = $("#adultTotal").val();
    var childTotal = $("#childTotal").val();
    var infantTotal = $("#infantTotal").val();

    paxAdultTotal.text(adultTotal);
    paxInfantTotal.text(infantTotal);
    paxChildTotal.text(childTotal);
  });
});

//autocomplete
//from
$(document).ready(function () {
  var airportUrl = "./assets/json/airports.json";
  var flagUrl = "./assets/json/flag.json";

  $.getJSON(airportUrl, function (airports) {
    $.getJSON(flagUrl, function (flags) {
      var selectedValue = "";

      $("#from").on("input", function () {
        var input = $(this).val().trim();
        if (input.length >= 2) {
          var suggestions = filterAirports(airports, input);
          displaySuggestions(suggestions, flags);
        } else {
          $("#from_autocomplete-suggestions").empty();
        }
      });

      $("#from_autocomplete-suggestions").on("click", "li", function () {
        var codeCity = $(this).find("span").text();
        var airportCode = codeCity.substring(0, 3);
        var hidden_from = $(".hidden_from").val(airportCode);
        selectedValue = codeCity;
        $("#from").val(codeCity);
        $("#from_autocomplete-suggestions").empty();
        // Automatically focus on 'to' input after selecting from 'from' input

        // Select all text when clicking on the 'from' input
        $("#from").select();
        $("#to").focus();
      });

      // Handle click event on the 'from' input
      $("#from").on("click", function () {
        if ($("#from").val() === selectedValue) {
          $("#from").select(); // Select all text if the input contains the selected value
        }
      });

      // Close autocomplete suggestions when clicking anywhere on the page
      $(document).on("click", function (event) {
        var target = event.target;
        if (!$(target).closest("#from_autocomplete-suggestions").length) {
          $("#from_autocomplete-suggestions").empty();
        }
      });
    });
  });

  function filterAirports(airports, input) {
    input = input.toLowerCase();
    return airports.filter(function (airport) {
      return (
        airport.code.toLowerCase().startsWith(input) ||
        airport.name.toLowerCase().includes(input) ||
        airport.city.toLowerCase().includes(input) ||
        airport.country.toLowerCase().includes(input)
      );
    });
  }

  function displaySuggestions(suggestions, flags) {
    $("#from_autocomplete-suggestions").empty();

    suggestions.forEach(function (airport) {
      var listItem = $("<li></li>").addClass("autocomplete-item");
      var icon = $("<img>")
        .addClass("departure-icon")
        .attr("src", "https://cdn-icons-png.flaticon.com/512/723/723749.png");
      var img = $("<img>").addClass("country-flag");
      var flag = flags.find(function (flag) {
        return flag.country.toLowerCase() === airport.country.toLowerCase();
      });

      listItem.html(
        "<span>" +
          airport.code +
          " - " +
          airport.name +
          " (" +
          airport.city +
          ", " +
          airport.country +
          ")</span>"
      );

      if (flag) {
        listItem.append(img);
        listItem.prepend(icon);
        img.attr("src", flag.flag);
      }

      $("#from_autocomplete-suggestions").append(listItem);
    });
  }
});

//to
$(document).ready(function () {
  var airportUrl = "./assets/json/airports.json";
  var flagUrl = "./assets/json/flag.json";

  $.getJSON(airportUrl, function (airports) {
    $.getJSON(flagUrl, function (flags) {
      var selectedValue = "";

      $("#to").on("input", function () {
        var input = $(this).val().trim();
        if (input.length >= 2) {
          var suggestions = filterAirports(airports, input);
          displaySuggestions(suggestions, flags);
        } else {
          $("#to_autocomplete-suggestions").empty();
        }
      });

      $("#to_autocomplete-suggestions").on("click", "li", function () {
        var codeCity = $(this).find("span").text();
        var airportCode = codeCity.substring(0, 3);
        var hidden_to = $(".hidden_to").val(airportCode);
        selectedValue = codeCity;
        $("#to").val(codeCity);
        $("#to_autocomplete-suggestions").empty();
        $("#to").select();
        $("#depdate").focus();
      });

      $("#to").on("click", function () {
        if ($("#to").val() === selectedValue) {
          $("#to").select();
        }
      });

      $(document).on("click", function (event) {
        var target = event.target;
        if (!$(target).closest("#to_autocomplete-suggestions").length) {
          $("#to_autocomplete-suggestions").empty();
        }
      });
    });
  });

  function filterAirports(airports, input) {
    input = input.toLowerCase();
    return airports.filter(function (airport) {
      return (
        airport.code.toLowerCase().startsWith(input) ||
        airport.name.toLowerCase().includes(input) ||
        airport.city.toLowerCase().includes(input) ||
        airport.country.toLowerCase().includes(input)
      );
    });
  }

  function displaySuggestions(suggestions, flags) {
    $("#to_autocomplete-suggestions").empty();

    suggestions.forEach(function (airport) {
      var listItem = $("<li></li>").addClass("autocomplete-item");
      var icon = $("<img>")
        .addClass("departure-icon")
        .attr("src", "https://cdn-icons-png.flaticon.com/512/723/723749.png");
      var img = $("<img>").addClass("country-flag");
      var flag = flags.find(function (flag) {
        return flag.country.toLowerCase() === airport.country.toLowerCase();
      });

      listItem.html(
        "<span>" +
          airport.code +
          " - " +
          airport.name +
          " (" +
          airport.city +
          ", " +
          airport.country +
          ")</span>"
      );

      if (flag) {
        listItem.append(img);
        listItem.prepend(icon);
        img.attr("src", flag.flag);
      }

      $("#to_autocomplete-suggestions").append(listItem);
    });
  }
});

//datepicker
$(document).ready(function () {
  var depdate = $("#depdate");
  var returndate = $("#returndate");

  // Initialize depdate with options
  depdate.datepicker({
    startDate: "today", // Disable past dates
    todayHighlight: true,
    autoclose: true, // Close the datepicker after selecting a date
  });

  // Initialize returndate with options
  returndate.datepicker({
    startDate: "today", // Disable past dates
    todayHighlight: true,
    autoclose: true, // Close the datepicker after selecting a date
  });

  // Handle date selection event in depdate
  depdate.on("changeDate", function (e) {
    var selectedDate = e.date;
    // Set the minimum date for returndate as the selected date from depdate
    returndate.datepicker("setStartDate", selectedDate);
    returndate.datepicker("setDate", selectedDate);
    // Automatically focus on returndate after selecting a date in depdate
    if ($('input[name="tourtype"]').val() !== "oneway") {
      returndate.focus();
    }
  });

  $(".hidden_depdate").val(depdate.val());
  $(".hidden_returndate").val(returndate.val());
});

//trip change
$(document).ready(function () {
  $("#oneway").click(function () {
    $('input[name="tourtype"]').val("oneway");
    if ($("#from-col").hasClass("col-md-3")) {
      $("#from-col").removeClass("col-md-3");
      $("#from-col").addClass("col-md-4");
    }
    if ($("#to-col").hasClass("col-md-3")) {
      $("#to-col").removeClass("col-md-3");
      $("#to-col").addClass("col-md-4");
    }
    if ($("#depart-col").hasClass("col-md-3")) {
      $("#depart-col").removeClass("col-md-3");
      $("#depart-col").addClass("col-md-4");
    }
    $("#return-col").hide();
  });
  $("#round-trip").click(function () {
    $('input[name="tourtype"]').val("round-trip");
    if ($("#from-col").hasClass("col-md-4")) {
      $("#from-col").removeClass("col-md-4");
      $("#from-col").addClass("col-md-3");
    }
    if ($("#to-col").hasClass("col-md-4")) {
      $("#to-col").removeClass("col-md-4");
      $("#to-col").addClass("col-md-3");
    }
    if ($("#depart-col").hasClass("col-md-4")) {
      $("#depart-col").removeClass("col-md-4");
      $("#depart-col").addClass("col-md-3");
    }
    $("#return-col").show();
  });
});
//validate
$(document).ready(() => {
  let errorShown = false;
  let toErrorShown = false;
  let departErrorShown = false;
  let returnErrorShown = false;

  $("#search-btn").click((e) => {
    //from
    if ($("#from").val() == "" && !errorShown) {
      var error =
        "<span class='from-error'>Please select the Depart Airport</span>";
      $(error).insertAfter(".from-col");
      errorShown = true;
    }
    $("#from").on("input", () => {
      if ($("#from").val() !== "") {
        $(".from-error").hide();
        errorShown = false;
      }
    });
    //to
    if ($("#to").val() == "" && !toErrorShown) {
      var error =
        "<span class='to-error'>Please select the Arrival Airport</span>";
      $(error).insertAfter(".to-col");
      toErrorShown = true;
    }
    $("#to").on("input", () => {
      if ($("#to").val() !== "") {
        $(".to-error").hide();
        toErrorShown = false;
      }
    });
    //departuredate
    if ($("#depdate").val() == "" && !departErrorShown) {
      var error =
        "<span class='depdate-error'>Please select the Depart Date</span>";
      $(error).insertAfter(".depart-col");
      departErrorShown = true;
    }
    $("#depdate").on("change", () => {
      if ($("#depdate").val() !== "") {
        $(".depdate-error").hide();
        departErrorShown = false;
      }
    });
    //returndate
    if ($("#returndate").val() == "" && !returnErrorShown) {
      var error =
        "<span class='returndate-error'>Please select the Return Date</span>";
      $(error).insertAfter(".return-col");
      returnErrorShown = true;
    }
    $("#returndate").on("change", () => {
      if ($("#returndate").val() !== "") {
        $(".returndate-error").hide();
        returnErrorShown = false;
      }
    });
    e.preventDefault();
  });
});

$(document).ready(() => {
  $("#search-btn").click(() => {
    var fromInput = $("#from").val();
    var toInput = $("#to").val();
    var depDateInput = $("#depdate").val();
    var returnDateInput = $("#returndate").val();
    var hidden_from = $(".hidden_from").val();
    var hidden_to = $(".hidden_to").val();
    var adultTotal = $("#adultTotal").val();
    var childTotal = $("#childTotal").val();
    var infantTotal = $("#infantTotal").val();
    console.log(adultTotal);
    if (fromInput && toInput && depDateInput && returnDateInput !== "") {
      var tourtype = $('input[name="tourtype"]').val();
      var replaceDepDateInput = depDateInput.replaceAll("/", "-");
      var replacereturnDateInput = returnDateInput.replaceAll("/", "-");
      var ExcludeMultiTicket = $("#Exclude-Multi-Ticket");
      var BaggageInclusive = $("#Baggage-Inclusive");
      var DirectFlight = $("#Direct-Flight");
      var NearbyAirport = $("#Nearby-Airport");
      var cabinTypeSpace = $("#cabin").text();
      var cabinTypeSpaceReplace = cabinTypeSpace.replaceAll(" ", "");
      var cabinType = cabinTypeSpaceReplace.replaceAll("\n", "");
      if ($("#Exclude-Multi-Ticket").is(":checked")) {
        ExcludeMultiTicket.val("Y");
      } else {
        ExcludeMultiTicket.val("N");
      }
      if ($("#Baggage-Inclusive").is(":checked")) {
        BaggageInclusive.val("Y");
      } else {
        BaggageInclusive.val("N");
      }
      if ($("#Direct-Flight").is(":checked")) {
        DirectFlight.val("Y");
      } else {
        DirectFlight.val("N");
      }
      if ($("#Nearby-Airport").is(":checked")) {
        NearbyAirport.val("Y");
      } else {
        NearbyAirport.val("N");
      }

      //oneway
      if ($('input[name="tourtype"]').val() == "oneway") {
        url = `https://sathya-1904.github.io/c-b.com/result.html?FromCity1=${encodeURIComponent(
          hidden_from
        )}&ToCity1=${encodeURIComponent(
          hidden_to
        )}&DepartureDate=${encodeURIComponent(
          replaceDepDateInput
        )}&TripType=${encodeURIComponent(
          tourtype
        )}&CabinType=${encodeURIComponent(
          cabinType
        )}&Adult=${encodeURIComponent(adultTotal)}&Child=${encodeURIComponent(
          childTotal
        )}&Infant=${encodeURIComponent(
          infantTotal
        )}&ExcludeMultiTicket=${encodeURIComponent(
          ExcludeMultiTicket.val()
        )}&BaggageInclusive=${encodeURIComponent(
          BaggageInclusive.val()
        )}&DirectFlight=${encodeURIComponent(
          DirectFlight.val()
        )}&NearbyAirport=${encodeURIComponent(NearbyAirport.val())}`;
        window.location.href = url;
      }
      //round-trip
      else if ($('input[name="tourtype"]').val() == "round-trip") {
        url = `https://sathya-1904.github.io/c-b.com/result.html?FromCity1=${encodeURIComponent(
          hidden_from
        )}&ToCity1=${encodeURIComponent(
          hidden_to
        )}&FromCity2=${encodeURIComponent(
          hidden_to
        )}&ToCity2=${encodeURIComponent(
          hidden_from
        )}&DepartureDate=${encodeURIComponent(
          replaceDepDateInput
        )}&ReturnDate=${encodeURIComponent(
          replacereturnDateInput
        )}&TripType=${encodeURIComponent(
          tourtype
        )}&CabinType=${encodeURIComponent(
          cabinType
        )}&Adult=${encodeURIComponent(adultTotal)}&Child=${encodeURIComponent(
          childTotal
        )}&Infant=${encodeURIComponent(
          infantTotal
        )}&ExcludeMultiTicket=${encodeURIComponent(
          ExcludeMultiTicket.val()
        )}&BaggageInclusive=${encodeURIComponent(
          BaggageInclusive.val()
        )}&DirectFlight=${encodeURIComponent(
          DirectFlight.val()
        )}&NearbyAirport=${encodeURIComponent(NearbyAirport.val())}`;
        window.location.href = url;
      }
    }
  });
});
