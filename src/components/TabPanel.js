import Timetable from 'react-timetable-events'
import {format} from 'date-fns'

const TabPanel = (props) => {
    const {items, theme, value, index, ...other } = props;
    
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value===index ? ( 
            <Timetable 
            events={items[index].events}
            hoursInterval={{from: items[index].startTime, to: items[index].endTime}}
            timeLabel={"שעה"}
            style={{ 
            height: '70vh',
            marginTop: '1vh',
            color: theme.typography.color,
            fontFamily: theme.typography.fontFamily,
    
            }}
            headerAttributes={{
                "style": {
                backgroundColor: theme.palette.primary.main,              
            }
            }}
            bodyAttributes={{
    
            }}
            renderHour={(hourProps)=>{
            return <div key={hourProps.hour} className={hourProps.className} 
            style={Object.assign(hourProps.style, {
                backgroundColor: theme.palette.primary.main,             
                })}>
                {hourProps.hour}
                </div>}}
            renderEvent={(eventProps)=>{
            console.log(eventProps);
            return (
                <div
                className={eventProps.defaultAttributes.className}
                title={eventProps.event.name}
                key={eventProps.event.id}
                style={
                Object.assign(eventProps.defaultAttributes.style,{
                    backgroundColor: theme.palette.decorative.darkGrey,
                    borderColor: theme.palette.decorative.lightBrown,
                    borderStyle: "solid",
                    borderWidth: "1px"
                })
                }
            >
                <span > {eventProps.event.name} </span>
                <span >
                {format(eventProps.event.startTime, "HH:mm")} -{" "}
                    {format(eventProps.event.endTime,"HH:mm")}
                </span>
            </div>
            )
            }}
        />
        ) : ""}
        </div>
    );
};
export default TabPanel;