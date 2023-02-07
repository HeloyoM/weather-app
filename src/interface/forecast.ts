export interface IForecast {
    Headline: Headline
    DailyForecasts: DailyForecast[]
}
export interface DailyForecast {
    Date: string
    EpochDate: number
    Temperature: Temperature
    Day: Precipitation
    Night: Precipitation
    Sources: string[]
    MobileLink: string
    Link: string
}

export interface Headline {
    EffectiveDate: string
    EffectiveEpochDate: number
    Severity: number
    Text: string
    Category: string
    EndDate: string
    EndEpochDate: number
    MobileLink: string
    Link: string
}

export interface Tempvalue {
    Value: number
    Unit: string
    UnitType: number
}

export interface Temperature {
    Minimum: Tempvalue
    Maximum: Tempvalue
}

export interface Precipitation {
    Icon?: number
    IconPhrase?: string
    HasPrecipitation?: boolean
    PrecipitationType?: string
    PrecipitationIntensity?: string
}

