export interface campus {
    date ?: string;
    description ?: string;
    id ?: number
    image : string;
    main : main;
    main_headquarter?: boolean
    name ?: string
    sys ?: sys;
    weather : Array<any>
    wind : wind;
}

interface main {
    temp : number;
    humidity?: number;
}

interface sys {
    id ?: number
    country?: string;
}

interface wind {
    speed ?: number;
    deg ?: number;
}
