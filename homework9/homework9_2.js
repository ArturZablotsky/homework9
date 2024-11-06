function groupNotificationsBySource(notifications) {
    return notifications.reduce((result, notification) => {
        const { source } = notification;
        if (!result[source]) {
            result[source] = [];
        }
        result[source].push(notification);
        return result;
    }, {});
};
const notifications = [
    { source: "Email", text: "New email from John", date: "2024-11-01" },
    { source: "SMS", text: "New SMS from Mike", date: "2024-11-02" },
    { source: "Email", text: "New email from Bob", date: "2024-11-03" },
    { source: "SMS", text: "New SMS from Peter", date: "2024-11-04" }
];

console.log(groupNotificationsBySource(notifications));