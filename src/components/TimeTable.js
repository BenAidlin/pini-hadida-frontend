class TimeTable extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        timetableProps: {
          events: {
            monday: [
              {
                id: 1,
                name: "Custom Event 1",
                type: "custom",
                startTime: moment("2018-02-23T11:30:00"),
                endTime: moment("2018-02-23T13:30:00")
              }
            ],
            tuesday: [
              {
                id: 2,
                name: "Custom Event 2",
                type: "custom",
                startTime: moment("2018-02-22T12:30:00"),
                endTime: moment("2018-02-22T14:30:00")
              },
              {
                id: 3,
                name: "Custom Event 3",
                type: "custom",
                startTime: moment("2018-02-22T16:30:00"),
                endTime: moment("2018-02-22T18:45:00")
              }
            ],
            wednesday: [],
            thursday: [],
            friday: []
          },
          hoursInterval: [1, 24],
          timeLabel: "Time :)",
          renderHour(hour, defaultAttributes, styles) {
            return (
              <div
                {...defaultAttributes}
                key={hour}
                style={{
                  ...defaultAttributes.style,
                  textAlign: "center",
                  textDecoration: "underline"
                }}
              >
                {hour}
              </div>
            );
          },
          renderEvent(event, defaultAttributes, styles) {
            return (
              <div
                {...defaultAttributes}
                title={event.name}
                key={event.id}
                style={{
                  ...defaultAttributes.style,
                  background: "#000",
                  borderRadius: "50px"
                }}
              >
                <span className={styles.event_info}>[ {event.name} ]</span>
                <span className={styles.event_info}>
                  {event.startTime.format("HH:mm")} -{" "}
                  {event.endTime.format("HH:mm")}
                </span>
              </div>
            );
          }
        }
      };
    }
  
    render() {
      return <Timetable {...this.state.timetableProps} />;
    }
  }

  export default TimeTable;