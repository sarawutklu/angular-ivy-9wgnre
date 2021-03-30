import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "zh", "th"]);
    translate.setDefaultLang("en");

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|zh|th/) ? browserLang : "en");
  }
}
