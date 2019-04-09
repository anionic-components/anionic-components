import { Component, Event, EventEmitter, Method, Prop, State } from "@stencil/core";

@Component({
  tag: 'anion-chip-bar',
  styleUrl: 'anion-chip-bar.css',
  shadow: true
})
export class AnionChipBar {

  @Event() anionChipRemoved: EventEmitter;

  @Prop() chipColor: string = 'primary';

  @State() chips: string[] = [];

  @Method()
  async addChip(chipText: string) {

    if (chipText.length < 1) { return; }
    
    this.chips = [...this.chips, chipText];
  }

  @Method() 
  async getChips() {

    return this.chips;
  }

  @Method()
  async setChips(chips: string[]) {

    this.clearChips();
    chips.map(chip => this.addChip(chip));
  }

  @Method()
  async removeChip(chipText: string) {

    if (chipText.length < 1) { return; }

    this.chips = this.chips.filter(c => {
      return c != chipText;
    });

    this.anionChipRemoved.emit({
      chipRemoved: chipText
    });
  }

  @Method()
  async clearChips() {

    this.chips = [];
  }

  private async handleChipCloseClick(chipText: string) {

    await this.removeChip(chipText);
  }

  render() {
    return [
      <div class='anion-chip-bar'>
        { this.chips.map(chip =>
          <ion-chip color={this.chipColor}>
            <ion-label>{chip}</ion-label>
            <ion-icon name='close'
                      onClick={()=>this.handleChipCloseClick(chip)} />
          </ion-chip>
        )}
      </div>
    ];
  }
}