class OpenCloseButton {
    constructor(idButton, idForm) {
        this.button = document.getElementById(idButton);
        this.form = document.getElementById(idForm)

        this.form.addEventListener("submit", function (event) {
            event.preventDefault();
            let form_data = new FormData(contact_form);
            let payload = {};
            for (let [k, v] of form_data) {
                payload[k] = v
            }
        
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                console.log(this.response);
            };
            xhr.open("POST", "https://8xmzncirgb.execute-api.ap-southeast-2.amazonaws.com/contactme");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(payload));
        })

        this.isFormClosed = true;
        
        this.switch_state = () => {
            if (this.isFormClosed) {
                this.open_form();
            } else {
                this.close_form();
            }
        }
        
        this.close_form = () => {
            this.button.style.transform = "rotate(0deg)";
            this.isFormClosed = true;
            this.form.style.bottom = "-270px";
        }
        
        this.open_form = () => {
            if (on_small_screen) {
                this.form.scrollIntoView()
            } else {
                this.button.style.transform = "rotate(180deg)";
                this.isFormClosed = false;
                this.form.style.bottom = "30px";
            }
        }
        this.button.addEventListener("click", this.switch_state)
    }
}

const on_small_screen = window.innerWidth < 600;
const my_contact_form = new OpenCloseButton("open-close-button", "contact-form");