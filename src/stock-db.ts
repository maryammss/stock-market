
export var COURSES: any = [

    {
        id: 1,
        name: "Angular Core Deep Dive",
        purchasePrice: 23566,
        currentPrice: 64646,
        indicator: 174
    },
    {
        id: 2,
        name: "RxJs In Practice Course",
        purchasePrice: 1200,
        currentPrice: 1200,
        indicator: 0
    },

    {
        id: 3,
        name: 'NgRx In Depth',
        purchasePrice: 34567,
        currentPrice: 34557,
        indicator: 0
    },

    {
        id: 4,
        name: "Angular for Beginners",
        purchasePrice: 730,
        currentPrice: 865,
        indicator: 18
    },
    {
        id: 5,
        name: 'Angular Security Course',
        purchasePrice: 790,
        currentPrice: 834,
        indicator: 5
    },
    {
        id: 6,
        name: 'Angular PWA Course',
        purchasePrice: 1567,
        currentPrice: 1487,
        indicator: - 5
     
    },
    {
        id: 7,
        name: 'Angular Advanced Course',
        purchasePrice: 267,
        currentPrice: 287,
        indicator: 7
    },
    {
        id: 8,
        name: 'Complete Typescript Course',
        purchasePrice: 536,
        currentPrice: 346,
        indicator: -35
    },
    {
        id: 9,
        name: 'Angular Architecture Course',
        purchasePrice: 309,
        currentPrice: 385,
        indicator: 24
    },
    {
        id: 10,
        name: "Angular Material Course",
        purchasePrice: 1324,
        currentPrice: 1325,
        indicator: 0
    }

];


export function findCourseById(courseId:any) {
    return COURSES.find((course: any)  => course.id == courseId);
}

export function deleteCourseById(courseIndex: any) {
   
    COURSES.splice(courseIndex, 1)
    return COURSES;
}
