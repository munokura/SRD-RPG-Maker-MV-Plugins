/*:
 * @plugindesc Upgrades the Options Menu. Commands are placed into different categories and a description window has been added.
 * @author SumRndmDde
 *
 * @param Categories
 * @desc A list of all of the categories in the Options Menu.
 * Separate each with a comma.
 * @default General, Volume, Window
 *
 * @param Default Category
 * @desc If an option does not have a category specified for it, it will use this category.
 * @default General
 *
 * @param Add Window Colors?
 * @desc If 'true', then the Window Color options will be added.
 * Symbols are: "windowRed" | "windowGreen" | "windowBlue"
 * @default true
 *
 * @param == Reset Option ==
 * @default
 *
 * @param Add Reset Option?
 * @desc If 'true', then a "Reset" option will be added to the Category Window.
 * @default true
 *
 * @param Reset Option Name
 * @desc The name of the "Reset" option on the Category Window.
 * @default Reset Options
 *
 * @param Reset Option SE
 * @desc The sound effect played when the "Reset" option is used.
 * @default Save
 *
 * @param == Category Window ==
 * @default
 *
 * @param Category Window Cols
 * @desc The amount of columns on the Category Window.
 * @default 4
 *
 * @param Category Window Rows
 * @desc The amount of rows on the Category Window.
 * @default 1
 *
 * @param Category Window X
 * @desc The X position of the Category Window.
 * @default 0
 *
 * @param Category Window Y
 * @desc The Y position of the Category Window.
 * @default this._helpWindow.y + this._helpWindow.height
 *
 * @param Category Window Width
 * @desc The width of the Category Window.
 * @default Graphics.boxWidth
 *
 * @param Category Text Align
 * @desc The alignment of the text on the Category Window.
 * Choices are: left | center | right
 * @default center
 *
 * @param == Options Window ==
 * @default
 *
 * @param Options Window X
 * @desc The X position of the Options Window.
 * @default (Graphics.boxWidth - this.width) / 2
 *
 * @param Options Window Y
 * @desc The Y position of the Options Window.
 * @default this._categoryWindow.y + this._categoryWindow.height
 *
 * @param Options Window Width
 * @desc The width of the Options Window.
 * @default 500
 *
 * @param == Help Window ==
 * @default
 *
 * @param Help Window X
 * @desc The X position of the Help Window.
 * @default 0
 *
 * @param Help Window Y
 * @desc The Y position of the Help Window.
 * @default 0
 *
 *
 * @param == Window Color Text ==
 * @default
 *
 * @param Window Red Text
 * @desc The text for the option that controls the window color's red amount.
 * @default Window Red
 *
 * @param Window Green Text
 * @desc The text for the option that controls the window color's green amount.
 * @default Window Green
 *
 * @param Window Blue Text
 * @desc The text for the option that controls the window color's blue amount.
 * @default Window Blue
 *
 * @param == Option 1 ==
 * @default
 *
 * @param Option 1 Symbol
 * @desc The symbol of the option that will use the info defined for Option 1.
 * @default alwaysDash
 *
 * @param Option 1 Category
 * @desc The category that Option 1 will be placed in.
 * @default General
 *
 * @param Option 1 Description
 * @desc The description shown when Option 1 is highlighted.
 * Use \n to create a new line
 * @default If this is turned ON, then you will dash automatically; \notherwise, you will have to hold SHIFT.
 *
 * @param == Option 2 ==
 * @default
 *
 * @param Option 2 Symbol
 * @desc The symbol of the option that will use the info defined for Option 2.
 * @default commandRemember
 *
 * @param Option 2 Category
 * @desc The category that Option 2 will be placed in.
 * @default General
 *
 * @param Option 2 Description
 * @desc The description shown when Option 2 is highlighted.
 * Use \n to create a new line
 * @default If this is turned ON, then the position of the \ncommand cursor will be saved throughout battle.
 *
 * @param == Option 3 ==
 * @default
 *
 * @param Option 3 Symbol
 * @desc The symbol of the option that will use the info defined for Option 3.
 * @default bgmVolume
 *
 * @param Option 3 Category
 * @desc The category that Option 3 will be placed in.
 * @default Volume
 *
 * @param Option 3 Description
 * @desc The description shown when Option 3 is highlighted.
 * Use \n to create a new line
 * @default This changes the volume of the background music.
 *
 * @param == Option 4 ==
 * @default
 *
 * @param Option 4 Symbol
 * @desc The symbol of the option that will use the info defined for Option 4.
 * @default bgsVolume
 *
 * @param Option 4 Category
 * @desc The category that Option 4 will be placed in.
 * @default Volume
 *
 * @param Option 4 Description
 * @desc The description shown when Option 4 is highlighted.
 * Use \n to create a new line
 * @default This changes the volume of the background sound.
 *
 * @param == Option 5 ==
 * @default
 *
 * @param Option 5 Symbol
 * @desc The symbol of the option that will use the info defined for Option 5.
 * @default meVolume
 *
 * @param Option 5 Category
 * @desc The category that Option 5 will be placed in.
 * @default Volume
 *
 * @param Option 5 Description
 * @desc The description shown when Option 5 is highlighted.
 * Use \n to create a new line
 * @default This changes the volume of music effects.
 *
 * @param == Option 6 ==
 * @default
 *
 * @param Option 6 Symbol
 * @desc The symbol of the option that will use the info defined for Option 6.
 * @default seVolume
 *
 * @param Option 6 Category
 * @desc The category that Option 6 will be placed in.
 * @default Volume
 *
 * @param Option 6 Description
 * @desc The description shown when Option 6 is highlighted.
 * Use \n to create a new line
 * @default This changes the volume of sound effects.
  *
 * @param == Option 7 ==
 * @default
 *
 * @param Option 7 Symbol
 * @desc The symbol of the option that will use the info defined for Option 7.
 * @default windowRed
 *
 * @param Option 7 Category
 * @desc The category that Option 7 will be placed in.
 * @default Window
 *
 * @param Option 7 Description
 * @desc The description shown when Option 7 is highlighted.
 * Use \n to create a new line
 * @default This determines the amount of \c[2]red\c[0] tone within \nthe window's base color.
 *
 * @param == Option 8 ==
 * @default
 *
 * @param Option 8 Symbol
 * @desc The symbol of the option that will use the info defined for Option 8.
 * @default windowGreen
 *
 * @param Option 8 Category
 * @desc The category that Option 8 will be placed in.
 * @default Window
 *
 * @param Option 8 Description
 * @desc The description shown when Option 8 is highlighted.
 * Use \n to create a new line
 * @default This determines the amount of \c[3]green\c[0] tone within \nthe window's base color.
 *
 * @param == Option 9 ==
 * @default
 *
 * @param Option 9 Symbol
 * @desc The symbol of the option that will use the info defined for Option 9.
 * @default windowBlue
 *
 * @param Option 9 Category
 * @desc The category that Option 9 will be placed in.
 * @default Window
 *
 * @param Option 9 Description
 * @desc The description shown when Option 9 is highlighted.
 * Use \n to create a new line
 * @default This determines the amount of \c[1]blue\c[0] tone within \nthe window's base color.
 *
 * @param == Option 10 ==
 * @default
 *
 * @param Option 10 Symbol
 * @desc The symbol of the option that will use the info defined for Option 10.
 * @default windowSkin
 *
 * @param Option 10 Category
 * @desc The category that Option 10 will be placed in.
 * @default Window
 *
 * @param Option 10 Description
 * @desc The description shown when Option 10 is highlighted.
 * Use \n to create a new line
 * @default This game's window style can be selected from a list \nof available choices using this option.
 *
 * @param == Option 11 ==
 * @default
 *
 * @param Option 11 Symbol
 * @desc The symbol of the option that will use the info defined for Option 11.
 * @default fullscreen
 *
 * @param Option 11 Category
 * @desc The category that Option 11 will be placed in.
 * @default General
 *
 * @param Option 11 Description
 * @desc The description shown when Option 11 is highlighted.
 * Use \n to create a new line
 * @default If this is turned ON, the game will be switched \nto full-screen mode.
 *
 * @param == Option 12 ==
 * @default
 *
 * @param Option 12 Symbol
 * @desc The symbol of the option that will use the info defined for Option 12.
 * @default
 *
 * @param Option 12 Category
 * @desc The category that Option 12 will be placed in.
 * @default
 *
 * @param Option 12 Description
 * @desc The description shown when Option 12 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 13 ==
 * @default
 *
 * @param Option 13 Symbol
 * @desc The symbol of the option that will use the info defined for Option 13.
 * @default
 *
 * @param Option 13 Category
 * @desc The category that Option 13 will be placed in.
 * @default
 *
 * @param Option 13 Description
 * @desc The description shown when Option 13 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 14 ==
 * @default
 *
 * @param Option 14 Symbol
 * @desc The symbol of the option that will use the info defined for Option 14.
 * @default
 *
 * @param Option 14 Category
 * @desc The category that Option 14 will be placed in.
 * @default
 *
 * @param Option 14 Description
 * @desc The description shown when Option 14 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 15 ==
 * @default
 *
 * @param Option 15 Symbol
 * @desc The symbol of the option that will use the info defined for Option 15.
 * @default
 *
 * @param Option 15 Category
 * @desc The category that Option 15 will be placed in.
 * @default
 *
 * @param Option 15 Description
 * @desc The description shown when Option 15 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 16 ==
 * @default
 *
 * @param Option 16 Symbol
 * @desc The symbol of the option that will use the info defined for Option 16.
 * @default
 *
 * @param Option 16 Category
 * @desc The category that Option 16 will be placed in.
 * @default
 *
 * @param Option 16 Description
 * @desc The description shown when Option 16 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 17 ==
 * @default
 *
 * @param Option 17 Symbol
 * @desc The symbol of the option that will use the info defined for Option 17.
 * @default
 *
 * @param Option 17 Category
 * @desc The category that Option 17 will be placed in.
 * @default
 *
 * @param Option 17 Description
 * @desc The description shown when Option 17 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 18 ==
 * @default
 *
 * @param Option 18 Symbol
 * @desc The symbol of the option that will use the info defined for Option 18.
 * @default
 *
 * @param Option 18 Category
 * @desc The category that Option 18 will be placed in.
 * @default
 *
 * @param Option 18 Description
 * @desc The description shown when Option 18 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 19 ==
 * @default
 *
 * @param Option 19 Symbol
 * @desc The symbol of the option that will use the info defined for Option 19.
 * @default
 *
 * @param Option 19 Category
 * @desc The category that Option 19 will be placed in.
 * @default
 *
 * @param Option 19 Description
 * @desc The description shown when Option 19 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 20 ==
 * @default
 *
 * @param Option 20 Symbol
 * @desc The symbol of the option that will use the info defined for Option 20.
 * @default
 *
 * @param Option 20 Category
 * @desc The category that Option 20 will be placed in.
 * @default
 *
 * @param Option 20 Description
 * @desc The description shown when Option 20 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 21 ==
 * @default
 *
 * @param Option 21 Symbol
 * @desc The symbol of the option that will use the info defined for Option 21.
 * @default
 *
 * @param Option 21 Category
 * @desc The category that Option 21 will be placed in.
 * @default
 *
 * @param Option 21 Description
 * @desc The description shown when Option 21 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 22 ==
 * @default
 *
 * @param Option 22 Symbol
 * @desc The symbol of the option that will use the info defined for Option 22.
 * @default
 *
 * @param Option 22 Category
 * @desc The category that Option 22 will be placed in.
 * @default
 *
 * @param Option 22 Description
 * @desc The description shown when Option 22 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 23 ==
 * @default
 *
 * @param Option 23 Symbol
 * @desc The symbol of the option that will use the info defined for Option 23.
 * @default
 *
 * @param Option 23 Category
 * @desc The category that Option 23 will be placed in.
 * @default
 *
 * @param Option 23 Description
 * @desc The description shown when Option 23 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 24 ==
 * @default
 *
 * @param Option 24 Symbol
 * @desc The symbol of the option that will use the info defined for Option 24.
 * @default
 *
 * @param Option 24 Category
 * @desc The category that Option 24 will be placed in.
 * @default
 *
 * @param Option 24 Description
 * @desc The description shown when Option 24 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 25 ==
 * @default
 *
 * @param Option 25 Symbol
 * @desc The symbol of the option that will use the info defined for Option 25.
 * @default
 *
 * @param Option 25 Category
 * @desc The category that Option 25 will be placed in.
 * @default
 *
 * @param Option 25 Description
 * @desc The description shown when Option 25 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 26 ==
 * @default
 *
 * @param Option 26 Symbol
 * @desc The symbol of the option that will use the info defined for Option 26.
 * @default
 *
 * @param Option 26 Category
 * @desc The category that Option 26 will be placed in.
 * @default
 *
 * @param Option 26 Description
 * @desc The description shown when Option 26 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 27 ==
 * @default
 *
 * @param Option 27 Symbol
 * @desc The symbol of the option that will use the info defined for Option 27.
 * @default
 *
 * @param Option 27 Category
 * @desc The category that Option 27 will be placed in.
 * @default
 *
 * @param Option 27 Description
 * @desc The description shown when Option 27 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 28 ==
 * @default
 *
 * @param Option 28 Symbol
 * @desc The symbol of the option that will use the info defined for Option 28.
 * @default
 *
 * @param Option 28 Category
 * @desc The category that Option 28 will be placed in.
 * @default
 *
 * @param Option 28 Description
 * @desc The description shown when Option 28 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 29 ==
 * @default
 *
 * @param Option 29 Symbol
 * @desc The symbol of the option that will use the info defined for Option 29.
 * @default
 *
 * @param Option 29 Category
 * @desc The category that Option 29 will be placed in.
 * @default
 *
 * @param Option 29 Description
 * @desc The description shown when Option 29 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 30 ==
 * @default
 *
 * @param Option 30 Symbol
 * @desc The symbol of the option that will use the info defined for Option 30.
 * @default
 *
 * @param Option 30 Category
 * @desc The category that Option 30 will be placed in.
 * @default
 *
 * @param Option 30 Description
 * @desc The description shown when Option 30 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 31 ==
 * @default
 *
 * @param Option 31 Symbol
 * @desc The symbol of the option that will use the info defined for Option 31.
 * @default
 *
 * @param Option 31 Category
 * @desc The category that Option 31 will be placed in.
 * @default
 *
 * @param Option 31 Description
 * @desc The description shown when Option 31 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 32 ==
 * @default
 *
 * @param Option 32 Symbol
 * @desc The symbol of the option that will use the info defined for Option 32.
 * @default
 *
 * @param Option 32 Category
 * @desc The category that Option 32 will be placed in.
 * @default
 *
 * @param Option 32 Description
 * @desc The description shown when Option 32 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 33 ==
 * @default
 *
 * @param Option 33 Symbol
 * @desc The symbol of the option that will use the info defined for Option 33.
 * @default
 *
 * @param Option 33 Category
 * @desc The category that Option 33 will be placed in.
 * @default
 *
 * @param Option 33 Description
 * @desc The description shown when Option 33 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 34 ==
 * @default
 *
 * @param Option 34 Symbol
 * @desc The symbol of the option that will use the info defined for Option 34.
 * @default
 *
 * @param Option 34 Category
 * @desc The category that Option 34 will be placed in.
 * @default
 *
 * @param Option 34 Description
 * @desc The description shown when Option 34 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 35 ==
 * @default
 *
 * @param Option 35 Symbol
 * @desc The symbol of the option that will use the info defined for Option 35.
 * @default
 *
 * @param Option 35 Category
 * @desc The category that Option 35 will be placed in.
 * @default
 *
 * @param Option 35 Description
 * @desc The description shown when Option 35 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 36 ==
 * @default
 *
 * @param Option 36 Symbol
 * @desc The symbol of the option that will use the info defined for Option 36.
 * @default
 *
 * @param Option 36 Category
 * @desc The category that Option 36 will be placed in.
 * @default
 *
 * @param Option 36 Description
 * @desc The description shown when Option 36 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 37 ==
 * @default
 *
 * @param Option 37 Symbol
 * @desc The symbol of the option that will use the info defined for Option 37.
 * @default
 *
 * @param Option 37 Category
 * @desc The category that Option 37 will be placed in.
 * @default
 *
 * @param Option 37 Description
 * @desc The description shown when Option 37 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 38 ==
 * @default
 *
 * @param Option 38 Symbol
 * @desc The symbol of the option that will use the info defined for Option 38.
 * @default
 *
 * @param Option 38 Category
 * @desc The category that Option 38 will be placed in.
 * @default
 *
 * @param Option 38 Description
 * @desc The description shown when Option 38 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 39 ==
 * @default
 *
 * @param Option 39 Symbol
 * @desc The symbol of the option that will use the info defined for Option 39.
 * @default
 *
 * @param Option 39 Category
 * @desc The category that Option 39 will be placed in.
 * @default
 *
 * @param Option 39 Description
 * @desc The description shown when Option 39 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 40 ==
 * @default
 *
 * @param Option 40 Symbol
 * @desc The symbol of the option that will use the info defined for Option 40.
 * @default
 *
 * @param Option 40 Category
 * @desc The category that Option 40 will be placed in.
 * @default
 *
 * @param Option 40 Description
 * @desc The description shown when Option 40 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 41 ==
 * @default
 *
 * @param Option 41 Symbol
 * @desc The symbol of the option that will use the info defined for Option 41.
 * @default
 *
 * @param Option 41 Category
 * @desc The category that Option 41 will be placed in.
 * @default
 *
 * @param Option 41 Description
 * @desc The description shown when Option 41 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 42 ==
 * @default
 *
 * @param Option 42 Symbol
 * @desc The symbol of the option that will use the info defined for Option 42.
 * @default
 *
 * @param Option 42 Category
 * @desc The category that Option 42 will be placed in.
 * @default
 *
 * @param Option 42 Description
 * @desc The description shown when Option 42 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 43 ==
 * @default
 *
 * @param Option 43 Symbol
 * @desc The symbol of the option that will use the info defined for Option 43.
 * @default
 *
 * @param Option 43 Category
 * @desc The category that Option 43 will be placed in.
 * @default
 *
 * @param Option 43 Description
 * @desc The description shown when Option 43 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 44 ==
 * @default
 *
 * @param Option 44 Symbol
 * @desc The symbol of the option that will use the info defined for Option 44.
 * @default
 *
 * @param Option 44 Category
 * @desc The category that Option 44 will be placed in.
 * @default
 *
 * @param Option 44 Description
 * @desc The description shown when Option 44 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 45 ==
 * @default
 *
 * @param Option 45 Symbol
 * @desc The symbol of the option that will use the info defined for Option 45.
 * @default
 *
 * @param Option 45 Category
 * @desc The category that Option 45 will be placed in.
 * @default
 *
 * @param Option 45 Description
 * @desc The description shown when Option 45 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 46 ==
 * @default
 *
 * @param Option 46 Symbol
 * @desc The symbol of the option that will use the info defined for Option 46.
 * @default
 *
 * @param Option 46 Category
 * @desc The category that Option 46 will be placed in.
 * @default
 *
 * @param Option 46 Description
 * @desc The description shown when Option 46 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 47 ==
 * @default
 *
 * @param Option 47 Symbol
 * @desc The symbol of the option that will use the info defined for Option 47.
 * @default
 *
 * @param Option 47 Category
 * @desc The category that Option 47 will be placed in.
 * @default
 *
 * @param Option 47 Description
 * @desc The description shown when Option 47 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 48 ==
 * @default
 *
 * @param Option 48 Symbol
 * @desc The symbol of the option that will use the info defined for Option 48.
 * @default
 *
 * @param Option 48 Category
 * @desc The category that Option 48 will be placed in.
 * @default
 *
 * @param Option 48 Description
 * @desc The description shown when Option 48 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 49 ==
 * @default
 *
 * @param Option 49 Symbol
 * @desc The symbol of the option that will use the info defined for Option 49.
 * @default
 *
 * @param Option 49 Category
 * @desc The category that Option 49 will be placed in.
 * @default
 *
 * @param Option 49 Description
 * @desc The description shown when Option 49 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 50 ==
 * @default
 *
 * @param Option 50 Symbol
 * @desc The symbol of the option that will use the info defined for Option 50.
 * @default
 *
 * @param Option 50 Category
 * @desc The category that Option 50 will be placed in.
 * @default
 *
 * @param Option 50 Description
 * @desc The description shown when Option 50 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @help
 *
 * Options Upgrade
 * Version 1.02
 * SumRndmDde
 *
 *
 * This Plugin upgrades the Options Menu!
 * The options are placed into different categories and a description window 
 * has been added.
 *
 * One may also manipulate the various positions of all the windows, and can
 * control the rows/colums for the category window.
 *
 *
 * ==========================================================================
 *  Setting up Categories/Descriptions
 * ==========================================================================
 *
 * By default, all of the default options have descriptions and categories
 * set up for them. These are all customized through the Parameters.
 *
 * If an option does not have a category assigned to it, it will be placed
 * in the default category. If an option does not have a description, one
 * will not be used.
 *
 *
 * In order to assign a category or description, you'll need the symbol
 * for the command.
 *
 * First, place the command in an Option X Symbol Parameter.
 *
 * Once you do so, then the Option X Category and Option X Description will
 * be used with the option associated with this symbol.
 *
 *
 * ==========================================================================
 *  Window Color Customizers
 * ==========================================================================
 *
 * This plugin also adds options to change the tone of the game's windows.
 *
 * You can remove these by setting the "Add Window Colors?" parameter to false.
 *
 * Keep in mind that doing so may leave the "Window" category blank. Be sure
 * to remove the category from the list if that happens. However, you could
 * simply add other options to it if necessary.
 *
 *
 * ==========================================================================
 *  End of Help File
 * ==========================================================================
 * 
 * Welcome to the bottom of the Help file.
 *
 *
 * Thanks for reading!
 * If you have questions, or if you enjoyed this Plugin, please check
 * out my YouTube channel!
 *
 * https://www.youtube.com/c/SumRndmDde
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 *
 */
