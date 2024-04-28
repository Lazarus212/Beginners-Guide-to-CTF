import { Component } from "@angular/core";
import { MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from "@angular/material/expansion";

@Component({
  selector: "app-guide",
  standalone: true,
  imports: [MatExpansionPanelHeader, MatExpansionPanel, MatExpansionPanelTitle, MatExpansionPanelDescription],
  templateUrl: "./guide.component.html",
  styleUrl: "./guide.component.scss",
})
export class GuideComponent {}
