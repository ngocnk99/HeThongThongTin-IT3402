class Education {
    constructor(name, majors, time) {
        this.name = name;
        this.majors = majors;
        this.time = time;
    }
}
class Experiences {
    constructor(company, position, time) {
        this.company = company;
        this.position = position;
        this.time = time;
    }
}
class Common {
    constructor(main, support, note) {
        this.main = main;
        this.support = support;
        this.note = note;
    }
}

export { Education, Experiences, Common }