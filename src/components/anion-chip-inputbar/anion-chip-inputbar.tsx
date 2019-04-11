import { Component, Element, Event, EventEmitter, Method, Prop, State } from "@stencil/core";

@Component({
  tag: 'anion-chip-inputbar',
  styleUrl: 'anion-chip-inputbar.css',
  shadow: false
})
/**
   * slot 'end' - Content is placed to the right of the item text in LTR, and to the left in RTL.
   */
export class AnionChipInputbar {

  @Element() el: HTMLAnionChipInputbarElement;

  /**
   * Emitted when the value of the input element is changed.
   */
  @Event() anionInputChange: EventEmitter;
  
  /**
   * The text of the associated inputbar label.
   */
  @Prop() labelText: string;

  /**
   * The placeholder text of the input element.
   */
  @Prop() inputPlaceholder: string;

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
      <div class='anion-chip-inputbar'>
        { this.labelText &&
          <ion-label class='anion-chip-inputbar-label'>
            {this.labelText}
          </ion-label>
        }
        <div class='anion-chip-inputbar-input-wrapper' 
             onClick={()=>this.handleContainerClick()}>
          <anion-chip-bar />
          <input type="text" 
                 placeholder={this.inputPlaceholder ? this.inputPlaceholder : ''} 
                 onInput={(e)=>this.handleInput(e)}/>
          <slot name="end"></slot>
        </div>
      </div>
    ];
  }
}