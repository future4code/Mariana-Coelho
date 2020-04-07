import { Mission } from './mission'

class MobileMission extends Mission {
    constructor(
            startDate: string,
            endDate: string,
            public missionNumber: number,
    
        )
        
        {
            super(startDate, endDate)
        }
}