/*:ja
 * @plugindesc オプションメニューのコマンドをカテゴリに分け、説明ウィンドウが追加されます。
 * @author SumRndmDde
 *
 * @param Categories
 * @text カテゴリ
 * @desc オプションメニューにある全カテゴリのリスト
 * カンマで区切ってください。
 * @default 一般, 音量, ウィンドウ
 *
 * @param Default Category
 * @text デフォルトのカテゴリ
 * @desc オプションにカテゴリが指定されていない場合、このカテゴリを使用
 * @default 一般
 *
 * @param Add Window Colors?
 * @text ウィンドウ色を表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc ウィンドウの色オプションを表示
 * シンボル: "windowRed" | "windowGreen" | "windowBlue"
 * @default true
 *
 * @param == Reset Option ==
 * @text -- オプションリセット --
 * @default
 *
 * @param Add Reset Option?
 * @text オプションリセット表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 'リセット'をカテゴリウィンドウに表示
 * @default true
 *
 * @param Reset Option Name
 * @text オプションリセット名
 * @desc カテゴリウィンドウの'リセット'の表示テキスト
 * @default リセット
 *
 * @param Reset Option SE
 * @text オプションリセットSE
 * @type file
 * @require 1
 * @dir audio/se
 * @desc リセット'オプションが使用されたときに再生されるSE
 * @default Save
 *
 * @param == Category Window ==
 * @text -- カテゴリーウィンドウ --
 * @default
 *
 * @param Category Window Cols
 * @text カテゴリウィンドウ列数
 * @desc カテゴリウィンドウの列数
 * @default 4
 *
 * @param Category Window Rows
 * @text カテゴリウィンドウ行数
 * @desc カテゴリウィンドウの行数
 * @default 1
 *
 * @param Category Window X
 * @text カテゴリウィンドウX位置
 * @desc カテゴリウィンドウのX位置
 * @default 0
 *
 * @param Category Window Y
 * @text カテゴリウィンドウY位置
 * @desc カテゴリウィンドウのY位置
 * @default this._helpWindow.y + this._helpWindow.height
 *
 * @param Category Window Width
 * @text カテゴリーウィンドウ幅
 * @desc カテゴリウィンドウの幅
 * @default Graphics.boxWidth
 *
 * @param Category Text Align
 * @text カテゴリテキスト行揃え
 * @type select
 * @option 左
 * @value left
 * @option 中央
 * @value center
 * @option 右
 * @value right
 * @desc カテゴリウィンドウのテキスト行揃え
 * @desc 左:left / 中央:center / 右:right
 * @default center
 *
 * @param == Options Window ==
 * @text -- オプションウィンドウ --
 * @default
 *
 * @param Options Window X
 * @text オプションウィンドウX位置
 * @desc オプションウィンドウのX位置
 * @default (Graphics.boxWidth - this.width) / 2
 *
 * @param Options Window Y
 * @text オプションウィンドウY位置
 * @desc オプションウィンドウのY位置
 * @default this._categoryWindow.y + this._categoryWindow.height
 *
 * @param Options Window Width
 * @text オプションウィンドウ幅
 * @desc オプションウィンドウの幅
 * @default 500
 *
 * @param == Help Window ==
 * @text -- ヘルプウィンドウ --
 * @default
 *
 * @param Help Window X
 * @text ヘルプウィンドウX位置
 * @desc ヘルプウィンドウのX位置
 * @default 0
 *
 * @param Help Window Y
 * @text ヘルプウィンドウY位置
 * @desc ヘルプウィンドウのY位置
 * @default 0
 *
 * @param == Window Color Text ==
 * @default
 *
 * @param Window Red Text
 * @text ウィンドウ赤ラベル
 * @desc ウィンドウの色の赤の量を制御するオプションのラベル
 * @default ウィンドウ赤
 *
 * @param Window Green Text
 * @text ウィンドウ緑ラベル
 * @desc ウィンドウの色の緑の量を制御するオプションのラベル
 * @default ウィンドウ緑
 *
 * @param Window Blue Text
 * @text ウィンドウ青ラベル
 * @desc ウィンドウの色の青の量を制御するオプションのラベル
 * @default ウィンドウ青
 *
 * @param == Option 1 ==
 * @text -- オプション1 --
 * @default
 *
 * @param Option 1 Symbol
 * @text オプション1シンボル
 * @desc オプション1のシンボル
 * @default alwaysDash
 *
 * @param Option 1 Category
 * @text オプション1カテゴリ
 * @desc オプション1のカテゴリ
 * @default 一般
 *
 * @param Option 1 Description
 * @text オプション1説明
 * @desc オプション1選択時に表示される説明
 * \nで改行
 * @default ONにすると自動的にダッシュしますが、\nダッシュしない時にSHIFTを押し続ける必要があります。
 *
 * @param == Option 2 ==
 * @text -- オプション2 --
 * @default
 *
 * @param Option 2 Symbol
 * @text オプション2シンボル
 * @desc オプション2のシンボル
 * @default commandRemember
 *
 * @param Option 2 Category
 * @text オプション2カテゴリ
 * @desc オプション2のカテゴリ
 * @default 一般
 *
 * @param Option 2 Description
 * @text オプション2説明
 * @desc オプション2選択時に表示される説明
 * \nで改行
 * @default ONにすると、戦闘中にカーソル位置が保存されます。
 *
 * @param == Option 3 ==
 * @text -- オプション3 --
 * @default
 *
 * @param Option 3 Symbol
 * @text オプション3シンボル
 * @desc オプション3のシンボル
 * @default bgmVolume
 *
 * @param Option 3 Category
 * @text オプション3カテゴリ
 * @desc オプション3のカテゴリ
 * @default 音量
 *
 * @param Option 3 Description
 * @text オプション3説明
 * @desc オプション3選択時に表示される説明
 * \nで改行
 * @default BGMの音量が変わります。
 *
 * @param == Option 4 ==
 * @text -- オプション4 --
 * @default
 *
 * @param Option 4 Symbol
 * @text オプション4シンボル
 * @desc オプション4のシンボル
 * @default bgsVolume
 *
 * @param Option 4 Category
 * @text オプション4カテゴリ
 * @desc オプション4のカテゴリ
 * @default 音量
 *
 * @param Option 4 Description
 * @text オプション4説明
 * @desc オプション4選択時に表示される説明
 * \nで改行
 * @default BGSの音量が変わります。
 *
 * @param == Option 5 ==
 * @text -- オプション5 --
 * @default
 *
 * @param Option 5 Symbol
 * @text オプション5シンボル
 * @desc オプション5のシンボル
 * @default meVolume
 *
 * @param Option 5 Category
 * @text オプション5カテゴリ
 * @desc オプション5のカテゴリ
 * @default 音量
 *
 * @param Option 5 Description
 * @text オプション5説明
 * @desc オプション5選択時に表示される説明
 * \nで改行
 * @default MEの音量が変わります。
 *
 * @param == Option 6 ==
 * @text -- オプション6 --
 * @default
 *
 * @param Option 6 Symbol
 * @text オプション6シンボル
 * @desc オプション6のシンボル
 * @default seVolume
 *
 * @param Option 6 Category
 * @text オプション6カテゴリ
 * @desc オプション6のカテゴリ
 * @default 音量
 *
 * @param Option 6 Description
 * @text オプション6説明
 * @desc オプション6選択時に表示される説明
 * \nで改行
 * @default SEの音量が変わります。
 *
 * @param == Option 7 ==
 * @text -- オプション7 --
 * @default
 *
 * @param Option 7 Symbol
 * @text オプション7シンボル
 * @desc オプション7のシンボル
 * @default windowRed
 *
 * @param Option 7 Category
 * @text オプション7カテゴリ
 * @desc オプション7のカテゴリ
 * @default ウィンドウ
 *
 * @param Option 7 Description
 * @text オプション7説明
 * @desc オプション7選択時に表示される説明
 * \nで改行
 * @default ウィンドウの色調を決めます。
 *
 * @param == Option 8 ==
 * @text -- オプション8 --
 * @default
 *
 * @param Option 8 Symbol
 * @text オプション8シンボル
 * @desc オプション8のシンボル
 * @default windowGreen
 *
 * @param Option 8 Category
 * @text オプション8カテゴリ
 * @desc オプション8のカテゴリ
 * @default ウィンドウ
 *
 * @param Option 8 Description
 * @text オプション8説明
 * @desc オプション8選択時に表示される説明
 * \nで改行
 * @default ウィンドウの色調を決めます。
 *
 * @param == Option 9 ==
 * @text -- オプション9 --
 * @default
 *
 * @param Option 9 Symbol
 * @text オプション9シンボル
 * @desc オプション9のシンボル
 * @default windowBlue
 *
 * @param Option 9 Category
 * @text オプション9カテゴリ
 * @desc オプション9のカテゴリ
 * @default ウィンドウ
 *
 * @param Option 9 Description
 * @text オプション9説明
 * @desc オプション9選択時に表示される説明
 * \nで改行
 * @default ウィンドウの色調を決めます。
 *
 * @param == Option 10 ==
 * @text -- オプション10 --
 * @default
 *
 * @param Option 10 Symbol
 * @text オプション10シンボル
 * @desc オプション10のシンボル
 * @default windowSkin
 *
 * @param Option 10 Category
 * @text オプション10カテゴリ
 * @desc オプション10のカテゴリ
 * @default ウィンドウ
 *
 * @param Option 10 Description
 * @text オプション10説明
 * @desc オプション10選択時に表示される説明
 * \nで改行
 * @default ウィンドウスタイルをリスト中から選択できます。
 *
 * @param == Option 11 ==
 * @text -- オプション --
 * @default
 *
 * @param == Option 11 ==
 * @text -- オプション11 --
 * @default
 *
 * @param Option 11 Symbol
 * @text オプション11シンボル
 * @desc オプション11のシンボル
 * @default fullscreen
 *
 * @param Option 11 Category
 * @text オプション11カテゴリ
 * @desc オプション11のカテゴリ
 * @default 一般
 *
 * @param Option 11 Description
 * @text オプション11説明
 * @desc オプション11選択時に表示される説明
 * \nで改行
 * @default ONにすると、全画面モードに切り替わります。
 *
 * @param == Option 12 ==
 * @text -- オプション12 --
 * @default
 *
 * @param Option 12 Symbol
 * @text オプション12シンボル
 * @desc オプション12のシンボル
 * @default
 *
 * @param Option 12 Category
 * @text オプション12カテゴリ
 * @desc オプション12のカテゴリ
 * @default
 *
 * @param Option 12 Description
 * @text オプション12説明
 * @desc オプション12選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 13 ==
 * @text -- オプション13 --
 * @default
 *
 * @param Option 13 Symbol
 * @text オプション13シンボル
 * @desc オプション13のシンボル
 * @default
 *
 * @param Option 13 Category
 * @text オプション13カテゴリ
 * @desc オプション13のカテゴリ
 * @default
 *
 * @param Option 13 Description
 * @text オプション13説明
 * @desc オプション13選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 14 ==
 * @text -- オプション14 --
 * @default
 *
 * @param Option 14 Symbol
 * @text オプション14シンボル
 * @desc オプション14のシンボル
 * @default
 *
 * @param Option 14 Category
 * @text オプション14カテゴリ
 * @desc オプション14のカテゴリ
 * @default
 *
 * @param Option 14 Description
 * @text オプション14説明
 * @desc オプション14選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 15 ==
 * @text -- オプション15 --
 * @default
 *
 * @param Option 15 Symbol
 * @text オプション15シンボル
 * @desc オプション15のシンボル
 * @default
 *
 * @param Option 15 Category
 * @text オプション15カテゴリ
 * @desc オプション15のカテゴリ
 * @default
 *
 * @param Option 15 Description
 * @text オプション15説明
 * @desc オプション15選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 16 ==
 * @text -- オプション16 --
 * @default
 *
 * @param Option 16 Symbol
 * @text オプション16シンボル
 * @desc オプション16のシンボル
 * @default
 *
 * @param Option 16 Category
 * @text オプション16カテゴリ
 * @desc オプション16のカテゴリ
 * @default
 *
 * @param Option 16 Description
 * @text オプション16説明
 * @desc オプション16選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 17 ==
 * @text -- オプション17 --
 * @default
 *
 * @param Option 17 Symbol
 * @text オプション17シンボル
 * @desc オプション17のシンボル
 * @default
 *
 * @param Option 17 Category
 * @text オプション17カテゴリ
 * @desc オプション17のカテゴリ
 * @default
 *
 * @param Option 17 Description
 * @text オプション17説明
 * @desc オプション17選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 18 ==
 * @text -- オプション18 --
 * @default
 *
 * @param Option 18 Symbol
 * @text オプション18シンボル
 * @desc オプション18のシンボル
 * @default
 *
 * @param Option 18 Category
 * @text オプション18カテゴリ
 * @desc オプション18のカテゴリ
 * @default
 *
 * @param Option 18 Description
 * @text オプション18説明
 * @desc オプション18選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 19 ==
 * @text -- オプション19 --
 * @default
 *
 * @param Option 19 Symbol
 * @text オプション19シンボル
 * @desc オプション19のシンボル
 * @default
 *
 * @param Option 19 Category
 * @text オプション19カテゴリ
 * @desc オプション19のカテゴリ
 * @default
 *
 * @param Option 19 Description
 * @text オプション19説明
 * @desc オプション19選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 20 ==
 * @text -- オプション20 --
 * @default
 *
 * @param Option 20 Symbol
 * @text オプション20シンボル
 * @desc オプション20のシンボル
 * @default
 *
 * @param Option 20 Category
 * @text オプション20カテゴリ
 * @desc オプション20のカテゴリ
 * @default
 *
 * @param Option 20 Description
 * @text オプション20説明
 * @desc オプション20選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 21 ==
 * @text -- オプション21 --
 * @default
 *
 * @param Option 21 Symbol
 * @text オプション21シンボル
 * @desc オプション21のシンボル
 * @default
 *
 * @param Option 21 Category
 * @text オプション21カテゴリ
 * @desc オプション21のカテゴリ
 * @default
 *
 * @param Option 21 Description
 * @text オプション21説明
 * @desc オプション21選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 22 ==
 * @text -- オプション22 --
 * @default
 *
 * @param Option 22 Symbol
 * @text オプション22シンボル
 * @desc オプション22のシンボル
 * @default
 *
 * @param Option 22 Category
 * @text オプション22カテゴリ
 * @desc オプション22のカテゴリ
 * @default
 *
 * @param Option 22 Description
 * @text オプション22説明
 * @desc オプション22選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 23 ==
 * @text -- オプション23 --
 * @default
 *
 * @param Option 23 Symbol
 * @text オプション23シンボル
 * @desc オプション23のシンボル
 * @default
 *
 * @param Option 23 Category
 * @text オプション23カテゴリ
 * @desc オプション23のカテゴリ
 * @default
 *
 * @param Option 23 Description
 * @text オプション23説明
 * @desc オプション23選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 24 ==
 * @text -- オプション24 --
 * @default
 *
 * @param Option 24 Symbol
 * @text オプション24シンボル
 * @desc オプション24のシンボル
 * @default
 *
 * @param Option 24 Category
 * @text オプション24カテゴリ
 * @desc オプション24のカテゴリ
 * @default
 *
 * @param Option 24 Description
 * @text オプション24説明
 * @desc オプション24選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 25 ==
 * @text -- オプション25 --
 * @default
 *
 * @param Option 25 Symbol
 * @text オプション25シンボル
 * @desc オプション25のシンボル
 * @default
 *
 * @param Option 25 Category
 * @text オプション25カテゴリ
 * @desc オプション25のカテゴリ
 * @default
 *
 * @param Option 25 Description
 * @text オプション25説明
 * @desc オプション25選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 26 ==
 * @text -- オプション26 --
 * @default
 *
 * @param Option 26 Symbol
 * @text オプション26シンボル
 * @desc オプション26のシンボル
 * @default
 *
 * @param Option 26 Category
 * @text オプション26カテゴリ
 * @desc オプション26のカテゴリ
 * @default
 *
 * @param Option 26 Description
 * @text オプション26説明
 * @desc オプション26選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 27 ==
 * @text -- オプション27 --
 * @default
 *
 * @param Option 27 Symbol
 * @text オプション27シンボル
 * @desc オプション27のシンボル
 * @default
 *
 * @param Option 27 Category
 * @text オプション27カテゴリ
 * @desc オプション27のカテゴリ
 * @default
 *
 * @param Option 27 Description
 * @text オプション27説明
 * @desc オプション27選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 28 ==
 * @text -- オプション28 --
 * @default
 *
 * @param Option 28 Symbol
 * @text オプション28シンボル
 * @desc オプション28のシンボル
 * @default
 *
 * @param Option 28 Category
 * @text オプション28カテゴリ
 * @desc オプション28のカテゴリ
 * @default
 *
 * @param Option 28 Description
 * @text オプション28説明
 * @desc オプション28選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 29 ==
 * @text -- オプション29 --
 * @default
 *
 * @param Option 29 Symbol
 * @text オプション29シンボル
 * @desc オプション29のシンボル
 * @default
 *
 * @param Option 29 Category
 * @text オプション29カテゴリ
 * @desc オプション29のカテゴリ
 * @default
 *
 * @param Option 29 Description
 * @text オプション29説明
 * @desc オプション29選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 30 ==
 * @text -- オプション30 --
 * @default
 *
 * @param Option 30 Symbol
 * @text オプション30シンボル
 * @desc オプション30のシンボル
 * @default
 *
 * @param Option 30 Category
 * @text オプション30カテゴリ
 * @desc オプション30のカテゴリ
 * @default
 *
 * @param Option 30 Description
 * @text オプション30説明
 * @desc オプション30選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 31 ==
 * @text -- オプション31 --
 * @default
 *
 * @param Option 31 Symbol
 * @text オプション31シンボル
 * @desc オプション31のシンボル
 * @default
 *
 * @param Option 31 Category
 * @text オプション31カテゴリ
 * @desc オプション31のカテゴリ
 * @default
 *
 * @param Option 31 Description
 * @text オプション31説明
 * @desc オプション31選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 32 ==
 * @text -- オプション32 --
 * @default
 *
 * @param Option 32 Symbol
 * @text オプション32シンボル
 * @desc オプション32のシンボル
 * @default
 *
 * @param Option 32 Category
 * @text オプション32カテゴリ
 * @desc オプション32のカテゴリ
 * @default
 *
 * @param Option 32 Description
 * @text オプション32説明
 * @desc オプション32選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 33 ==
 * @text -- オプション33 --
 * @default
 *
 * @param Option 33 Symbol
 * @text オプション33シンボル
 * @desc オプション33のシンボル
 * @default
 *
 * @param Option 33 Category
 * @text オプション33カテゴリ
 * @desc オプション33のカテゴリ
 * @default
 *
 * @param Option 33 Description
 * @text オプション33説明
 * @desc オプション33選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 34 ==
 * @text -- オプション34 --
 * @default
 *
 * @param Option 34 Symbol
 * @text オプション34シンボル
 * @desc オプション34のシンボル
 * @default
 *
 * @param Option 34 Category
 * @text オプション34カテゴリ
 * @desc オプション34のカテゴリ
 * @default
 *
 * @param Option 34 Description
 * @text オプション34説明
 * @desc オプション34選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 35 ==
 * @text -- オプション35 --
 * @default
 *
 * @param Option 35 Symbol
 * @text オプション35シンボル
 * @desc オプション35のシンボル
 * @default
 *
 * @param Option 35 Category
 * @text オプション35カテゴリ
 * @desc オプション35のカテゴリ
 * @default
 *
 * @param Option 35 Description
 * @text オプション35説明
 * @desc オプション35選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 36 ==
 * @text -- オプション36 --
 * @default
 *
 * @param Option 36 Symbol
 * @text オプション36シンボル
 * @desc オプション36のシンボル
 * @default
 *
 * @param Option 36 Category
 * @text オプション36カテゴリ
 * @desc オプション36のカテゴリ
 * @default
 *
 * @param Option 36 Description
 * @text オプション36説明
 * @desc オプション36選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 37 ==
 * @text -- オプション37 --
 * @default
 *
 * @param Option 37 Symbol
 * @text オプション37シンボル
 * @desc オプション37のシンボル
 * @default
 *
 * @param Option 37 Category
 * @text オプション37カテゴリ
 * @desc オプション37のカテゴリ
 * @default
 *
 * @param Option 37 Description
 * @text オプション37説明
 * @desc オプション37選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 38 ==
 * @text -- オプション38 --
 * @default
 *
 * @param Option 38 Symbol
 * @text オプション38シンボル
 * @desc オプション38のシンボル
 * @default
 *
 * @param Option 38 Category
 * @text オプション38カテゴリ
 * @desc オプション38のカテゴリ
 * @default
 *
 * @param Option 38 Description
 * @text オプション38説明
 * @desc オプション38選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 39 ==
 * @text -- オプション39 --
 * @default
 *
 * @param Option 39 Symbol
 * @text オプション39シンボル
 * @desc オプション39のシンボル
 * @default
 *
 * @param Option 39 Category
 * @text オプション39カテゴリ
 * @desc オプション39のカテゴリ
 * @default
 *
 * @param Option 39 Description
 * @text オプション39説明
 * @desc オプション39選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 40 ==
 * @text -- オプション40 --
 * @default
 *
 * @param Option 40 Symbol
 * @text オプション40シンボル
 * @desc オプション40のシンボル
 * @default
 *
 * @param Option 40 Category
 * @text オプション40カテゴリ
 * @desc オプション40のカテゴリ
 * @default
 *
 * @param Option 40 Description
 * @text オプション40説明
 * @desc オプション40選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 41 ==
 * @text -- オプション41 --
 * @default
 *
 * @param Option 41 Symbol
 * @text オプション41シンボル
 * @desc オプション41のシンボル
 * @default
 *
 * @param Option 41 Category
 * @text オプション41カテゴリ
 * @desc オプション41のカテゴリ
 * @default
 *
 * @param Option 41 Description
 * @text オプション41説明
 * @desc オプション41選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 42 ==
 * @text -- オプション42 --
 * @default
 *
 * @param Option 42 Symbol
 * @text オプション42シンボル
 * @desc オプション42のシンボル
 * @default
 *
 * @param Option 42 Category
 * @text オプション42カテゴリ
 * @desc オプション42のカテゴリ
 * @default
 *
 * @param Option 42 Description
 * @text オプション42説明
 * @desc オプション42選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 43 ==
 * @text -- オプション43 --
 * @default
 *
 * @param Option 43 Symbol
 * @text オプション43シンボル
 * @desc オプション43のシンボル
 * @default
 *
 * @param Option 43 Category
 * @text オプション43カテゴリ
 * @desc オプション43のカテゴリ
 * @default
 *
 * @param Option 43 Description
 * @text オプション43説明
 * @desc オプション43選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 44 ==
 * @text -- オプション44 --
 * @default
 *
 * @param Option 44 Symbol
 * @text オプション44シンボル
 * @desc オプション44のシンボル
 * @default
 *
 * @param Option 44 Category
 * @text オプション44カテゴリ
 * @desc オプション44のカテゴリ
 * @default
 *
 * @param Option 44 Description
 * @text オプション44説明
 * @desc オプション44選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 45 ==
 * @text -- オプション45 --
 * @default
 *
 * @param Option 45 Symbol
 * @text オプション45シンボル
 * @desc オプション45のシンボル
 * @default
 *
 * @param Option 45 Category
 * @text オプション45カテゴリ
 * @desc オプション45のカテゴリ
 * @default
 *
 * @param Option 45 Description
 * @text オプション45説明
 * @desc オプション45選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 46 ==
 * @text -- オプション46 --
 * @default
 *
 * @param Option 46 Symbol
 * @text オプション46シンボル
 * @desc オプション46のシンボル
 * @default
 *
 * @param Option 46 Category
 * @text オプション46カテゴリ
 * @desc オプション46のカテゴリ
 * @default
 *
 * @param Option 46 Description
 * @text オプション46説明
 * @desc オプション46選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 47 ==
 * @text -- オプション47 --
 * @default
 *
 * @param Option 47 Symbol
 * @text オプション47シンボル
 * @desc オプション47のシンボル
 * @default
 *
 * @param Option 47 Category
 * @text オプション47カテゴリ
 * @desc オプション47のカテゴリ
 * @default
 *
 * @param Option 47 Description
 * @text オプション47説明
 * @desc オプション47選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 48 ==
 * @text -- オプション48 --
 * @default
 *
 * @param Option 48 Symbol
 * @text オプション48シンボル
 * @desc オプション48のシンボル
 * @default
 *
 * @param Option 48 Category
 * @text オプション48カテゴリ
 * @desc オプション48のカテゴリ
 * @default
 *
 * @param Option 48 Description
 * @text オプション48説明
 * @desc オプション48選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 49 ==
 * @text -- オプション49 --
 * @default
 *
 * @param Option 49 Symbol
 * @text オプション49シンボル
 * @desc オプション49のシンボル
 * @default
 *
 * @param Option 49 Category
 * @text オプション49カテゴリ
 * @desc オプション49のカテゴリ
 * @default
 *
 * @param Option 49 Description
 * @text オプション49説明
 * @desc オプション49選択時に表示される説明
 * \nで改行
 * @default
 *
 * @param == Option 50 ==
 * @text -- オプション50 --
 * @default
 *
 * @param Option 50 Symbol
 * @text オプション50シンボル
 * @desc オプション50のシンボル
 * @default
 *
 * @param Option 50 Category
 * @text オプション50カテゴリ
 * @desc オプション50のカテゴリ
 * @default
 *
 * @param Option 50 Description
 * @text オプション50説明
 * @desc オプション50選択時に表示される説明
 * \nで改行
 * @default
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/options-upgrade/
 *
 *
 * Options Upgrade
 * Version 1.01
 * SumRndmDde
 *
 *
 * このプラグインはオプションメニューをアップグレードします。
 * オプションは異なるカテゴリに配置され、説明ウィンドウが追加されます。
 * また、全てのウィンドウの位置を操作することができ、
 * カテゴリウィンドウの行/列をコントロールすることができます。
 *
 *
 * ==========================================================================
 *  カテゴリー/説明文の設定
 * ==========================================================================
 *
 * デフォルトでは、全てのオプションには説明とカテゴリが設定されています。
 * これらは全てパラメータでカスタマイズできます。
 * オプションにカテゴリが割り当てられていない場合、
 * デフォルトのカテゴリに配置されます。
 * オプションに説明文がない場合、その説明文は使用されません。
 * カテゴリや説明を割り当てるには、コマンドのシンボルが必要です。
 *
 * まず、オプションXシンボルパラメータにコマンドを配置します。
 * そうすると、このシンボルに関連付けられたオプションで、
 * オプションXのカテゴリと説明が使用されます。
 *
 *
 * ==========================================================================
 *  ウィンドウ色のカスタマイズ
 * ==========================================================================
 *
 * ゲームのウィンドウ色調を変更するオプションも追加します。
 * これを解除するには、
 * 'Add Window Colors?'パラメータをfalseに設定します。
 * この場合、
 * 'Window'カテゴリが空白のままになることがあることに注意してください。
 * そのような場合、必ずリストからカテゴリを削除してください。
 * しかし、必要に応じて他のオプションを追加することもできます。
 *
 *
 * ==========================================================================
 *  ヘルプファイルの終わり
 * ==========================================================================
 *
 * ヘルプファイルの終わりへようこそ。
 *
 * 読んでくれてありがとう!
 * 質問があったり、このプラグインを楽しめたら、
 * 私のYouTubeチャンネルを登録してください!!
 *
 * https://www.youtube.com/c/SumRndmDde
 *
 *
 * 次の機会まで
 *   ~ SumRndmDde
 *
 */

