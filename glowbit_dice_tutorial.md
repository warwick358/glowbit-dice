# glowbit_dice_tutorial
This turorial will show 2 diferent ways to code the buttons on the microbit to act as a set of die for the glowbit.
The first set of code for button A wil simpley chose a random number betwene 1 and 6 and display the munber. 
The second set of code for button B will display flashing LED's between 1 and 6 before choseing a random number and displaying it.

## Step 1 Setting up the Neopixals for each dice.
Start by going to the "neopixal" tab and selecting the "set strip to" block and placing it in the "on start: block.
Change the pin to the pin you have the Globit data cable conected to (default P0) and number of LED's to 13.
Be sure to select "RGB" for the type of LED in the Globit.

```block


```

## Step 2 Make some variables.
Next we need to make some variables that we will use for the project.
Go to the "variables"tab and make the following variables.
"die1", "die2", "die2value", "die1value", "index1", "index2", "index3"

## Step 3 Setting the die and where they will display on the Glowbit.
First we need to go to the "neopixal" tab and select 2 of the "set range to Strip range from 0 with 4 LEds" blocks place them in the 'On Start" block under the "neopixal"block.
We will then make the first one read as follows "set die1 to Strip range from 0 with 6 LEds" 
The second will read "set die2 to Strip range from 7 with 6 LEds" 
Next we need to set the Brightness from the "neopixal" tab select the "set Brightness" block and place it under the last "set die" block in the "on start" block.
Set the brightness to "25"


```block
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
let die1 = strip.range(0, 6)
let die2 = strip.range(7, 6)
strip.setBrightness(25)
```

## Step 4 Button A setup.
To start we need to go to the "input" tab and get a "on button A pressed" block and place it in the workspace.
Next we need to go to the "neopixal" tab and get the "clear" block and place it in the "on button A pressed" block, change the variable to "die1"
Then go to the "variable" tab and get the "set to" block and place it under the "clear" block in the "on button A pressed" block.
Change the variable in the dropdown box to "die1value" and input a "pick random" block from the "math"tab. change the number values to "0 to 5"
Now we will put in a loop looking for the button A press. go to the "loop" tab and select "for index from 0 to 4" block and place it under the "set die1value to" block in the "on button A pressed" block. Change the block to read "for index from 0 to 5".



```block
let die1value = 0
input.onButtonPressed(Button.A, function () {
    let die1: neopixel.Strip = null
    die1.clear()
    die1value = randint(0, 5)
    for (let index = 0; index <= 5; index++) {
        if (index <= die1value) {
            die1.setPixelColor(index, neopixel.colors(NeoPixelColors.Indigo))
        }
    }
    die1.show()
```

## 
