## API Key

All requests require an API key be included in the header: `API_KEY`.


## Get routes for transit system

**Request:**
```
GET: /:system
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
