/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AnionChipBar {
    /**
    * Add a chip to the bar.
    */
    'addChip': (chipText: string) => Promise<void>;
    /**
    * The name of the color applied to chips - e.g., 'primary'.
    */
    'chipColor': string;
    /**
    * Remove all chips from the bar.
    */
    'clearChips': () => Promise<void>;
    /**
    * Default set of chips to appear in the bar.
    */
    'defaultChips': string;
    /**
    * Get the chips currently in the bar.
    */
    'getChips': () => Promise<string[]>;
    /**
    * Remove a chip from the bar.
    */
    'removeChip': (chipText: string) => Promise<void>;
    /**
    * Set the chips in the bar. Note: any existing chips are cleared first.
    */
    'setChips': (chipTexts: string[]) => Promise<void>;
  }
  interface AnionChipBarAttributes extends StencilHTMLAttributes {
    /**
    * The name of the color applied to chips - e.g., 'primary'.
    */
    'chipColor'?: string;
    /**
    * Default set of chips to appear in the bar.
    */
    'defaultChips'?: string;
    /**
    * Emitted when a chip is removed.
    */
    'onAnionChipRemoved'?: (event: CustomEvent) => void;
  }

  interface AnionChipSearchbar {
    /**
    * Add a chip to the bar.
    */
    'addChip': (chipText: string) => Promise<void>;
    /**
    * The name of the color applied to chips - e.g., 'primary'.
    */
    'chipColor': string;
    /**
    * Remove all chips from the bar.
    */
    'clearChips': () => Promise<void>;
    /**
    * Clear the text of the input element.
    */
    'clearText': () => Promise<void>;
    /**
    * Get the chips current in the bar.
    */
    'getChips': () => Promise<string[]>;
    /**
    * The placeholder text of the input element.
    */
    'inputPlaceholder': string;
    /**
    * The text of the associated searchbar label.
    */
    'labelText': string;
    /**
    * Remove a chip from the bar.
    */
    'removeChip': (chipText: string) => Promise<void>;
    /**
    * Set the chips in the bar. Note: any existing chips are cleared first.
    */
    'setChips': (chipTexts: string[]) => Promise<void>;
    /**
    * Set focus on the input element.
    */
    'setFocus': () => Promise<void>;
  }
  interface AnionChipSearchbarAttributes extends StencilHTMLAttributes {
    /**
    * The name of the color applied to chips - e.g., 'primary'.
    */
    'chipColor'?: string;
    /**
    * The placeholder text of the input element.
    */
    'inputPlaceholder'?: string;
    /**
    * The text of the associated searchbar label.
    */
    'labelText'?: string;
    /**
    * Emitted when the value of the input element is changed.
    */
    'onAnionInputChange'?: (event: CustomEvent) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AnionChipBar': Components.AnionChipBar;
    'AnionChipSearchbar': Components.AnionChipSearchbar;
  }

  interface StencilIntrinsicElements {
    'anion-chip-bar': Components.AnionChipBarAttributes;
    'anion-chip-searchbar': Components.AnionChipSearchbarAttributes;
  }


  interface HTMLAnionChipBarElement extends Components.AnionChipBar, HTMLStencilElement {}
  var HTMLAnionChipBarElement: {
    prototype: HTMLAnionChipBarElement;
    new (): HTMLAnionChipBarElement;
  };

  interface HTMLAnionChipSearchbarElement extends Components.AnionChipSearchbar, HTMLStencilElement {}
  var HTMLAnionChipSearchbarElement: {
    prototype: HTMLAnionChipSearchbarElement;
    new (): HTMLAnionChipSearchbarElement;
  };

  interface HTMLElementTagNameMap {
    'anion-chip-bar': HTMLAnionChipBarElement
    'anion-chip-searchbar': HTMLAnionChipSearchbarElement
  }

  interface ElementTagNameMap {
    'anion-chip-bar': HTMLAnionChipBarElement;
    'anion-chip-searchbar': HTMLAnionChipSearchbarElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
