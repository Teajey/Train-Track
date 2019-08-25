let gRoute;

$(() => {

    // stopDepartures("HVL", serviceMap => {
    //     console.log(serviceMap);
    // });

    // $("#queryForm").submit(function (e) {
    //     e.preventDefault();
    //     let servLocation = $(this).find("#serviceLocationOptions").val();
    //     $.ajax({
    //         url: `https://www.metlink.org.nz/api/v1/ServiceLocation/${servLocation}`,
    //         method: "GET"
    //     }).done((data) => {
    //         let txt = '';
    //         data.Services.forEach(train => {
    //             txt = txt.concat(`
    //         VehicleRef: ${train.VehicleRef}<br>
    //         BehindSchedule: ${train.BehindSchedule}<br>
    //         DelaySeconds: ${train.DelaySeconds}<br>
    //         RecordedAtTime: ${new Date(train.RecordedAtTime).toTimeString().substring(0, 8)}<br>
    //         Direction: ${train.Direction}<br>
    //         HasStarted: ${train.HasStarted}<br>
    //         <br>`);
    //         });
    //         $("#result").html(txt);
    //     });
    // });
});

$(() => {
    $(".radioButton").click(function () {
        gRoute = $(this).attr("data-route");
    });

    //Get stations for a given line
    $("#queryForm").submit(async function (e) {
        e.preventDefault();
        //This variable changes what notices are fetched
        let veRef = '3333';
        var stopsArray = [];
        var stationFullNames = [];
        var fullName = '';
        let data = await $.ajax({
            url: `https://www.metlink.org.nz/api/v1/ServiceMap/` + gRoute,
            method: "GET"
        });
        let txt = '';
        data.StopLocations.forEach(stopLocation => {
            stopsArray.push(stopLocation.Sms.substring(0, 4));
        });
        var uniqueStops = [...new Set(stopsArray)];
        let uniqueStopsPromise = uniqueStops.map(uniqueStop => {
            return findFullStationName(uniqueStop);
        });
        let stationNames = await Promise.all(uniqueStopsPromise);
        console.log(stationNames);
        stationNames.forEach(station => { txt = txt.concat(`${station} <br>`); });
        $("#stops").html(txt);
    });
});

async function findFullStationName(station) {
    var fullName = ""; let data = await $.ajax({
        url: `https://www.metlink.org.nz/api/v1/StopDepartures/` + station,
        method: "GET"
    });
    return data.Stop.Name;
}