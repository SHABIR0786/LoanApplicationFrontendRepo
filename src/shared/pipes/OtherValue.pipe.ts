import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "otherValue",
  pure: true,
})
export class EthnicityOtherValuePipe implements PipeTransform {
  transform(value: any[], id: number): string {
    if (value === undefined || value === null || value.length === 0)
      return "--";
    const obj = value.find((i) => i.id === id);
    return obj ? obj.otherValue : "--";
  }
}
