/*:
 * @plugindesc Alternative Menu Screen Bust and Icons. Shows busts for the Actor and Icons for the commands! WOWOWOWOWOW!!!
 * @author SumRndmDde
 *
 * @param Item Icon
 * @desc The icon index of the icon used for the "Item" choice.
 * Right-click and press "IconSet Viewer".
 * @default 176
 *
 * @param Skill Icon
 * @desc The icon index of the icon used for the "Skill" choice.
 * Right-click and press "IconSet Viewer".
 * @default 64
 *
 * @param Equip Icon
 * @desc The icon index of the icon used for the "Equip" choice.
 * Right-click and press "IconSet Viewer".
 * @default 96
 *
 * @param Status Icon
 * @desc The icon index of the icon used for the "Status" choice.
 * Right-click and press "IconSet Viewer".
 * @default 87
 *
 * @param Formation Icon
 * @desc The icon index of the icon used for the "Formation" choice.
 * Right-click and press "IconSet Viewer".
 * @default 82
 *
 * @param Options Icon
 * @desc The icon index of the icon used for the "Options" choice.
 * Right-click and press "IconSet Viewer".
 * @default 83
 *
 * @param Save Icon
 * @desc The icon index of the icon used for the "Save" choice.
 * Right-click and press "IconSet Viewer".
 * @default 225
 *
 * @param Game End Icon
 * @desc The icon index of the icon used for the "Game End" choice.
 * Right-click and press "IconSet Viewer".
 * @default 245
 *
 * @param == Bust Position ==
 * @default
 *
 * @param Bust X Pos
 * @desc By default, the busts are positioned at (0, 0). Using this Parameter, all the busts' default X positions can be set.
 * @default 0
 *
 * @param Bust Y Pos
 * @desc By default, the busts are positioned at (0, 0). Using this Parameter, all the busts' default X positions can be set.
 * @default 0
 *
 * @param == Bust Window ==
 * @default
 *
 * @param Status Background
 * @desc The RGBA color for the background of the information for each Actor.
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param Show TP?
 * @desc Set this to 'true', and TP bars will be shown in the menu.
 * @default false
 *
 * @param == Icon Window ==
 * @default
 *
 * @param Icon Window X
 * @desc The X position of the command (icons) window.
 * Can be Number or JavaScript evaluation.
 * @default (Graphics.boxWidth / 2) - (this._commandWindow.width / 2)
 *
 * @param Icon Window Y
 * @desc The Y position of the command (icons) window.
 * Can be Number or JavaScript evaluation.
 * @default this._commandLabel.y + this._commandLabel.height
 *
 * @param Standard Padding
 * @desc The amount of space around the border of the window.
 * Default is 12.
 * @default 12
 *
 * @param Icon Padding
 * @desc The amount of space around the icon, but still highlighed.
 * Default is 12.
 * @default 12
 *
 * @param Icon X Position
 * @desc The X position of each icon in the "button".
 * Default is 0.
 * @default 0
 *
 * @param Icon Y Position
 * @desc The Y position of each icon in the "button".
 * Default is 6.
 * @default 6
 *
 * @param == Label Window ==
 * @default
 *
 * @param Label Window X
 * @desc The X position of the label window.
 * Can be Number or JavaScript evaluation.
 * @default (Graphics.boxWidth / 2) - (this._commandLabel.width / 2)
 *
 * @param Label Window Y
 * @desc The Y position of the label window.
 * Can be Number or JavaScript evaluation.
 * @default 0
 *
 * @param Label Alignment
 * @desc The alignment of the label text.
 * Choices are: Left, Right, or Center
 * @default Center
 *
 * @param == Gold Window ==
 * @default
 *
 * @param Gold Window X
 * @desc This is the x position of the HP Window.
 * Can be a Number or JavaScript eval.
 * @default 0
 *
 * @param Gold Window Y
 * @desc This is the x position of the HP Window.
 * Can be a Number or JavaScript eval.
 * @default Graphics.boxHeight - this._goldWindow.height
 *
 * @param == Custom Commands ==
 * @default
 *
 * @param Command Symbol 1
 * @desc The symbol of the command that will have Command Icon 1. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 1
 * @desc The icon of the command that will have Command Icon 1. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 2
 * @desc The symbol of the command that will have Command Icon 2. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 2
 * @desc The icon of the command that will have Command Icon 2. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 3
 * @desc The symbol of the command that will have Command Icon 3. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 3
 * @desc The icon of the command that will have Command Icon 3. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 4
 * @desc The symbol of the command that will have Command Icon 4. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 4
 * @desc The icon of the command that will have Command Icon 4. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 5
 * @desc The symbol of the command that will have Command Icon 5. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 5
 * @desc The icon of the command that will have Command Icon 5. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 6
 * @desc The symbol of the command that will have Command Icon 6. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 6
 * @desc The icon of the command that will have Command Icon 6. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 7
 * @desc The symbol of the command that will have Command Icon 7. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 7
 * @desc The icon of the command that will have Command Icon 7. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 8
 * @desc The symbol of the command that will have Command Icon 8. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 8
 * @desc The icon of the command that will have Command Icon 8. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 9
 * @desc The symbol of the command that will have Command Icon 9. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 9
 * @desc The icon of the command that will have Command Icon 9. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 10
 * @desc The symbol of the command that will have Command Icon 10. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 10
 * @desc The icon of the command that will have Command Icon 10. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 11
 * @desc The symbol of the command that will have Command Icon 11. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 11
 * @desc The icon of the command that will have Command Icon 11. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 12
 * @desc The symbol of the command that will have Command Icon 12. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 12
 * @desc The icon of the command that will have Command Icon 12. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 13
 * @desc The symbol of the command that will have Command Icon 13. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 13
 * @desc The icon of the command that will have Command Icon 13. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 14
 * @desc The symbol of the command that will have Command Icon 14. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 14
 * @desc The icon of the command that will have Command Icon 14. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 15
 * @desc The symbol of the command that will have Command Icon 15. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 15
 * @desc The icon of the command that will have Command Icon 15. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 16
 * @desc The symbol of the command that will have Command Icon 16. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 16
 * @desc The icon of the command that will have Command Icon 16. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 17
 * @desc The symbol of the command that will have Command Icon 17. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 17
 * @desc The icon of the command that will have Command Icon 17. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 18
 * @desc The symbol of the command that will have Command Icon 18. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 18
 * @desc The icon of the command that will have Command Icon 18. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 19
 * @desc The symbol of the command that will have Command Icon 19. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 19
 * @desc The icon of the command that will have Command Icon 19. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 20
 * @desc The symbol of the command that will have Command Icon 20. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 20
 * @desc The icon of the command that will have Command Icon 20. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @help
 *
 *
 * Alternative Menu Screen: Bust + Icons
 * Version 1.01
 * SumRndmDde
 *
 *
 * This is a combination of the Bust and Icon menus.
 *
 * The command window now uses Icons and the Actor Window uses Busts.
 *
 * Use the Parameters to manipualte the positions and other aspects
 * of the Windows.
 *
 *
 * ==========================================================================
 *  How to Set Up Bust Images
 * ==========================================================================
 *
 * In order to set the Bust Image for each Actor,
 * use the following Notetags in the Notebox of the Actor:
 *
 *  <Menu Bust: filename>
 *
 * Input the filename of the image file you wish to use
 * for this Actor's Bust Image.
 *
 * The image MUST be stored in:
 * img/SumRndmDde/menu
 *
 *
 * ==========================================================================
 *  How to Set Custom Offsets for Bust Images
 * ==========================================================================
 *
 * The following are optional notetags.
 * Use the following to set the X and Y of the Bust (inside Actor Note):
 *
 *  <Menu Bust X: number>
 *  <Menu Bust Y: number>
 *
 * By default, the bust image is set to the coordinates in the Parameters,
 * but these Notetags can set the specific bust image of the Actor to a 
 * different position if it looks a little off center.
 *
 *
 * ==========================================================================
 * How to Set Icons
 * ==========================================================================
 *
 * You can manipulate the Icons used by using the Parameters at the top
 * of the list.
 *
 * You should definitely use "Iconset Viewer" to find the Icon you wish 
 * to use.
 *
 *
 * ==========================================================================
 *  Setting up Icons for Custom Commands
 * ==========================================================================
 *
 * At the very bottom of the Parameter list, there are places available
 * for inputting Icons for custom commands.
 *
 * You need to first provide the "symbol" of the command.
 * (A symbol is usually a word. For example, the symbol for the Debug
 * Command added by Yanfly's Main Menu Manager is "debug" (without quotes))
 *
 * Then, after you have done so, you can place the Icon Index in the 
 * proceeding Parameter.
 *
 * If you're using Yanfly's Main Menu Manager, you can find a command's 
 * symbol in the Parameter section it's help in.
 *
 *
 * On the other hand, if you have a Plugin that adds a command without
 * telling you the symbol for it, leave a comment on the YouTube video
 * or Forum post linking me to the Plugin; I'll help ya. ~
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
 */
