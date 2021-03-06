import { Component, Event, EventEmitter, Method, Prop, State } from "@stencil/core";

@Component({
  tag: 'anion-chip-bar',
  styleUrl: 'anion-chip-bar.css',
  shadow: false
})
export class AnionChipBar {

  /**
   * Emitted when a chip is removed.
   */
  @Event() anionChipRemoved: EventEmitter;

  /**
   * Color name of the ion-chip components.
   */
  @Prop() chipColor: string = 'primary';

  /**
   * Default set of chips to appear in the bar.
   */
  @Prop() defaultChips: string;

  @State() chips: string[] = [];

  /**
   * Add a chip to the bar.
   * @param chipText The text that will appear in the chip.
   */
  @Method()
  async addChip(chipText: string) {

    if (chipText.length < 1) { return; }
    
    this.chips = [...this.chips, chipText];
  }

  /**
   * Get the chips currently in the bar.
   */
  @Method() 
  async getChips() {

    return this.chips;
  }

  /**
   * Set the chips in the bar.
   * Note: any existing chips are cleared first.
   * @param chipTexts String array of text values for chips.
   */
  @Method()
  async setChips(chipTexts: string[]) {

    this.clearChips();
    chipTexts.map(chip => this.addChip(chip));
  }

  /**
   * Remove a chip from the bar.
   * @param chipText The text of the chip to remove.
   */
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

  /**
   * Remove all chips from the bar.
   */
  @Method()
  async clearChips() {

    this.chips = [];
  }

  async componentWillLoad() {

    if (this.defaultChips) {
      let defaults = this.defaultChips.split(',');
      for (let i = 0; i < defaults.length; i++) {
        await this.addChip(defaults[i]);
      }
    }
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