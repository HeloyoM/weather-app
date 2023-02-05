export interface IForecast {
    DailyForecasts: DailyForecast[]
}

export interface DailyForecast {
    Date: Date;
    EpochDate: number;
    Temperature: Temperature;
    Day: Day;
    Night: Night;
    Sources: string[];
    MobileLink: string;
    Link: string;
}

export interface Temperature {
    Minimum: TempValue
    Maximum: TempValue
}

export interface Day {
    Icon: number
    IconPhrase: string
    HasPrecipitation: boolean
}

export interface TempValue {
    Value: number
    Unit: string
    UnitType: number
}

export interface Night {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
}

