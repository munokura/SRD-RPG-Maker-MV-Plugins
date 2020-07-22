/*:
 * @plugindesc Allows for developers to customize all the visible parameters that can be seen on the Equip Screen.
 * @author SumRndmDde
 *
 * @param Default Pos Color
 * @desc The default color used for positive stat gains.
 * @default #80ff80
 *
 * @param Default Neg Color
 * @desc The default color used for negative stat gains.
 * @default #c08080
 *
 * @param Window Width
 * @desc The width of the Stat Comparison window.
 * @default 356
 *
 * @param Font Size
 * @desc The font size of the stat comparisons.
 * @default 24
 *
 * @param Line Padding
 * @desc The padding in between each line.
 * @default 8
 *
 * @param == Stat 1 ==
 * @default
 *
 * @param Stat 1 Name
 * @desc The name of the stat that is shown on the window.
 * @default Max HP
 *
 * @param Stat 1 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.mhp
 *
 * @param Stat 1 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 2 ==
 * @default
 *
 * @param Stat 2 Name
 * @desc The name of the stat that is shown on the window.
 * @default Max MP
 *
 * @param Stat 2 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.mmp
 *
 * @param Stat 2 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 3 ==
 * @default
 *
 * @param Stat 3 Name
 * @desc The name of the stat that is shown on the window.
 * @default Attack
 *
 * @param Stat 3 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.atk
 *
 * @param Stat 3 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 4 ==
 * @default
 *
 * @param Stat 4 Name
 * @desc The name of the stat that is shown on the window.
 * @default Defense
 *
 * @param Stat 4 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.def
 *
 * @param Stat 4 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 5 ==
 * @default
 *
 * @param Stat 5 Name
 * @desc The name of the stat that is shown on the window.
 * @default M. Attack
 *
 * @param Stat 5 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.mat
 *
 * @param Stat 5 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 6 ==
 * @default
 *
 * @param Stat 6 Name
 * @desc The name of the stat that is shown on the window.
 * @default M. Defense
 *
 * @param Stat 6 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.mdf
 *
 * @param Stat 6 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 7 ==
 * @default
 *
 * @param Stat 7 Name
 * @desc The name of the stat that is shown on the window.
 * @default Agility
 *
 * @param Stat 7 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.agi
 *
 * @param Stat 7 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 8 ==
 * @default
 *
 * @param Stat 8 Name
 * @desc The name of the stat that is shown on the window.
 * @default Luck
 *
 * @param Stat 8 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default actor.luk
 *
 * @param Stat 8 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 9 ==
 * @default
 *
 * @param Stat 9 Name
 * @desc The name of the stat that is shown on the window.
 * @default Hit Rate
 *
 * @param Stat 9 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.hit * 100)
 *
 * @param Stat 9 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 10 ==
 * @default
 *
 * @param Stat 10 Name
 * @desc The name of the stat that is shown on the window.
 * @default Evade Rate
 *
 * @param Stat 10 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.eva * 100)
 *
 * @param Stat 10 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 11 ==
 * @default
 *
 * @param Stat 11 Name
 * @desc The name of the stat that is shown on the window.
 * @default Critical Rate
 *
 * @param Stat 11 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.cri * 100)
 *
 * @param Stat 11 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 12 ==
 * @default
 *
 * @param Stat 12 Name
 * @desc The name of the stat that is shown on the window.
 * @default Critical Evade
 *
 * @param Stat 12 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.cev * 100)
 *
 * @param Stat 12 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 13 ==
 * @default
 *
 * @param Stat 13 Name
 * @desc The name of the stat that is shown on the window.
 * @default M. Evasion
 *
 * @param Stat 13 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.mev * 100)
 *
 * @param Stat 13 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 14 ==
 * @default
 *
 * @param Stat 14 Name
 * @desc The name of the stat that is shown on the window.
 * @default M. Reflect
 *
 * @param Stat 14 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.mrf * 100)
 *
 * @param Stat 14 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 15 ==
 * @default
 *
 * @param Stat 15 Name
 * @desc The name of the stat that is shown on the window.
 * @default Counter Rate
 *
 * @param Stat 15 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.cnt * 100)
 *
 * @param Stat 15 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 16 ==
 * @default
 *
 * @param Stat 16 Name
 * @desc The name of the stat that is shown on the window.
 * @default HP Regen
 *
 * @param Stat 16 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.hrg * 100)
 *
 * @param Stat 16 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 17 ==
 * @default
 *
 * @param Stat 17 Name
 * @desc The name of the stat that is shown on the window.
 * @default MP Regen
 *
 * @param Stat 17 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.mrg * 100)
 *
 * @param Stat 17 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 18 ==
 * @default
 *
 * @param Stat 18 Name
 * @desc The name of the stat that is shown on the window.
 * @default TP Regen
 *
 * @param Stat 18 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.trg * 100)
 *
 * @param Stat 18 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 19 ==
 * @default
 *
 * @param Stat 19 Name
 * @desc The name of the stat that is shown on the window.
 * @default Target Rate
 *
 * @param Stat 19 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.tgr * 100)
 *
 * @param Stat 19 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 20 ==
 * @default
 *
 * @param Stat 20 Name
 * @desc The name of the stat that is shown on the window.
 * @default Guard Effect
 *
 * @param Stat 20 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.grd * 100)
 *
 * @param Stat 20 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 21 ==
 * @default
 *
 * @param Stat 21 Name
 * @desc The name of the stat that is shown on the window.
 * @default Recover Rate
 *
 * @param Stat 21 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.rec * 100)
 *
 * @param Stat 21 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 22 ==
 * @default
 *
 * @param Stat 22 Name
 * @desc The name of the stat that is shown on the window.
 * @default Pharmacology
 *
 * @param Stat 22 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.pha * 100)
 *
 * @param Stat 22 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 23 ==
 * @default
 *
 * @param Stat 23 Name
 * @desc The name of the stat that is shown on the window.
 * @default MP Cost Rate
 *
 * @param Stat 23 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.mcr * 100)
 *
 * @param Stat 23 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 24 ==
 * @default
 *
 * @param Stat 24 Name
 * @desc The name of the stat that is shown on the window.
 * @default TP Cost Rate
 *
 * @param Stat 24 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.tcr * 100)
 *
 * @param Stat 24 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 25 ==
 * @default
 *
 * @param Stat 25 Name
 * @desc The name of the stat that is shown on the window.
 * @default Damage Rate
 *
 * @param Stat 25 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.pdr * 100)
 *
 * @param Stat 25 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 26 ==
 * @default
 *
 * @param Stat 26 Name
 * @desc The name of the stat that is shown on the window.
 * @default M. Damage Rate
 *
 * @param Stat 26 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.mdr * 100)
 *
 * @param Stat 26 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 27 ==
 * @default
 *
 * @param Stat 27 Name
 * @desc The name of the stat that is shown on the window.
 * @default Floor Damage Rate
 *
 * @param Stat 27 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.fdr * 100)
 *
 * @param Stat 27 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 28 ==
 * @default
 *
 * @param Stat 28 Name
 * @desc The name of the stat that is shown on the window.
 * @default EXP Rate
 *
 * @param Stat 28 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default Math.floor(actor.exr * 100)
 *
 * @param Stat 28 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val%
 *
 * @param == Stat 29 ==
 * @default
 *
 * @param Stat 29 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 29 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 29 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 30 ==
 * @default
 *
 * @param Stat 30 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 30 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 30 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 31 ==
 * @default
 *
 * @param Stat 31 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 31 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 31 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 32 ==
 * @default
 *
 * @param Stat 32 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 32 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 32 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 33 ==
 * @default
 *
 * @param Stat 33 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 33 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 33 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 34 ==
 * @default
 *
 * @param Stat 34 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 34 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 34 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 35 ==
 * @default
 *
 * @param Stat 35 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 35 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 35 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 36 ==
 * @default
 *
 * @param Stat 36 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 36 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 36 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 37 ==
 * @default
 *
 * @param Stat 37 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 37 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 37 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 38 ==
 * @default
 *
 * @param Stat 38 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 38 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 38 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 39 ==
 * @default
 *
 * @param Stat 39 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 39 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 39 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 40 ==
 * @default
 *
 * @param Stat 40 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 40 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 40 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 41 ==
 * @default
 *
 * @param Stat 41 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 41 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 41 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 42 ==
 * @default
 *
 * @param Stat 42 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 42 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 42 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 43 ==
 * @default
 *
 * @param Stat 43 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 43 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 43 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 44 ==
 * @default
 *
 * @param Stat 44 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 44 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 44 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 45 ==
 * @default
 *
 * @param Stat 45 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 45 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 45 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 46 ==
 * @default
 *
 * @param Stat 46 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 46 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 46 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 47 ==
 * @default
 *
 * @param Stat 47 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 47 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 47 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 48 ==
 * @default
 *
 * @param Stat 48 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 48 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 48 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 49 ==
 * @default
 *
 * @param Stat 49 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 49 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 49 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 50 ==
 * @default
 *
 * @param Stat 50 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 50 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 50 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 51 ==
 * @default
 *
 * @param Stat 51 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 51 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 51 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 52 ==
 * @default
 *
 * @param Stat 52 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 52 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 52 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 53 ==
 * @default
 *
 * @param Stat 53 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 53 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 53 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 54 ==
 * @default
 *
 * @param Stat 54 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 54 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 54 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 55 ==
 * @default
 *
 * @param Stat 55 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 55 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 55 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 56 ==
 * @default
 *
 * @param Stat 56 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 56 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 56 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 57 ==
 * @default
 *
 * @param Stat 57 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 57 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 57 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 58 ==
 * @default
 *
 * @param Stat 58 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 58 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 58 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 59 ==
 * @default
 *
 * @param Stat 59 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 59 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 59 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 60 ==
 * @default
 *
 * @param Stat 60 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 60 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 60 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 61 ==
 * @default
 *
 * @param Stat 61 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 61 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 61 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 62 ==
 * @default
 *
 * @param Stat 62 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 62 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 62 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 63 ==
 * @default
 *
 * @param Stat 63 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 63 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 63 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 64 ==
 * @default
 *
 * @param Stat 64 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 64 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 64 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 65 ==
 * @default
 *
 * @param Stat 65 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 65 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 65 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 66 ==
 * @default
 *
 * @param Stat 66 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 66 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 66 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 67 ==
 * @default
 *
 * @param Stat 67 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 67 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 67 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 68 ==
 * @default
 *
 * @param Stat 68 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 68 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 68 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 69 ==
 * @default
 *
 * @param Stat 69 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 69 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 69 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 70 ==
 * @default
 *
 * @param Stat 70 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 70 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 70 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 71 ==
 * @default
 *
 * @param Stat 71 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 71 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 71 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 72 ==
 * @default
 *
 * @param Stat 72 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 72 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 72 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 73 ==
 * @default
 *
 * @param Stat 73 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 73 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 73 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 74 ==
 * @default
 *
 * @param Stat 74 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 74 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 74 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 75 ==
 * @default
 *
 * @param Stat 75 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 75 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 75 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 76 ==
 * @default
 *
 * @param Stat 76 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 76 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 76 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 77 ==
 * @default
 *
 * @param Stat 77 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 77 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 77 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 78 ==
 * @default
 *
 * @param Stat 78 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 78 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 78 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 79 ==
 * @default
 *
 * @param Stat 79 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 79 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 79 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 80 ==
 * @default
 *
 * @param Stat 80 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 80 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 80 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 81 ==
 * @default
 *
 * @param Stat 81 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 81 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 81 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 82 ==
 * @default
 *
 * @param Stat 82 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 82 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 82 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 83 ==
 * @default
 *
 * @param Stat 83 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 83 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 83 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 84 ==
 * @default
 *
 * @param Stat 84 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 84 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 84 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 85 ==
 * @default
 *
 * @param Stat 85 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 85 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 85 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 86 ==
 * @default
 *
 * @param Stat 86 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 86 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 86 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 87 ==
 * @default
 *
 * @param Stat 87 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 87 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 87 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 88 ==
 * @default
 *
 * @param Stat 88 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 88 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 88 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 89 ==
 * @default
 *
 * @param Stat 89 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 89 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 89 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 90 ==
 * @default
 *
 * @param Stat 90 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 90 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 90 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 91 ==
 * @default
 *
 * @param Stat 91 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 91 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 91 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 92 ==
 * @default
 *
 * @param Stat 92 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 92 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 92 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 93 ==
 * @default
 *
 * @param Stat 93 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 93 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 93 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 94 ==
 * @default
 *
 * @param Stat 94 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 94 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 94 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 95 ==
 * @default
 *
 * @param Stat 95 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 95 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 95 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 96 ==
 * @default
 *
 * @param Stat 96 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 96 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 96 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 97 ==
 * @default
 *
 * @param Stat 97 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 97 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 97 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 98 ==
 * @default
 *
 * @param Stat 98 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 98 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 98 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 99 ==
 * @default
 *
 * @param Stat 99 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 99 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 99 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @param == Stat 100 ==
 * @default
 *
 * @param Stat 100 Name
 * @desc The name of the stat that is shown on the window.
 * @default
 *
 * @param Stat 100 Eval
 * @desc The evaluation of the stat; it must eval to a number.
 * Use 'actor' to reference the actor object.
 * @default
 *
 * @param Stat 100 Format
 * @desc The String format of the values.
 * Use 'val' to represent the value.
 * @default val
 *
 * @help
 *
 * Equip Compare Upgrade
 * Version 1.01
 * SumRndmDde
 *
 *
 * This plugin allows for developers to customize all the visible stats that 
 * can be seen on the Equip Screen. Furthermore, it sets the comparison window
 * to only show the stats that are being changed.
 *
 *
 * ==============================================================================
 *  How to Set Up Stats
 * ==============================================================================
 *
 * In order to set up a stat to be available to the Comparison Window, you need
 * three things:
 *
 *  -  Name
 *  -  Formula for determining the stat
 *  -  String format it will appear as
 *
 *
 * In order to set up the name, simply use the "Stat X Name" parameters.
 *
 * In order to set up the formula for find the stat based off of an Actor
 * object, simply input it into the "Stat X Eval" parameters.
 *
 * In order to set up the format of the string, and determine what other 
 * characters will be shown, simply use the "Stat X Format" parameters.
 *
 *
 * For the most part, you should be able to figure out the system through
 * the parameters that are set up by default in the plugin.
 *
 *
 * ==============================================================================
 *  Formatting the Colors
 * ==============================================================================
 *
 * You can use notetags in the "Stat X Format" parameter to customize the colors
 * used for the comparison.
 *
 *   <Pos Color: [color]>
 *   <Neg Color: [color]>
 *
 * Input the "Pos Color" or positive color for when a stat is increased.
 * Input the "Neg Color" or negative color for when a stat is decreased.
 *
 *
 * ==============================================================================
 *  End of Help File
 * ==============================================================================
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
 */
