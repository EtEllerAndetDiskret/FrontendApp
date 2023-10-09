import { API_URL } from "../../settings";

export async function initCalender() {
    await loadCalender();
}

async function loadCalender(){
    const calender = await fetch(API_URL + "/calender").then((res) => res.json());
    console.log(calender);


document.addEventListener("DOMContentLoaded",function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const dateInput = document.querySelector("#date");
    const timeInput = document.querySelector("#time");

    const selectedDate = dateInput.value;
    const selectedTime = timeInput.value;

    console.log("Valgt dag", selectedDate)
    console.log("Valgt tidspunkt", selectedTime)
    });
});
};
