import React from "react"
import Contact from "./Contact"
import LikeCount from "./LikeCount";

const myprofile = [
    {
        id: 5705100032,
        firstname: 'Sikkarin',
        lastname: 'Pongsombat',
        year: "04/02/1996"
    }
]
const date = new Date()
const hours = date.getHours()
let timeOfDay
const styles = {
    fontSize: 24
}
if (hours < 12) {
    timeOfDay = "ตอนเช้า"
    styles.color = "#04756F"
} else if (hours >= 12 && hours < 17) {
    timeOfDay = "ตอนบ่าย"
    styles.color = "#2E0927"
} else {
    timeOfDay = "ยามดึก"
    styles.color = "#D90000"
}

const MainContent = () => <Myprofile myprofile={myprofile} />

const Myprofile = ({ myprofile }) => (
    <ul>
        {myprofile.map(item => (
            <MyprofileItem key={item.id} item={item} />
        ))}
    </ul>
)

const MyprofileItem = ({ item }) => (
    <div>
        <h1 style={styles}>สวัสดี{timeOfDay}</h1>
        <img src={require('./Mypic.JPG')} />
        <p>It is currently about {date.getHours() % 12} o'clock</p>
        <h1> About Me </h1>
        <div>ID: {item.id}</div>
        <div>Firstname: {item.firstname}</div>
        <div>Lastname: {item.lastname}</div>
        <div>Birthday: {item.year}</div>
        <LikeCount />
    </div>

)

export default MainContent