/*:ja
 * @plugindesc 装備画面に表示される全能力値情報をカスタマイズできます。
 * @author SumRndmDde
 *
 * @param Default Pos Color
 * @text 増加デフォルト色
 * @desc 能力値の増加で使用されるデフォルト色
 * @default #80ff80
 *
 * @param Default Neg Color
 * @text 減少デフォルト色
 * @desc 能力値の減少で使用されるデフォルト色
 * @default #c08080
 *
 * @param Window Width
 * @text ウィンドウ幅
 * @desc 能力値比較ウィンドウの幅
 * @default 356
 *
 * @param Font Size
 * @text 文字サイズ
 * @desc 能力値比較のフォントサイズ
 * @default 24
 *
 * @param Line Padding
 * @text 行余白
 * @desc 行間の余白
 * @default 8
 *
 * @param == Stat 1 ==
 * @text -- 能力値1 --
 * @default
 *
 * @param Stat 1 Name
 * @text 能力値1名前
 * @desc ウィンドウに表示される能力値名
 * @default 最大HP
 *
 * @param Stat 1 Eval
 * @text 能力値1式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default actor.mhp
 *
 * @param Stat 1 Format
 * @text 能力値1文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 2 ==
 * @text -- 能力値2 --
 * @default
 *
 * @param Stat 2 Name
 * @text 能力値2名前
 * @desc ウィンドウに表示される能力値名
 * @default 最大MP
 *
 * @param Stat 2 Eval
 * @text 能力値2式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default actor.mmp
 *
 * @param Stat 2 Format
 * @text 能力値2文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 3 ==
 * @text -- 能力値3 --
 * @default
 *
 * @param Stat 3 Name
 * @text 能力値3名前
 * @desc ウィンドウに表示される能力値名
 * @default 攻撃力
 *
 * @param Stat 3 Eval
 * @text 能力値3式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default actor.atk
 *
 * @param Stat 3 Format
 * @text 能力値3文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 4 ==
 * @text -- 能力値4 --
 * @default
 *
 * @param Stat 4 Name
 * @text 能力値4名前
 * @desc ウィンドウに表示される能力値名
 * @default 防御力
 *
 * @param Stat 4 Eval
 * @text 能力値4式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default actor.def
 *
 * @param Stat 4 Format
 * @text 能力値4文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 5 ==
 * @text -- 能力値5 --
 * @default
 *
 * @param Stat 5 Name
 * @text 能力値5名前
 * @desc ウィンドウに表示される能力値名
 * @default 魔法力
 *
 * @param Stat 5 Eval
 * @text 能力値5式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default actor.mat
 *
 * @param Stat 5 Format
 * @text 能力値5文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 6 ==
 * @text -- 能力値6 --
 * @default
 *
 * @param Stat 6 Name
 * @text 能力値6名前
 * @desc ウィンドウに表示される能力値名
 * @default 魔法防御
 *
 * @param Stat 6 Eval
 * @text 能力値6式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default actor.mdf
 *
 * @param Stat 6 Format
 * @text 能力値6文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 7 ==
 * @text -- 能力値7 --
 * @default
 *
 * @param Stat 7 Name
 * @text 能力値7名前
 * @desc ウィンドウに表示される能力値名
 * @default 敏捷性
 *
 * @param Stat 7 Eval
 * @text 能力値7式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default actor.agi
 *
 * @param Stat 7 Format
 * @text 能力値7文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 8 ==
 * @text -- 能力値8 --
 * @default
 *
 * @param Stat 8 Name
 * @text 能力値8名前
 * @desc ウィンドウに表示される能力値名
 * @default 運
 *
 * @param Stat 8 Eval
 * @text 能力値8式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default actor.luk
 *
 * @param Stat 8 Format
 * @text 能力値8文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 9 ==
 * @text -- 能力値9 --
 * @default
 *
 * @param Stat 9 Name
 * @text 能力値9名前
 * @desc ウィンドウに表示される能力値名
 * @default 命中率
 *
 * @param Stat 9 Eval
 * @text 能力値9式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.hit * 100)
 *
 * @param Stat 9 Format
 * @text 能力値9文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 10 ==
 * @text -- 能力値10 --
 * @default
 *
 * @param Stat 10 Name
 * @text 能力値10名前
 * @desc ウィンドウに表示される能力値名
 * @default 回避率
 *
 * @param Stat 10 Eval
 * @text 能力値10式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.eva * 100)
 *
 * @param Stat 10 Format
 * @text 能力値10文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 11 ==
 * @text -- 能力値11 --
 * @default
 *
 * @param Stat 11 Name
 * @text 能力値11名前
 * @desc ウィンドウに表示される能力値名
 * @default 会心率
 *
 * @param Stat 11 Eval
 * @text 能力値11式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.cri * 100)
 *
 * @param Stat 11 Format
 * @text 能力値11文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 12 ==
 * @text -- 能力値12 --
 * @default
 *
 * @param Stat 12 Name
 * @text 能力値12名前
 * @desc ウィンドウに表示される能力値名
 * @default 会心回避率
 *
 * @param Stat 12 Eval
 * @text 能力値12式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.cev * 100)
 *
 * @param Stat 12 Format
 * @text 能力値12文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 13 ==
 * @text -- 能力値13 --
 * @default
 *
 * @param Stat 13 Name
 * @text 能力値13名前
 * @desc ウィンドウに表示される能力値名
 * @default 魔法回避率
 *
 * @param Stat 13 Eval
 * @text 能力値13式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.mev * 100)
 *
 * @param Stat 13 Format
 * @text 能力値13文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 14 ==
 * @text -- 能力値14 --
 * @default
 *
 * @param Stat 14 Name
 * @text 能力値14名前
 * @desc ウィンドウに表示される能力値名
 * @default 魔法反射率
 *
 * @param Stat 14 Eval
 * @text 能力値14式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.mrf * 100)
 *
 * @param Stat 14 Format
 * @text 能力値14文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 15 ==
 * @text -- 能力値15 --
 * @default
 *
 * @param Stat 15 Name
 * @text 能力値15名前
 * @desc ウィンドウに表示される能力値名
 * @default 反撃率
 *
 * @param Stat 15 Eval
 * @text 能力値15式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.cnt * 100)
 *
 * @param Stat 15 Format
 * @text 能力値15文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 16 ==
 * @text -- 能力値16 --
 * @default
 *
 * @param Stat 16 Name
 * @text 能力値16名前
 * @desc ウィンドウに表示される能力値名
 * @default HP再生率
 *
 * @param Stat 16 Eval
 * @text 能力値16式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.hrg * 100)
 *
 * @param Stat 16 Format
 * @text 能力値16文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 17 ==
 * @text -- 能力値17 --
 * @default
 *
 * @param Stat 17 Name
 * @text 能力値17名前
 * @desc ウィンドウに表示される能力値名
 * @default MP再生率
 *
 * @param Stat 17 Eval
 * @text 能力値17式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.mrg * 100)
 *
 * @param Stat 17 Format
 * @text 能力値17文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 18 ==
 * @text -- 能力値18 --
 * @default
 *
 * @param Stat 18 Name
 * @text 能力値18名前
 * @desc ウィンドウに表示される能力値名
 * @default TP再生率
 *
 * @param Stat 18 Eval
 * @text 能力値18式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.trg * 100)
 *
 * @param Stat 18 Format
 * @text 能力値18文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 19 ==
 * @text -- 能力値19 --
 * @default
 *
 * @param Stat 19 Name
 * @text 能力値19名前
 * @desc ウィンドウに表示される能力値名
 * @default 狙われ率
 *
 * @param Stat 19 Eval
 * @text 能力値19式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.tgr * 100)
 *
 * @param Stat 19 Format
 * @text 能力値19文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 20 ==
 * @text -- 能力値20 --
 * @default
 *
 * @param Stat 20 Name
 * @text 能力値20名前
 * @desc ウィンドウに表示される能力値名
 * @default 防御効果率
 *
 * @param Stat 20 Eval
 * @text 能力値20式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.grd * 100)
 *
 * @param Stat 20 Format
 * @text 能力値20文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 21 ==
 * @text -- 能力値21 --
 * @default
 *
 * @param Stat 21 Name
 * @text 能力値21名前
 * @desc ウィンドウに表示される能力値名
 * @default 回復効果率
 *
 * @param Stat 21 Eval
 * @text 能力値21式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.rec * 100)
 *
 * @param Stat 21 Format
 * @text 能力値21文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 22 ==
 * @text -- 能力値22 --
 * @default
 *
 * @param Stat 22 Name
 * @text 能力値22名前
 * @desc ウィンドウに表示される能力値名
 * @default 薬の知識
 *
 * @param Stat 22 Eval
 * @text 能力値22式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.pha * 100)
 *
 * @param Stat 22 Format
 * @text 能力値22文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 23 ==
 * @text -- 能力値23 --
 * @default
 *
 * @param Stat 23 Name
 * @text 能力値23名前
 * @desc ウィンドウに表示される能力値名
 * @default MP消費率
 *
 * @param Stat 23 Eval
 * @text 能力値23式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.mcr * 100)
 *
 * @param Stat 23 Format
 * @text 能力値23文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 24 ==
 * @text -- 能力値24 --
 * @default
 *
 * @param Stat 24 Name
 * @text 能力値24名前
 * @desc ウィンドウに表示される能力値名
 * @default TPチャージ率
 *
 * @param Stat 24 Eval
 * @text 能力値24式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.tcr * 100)
 *
 * @param Stat 24 Format
 * @text 能力値24文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 25 ==
 * @text -- 能力値25 --
 * @default
 *
 * @param Stat 25 Name
 * @text 能力値25名前
 * @desc ウィンドウに表示される能力値名
 * @default 物理ダメージ率
 *
 * @param Stat 25 Eval
 * @text 能力値25式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.pdr * 100)
 *
 * @param Stat 25 Format
 * @text 能力値25文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 26 ==
 * @text -- 能力値26 --
 * @default
 *
 * @param Stat 26 Name
 * @text 能力値26名前
 * @desc ウィンドウに表示される能力値名
 * @default 魔法ダメージ率
 *
 * @param Stat 26 Eval
 * @text 能力値26式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.mdr * 100)
 *
 * @param Stat 26 Format
 * @text 能力値26文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 27 ==
 * @text -- 能力値27 --
 * @default
 *
 * @param Stat 27 Name
 * @text 能力値27名前
 * @desc ウィンドウに表示される能力値名
 * @default 床ダメージ率
 *
 * @param Stat 27 Eval
 * @text 能力値27式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.fdr * 100)
 *
 * @param Stat 27 Format
 * @text 能力値27文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 28 ==
 * @text -- 能力値28 --
 * @default
 *
 * @param Stat 28 Name
 * @text 能力値28名前
 * @desc ウィンドウに表示される能力値名
 * @default 経験獲得率
 *
 * @param Stat 28 Eval
 * @text 能力値28式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default Math.floor(actor.exr * 100)
 *
 * @param Stat 28 Format
 * @text 能力値28文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val%
 *
 * @param == Stat 29 ==
 * @text -- 能力値29 --
 * @default
 *
 * @param Stat 29 Name
 * @text 能力値29名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 29 Eval
 * @text 能力値29式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 29 Format
 * @text 能力値29文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 30 ==
 * @text -- 能力値30 --
 * @default
 *
 * @param Stat 30 Name
 * @text 能力値30名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 30 Eval
 * @text 能力値30式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 30 Format
 * @text 能力値30文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 31 ==
 * @text -- 能力値31 --
 * @default
 *
 * @param Stat 31 Name
 * @text 能力値31名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 31 Eval
 * @text 能力値31式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 31 Format
 * @text 能力値31文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 32 ==
 * @text -- 能力値32 --
 * @default
 *
 * @param Stat 32 Name
 * @text 能力値32名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 32 Eval
 * @text 能力値32式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 32 Format
 * @text 能力値32文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 33 ==
 * @text -- 能力値33 --
 * @default
 *
 * @param Stat 33 Name
 * @text 能力値33名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 33 Eval
 * @text 能力値33式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 33 Format
 * @text 能力値33文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 34 ==
 * @text -- 能力値34 --
 * @default
 *
 * @param Stat 34 Name
 * @text 能力値34名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 34 Eval
 * @text 能力値34式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 34 Format
 * @text 能力値34文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 35 ==
 * @text -- 能力値35 --
 * @default
 *
 * @param Stat 35 Name
 * @text 能力値35名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 35 Eval
 * @text 能力値35式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 35 Format
 * @text 能力値35文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 36 ==
 * @text -- 能力値36 --
 * @default
 *
 * @param Stat 36 Name
 * @text 能力値36名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 36 Eval
 * @text 能力値36式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 36 Format
 * @text 能力値36文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 37 ==
 * @text -- 能力値37 --
 * @default
 *
 * @param Stat 37 Name
 * @text 能力値37名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 37 Eval
 * @text 能力値37式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 37 Format
 * @text 能力値37文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 38 ==
 * @text -- 能力値38 --
 * @default
 *
 * @param Stat 38 Name
 * @text 能力値38名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 38 Eval
 * @text 能力値38式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 38 Format
 * @text 能力値38文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 39 ==
 * @text -- 能力値39 --
 * @default
 *
 * @param Stat 39 Name
 * @text 能力値39名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 39 Eval
 * @text 能力値39式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 39 Format
 * @text 能力値39文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 40 ==
 * @text -- 能力値40 --
 * @default
 *
 * @param Stat 40 Name
 * @text 能力値40名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 40 Eval
 * @text 能力値40式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 40 Format
 * @text 能力値40文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 41 ==
 * @text -- 能力値41 --
 * @default
 *
 * @param Stat 41 Name
 * @text 能力値41名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 41 Eval
 * @text 能力値41式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 41 Format
 * @text 能力値41文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 42 ==
 * @text -- 能力値42 --
 * @default
 *
 * @param Stat 42 Name
 * @text 能力値42名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 42 Eval
 * @text 能力値42式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 42 Format
 * @text 能力値42文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 43 ==
 * @text -- 能力値43 --
 * @default
 *
 * @param Stat 43 Name
 * @text 能力値43名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 43 Eval
 * @text 能力値43式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 43 Format
 * @text 能力値43文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 44 ==
 * @text -- 能力値44 --
 * @default
 *
 * @param Stat 44 Name
 * @text 能力値44名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 44 Eval
 * @text 能力値44式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 44 Format
 * @text 能力値44文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 45 ==
 * @text -- 能力値45 --
 * @default
 *
 * @param Stat 45 Name
 * @text 能力値45名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 45 Eval
 * @text 能力値45式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 45 Format
 * @text 能力値45文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 46 ==
 * @text -- 能力値46 --
 * @default
 *
 * @param Stat 46 Name
 * @text 能力値46名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 46 Eval
 * @text 能力値46式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 46 Format
 * @text 能力値46文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 47 ==
 * @text -- 能力値47 --
 * @default
 *
 * @param Stat 47 Name
 * @text 能力値47名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 47 Eval
 * @text 能力値47式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 47 Format
 * @text 能力値47文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 48 ==
 * @text -- 能力値48 --
 * @default
 *
 * @param Stat 48 Name
 * @text 能力値48名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 48 Eval
 * @text 能力値48式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 48 Format
 * @text 能力値48文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 49 ==
 * @text -- 能力値49 --
 * @default
 *
 * @param Stat 49 Name
 * @text 能力値49名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 49 Eval
 * @text 能力値49式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 49 Format
 * @text 能力値49文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 50 ==
 * @text -- 能力値50 --
 * @default
 *
 * @param Stat 50 Name
 * @text 能力値50名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 50 Eval
 * @text 能力値50式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 50 Format
 * @text 能力値50文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 51 ==
 * @text -- 能力値51 --
 * @default
 *
 * @param Stat 51 Name
 * @text 能力値51名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 51 Eval
 * @text 能力値51式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 51 Format
 * @text 能力値51文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 52 ==
 * @text -- 能力値52 --
 * @default
 *
 * @param Stat 52 Name
 * @text 能力値52名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 52 Eval
 * @text 能力値52式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 52 Format
 * @text 能力値52文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 53 ==
 * @text -- 能力値53 --
 * @default
 *
 * @param Stat 53 Name
 * @text 能力値53名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 53 Eval
 * @text 能力値53式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 53 Format
 * @text 能力値53文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 54 ==
 * @text -- 能力値54 --
 * @default
 *
 * @param Stat 54 Name
 * @text 能力値54名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 54 Eval
 * @text 能力値54式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 54 Format
 * @text 能力値54文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 55 ==
 * @text -- 能力値55 --
 * @default
 *
 * @param Stat 55 Name
 * @text 能力値55名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 55 Eval
 * @text 能力値55式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 55 Format
 * @text 能力値55文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 56 ==
 * @text -- 能力値56 --
 * @default
 *
 * @param Stat 56 Name
 * @text 能力値56名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 56 Eval
 * @text 能力値56式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 56 Format
 * @text 能力値56文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 57 ==
 * @text -- 能力値57 --
 * @default
 *
 * @param Stat 57 Name
 * @text 能力値57名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 57 Eval
 * @text 能力値57式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 57 Format
 * @text 能力値57文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 58 ==
 * @text -- 能力値58 --
 * @default
 *
 * @param Stat 58 Name
 * @text 能力値58名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 58 Eval
 * @text 能力値58式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 58 Format
 * @text 能力値58文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 59 ==
 * @text -- 能力値59 --
 * @default
 *
 * @param Stat 59 Name
 * @text 能力値59名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 59 Eval
 * @text 能力値59式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 59 Format
 * @text 能力値59文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 60 ==
 * @text -- 能力値60 --
 * @default
 *
 * @param Stat 60 Name
 * @text 能力値60名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 60 Eval
 * @text 能力値60式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 60 Format
 * @text 能力値60文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 61 ==
 * @text -- 能力値61 --
 * @default
 *
 * @param Stat 61 Name
 * @text 能力値61名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 61 Eval
 * @text 能力値61式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 61 Format
 * @text 能力値61文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 62 ==
 * @text -- 能力値62 --
 * @default
 *
 * @param Stat 62 Name
 * @text 能力値62名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 62 Eval
 * @text 能力値62式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 62 Format
 * @text 能力値62文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 63 ==
 * @text -- 能力値63 --
 * @default
 *
 * @param Stat 63 Name
 * @text 能力値63名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 63 Eval
 * @text 能力値63式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 63 Format
 * @text 能力値63文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 64 ==
 * @text -- 能力値64 --
 * @default
 *
 * @param Stat 64 Name
 * @text 能力値64名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 64 Eval
 * @text 能力値64式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 64 Format
 * @text 能力値64文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 65 ==
 * @text -- 能力値65 --
 * @default
 *
 * @param Stat 65 Name
 * @text 能力値65名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 65 Eval
 * @text 能力値65式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 65 Format
 * @text 能力値65文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 66 ==
 * @text -- 能力値66 --
 * @default
 *
 * @param Stat 66 Name
 * @text 能力値66名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 66 Eval
 * @text 能力値66式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 66 Format
 * @text 能力値66文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 67 ==
 * @text -- 能力値67 --
 * @default
 *
 * @param Stat 67 Name
 * @text 能力値67名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 67 Eval
 * @text 能力値67式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 67 Format
 * @text 能力値67文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 68 ==
 * @text -- 能力値68 --
 * @default
 *
 * @param Stat 68 Name
 * @text 能力値68名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 68 Eval
 * @text 能力値68式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 68 Format
 * @text 能力値68文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 69 ==
 * @text -- 能力値69 --
 * @default
 *
 * @param Stat 69 Name
 * @text 能力値69名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 69 Eval
 * @text 能力値69式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 69 Format
 * @text 能力値69文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 70 ==
 * @text -- 能力値70 --
 * @default
 *
 * @param Stat 70 Name
 * @text 能力値70名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 70 Eval
 * @text 能力値70式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 70 Format
 * @text 能力値70文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 71 ==
 * @text -- 能力値71 --
 * @default
 *
 * @param Stat 71 Name
 * @text 能力値71名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 71 Eval
 * @text 能力値71式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 71 Format
 * @text 能力値71文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 72 ==
 * @text -- 能力値72 --
 * @default
 *
 * @param Stat 72 Name
 * @text 能力値72名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 72 Eval
 * @text 能力値72式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 72 Format
 * @text 能力値72文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 73 ==
 * @text -- 能力値73 --
 * @default
 *
 * @param Stat 73 Name
 * @text 能力値73名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 73 Eval
 * @text 能力値73式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 73 Format
 * @text 能力値73文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 74 ==
 * @text -- 能力値74 --
 * @default
 *
 * @param Stat 74 Name
 * @text 能力値74名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 74 Eval
 * @text 能力値74式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 74 Format
 * @text 能力値74文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 75 ==
 * @text -- 能力値75 --
 * @default
 *
 * @param Stat 75 Name
 * @text 能力値75名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 75 Eval
 * @text 能力値75式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 75 Format
 * @text 能力値75文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 76 ==
 * @text -- 能力値76 --
 * @default
 *
 * @param Stat 76 Name
 * @text 能力値76名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 76 Eval
 * @text 能力値76式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 76 Format
 * @text 能力値76文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 77 ==
 * @text -- 能力値77 --
 * @default
 *
 * @param Stat 77 Name
 * @text 能力値77名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 77 Eval
 * @text 能力値77式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 77 Format
 * @text 能力値77文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 78 ==
 * @text -- 能力値78 --
 * @default
 *
 * @param Stat 78 Name
 * @text 能力値78名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 78 Eval
 * @text 能力値78式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 78 Format
 * @text 能力値78文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 79 ==
 * @text -- 能力値79 --
 * @default
 *
 * @param Stat 79 Name
 * @text 能力値79名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 79 Eval
 * @text 能力値79式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 79 Format
 * @text 能力値79文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 80 ==
 * @text -- 能力値80 --
 * @default
 *
 * @param Stat 80 Name
 * @text 能力値80名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 80 Eval
 * @text 能力値80式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 80 Format
 * @text 能力値80文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 81 ==
 * @text -- 能力値81 --
 * @default
 *
 * @param Stat 81 Name
 * @text 能力値81名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 81 Eval
 * @text 能力値81式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 81 Format
 * @text 能力値81文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 82 ==
 * @text -- 能力値82 --
 * @default
 *
 * @param Stat 82 Name
 * @text 能力値82名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 82 Eval
 * @text 能力値82式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 82 Format
 * @text 能力値82文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 83 ==
 * @text -- 能力値83 --
 * @default
 *
 * @param Stat 83 Name
 * @text 能力値83名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 83 Eval
 * @text 能力値83式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 83 Format
 * @text 能力値83文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 84 ==
 * @text -- 能力値84 --
 * @default
 *
 * @param Stat 84 Name
 * @text 能力値84名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 84 Eval
 * @text 能力値84式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 84 Format
 * @text 能力値84文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 85 ==
 * @text -- 能力値85 --
 * @default
 *
 * @param Stat 85 Name
 * @text 能力値85名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 85 Eval
 * @text 能力値85式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 85 Format
 * @text 能力値85文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 86 ==
 * @text -- 能力値86 --
 * @default
 *
 * @param Stat 86 Name
 * @text 能力値86名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 86 Eval
 * @text 能力値86式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 86 Format
 * @text 能力値86文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 87 ==
 * @text -- 能力値87 --
 * @default
 *
 * @param Stat 87 Name
 * @text 能力値87名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 87 Eval
 * @text 能力値87式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 87 Format
 * @text 能力値87文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 88 ==
 * @text -- 能力値88 --
 * @default
 *
 * @param Stat 88 Name
 * @text 能力値88名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 88 Eval
 * @text 能力値88式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 88 Format
 * @text 能力値88文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 89 ==
 * @text -- 能力値89 --
 * @default
 *
 * @param Stat 89 Name
 * @text 能力値89名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 89 Eval
 * @text 能力値89式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 89 Format
 * @text 能力値89文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 90 ==
 * @text -- 能力値90 --
 * @default
 *
 * @param Stat 90 Name
 * @text 能力値90名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 90 Eval
 * @text 能力値90式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 90 Format
 * @text 能力値90文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 91 ==
 * @text -- 能力値91 --
 * @default
 *
 * @param Stat 91 Name
 * @text 能力値91名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 91 Eval
 * @text 能力値91式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 91 Format
 * @text 能力値91文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 92 ==
 * @text -- 能力値92 --
 * @default
 *
 * @param Stat 92 Name
 * @text 能力値92名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 92 Eval
 * @text 能力値92式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 92 Format
 * @text 能力値92文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 93 ==
 * @text -- 能力値93 --
 * @default
 *
 * @param Stat 93 Name
 * @text 能力値93名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 93 Eval
 * @text 能力値93式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 93 Format
 * @text 能力値93文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 94 ==
 * @text -- 能力値94 --
 * @default
 *
 * @param Stat 94 Name
 * @text 能力値94名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 94 Eval
 * @text 能力値94式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 94 Format
 * @text 能力値94文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 95 ==
 * @text -- 能力値95 --
 * @default
 *
 * @param Stat 95 Name
 * @text 能力値95名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 95 Eval
 * @text 能力値95式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 95 Format
 * @text 能力値95文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 96 ==
 * @text -- 能力値96 --
 * @default
 *
 * @param Stat 96 Name
 * @text 能力値96名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 96 Eval
 * @text 能力値96式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 96 Format
 * @text 能力値96文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 97 ==
 * @text -- 能力値97 --
 * @default
 *
 * @param Stat 97 Name
 * @text 能力値97名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 97 Eval
 * @text 能力値97式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 97 Format
 * @text 能力値97文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 98 ==
 * @text -- 能力値98 --
 * @default
 *
 * @param Stat 98 Name
 * @text 能力値98名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 98 Eval
 * @text 能力値98式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 98 Format
 * @text 能力値98文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 99 ==
 * @text -- 能力値99 --
 * @default
 *
 * @param Stat 99 Name
 * @text 能力値99名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 99 Eval
 * @text 能力値99式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 99 Format
 * @text 能力値99文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @param == Stat 100 ==
 * @text -- 能力値100 --
 * @default
 *
 * @param Stat 100 Name
 * @text 能力値100名前
 * @desc ウィンドウに表示される能力値名
 * @default
 *
 * @param Stat 100 Eval
 * @text 能力値100式
 * @desc 能力値の式。結果が数値の必要があります。
 * アクターを参照するには'actor'を使用します。
 * @default
 *
 * @param Stat 100 Format
 * @text 能力値100文字列形式
 * @desc 値の文字列形式
 * 値を表すには'val'を使用します。
 * @default val
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/equip-comparison-upgrade/
 *
 *
 * Equip Compare Upgrade
 * Version 1.01
 * SumRndmDde
 *
 *
 * 装備画面に表示される全能力値情報をカスタマイズできます。
 * 比較ウィンドウには変更中の能力値情報のみを表示するように設定されています。
 *
 *
 * ==========================================================================
 *  能力値情報の設定方法
 * ==========================================================================
 *
 * 比較ウィンドウで利用できるように能力値を設定するには、次の3つが必要です。
 *
 *  - 名前
 *  - 能力値を決定する式
 *  - 次のように表示される文字列形式
 *
 *
 * 名前を設定するには、'Stat X Name'パラメータに入力します。
 * 'Stat X Eval'パラメータに入力すると、
 * アクターから能力値を引き出す式を設定できます。
 * 文字列形式を設定し、他にどのような文字が表示されるかを決定するためには、
 * 'Stat X Format'パラメータを使用します。
 *
 *
 * ほとんどの場合、
 * プラグインのデフォルト設定のパラメータで、システムを把握することができます。
 *
 *
 * ==========================================================================
 *  色の設定書式
 * ==========================================================================
 *
 * 'Stat X Format'パラメータで、
 * メモタグを使用して比較に使用する色をカスタマイズできます。
 *
 *   <Pos Color: [color]>
 *   <Neg Color: [color]>
 *
 * 能力値が増加時の'Pos Color'かプラス色を入力します。
 * 能力値が減少時の'Neg Color'かマイナス色を入力します。
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
 */

