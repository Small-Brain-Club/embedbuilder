import React from "react";

export default class Header extends React.PureComponent {
  render = () => (
    <header>
      <div id="back-to-home">
        <a href="https://smallbrain.club">&larr;</a>
      </div>
      <div title="Create discord embeds for the welcomer feature in the Invisibility bot.">Invisibility Embed Builder</div>
    </header>
  );
}
