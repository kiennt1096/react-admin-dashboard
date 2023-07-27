import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from "@fullcalendar/core";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Thêm ngày đòi nợ:");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Bạn đã chắc chắn thu hồi được nợ '${selected.event.title}' chưa?`
            )
        ) {
            selected.event.remove();
        }
    };

    return (
        <Box
            m="20px"
            sx={{
                "& .fc .fc-list-sticky .fc-list-day > *": {
                    background: colors.blueAccent[500],
                },
                "& .fc-list-event:hover": {
                    color: `${colors.blueAccent[500]} !important`,
                },
            }}
        >
            <Header
                title="Lịch đòi nợ"
                subtitle="Quản lý lịch thu hồi nợ của bạn!"
            ></Header>

            <Box display="flex" justifyContent="space-between">
                {/* SIDEBAR */}
                <Box
                    flex="1 1 20%"
                    backgroundColor={colors.primary[400]}
                    p="15px"
                    borderRadius="4px"
                >
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.blueAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            <Typography>
                                                {formatDate(event.start, {
                                                    year: "numeric",
                                                    month: "numeric",
                                                    day: "numeric",
                                                })}
                                            </Typography>
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/*CALENDAR */}
                <Box flex="1 1 20px" ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: "1234",
                                title: "Đòi nợ Phong 3 tỷ",
                                date: "2023-07-30",
                            },
                            {
                                id: "432",
                                title: "Đòi nợ Khang 4000man",
                                date: "2023-07-31",
                            },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;
