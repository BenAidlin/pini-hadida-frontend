import './../style/Schedule.css'
import Calendar from '../components/Calendar';

const events = [{ title: "today's event", date: new Date() }];
const Schedule = (props) => {
    
    return (
        <div className="schedule">
        <Calendar/>

        </div>        
    );
}

export default Schedule;