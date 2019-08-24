$(() => {
    // $.ajax({
    //     url: "https://www.metlink.org.nz/api/v1/ServiceLocation/HVL",
    //     method: "GET"
    // }).done(servLocation => {
    //     // $.ajax({
    //     //     url: "https://www.metlink.org.nz/api/v1/StopDepartures/UPPE",
    //     //     method: "GET"
    //     // }).done(stopDepartures => {

    //     // });
    //     console.log(servLocation);
    //     let txt = '';
    //     data.Services.forEach(train => {
    //         txt = txt.concat(`
    //         VehicleRef: ${train.VehicleRef}<br>
    //         BehindSchedule: ${train.BehindSchedule}<br>
    //         DelaySeconds: ${train.DelaySeconds}<br>
    //         RecordedAtTime: ${train.RecordedAtTime}<br>
    //         Direction: ${train.Direction}<br>
    //         <br>`);
    //     });
    //     $("#result").html(txt);
    // });
    console.log("Document ready");

    $("#queryForm").submit(function (e) {
        e.preventDefault();
        let servLocation = $(this).find("#serviceLocationOptions").val();
        $.ajax({
            url: `https://www.metlink.org.nz/api/v1/ServiceLocation/${servLocation}`,
            method: "GET"
        }).done((data) => {
            let txt = '';
            data.Services.forEach(train => {
                txt = txt.concat(`
            VehicleRef: ${train.VehicleRef}<br>
            BehindSchedule: ${train.BehindSchedule}<br>
            DelaySeconds: ${train.DelaySeconds}<br>
            RecordedAtTime: ${new Date(train.RecordedAtTime).toTimeString().substring(0, 8)}<br>
            Direction: ${train.Direction}<br>
            HasStarted: ${train.HasStarted}<br>
            <br>`);
            });
            $("#result").html(txt);
        });
    });
});