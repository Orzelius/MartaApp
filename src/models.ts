export interface measure {
  abbr: string,
  measure: string,
  plural: string,
  singular: string,
  system: string,
  pickItem: JSX.Element
}

export interface conversion {
  from: measure,
  to: measure,
  value: number,
  con_value: number,
  key: number
}