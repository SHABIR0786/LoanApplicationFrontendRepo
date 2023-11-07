import { Component, OnInit } from "@angular/core";
import { DeclarationsModel, DeclarationsModel1 } from "./declarations-model";
import { DeclarationsService } from "./declarations.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-declarations",
  templateUrl: "./declarations.component.html",
  styleUrls: ["./declarations.component.css"],
})
export class DeclarationsComponent implements OnInit {
  declarationsList: DeclarationsModel[] = [];
  oldDeclarationsList: DeclarationsModel[] = [];
  sendDeclarationList: DeclarationsModel1[] = [];
  constructor(
    private declarationsService: DeclarationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.declarationsList = [];

    if (
      localStorage.declarationsList != undefined &&
      localStorage.declarationsList != ""
    ) {
      this.oldDeclarationsList = JSON.parse(
        localStorage.getItem("declarationsList")
      );
    }
    for (var i = 0; i < 19; i = i + 1) {
      this.declarationsList.push(new DeclarationsModel());
      this.declarationsList[i].questionNumberIndex = i;
    }
    if (this.oldDeclarationsList.length > 0) {
      this.oldDeclarationsList.forEach((element: any) => {
        this.declarationsList[element.questionNumberIndex] = element;
      });
    }
  }
  assignQuestionId(index, questionId) {
    this.declarationsList[index].declarationQuestionId = questionId;
  }
  clearQuestionData() {
    this.declarationsList[1].answer = "";
    this.declarationsList[2].answer = "";
    this.declarationsList[3].answer = "";
  }
  clearQuestionData1() {
    this.declarationsList[2].answer = "";
    this.declarationsList[3].answer = "";
  }
  clearQuestionData2() {
    this.declarationsList[6].answer = "";
  }

  create() {
    if (
      this.declarationsList[17] != undefined &&
      this.declarationsList[17].answer == "No"
    ) {
      this.declarationsList.splice(18, 18);
    }
    if (
      this.declarationsList[5] != undefined &&
      this.declarationsList[5].answer == "No"
    ) {
      this.declarationsList.splice(6, 1);
    }
    if (
      this.declarationsList[0] != undefined &&
      this.declarationsList[0].answer == "No"
    ) {
      this.declarationsList.splice(3, 1);
      this.declarationsList.splice(2, 1);
      this.declarationsList.splice(1, 1);
    }
    var indexList: any[] = [];
    this.declarationsList.forEach((element: any, index: any) => {
      if (element.answer == "") {
        indexList.push({ index: index });
      }
    });
    if (indexList.length > 0 && indexList != undefined) {
      indexList.forEach((element: any) => {
        this.declarationsList.splice(element.index, 1);
      });
    }

    this.sendDeclarationList = [];
    this.declarationsList.forEach((element: any) => {
      this.sendDeclarationList.push({ answer: element.answer });
    });

    var obj = this.sendDeclarationList;
    localStorage.setItem("declarationsList", JSON.stringify(obj));
    this.declarationsService.create(obj).subscribe((data: any) => {
      if (data.success == true) {
        alert("Data inserted successfully");
        this.router.navigateByUrl(
          "app/admin/incomplete-loan-application/acknowledgements-agreements"
        );
      }
    });
  }

  // fixDecimals(event: any) {
  //   var vals = event.target.value;
  //   var int: number = parseInt(vals);
  //   var dec = vals - int;
  //   if (dec > 0) {
  //     event.target.value = int + dec;
  //   } else {
  //     event.target.value = int + ".00";
  //   }
  // }

  selectNumber(event) {
    event.target.select();
  }

  fixDecimals(event: any) {
    var vals = event.target.value;
    if (vals != "") {
      vals = parseFloat(vals).toFixed(2);
      var int: number = parseInt(vals);
      var dec = vals - int;
      if (dec > 0) {
        event.target.value = int + dec;
      } else {
        event.target.value = int + ".00";
      }
      var parts = event.target.value.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      event.target.value = parts.join(".");
    } else {
      event.target.value = "0.00";
    }
  }

  numberOnly(txt: any, evt): boolean {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode == 46) {
      if (evt.target.value.includes(".")) {
        return false;
      } else {
        return true;
      }
    } else {
      if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    }
    return true;
  }
}
