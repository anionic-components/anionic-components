# anion-chip-bar

Chip Bar is a visual collection of `ion-chip` components with a button that allows individual chips to be removed from the bar.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="gopherrdiggs" data-slug-hash="JVNBwX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Anionic Chip Bar">
  <span>See the Pen <a href="https://codepen.io/gopherrdiggs/pen/JVNBwX/">
  Anionic Chip Bar</a> by Geoffrey (<a href="https://codepen.io/gopherrdiggs">@gopherrdiggs</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                               | Type     | Default     |
| -------------- | --------------- | --------------------------------------------------------- | -------- | ----------- |
| `chipColor`    | `chip-color`    | The name of the color applied to chips - e.g., 'primary'. | `string` | `'primary'` |
| `defaultChips` | `default-chips` | Default set of chips to appear in the bar.                | `string` | `undefined` |


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



### `setChips(chipTexts: string[]) => Promise<void>`

Set the chips in the bar.
Note: any existing chips are cleared first.

#### Parameters

| Name        | Type       | Description                            |
| ----------- | ---------- | -------------------------------------- |
| `chipTexts` | `string[]` | String array of text values for chips. |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
