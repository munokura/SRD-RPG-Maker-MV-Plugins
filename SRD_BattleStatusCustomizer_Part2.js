/*:
 * @plugindesc (PART 2) The second part of the Battle Status Customizer. This allows you to manipulate gauges.
 * @author SumRndmDde
 *
 * @param == Global Settings ==
 * @default
 *
 * @param Gauge X Offset
 * @desc An X offset used by all gauges.
 * @default 0
 *
 * @param Gauge Y Offset
 * @desc A Y offset used by all gauges.
 * @default -10
 *
 * @param Text X Pos
 * @desc The X position of the gauge's text.
 * Use "x" to represent the gauge's X position. 
 * @default x + 4
 *
 * @param Text Y Pos
 * @desc The Y position of the gauge's text.
 * Use "y" to represent the gauge's Y position. 
 * @default y + 5
 *
 * @param Gauge Font
 * @desc The font used by the gauges.
 * @default Gamefont
 *
 * @param Gauge Font Size
 * @desc The font size used by the text.
 * Can be a number or JavaScript code.
 * @default height - 4
 *
 * @param Gauge Italic
 * @desc Whether or not italics are used on the gauge text.
 * @default false
 *
 * @param Gauge Text Color
 * @desc The text color used by the gauge.
 * @default #ffffff
 *
 * @param Gauge Outline Color
 * @desc The outline color used by the gauge.
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param Gauge Outline Width
 * @desc The size of the outline used by the gauge's text.
 * @default 4
 *
 *
 * @param == Gauge 1 ==
 * @default
 *
 * @param Gauge 1 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default TextManager.hpA
 *
 * @param Gauge 1 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default actor.hp
 *
 * @param Gauge 1 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default actor.mhp
 *
 * @param Gauge 1 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default 2 | boxHeight - 56
 *
 * @param Gauge 1 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default boxWidth - 4 | 22
 *
 * @param Gauge 1 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default this.hpGaugeColor1() | this.hpGaugeColor2()
 *
 * @param Gauge 1 Back Color
 * @desc The color used for the background of the gauge.
 * @default "#202040"
 *
 * @param Gauge 1 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default true
 *
 * @param == Gauge 2 ==
 * @default
 *
 * @param Gauge 2 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default TextManager.mpA
 *
 * @param Gauge 2 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default actor.mp
 *
 * @param Gauge 2 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default actor.mmp
 *
 * @param Gauge 2 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default 2 | boxHeight - 32
 *
 * @param Gauge 2 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default boxWidth / 2 | 22
 *
 * @param Gauge 2 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default this.mpGaugeColor1() | this.mpGaugeColor2()
 *
 * @param Gauge 2 Back Color
 * @desc The color used for the background of the gauge.
 * @default "#202040"
 *
 * @param Gauge 2 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default true
 *
 * @param == Gauge 3 ==
 * @default
 *
 * @param Gauge 3 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default TextManager.tpA
 *
 * @param Gauge 3 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default actor.tp
 *
 * @param Gauge 3 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default actor.maxTp()
 *
 * @param Gauge 3 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default (boxWidth / 2) + 4 | boxHeight - 32
 *
 * @param Gauge 3 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default (boxWidth / 2) - 6 | 22
 *
 * @param Gauge 3 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default this.tpGaugeColor1() | this.tpGaugeColor2()
 *
 * @param Gauge 3 Back Color
 * @desc The color used for the background of the gauge.
 * @default "#202040"
 *
 * @param Gauge 3 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default true
  *
 * @param == Gauge 4 ==
 * @default
 *
 * @param Gauge 4 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default TextManager.mpA
 *
 * @param Gauge 4 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default actor.mp
 *
 * @param Gauge 4 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default actor.mmp
 *
 * @param Gauge 4 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default 2 | boxHeight - 32
 *
 * @param Gauge 4 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default boxWidth - 4 | 22
 *
 * @param Gauge 4 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default this.mpGaugeColor1() | this.mpGaugeColor2()
 *
 * @param Gauge 4 Back Color
 * @desc The color used for the background of the gauge.
 * @default "#202040"
 *
 * @param Gauge 4 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default true
 *
 * @param == Gauge 5 ==
 * @default
 *
 * @param Gauge 5 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 5 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 5 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 5 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 5 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 5 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 5 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 5 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 6 ==
 * @default
 *
 * @param Gauge 6 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 6 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 6 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 6 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 6 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 6 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 6 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 6 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 7 ==
 * @default
 *
 * @param Gauge 7 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 7 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 7 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 7 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 7 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 7 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 7 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 7 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 8 ==
 * @default
 *
 * @param Gauge 8 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 8 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 8 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 8 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 8 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 8 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 8 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 8 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 9 ==
 * @default
 *
 * @param Gauge 9 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 9 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 9 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 9 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 9 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 9 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 9 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 9 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 10 ==
 * @default
 *
 * @param Gauge 10 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 10 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 10 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 10 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 10 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 10 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 10 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 10 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 11 ==
 * @default
 *
 * @param Gauge 11 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 11 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 11 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 11 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 11 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 11 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 11 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 11 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 12 ==
 * @default
 *
 * @param Gauge 12 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 12 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 12 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 12 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 12 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 12 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 12 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 12 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 13 ==
 * @default
 *
 * @param Gauge 13 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 13 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 13 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 13 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 13 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 13 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 13 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 13 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 14 ==
 * @default
 *
 * @param Gauge 14 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 14 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 14 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 14 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 14 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 14 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 14 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 14 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 15 ==
 * @default
 *
 * @param Gauge 15 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 15 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 15 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 15 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 15 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 15 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 15 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 15 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 16 ==
 * @default
 *
 * @param Gauge 16 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 16 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 16 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 16 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 16 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 16 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 16 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 16 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 17 ==
 * @default
 *
 * @param Gauge 17 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 17 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 17 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 17 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 17 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 17 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 17 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 17 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 18 ==
 * @default
 *
 * @param Gauge 18 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 18 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 18 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 18 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 18 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 18 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 18 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 18 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 19 ==
 * @default
 *
 * @param Gauge 19 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 19 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 19 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 19 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 19 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 19 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 19 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 19 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 20 ==
 * @default
 *
 * @param Gauge 20 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 20 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 20 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 20 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 20 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 20 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 20 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 20 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 21 ==
 * @default
 *
 * @param Gauge 21 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 21 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 21 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 21 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 21 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 21 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 21 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 21 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 22 ==
 * @default
 *
 * @param Gauge 22 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 22 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 22 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 22 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 22 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 22 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 22 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 22 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 23 ==
 * @default
 *
 * @param Gauge 23 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 23 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 23 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 23 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 23 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 23 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 23 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 23 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 24 ==
 * @default
 *
 * @param Gauge 24 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 24 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 24 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 24 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 24 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 24 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 24 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 24 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 25 ==
 * @default
 *
 * @param Gauge 25 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 25 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 25 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 25 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 25 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 25 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 25 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 25 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 26 ==
 * @default
 *
 * @param Gauge 26 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 26 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 26 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 26 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 26 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 26 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 26 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 26 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 27 ==
 * @default
 *
 * @param Gauge 27 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 27 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 27 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 27 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 27 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 27 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 27 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 27 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 28 ==
 * @default
 *
 * @param Gauge 28 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 28 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 28 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 28 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 28 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 28 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 28 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 28 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 29 ==
 * @default
 *
 * @param Gauge 29 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 29 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 29 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 29 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 29 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 29 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 29 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 29 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 30 ==
 * @default
 *
 * @param Gauge 30 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 30 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 30 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 30 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 30 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 30 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 30 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 30 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 31 ==
 * @default
 *
 * @param Gauge 31 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 31 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 31 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 31 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 31 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 31 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 31 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 31 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 32 ==
 * @default
 *
 * @param Gauge 32 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 32 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 32 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 32 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 32 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 32 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 32 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 32 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 33 ==
 * @default
 *
 * @param Gauge 33 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 33 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 33 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 33 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 33 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 33 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 33 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 33 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 34 ==
 * @default
 *
 * @param Gauge 34 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 34 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 34 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 34 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 34 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 34 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 34 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 34 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 35 ==
 * @default
 *
 * @param Gauge 35 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 35 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 35 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 35 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 35 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 35 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 35 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 35 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 36 ==
 * @default
 *
 * @param Gauge 36 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 36 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 36 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 36 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 36 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 36 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 36 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 36 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 37 ==
 * @default
 *
 * @param Gauge 37 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 37 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 37 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 37 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 37 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 37 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 37 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 37 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 38 ==
 * @default
 *
 * @param Gauge 38 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 38 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 38 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 38 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 38 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 38 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 38 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 38 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 39 ==
 * @default
 *
 * @param Gauge 39 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 39 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 39 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 39 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 39 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 39 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 39 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 39 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 40 ==
 * @default
 *
 * @param Gauge 40 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 40 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 40 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 40 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 40 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 40 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 40 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 40 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 41 ==
 * @default
 *
 * @param Gauge 41 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 41 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 41 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 41 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 41 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 41 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 41 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 41 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 42 ==
 * @default
 *
 * @param Gauge 42 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 42 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 42 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 42 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 42 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 42 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 42 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 42 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 43 ==
 * @default
 *
 * @param Gauge 43 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 43 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 43 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 43 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 43 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 43 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 43 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 43 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 44 ==
 * @default
 *
 * @param Gauge 44 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 44 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 44 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 44 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 44 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 44 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 44 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 44 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 45 ==
 * @default
 *
 * @param Gauge 45 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 45 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 45 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 45 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 45 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 45 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 45 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 45 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 46 ==
 * @default
 *
 * @param Gauge 46 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 46 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 46 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 46 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 46 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 46 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 46 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 46 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 47 ==
 * @default
 *
 * @param Gauge 47 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 47 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 47 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 47 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 47 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 47 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 47 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 47 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 48 ==
 * @default
 *
 * @param Gauge 48 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 48 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 48 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 48 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 48 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 48 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 48 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 48 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 49 ==
 * @default
 *
 * @param Gauge 49 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 49 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 49 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 49 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 49 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 49 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 49 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 49 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 50 ==
 * @default
 *
 * @param Gauge 50 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 50 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 50 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 50 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 50 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 50 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 50 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 50 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @help
 *
 * Battle Status Customizer (Part 2)
 * Version 1.00
 * SumRndmDde
 *
 *
 * Read the Help Section of Part 1 for the information.
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
 * @plugindesc (PART 2) バトルステータスのゲージをカスタマイズできます。
 * @author SumRndmDde
 *
 * @param == Global Settings ==
 * @text -- 全体設定 --
 * @default
 *
 * @param Gauge X Offset
 * @text ゲージXオフセット
 * @desc 全ゲージで使用されるXオフセット
 * @default 0
 *
 * @param Gauge Y Offset
 * @text ゲージYオフセット
 * @desc 全ゲージで使用されるYオフセット
 * @default -10
 *
 * @param Text X Pos
 * @text テキストX位置
 * @desc ゲージのテキストのX位置
 * ゲージのX位置は'x'を使用
 * @default x + 4
 *
 * @param Text Y Pos
 * @text テキストY位置
 * @desc ゲージのテキストのY位置
 * ゲージのY位置は'y'を使用
 * @default y + 5
 *
 * @param Gauge Font
 * @text ゲージフォント
 * @desc ゲージで使用されるフォント
 * @default Gamefont
 *
 * @param Gauge Font Size
 * @text ゲージフォントサイズ
 * @desc テキストで使用されるフォントサイズ
 * 数値・JavaScriptが使えます
 * @default height - 4
 *
 * @param Gauge Italic
 * @text ゲージイタリック
 * @desc ゲージのテキストにイタリック体を使用するかどうか
 * @default false
 *
 * @param Gauge Text Color
 * @text ゲージテキスト色
 * @desc ゲージで使用するテキストの色
 * @default #ffffff
 *
 * @param Gauge Outline Color
 * @text ゲージアウトライン色
 * @desc ゲージで使用するアウトラインの色
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param Gauge Outline Width
 * @text ゲージアウトライン幅
 * @desc ゲージのテキストで使用されているアウトラインのサイズ
 * @default 4
 *
 *
 * @param == Gauge 1 ==
 * @default
 *
 * @param Gauge 1 Text
 * @text ゲージ1テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default TextManager.hpA
 *
 * @param Gauge 1 Current
 * @text ゲージ1現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default actor.hp
 *
 * @param Gauge 1 Max
 * @text ゲージ1最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default actor.mhp
 *
 * @param Gauge 1 Position
 * @text ゲージ1位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default 2 | boxHeight - 56
 *
 * @param Gauge 1 Size
 * @text ゲージ1サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default boxWidth - 4 | 22
 *
 * @param Gauge 1 Colors
 * @text ゲージ1色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default this.hpGaugeColor1() | this.hpGaugeColor2()
 *
 * @param Gauge 1 Back Color
 * @text ゲージ1背景色
 * @desc ゲージの背景に使われる色
 * @default "#202040"
 *
 * @param Gauge 1 Draw C/M
 * @text ゲージ1現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default true
 *
 * @param == Gauge 2 ==
 * @default
 *
 * @param Gauge 2 Text
 * @text ゲージ2テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default TextManager.mpA
 *
 * @param Gauge 2 Current
 * @text ゲージ2現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default actor.mp
 *
 * @param Gauge 2 Max
 * @text ゲージ2最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default actor.mmp
 *
 * @param Gauge 2 Position
 * @text ゲージ2位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default 2 | boxHeight - 32
 *
 * @param Gauge 2 Size
 * @text ゲージ2サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default boxWidth / 2 | 22
 *
 * @param Gauge 2 Colors
 * @text ゲージ2色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default this.mpGaugeColor1() | this.mpGaugeColor2()
 *
 * @param Gauge 2 Back Color
 * @text ゲージ2背景色
 * @desc ゲージの背景に使われる色
 * @default "#202040"
 *
 * @param Gauge 2 Draw C/M
 * @text ゲージ2現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default true
 *
 * @param == Gauge 3 ==
 * @default
 *
 * @param Gauge 3 Text
 * @text ゲージ3テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default TextManager.tpA
 *
 * @param Gauge 3 Current
 * @text ゲージ3現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default actor.tp
 *
 * @param Gauge 3 Max
 * @text ゲージ3最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default actor.maxTp()
 *
 * @param Gauge 3 Position
 * @text ゲージ3位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default (boxWidth / 2) + 4 | boxHeight - 32
 *
 * @param Gauge 3 Size
 * @text ゲージ3サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default (boxWidth / 2) - 6 | 22
 *
 * @param Gauge 3 Colors
 * @text ゲージ3色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default this.tpGaugeColor1() | this.tpGaugeColor2()
 *
 * @param Gauge 3 Back Color
 * @text ゲージ3背景色
 * @desc ゲージの背景に使われる色
 * @default "#202040"
 *
 * @param Gauge 3 Draw C/M
 * @text ゲージ3現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default true
 *
 * @param == Gauge 4 ==
 * @default
 *
 * @param Gauge 4 Text
 * @text ゲージ4テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default TextManager.mpA
 *
 * @param Gauge 4 Current
 * @text ゲージ4現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default actor.mp
 *
 * @param Gauge 4 Max
 * @text ゲージ4最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default actor.mmp
 *
 * @param Gauge 4 Position
 * @text ゲージ4位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default 2 | boxHeight - 32
 *
 * @param Gauge 4 Size
 * @text ゲージ4サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default boxWidth - 4 | 22
 *
 * @param Gauge 4 Colors
 * @text ゲージ4色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default this.mpGaugeColor1() | this.mpGaugeColor2()
 *
 * @param Gauge 4 Back Color
 * @text ゲージ4背景色
 * @desc ゲージの背景に使われる色
 * @default "#202040"
 *
 * @param Gauge 4 Draw C/M
 * @text ゲージ4現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default true
 *
 * @param == Gauge 5 ==
 * @default
 *
 * @param Gauge 5 Text
 * @text ゲージ5テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 5 Current
 * @text ゲージ5現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 5 Max
 * @text ゲージ5最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 5 Position
 * @text ゲージ5位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 5 Size
 * @text ゲージ5サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 5 Colors
 * @text ゲージ5色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 5 Back Color
 * @text ゲージ5背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 5 Draw C/M
 * @text ゲージ5現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 6 ==
 * @default
 *
 * @param Gauge 6 Text
 * @text ゲージ6テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 6 Current
 * @text ゲージ6現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 6 Max
 * @text ゲージ6最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 6 Position
 * @text ゲージ6位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 6 Size
 * @text ゲージ6サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 6 Colors
 * @text ゲージ6色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 6 Back Color
 * @text ゲージ6背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 6 Draw C/M
 * @text ゲージ6現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 7 ==
 * @default
 *
 * @param Gauge 7 Text
 * @text ゲージ7テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 7 Current
 * @text ゲージ7現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 7 Max
 * @text ゲージ7最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 7 Position
 * @text ゲージ7位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 7 Size
 * @text ゲージ7サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 7 Colors
 * @text ゲージ7色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 7 Back Color
 * @text ゲージ7背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 7 Draw C/M
 * @text ゲージ7現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 8 ==
 * @default
 *
 * @param Gauge 8 Text
 * @text ゲージ8テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 8 Current
 * @text ゲージ8現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 8 Max
 * @text ゲージ8最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 8 Position
 * @text ゲージ8位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 8 Size
 * @text ゲージ8サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 8 Colors
 * @text ゲージ8色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 8 Back Color
 * @text ゲージ8背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 8 Draw C/M
 * @text ゲージ8現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 9 ==
 * @default
 *
 * @param Gauge 9 Text
 * @text ゲージ9テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 9 Current
 * @text ゲージ9現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 9 Max
 * @text ゲージ9最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 9 Position
 * @text ゲージ9位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 9 Size
 * @text ゲージ9サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 9 Colors
 * @text ゲージ9色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 9 Back Color
 * @text ゲージ9背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 9 Draw C/M
 * @text ゲージ9現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 10 ==
 * @default
 *
 * @param Gauge 10 Text
 * @text ゲージ10テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 10 Current
 * @text ゲージ10現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 10 Max
 * @text ゲージ10最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 10 Position
 * @text ゲージ10位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 10 Size
 * @text ゲージ10サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 10 Colors
 * @text ゲージ10色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 10 Back Color
 * @text ゲージ10背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 10 Draw C/M
 * @text ゲージ10現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 11 ==
 * @default
 *
 * @param Gauge 11 Text
 * @text ゲージ11テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 11 Current
 * @text ゲージ11現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 11 Max
 * @text ゲージ11最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 11 Position
 * @text ゲージ11位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 11 Size
 * @text ゲージ11サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 11 Colors
 * @text ゲージ11色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 11 Back Color
 * @text ゲージ11背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 11 Draw C/M
 * @text ゲージ11現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 12 ==
 * @default
 *
 * @param Gauge 12 Text
 * @text ゲージ12テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 12 Current
 * @text ゲージ12現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 12 Max
 * @text ゲージ12最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 12 Position
 * @text ゲージ12位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 12 Size
 * @text ゲージ12サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 12 Colors
 * @text ゲージ12色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 12 Back Color
 * @text ゲージ12背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 12 Draw C/M
 * @text ゲージ12現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 13 ==
 * @default
 *
 * @param Gauge 13 Text
 * @text ゲージ13テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 13 Current
 * @text ゲージ13現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 13 Max
 * @text ゲージ13最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 13 Position
 * @text ゲージ13位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 13 Size
 * @text ゲージ13サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 13 Colors
 * @text ゲージ13色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 13 Back Color
 * @text ゲージ13背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 13 Draw C/M
 * @text ゲージ13現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 14 ==
 * @default
 *
 * @param Gauge 14 Text
 * @text ゲージ14テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 14 Current
 * @text ゲージ14現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 14 Max
 * @text ゲージ14最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 14 Position
 * @text ゲージ14位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 14 Size
 * @text ゲージ14サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 14 Colors
 * @text ゲージ14色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 14 Back Color
 * @text ゲージ14背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 14 Draw C/M
 * @text ゲージ14現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 15 ==
 * @default
 *
 * @param Gauge 15 Text
 * @text ゲージ15テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 15 Current
 * @text ゲージ15現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 15 Max
 * @text ゲージ15最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 15 Position
 * @text ゲージ15位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 15 Size
 * @text ゲージ15サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 15 Colors
 * @text ゲージ15色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 15 Back Color
 * @text ゲージ15背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 15 Draw C/M
 * @text ゲージ15現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 16 ==
 * @default
 *
 * @param Gauge 16 Text
 * @text ゲージ16テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 16 Current
 * @text ゲージ16現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 16 Max
 * @text ゲージ16最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 16 Position
 * @text ゲージ16位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 16 Size
 * @text ゲージ16サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 16 Colors
 * @text ゲージ16色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 16 Back Color
 * @text ゲージ16背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 16 Draw C/M
 * @text ゲージ16現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 17 ==
 * @default
 *
 * @param Gauge 17 Text
 * @text ゲージ17テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 17 Current
 * @text ゲージ17現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 17 Max
 * @text ゲージ17最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 17 Position
 * @text ゲージ17位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 17 Size
 * @text ゲージ17サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 17 Colors
 * @text ゲージ17色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 17 Back Color
 * @text ゲージ17背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 17 Draw C/M
 * @text ゲージ17現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 18 ==
 * @default
 *
 * @param Gauge 18 Text
 * @text ゲージ18テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 18 Current
 * @text ゲージ18現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 18 Max
 * @text ゲージ18最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 18 Position
 * @text ゲージ18位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 18 Size
 * @text ゲージ18サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 18 Colors
 * @text ゲージ18色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 18 Back Color
 * @text ゲージ18背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 18 Draw C/M
 * @text ゲージ18現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 19 ==
 * @default
 *
 * @param Gauge 19 Text
 * @text ゲージ19テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 19 Current
 * @text ゲージ19現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 19 Max
 * @text ゲージ19最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 19 Position
 * @text ゲージ19位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 19 Size
 * @text ゲージ19サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 19 Colors
 * @text ゲージ19色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 19 Back Color
 * @text ゲージ19背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 19 Draw C/M
 * @text ゲージ19現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 20 ==
 * @default
 *
 * @param Gauge 20 Text
 * @text ゲージ20テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 20 Current
 * @text ゲージ20現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 20 Max
 * @text ゲージ20最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 20 Position
 * @text ゲージ20位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 20 Size
 * @text ゲージ20サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 20 Colors
 * @text ゲージ20色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 20 Back Color
 * @text ゲージ20背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 20 Draw C/M
 * @text ゲージ20現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 21 ==
 * @default
 *
 * @param Gauge 21 Text
 * @text ゲージ21テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 21 Current
 * @text ゲージ21現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 21 Max
 * @text ゲージ21最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 21 Position
 * @text ゲージ21位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 21 Size
 * @text ゲージ21サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 21 Colors
 * @text ゲージ21色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 21 Back Color
 * @text ゲージ21背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 21 Draw C/M
 * @text ゲージ21現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 22 ==
 * @default
 *
 * @param Gauge 22 Text
 * @text ゲージ22テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 22 Current
 * @text ゲージ22現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 22 Max
 * @text ゲージ22最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 22 Position
 * @text ゲージ22位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 22 Size
 * @text ゲージ22サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 22 Colors
 * @text ゲージ22色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 22 Back Color
 * @text ゲージ22背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 22 Draw C/M
 * @text ゲージ22現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 23 ==
 * @default
 *
 * @param Gauge 23 Text
 * @text ゲージ23テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 23 Current
 * @text ゲージ23現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 23 Max
 * @text ゲージ23最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 23 Position
 * @text ゲージ23位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 23 Size
 * @text ゲージ23サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 23 Colors
 * @text ゲージ23色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 23 Back Color
 * @text ゲージ23背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 23 Draw C/M
 * @text ゲージ23現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 24 ==
 * @default
 *
 * @param Gauge 24 Text
 * @text ゲージ24テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 24 Current
 * @text ゲージ24現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 24 Max
 * @text ゲージ24最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 24 Position
 * @text ゲージ24位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 24 Size
 * @text ゲージ24サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 24 Colors
 * @text ゲージ24色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 24 Back Color
 * @text ゲージ24背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 24 Draw C/M
 * @text ゲージ24現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 25 ==
 * @default
 *
 * @param Gauge 25 Text
 * @text ゲージ25テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 25 Current
 * @text ゲージ25現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 25 Max
 * @text ゲージ25最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 25 Position
 * @text ゲージ25位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 25 Size
 * @text ゲージ25サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 25 Colors
 * @text ゲージ25色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 25 Back Color
 * @text ゲージ25背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 25 Draw C/M
 * @text ゲージ25現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 26 ==
 * @default
 *
 * @param Gauge 26 Text
 * @text ゲージ26テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 26 Current
 * @text ゲージ26現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 26 Max
 * @text ゲージ26最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 26 Position
 * @text ゲージ26位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 26 Size
 * @text ゲージ26サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 26 Colors
 * @text ゲージ26色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 26 Back Color
 * @text ゲージ26背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 26 Draw C/M
 * @text ゲージ26現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 27 ==
 * @default
 *
 * @param Gauge 27 Text
 * @text ゲージ27テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 27 Current
 * @text ゲージ27現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 27 Max
 * @text ゲージ27最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 27 Position
 * @text ゲージ27位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 27 Size
 * @text ゲージ27サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 27 Colors
 * @text ゲージ27色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 27 Back Color
 * @text ゲージ27背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 27 Draw C/M
 * @text ゲージ27現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 28 ==
 * @default
 *
 * @param Gauge 28 Text
 * @text ゲージ28テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 28 Current
 * @text ゲージ28現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 28 Max
 * @text ゲージ28最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 28 Position
 * @text ゲージ28位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 28 Size
 * @text ゲージ28サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 28 Colors
 * @text ゲージ28色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 28 Back Color
 * @text ゲージ28背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 28 Draw C/M
 * @text ゲージ28現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 29 ==
 * @default
 *
 * @param Gauge 29 Text
 * @text ゲージ29テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 29 Current
 * @text ゲージ29現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 29 Max
 * @text ゲージ29最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 29 Position
 * @text ゲージ29位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 29 Size
 * @text ゲージ29サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 29 Colors
 * @text ゲージ29色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 29 Back Color
 * @text ゲージ29背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 29 Draw C/M
 * @text ゲージ29現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 30 ==
 * @default
 *
 * @param Gauge 30 Text
 * @text ゲージ30テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 30 Current
 * @text ゲージ30現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 30 Max
 * @text ゲージ30最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 30 Position
 * @text ゲージ30位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 30 Size
 * @text ゲージ30サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 30 Colors
 * @text ゲージ30色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 30 Back Color
 * @text ゲージ30背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 30 Draw C/M
 * @text ゲージ30現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 31 ==
 * @default
 *
 * @param Gauge 31 Text
 * @text ゲージ31テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 31 Current
 * @text ゲージ31現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 31 Max
 * @text ゲージ31最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 31 Position
 * @text ゲージ31位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 31 Size
 * @text ゲージ31サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 31 Colors
 * @text ゲージ31色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 31 Back Color
 * @text ゲージ31背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 31 Draw C/M
 * @text ゲージ31現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 32 ==
 * @default
 *
 * @param Gauge 32 Text
 * @text ゲージ32テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 32 Current
 * @text ゲージ32現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 32 Max
 * @text ゲージ32最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 32 Position
 * @text ゲージ32位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 32 Size
 * @text ゲージ32サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 32 Colors
 * @text ゲージ32色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 32 Back Color
 * @text ゲージ32背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 32 Draw C/M
 * @text ゲージ32現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 33 ==
 * @default
 *
 * @param Gauge 33 Text
 * @text ゲージ33テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 33 Current
 * @text ゲージ33現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 33 Max
 * @text ゲージ33最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 33 Position
 * @text ゲージ33位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 33 Size
 * @text ゲージ33サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 33 Colors
 * @text ゲージ33色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 33 Back Color
 * @text ゲージ33背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 33 Draw C/M
 * @text ゲージ33現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 34 ==
 * @default
 *
 * @param Gauge 34 Text
 * @text ゲージ34テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 34 Current
 * @text ゲージ34現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 34 Max
 * @text ゲージ34最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 34 Position
 * @text ゲージ34位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 34 Size
 * @text ゲージ34サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 34 Colors
 * @text ゲージ34色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 34 Back Color
 * @text ゲージ34背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 34 Draw C/M
 * @text ゲージ34現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 35 ==
 * @default
 *
 * @param Gauge 35 Text
 * @text ゲージ35テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 35 Current
 * @text ゲージ35現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 35 Max
 * @text ゲージ35最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 35 Position
 * @text ゲージ35位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 35 Size
 * @text ゲージ35サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 35 Colors
 * @text ゲージ35色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 35 Back Color
 * @text ゲージ35背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 35 Draw C/M
 * @text ゲージ35現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 36 ==
 * @default
 *
 * @param Gauge 36 Text
 * @text ゲージ36テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 36 Current
 * @text ゲージ36現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 36 Max
 * @text ゲージ36最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 36 Position
 * @text ゲージ36位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 36 Size
 * @text ゲージ36サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 36 Colors
 * @text ゲージ36色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 36 Back Color
 * @text ゲージ36背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 36 Draw C/M
 * @text ゲージ36現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 37 ==
 * @default
 *
 * @param Gauge 37 Text
 * @text ゲージ37テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 37 Current
 * @text ゲージ37現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 37 Max
 * @text ゲージ37最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 37 Position
 * @text ゲージ37位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 37 Size
 * @text ゲージ37サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 37 Colors
 * @text ゲージ37色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 37 Back Color
 * @text ゲージ37背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 37 Draw C/M
 * @text ゲージ37現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 38 ==
 * @default
 *
 * @param Gauge 38 Text
 * @text ゲージ38テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 38 Current
 * @text ゲージ38現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 38 Max
 * @text ゲージ38最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 38 Position
 * @text ゲージ38位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 38 Size
 * @text ゲージ38サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 38 Colors
 * @text ゲージ38色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 38 Back Color
 * @text ゲージ38背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 38 Draw C/M
 * @text ゲージ38現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 39 ==
 * @default
 *
 * @param Gauge 39 Text
 * @text ゲージ39テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 39 Current
 * @text ゲージ39現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 39 Max
 * @text ゲージ39最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 39 Position
 * @text ゲージ39位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 39 Size
 * @text ゲージ39サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 39 Colors
 * @text ゲージ39色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 39 Back Color
 * @text ゲージ39背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 39 Draw C/M
 * @text ゲージ39現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 40 ==
 * @default
 *
 * @param Gauge 40 Text
 * @text ゲージ40テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 40 Current
 * @text ゲージ40現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 40 Max
 * @text ゲージ40最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 40 Position
 * @text ゲージ40位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 40 Size
 * @text ゲージ40サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 40 Colors
 * @text ゲージ40色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 40 Back Color
 * @text ゲージ40背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 40 Draw C/M
 * @text ゲージ40現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 41 ==
 * @default
 *
 * @param Gauge 41 Text
 * @text ゲージ41テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 41 Current
 * @text ゲージ41現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 41 Max
 * @text ゲージ41最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 41 Position
 * @text ゲージ41位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 41 Size
 * @text ゲージ41サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 41 Colors
 * @text ゲージ41色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 41 Back Color
 * @text ゲージ41背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 41 Draw C/M
 * @text ゲージ41現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 42 ==
 * @default
 *
 * @param Gauge 42 Text
 * @text ゲージ42テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 42 Current
 * @text ゲージ42現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 42 Max
 * @text ゲージ42最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 42 Position
 * @text ゲージ42位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 42 Size
 * @text ゲージ42サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 42 Colors
 * @text ゲージ42色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 42 Back Color
 * @text ゲージ42背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 42 Draw C/M
 * @text ゲージ42現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 43 ==
 * @default
 *
 * @param Gauge 43 Text
 * @text ゲージ43テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 43 Current
 * @text ゲージ43現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 43 Max
 * @text ゲージ43最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 43 Position
 * @text ゲージ43位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 43 Size
 * @text ゲージ43サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 43 Colors
 * @text ゲージ43色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 43 Back Color
 * @text ゲージ43背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 43 Draw C/M
 * @text ゲージ43現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 44 ==
 * @default
 *
 * @param Gauge 44 Text
 * @text ゲージ44テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 44 Current
 * @text ゲージ44現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 44 Max
 * @text ゲージ44最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 44 Position
 * @text ゲージ44位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 44 Size
 * @text ゲージ44サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 44 Colors
 * @text ゲージ44色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 44 Back Color
 * @text ゲージ44背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 44 Draw C/M
 * @text ゲージ44現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 45 ==
 * @default
 *
 * @param Gauge 45 Text
 * @text ゲージ45テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 45 Current
 * @text ゲージ45現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 45 Max
 * @text ゲージ45最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 45 Position
 * @text ゲージ45位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 45 Size
 * @text ゲージ45サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 45 Colors
 * @text ゲージ45色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 45 Back Color
 * @text ゲージ45背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 45 Draw C/M
 * @text ゲージ45現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 46 ==
 * @default
 *
 * @param Gauge 46 Text
 * @text ゲージ46テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 46 Current
 * @text ゲージ46現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 46 Max
 * @text ゲージ46最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 46 Position
 * @text ゲージ46位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 46 Size
 * @text ゲージ46サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 46 Colors
 * @text ゲージ46色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 46 Back Color
 * @text ゲージ46背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 46 Draw C/M
 * @text ゲージ46現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 47 ==
 * @default
 *
 * @param Gauge 47 Text
 * @text ゲージ47テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 47 Current
 * @text ゲージ47現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 47 Max
 * @text ゲージ47最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 47 Position
 * @text ゲージ47位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 47 Size
 * @text ゲージ47サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 47 Colors
 * @text ゲージ47色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 47 Back Color
 * @text ゲージ47背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 47 Draw C/M
 * @text ゲージ47現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 48 ==
 * @default
 *
 * @param Gauge 48 Text
 * @text ゲージ48テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 48 Current
 * @text ゲージ48現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 48 Max
 * @text ゲージ48最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 48 Position
 * @text ゲージ48位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 48 Size
 * @text ゲージ48サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 48 Colors
 * @text ゲージ48色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 48 Back Color
 * @text ゲージ48背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 48 Draw C/M
 * @text ゲージ48現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 49 ==
 * @default
 *
 * @param Gauge 49 Text
 * @text ゲージ49テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 49 Current
 * @text ゲージ49現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 49 Max
 * @text ゲージ49最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 49 Position
 * @text ゲージ49位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 49 Size
 * @text ゲージ49サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 49 Colors
 * @text ゲージ49色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 49 Back Color
 * @text ゲージ49背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 49 Draw C/M
 * @text ゲージ49現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @param == Gauge 50 ==
 * @default
 *
 * @param Gauge 50 Text
 * @text ゲージ50テキスト
 * @desc ゲージに表示されるテキスト。これでゲージの意味を説明してください
 * @default
 *
 * @param Gauge 50 Current
 * @text ゲージ50現在値
 * @desc ゲージの現在値に表示するJavaScript
 * @default
 *
 * @param Gauge 50 Max
 * @text ゲージ50最大値
 * @desc ゲージの最大値に表示するJavaScript
 * @default
 *
 * @param Gauge 50 Position
 * @text ゲージ50位置
 * @desc アクター'セクション'中での、ゲージ表示位置
 * 書式: [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 50 Size
 * @text ゲージ50サイズ
 * @desc ゲージの幅と高さ
 * 書式: [Width] | [Height]
 * @default
 *
 * @param Gauge 50 Colors
 * @text ゲージ50色
 * @desc ゲージのグラデーションに使用する2色
 * 書式: [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 50 Back Color
 * @text ゲージ50背景色
 * @desc ゲージの背景に使われる色
 * @default
 *
 * @param Gauge 50 Draw C/M
 * @text ゲージ50現在/最大値表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 現在値と最大値をゲージに表示
 * 表示:true / 非表示:false
 * @default
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/battle-status-customizer/
 *
 *
 * Battle Status Customizer (Part 2)
 * Version 1.00
 * SumRndmDde
 *
 *
 * パート1のヘルプをお読みください。
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
SRD.BattleStatusCustomizer = SRD.BattleStatusCustomizer || {};

var Imported = Imported || {};
Imported["SumRndmDde Battle Status Customizer 2"] = 1.00;

(function (_) {

    "use strict";

})(SRD.BattleStatusCustomizer);