import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { NotificationService } from "@app/services/notification.service";
import { SignalRAspNetCoreHelper } from "@shared/helpers/SignalRAspNetCoreHelper";
import { AdminNotificationsServiceProxy } from "@shared/service-proxies/service-proxies";

@Component({
  selector: "app-notification-dialog",
  templateUrl: "./notification-dialog.component.html",
  styleUrls: ["./notification-dialog.component.css"],
})
export class NotificationDialogComponent implements OnInit {
  notification: any[] = [];
  notificationCount: number;
  constructor(
    private notificationservice: NotificationService,
    private adminNotificationService: AdminNotificationsServiceProxy,
    private changeDetect: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllNotification();
    //SignalRAspNetCoreHelper.initSignalR();
    abp.event.on("abp.notifications.received", (userNotification) => {
      this.notification.push(
        userNotification.notification.data.properties.Message
      );
      // this.countNotification();
      this.changeDetect.detectChanges();
    });
  }

  getAllNotification() {
    this.adminNotificationService.getNotifications().subscribe((res) => {
      this.notification = res.map(
        (a) => a.notification.data.properties.Message
      );
    });
    // let obj = {
    //   params: {},
    // };
    // this.notificationservice.getAllNotification(obj).subscribe((res: any) => {
    //   this.notification = res.result;
    //   this.countNotification();
    // });
  }
  countNotification() {
    this.notificationCount = this.notification.length;
  }
}
