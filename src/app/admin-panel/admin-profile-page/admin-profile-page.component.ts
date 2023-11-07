import { HttpParams } from "@angular/common/http";
import {
  Component,
  EventEmitter,
  Injector,
  OnInit,
  Output,
} from "@angular/core";
import { Router } from "@angular/router";
import { AppComponentBase } from "@shared/app-component-base";
import {
  ChangePasswordDto,
  SessionServiceProxy,
  UserDto,
  UserServiceProxy,
} from "@shared/service-proxies/service-proxies";
import { AdminUserServices } from "../../../shared/service/adminUser.service";
import { finalize } from "rxjs/operators";
@Component({
  selector: "app-admin-profile-page",
  templateUrl: "./admin-profile-page.component.html",
  styleUrls: ["./admin-profile-page.component.css"],
})
export class AdminProfilePageComponent extends AppComponentBase {
  @Output() onSave = new EventEmitter<any>();
  saving = false;
  constructor(
    private userService: UserServiceProxy,
    private sessionService: SessionServiceProxy,
    injector: Injector,
    private AdminUserServices: AdminUserServices,
    private router: Router
  ) {
    super(injector);
  }
  adminUsername: string = null;
  adminEmail: string = null;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  userId: any;
  user: UserDto = new UserDto();
  changePasswordDto: ChangePasswordDto = new ChangePasswordDto();
  ngOnInit(): void {
    this.getUserId();
    // this.getAdminUserDetails();
  }
  getUserId() {
    this.sessionService.getCurrentLoginInformations().subscribe((res) => {
      this.userId = res.user.id;
      this.getLoggedInUserDetails();
    });
  }
  getLoggedInUserDetails() {
    this.userService.get(this.userId).subscribe((res) => {
      this.user = res;
    });
  }
  updateUserEmail() {
    if (this.adminEmail != null) {
      this.user.emailAddress = this.adminEmail;
    }
    this.userService.update(this.user).subscribe((res) => {
      window.location.reload();
      this.notify.info("Email Successfully Updated");
    });
  }
  updateUserName() {
    if (this.adminUsername != null) {
      this.user.name = this.adminUsername;
    }
    this.userService.update(this.user).subscribe((res) => {
      window.location.reload();
      this.notify.info("User Name Successfully Updated");
    });
  }
  updatePassword() {
    if (this.newPassword != this.changePasswordDto.newPassword) {
      this.notify.info("Passwords do NOT match...!");
    } else {
      this.userService
        .changePassword(this.changePasswordDto)
        .subscribe((res) => {});
    }
  }

  getAdminUserDetails() {
    let obj = {
      params: {
        id: 1,
      },
    };
    this.AdminUserServices.getAdminDetailsbyId(obj).subscribe(
      (Response: any) => {
        this.adminUsername = Response.result.userName;
        this.adminEmail = Response.result.email;
        this.oldPassword = Response.result.oldPassword;
        this.newPassword = Response.result.newPassword;
      }
    );
  }

  updateUsername(adminUserName: string) {
    const params = new HttpParams({
      fromObject: {
        id: "1",
        username: adminUserName,
      },
    });
    this.AdminUserServices.updateAdminUserName(params).subscribe(
      (Response: any) => {
        this.getAdminUserDetails();
      }
    );
  }

  updateEmailAddress(email: string) {
    const params = new HttpParams({
      fromObject: {
        id: "1",
        email: email,
      },
    });
    this.AdminUserServices.updateAdminEmail(params).subscribe(
      (Response: any) => {
        this.getAdminUserDetails();
      }
    );
  }
  changePassword(oldPassword: any, newPassword: any) {
    const params = new HttpParams({
      fromObject: {
        id: "1",
        oldPassword: oldPassword,
        password: newPassword,
      },
    });
    this.AdminUserServices.updateChangePassword(params).subscribe(
      (Response: any) => {
        this.getAdminUserDetails();
      }
    );
  }
}
