import { useEffect, useState } from "react"

export function Currencyinfo(currency: string): Record<string, number> {
  const [data, setData] = useState<Record<string, number>>({})

  useEffect(() => {
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((error) => console.error("Error fetching currency data:", error))
  }, [currency])

  return data
}
