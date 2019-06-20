import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'anion-chat-bubble',
  styleUrl: 'anion-chat-bubble.css',
  shadow: false
})
export class AnionChatBubble {

  /**
   * The display name associated with the chat message.
   */
  @Prop() author: string;

  /**
   * The URL for the image source of the avatar.
   */
  @Prop() avatarUrl: string;

  /**
   * The side where the avatar should appear.
   */
  @Prop() avatarSide: 'left' | 'right';

  render() {
    return [
      <div class={'message-container ' + 
                  (this.avatarSide == 'left' ? 'fade-left' : 'fade-right')}>
        <div class='avatar'>
          <img src={this.avatarUrl} alt={this.author} />
        </div>
        <div>
          <div class='message'>
            <slot />
          </div>
          <small class='author'>{this.author}</small>
        </div>
      </div>
    ];
  }
}