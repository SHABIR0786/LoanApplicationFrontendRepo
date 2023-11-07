import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RefinancePost } from "@app/modules/models/post.model";
import { LeadAssetDetail } from "@app/modules/models/post.model";
import { OfflineService } from "@app/services/offline.service";
import { ApiService } from "@app/services/api.service";
import { FinancialServiceServiceProxy, LeadAssetTypesServiceServiceProxy } from "@shared/service-proxies/service-proxies";

@Component({
  selector: "app-assets-info",
  templateUrl: "./assets-info.component.html",
  styleUrls: ["./assets-info.component.css", "./../index.component.css"],
})
export class AssetsInfoComponent implements OnInit {
  submitted = false;
  number: number = 1;
  model: LeadAssetDetail = new LeadAssetDetail();
  accType: any[] = [];
  assetTypes: any[] = [];
  assets:any[] = [];
  assetDetail:any = {};
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
        this.router.navigate(["1"]);
      }
    });
  }

  ngOnInit() {
    this.getAssetsTypes();
    this.getAssets();
  }

  getAssets() {
    let LeadApplicationDetailRefinancingId = localStorage.getItem('LeadApplicationDetailRefinancingId');
    this.api.get("LeadAssetDetailsService/GetLeadAssetDetailsByRefinancingId?id="+LeadApplicationDetailRefinancingId).subscribe((x: any) => {
        if (x.success == true) {
          this.assets = x.result;
        }
      });
  }
  getAssetsTypes() {
    this.assetTypeProxy.getAll().subscribe((res) => {
      this.assetTypes = res;
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
    this.router.navigate(["/app/refinance/assets-info/4"]);
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
      this.api.put("LeadAssetDetailsService/update", this.assetDetail)
        .subscribe((x: any) => {
          if (x.success == true) {
            this.router.navigate(["/app/refinance/assets-info/3"]);
          }
        });
    }
  }

  saveStep() {
    this.offline.saveStep(5, this.model);
  }
  nextClicked(f, step) {
    this.submitted = true;
    if (f.valid) {
      this.saveStep();
      let LeadApplicationDetailRefinancingId = localStorage.getItem('LeadApplicationDetailRefinancingId');
      this.model.leadApplicationDetailRefinancingId = parseInt(LeadApplicationDetailRefinancingId);
      this.model.LeadApplicationTypeId = 2;
      this.saveStep();
      this.api.post("LeadAssetDetailsService/Add", this.model) .subscribe((x: any) => {
          if (x.success == true) {
            this.router.navigate(["/app/refinance/assets-info/" + step]);
            this.getAssets();
          }
        });
      this.saveStep();
      this.submitted = false;
    }
  }
}
