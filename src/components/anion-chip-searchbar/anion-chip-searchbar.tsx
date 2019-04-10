import { Component, Element, Event, EventEmitter, Method, Prop, State } from "@stencil/core";

@Component({
  tag: 'anion-chip-searchbar',
  styleUrl: 'anion-chip-searchbar.css'
})
/**
   * slot 'end' - Content is placed to the right of the item text in LTR, and to the left in RTL.
   */
export class AnionChipSearchbar {

  @Element() el: HTMLAnionChipSearchbarElement;

  /**
   * Emitted when the value of the input element is changed.
   */
  @Event() anionInputChange: EventEmitter;
  
  /**
   * The name of the color applied to chips - e.g., 'primary'. 
   */
  @Prop() chipColor: string = 'primary';

  /**
   * The text of the associated searchbar label.
   */
  @Prop() labelText: string;

  /**
   * The placeholder text of the input element.
   */
  @Prop() inputPlaceholder: string = 'Type to search';

  @State() chips: string[] = [];

  private inputElem: HTMLInputElement;
  private anionChipBarElem: HTMLAnionChipBarElement;

  componentDidLoad() {

    this.inputElem = this.el.querySelector('input');
    this.anionChipBarElem = this.el.querySelector('anion-chip-bar');
  }

  /**
   * Add a chip to the bar.
   * @param chipText The text that will appear in the chip.
   */
  @Method()
  async addChip(chipText: string) {

    await this.anionChipBarElem.addChip(chipText);
  }

  /**
   * Get the chips current in the bar.
   */
  @Method()
  async getChips() : Promise<string[]> {

    return await this.anionChipBarElem.getChips();
  }

  /**
   * Set the chips in the bar.
   * Note: any existing chips are cleared first.
   * @param chipTexts String array of text values for chips.
   */
  @Method()
  async setChips(chipTexts: string[]) {

    await this.anionChipBarElem.setChips(chipTexts);
  }

  /**
   * Remove a chip from the bar.
   * @param chipText The text of the chip to remove.
   */
  @Method()
  async removeChip(chipText: string) {

    await this.anionChipBarElem.removeChip(chipText);
  }

  /**
   * Remove all chips from the bar.
   */
  @Method()
  async clearChips() {

    await this.anionChipBarElem.clearChips();
  }

  /**
   * Clear the text of the input element.
   */
  @Method()
  async clearText() {

    this.inputElem.value = '';
  }

  /**
   * Set focus on the input element.
   */
  @Method()
  async setFocus() {

    this.inputElem.focus();
  }

  private async handleContainerClick() {

    await this.setFocus();
  }

  private handleInput(event: any) {

    this.anionInputChange.emit({
      value: this.inputElem.value,
      sourceEvent: event
    })
  }

  render() {
    return [
      <div class='anion-chip-searchbar'>
        { this.labelText &&
          <ion-label class='anion-chip-searchbar-label'>
            {this.labelText}
          </ion-label>
        }
        <div class='anion-chip-searchbar-input-wrapper' 
             onClick={()=>this.handleContainerClick()}>
          <anion-chip-bar chipColor={this.chipColor} />
          <input type="text" placeholder={this.inputPlaceholder} 
                 onInput={(e)=>this.handleInput(e)}/>
          <slot name="end"></slot>
        </div>
      </div>
    ];
  }
}