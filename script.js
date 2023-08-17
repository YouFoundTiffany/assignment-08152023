// console.log('javascript is loading') successful

const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    building: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    building: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    building: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    building: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    building: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    building: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    building: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    building: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    building: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    building: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    building: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    building: '🏢',
}
]


// let person = people[i]


for (let i = 0; i < people.length; i++) {
    let person = people[i]
    // console.log(person)
    // console.log(person.name, person.picture, person.location)
}


// draw people to location
//pull locations from array and consol log
// define inArea and filter so we can difne who is at which location
// Map each person at each location and draw them to the DOM screen by their 'location' array, alias by me earlier in the draw people function. 
function drawPlp() {
    locations.forEach((location, index) => {
        location
        // console.log(location)
        let inArea = people.filter(person => person.building == location)
        console.log(inArea)

        let peopleEmojis = inArea.map(person => person.picture)
        console.log(peopleEmojis)
        document.getElementById(location).innerText = peopleEmojis
    })
}
// In Area function Find out Who is Where, maybe this should be current area?
// function inArea() {
//     let inArea = people.filter(person => person.builiding == location)
//     console.log(inArea)
// }


//find all people at hotel
function mkBatHot() {
    people.forEach(person => {
        if (person.building == '🏤') {
            (person.picture = '🦇')
        }
    })
    drawPlp()
}

function mkBatHos() {
    people.forEach(person => {
        if (person.building == '🏥') {
            (person.picture = '🦇')
        }
    })
    drawPlp()
}

function mkBatsFac() {
    people.forEach(person => {
        if (person.building == '🏭')
            (person.picture = '🦇')
    })
    drawPlp()
}

function mkBatCon() {
    people.forEach(person => {
        if (person.building == '🏢')
    })
    drawPlp()
}
