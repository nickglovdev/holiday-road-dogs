import { useEateris } from "./EateryProvider.js"

const contentTarget = document.querySelector(".eateryDropdown")
const eventHub = document.querySelector(".container")

export const eaterySelector = () => {
    const eateries = useEateris()
    
    const render = (eateryCollection) => {

        contentTarget.innerHTML = `
        <select class="" id="eaterySelect">
            <option value="0">Select Dining</option>
            ${
                eateryCollection.map(eatery => {
                    return `<option>${eatery.businessName}</option>`
                })
            }
        </select>`
    }
    render(eateries)
}
