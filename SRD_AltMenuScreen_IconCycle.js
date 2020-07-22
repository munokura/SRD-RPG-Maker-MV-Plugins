/*:
 * @plugindesc Alternative Menu Screen Icon Cycle. Uses Icons and allows the Player to cycle through them.
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
 * @param == Icon Cycle ==
 * @default
 *
 * @param Cycle Speed
 * @desc Speed in which the circle cycles.
 * Can be Number or JavaScript evaluation.
 * @default 0.05
 *
 * @param Cycle Anchor
 * @desc Angle where the main Icon goes.
 * Can be Number or JavaScript evaluation.
 * @default Math.PI * (3/2)
 *
 * @param Cycle Radius
 * @desc The radius of the circle the Icons cycle on.
 * Can be Number or JavaScript evaluation.
 * @default 120
 *
 * @param Cycle X
 * @desc The X position of the circle the Icons cycle on.
 * Can be Number or JavaScript evaluation.
 * @default 160
 *
 * @param Cycle Y
 * @desc The Y position of the circle the Icons cycle on.
 * Can be Number or JavaScript evaluation.
 * @default 140
 *
 * @param == Icon Window ==
 * @default
 *
 * @param Icon Window X
 * @desc The X position of the command (icons) window.
 * Can be Number or JavaScript evaluation.
 * @default (Graphics.width / 2) - (this._commandWindow.width / 2)
 *
 * @param Icon Window Y
 * @desc The Y position of the command (icons) window.
 * Can be Number or JavaScript evaluation.
 * @default (Graphics.height / 2) - (this._commandWindow.height / 2)
 *
 * @param Icon Window Width
 * @desc The width of the command (icons) window.
 * Can be Number or JavaScript evaluation.
 * @default 370
 *
 * @param Icon Window Height
 * @desc The height of the command (icons) window.
 * Can be Number or JavaScript evaluation.
 * @default 370
 *
 * @param == Actor Window ==
 * @default
 *
 * @param Text Align
 * @desc The alignment of the text in the window.
 * Can be: 'left', 'right', or 'center'.
 * @default center
 *
 * @param Actor Window X
 * @desc The X position of the actor window.
 * Can be Number or JavaScript evaluation.
 * @default (Graphics.width / 2) - (this._statusWindow.width / 2)
 *
 * @param Actor Window Y
 * @desc The Y position of the actor window.
 * Can be Number or JavaScript evaluation.
 * @default (Graphics.height / 2) - (this._statusWindow.height / 2)
 *
 * @param == Gold Window ==
 * @default
 *
 * @param Gold Window X
 * @desc The X position of the gold window.
 * Can be Number or JavaScript evaluation.
 * @default 0
 *
 * @param Gold Window Y
 * @desc The Y position of the gold window.
 * Can be Number or JavaScript evaluation.
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
 * Alternative Menu Screen: Icon Cycle
 * Version 1.00
 * SumRndmDde
 *
 *
 * Changelog (v1.01): Fixed Actor Window Cancel
 *
 *
 * Gives your game an alternative menu screen.
 * 
 * This menu is based off of a wheel that cycles through Icons.
 *
 * You can manipulate the Icons used by using the Parameters at the top
 * of the list.
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
 * @plugindesc (マウス、タッチ非対応)メインメニューをアイコンが回る形式に変えます。
 * @author SumRndmDde
 *
 * @param Item Icon
 * @text アイテムアイコン
 * @desc アイテムのアイコンID
 * 右クリックから「アイコンセットビューア」を使ってください
 * @default 176
 *
 * @param Skill Icon
 * @text スキルアイコン
 * @desc スキルのアイコンID
 * 右クリックから「アイコンセットビューア」を使ってください
 * @default 64
 *
 * @param Equip Icon
 * @text 装備アイコン
 * @desc 装備のアイコンID
 * 右クリックから「アイコンセットビューア」を使ってください
 * @default 96
 *
 * @param Status Icon
 * @text ステータスアイコン
 * @desc ステータスのアイコンID
 * 右クリックから「アイコンセットビューア」を使ってください
 * @default 87
 *
 * @param Formation Icon
 * @text 並び替えアイコン
 * @desc 並び替えのアイコンID
 * 右クリックから「アイコンセットビューア」を使ってください
 * @default 82
 *
 * @param Options Icon
 * @text オプションアイコン
 * @desc オプションのアイコンID
 * 右クリックから「アイコンセットビューア」を使ってください
 * @default 83
 *
 * @param Save Icon
 * @text 保存アイコン
 * @desc 保存のアイコンID
 * 右クリックから「アイコンセットビューア」を使ってください
 * @default 225
 *
 * @param Game End Icon
 * @text ゲーム終了アイコン
 * @desc ゲーム終了のアイコンID
 * 右クリックから「アイコンセットビューア」を使ってください
 * @default 245
 *
 * @param -- Icon Cycle --
 * @text -- アイコンの輪 --
 * @default
 *
 * @param Cycle Speed
 * @text 輪の速度
 * @desc 輪を回す速度
 * 数値またはJavaScript式が使えます
 * @default 0.05
 *
 * @param Cycle Anchor
 * @text 輪の角度
 * @desc メインアイコンが通る角度
 * 数値またはJavaScript式が使えます
 * @default Math.PI * (3/2)
 *
 * @param Cycle Radius
 * @text 輪の半径
 * @desc 輪の半径。
 * 数値またはJavaScript式が使えます
 * @default 120
 *
 * @param Cycle X
 * @text 輪のX位置
 * @desc 輪のX位置
 * 数値またはJavaScript式が使えます
 * @default 160
 *
 * @param Cycle Y
 * @text 輪のY位置
 * @desc 輪のY位置
 * 数値またはJavaScript式が使えます
 * @default 140
 *
 * @param -- Icon Window --
 * @text -- アイコンウィンドウ --
 * @default
 *
 * @param Icon Window X
 * @text アイコンウィンドウX位置
 * @desc コマンド(アイコン)ウィンドウのX位置
 * 数値またはJavaScript式が使えます
 * @default (Graphics.width / 2) - (this._commandWindow.width / 2)
 *
 * @param Icon Window Y
 * @text アイコンウィンドウY位置
 * @desc コマンド(アイコン)ウィンドウのY位置
 * 数値またはJavaScript式が使えます
 * @default (Graphics.height / 2) - (this._commandWindow.height / 2)
 *
 * @param Icon Window Width
 * @text アイコンウィンドウ幅
 * @desc コマンド(アイコン)ウィンドウの幅
 * 数値またはJavaScript式が使えます
 * @default 370
 *
 * @param Icon Window Height
 * @text アイコンウィンドウ高
 * @desc コマンド(アイコン)ウィンドウの高さ
 * 数値またはJavaScript式が使えます
 * @default 370
 *
 * @param -- Actor Window --
 * @text -- アクターウィンドウ --
 * @default
 *
 * @param Text Align
 * @text テキストの整列
 * @type select
 * @option 左
 * @value left
 * @option 中央
 * @value center
 * @option 右
 * @value right
 * @desc ウィンドウ内のテキスト行揃え
 * 左:left / 中央:center / 右:right
 * @default center
 * @text アクターウィンドウX
 * @desc アクターウィンドウのX位置
 * 数値またはJavaScript式が使えます
 * @default (Graphics.width / 2) - (this._statusWindow.width / 2)
 *
 * @param Actor Window Y
 * @text アクターウィンドウY
 * @desc アクターウィンドウのY位置
 * 数値またはJavaScript式が使えます
 * @default (Graphics.height / 2) - (this._statusWindow.height / 2)
 *
 * @param -- Gold Window --
 * @text -- 所持金ウィンドウ --
 * @default
 *
 * @param Gold Window X
 * @text 所持金ウィンドウX位置
 * @desc 所持金ウィンドウのX位置
 * 数値またはJavaScript式が使えます
 * @default 0
 *
 * @param Gold Window Y
 * @text 所持金ウィンドウY位置
 * @desc 所持金のウィンドウのY位置
 * 数値またはJavaScript式が使えます
 * @default Graphics.boxHeight - this._goldWindow.height
 *
 * @param -- Custom Commands --
 * @text -- カスタムコマンド --
 * @default
 *
 * @param Command Symbol 1
 * @text コマンドシンボル1
 * @desc コマンドアイコン1を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 1
 * @text コマンドアイコン1
 * @desc コマンドアイコン1を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 2
 * @text コマンドシンボル2
 * @desc コマンドアイコン2を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 2
 * @text コマンドアイコン2
 * @desc コマンドアイコン2を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 3
 * @text コマンドシンボル3
 * @desc コマンドアイコン3を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 3
 * @text コマンドアイコン3
 * @desc コマンドアイコン3を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 4
 * @text コマンドシンボル4
 * @desc コマンドアイコン4を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 4
 * @text コマンドアイコン4
 * @desc コマンドアイコン4を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 5
 * @text コマンドシンボル5
 * @desc コマンドアイコン5を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 5
 * @text コマンドアイコン5
 * @desc コマンドアイコン5を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 6
 * @text コマンドシンボル6
 * @desc コマンドアイコン6を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 6
 * @text コマンドアイコン6
 * @desc コマンドアイコン6を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 7
 * @text コマンドシンボル7
 * @desc コマンドアイコン7を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 7
 * @text コマンドアイコン7
 * @desc コマンドアイコン7を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 8
 * @text コマンドシンボル8
 * @desc コマンドアイコン8を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 8
 * @text コマンドアイコン8
 * @desc コマンドアイコン8を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 9
 * @text コマンドシンボル9
 * @desc コマンドアイコン9を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 9
 * @text コマンドアイコン9
 * @desc コマンドアイコン9を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 10
 * @text コマンドシンボル10
 * @desc コマンドアイコン10を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 10
 * @text コマンドアイコン10
 * @desc コマンドアイコン10を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 11
 * @text コマンドシンボル11
 * @desc コマンドアイコン11を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 11
 * @text コマンドアイコン11
 * @desc コマンドアイコン11を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 12
 * @text コマンドシンボル12
 * @desc コマンドアイコン12を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 12
 * @text コマンドアイコン12
 * @desc コマンドアイコン12を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 13
 * @text コマンドシンボル13
 * @desc コマンドアイコン13を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 13
 * @text コマンドアイコン13
 * @desc コマンドアイコン13を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 14
 * @text コマンドシンボル14
 * @desc コマンドアイコン14を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 14
 * @text コマンドアイコン14
 * @desc コマンドアイコン14を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 15
 * @text コマンドシンボル15
 * @desc コマンドアイコン15を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 15
 * @text コマンドアイコン15
 * @desc コマンドアイコン15を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 16
 * @text コマンドシンボル16
 * @desc コマンドアイコン16を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 16
 * @text コマンドアイコン16
 * @desc コマンドアイコン16を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 17
 * @text コマンドシンボル17
 * @desc コマンドアイコン17を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 17
 * @text コマンドアイコン17
 * @desc コマンドアイコン17を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 18
 * @text コマンドシンボル18
 * @desc コマンドアイコン18を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 18
 * @text コマンドアイコン18
 * @desc コマンドアイコン18を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 19
 * @text コマンドシンボル19
 * @desc コマンドアイコン19を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 19
 * @text コマンドアイコン19
 * @desc コマンドアイコン19を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Symbol 20
 * @text コマンドシンボル20
 * @desc コマンドアイコン20を持つコマンドのシンボル
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @param Command Icon 20
 * @text コマンドアイコン20
 * @desc コマンドアイコン20を持つコマンドのアイコン
 * パラメータに記載されている順番は関係ありません。
 * @default
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/ams-icon-cycle/
 *
 *
 * Alternative Menu Screen: Icon Cycle
 * Version 1.00
 * SumRndmDde
 *
 *
 * Changelog (v1.01): Fixed Actor Window Cancel
 *
 *
 * メインメニューをアイコンが回る形式に変えます。
 * リストの一番上にあるパラメータを使用して、
 * 使用するアイコンを設定することができます。
 * ※マウス、タッチ非対応
 *
 * ==========================================================================
 *  カスタムコマンドのアイコンを設定
 * ==========================================================================
 *
 * パラメータリストの一番下には、
 * カスタムコマンドのアイコンを入力できる場所があります。
 * まず、コマンドの'シンボル'を入力する必要があります。
 *
 * (シンボルは通常は単語です。
 * 例えば、Yanflyのメインメニューマネージャーで追加されたデバッグコマンドの
 * シンボルは'debug'(引用符なし)です。)
 *
 * そして、それが終わったら、
 * 進行中のパラメータにアイコンインデックスを配置します。
 * YEP_MainMenuManageを使用している場合、
 * コマンドのシンボルをパラメータセクションのヘルプで見つけることができます。
 *
 *
 * もしコマンドのシンボルを教えずにコマンドを追加するプラグインを
 * 持っているのであれば、そのプラグインにリンクしているYouTubeのビデオや
 * フォーラムの投稿にコメントを残してください;私はあなたを助けます。
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
 *   ~ SumRndmDde
 */

