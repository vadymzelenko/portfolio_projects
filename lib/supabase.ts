import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.warn("Supabase is not configured: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (see .env.example)")
}

// Placeholders keep the build and the UI working without credentials; requests will simply fail.
export const supabase = createClient(supabaseUrl || "http://localhost:54321", supabaseKey || "anon-key-not-set")

export interface TonnageRecord {
  id: number
  Date: string
  "Flight No.": string // Keeping database field name for compatibility, but will display as "Shipment ID"
  ACM: string // Will display as "Vehicle Type"
  KG: number
  Reg: string // Will display as "Vehicle ID"
  Month: string
  Year: number
  Day: string
  Sector: string
  Dep: string // Will display as "Origin"
  Arr: string // Will display as "Destination"
  "Out/In": string
  Station: string
  "Dom/Int": string
}
