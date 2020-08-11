---
layout: post
title: JavaScript Date Validation
date: 2018-12-06T00:00:00-05:00
categories:
- Web Development
tags:
- javascript
- date
- validation
- post-mortem
draft: false

---
Hello all!

I ran into an interesting situation with dates yesterday. Our users had mistyped a seemingly valid date. Since we didn't have client side validation the bad date was passed to the server and ultimately the database. This failed thankfully. In an effort to prevent something like this happening in the future we devised the JavaScript solution seen below.

## Problem

The following dates were entered by the user, **1213/2018** and **12130/2018**. These values were passed to the database where the error was caught.

## Solution

1. Check for the correct formats
2. Parse the date into month, day, year parts based on format
3. Check for valid months
4. Set valid month lengths
   1. Initialize February to 28
   2. Bump February to 29 days if leap year
5. Validate day is greater than 0 and less than or equal to the month length

### Valid formats

- M/D/YYYY
- M/DD/YYYY
- MM/D/YYYY
- MM/DD/YYYY
- YYYY-M-D
- YYYY-M-DD
- YYYY-MM-D
- YYYY-MM-DD

## Code

https://codepen.io/wboka/pen/LXKVLb

## Technologies Used

- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [Google Fonts](https://fonts.google.com)
- [Pug](https://pugjs.org)
- [VueJS](https://vuejs.org)

**_Wayne_**
