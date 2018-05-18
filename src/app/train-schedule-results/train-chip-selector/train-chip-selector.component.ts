import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-train-chip-selector',
  templateUrl: './train-chip-selector.component.html',
  styleUrls: ['./train-chip-selector.component.scss']
})
export class TrainChipSelectorComponent implements OnInit {

  constructor() { }
  @Input() trainList: string[];
  @Input() selectedTrain: string;
  @Output() chipSelection = new EventEmitter<string>();

  ngOnInit() {
  }

  onChipChange(data) {
   this.chipSelection.emit(data);
  }

}
