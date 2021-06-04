# glowbit_dice_tutorial
This turorial will show 2 diferent ways to code the buttons on the microbit to act as a set of die for the glowbit.
The first set of code for button A wil simpley chose a random number betwene 1 and 6 and display the munber. 
The second set of code for button B will chose a random number but display flashing LED's between 1 and 6 before choosing the selected number.

## Step 1 setting up the Neopixals for each dice.
Start by going to the "neopixal" tab and selecting the "set strip to" block and placing it in the "on start: block.
Change the pin to the pin you have the Globit data cable conected to (default P0) and number of LED's to 13.
Be sure to select "RGB" for the type of LED in the Globit.

## Step 2 make some variables.
next we need to make some variables that we will use for the project.
go to the "variables"tab and make the following variables.
"die1", "die2", "die2value", "die1value", "index1", "index2", "index3"

## Step 3



```block
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
let die1 = strip.range(0, 6)
let die2 = strip.range(7, 6)
strip.setBrightness(25)
```

##
