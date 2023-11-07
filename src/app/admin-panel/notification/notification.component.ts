import { Component, OnInit } from "@angular/core";
import { AdminNotificationsServiceProxy } from "@shared/service-proxies/service-proxies";
import { NotificationService } from "../../services/notification.service";
@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"],
})
export class NotificationComponent implements OnInit {
  notification: any;
  notifications: any[] = [];
  notificationCount: number;
  selectedNotification: any;
  constructor(
    private notificationservice: NotificationService,
    private adminNotificationService: AdminNotificationsServiceProxy
  ) {}

  ngOnInit(): void {
    this.getAllNotifications();
  }
  countNotification() {
    this.notificationCount = this.notification.filter(
      (a) => a.isSeen == 0
    ).length;
    console.log(this.notificationCount);
  }
  getAllNotifications() {
    this.adminNotificationService.getNotifications().subscribe((res) => {
      this.notifications = res.map((a) => a.notification.data.properties);
    });
  }
  getAllNotification() {
    let obj = {
      params: {},
    };
    this.notificationservice.getAllNotification(obj).subscribe((res: any) => {
      console.log(res);
      this.notification = res.result;
      this.countNotification();
    });
  }
  SelectedNotification(item: any) {
    this.selectedNotification = item;
  }
}
