import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "yesNo",
  pure: true,
})
export class EthnicityYesNoPipe implements PipeTransform {
  transform(value: any[], id: number): string {
    if (value === undefined || value === null || value.length === 0)
      return "--";
    return value.findIndex((i) => i.id === id) > -1 ? "Yes" : "--";
  }
}