var SRD = SRD || {};
SRD.EquipCompareUpgrade = SRD.EquipCompareUpgrade || {};

var Imported = Imported || {};
Imported["SumRndmDde Equipment Comparison Upgrade"] = 1.01;

(function (_) {

	"use strict";

	//-----------------------------------------------------------------------------
	// SRD.EquipCompareUpgrade
	//-----------------------------------------------------------------------------

	const params = PluginManager.parameters('SRD_EquipCompareUpgrade');

	_.defaultPos = String(params['Default Pos Color']);
	_.defaultNeg = String(params['Default Neg Color']);
	_.windowWidth = parseInt(params['Window Width']);
	_.fontSize = parseInt(params['Font Size']);
	_.fontPad = parseInt(params['Line Padding']);

	_.names = [];
	_.evals = [];
	_.tags = [];
	_.forms = [];
	for (let i = 1; i <= 100; i++) {
		const name = String(params['Stat ' + i + ' Name']);
		const evil = String(params['Stat ' + i + ' Eval']);
		const form = String(params['Stat ' + i + ' Format']);
		if (name.length > 0 && evil.length > 0 && form.length > 0) {
			_.names[i] = name;
			_.evals[i] = evil;
			_.tags[i] = form;
			_.forms[i] = form;
			_.forms[i] = _.forms[i].replace(/\s*<Pos\s*Color\s*:\s*[^>]*\s*>\s*/, '');
			_.forms[i] = _.forms[i].replace(/\s*<Neg\s*Color\s*:\s*[^>]*\s*>\s*/, '');
		}
	}

	//-----------------------------------------------------------------------------
	// Window_EquipStatus
	//-----------------------------------------------------------------------------

	Window_EquipStatus.prototype.windowWidth = function () {
		return _.windowWidth;
	};

	Window_EquipStatus.prototype.drawParamName = function (x, y, paramId) {
		this.changeTextColor(this.systemColor());
		this.drawText(_.names[paramId], x, y, this.width - (312 - 120));
	};

	Window_EquipStatus.prototype.drawCurrentParam = function (x, y, paramId) {
		this.resetTextColor();
		const actor = this._actor;
		const param = eval(_.evals[paramId]);
		const result = _.forms[paramId].replace(/val/, param);
		this.drawText(result, x, y, 48, 'right');
	};

	Window_EquipStatus.prototype.drawNewParam = function (x, y, paramId) {
		let actor = this._tempActor;
		const newValue = eval(_.evals[paramId]);
		actor = this._actor;
		const diffvalue = newValue - eval(_.evals[paramId]);
		const result = _.forms[paramId].replace(/val/, newValue);
		this.changeTextColor(this.paramchangeTextColor(diffvalue, paramId));
		this.drawText(result, x, y, 48, 'right');
	};

	Window_EquipStatus.prototype.drawHorzLine = function (y) {
		const lineY = y + this.lineHeight() / 2 - 1;
		this.contents.paintOpacity = 48;
		this.contents.fillRect(0, lineY, this.contentsWidth(), 2, "#FFFFFF");
		this.contents.paintOpacity = 255;
	};

	Window_EquipStatus.prototype.paramchangeTextColor = function (change, paramId) {
		if (change > 0) {
			return this.powerUpColor(paramId);
		} else if (change < 0) {
			return this.powerDownColor(paramId);
		} else {
			return this.normalColor();
		}
	};

	const _Window_EquipStatus_powerUpColor = Window_EquipStatus.prototype.powerUpColor;
	Window_EquipStatus.prototype.powerUpColor = function (paramId) {
		if (_.tags[paramId] && _.tags[paramId].match(/\s*<Pos\s*Color\s*:\s*([^>]*)\s*>\s*/)) {
			return String(RegExp.$1);
		}
		return _.defaultPos;
	};

	const _Window_EquipStatus_powerDownColor = Window_EquipStatus.prototype.powerDownColor;
	Window_EquipStatus.prototype.powerDownColor = function (paramId) {
		if (_.tags[paramId] && _.tags[paramId].match(/\s*<Neg\s*Color\s*:\s*([^>]*)\s*>\s*/)) {
			return String(RegExp.$1);
		}
		return _.defaultNeg;
	};

	Window_EquipStatus.prototype.refresh = function () {
		if (this._actor) {
			this.contents.clear();
			this.drawActorName(this._actor, this.textPadding(), 0);
			this.drawHorzLine(_.fontSize);
			if (this._tempActor) {
				const y = _.fontSize + (_.fontPad * 3);
				let place = 0;
				for (var i = 1; i < _.names.length; i++) {
					if (_.names[i]) {
						let actor = this._tempActor;
						const newValue = eval(_.evals[i]);
						actor = this._actor;
						const diffvalue = newValue - eval(_.evals[i]);
						if (diffvalue !== 0) {
							this.drawItem(0, y + (_.fontSize + _.fontPad) * (place), i);
							place++;
						}
					}
				}
			}
		}
	};

	Window_EquipStatus.prototype.drawItem = function (x, y, paramId) {
		this.drawParamName(x + this.textPadding(), y, paramId);
		if (this._actor) {
			this.drawCurrentParam(x + this.width - (312 - 140), y, paramId);
		}
		this.drawRightArrow(x + this.width - (312 - 188), y);
		if (this._tempActor) {
			this.drawNewParam(x + this.width - (312 - 222), y, paramId);
		}
	};

	Window_EquipStatus.prototype.standardFontSize = function () {
		return _.fontSize;
	};

	//-----------------------------------------------------------------------------
	// Window_StatCompare
	//-----------------------------------------------------------------------------

	if (Imported.YEP_EquipCore) {

		Window_StatCompare.prototype.refresh = function () {
			this.contents.clear();
			if (this._actor && this._tempActor) {
				let place = 0;
				for (var i = 1; i < _.names.length; i++) {
					if (_.names[i]) {
						let actor = this._tempActor;
						const newValue = eval(_.evals[i]);
						actor = this._actor;
						const diffvalue = newValue - eval(_.evals[i]);
						if (diffvalue !== 0) {
							this.drawItem(0, place * this.lineHeight(), i);
							place++;
						}
					}
				}
			}
		};

		Window_StatCompare.prototype.drawParamName = function (y, paramId) {
			const x = this.textPadding();
			this.changeTextColor(this.systemColor());
			this.drawText(_.names[paramId], x, y, this._paramNameWidth);
		};

		Window_StatCompare.prototype.drawCurrentParam = function (y, paramId) {
			let x = this.contents.width - this.textPadding();
			x -= this._paramValueWidth * 2 + this._arrowWidth + this._bonusValueWidth;
			Window_EquipStatus.prototype.drawCurrentParam.call(this, x, y, paramId);
		};

		Window_StatCompare.prototype.drawNewParam = function (y, paramId) {
			let x = this.contents.width - this.textPadding();
			x -= this._paramValueWidth + this._bonusValueWidth;
			Window_EquipStatus.prototype.drawNewParam.call(this, x, y, paramId);
		};

		Window_StatCompare.prototype.drawParamDifference = function (y, paramId) {
			var x = this.contents.width - this.textPadding();
			x -= this._bonusValueWidth;
			//New Code
			let actor = this._tempActor;
			const newValue = eval(_.evals[paramId]);
			actor = this._actor;
			const diffvalue = newValue - eval(_.evals[paramId]);
			//End of New Code
			if (diffvalue === 0) return;
			var actorparam = Yanfly.Util.toGroup(newValue);
			this.changeTextColor(this.paramchangeTextColor(diffvalue, paramId));
			var text = Yanfly.Util.toGroup(diffvalue);
			if (diffvalue > 0) {
				text = ' (+' + text + ')';
			} else {
				text = ' (' + text + ')';
			}
			this.drawText(text, x, y, this._bonusValueWidth, 'left');
		};

		Window_StatCompare.prototype.paramchangeTextColor = function (change, paramId) {
			if (change > 0) {
				return this.powerUpColor(paramId);
			} else if (change < 0) {
				return this.powerDownColor(paramId);
			} else {
				return this.normalColor();
			}
		};

		const _Window_StatCompare_powerUpColor = Window_StatCompare.prototype.powerUpColor;
		Window_StatCompare.prototype.powerUpColor = function (paramId) {
			if (_.tags[paramId] && _.tags[paramId].match(/\s*<Pos\s*Color\s*:\s*([^>]*)\s*>\s*/)) {
				return String(RegExp.$1);
			}
			return _.defaultPos;
		};

		const _Window_StatCompare_powerDownColor = Window_StatCompare.prototype.powerDownColor;
		Window_StatCompare.prototype.powerDownColor = function (paramId) {
			if (_.tags[paramId] && _.tags[paramId].match(/\s*<Neg\s*Color\s*:\s*([^>]*)\s*>\s*/)) {
				return String(RegExp.$1);
			}
			return _.defaultNeg;
		};

	}

})(SRD.EquipCompareUpgrade);