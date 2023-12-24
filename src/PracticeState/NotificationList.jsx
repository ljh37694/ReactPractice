import React from "react";
import Notification from "./Notification";

const reversedNotifications = [
  { message: "안녕하세요, 오늘 일정 알려드립니다.", },
  { message: "점심식사 시간입니다.", },
  { message: "이제 곧 미팅이 시작됩니다.", },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    }
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reversedNotifications.length) {
        const index = notifications.length;
        notifications.push(reversedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      }
    })
  }

  render() {
    return (
      <div>
        { this.state.notifications.map((notification) => {
          return <Notification message={ notification.message } />;
        })}
      </div>
    );
  }
}

export default NotificationList;