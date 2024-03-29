import { housemates } from "../helpers"

const totalVotes = 100 
const houseMatesUpForEviction = [{
        id: 1,
        name: 'laycon',
        avatar: require("../assets/laycon.jpg"),
        voteCount: 0

    },
    {
        id: 2,
        name: 'lilo',
        avatar: require("../assets/lilo.jpeg"),
        voteCount: 0
    },
    {
        id: 3,
        name: 'trikkytee',
        avatar: require("../assets/trikkytee.jpg"),
        voteCount: 0
    },
    {
        id: 4,
        name: 'vee',
        avatar: require("../assets/vee.jpg"),
        voteCount: 0
    }

]
const themes  =  {
    light: {
        foreground: "#ffffff",
        background: "#000000"
    },
    dark: {
        foreground: "#000000",
        background: "#ffffff"
    }
}

const getUser =  (screen_name) => {
    const house  = housemates() 

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(house.find(housemate => housemate.screen_name === screen_name))
        reject("Failure")
      }, 3000)
    })
}


export {totalVotes, houseMatesUpForEviction,themes,getUser}
