import {
    ColumnDef,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

// "allowedToOperate": "Y",
//       "bipdInsuranceOnFile": "5000",
//       "bipdInsuranceRequired": "Y",
//       "bipdRequiredAmount": "5000",
//       "bondInsuranceOnFile": "0",
//       "bondInsuranceRequired": "Y",
//       "brokerAuthorityStatus": "I",
//       "cargoInsuranceOnFile": "0",
//       "cargoInsuranceRequired": "u",
//       "commonAuthorityStatus": "A",
//       "contractAuthorityStatus": "A",
//       "crashTotal": 92,
//       "dbaName": "BOLT BUS",
//       "dotNumber": 44110,
//       "driverInsp": 817,
//       "driverOosInsp": 7,
//       "driverOosRate": 0.8567931456548348,
//       "driverOosRateNationalAverage": "5.51",
//       "ein": 860572343,
//       "fatalCrash": 6,
//       "hazmatInsp": 0,
//       "hazmatOosInsp": 0,
//       "hazmatOosRate": 0,
//       "hazmatOosRateNationalAverage": "4.5",
//       "injCrash": 40,
//       "isPassengerCarrier": "Y",
//       "issScore": null,
//       "legalName": "GREYHOUND LINES INC",
//       "mcs150Outdated": "N",
//       "oosDate": null,
//       "oosRateNationalAverageYear": "2009-2010",
//       "phyCity": "DALLAS",
//       "phyCountry": "US",
//       "phyState": "TX",
//       "phyStreet": "9773 HARRY HINES BLVD",
//       "phyZipcode": "75220",
//       "reviewDate": "2024-09-09",
//       "reviewType": "N",
//       "safetyRating": "S",
//       "safetyRatingDate": "2023-06-09",
//       "safetyReviewDate": "2024-09-09",
//       "safetyReviewType": "N",
//       "snapshotDate": null,
//       "statusCode": "A",
//       "totalDrivers": 1160,
//       "totalPowerUnits": 872,
//       "towawayCrash": 46,
//       "vehicleInsp": 286,
//       "vehicleOosInsp": 18,
//       "vehicleOosRate": 6.293706293706293,
//       "vehicleOosRateNationalAverage": "20.72"

export const Columns: ColumnDef<any>[] = [
    {
        accessorKey: "dotNumber",
        header: "DOT Number",
    },
    {
        accessorKey: "allowedToOperate",
        header: "Allowed to Operate"
    },
    {
        accessorKey: "bipdInsuranceOnFile",
        header: "BIPD Insurance On File"
    },
    {
        accessorKey: "bipdInsuranceRequired",
        header: "BIPD Insurance Required"
    },
    {
        accessorKey: "bipdRequiredAmount",
        header: "BIPD Required Amount"
    },
    {
        accessorKey: "bondInsuranceOnFile",
        header: "Bond Insurance On File"
    },
    {
        accessorKey: "bondInsuranceRequired",
        header: "Bond Insurance Required"
    },
    {
        accessorKey: "brokerAuthorityStatus",
        header: "Broker Authority Status"
    },
    {
        accessorKey: "cargoInsuranceOnFile",
        header: "Cargo Insurance On File"
    },
    {
        accessorKey: "cargoInsuranceRequired",
        header: "Cargo Insurance Required"
    },
    {
        accessorKey: "commonAuthorityStatus",
        header: "Common Authority Status"
    },
    {
        accessorKey: "contractAuthorityStatus",
        header: "Contract Authority Status"
    },
    {
        accessorKey: "crashTotal",
        header: "Crash Total"
    },
]
