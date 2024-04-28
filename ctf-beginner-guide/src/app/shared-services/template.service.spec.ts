import { TestBed } from "@angular/core/testing";

import { TemplateService } from "./template.service";
import { HttpClient } from "@angular/common/http";

describe("TemplateService", () => {
  let service: TemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HttpClient] });
    service = TestBed.inject(TemplateService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
