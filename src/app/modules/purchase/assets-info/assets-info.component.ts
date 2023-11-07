import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LeadAssetDetail } from "@app/modules/models/post.model";
import { ApiService } from "@app/services/api.service";
import { OfflineService } from "@app/services/offline.service";
import { FinancialServiceServiceProxy, LeadAssetTypesServiceServiceProxy } from "@shared/service-proxies/service-proxies";

@Component({
  selector: "app-assets-info",
  templateUrl: "./assets-info.component.html",
  styleUrls: ["./assets-info.component.css"],
})
export class AssetsInfoComponent implements OnInit {
  number: number = 1;
  yes = false;
  model: LeadAssetDetail = new LeadAssetDetail();
  accType: any[] = [];
  assetTypes: any[] = [];
  assets:any[] = [];
  assetDetail:any = {};
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offline: OfflineService,
    private api: ApiService,
    private accountTypeService: FinancialServiceServiceProxy,
    private assetTypeProxy: LeadAssetTypesServiceServiceProxy,
  ) {
    this.route.params.subscribe((x) => {
      if (x.number) {
        this.number = x.number;
      } else {
        router.navigate(["1"]);
      }
    });
  }

  ngOnInit() {
//  this.getAccountTypes();
    this.getAssetsTypes();
    this.getAssets();
    this.model = this.offline.getStep().data;
  }
  haveOtherSourceOfIncome(e) {
    this.model.haveOtherSourceOfIncome = e;
    if(e === false) {
      this.getAssets();
    }
  }
  getAssets() {
    let leadApplicationDetailPurchasingId = localStorage.getItem('leadApplicationDetailPurchasingId');
    this.model.leadApplicationDetailPurchasingId = parseInt(leadApplicationDetailPurchasingId);
    this.model.LeadApplicationTypeId = 1;
    this.api
      .get("LeadAssetDetailsService/GetLeadAssetDetailsByPurchasingId?id="+leadApplicationDetailPurchasingId).subscribe((x: any) => {
        if (x.success == true) {
          this.assets = x.result;
        }
      });
  }
  getAssetsTypes() {
    this.assetTypeProxy.getAll().subscribe((res) => {
      this.assetTypes = res;
      console.log(this.assetTypes);
    });
  }
  getAssetTypeName(id) {
    let asset = this.assetTypes.find(x=>x.id == id);
    if(asset) {
    return asset.assetsType;
    }
  }
  editAsset(asset) {
    this.assetDetail = asset;
    this.router.navigate(["/app/purchase/assets-info/4"]);
  }
  delete(id) {
    this.api
    .delete("LeadAssetDetailsService/Delete?id="+id)
    .subscribe((x: any) => {
      if (x.success == true) {
        let index = this.assets.findIndex(x=>x.id == id);
        this.assets.splice(index,1);
        
      }
    });
  }
  update(f) {
    if (f.valid) {
      this.saveStep();
      this.api
        .put("LeadAssetDetailsService/update", this.assetDetail)
        .subscribe((x: any) => {
          if (x.success == true) {
            this.router.navigate(["/app/purchase/assets-info/3"]);
          }
        });
    }
  }
  // getAccountTypes() {
  //   this.accountTypeService.getFinancialAccountTypes().subscribe((res) => {
  //     this.accType = res;
  //   });
  //   // this.api.get("Financial/account-types").subscribe((x: any) => {
  //   //   this.accType = x.result;
  //   // });
  // }
  stepOneClick() {
    this.saveStep();
  }

  saveStep() {
    this.offline.saveStep(6, this.model);
  }

  stepNextClick(f, step) {
    this.submitted = true;
    if (f.valid) {
      this.saveStep();
      let leadApplicationDetailPurchasingId = localStorage.getItem('leadApplicationDetailPurchasingId');
      this.model.leadApplicationDetailPurchasingId = parseInt(leadApplicationDetailPurchasingId);
      this.model.LeadApplicationTypeId = 1;
      this.saveStep();
      this.api
        .post("LeadAssetDetailsService/Add", this.model)
        .subscribe((x: any) => {
          if (x.success == true) {
            this.router.navigate(["/app/purchase/assets-info/" + step]);
          }
        });
      this.submitted = false;
    }
  }
}
