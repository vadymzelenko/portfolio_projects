# Cargo Analytics Dashboard

An analytics dashboard for cargo tonnage data: interactive charts, faceted filtering, record management and export to CSV or Excel. Data is stored in Supabase.

## Features

- Tonnage overview with stacked charts by shipment and by vehicle, inbound and outbound trends and route distribution
- Faceted filters by year, month, origin, destination, shipment, vehicle type and vehicle id
- Data management page: create, edit and delete records
- Export of the filtered dataset to CSV or XLSX
- Dark and light themes, responsive layout

## Stack

Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui (Radix UI), Recharts, Supabase, SheetJS.

## Getting started

```bash
cp .env.example .env.local   # Supabase URL and anon key
npm install
npm run dev                  # http://localhost:3000
```

| Route | Page |
|---|---|
| `/` | Tonnage analytics |
| `/metrics` | Metrics overview |
| `/data-management` | Record management |

## Database

The app reads and writes the `Raya-Tonnage` table. The record shape is described by `TonnageRecord` in `lib/supabase.ts` (date, shipment id, vehicle type and id, weight in kilograms, origin, destination and route attributes).

The browser uses the public anon key, so access must be restricted with Row Level Security policies in Supabase. Never expose the `service_role` key in client code.

## License

[MIT](LICENSE) © Vadym Zelenko
