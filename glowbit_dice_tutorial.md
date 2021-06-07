# glowbit_dice_tutorial
This turorial will show 2 diferent ways to code the buttons on the microbit to act as a set of die for the glowbit.
The first set of code for button A wil simpley chose a random number betwene 1 and 6 and display the munber. 
The second set of code for button B will display flashing LED's between 1 and 6 before choseing a random number and displaying it.

## Step 1 
Setting up the Neopixals for each dice.
Start by going to the "neopixal" tab and selecting the "set strip to" block and placing it in the "on start: block.
Change the pin to the pin you have the Globit data cable conected to (default P0) and number of LED's to 13.
Be sure to select "RGB" for the type of LED in the Globit.

```block
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)

```

## Step 2 
Make some variables.
Next we need to make some variables that we will use for the project.
Go to the "variables"tab and make the following variables.
"die1", "die2", "die2value", "die1value", "index1", "index2", "index3"

## Step 3 
Setting the die and where they will display on the Glowbit.
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

## Step 4 
Button A setup.
To start we need to go to the "input" tab and get a "on button A pressed" block and place it in the workspace.
Next we need to go to the "neopixal" tab and get the "clear" block and place it in the "on button A pressed" block, change the variable to "die1"

Then go to the "variable" tab and get the "set to" block and place it under the "clear" block in the "on button A pressed" block.
Change the variable in the dropdown box to "die1value" and input a "pick random" block from the "math"tab. Change the number values to "0 to 5"

```block 
let die1value = 0
input.onButtonPressed(Button.A, function () {
    let die1: neopixel.Strip = null
    die1.clear()
    die1value = randint(0, 5)
})
basic.forever(function () {
	
})
```


## Step 5 
Button A setup.
Now we will put in a loop looking for the button A press. Go to the "loop" tab and select "for index from 0 to 4" block and place it under the "set die1value to" block in the "on button A pressed" block. Change the block to read "for index from 0 to 5".
In the loop we are going to put a "if then" statement from the "logic" tab to check the value of the die and display the value.
We need to replace the "true" part of the "if then" statement with a comparsion block fron the "logic" tab. The "0 = 0" block.
Next change the comparsion block using the "variables" tab to read "index <= die1value"
From the "neopixal" "more" tab select the "strip set pixal colour at 0 to red" block and place it after "then" in the "if then" block.
Use the "variables"tab to change the block to read "die1 set pixal colour at index to purple" 
The last section of this step is to display the die on the glowbit. 
Go to the "neopixal" tab and select the "strip show" block and place it after the "for do" loop in the "on button A pressed" block. Use the dropdown to change strip to "die1"

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

## Step 6 
Button B setup.
To start we need to go to the "input" tab and get a "on button A pressed" block and place it in the workspace. Change "A" to "B"
We are going to use a "for do" block from the "loop"tab. place this in the "on button B pressed" block.

Next we need to go to the "neopixal" tab and get the "clear" block and place it in the "for do" block, change the variable to "die2"
Then go to the "variable" tab and get the "set to" block and place it under the "clear" block in the "on button B pressed" block.
Change the variable in the dropdown box to "die2value" and input a "pick random" block from the "math"tab. change the number values to "0 to 5"

```block
let die2value = 0
input.onButtonPressed(Button.B, function () {
    // Include a "scramble" function for added suspense!
    for (let index2 = 0; index2 <= 20; index2++) {
        let die2: neopixel.Strip = null
        die2.clear()
        die2value = randint(0, 5)
    }
})
```

## Step 7 
Now we will put in a loop looking for the button B press. Go to the "loop" tab and select "for index from 0 to 4" block and place it under the "set die2value to" block in the "on button B pressed" block. Change the block to read "for index3 from 0 to 5".
In the loop we are going to put a "if then" statement from the "logic" tab to check the value of the die and display the value.
We need to replace the "true" part of the "if then" statement with a comparsion block fron the "logic" tab. The "0 = 0" block.
Next change the comparsion block using the "variables" tab to read "index >= to die2value"
From the "neopixal" "more" tab select the "strip set pixal colour at 0 to red" block and place it after "then" in the "if then" block.
Use the "variables"tab to change the block to read "die2 set pixal colour at index3 to orange" 
The last section of this step is to display the die on the glowbit. 
Go to the "neopixal" tab and select the "strip show" block and place it after the "for do" loop in the "on button B pressed" block. Use the dropdown to change strip to "die2"
Place a "pause" block from the "Basic" tab after the "strip show" block. Set the pause to "50"

```block
let die2value = 0
input.onButtonPressed(Button.B, function () {
    // Include a "scramble" function for added suspense!
    for (let index2 = 0; index2 <= 20; index2++) {
        let die2: neopixel.Strip = null
        die2.clear()
        die2value = randint(0, 5)
        for (let index3 = 0; index3 <= 5; index3++) {
            if (index3 >= die2value) {
                die2.setPixelColor(index3, neopixel.colors(NeoPixelColors.Orange))
            }
        }
        die2.show()
        basic.pause(50)
    }
```
## Step 7 Check and download the code to the Microbit.

```block
input.onButtonPressed(Button.A, function () {
    die1.clear()
    die1value = randint(0, 5)
    for (let index = 0; index <= 5; index++) {
        if (index <= die1value) {
            die1.setPixelColor(index, neopixel.colors(NeoPixelColors.Purple))
        }
    }
    die1.show()
})
input.onButtonPressed(Button.B, function () {
    // Include a "scramble" function for added suspense!
    for (let index2 = 0; index2 <= 20; index2++) {
        die2.clear()
        die2value = randint(0, 5)
        for (let index3 = 0; index3 <= 5; index3++) {
            if (index3 >= die2value) {
                die2.setPixelColor(index3, neopixel.colors(NeoPixelColors.Orange))
            }
        }
        die2.show()
        basic.pause(50)
    }
})
let die2value = 0
let die1value = 0
let die2: neopixel.Strip = null
let die1: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
die1 = strip.range(0, 6)
die2 = strip.range(7, 6)
strip.setBrightness(25)
basic.forever(function () {
	
})
```
