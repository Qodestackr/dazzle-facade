type NotificationType = "success" | "error" | "warning" ;

type NotificationLabelType = "Improvement" | "urgent" | "New"

export interface INotificationOptions <T>{
    showNotification: boolean;
    notificationType: NotificationType;
    title: string;
    message: string;
    clearNotificationTimeout: TimeRanges
}