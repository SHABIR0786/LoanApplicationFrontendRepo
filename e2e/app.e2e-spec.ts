import { LoanManagementTemplatePage } from "./app.po";

describe("LoanManagement App", function () {
  let page: LoanManagementTemplatePage;

  beforeEach(() => {
    page = new LoanManagementTemplatePage();
  });

  it("should display message saying app works", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("app works!");
  });
});