var Imported = Imported || {};

(function () {

	var icons = {};
	icons['item'] = Number(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Item Icon']);
	icons['skill'] = Number(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Skill Icon']);
	icons['equip'] = Number(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Equip Icon']);
	icons['status'] = Number(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Status Icon']);
	icons['formation'] = Number(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Formation Icon']);
	icons['options'] = Number(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Options Icon']);
	icons['save'] = Number(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Save Icon']);
	icons['gameEnd'] = Number(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Game End Icon']);

	for (var i = 1; i <= 20; i++) {
		var sym = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Command Symbol ' + i]);
		if (sym.trim().length > 0) {
			icons[sym] = Number(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Command Icon ' + i]);
		}
	}
	var _cycS = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Cycle Speed']);
	var _cycA = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Cycle Anchor']);
	var _cycR = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Cycle Radius']);
	var _cycX = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Cycle X']);
	var _cycY = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Cycle Y']);

	var _x = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Icon Window X']);
	var _y = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Icon Window Y']);
	var _w = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Icon Window Width']);
	var _h = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Icon Window Height']);

	var _actorX = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Actor Window X']);
	var _actorY = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Actor Window Y']);
	var _align = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Text Align']);
	var _goldX = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Gold Window X']);
	var _goldY = String(PluginManager.parameters('SRD_AltMenuScreen_IconCycle')['Gold Window Y']);

	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function () {
		_Scene_Menu_create.call(this);
		this._commandWindow.x = eval(_x);
		this._commandWindow.y = eval(_y);
		this._statusWindow.x = eval(_actorX);
		this._statusWindow.y = eval(_actorY);
		this._goldWindow.x = eval(_goldX);
		this._goldWindow.y = eval(_goldY);
	};
	var _Scene_Menu_commandPersonal = Scene_Menu.prototype.commandPersonal;
	Scene_Menu.prototype.commandPersonal = function () {
		this._statusWindow.open();
		_Scene_Menu_commandPersonal.call(this);
	};
	var _Scene_Menu_onPersonalCancel = Scene_Menu.prototype.onPersonalCancel;
	Scene_Menu.prototype.onPersonalCancel = function () {
		_Scene_Menu_onPersonalCancel.call(this);
		this._statusWindow.close();
	};
	var _Scene_Menu_commandFormation = Scene_Menu.prototype.commandFormation;
	Scene_Menu.prototype.commandFormation = function () {
		this._statusWindow.open();
		_Scene_Menu_commandFormation.call(this);
	};
	var _Scene_Menu_onFormationCancel = Scene_Menu.prototype.onFormationCancel;
	Scene_Menu.prototype.onFormationCancel = function () {
		if (this._statusWindow.pendingIndex() < 0) {
			this._statusWindow.close();
		}
		_Scene_Menu_onFormationCancel.call(this);
	};
	var _Scene_ItemBase_createActorWindow = Scene_ItemBase.prototype.createActorWindow;
	Scene_ItemBase.prototype.createActorWindow = function () {
		_Scene_ItemBase_createActorWindow.call(this);
		this._actorWindow.open();
	};
	var _Window_MenuCommand_initialize = Window_MenuCommand.prototype.initialize;
	Window_MenuCommand.prototype.initialize = function (x, y) {
		_Window_MenuCommand_initialize.call(this, x, y);
		this._tempIndex = -1;
		this._animationCycle = 0;
		this._animationSpeed = 0;
	};
	Window_MenuCommand.prototype.windowWidth = function () {
		return eval(_w);
	};
	Window_MenuCommand.prototype.windowHeight = function () {
		return eval(_h);
	};
	Window_MenuCommand.prototype.maxCols = function () {
		return this.maxItems();
	};
	Window_MenuCommand.prototype.numVisibleRows = function () {
		return 1;
	};
	Window_MenuCommand.prototype.textPadding = function () {
		return 6;
	};
	Window_MenuCommand.prototype.drawItem = function (index) {
		var coords = this.getCoordinatesForIndex(index);
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
		this.contents.blt(bitmap, sx, sy, pw, ph, coords.x, coords.y);
		if (!enabled) this.contents.paintOpacity = 255;
		if (this.currentData()) {
			var width = this.textWidth(this.currentData().name) + 20;
			var height = this.lineHeight();
			this.drawText(this.currentData().name, (this.width / 2) - (width / 2),
				(this.height / 2) - (height / 2), this.width);
		}
	};
	Window_MenuCommand.prototype._refreshCursor = function () {
	};
	Window_MenuCommand.prototype.getCoordinatesForIndex = function (index) {
		index = index - this.index();
		var result = { x: 0, y: 0 };
		var portions = ((Math.PI * 2) / this.maxItems());
		var angle = eval(_cycA) + (portions * index) - this._animationCycle;
		result.x = Math.round(Math.cos(angle) * eval(_cycR)) + eval(_cycX);
		result.y = Math.round(Math.sin(angle) * eval(_cycR)) + eval(_cycY);
		return result;
	};
	Window_MenuCommand.prototype.cursorLeft = function (wrap) {
		if (this._animationCycle <= 0) {
			var index = this.index();
			var maxItems = this.maxItems();
			var maxCols = this.maxCols();
			wrap = true;
			if (maxCols >= 2 && (index > 0 || (wrap))) {
				this.select((index - 1 + maxItems) % maxItems);
			}
			this._animationCycle += ((Math.PI * 2) / this.maxItems());
			this._animationSpeed = eval(_cycS);
		}
	};
	Window_MenuCommand.prototype.cursorRight = function (wrap) {
		if (this._animationCycle >= 0) {
			var index = this.index();
			var maxItems = this.maxItems();
			var maxCols = this.maxCols();
			wrap = true;
			if (maxCols >= 2 && (index < maxItems - 1 || (wrap))) {
				this.select((index + 1) % maxItems);
			}
			this._animationCycle += -((Math.PI * 2) / this.maxItems());
			this._animationSpeed = eval(_cycS);
		}
	};
	var _Window_MenuCommand_update = Window_MenuCommand.prototype.update;
	Window_MenuCommand.prototype.update = function () {
		_Window_MenuCommand_update.call(this);
		if (this._animationCycle === undefined) this._animationCycle = 0;
		if (this._tempIndex != this.index()) {
			this.contents.clear();
			this._tempIndex = this.index();
			this.drawAllItems();
		}
		if (Math.abs(this._animationCycle) > 0) {
			if (this._animationCycle > 0) this._animationCycle -= this._animationSpeed;
			if (this._animationCycle < 0) this._animationCycle += this._animationSpeed;
			if (Math.abs(this._animationCycle) < this._animationSpeed) this._animationCycle = 0;
			this.contents.clear();
			this.drawAllItems();
		}
	}
	var _Window_MenuStatus_initialize = Window_MenuStatus.prototype.initialize;
	Window_MenuStatus.prototype.initialize = function (x, y) {
		_Window_MenuStatus_initialize.call(this, x, y);
		this.openness = 0;
	};
	Window_MenuStatus.prototype.windowWidth = function () {
		return 240;
	};
	Window_MenuStatus.prototype.windowHeight = function () {
		return this.fittingHeight(this.numVisibleRows());
	};
	Window_MenuStatus.prototype.numVisibleRows = function () {
		return Math.ceil(this.maxItems() / this.maxCols());
	};
	Window_MenuStatus.prototype.itemHeight = function () {
		return this.lineHeight();
	};
	Window_MenuStatus.prototype.drawItem = function (index) {
		this.drawItemBackground(index);
		var rect = this.itemRectForText(index);
		var align = _align;
		this.resetTextColor();
		this.drawText($gameParty.members()[index].name(), rect.x, rect.y, rect.width, align);
	};
	if (Imported.YEP_MainMenuManager) {
		Scene_Menu.prototype.resizeGoldWindow = function () { };
	}
})();