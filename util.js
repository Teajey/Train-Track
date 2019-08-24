// Functions that interface with API


/**
 * Provides the train stops matching the given string. (Minimum of 3 characters).
 * 
 * @param {*} string Find a stop matching this string
 * @param {*} cb Function in which the stop is returned
 * 
 * Ex: Prints ID, code, and name of Naenae Station.
 * stopSearch("nae", stop => {
 *   console.log(stop);
 * });
 * 
 */
function stopSearch(string, callback) {
    $.ajax({
        url: `https://www.metlink.org.nz/api/v1/StopSearch/${string}`,
        method: "GET"
    }).done(function (data) {
        let trainStop = data[0];
        callback(isNaN(trainStop.Sms) ? trainStop : null);
    }).fail(function (err) {
        callback(err.statusText);
    });
}

/**
 * Provides locations of vehicles on the given route
 * 
 * @param {*} routeCode 
 * @param {*} callback Function in which the service locations are returned 
 * 
 * serviceLocation("HVL", serviceLocation => {
 *     console.log(serviceLocation);
 * });
 * 
 */
function serviceLocation(routeCode, callback) {
    $.ajax({
        url: `https://www.metlink.org.nz/api/v1/ServiceLocation/${routeCode}`,
        method: "GET"
    }).done(function (serviceLocation) {
        callback(serviceLocation);
    }).fail(function (err) {
        callback(err.statusText);
    });
}

/**
 * Provides a list of stops on the given route.
 * 
 * @param {*} routeCode 
 * @param {*} callback Function in which the service stops are returned 
 * 
 * serviceMap("HVL", serviceMap => {
 *    console.log(serviceMap);
 * });
 * 
 */
function serviceMap(routeCode, callback) {
    $.ajax({
        url: `https://www.metlink.org.nz/api/v1/ServiceMap/${routeCode}`,
        method: "GET"
    }).done(function (serviceMap) {
        callback(serviceMap);
    }).fail(function (err) {
        callback(err.statusText);
    });
}

/**
 * Provides a list of stops on the given route.
 * 
 * @param {*} stopCode 
 * @param {*} callback Function in which the stop departures are returned 
 * 
 * stopDepartures("WELL", serviceMap => {
 *     console.log(serviceMap);
 * });
 * 
 */
function stopDepartures(stopCode, callback) {
    $.ajax({
        url: `https://www.metlink.org.nz/api/v1/StopDepartures/${stopCode}`,
        method: "GET"
    }).done(function (stopDepartures) {
        callback(stopDepartures);
    }).fail(function (err) {
        callback(err.statusText);
    });
}

