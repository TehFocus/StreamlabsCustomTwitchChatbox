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
      <span>Default Color Scheme (customfields.json):</span>
      <img src="https://cdn.discordapp.com/attachments/567623679765250058/1454039965070786571/image.png?ex=694fa3be&is=694e523e&hm=c07fa140fd9a9bcf7980f5411c62ec5da8ed205902f59c84ad9c3fc1934fe521&" alt="Demopicture2" width="90%">
      <br><br><span>Orange/Red Color Scheme (customfieldsOrangeTheme.json):</span>
      <img src="https://cdn.discordapp.com/attachments/567623679765250058/1454042506512564277/image.png?ex=694fa61c&is=694e549c&hm=82fa2e988607e59a77b26dedb4628236fed823c049ed1c1db37ab869ff68c186&" alt="Demopicture2" width="90%">
      <br><br><span>Orange/Red Color Scheme (customfieldsPurpleTheme.json):</span>
      <img src="https://cdn.discordapp.com/attachments/567623679765250058/1454502131519328409/image.png?ex=6951522b&is=695000ab&hm=68c584405651fa97d5b785d47fc0fec7f2f532626e181e00fdadc0d700cdced0&" alt="Demopicture2" width="90%">
      <br><br><span>Example from my own stream:</span>
      <img src="https://cdn.discordapp.com/attachments/388660322946514948/1454498673898684600/image.png?ex=69514ef3&is=694ffd73&hm=3b14690918b28e0dc512765351f69d1fa0789f8b80d9f0a4146b6e06c7542ac2&" alt="Demopicture1" width="90%">
</p>

<p>
Watch on YouTube: <a href="https://www.youtube.com/watch?v=68YE-B0Aawk">https://www.youtube.com/watch?v=68YE-B0Aawk</a>
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
      <img src="https://cdn.discordapp.com/attachments/567623679765250058/1453814404599779380/image.png?ex=694ed1ac&is=694d802c&hm=b742a29c3b573c871ad2ec5b62761f2b1051e972fc43d5b4fa193d6e9005c5e7&" alt="Demopicture" width="90%">
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
