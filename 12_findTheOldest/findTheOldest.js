function findTheOldest(people) {
    let peopleEdited = people
    return peopleEdited.reduce((currentOldest, person) => {
        if (("yearOfDeath" in person === false) && (new Date().getFullYear() - person.yearOfBirth > currentOldest.yearOfDeath - currentOldest.yearOfBirth)) {
            person.yearOfDeath = new Date().getFullYear()
            return person;
        } else if (person.yearOfDeath - person.yearOfBirth > currentOldest.yearOfDeath - currentOldest.yearOfBirth) {
            return person;
            };
        return currentOldest;
    }, {yearOfBirth: 0, yearOfDeath: 0});
};

// Do not edit below this line
module.exports = findTheOldest;
