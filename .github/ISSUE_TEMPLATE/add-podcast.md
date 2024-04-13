---
name: Add podcast
about: Template for submitting a podcast to add
title: "Add podcast: TITLE"
labels: submission
assignees: ""
---

<!-- Thanks for submitting a podcast! You can also open a PR directly to add the podcast to src/data/podcasts.ts -->

<!-- Fill out the codefence below to add data about the podcast -->

## Podcast data

```js
{
  title: "",
  url: "",
  skipIntro: {
    minute: 0,
    second: 0,
  },
  skipOutro: {
    minute: 0,
    second: 0,
  }
}
```

<!-- Here's example:

{
  title: "My favorite podcast",
  url: "https://example.com/my-favorite-podcast",
  skipIntro: {
    second: 30,
  },
  skipOutro: {
    minute: 2,
  }
}

Note how in this example the skipIntro does not have a `minute` value and the skipOutro does not have a `second` value.

If either the minute or second value of a skipIntro or skipOutro is 0, you can omit it.

skipIntro and skipOutro are both optional, you only need to fill in the one(s) that are relevant for the podcast you are submitting. Not all podcasts have content at the start and/or end that needs to be skipped. -->

## Issue checklist

<!-- Be sure to complete all of the following before submitting this issue: -->

- [ ] I have added a title
- [ ] I have added a URL
- [ ] I have added an intro and/or outro skip time
- [ ] I have updated the title of this issue
