class OpenCloseButton {
    constructor(idButton, idForm) {
        this.button = document.getElementById(idButton);
        this.form = document.getElementById(idForm);
        this.is_form_closed = true;
        this.message_sent = false;
        
        this.form.addEventListener("submit", function (event) {
            let send_button = document.getElementById("submit");
            setTimeout(() => {
                send_button.innerHTML = "Sending..."
            }, 150);
            send_button.style.filter = "invert(100%)";
            
            event.preventDefault();
            let form_data = new FormData(event.target);
            let payload = {};
            for (let [k, v] of form_data) {
                payload[k] = v
            }
            
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                setTimeout(() => {
                    send_button.innerHTML = this.status == 200 ? "Sent" : "An error occured"
                }, 150);
                send_button.style.filter = "";
                my_contact_form.message_sent = true;
            };
            xhr.open("POST", "https://8xmzncirgb.execute-api.ap-southeast-2.amazonaws.com/contactme");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(payload));
        })
        
        
        this.switch_state = () => {
            if (this.is_form_closed) {
                this.open_form();
            } else {
                this.close_form();
            }
        }
        
        this.close_form = () => {
            this.button.style.transform = "rotate(0deg)";
            this.is_form_closed = true;
            this.form.style.bottom = closed_bottom;
            setTimeout(() => {
                if (this.message_sent) {
                    this.form.reset();
                    this.send_button.innerHTML = "Send"
                }
            }, 500);
        }
        
        this.open_form = () => {
            if (on_small_screen) {
                this.form.scrollIntoView()
            } else {
                this.button.style.transform = "rotate(180deg)";
                this.is_form_closed = false;
                this.form.style.bottom = opened_bottom;
            }
        }
        this.button.addEventListener("click", this.switch_state)
    }
}

const on_small_screen = window.innerWidth < 600;
const my_contact_form = new OpenCloseButton("open-close-button", "contact-form");
const opened_bottom = "30px";
const closed_bottom = 55 - my_contact_form.form.offsetHeight + "px";
my_contact_form.close_form();