import './../style/Schedule.css'
import Calendar from '../components/Calendar';

const events = [{ title: "today's event", date: new Date() }];
const Schedule = (props) => {
    const bjjText = " ג'יוג'יטסו ברזילאי בהנחיית פיני חדידה";
    const muayThaiText = "19 אגרוף תאילנדי בהנחיית אריאל פיסחוב"
    const mmaText = "mma ,מזרון פתוח - ג'יוג'יטסו ברזילאי, אגרוף תאילנדי"
    const events =  [
        {
          id: 1,
          text: bjjText,
          start: "2022-11-07T20:00:00",
          end: "2022-11-07T22:00:00",
          barColor: "orange",
          resource: "R1"
        },
        {
          id: 2,
          text: muayThaiText,
          start: "2022-11-07T19:00:00",
          end: "2022-11-07T20:30:00",
          barColor: "black",
          resource: "R2"
        },
        {
            id: 3,
            text: bjjText,
            start: "2022-11-07T20:00:00",
            end: "2022-11-07T22:00:00",
            barColor: "orange",
            resource: "R3"
          },
          {
            id: 4,
            text: muayThaiText,
            start: "2022-11-07T19:00:00",
            end: "2022-11-07T20:30:00",
            barColor: "black",
            resource: "R4"
          },
          {
            id: 5,
            text: bjjText,
            start: "2022-11-07T20:00:00",
            end: "2022-11-07T22:00:00",
            barColor: "orange",
            resource: "R5"
          },
          {
            id: 6,
            text: mmaText,
            start: "2022-11-07T14:30:00",
            end: "2022-11-07T16:00:00",
            barColor: "purple",
            resource: "R6"
          },
        ]
    return (
        <div className="schedule">        
        <Calendar events={events}/>

        </div>        
    );
}

export default Schedule;