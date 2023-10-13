import { API_URL } from '../../settings.js';
import { handleHttpErrors } from '../../utils.js';




export async function initLogin() {
    await login();
   
}
async function login() {

   
    document.getElementById("btn-login").onclick = loginLogoutClick;
    document.getElementById("btn-logout").onclick = loginLogoutClick;

    const userNameInput = document.getElementById("input-user");
    const passwordInput = document.getElementById("input-password");
    const responseStatus = document.getElementById("response");
    const loginContainer = document.getElementById("login-container");
    const logoutContainer = document.getElementById("logout-container");
    const userDetails = document.getElementById("user-details");

    const token = localStorage.getItem("token");
    //If token existed, for example after a refresh, set UI accordingly
    toogleLoginStatus(token);


    async function loginLogoutClick(evt) {
        evt.stopPropagation(); //prevents the event from bubling further up
        responseStatus.innerText = "";
        const logInWasClicked = evt.target.id === "btn-login" ? true : false;
        if (logInWasClicked) {
            //Make the request object
            const loginRequest = {};
            loginRequest.username = userNameInput.value;
            loginRequest.password = passwordInput.value;
            const options = {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(loginRequest),
            };
            try {
                const res = await fetch(API_URL + "/auth/login", options).then(
                    handleHttpErrors
                );
                storeLoginDetails(res);
            } catch (err) {
                responseStatus.style.color = "red";
                if (err.apiError) {
                    responseStatus.innerText = err.apiError.message;
                } else {
                    responseStatus.innerText = err.message;
                }
            }
        } else {
            //Logout was clicked
            clearLoginDetails();
        }
        if (localStorage.getItem("token") !== null) {
            console.log("token er ikke null")
            window.router.navigate("/");
        }
    }

    /**
     * Store username, roles and token in localStorage, and update UI-status
     * @param res - Response object with details provided by server for a succesful login
     */
    function storeLoginDetails(res) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", res.username);
        localStorage.setItem("roles", res.roles);
        //Update UI
        toogleLoginStatus(true);
        responseStatus.innerText = "";
    }

    /**
     * Remove username, roles and token from localStorage, and update UI-status
     */
    function clearLoginDetails() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("roles");
        //Update UI
        toogleLoginStatus(false);
        responseStatus.innerText = "";
    }

    /**
     * Toogles, and updates the part of the UI related to login/logout
     * @param loggedIn - true if user are loggedin otherwise false
     */
    function toogleLoginStatus(loggedIn) {
        loginContainer.style.display = loggedIn ? "none" : "block";
        logoutContainer.style.display = loggedIn ? "block" : "none";
        const statusTxt = loggedIn
            ? `Hi! ${localStorage["user"]} `
            : "";
        userDetails.innerText = statusTxt;
    }


    function setResponseText(txt, isOK) {
        responseStatus.style.color = isOK ? "darkgreen" : "red";
        responseStatus.innerText = txt;
    };

}
