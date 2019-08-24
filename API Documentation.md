[reedwade's documentation](https://github.com/reedwade/metlink-api-maybe/blob/master/README.md)

## `/api/v1/ServiceLocation/<Route Code>`

e.g.:
- `https://www.metlink.org.nz/api/v1/ServiceLocation/JVL`
- `https://www.metlink.org.nz/api/v1/ServiceLocation/HVL`
Provides locations of vehicles on the given route.

## `/api/v1/ServiceMap/<Route Code>`

e.g.:
- `https://www.metlink.org.nz/api/v1/ServiceMap/JVL`
- `https://www.metlink.org.nz/api/v1/ServiceMap/HVL`
Provides a list of stops on the given route.

## `/api/v1/StopSearch/<Search String>`

e.g.:
- `https://www.metlink.org.nz/api/v1/StopSearch/well`
- `https://www.metlink.org.nz/api/v1/StopSearch/alice`
- `https://www.metlink.org.nz/api/v1/StopSearch/833`
Provides a list of train, bus, ferry stops matching the given string. (Minimum of 3 characters).

## `/api/v1/StopDepartures/<Stop Departures>`

e.g.:
- `https://www.metlink.org.nz/api/v1/StopDepartures/WELL`
- `https://www.metlink.org.nz/api/v1/StopDepartures/PETO`
- `https://www.metlink.org.nz/api/v1/StopDepartures/WATE`
Provides notes, and a summary of upcoming departures at a given stop.

## `/api/v1/StopNearby/<Latitude>/<Longitude>`

e.g.:
- `https://www.metlink.org.nz/api/v1/StopNearby/-41.1260872/175.0707397`
Provides a list of stops ordered by proximity to the given coordinates.

## `/api/v1/FareZones/`

Provides the data about all train fare zones
