import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-train-chip-selector',
  templateUrl: './train-chip-selector.component.html',
  styleUrls: ['./train-chip-selector.component.scss']
})
export class TrainChipSelectorComponent implements OnInit {
  @Input() trainList: string[];
  @Input() selectedTrain: string;
  @Output() chipSelection = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChipChange(data) {
   this.chipSelection.emit(data);
  }
}
