const returnItineraryButton = document.querySelector(".button--close")

returnItineraryButton.addEventListener("click", clickEvent => {
    // const parkDetails = document.querySelector(".park__details")
    // parkDetails.style.display = ""
    console.log('button clicked')
}) 


export const parkHTML = (park) => {
    return `
        <div class="parkInfo">
                <div>Location: ${park.addresses[0].city}, ${park.addresses[0].stateCode}</div>
                <div>Phone Number: ${park.contacts.phoneNumbers[0].phoneNumber}</div>
                <div>Email: ${park.contacts.emailAddresses[0].emailAddress}</div>
                <div>${park.description}</div>
                
            </div>
        </div>
    `
}

