## API Key

All requests require an API key be included in the header: `API_KEY`.


### Get a list of transit systems

**GET:**
```
/
```

**Response:**
```json
[
    {
        "_id": "54cda510d0fddfb4ff5dc94c",
        "system": "chicago-cta",
        "urls": {
            "routes": "/chicago-cta"
        },
        "name": "Chicago Transit Authority"
    },
    {
        "_id": "54cda451d0fddfb4e88241fc",
        "system": "dc-wmata",
        "urls": {
            "routes": "/dc-wmata"
        },
        "name": "Washington Metropolitan Area Transit Authority"
    }
]
```

**Query Parameters:**

* `name`: Fuzzy search on `name`.

**Note:**
The `urls` property contains the next logical API route that can be accessed using the information from this route. In the example above, the URL in `urls.routes` will return all transit routes available for that transit system.


- - -


### Get routes for a transit system

**GET:**
```
/:system
```

**Response:**
```json
[
    {
        "_id": "54cda512d0fddfb4ff5dc94d",
        "name": "Bronzeville/Union Station",
        "urls": {
            "All Stops": "/chicago-cta/bus/1",
            "North": "/chicago-cta/bus/1/north",
            "South": "/chicago-cta/bus/1/south"
        },
        "type": "bus",
        "id": "1",
        "directions": [
            "North",
            "South"
        ]
    },
    {
        "_id": "54cda512d0fddfb4ff5dc94e",
        "name": "Museum of S & I",
        "urls": {
            "All Stops": "/chicago-cta/bus/10",
            "North": "/chicago-cta/bus/10/north",
            "South": "/chicago-cta/bus/10/south"
        },
        "type": "bus",
        "id": "10",
        "directions": [
            "North",
            "South"
        ]
    }
]
```

**Query Parameters:**

* `type`: Filter by `type`: **bus** or **train**.
* `name`: Fuzzy search on `name`.


**Note:**
The `urls` property contains the next logical API routes that can be accessed using the information from this route. In the example above, the URL in `urls["All Stops"]` will return all stops for the route. The URL in `urls["South"]` will return all southbound stops. The URL in `urls["North"]` will return all northbound stops.


- - -


### Get train stops for a route

**GET:**
```
/:system/train/:route_id
```

**Response:**
```json
[
    {
        "_id": "54cda5cbd0fddfb4ff5e037e",
        "name": "Addison-Blue",
        "route_direction": "n/a",
        "latitude": 41.94738,
        "system": "chicago-cta",
        "longitude": -87.71906
    },
    {
        "_id": "54cda5cbd0fddfb4ff5e037f",
        "name": "Austin-Blue",
        "route_direction": "n/a",
        "latitude": 41.870851,
        "system": "chicago-cta",
        "longitude": -87.776812
    }
]
```

**Query Parameters:**

* `name`: Fuzzy search on `name`.


- - -


### Get bus stops for a route

**GET:**
```
/:system/bus/:route_id
```

**Response:**
```json
[
    {
        "_id": "54cda5b9d0fddfb4ff5dc9d2",
        "name": "1509 S Michigan",
        "route_direction": "North",
        "latitude": 41.86183776,
        "system": "chicago-cta",
        "longitude": -87.62388488
    },
    {
        "_id": "54cda5b9d0fddfb4ff5dc9d3",
        "name": "1510 S Michigan",
        "route_direction": "South",
        "latitude": 41.861798,
        "system": "chicago-cta",
        "longitude": -87.624121
    }
]
```

**Query Parameters:**

* `name`: Fuzzy search on `name`.


- - -


### Get bus stops for a direction of a route

**GET:**
```
/:system/bus/:route_id/:direction
```

**Response:**
```json
[
    {
        "_id": "54cda5b9d0fddfb4ff5dc9d2",
        "name": "1509 S Michigan",
        "route_direction": "North",
        "latitude": 41.86183776,
        "system": "chicago-cta",
        "longitude": -87.62388488
    },
    {
        "_id": "54cda5b9d0fddfb4ff5dc9d4",
        "name": "3000 S Michigan",
        "route_direction": "North",
        "latitude": 41.840602,
        "system": "chicago-cta",
        "longitude": -87.623115
    }
]
```

**Query Parameters:**

* `name`: Fuzzy search on `name`.
