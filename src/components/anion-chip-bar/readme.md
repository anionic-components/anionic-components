# anion-chip-bar

Chip Bar is a visual collection of `ion-chip` components with a button that allows individual chips to be removed from the bar.


<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                               | Type     | Default     |
| ----------- | ------------ | --------------------------------------------------------- | -------- | ----------- |
| `chipColor` | `chip-color` | The name of the color applied to chips - e.g., 'primary'. | `string` | `'primary'` |


## Events

| Event              | Description                     | Type                |
| ------------------ | ------------------------------- | ------------------- |
| `anionChipRemoved` | Emitted when a chip is removed. | `CustomEvent<void>` |


## Methods

### `addChip(chipText: string) => Promise<void>`

Add a chip to the bar.

#### Parameters

| Name       | Type     | Description                            |
| ---------- | -------- | -------------------------------------- |
| `chipText` | `string` | The text that will appear in the chip. |

#### Returns

Type: `Promise<void>`



### `clearChips() => Promise<void>`

Remove all chips from the bar.

#### Returns

Type: `Promise<void>`



### `getChips() => Promise<string[]>`

Get the chips currently in the bar.

#### Returns

Type: `Promise<string[]>`



### `removeChip(chipText: string) => Promise<void>`

Remove a chip from the bar.

#### Parameters

| Name       | Type     | Description                     |
| ---------- | -------- | ------------------------------- |
| `chipText` | `string` | The text of the chip to remove. |

#### Returns

Type: `Promise<void>`



### `setChips(chips: string[]) => Promise<void>`

Set the chips in the bar.
Note: any existing chips are cleared first.

#### Parameters

| Name    | Type       | Description |
| ------- | ---------- | ----------- |
| `chips` | `string[]` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*