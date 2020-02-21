import { Mission } from './mission'

class WebMission extends Mission {
    constructor(
            startDate: string,
            endDate: string,
            teachersList: string[],
            studentsList: string[],
            public patron: string,
    
        )
        
        {
            super(startDate, endDate, teachersList, studentsList)
        }
}