var SRD = SRD || {};
SRD.OptionsUpgrade = SRD.OptionsUpgrade || {};

var Imported = Imported || {};
Imported["SumRndmDde Options Upgrade"] = 1.02;

function Window_OptionsCategory() {
	this.initialize.apply(this, arguments);
}

(function (_) {

	"use strict";

	var params = PluginManager.parameters('SRD_OptionsUpgrade');

	_.categories = String(params['Categories']).split(/\s*,\s*/);
	_.default = String(params['Default Category']);
	_.addColors = String(params['Add Window Colors?']).trim().toLowerCase() === 'true';
	_.addReset = String(params['Add Reset Option?']).trim().toLowerCase() === 'true';
	_.resetName = String(params['Reset Option Name']);
	_.resetSE = String(params['Reset Option SE']);


	_.categoryCols = String(params['Category Window Cols']);
	_.categoryRows = String(params['Category Window Rows']);
	_.categoryX = String(params['Category Window X']);
	_.categoryY = String(params['Category Window Y']);
	_.categoryWidth = String(params['Category Window Width']);
	_.categoryAlign = String(params['Category Text Align']);

	_.optionsX = String(params['Options Window X']);
	_.optionsY = String(params['Options Window Y']);
	_.optionsWidth = String(params['Options Window Width']);

	_.helpX = String(params['Help Window X']);
	_.helpY = String(params['Help Window Y']);

	_.windowRedText = String(params['Window Red Text'] || "Window Red");
	_.windowGreenText = String(params['Window Green Text'] || "Window Green");
	_.windowBlueText = String(params['Window Blue Text'] || "Window Blue");

	_.commands = [];
	_.comCategories = [];
	_.comDescriptions = [];

	for (var i = 1; i <= 50; i++) {
		var symbol = String(params['Option ' + i + ' Symbol']);
		if (symbol.trim().length > 0) {
			var category = String(params['Option ' + i + ' Category']);
			var description = String(params['Option ' + i + ' Description']).replace('\\n', '\n');
			_.commands[i - 1] = symbol;
			_.comCategories[i - 1] = category;
			_.comDescriptions[i - 1] = description;
		}
	}

	//-----------------------------------------------------------------------------
	// Scene_Options
	//-----------------------------------------------------------------------------

	var _Scene_Options_create = Scene_Options.prototype.create;
	Scene_Options.prototype.create = function () {
		_Scene_Options_create.apply(this, arguments);
		this.createMessageWindow();
		this._optionsWindow.deactivate();
		this._optionsWindow.deselect();
		this.createCategoryWindow();
		this.createHelpWindow();
		for (var i = 0; i < 2; i++) {
			this._helpWindow.x = eval(_.helpX);
			this._helpWindow.y = eval(_.helpY);
			this._categoryWindow.x = eval(_.categoryX);
			this._categoryWindow.y = eval(_.categoryY);
		}
		this._optionsWindow.setCategoryWindow(this._categoryWindow);
	};

	Scene_Options.prototype.onCategoryOk = function () {
		this._optionsWindow.activate();
		this._optionsWindow.select(0);
	};

	Scene_Options.prototype.onCategoryCancel = function () {
		//$gameMessage.add('Do you wish to save these settings?');
		this.popScene();
	};

	Scene_Options.prototype.onCategoryReset = function () {
		ConfigManager.applyData({});
		this._optionsWindow.deselect();
		this._categoryWindow.activate();
		this._helpWindow.clear();
	};

	Scene_Options.prototype.onOptionsCancel = function () {
		this._optionsWindow.deselect();
		this._categoryWindow.activate();
		this._helpWindow.clear();
	};

	var _Scene_Options_createOptionsWindow = Scene_Options.prototype.createOptionsWindow;
	Scene_Options.prototype.createOptionsWindow = function () {
		_Scene_Options_createOptionsWindow.apply(this, arguments);
		this._optionsWindow.setHandler('cancel', this.onOptionsCancel.bind(this));
	};

	Scene_Options.prototype.createCategoryWindow = function () {
		this._categoryWindow = new Window_OptionsCategory();
		this._categoryWindow.setHandler('ok', this.onCategoryOk.bind(this));
		this._categoryWindow.setHandler('cancel', this.onCategoryCancel.bind(this));
		this._categoryWindow.setHandler('srd-reset-and-stuff', this.onCategoryReset.bind(this));
		this._categoryWindow.setOptionsWindow(this._optionsWindow);
		this.addWindow(this._categoryWindow);
	};

	Scene_Options.prototype.createHelpWindow = function () {
		this._helpWindow = new Window_Help();
		this._optionsWindow.setHelpWindow(this._helpWindow);
		this.addWindow(this._helpWindow);
	};

	Scene_Options.prototype.createMessageWindow = function () {
		this._messageWindow = new Window_Message();
		this.addWindow(this._messageWindow);
		this._messageWindow.subWindows().forEach(function (window) {
			this.addWindow(window);
		}, this);
	};

	//-----------------------------------------------------------------------------
	// Window_OptionsCategory
	//-----------------------------------------------------------------------------

	Window_OptionsCategory.prototype = Object.create(Window_HorzCommand.prototype);
	Window_OptionsCategory.prototype.constructor = Window_OptionsCategory;

	Window_OptionsCategory.prototype.initialize = function () {
		Window_HorzCommand.prototype.initialize.call(this, 0, 0);
	};

	Window_OptionsCategory.prototype.windowWidth = function () {
		return eval(_.categoryWidth);
	};

	Window_OptionsCategory.prototype.maxCols = function () {
		return eval(_.categoryCols);
	};

	Window_OptionsCategory.prototype.numVisibleRows = function () {
		return eval(_.categoryRows);
	};

	Window_OptionsCategory.prototype.update = function () {
		Window_HorzCommand.prototype.update.call(this);
		if (this._optionsWindow && this.currentSymbol() != this._optionsWindow.getCategory()) {
			this._optionsWindow.setCategory(this.currentSymbol());
		}
	};

	Window_OptionsCategory.prototype.makeCommandList = function () {
		for (var i = 0; i < _.categories.length; i++) {
			this.addCommand(_.categories[i], _.categories[i]);
		}
		if (_.addReset) this.addCommand(_.resetName, 'srd-reset-and-stuff');
	};

	Window_OptionsCategory.prototype.setOptionsWindow = function (optionsWindow) {
		this._optionsWindow = optionsWindow;
		this.update();
	};

	Window_OptionsCategory.prototype.playOkSound = function () {
		if (this.currentSymbol() != 'srd-reset-and-stuff') {
			SoundManager.playOk();
		} else {
			AudioManager.playSe({ "name": _.resetSE, "pan": 0, "pitch": 100, "volume": 100 });
		}
	};

	Window_OptionsCategory.prototype.itemTextAlign = function () {
		return _.categoryAlign;
	};

	//-----------------------------------------------------------------------------
	// Window_Options
	//-----------------------------------------------------------------------------

	var _Window_Options_initialize = Window_Options.prototype.initialize;
	Window_Options.prototype.initialize = function () {
		this._category = _.comCategories[0];
		_Window_Options_initialize.apply(this, arguments);
		this.refresh();
	};

	Window_Options.prototype.windowWidth = function () {
		return eval(_.optionsWidth);
	};

	Window_Options.prototype.setCategory = function (category) {
		this._category = category;
		this.refresh();
	};

	Window_Options.prototype.getCategory = function () {
		return this._category;
	};

	Window_Options.prototype.updatePlacement = function () {
		if (this._helpWindow && this._categoryWindow) {
			this.x = eval(_.optionsX);
			this.y = eval(_.optionsY);
		}
	};

	var _Window_Command_addCommand = Window_Command.prototype.addCommand;
	Window_Options.prototype.addCommand = function (name, symbol, enabled, ext) {
		var index = _.commands.indexOf(symbol);
		if (index < 0 && this._category != _.default) return;
		if (index >= 0 && this._category != _.comCategories[index]) return;
		_Window_Command_addCommand.apply(this, arguments);
	};

	Window_Options.prototype.makeCommandList = function () {
		this.addGeneralOptions();
		this.addVolumeOptions();
		if (_.addColors) {
			this.addCommand(_.windowRedText, 'windowRed');
			this.addCommand(_.windowGreenText, 'windowGreen');
			this.addCommand(_.windowBlueText, 'windowBlue');
		}
	};

	Window_Options.prototype.updateHelp = function () {
		if (this._helpWindow) {
			var index = _.commands.indexOf(this.currentData() ? this.currentData().symbol : '');
			this._helpWindow.setText(_.comDescriptions[index]);
		}
	};

	Window_Options.prototype.updateHeight = function () {
		if (this.height != this.windowHeight()) {
			this.height = this.windowHeight();
		}
		if (this._list.length <= 0) {
			this.visible = false;
		} else {
			this.visible = true;
		}
	};

	Window_Options.prototype.setHelpWindow = function (window) {
		this._helpWindow = window;
		this.updateHelp();
	};

	Window_Options.prototype.setCategoryWindow = function (window) {
		this._categoryWindow = window;
		this.updatePlacement();
	};

	Window_Options.prototype.refresh = function () {
		this.clearCommandList();
		this.makeCommandList();
		this.updateHeight();
		this.createContents();
		this.drawAllItems();
	};

	if (_.addColors) {

		var _Window_Options_statusText = Window_Options.prototype.statusText;
		Window_Options.prototype.statusText = function (index) {
			var symbol = this.commandSymbol(index);
			var value = this.getConfigValue(symbol);
			if (this.isWindowColorSymbol(symbol)) {
				return this.windowColorStatusText(value);
			} else {
				return _Window_Options_statusText.apply(this, arguments);
			}
		};

		Window_Options.prototype.isWindowColorSymbol = function (symbol) {
			return symbol === 'windowRed' || symbol === 'windowGreen' || symbol === 'windowBlue';
		};

		Window_Options.prototype.windowColorStatusText = function (value) {
			return value;
		};

		var _Window_Options_processOk = Window_Options.prototype.processOk;
		Window_Options.prototype.processOk = function () {
			var index = this.index();
			var symbol = this.commandSymbol(index);
			var value = this.getConfigValue(symbol);
			if (this.isWindowColorSymbol(symbol)) {
				value += 5;
				if (value > 255) {
					value = 0;
				}
				value = value.clamp(-255, 255);
				this.changeValue(symbol, value);
			} else {
				_Window_Options_processOk.apply(this, arguments);
			}
		};

		var _Window_Options_cursorRight = Window_Options.prototype.cursorRight;
		Window_Options.prototype.cursorRight = function (wrap) {
			var index = this.index();
			var symbol = this.commandSymbol(index);
			var value = this.getConfigValue(symbol);
			if (this.isWindowColorSymbol(symbol)) {
				value += 5;
				value = value.clamp(-255, 255);
				this.changeValue(symbol, value);
			} else {
				_Window_Options_cursorRight.apply(this, arguments);
			}
		};

		var _Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
		Window_Options.prototype.cursorLeft = function (wrap) {
			var index = this.index();
			var symbol = this.commandSymbol(index);
			var value = this.getConfigValue(symbol);
			if (this.isWindowColorSymbol(symbol)) {
				value -= 5;
				value = value.clamp(-255, 255);
				this.changeValue(symbol, value);
			} else {
				_Window_Options_cursorLeft.apply(this, arguments);
			}
		};

		//-----------------------------------------------------------------------------
		// Game_System
		//-----------------------------------------------------------------------------

		var _Game_System_initialize = Game_System.prototype.initialize;
		Game_System.prototype.initialize = function () {
			_Game_System_initialize.apply(this, arguments);
			this.setWindowTone([ConfigManager._windowRed, ConfigManager._windowGreen, ConfigManager._windowBlue]);
		};

		//-----------------------------------------------------------------------------
		// ConfigManager
		//-----------------------------------------------------------------------------

		ConfigManager._windowRed = 0;
		ConfigManager._windowGreen = 0;
		ConfigManager._windowBlue = 0;

		Object.defineProperty(ConfigManager, 'windowRed', {
			get: function () {
				return $gameSystem ? $gameSystem.windowTone()[0] : this._windowRed;
			},
			set: function (value) {
				if ($gameSystem) {
					$gameSystem.windowTone()[0] = value;
				} else {
					this._windowRed = value;
				}
			},
			configurable: true
		});

		Object.defineProperty(ConfigManager, 'windowGreen', {
			get: function () {
				return $gameSystem ? $gameSystem.windowTone()[1] : this._windowGreen;
			},
			set: function (value) {
				if ($gameSystem) {
					$gameSystem.windowTone()[1] = value;
				} else {
					this._windowGreen = value;
				}
			},
			configurable: true
		});

		Object.defineProperty(ConfigManager, 'windowBlue', {
			get: function () {
				return $gameSystem ? $gameSystem.windowTone()[2] : this._windowBlue;
			},
			set: function (value) {
				if ($gameSystem) {
					$gameSystem.windowTone()[2] = value;
				} else {
					this._windowBlue = value;
				}
			},
			configurable: true
		});

		var _ConfigManager_makeData = ConfigManager.makeData;
		ConfigManager.makeData = function () {
			var config = _ConfigManager_makeData.apply(this, arguments);
			config.windowRed = this.windowRed;
			config.windowGreen = this.windowGreen;
			config.windowBlue = this.windowBlue;
			return config;
		};

		var _ConfigManager_applyData = ConfigManager.applyData;
		ConfigManager.applyData = function (config) {
			_ConfigManager_applyData.apply(this, arguments);
			this.windowRed = this.readWindowColors(config, 'windowRed');
			this.windowGreen = this.readWindowColors(config, 'windowGreen');
			this.windowBlue = this.readWindowColors(config, 'windowBlue');
		};

		ConfigManager.readWindowColors = function (config, name) {
			var value = config[name];
			if (value !== undefined) {
				return parseInt(value).clamp(-255, 255);
			} else {
				return 0;
			}
		};

	}

})(SRD.OptionsUpgrade);