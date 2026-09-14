Brand layout formats.

```jsx
<div style={{width:595,height:842}}>
  <SplitLayout direction="vertical" tone="light-grey" year="2026"
    media={<img src="…" style={{width:'100%',height:'100%',objectFit:'cover'}}/>}>
    <Headline size="m">Leading technologies for your body.</Headline>
  </SplitLayout>
</div>

<SocialPost tone="light-grey" logo="wordmark" logoCorner="bottom-left" scale={0.4}>
  <Headline size="xl" style={{fontSize:96}}>Unvei<HeroL/> the best in you</Headline>
</SocialPost>
```

**SplitLayout** is the base format for all Lumenis communication — split horizontally or vertically, ground in white/light grey, or inject the one secondary color. Wordmark bottom-left, © year bottom-right.

**SocialPost** is 1080×1080 on a 6×6 grid with 56px margins. The wordmark is 2 columns wide in a corner; the Hero L is 1 row (or ½ row) tall in a corner; wordmark + Hero L may sit in diagonally opposite corners. Social type minimums on the 1080 artboard: headline 52pt all caps, subheadline/body 40pt sentence case, caption 24pt all caps. Never place type over a visually busy photo.
