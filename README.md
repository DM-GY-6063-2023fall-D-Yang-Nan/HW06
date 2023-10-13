# HW06

"Shall I compare thee to a summer's day?" is one of the most renowned sonnets within Shakespeare's collection of love poems. It extols the beauty of the described individual, drawing comparisons to the summer season. However, the central message of this sonnet revolves around the enduring nature of beauty and the immortality of the poem itself.

The first eight lines delineate the imperfections and transience of summer: how things of beauty might lose their allure as time progresses.

Yet, starting from the ninth line, there's a shift in the poem's tone. Shakespeare assures that the "eternal summer" of the described individual will not fade, and their beauty will not wane, not even death can rob them of their allure, for they have been eternally immortalized within this poem.

The poem is not just a tribute to the individual's beauty but also a celebration of the poem's own undying essence. It underscores the potency of art and literature to transcend the constraints of time, achieving perpetuity even when faced with life's ephemerality and the looming threat of death. Hence, my code aims to encapsulate this notion of life being transient but capable of achieving timelessness. I've chosen the last six lines of the poem. Upon a mouse click, the text appears, and as time elapses, the intensity of the text diminishes, but it never vanishes completely, etched forever on the milestones of time.

I initially chose a for loop to go through the entire textArray array one by one, but found that all the verses would overlap in the same place when clicked on, because the for loop is very fast and completes the loop in an instant, so you would see all the verses sticking together.

![DBQPjC.png](https://imgpile.com/images/DBQPjC.png)

I then decided to make the following modification:
Use a global variable i to keep track of which verse should be displayed.
Each time the mouse is clicked, increment the value of i and display the appropriate verse.
When i reaches the length of the array, reset it to 0 so that the next click will start at the first verse

Then in order to make the lines fade in and out and stay the same at the end, I initially added a variable called "opacity" to the fill color of the text, but found that this was very cumbersome to write. Then I realized that I could just add an opacity parameter to the background, which was easier to get the effect I wanted.