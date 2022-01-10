# Kroger crawler

Grab all the available information for each product from the [target website](https://www.kroger.com).

## Json product example
```
{
  "url": "https://www.kroger.com/p/strawberries/0003338320027",
  "inventory": {
    "locations": [
      {
        "locationId": "03500517",
        "stockLevel": "HIGH"
      }
    ],
    "effective": {
      "total": 0,
      "available": 0
    }
  },
  "item": {
    "alcoholFlag": false,
    "brand": {
      "name": "California Strawberry Commission",
      "code": "1578351380771222"
    },
    "bounceFlag": false,
    "categories": [
      {
        "code": "36",
        "name": "Produce"
      }
    ],
    "clickListItem": true,
    "countriesOfOrigin": "UNITED STATES",
    "customerFacingSize": "1 lb",
    "description": "Strawberries",
    "dimensions": {
      "height": "3.3 [in_i]",
      "width": "7.3 [in_i]",
      "length": "4.7 [in_i]"
    },
    "familyTree": {
      "commodity": {
        "code": "604",
        "name": "BERRIES"
      },
      "department": {
        "code": "19",
        "name": "FRUIT"
      },
      "subCommodity": {
        "code": "98035",
        "name": "STRAWBERRIES"
      }
    },
    "hazmatFlag": false,
    "homeDeliveryItem": true,
    "images": [
      {
        "perspective": "front",
        "url": "https://www.kroger.com/product/images/thumbnail/front/0003338320027",
        "size": "thumbnail"
      },
      {
        "perspective": "front",
        "url": "https://www.kroger.com/product/images/small/front/0003338320027",
        "size": "small"
      },
      {
        "perspective": "front",
        "url": "https://www.kroger.com/product/images/medium/front/0003338320027",
        "size": "medium"
      },
      {
        "perspective": "front",
        "url": "https://www.kroger.com/product/images/large/front/0003338320027",
        "size": "large"
      },
      {
        "perspective": "front",
        "url": "https://www.kroger.com/product/images/xlarge/front/0003338320027",
        "size": "xlarge"
      }
    ],
    "mainImagePerspective": "front",
    "prop65": {
      "required": false
    },
    "romanceDescription": "<p>Delicious and nutritious, fresh strawberries provide their signature sweet taste all year long. An excellent source of Vitamin C and manganese, they add flavorful heart and immune system benefits to any dish. Strawberries are versatile and work well as a snack and in sweet or savory recipes.</p><ul><li>Gluten-free, Paleo, and keto friendly</li><li>Great for snacking, sweet and savory recipes, and freezing for future consumption</li><li>The sweetness of strawberries is often referred to as \"nature's candy\"</li><li>Pairs well with: avocado, fresh herbs (like basil and mint), balsamic, chocolate, and most cheeses</li><li>Keep refrigerated and gently wash with cool tap water right before eating</li><li>Strawberries are considered kids' favorite fruit!</li></ul>",
    "seoDescription": "strawberries",
    "shipToHomeItem": false,
    "snapEligible": true,
    "soldInStore": true,
    "taxonomies": [
      {
        "commodity": {
          "code": "111",
          "name": "Fresh Fruit"
        },
        "department": {
          "code": "06",
          "name": "Fresh Fruits & Vegetables"
        },
        "subCommodity": {
          "code": "00673",
          "name": "Berries"
        }
      }
    ],
    "temperatureIndicator": "55688103655",
    "upc": "0003338320027",
    "verified": true,
    "weight": "1.0 [lb_av]"
  },
  "location": {
    "locations": [
      {
        "aisle": {
          "description": "Produce",
          "number": "0"
        }
      }
    ]
  },
  "price": {
    "displayTemplate": "EveryDayLowPrice",
    "orderBy": "Unit",
    "sellBy": "Unit",
    "storePrices": {
      "regular": {
        "defaultDescription": "$3.99",
        "expirationDate": {
          "timezone": "UTC",
          "value": "9999-12-31T00:00:00Z"
        },
        "nfor": 1,
        "nforPrice": "USD 3.99",
        "unitPrice": "USD 3.99",
        "price": "USD 3.99"
      }
    }
  },
  "nutrition": {
    "allergens": "Free from Does Not Contain Declaration Obligatory Allergens.",
    "components": [
      {
        "footers": [],
        "headers": [],
        "footnotes": [],
        "preparationStates": [
          {
            "description": "Unprepared",
            "nutriFacts": [
              {
                "abbreviation": "mg",
                "dailyValue": "0",
                "precision": "Absence",
                "name": "Calcium",
                "value": "11.52"
              },
              {
                "abbreviation": "g",
                "precision": "Absence",
                "name": "Protein",
                "value": "0.48"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "2",
                "precision": "Absence",
                "name": "Phosphorus",
                "value": "17"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "4",
                "precision": "Absence",
                "name": "Copper",
                "value": "0.04"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "2",
                "precision": "Absence",
                "name": "Niacin",
                "value": "0.28"
              },
              {
                "abbreviation": "g",
                "dailyValue": "2.18",
                "precision": "Absence",
                "name": "Total Carbohydrate",
                "value": "6"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "2",
                "precision": "Absence",
                "name": "Thiamin",
                "value": "0.02"
              },
              {
                "abbreviation": "mcg",
                "dailyValue": "4",
                "precision": "Absence",
                "name": "Folate, total",
                "value": "0"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "2",
                "precision": "Absence",
                "name": "Magnesium",
                "value": "9"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "2",
                "precision": "Absence",
                "name": "Pantothenic acid",
                "value": "0.09"
              },
              {
                "abbreviation": "Number of International Units",
                "dailyValue": "0",
                "precision": "Absence",
                "name": "Vitamin D",
                "value": "0"
              },
              {
                "abbreviation": "Number of International Units",
                "dailyValue": "0",
                "precision": "Absence",
                "name": "Vitamin A",
                "value": "8.64"
              },
              {
                "abbreviation": "mcg",
                "dailyValue": "2",
                "precision": "Absence",
                "name": "Vitamin K",
                "value": "1.6"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "0.03",
                "precision": "Absence",
                "name": "Sodium",
                "value": "0.72"
              },
              {
                "abbreviation": "g",
                "dailyValue": "5",
                "precision": "Absence",
                "name": "Dietary Fiber",
                "value": "1.4"
              },
              {
                "abbreviation": "g",
                "precision": "Absence",
                "name": "Polyunsaturated Fat",
                "value": "0.112"
              },
              {
                "abbreviation": "g",
                "precision": "Absence",
                "name": "Trans Fat",
                "value": "0"
              },
              {
                "abbreviation": "g",
                "precision": "Absence",
                "name": "Monounsaturated Fat",
                "value": "0.031"
              },
              {
                "abbreviation": "g",
                "precision": "Absence",
                "name": "Sugar",
                "value": "3.521"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "2",
                "precision": "Absence",
                "name": "Potassium",
                "value": "110"
              },
              {
                "abbreviation": "mcg",
                "dailyValue": "0",
                "precision": "Absence",
                "name": "Selenium, total",
                "value": "0.288"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "45",
                "precision": "Absence",
                "name": "Vitamin C",
                "value": "42"
              },
              {
                "abbreviation": "mcg",
                "dailyValue": "0",
                "precision": "Absence",
                "name": "Vitamin B-12",
                "value": "0"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "0",
                "precision": "Absence",
                "name": "Zinc",
                "value": "0.101"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "10",
                "precision": "Absence",
                "name": "Manganese",
                "value": "0.28"
              },
              {
                "abbreviation": "Number of International Units",
                "dailyValue": "2",
                "precision": "Absence",
                "name": "Vitamin E",
                "value": "0.31"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "0",
                "precision": "Absence",
                "name": "Cholesterol",
                "value": "0"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "2",
                "precision": "Absence",
                "name": "Riboflavin",
                "value": "0.02"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "2",
                "precision": "Absence",
                "name": "Vitamin B-6",
                "value": "0.03"
              },
              {
                "abbreviation": "cal",
                "precision": "Absence",
                "name": "Calories from Fat",
                "value": "3.96"
              },
              {
                "abbreviation": "g",
                "dailyValue": "0.05",
                "precision": "Absence",
                "name": "Saturated Fat",
                "value": "0.01"
              },
              {
                "abbreviation": "mg",
                "dailyValue": "2",
                "precision": "Absence",
                "name": "Iron",
                "value": "0.3"
              },
              {
                "abbreviation": "cal",
                "dailyValue": "1.15",
                "precision": "Absence",
                "name": "Calories",
                "value": "23"
              },
              {
                "abbreviation": "g",
                "dailyValue": "0.28",
                "precision": "Absence",
                "name": "Total Fat",
                "value": "0.22"
              }
            ],
            "servingSize": "1cup (whole) (72 g)"
          }
        ],
        "ingredients": "Strawberry"
      }
    ],
    "fatFree": false,
    "glutenFree": false,
    "kosher": false,
    "liveNaturally": false,
    "lowFat": false,
    "nonGmo": false,
    "organic": false
  },
  "ship": {
    "reason": {
      "description": "ITEM_NOT_AUTHORIZED_TO_SHOW_ONLINE_FOR_SHIP_TO_HOME",
      "code": 0
    },
    "shippableItem": false
  },
  "id": "0003338320027",
  "productRestrictions": [],
  "sourceLocations": [
    {
      "id": "03500517",
      "inventory": [
        {
          "sellerId": "KR001",
          "sellerName": "Kroger",
          "stockLevel": "HIGH"
        }
      ],
      "itemLocations": [
        {
          "aisleDescription": "Produce",
          "aisleNumber": "0",
          "pogName": "Non-Planogram Item"
        }
      ],
      "modalityAvailabilities": [
        {
          "availability": true,
          "modalityType": "DELIVERY"
        },
        {
          "availability": true,
          "modalityType": "IN_STORE"
        },
        {
          "availability": true,
          "modalityType": "PICKUP"
        },
        {
          "availability": false,
          "modalityType": "SHIP"
        }
      ],
      "prices": [
        {
          "orderBy": "UNIT",
          "regular": {
            "defaultDescription": "$3.99",
            "equivalizedUnitPrice": {
              "amount": "24.94",
              "denomination": "CENT",
              "unit": "PER OUNCE"
            },
            "nFor": {
              "count": 1,
              "price": "USD 3.99"
            },
            "price": "USD 3.99"
          },
          "sellBy": "UNIT",
          "displayTemplate": "EveryDayLowPrice",
          "effectiveDate": {
            "timezone": "UTC",
            "value": "2022-01-07T13:20:33.614Z"
          },
          "expirationDate": {
            "timezone": "UTC",
            "value": "9999-12-31T00:00:00Z"
          },
          "sellerId": "KR001",
          "sellerName": "Kroger"
        }
      ],
      "restrictions": {
        "shippable": false
      },
      "laf": [
        {
          "modality": {
            "type": "PICKUP",
            "handoffLocation": {
              "storeId": "03500517",
              "facilityId": "15170"
            },
            "handoffAddress": {
              "address": {
                "postalCode": "75080",
                "stateProvince": "TX"
              }
            }
          },
          "sources": [
            {
              "storeId": "03500517",
              "facilityId": "15170"
            }
          ]
        }
      ],
      "sourceId": "03500517",
      "sellerId": "KR001",
      "sellerName": "Kroger"
    },
    {
      "id": "309DC309",
      "modalityAvailabilities": [
        {
          "availability": false,
          "modalityType": "DELIVERY"
        },
        {
          "availability": false,
          "modalityType": "IN_STORE"
        },
        {
          "availability": false,
          "modalityType": "PICKUP"
        },
        {
          "availability": false,
          "modalityType": "SHIP"
        }
      ],
      "restrictions": {
        "shippable": false
      },
      "laf": [
        {
          "modality": {
            "type": "SHIP",
            "handoffAddress": {
              "address": {
                "postalCode": "75080"
              },
              "location": {
                "lat": 32.96738052368164,
                "lng": -96.74510192871094
              }
            }
          },
          "sources": [
            {
              "storeId": "491DC001",
              "facilityId": "91"
            },
            {
              "storeId": "309DC309",
              "facilityId": "90618"
            },
            {
              "storeId": "310DC310",
              "facilityId": "90632"
            },
            {
              "storeId": "DSV00001",
              "facilityId": "00000"
            },
            {
              "storeId": "MKTPLACE",
              "facilityId": "00000"
            }
          ]
        }
      ],
      "sourceId": "309DC309"
    },
    {
      "id": "491DC001",
      "modalityAvailabilities": [
        {
          "availability": false,
          "modalityType": "DELIVERY"
        },
        {
          "availability": false,
          "modalityType": "IN_STORE"
        },
        {
          "availability": false,
          "modalityType": "PICKUP"
        },
        {
          "availability": false,
          "modalityType": "SHIP"
        }
      ],
      "restrictions": {
        "shippable": false
      },
      "laf": [
        {
          "modality": {
            "type": "SHIP",
            "handoffAddress": {
              "address": {
                "postalCode": "75080"
              },
              "location": {
                "lat": 32.96738052368164,
                "lng": -96.74510192871094
              }
            }
          },
          "sources": [
            {
              "storeId": "491DC001",
              "facilityId": "91"
            },
            {
              "storeId": "309DC309",
              "facilityId": "90618"
            },
            {
              "storeId": "310DC310",
              "facilityId": "90632"
            },
            {
              "storeId": "DSV00001",
              "facilityId": "00000"
            },
            {
              "storeId": "MKTPLACE",
              "facilityId": "00000"
            }
          ]
        }
      ],
      "sourceId": "491DC001"
    },
    {
      "id": "310DC310",
      "modalityAvailabilities": [
        {
          "availability": false,
          "modalityType": "DELIVERY"
        },
        {
          "availability": false,
          "modalityType": "IN_STORE"
        },
        {
          "availability": false,
          "modalityType": "PICKUP"
        },
        {
          "availability": false,
          "modalityType": "SHIP"
        }
      ],
      "restrictions": {
        "shippable": false
      },
      "laf": [
        {
          "modality": {
            "type": "SHIP",
            "handoffAddress": {
              "address": {
                "postalCode": "75080"
              },
              "location": {
                "lat": 32.96738052368164,
                "lng": -96.74510192871094
              }
            }
          },
          "sources": [
            {
              "storeId": "491DC001",
              "facilityId": "91"
            },
            {
              "storeId": "309DC309",
              "facilityId": "90618"
            },
            {
              "storeId": "310DC310",
              "facilityId": "90632"
            },
            {
              "storeId": "DSV00001",
              "facilityId": "00000"
            },
            {
              "storeId": "MKTPLACE",
              "facilityId": "00000"
            }
          ]
        }
      ],
      "sourceId": "310DC310"
    },
    {
      "id": "DSV00001",
      "modalityAvailabilities": [
        {
          "availability": false,
          "modalityType": "DELIVERY"
        },
        {
          "availability": false,
          "modalityType": "IN_STORE"
        },
        {
          "availability": false,
          "modalityType": "PICKUP"
        },
        {
          "availability": false,
          "modalityType": "SHIP"
        }
      ],
      "restrictions": {
        "shippable": false
      },
      "laf": [
        {
          "modality": {
            "type": "SHIP",
            "handoffAddress": {
              "address": {
                "postalCode": "75080"
              },
              "location": {
                "lat": 32.96738052368164,
                "lng": -96.74510192871094
              }
            }
          },
          "sources": [
            {
              "storeId": "491DC001",
              "facilityId": "91"
            },
            {
              "storeId": "309DC309",
              "facilityId": "90618"
            },
            {
              "storeId": "310DC310",
              "facilityId": "90632"
            },
            {
              "storeId": "DSV00001",
              "facilityId": "00000"
            },
            {
              "storeId": "MKTPLACE",
              "facilityId": "00000"
            }
          ]
        }
      ],
      "sourceId": "DSV00001"
    }
  ],
  "itemsV1": {
    "product": {
      "familyTree": {
        "primaryDepartment": {
          "code": "07",
          "name": "PRODUCE",
          "recapDepartment": {
            "code": "19",
            "name": "FRESH PRODUCE",
            "department": {
              "code": "19",
              "name": "FRUIT"
            }
          }
        },
        "commodity": {
          "code": "604",
          "name": "BERRIES"
        },
        "subCommodity": {
          "code": "98035",
          "name": "STRAWBERRIES"
        }
      },
      "id": "1002590799",
      "nutritionalRating": "96"
    }
  },
  "laf": [
    {
      "sources": [
        {
          "storeId": "03500517",
          "facilityId": "15170"
        }
      ],
      "modality": {
        "type": "PICKUP",
        "handoffAddress": {
          "address": {
            "stateProvince": "TX",
            "postalCode": "75080"
          }
        },
        "handoffLocation": {
          "storeId": "03500517",
          "facilityId": "15170"
        }
      },
      "priceAvailabilities": [
        {
          "storeId": "03500517",
          "lookup": "SOURCE_ID",
          "id": "03500517"
        }
      ]
    },
    {
      "sources": [
        {
          "storeId": "491DC001",
          "facilityId": "91"
        },
        {
          "storeId": "309DC309",
          "facilityId": "90618"
        },
        {
          "storeId": "310DC310",
          "facilityId": "90632"
        },
        {
          "storeId": "DSV00001",
          "facilityId": "00000"
        },
        {
          "storeId": "MKTPLACE",
          "facilityId": "00000"
        }
      ],
      "modality": {
        "type": "SHIP",
        "handoffAddress": {
          "address": {
            "postalCode": "75080"
          }
        }
      },
      "priceAvailabilities": []
    }
  ],
  "inventorySummaries": []
}
```

