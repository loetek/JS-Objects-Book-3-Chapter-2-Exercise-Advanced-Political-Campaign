// const hShot = document.getElementsByClassName('.candidate');
// const fShot = document.getElementsByClassName('.candidateFamily');
// const vShot = document.getElementsByClassName('.voters');


const candidate = {

    candidateInfo: {
        name: "Elizabeth Sanger",
        nickname: "Betty",
        district: "Tennessee 5th Congressional District"
    },

    candidateStance: {

        taxes: "Taxes are only effective if they are used in the right way",
        jobs: "Jobs are the keystone to my campaign and I will bring some pretty sweet jobs!",
        infrastructure: "We are quickly becoming a country that prides itself in outdated infrastructure and ruins of a once strong core federal government",
        healthCare: "Single Payer or bust",
        crime: "Let's stop turning people into criminals and disband the for profit prison system."

    },

    donationURL: "www.giveMeYoMonies.ru",

    eventsCalendar: 
    {


        week1: {
            Sun: "Baby kissing at tattoo parlor!",
            Mon: "Off",
            Tues: "Off",
            Wed: "Kicking it with some peeps!",
            Thurs: "Off",
            Fri: "Gambling",
            Sat: "Running from the law: Full Marathon"
        },

        week2: {
            Sun: "Opening new 'medical' dispensary",
            Mon: "Off",
            Tues: "Off",
            Wed: "Kicking it with some peeps!",
            Thurs: "Off",
            Fri: "Drinking",
            Sat: "Sleeping"
        },
        week3: {
            Sun: "Off",
            Mon: "Off",
            Tues: "Off",
            Wed: "Off",
            Thurs: "Off",
            Fri: "Drugs",
            Sat: "Off"
        },
        week4: {
            Sun: "Partying at the retirement home!",
            Mon: "Off",
            Tues: "Off",
            Wed: "Flying drones at the airport!",
            Thurs: "Off",
            Fri: "Loving",
            Sat: "Chasing kids with my dogs at the park"
        }
    
    },
    

    volunteerDB: 
    {

        members: 
        [
            { 
                name: "Joe Schmoe",
                address: "12345 Fiction Lane Anywhere USA",
                email: "jSchmoe@email.com",
                phoneNumber: 555.5555,
                activities: "Whatever needs to be done.",
                availabilty: " Mon, Wed, Fri"

            },
            { 
              name: "Jane Schmoe",
                address: "12345 Fiction Lane Anywhere USA",
                email: "jSchmoe@email.com",
                phoneNumber: 555.5555,
                activities: "Only the cool stuff.",
                availabilty: " Mon, Wed, Fri"
            },      
              
            {       
                name: "Joe Jr Schmoe",
                address: "12345 Fiction Lane Anywhere USA",
                email: "jSchmoe@email.com",
                phoneNumber: 555.5555,
                activities: "Nothing really my mom is making me do this. ",
                availabilty: " Mon "
            }

        ]

    },

    biography: "If you're working forty hours a week, you shouldn't be living in poverty. Instead, they expressed a profoundly distorted view of this country - a view that sees white racism as endemic, and that elevates what is wrong with America above all that we know is right with America; a view that sees the conflicts in the Middle East as rooted primarily in the actions of stalwart allies like Israel, instead of emanating from the perverse and hateful ideologies of radical Islam.",

   

    images:
    {

        headshot: "https://elizabethwarren.com/wp-content/uploads/2018/11/44735774332_d96e6f8271_o.jpg",
        familyShot: "https://pbs.twimg.com/media/C0eBtDjUsAAcSn2.jpg",
        voters: "https://pbs.twimg.com/media/C0eBtDjUsAAcSn2.jpg"
    },

    missonStatment:"Drawing on her experience successfully taking on the financial industry even in the face of fierce opposition from Wall Street and big corporations, Elizabeth has effectively fought to expose big banks, fraudulent lenders, and greedy for-profit colleges that have preyed on borrowers, students, members of the armed services, and taxpayers.  Her work has resulted in real accountability for executives at Wells Fargo who conspired to defraud customers, changed rules to help prevent taxpayer bailouts of Wall Street risk-takers, led to new laws to protect students from being ripped off by predatory institutions, and helped tens of thousands of people get their money back when they were scammed.",


    voterURL: "https://ovr.govote.tn.gov/Registration/RegistrationDetails/BM"


}




function changeCandidateInfo ( newInfo, key ) {

    candidate.candidateInfo[key] = newInfo; 
    
    }

changeCandidateInfo("Monty Python" , "name");
changeCandidateInfo("Eric", "nickname");
changeCandidateInfo("District 12", "district");



 function updateStance (stanceInfo , key){

  candidate.candidateStance[key] = stanceInfo;

}

updateStance("Nope" , "taxes");
updateStance("More" , "jobs");
updateStance("Bad" , "infrastructure");
updateStance("Fix it" , "healthCare");
updateStance("Bad" , "crime");

console.log (candidate.candidateStance)


function updateDonation( newDonate ){
    
    candidate.donationURL = newDonate;

}

updateDonation("www.giveMoreMonies.us");
console.log(candidate.donationURL)

// function updateEventsCalendar(){

//     Updates to updateEventsCalendar.
// }

// function updateVolunteerDB (){

//     Updates to the volunteer database.
// }

// function updateBiography (){

//     update existing biography.
// }

// function updateImages(){


// }

// function updateMission() {


// }

// function updateVoteURL (){


// }