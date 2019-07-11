import React from "react"

function Contact(props) {
    console.log(props)
return (
    <div className="contacts">
        <div className="contact-card">
            <img src="http://www.yespetshop.com/private_folder/kitten-1.jpg" />
            <h3>เหมียวน้อย</h3>
            <p>phone: 11111111</p>
            <p>Email: Meow1@gg.gg</p>
        </div>
    </div>
)
}

export default Contact