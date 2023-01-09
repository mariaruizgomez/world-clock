function updateTime() {
  let lasVegasElement = document.querySelector("#las-vegas");
  let lasVegasDateElement = lasVegasElement.querySelector(".date");
  let lasVegasTimeElement = lasVegasElement.querySelector(".time");
  let lasVegasTime = moment().tz("America/Los_Angeles");
  lasVegasDateElement.innerHTML = lasVegasTime.format("MMMM Do YYYY");
  lasVegasTimeElement.innerHTML = lasVegasTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let MadridElement = document.querySelector("#madrid");
  let MadridDateElement = MadridElement.querySelector(".date");
  let MadridTimeElement = MadridElement.querySelector(".time");
  let MadridTime = moment().tz("Europe/Madrid");
  MadridDateElement.innerHTML = MadridTime.format("MMMM Do YYYY");
  MadridTimeElement.innerHTML = MadridTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
