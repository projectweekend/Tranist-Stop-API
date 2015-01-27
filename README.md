## API Key

All requests require an API key be included in the header: `API_KEY`.


- - -


### Get a list of transit systems

**GET:**
```
/
```

**Response:**
```json
[
    {
        "_id": "54c70303d0fddf10c2cd85bc",
        "system": "chicago-cta",
        "name": "Chicago Transit Authority"
    }
]
```

**Query Parameters:**

* `name`: Fuzzy search on `name`.


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
        "_id": "54c594b0d0fddff55b4207f6",
        "name": "Bronzeville/Union Station",
        "system": "chicago-cta",
        "type": "bus",
        "id": "1",
        "directions": [
            "north,",
            "south"
        ]
    },
    {
        "_id": "54c594b0d0fddff55b4207f7",
        "name": "Museum of S & I",
        "system": "chicago-cta",
        "type": "bus",
        "id": "10",
        "directions": [
            "north,",
            "south"
        ]
    }
]
```

**Query Parameters:**

* `type`: Filter by `type`: **bus** or **train**.
* `name`: Fuzzy search on `name`.


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
        "_id": "54c59588d0fddff55b424264",
        "route_type": "train",
        "route_id": "g",
        "name": "35-Bronzeville-IIT",
        "route_direction": "n/a",
        "latitude": 41.831677,
        "system": "chicago-cta",
        "longitude": -87.625826,
        "route_name": "Green Line"
    },
    {
        "_id": "54c59588d0fddff55b424265",
        "route_type": "train",
        "route_id": "g",
        "name": "43rd",
        "route_direction": "n/a",
        "latitude": 41.816462,
        "system": "chicago-cta",
        "longitude": -87.619021,
        "route_name": "Green Line"
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
        "_id": "54c59585d0fddff55b42364b",
        "route_type": "bus",
        "route_id": "8",
        "name": "1700 N Halsted",
        "route_direction": "north",
        "latitude": 41.91246191,
        "system": "chicago-cta",
        "longitude": -87.64825579,
        "route_name": "Halsted"
    },
    {
        "_id": "54c59585d0fddff55b42364c",
        "route_type": "bus",
        "route_id": "8",
        "name": "1700 N Halsted",
        "route_direction": "south",
        "latitude": 41.91282703,
        "system": "chicago-cta",
        "longitude": -87.64841862,
        "route_name": "Halsted"
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
        "_id": "54c59585d0fddff55b42364b",
        "route_type": "bus",
        "route_id": "8",
        "name": "1700 N Halsted",
        "route_direction": "north",
        "latitude": 41.91246191,
        "system": "chicago-cta",
        "longitude": -87.64825579,
        "route_name": "Halsted"
    },
    {
        "_id": "54c59585d0fddff55b42364d",
        "route_type": "bus",
        "route_id": "8",
        "name": "1900 N Halsted",
        "route_direction": "north",
        "latitude": 41.91603291,
        "system": "chicago-cta",
        "longitude": -87.64835278,
        "route_name": "Halsted"
    }
]
```

**Query Parameters:**

* `name`: Fuzzy search on `name`.