/*:ja
 * @plugindesc メインメニューにアクターの立ち絵とコマンドのアイコンが表示されます。
 * @author SumRndmDde
 *
 * @param Item Icon
 * @text アイテムアイコン
 * @desc アイテムのアイコンID
 * 右クリックから"アイコンセットビューア"を使ってください。
 * @default 176
 *
 * @param Skill Icon
 * @text スキルアイコン
 * @desc スキルの選択に使用されるアイコンID
 * 右クリックから"アイコンセットビューア"を使ってください。
 * @default 64
 *
 * @param Equip Icon
 * @text 装備アイコン
 * @desc 装備のアイコンID
 * 右クリックから"アイコンセットビューア"を使ってください。
 * @default 96
 *
 * @param Status Icon
 * @text ステータスアイコン
 * @desc ステータスのアイコンID
 * 右クリックから"アイコンセットビューア"を使ってください。
 * @default 87
 *
 * @param Formation Icon
 * @text 並び替えアイコン
 * @desc 並び替えのアイコンID
 * 右クリックから"アイコンセットビューア"を使ってください。
 * @default 82
 *
 * @param Options Icon
 * @text オプションアイコン
 * @desc オプションのアイコンID
 * 右クリックから"アイコンセットビューア"を使ってください。
 * @default 83
 *
 * @param Save Icon
 * @text 保存アイコン
 * @desc 保存のアイコンID
 * 右クリックから"アイコンセットビューア"を使ってください。
 * @default 225
 *
 * @param Game End Icon
 * @text ゲーム終了アイコン
 * @desc ゲーム終了のアイコンID
 * 右クリックから"アイコンセットビューア"を使ってください。
 * @default 245
 *
 * @param -- Bust Position --
 * @text -- 立ち絵の位置 --
 * @default
 *
 * @param Bust X Pos
 * @text 立ち絵X位置
 * @type number
 * @desc デフォルトでは、立ち絵の位置は(0, 0)です。このパラメータを使用すると、全ての立ち絵のデフォルトのX位置を設定できます。
 * @default 0
 *
 * @param Bust Y Pos
 * @text 立ち絵Y位置
 * @type number
 * @desc デフォルトでは、立ち絵の位置は(0, 0)です。このパラメータを使用すると、全ての立ち絵のデフォルトのY位置を設定できます。
 * @default 0
 *
 * @param -- Bust Window --
 * @text -- 立ち絵ウィンドウ --
 * @default
 *
 * @param Status Background
 * @text ステータスの背景
 * @desc 各アクターの情報の背景のRGBA色です。
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param Show TP?
 * @text TPを表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc メニューにTPバーを表示
 * @default false
 *
 * @param -- Icon Window --
 * @text -- アイコンウィンドウ --
 * @default
 *
 * @param Icon Window X
 * @text アイコンウィンドウX
 * @desc コマンド(アイコン)ウィンドウのX位置。
 * 数値またはJavaScriptの式が使えます。
 * @default (Graphics.boxWidth / 2) - (this._commandWindow.width / 2)
 *
 * @param Icon Window Y
 * @text アイコンウィンドウY
 * @desc コマンド(アイコン)ウィンドウのY位置。
 * 数値またはJavaScriptの式が使えます。
 * @default this._commandLabel.y + this._commandLabel.height
 *
 * @param Standard Padding
 * @text 標準的な余白
 * @desc ウィンドウの境界線周りの余白量。
 * デフォルト:12
 * @default 12
 *
 * @param Icon Padding
 * @text アイコン余白
 * @desc アイコンの周りの余白量。
 * デフォルト:12
 * @default 12
 *
 * @param Icon X Position
 * @text アイコンX位置
 * @desc ボタンの各アイコンのX位置。
 * デフォルト:0
 * @default 0
 *
 * @param Icon Y Position
 * @text アイコンY位置
 * @desc ボタン内の各アイコンのY位置。
 * デフォルト:6
 * @default 6
 *
 * @param -- Label Window --
 * @text -- ラベルウィンドウ --
 * @default
 *
 * @param Label Window X
 * @text ラベルウィンドウX
 * @desc ラベルウィンドウのXの位置。
 * 数値またはJavaScriptの式が使えます。
 * @default (Graphics.boxWidth / 2) - (this._commandLabel.width / 2)
 *
 * @param Label Window Y
 * @text ラベルウィンドウY
 * @desc ラベルウィンドウのYの位置。
 * 数値またはJavaScriptの式が使えます。
 * @default 0
 *
 * @param Label Alignment
 * @text ラベル行揃え
 * @type select
 * @option 左
 * @value Left
 * @option 中央
 * @value Center
 * @option 右
 * @value Right
 * @desc ラベルテキストの行揃え。
 * 左:Left / 中央:Center / 右:Right
 * @default Center
 *
 * @param -- Gold Window --
 * @text -- 所持金ウィンドウ --
 * @default
 *
 * @param Gold Window X
 * @text 所持金ウィンドウX位置
 * @desc 所持金ウィンドウのX位置です。
 * 数値またはJavaScriptの式が使えます。
 * @default 0
 *
 * @param Gold Window Y
 * @text 所持金ウィンドウY位置
 * @desc 所持金ウィンドウのY位置です。
 * 数値またはJavaScriptの式が使えます。
 * @default Graphics.boxHeight - this._goldWindow.height
 *
 * @param -- Custom Commands --
 * @text -- カスタムコマンド --
 * @default
 *
 * @param Command Symbol 1
 * @text コマンドシンボル1
 * @desc コマンドアイコン１を持つコマンドのシンボルです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 1
 * @text コマンドアイコン1
 * @desc コマンドアイコン1 が表示されるコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 2
 * @text コマンドシンボル2
 * @desc コマンドアイコン2 を持つコマンドのシンボルです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 2
 * @text コマンドアイコン2
 * @desc コマンドアイコン２を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 3
 * @text コマンドシンボル3
 * @desc コマンドアイコン3 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 3
 * @text コマンドアイコン3
 * @desc コマンドアイコン３を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 4
 * @text コマンドシンボル4
 * @desc コマンドアイコン４を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 4
 * @text コマンドアイコン4
 * @desc コマンドアイコン４を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 5
 * @text コマンドシンボル5
 * @desc コマンドアイコン5 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 5
 * @text コマンドアイコン5
 * @desc コマンドアイコン５を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 6
 * @text コマンドシンボル6
 * @desc コマンドアイコン6 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 6
 * @text コマンドアイコン6
 * @desc コマンドアイコン６を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 7
 * @text コマンドシンボル7
 * @desc コマンドアイコン７を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 7
 * @text コマンドアイコン7
 * @desc コマンドアイコン７を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 8
 * @text コマンドシンボル8
 * @desc コマンドアイコン8 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 8
 * @text コマンドアイコン8
 * @desc コマンドアイコン８を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 9
 * @text コマンドシンボル9
 * @desc コマンドアイコン9 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 9
 * @text コマンドアイコン9
 * @desc コマンドアイコン９を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 10
 * @text コマンドシンボル10
 * @desc コマンドアイコン10 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 10
 * @text コマンドアイコン10
 * @desc コマンドアイコン10 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 11
 * @text コマンドシンボル11
 * @desc コマンドアイコン11 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 11
 * @text コマンドアイコン11
 * @desc コマンドアイコン11 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 12
 * @text コマンドシンボル12
 * @desc コマンドアイコン12 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 12
 * @text コマンドアイコン12
 * @desc コマンドアイコン１２を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 13
 * @text コマンドシンボル13
 * @desc コマンドアイコン13 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 13
 * @text コマンドアイコン13
 * @desc コマンドアイコン13 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 14
 * @text コマンドシンボル14
 * @desc コマンドアイコン１４を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 14
 * @text コマンドアイコン14
 * @desc コマンドアイコン１４を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 15
 * @text コマンドシンボル15
 * @desc コマンドアイコン15 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 15
 * @text コマンドアイコン15
 * @desc コマンドアイコン15 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 16
 * @text コマンドシンボル16
 * @desc コマンドアイコン16 を持つコマンドのシンボル。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 16
 * @text コマンドアイコン16
 * @desc コマンドアイコン16 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 17
 * @text コマンドシンボル17
 * @desc コマンドアイコン17 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 17
 * @text コマンドアイコン17
 * @desc コマンドアイコン17 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 18
 * @text コマンドシンボル18
 * @desc コマンドアイコン18 を持つコマンドのシンボル。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 18
 * @text コマンドアイコン18
 * @desc コマンドアイコン18 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 19
 * @text コマンドシンボル19
 * @desc コマンドアイコン19 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 19
 * @text コマンドアイコン19
 * @desc コマンドアイコン19 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 20
 * @text コマンドシンボル20
 * @desc コマンドアイコン20 を持つコマンドのシンボルです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 20
 * @text コマンドアイコン20
 * @desc コマンドアイコン20 を持つコマンドのアイコンです。
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/ams-busts-icons/
 *
 *
 * Alternative Menu Screen: Bust + Icons
 * Version 1.01
 * SumRndmDde
 *
 *
 * 立ち絵メニューとアイコンメニューを組み合わせたものです。
 * コマンドウィンドウではアイコンを、
 * アクターウィンドウでは立ち絵を使用するようになりました。
 * パラメータを使って、ウィンドウの位置や他の部分を設定できます。
 *
 *
 * ==========================================================================
 *  立ち絵の設定方法
 * ==========================================================================
 *
 * 各アクターの立ち絵を設定するために
 * アクターのメモ欄に以下のメモタグを使用します。
 *
 *  <Menu Bust: filename>
 *
 * このアクターの立ち絵に使用したい画像ファイル名を入力してください。
 *
 * 下記に画像を保存してください。
 * img/SumRndmDde/menu
 *
 *
 * ==========================================================================
 *  立ち絵にカスタムオフセットを設定する方法
 * ==========================================================================
 *
 * 以下は任意のメモタグです。
 * 以下を使用して、立ち絵のXとYを設定します（アクターのメモ欄）。
 *
 *  <Menu Bust X: number>
 *  <Menu Bust Y: number>
 *
 * デフォルトでは、立ち絵はパラメータの座標に設定されていますが、
 * これらのメモタグは、
 * アクターの特定の立ち絵が少し中心からずれているように見える場合、
 * 別の位置に設定することができます。
 *
 *
 * ==========================================================================
 *  アイコンの設定方法
 * ==========================================================================
 *
 * リストの一番上にある'パラメータ'を使って、
 * 使用するアイコンを操作することができます。
 * 使いたいアイコンは'アイコンセットビューア'を使って探してください。
 * ※'アイコンセットビューア'はフォーム内で右クリックすると出ます。
 *
 *
 * ==========================================================================
 *  カスタムコマンドのアイコンを設定する
 * ==========================================================================
 *
 * パラメータリストの一番下には、
 * カスタムコマンドのアイコンを入力できる場所があります。
 * まず、コマンドの'シンボル'を入力する必要があります。
 *
 * (シンボルは通常は単語です。
 * 例えば、Yanflyのメインメニューマネージャーで追加された
 * デバッグコマンドのシンボルは'debug'(引用符なし)です。)
 *
 * そして、それが終わったら、
 * 進行中のパラメータにアイコンインデックスを配置します。
 * YEP_MainMenuManagerを使用している場合、
 * コマンドのシンボルをパラメータセクションのヘルプで見つけることができます。
 *
 *
 * もしシンボルを教えずにコマンドを追加するプラグインを使っていれば、
 * そのプラグインにリンクしているYouTubeのビデオやフォーラムの投稿に
 * リンクを残してください;私はあなたを助けます。
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

var Imported = Imported || {};

(function () {

	var icons = {};
	icons['item'] = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Item Icon']);
	icons['skill'] = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Skill Icon']);
	icons['equip'] = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Equip Icon']);
	icons['status'] = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Status Icon']);
	icons['formation'] = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Formation Icon']);
	icons['options'] = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Options Icon']);
	icons['save'] = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Save Icon']);
	icons['gameEnd'] = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Game End Icon']);

	for (var i = 1; i <= 20; i++) {
		var sym = String(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Command Symbol ' + i]);
		if (sym.trim().length > 0) {
			icons[sym] = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Command Icon ' + i]);
		}
	}

	var bustX = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Bust X Pos']);
	var bustY = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Bust Y Pos']);
	var sBack = String(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Status Background']);
	var tp = String(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Show TP?']).trim().toLowerCase() === 'true';
	var col = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Max Columns']);
	var row = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Visible Rows']);
	var _x = String(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Icon Window X']);
	var _y = String(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Icon Window Y']);
	var _stand = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Standard Padding']);
	var _icon = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Icon Padding']);
	var _iconX = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Icon X Position']);
	var _iconY = Number(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Icon Y Position']);
	var _labelX = String(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Label Window X']);
	var _labelY = String(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Label Window Y']);
	var _labelAlign = String(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Label Alignment']).toLowerCase();
	var goldX = String(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Gold Window X']);
	var goldY = String(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Gold Window Y']);

	var notetagsLoaded = false;
	var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function () {
		if (!_DataManager_isDatabaseLoaded.call(this)) return false;
		if (!notetagsLoaded) {
			for (var i = 1; i < $dataActors.length; i++) {
				if ($dataActors[i].note.match(/<Menu\s*Bust\s*:\s*(.*)\s*>/im)) {
					$dataActors[i].ams_bs_bust = RegExp.$1;
				}
				if ($dataActors[i].note.match(/<Menu\s*Bust\s*X\s*:\s*(.*)\s*>/im)) {
					$dataActors[i].ams_bs_x = parseInt(RegExp.$1);
				}
				if ($dataActors[i].note.match(/<Menu\s*Bust\s*Y\s*:\s*(.*)\s*>/im)) {
					$dataActors[i].ams_bs_y = parseInt(RegExp.$1);
				}
			}
			notetagsLoaded = true;
		}
		return true;
	};
	if (!ImageManager.loadSumRndmDdeMB) {
		ImageManager.loadSumRndmDdeMB = function (filename, hue) {
			return this.loadBitmap('img/SumRndmDde/menu/', filename, hue, true);
		};
	}
	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function () {
		_Scene_Menu_create.call(this);
		this._windowLayer.removeChild(this._goldWindow);
		this.addWindow(this._goldWindow);
		this._windowLayer.removeChild(this._commandWindow);
		this.addWindow(this._commandWindow);
		this._commandLabel = new Window_CommandLabel(0, 0, this._commandWindow);
		this.addWindow(this._commandLabel);
		this._statusWindow.x = 0;
		this._statusWindow.y = 0;
		this._commandLabel.x = eval(_labelX);
		this._commandLabel.y = eval(_labelY);
		this._commandWindow.x = eval(_x);
		this._commandWindow.y = eval(_y);
		this._goldWindow.x = eval(goldX);
		this._goldWindow.y = eval(goldY);
	};
	Scene_Menu.prototype.createStatusWindow = function () {
		this._statusWindow = new Window_MenuStatus(0, 0);
		this.addWindow(this._statusWindow);
	};
	Window_MenuCommand.prototype.windowWidth = function () {
		return ((this.maxItems() * (this.itemWidth() + (this.textPadding() * 2))) +
			(this.standardPadding() * 2)) - (this.textPadding() * 2);
	};
	Window_MenuCommand.prototype.windowHeight = function () {
		return this.itemHeight() + (this.standardPadding() * 2);
	};
	Window_MenuCommand.prototype.standardPadding = function () {
		return _stand;
	};
	Window_MenuCommand.prototype.iconPadding = function () {
		return _icon;
	};
	Window_MenuCommand.prototype.maxCols = function () {
		return this.maxItems();
	};
	Window_MenuCommand.prototype.numVisibleRows = function () {
		return 1;
	};
	Window_MenuCommand.prototype.itemWidth = function () {
		return Window_Base._iconWidth + this.iconPadding();
	};
	Window_MenuCommand.prototype.itemHeight = function () {
		return Window_Base._iconHeight + this.iconPadding();
	};
	Window_MenuCommand.prototype.drawItem = function (index) {
		var rect = this.itemRectForText(index);
		var align = this.itemTextAlign();
		var symbol = this.commandSymbol(index);
		var enabled = this.isCommandEnabled(index);
		this.resetTextColor();
		var bitmap = ImageManager.loadSystem('IconSet');
		var pw = Window_Base._iconWidth;
		var ph = Window_Base._iconHeight;
		var sx = icons[symbol] % 16 * pw;
		var sy = Math.floor(icons[symbol] / 16) * ph;
		if (!enabled) this.contents.paintOpacity = 100;
		this.contents.blt(bitmap, sx, sy, pw, ph, rect.x + _iconX, rect.y + _iconY);
		if (!enabled) this.contents.paintOpacity = 255;
	};
	var _Window_MenuStatus_loadImages = Window_MenuStatus.prototype.loadImages;
	Window_MenuStatus.prototype.loadImages = function () {
		_Window_MenuStatus_loadImages.call(this);
		$gameParty.members().forEach(function (actor) {
			if (actor.actor().ams_bs_bust) {
				ImageManager.loadSumRndmDdeMB(actor.actor().ams_bs_bust);
			}
		}, this);
	};
	Window_MenuStatus.prototype.windowWidth = function () {
		return Graphics.boxWidth;
	};
	Window_MenuStatus.prototype.windowHeight = function () {
		return Graphics.boxHeight;
	};
	Window_MenuStatus.prototype.numVisibleRows = function () {
		return 1;
	};
	Window_MenuStatus.prototype.maxCols = function () {
		return 4;
	};
	Window_MenuStatus.prototype.drawItem = function (index) {
		this.drawItemBackground(index);
		this.drawItemImage(index);
		this.drawItemStatus(index);
	};
	Window_MenuStatus.prototype.drawItemImage = function (index) {
		var actor = $gameParty.members()[index];
		var rect = this.itemRect(index);
		this.changePaintOpacity(actor.isBattleMember());
		var x = actor.actor().ams_bs_x || bustX;
		var y = actor.actor().ams_bs_y || bustY;
		this.drawBust(actor, rect, x, y);
		this.changePaintOpacity(true);
	};
	Window_MenuStatus.prototype.drawItemStatus = function (index) {
		var actor = $gameParty.members()[index];
		var rect = this.itemRect(index);
		var lineHeight = this.lineHeight();
		var x = rect.x + 12;
		var y = rect.y + rect.height / 2;
		if (tp) y -= lineHeight;
		var boxHeight = (tp) ? lineHeight * 7 : lineHeight * 6;
		this.contents.fillRect(rect.x, y, this.itemWidth(), boxHeight, sBack);
		this.drawActorName(actor, x, y);
		this.drawActorLevel(actor, x, y + lineHeight * 1);
		this.drawActorIcons(actor, x, y + lineHeight * 2);
		this.drawActorClass(actor, x, y + lineHeight * 3);
		this.drawActorHp(actor, x, y + lineHeight * 4, this.itemWidth() - 24);
		this.drawActorMp(actor, x, y + lineHeight * 5, this.itemWidth() - 24);
		if (tp) {
			this.drawActorTp(actor, x, y + lineHeight * 6, this.itemWidth() - 24);
		}
	};
	Window_MenuStatus.prototype.drawBust = function (actor, rect, xOff, yOff) {
		var bitmap = ImageManager.loadSumRndmDdeMB(actor.actor().ams_bs_bust);
		var sx = bitmap.width / 2 - this.itemWidth() / 2;
		this.contents.blt(bitmap, sx, 0, this.itemWidth(), bitmap.height, rect.x + xOff, (rect.height - bitmap.height) + yOff);
	};
	var _Window_MenuStatus_deselect = Window_MenuStatus.prototype.deselect;
	Window_MenuStatus.prototype.deselect = function () {
		_Window_MenuStatus_deselect.call(this);
		this._index = 0;
	};
	function Window_CommandLabel() {
		this.initialize.apply(this, arguments);
	}
	Window_CommandLabel.prototype = Object.create(Window_Base.prototype);
	Window_CommandLabel.prototype.constructor = Window_CommandLabel;
	Window_CommandLabel.prototype.initialize = function (x, y, win) {
		var width = this.windowWidth();
		var height = this.windowHeight();
		Window_Base.prototype.initialize.call(this, x, y, width, height);
		this._commandWindow = win;
		this._value = "";
		this.refresh();
	};
	Window_CommandLabel.prototype.windowWidth = function () {
		return 240;
	};
	Window_CommandLabel.prototype.windowHeight = function () {
		return this.fittingHeight(1);
	};
	Window_CommandLabel.prototype.refresh = function () {
		if (this._value != this._commandWindow.currentData().symbol) {
			this._value = this._commandWindow.currentData().symbol;
			var width = this.contents.width - this.textPadding() * 2;
			this.contents.clear();
			this.drawText(this._commandWindow.currentData().name, this.textPadding(), 0, width, _labelAlign);
		}
	};
	var _Window_CommandLabel_update = Window_CommandLabel.prototype.update;
	Window_CommandLabel.prototype.update = function () {
		if (this._commandWindow) this.refresh();
		_Window_CommandLabel_update.call(this);
	};
	Window_CommandLabel.prototype.open = function () {
		this.refresh();
		Window_Base.prototype.open.call(this);
	};
	if (Imported.YEP_MainMenuManager) {
		Scene_Menu.prototype.resizeGoldWindow = function () { };
	}
})();