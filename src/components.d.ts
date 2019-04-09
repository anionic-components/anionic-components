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
    'setChips': (chips: string[]) => Promise<void>;
  }
  interface AnionChipBarAttributes extends StencilHTMLAttributes {
    /**
    * The name of the color applied to chips - e.g., 'primary'.
    */
    'chipColor'?: string;
    /**
    * Emitted when a chip is removed.
    */
    'onAnionChipRemoved'?: (event: CustomEvent) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AnionChipBar': Components.AnionChipBar;
  }

  interface StencilIntrinsicElements {
    'anion-chip-bar': Components.AnionChipBarAttributes;
  }


  interface HTMLAnionChipBarElement extends Components.AnionChipBar, HTMLStencilElement {}
  var HTMLAnionChipBarElement: {
    prototype: HTMLAnionChipBarElement;
    new (): HTMLAnionChipBarElement;
  };

  interface HTMLElementTagNameMap {
    'anion-chip-bar': HTMLAnionChipBarElement
  }

  interface ElementTagNameMap {
    'anion-chip-bar': HTMLAnionChipBarElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
