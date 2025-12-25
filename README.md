# TehF0cus Streamlabs Custom Chatbox

A modern Twitch chat overlay for Streamlabs with animated gradients and effects. Heavily customizable and free for you to use.
## If you enjoy this, consider buying me a Kebap:
<p align="left">
   <a href="https://ko-fi.com/tehf0cus" target="_blank" rel="noopener noreferrer">
      <img src="https://storage.ko-fi.com/cdn/generated/fhfuc7slzawvi/2025-12-25_rest-7b04ad9b98d6907e7f165a7f16cf94b6-i1wwshaq.jpg" alt="TehF0cus Ko-fi link" width="300">
   </a>
</p>



## Demo
<p align="left">
   <a href="https://ko-fi.com/tehf0cus" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn.discordapp.com/attachments/567623679765250058/1453813869335019601/image.png?ex=694ed12d&is=694d7fad&hm=afeecc0ca0c235e9861e552855558f9c0347878b2068b1e620b3137530d68f57&" alt="Demopicture" width="90%">
   </a>
</p>

<div align="center">
<!-- Embedded YouTube video (uses the official embed URL). Some renderers block iframes; use the fallback link or click the thumbnail. -->
<iframe width="720" height="405" src="https://www.youtube.com/embed/3tgMXcK9rRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p>
Watch on YouTube: <a href="https://youtu.be/3tgMXcK9rRs">https://youtu.be/3tgMXcK9rRs</a>
</p>
</div>

## Features

- Gradient text effects on messages
- Animated border bar with flowing colors
- Animated message separator bars between messages
- Frosted glass background effect
- Twitch badge resizer
- Playtime adjustable
- Fully customizable color and gradiant options

NOTE: The chatbox makes use of googlefonts and imports them via web

## Installation

For normal OBS or any other Streamingsoftware
1. Open **Streamlabs Dashboard**
2. Go to **Chatbox** → Select **Custom HTML/CSS** and enable it
3. Go to the different editor tabs and paste the code:
   - **HTML tab**: Paste contents of `html.html`
   - **CSS tab**: Paste contents of `css.css`  
   - **JS tab**: Paste contents of `js.js`
   - **Custom Fields tab**: Paste contents of your chosen `customfields.json`
4. Click **Save Settings**

For Streamlabs Desktop Users (Same procedure, just adjustable in the software)
1. Open **Streamlabs Desktop**
2. Add a **Browser Source** → Select **Chat Box** widget
3. Go to the widget editor tabs:
   - **HTML tab**: Paste contents of `html.html`
   - **CSS tab**: Paste contents of `css.css`  
   - **JS tab**: Paste contents of `js.js`
   - **Custom Fields tab**: Paste contents of your chosen `customfields.json`
4. Click **Save Settings**

## Configuration

All settings are adjustable via the Streamlabs custom fields interface:

<p align="left">
   <a href="https://ko-fi.com/tehf0cus" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn.discordapp.com/attachments/567623679765250058/1453814404599779380/image.png?ex=694ed1ac&is=694d802c&hm=b742a29c3b573c871ad2ec5b62761f2b1051e972fc43d5b4fa193d6e9005c5e7&" alt="Demopicture" width="90%">
   </a>
</p>
## How It Works

1. Streamlabs receives chat messages from Twitch
2. Messages are rendered using the HTML template
3. JavaScript adds separator bars and tracks the latest message
4. CSS handles all animations and visual effects

The JavaScript is minimal - it only:
- Adds separator bars between messages
- Marks the newest message with `.is-latest` class
- Cleans up separators when messages are deleted

All visual styling is handled by CSS.

## Troubleshooting

**Messages not showing:**
- Check Twitch connection in Streamlabs
- Refresh the browser source

**Animations not working:**
- Enable hardware acceleration in Streamlabs
- Restart Streamlabs

**Colors not updating:**
- Save settings and refresh browser source
- Check for JSON syntax errors in custom fields (In case you changed something)

## License
NOTE: This Custom Chatbox was made by https://github.com/TehFocus with the help of GitHub Copilot.

MIT License - See [LICENSE](LICENSE) file
