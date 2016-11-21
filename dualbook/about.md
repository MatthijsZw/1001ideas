---
layout: page
title: About
permalink: /about/
---
Dualbooks is growing. You can contribute!

Check out the github at [@MatthijsZw](https://github.com/MatthijsZw/1001ideas), or contact me at info-at-matthijszwinderman-dot-nl.

## Audio files
So this is how to create the right audio-files on a Mac:

{% highlight bash %}
book=island_ENNL; perl -nle 'print "$1" if /\[([^\]]+)/g' _chapters/${book}*.markdown | sort | uniq | while read line; do say -v Xander "${line}" -o "audio/${book}/${line}".aiff; afconvert -f m4af -d aac "audio/${book}/${line}".aiff "audio/${book}/${line}".m4a; rm "audio/${book}/${line}".aiff; done;
{% endhighlight %}

_This does the following: for each chapter in `${book}` it finds the translation-words and gives them to Apple Say. This speaks the word(s) into a file (in `aiff`-format). Lastly we convert that to `aac` because otherwise Chrome can't play it and we remove the now unnecessary `aiff`-file._

## These are the books I used:

* Dutch: [http://www.gutenberg.org/ebooks/20331](http://www.gutenberg.org/ebooks/20331)
* English: [http://www.gutenberg.org/ebooks/1268](http://www.gutenberg.org/ebooks/1268)

## Future improvements:
* turn words on/off if they've been learned
* add a difficulty slider, which turns on/off more translated words
* obviously styling and coding should improve tremendously, but this is just a prototype for now :)

## About this site
This site is built in [Jekyll](https://jekyllrb.com/).
