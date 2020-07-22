/*:
 * @plugindesc An alternative menu based off of the menu from Kingdom Hearts.
 * @author SumRndmDde
 *
 * @param == Basic Options ==
 * @default
 *
 * @param Use Transition
 * @desc If set to 'true', the menu will use a sliding transition when opening.
 * @default true
 *
 * @param Use Characters
 * @desc If set to 'true', your menu will use the overworld sprites of the Actors as opposed to their face images.
 * @default false
 *
 * @param Use Display Name
 * @desc If set to 'true', the "Display" names of the maps will be used in the map display in the menu.
 * @default false
 *
 * @param Show TP
 * @desc If set to 'true', the Actors' TP bars will be shown in the status section.
 * @default false
 *
 * @param Max Commands
 * @desc The maximum amount of commands for the Command Window. 
 * Use if using a unique screen resolution.
 * @default 9
 *
 * @param Play Time Text
 * @desc The text that appears next to the current game time.
 * @default Play Time
 *
 * @param Currency Text
 * @desc The text that appears next to the currency.
 * @default Money
 *
 * @param Map Text
 * @desc The text that appears next to the map display.
 * @default Map
 *
 * @param Location Text
 * @desc The text that appears next to the map display.
 * @default Location
 *
 * @param == Colors ==
 * @default
 *
 * @param Play Time Color
 * @desc The color for the text that appears next to the current game time.
 * @default #80FFFF
 *
 * @param Currency Color
 * @desc The color for the text that appears next to the currency.
 * @default #FFBF00
 *
 * @param Map Color
 * @desc The color for the text that appears next to the map display.
 * @default #66FF99
 *
 * @param Location Color
 * @desc The color for the text that appears next to the location display.
 * @default #E699FF
 *
 * @param == Window Options ==
 * @default
 *
 * @param Status Position
 * @desc The position of the Status Window.
 * Choices are: 'top' or 'bottom'.
 * @default bottom
 *
 * @param Status Cols
 * @desc The amount of columns in the Status Window.
 * Increase this number on larger screen sizes.
 * @default 3
 *
 * @param Map Rows
 * @desc The amount of rows on the map window.
 * Increase or decrease as you choose.
 * @default 2
 *
 * @param Gold/Time Rows
 * @desc The amount of rows on the gold/time window.
 * Increase or decrease as you choose.
 * @default 3
 *
 * @param Command Width
 * @desc The width of the Command Window.
 * @default 240
 *
 * @param == Trans. Speed ==
 * @default
 *
 * @param Command Speed
 * @desc The speed of the Command Window during a transition into the menu.
 * @default 10
 *
 * @param Status Speed
 * @desc The speed of the Status Window during a transition into the menu.
 * @default 24
 *
 * @param Location Speed
 * @desc The speed of the Location Window during a transition into the menu.
 * @default 4
 *
 * @param Gold Speed
 * @desc The speed of the Gold/Time/Description Window during a transition into the menu.
 * @default 6
 *
 * @param == Descriptions ==
 * @default
 *
 * @param Item Desc.
 * @desc The description for the "Item" choice in the menu.
 * Use <br> to create a break line.
 * @default Item <br>The place where you can check <br>out and use your current items.
 *
 * @param Skill Desc.
 * @desc The description for the "Skill" choice in the menu.
 * Use <br> to create a break line.
 * @default Skill <br>This is where you can see your <br>Actors' Skills and use them.
 *
 * @param Equip Desc.
 * @desc The description for the "Equip" choice in the menu.
 * Use <br> to create a break line.
 * @default Equip <br>All of your armors and weapons <br>can be viewed and equipped here.
 *
 * @param Status Desc.
 * @desc The description for the "Status" choice in the menu.
 * Use <br> to create a break line.
 * @default Status <br>In-depth info about your party <br>members can be viewed with this.
 *
 * @param Formation Desc.
 * @desc The description for the "Formation" choice in the menu.
 * Use <br> to create a break line.
 * @default Formation <br>The command that can change <br>the order of your party.
 *
 * @param Options Desc.
 * @desc The description for the "Options" choice in the menu.
 * Use <br> to create a break line.
 * @default Options <br>Manipulate the settings of your <br>game here!
 *
 * @param Save Desc.
 * @desc The description for the "Save" choice in the menu.
 * Use <br> to create a break line.
 * @default Save <br>If you wish to save your game, <br>use this command to do so.
 *
 * @param Game End Desc.
 * @desc The description for the "Game End" choice in the menu.
 * Use <br> to create a break line.
 * @default Game End <br>Are you done? If so, use this <br>command to return to the title.
 *
 * @param Command Symbol 1
 * @desc The symbol for custom command 1.
 * @default
 *
 * @param Command Desc. 1
 * @desc The description for custom command 1.
 * @default
 *
 * @param Command Symbol 2
 * @desc The symbol for custom command 2.
 * @default
 *
 * @param Command Desc. 2
 * @desc The description for custom command 2.
 * @default
 *
 * @param Command Symbol 3
 * @desc The symbol for custom command 3.
 * @default
 *
 * @param Command Desc. 3
 * @desc The description for custom command 3.
 * @default
 *
 * @param Command Symbol 4
 * @desc The symbol for custom command 4.
 * @default
 *
 * @param Command Desc. 4
 * @desc The description for custom command 4.
 * @default
 *
 * @param Command Symbol 5
 * @desc The symbol for custom command 5.
 * @default
 *
 * @param Command Desc. 5
 * @desc The description for custom command 5.
 * @default
 *
 * @param Command Symbol 6
 * @desc The symbol for custom command 6.
 * @default
 *
 * @param Command Desc. 6
 * @desc The description for custom command 6.
 * @default
 *
 * @param Command Symbol 7
 * @desc The symbol for custom command 7.
 * @default
 *
 * @param Command Desc. 7
 * @desc The description for custom command 7.
 * @default
 *
 * @param Command Symbol 8
 * @desc The symbol for custom command 8.
 * @default
 *
 * @param Command Desc. 8
 * @desc The description for custom command 8.
 * @default
 *
 * @param Command Symbol 9
 * @desc The symbol for custom command 9.
 * @default
 *
 * @param Command Desc. 9
 * @desc The description for custom command 9.
 * @default
 *
 * @param Command Symbol 10
 * @desc The symbol for custom command 10.
 * @default
 *
 * @param Command Desc. 10
 * @desc The description for custom command 10.
 * @default
 *
 * @param Command Symbol 11
 * @desc The symbol for custom command 11.
 * @default
 *
 * @param Command Desc. 11
 * @desc The description for custom command 11.
 * @default
 *
 * @param Command Symbol 12
 * @desc The symbol for custom command 12.
 * @default
 *
 * @param Command Desc. 12
 * @desc The description for custom command 12.
 * @default
 *
 * @param Command Symbol 13
 * @desc The symbol for custom command 13.
 * @default
 *
 * @param Command Desc. 13
 * @desc The description for custom command 13.
 * @default
 *
 * @param Command Symbol 14
 * @desc The symbol for custom command 14.
 * @default
 *
 * @param Command Desc. 14
 * @desc The description for custom command 14.
 * @default
 *
 * @param Command Symbol 15
 * @desc The symbol for custom command 15.
 * @default
 *
 * @param Command Desc. 15
 * @desc The description for custom command 15.
 * @default
 *
 * @param Command Symbol 16
 * @desc The symbol for custom command 16.
 * @default
 *
 * @param Command Desc. 16
 * @desc The description for custom command 16.
 * @default
 *
 * @param Command Symbol 17
 * @desc The symbol for custom command 17.
 * @default
 *
 * @param Command Desc. 17
 * @desc The description for custom command 17.
 * @default
 *
 * @param Command Symbol 18
 * @desc The symbol for custom command 18.
 * @default
 *
 * @param Command Desc. 18
 * @desc The description for custom command 18.
 * @default
 *
 * @param Command Symbol 19
 * @desc The symbol for custom command 19.
 * @default
 *
 * @param Command Desc. 19
 * @desc The description for custom command 19.
 * @default
 *
 * @param Command Symbol 20
 * @desc The symbol for custom command 20.
 * @default
 *
 * @param Command Desc. 20
 * @desc The description for custom command 20.
 * @default
 *
 * @help
 *
 *
 * Alternative Menu Screen: Kingdom Hearts
 * Version 1.03
 * SumRndmDde
 *
 *
 * Gives your game an alternative menu screen.
 *
 * This menu is based off of the menu from Kingdom Hearts.
 *
 * The following is added:
 *  -  A reorganized Status Window
 *  -  A "Play Time" display
 *  -  Customizable descriptions for each command
 *  -  A map display
 *  -  A location display which can be customized per each map
 * 
 * 
 * ==========================================================================
 *  How to Set Descriptions for Commands
 * ==========================================================================
 *
 * Commands can be given descriptions that are shown in the menu.
 *
 * The default commands can be set up in the Parameters.
 * Keep in mind that since the Parameters are only one line, you'll need to
 * use the escape code: <br> to create a line break.
 *
 * Now, if you have additional commands besides the default ones, you can
 * insert descriptions for them through the "Custom Desc." Parameters.
 *
 * First, find the symbol for the command.
 * This may be located in the help file for the Plugin it was added in or 
 * displayed through some Parameters. Anyway, insert that symbol into a
 * "Command Symbol" Parameter.
 *
 * After that, simply input the description of the custom command in the
 * Parameter underneath the "Symbol" Parameter.
 *
 *
 * ==========================================================================
 *  How to Set Up Location
 * ==========================================================================
 *
 * To set up a location for your maps, use the following notetag within
 * a map's notebox:
 *
 *  <General Location: location>
 *
 * If the Player is in a map with this notetag, the "location" will appear
 * in the top-right of the menu. This allows developers to organize maps
 * into general areas and have the Player be aware of these groupings.
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
 * @plugindesc メインメニュー画面をKHに似たものにします。
 * @author SumRndmDde
 *
 * @param == Basic Options ==
 * @text -- 基本的なオプション --
 * @default
 *
 * @param Use Transition
 * @text トランジション使用
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc メニューを開く時スライド式のトランジションを有効化
 * 有効:true / 無効:false
 * @default true
 *
 * @param Use Characters
 * @text 歩行キャラ使用
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc メニューではアクターの顔画像ではなく、アクターの歩行キャラを表示
 * 有効:true / 無効:false
 * @default false
 *
 * @param Use Display Name
 * @text マップ表示名の使用
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc メニューの場所表示にマップの表示名を使用
 * 有効:true / 無効:false
 * @default false
 *
 * @param Show TP
 * @text TP表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc ステータス欄にアクターのTPバーを表示
 * 表示:true / 非表示:false
 * @default false
 *
 * @param Max Commands
 * @text コマンド最大数
 * @desc コマンドウィンドウのコマンドの最大量
 * 独自の画面解像度を使用している場合に使用します。
 * @default 9
 *
 * @param Play Time Text
 * @text プレイ時間テキスト
 * @desc 現在のプレイ時間のタイトル
 * @default プレイ時間
 *
 * @param Currency Text
 * @text 所持金テキスト
 * @desc 所持金のタイトル
 * @default 所持金
 *
 * @param Map Text
 * @text マップテキスト
 * @desc マップ表示のタイトル
 * @default マップ
 *
 * @param Location Text
 * @text 場所テキスト
 * @desc 場所表示のタイトル
 * @default 場所
 *
 * @param == Colors ==
 * @text -- 色 --
 * @default
 *
 * @param Play Time Color
 * @text プレイ時間色
 * @desc プレイ時間タイトルの文字色
 * @default #80FFFF
 *
 * @param Currency Color
 * @text 所持金の色
 * @desc 所持金タイトルの文字色
 * @default #FFBF00
 *
 * @param Map Color
 * @text マップの色
 * @desc 地図タイトルの文字色
 * @default #66FF99
 *
 * @param Location Color
 * @text 場所の色
 * @desc 位置タイトルの文字色
 * @default #E699FF
 *
 * @param == Window Options ==
 * @text -- ウィンドウオプション --
 * @default
 *
 * @param Status Position
 * @text ステータス位置
 * @type select
 * @option 上
 * @value top
 * @option 下
 * @value bottom
 * @desc ステータスウィンドウの位置
 * 上:top / 下:bottom
 * @default bottom
 *
 * @param Status Cols
 * @text ステータス列数
 * @desc ステータスウィンドウの列数
 * 画面サイズが大い場合、この数字を増やします。
 * @default 3
 *
 * @param Map Rows
 * @text マップ行数
 * @desc マップウィンドウの行数
 * @default 2
 *
 * @param Gold/Time Rows
 * @text G/T行数
 * @desc 所持金/時間ウィンドウの行数
 * @default 3
 *
 * @param Command Width
 * @text コマンド幅
 * @desc コマンドウィンドウの幅
 * @default 240
 *
 * @param == Trans. Speed ==
 * @text -- トランス・速度 --
 * @default
 *
 * @param Command Speed
 * @text コマンド速度
 * @desc メニュー遷移時のコマンドウィンドウの速度
 * @default 10
 *
 * @param Status Speed
 * @text ステータス速度
 * @desc メニュー遷移時のステータスウィンドウの表示速度
 * @default 24
 *
 * @param Location Speed
 * @text 位置速度
 * @desc メニュー遷移時の位置ウィンドウの速度
 * @default 4
 *
 * @param Gold Speed
 * @text ゴールド速度
 * @desc メニュー遷移時の金/時間/説明ウィンドウの表示速度
 * @default 6
 *
 * @param == Descriptions ==
 * @text -- 説明 --
 * @default
 *
 * @param Item Desc.
 * @text アイテム説明
 * @desc メニューの「アイテム」の説明
 * <br>を使って改行します。
 * @default アイテム<br>今持っているアイテムを<br>確認して使えます。
 *
 * @param Skill Desc.
 * @text スキルの説明
 * @desc メニューの「スキル」の説明
 * <br>を使って改行します。
 * @default スキル<br>メンバーのスキルを<br>確認して使えます。
 *
 * @param Equip Desc.
 * @text 装備の説明
 * @desc メニューの「装備」の説明
 * <br>を使って改行します。
 * @default 装備 <br>全ての防具や武器を<br>確認・装備できます。
 *
 * @param Status Desc.
 * @text ステータスの説明
 * @desc メニューの「ステータス」の説明
 * <br>を使って改行します。
 * @default ステータス<br>パーティーメンバーの詳細な情報を<br>見ることができます。
 *
 * @param Formation Desc.
 * @text 並び替えの説明
 * @desc メニューの「並び替え」の説明
 * <br>を使って改行します。
 * @default 並び替え<br>パーティの並び順を変更できます。
 *
 * @param Options Desc.
 * @text オプションの説明
 * @desc メニューの「オプション」の説明
 * <br>を使って改行します。
 * @default オプション<br>ゲームの設定を変更できます。
 *
 * @param Save Desc.
 * @text 保存の説明
 * @desc メニューの「セーブ」の説明
 * <br>を使って改行します。
 * @default セーブ<br>ゲームを保存したい場合、<br>このコマンドを使用してください。
 *
 * @param Game End Desc.
 * @text ゲーム終了の説明
 * @desc メニューの「ゲーム終了」の説明
 * <br>を使って改行します。
 * @default ゲーム終了<br>このコマンドを使うと<br>タイトルに戻ります。
 *
 * @param Command Symbol 1
 * @text コマンド1シンボル
 * @desc カスタムコマンド1のシンボル
 * @default
 *
 * @param Command Desc. 1
 * @text コマンド1説明
 * @desc カスタムコマンド1の説明
 * @default
 *
 * @param Command Symbol 2
 * @text コマンド2シンボル
 * @desc カスタムコマンド2のシンボル
 * @default
 *
 * @param Command Desc. 2
 * @text コマンド2説明
 * @desc カスタムコマンド2の説明
 * @default
 *
 * @param Command Symbol 3
 * @text コマンド3シンボル
 * @desc カスタムコマンド3のシンボル
 * @default
 *
 * @param Command Desc. 3
 * @text コマンド3説明
 * @desc カスタムコマンド3の説明
 * @default
 *
 * @param Command Symbol 4
 * @text コマンド4シンボル
 * @desc カスタムコマンド4のシンボル
 * @default
 *
 * @param Command Desc. 4
 * @text コマンド4説明
 * @desc カスタムコマンド4の説明
 * @default
 *
 * @param Command Symbol 5
 * @text コマンド5シンボル
 * @desc カスタムコマンド5のシンボル
 * @default
 *
 * @param Command Desc. 5
 * @text コマンド5説明
 * @desc カスタムコマンド5の説明
 * @default
 *
 * @param Command Symbol 6
 * @text コマンド6シンボル
 * @desc カスタムコマンド6のシンボル
 * @default
 *
 * @param Command Desc. 6
 * @text コマンド6説明
 * @desc カスタムコマンド6の説明
 * @default
 *
 * @param Command Symbol 7
 * @text コマンド7シンボル
 * @desc カスタムコマンド7のシンボル
 * @default
 *
 * @param Command Desc. 7
 * @text コマンド7説明
 * @desc カスタムコマンド7の説明
 * @default
 *
 * @param Command Symbol 8
 * @text コマンド8シンボル
 * @desc カスタムコマンド8のシンボル
 * @default
 *
 * @param Command Desc. 8
 * @text コマンド8説明
 * @desc カスタムコマンド8の説明
 * @default
 *
 * @param Command Symbol 9
 * @text コマンド9シンボル
 * @desc カスタムコマンド9のシンボル
 * @default
 *
 * @param Command Desc. 9
 * @text コマンド9説明
 * @desc カスタムコマンド9の説明
 * @default
 *
 * @param Command Symbol 10
 * @text コマンド10シンボル
 * @desc カスタムコマンド10のシンボル
 * @default
 *
 * @param Command Desc. 10
 * @text コマンド10説明
 * @desc カスタムコマンド10の説明
 * @default
 *
 * @param Command Symbol 11
 * @text コマンド11シンボル
 * @desc カスタムコマンド11のシンボル
 * @default
 *
 * @param Command Desc. 11
 * @text コマンド11説明
 * @desc カスタムコマンド11の説明
 * @default
 *
 * @param Command Symbol 12
 * @text コマンド12シンボル
 * @desc カスタムコマンド12のシンボル
 * @default
 *
 * @param Command Desc. 12
 * @text コマンド12説明
 * @desc カスタムコマンド12の説明
 * @default
 *
 * @param Command Symbol 13
 * @text コマンド13シンボル
 * @desc カスタムコマンド13のシンボル
 * @default
 *
 * @param Command Desc. 13
 * @text コマンド13説明
 * @desc カスタムコマンド13の説明
 * @default
 *
 * @param Command Symbol 14
 * @text コマンド14シンボル
 * @desc カスタムコマンド14のシンボル
 * @default
 *
 * @param Command Desc. 14
 * @text コマンド14説明
 * @desc カスタムコマンド14の説明
 * @default
 *
 * @param Command Symbol 15
 * @text コマンド15シンボル
 * @desc カスタムコマンド15のシンボル
 * @default
 *
 * @param Command Desc. 15
 * @text コマンド15説明
 * @desc カスタムコマンド15の説明
 * @default
 *
 * @param Command Symbol 16
 * @text コマンド16シンボル
 * @desc カスタムコマンド16のシンボル
 * @default
 *
 * @param Command Desc. 16
 * @text コマンド16説明
 * @desc カスタムコマンド16の説明
 * @default
 *
 * @param Command Symbol 17
 * @text コマンド17シンボル
 * @desc カスタムコマンド17のシンボル
 * @default
 *
 * @param Command Desc. 17
 * @text コマンド17説明
 * @desc カスタムコマンド17の説明
 * @default
 *
 * @param Command Symbol 18
 * @text コマンド18シンボル
 * @desc カスタムコマンド18のシンボル
 * @default
 *
 * @param Command Desc. 18
 * @text コマンド18説明
 * @desc カスタムコマンド18の説明
 * @default
 *
 * @param Command Symbol 19
 * @text コマンド19シンボル
 * @desc カスタムコマンド19のシンボル
 * @default
 *
 * @param Command Desc. 19
 * @text コマンド19説明
 * @desc カスタムコマンド19の説明
 * @default
 *
 * @param Command Symbol 20
 * @text コマンド20シンボル
 * @desc カスタムコマンド20のシンボル
 * @default
 *
 * @param Command Desc. 20
 * @text コマンド20説明
 * @desc カスタムコマンド20の説明
 * @default
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/ams-kingdom-hearts/
 *
 *
 * Alternative Menu Screen: Kingdom Hearts
 * Version 1.03
 * SumRndmDde
 *
 *
 * メインメニュー画面をKHに似たものにします。
 *
 *
 * 以下を追加しました。
 *  - ステータスウィンドウの変更
 *  - 'プレイ時間'の表示
 *  - 各コマンドのカスタマイズ可能な説明
 *  - マップ表示
 *  - マップ毎にカスタマイズできる位置情報表示
 *
 *
 * ==========================================================================
 *  コマンドの説明文の設定方法
 * ==========================================================================
 *
 * コマンドには、メニューに表示される説明を与えることができます。
 *
 * デフォルトのコマンドはパラメータで設定できます。
 * パラメータは1行だけなので、
 * <br>を使って改行する必要があることに注意してください。
 * デフォルトのコマンド以外にも追加のコマンドがある場合、
 * "Custom Desc." パラメータを使ってそれらの説明を挿入することができます。
 * まず、コマンドのシンボルを探します。
 * それが追加されたプラグインのヘルプファイルにあるかもしれませんし、
 * いくつかのパラメータを通して表示されるかもしれません。
 * そのシンボルを"Command Symbol"パラメータに挿入してください。
 *
 * 後は、'Symbol'パラメータの下にあるパラメータに
 * カスタムコマンドの説明を入力するだけです。
 *
 *
 * ==========================================================================
 *  位置情報の設定方法
 * ==========================================================================
 *
 * マップの場所を設定するには、マップのメモ欄内で次のメモタグを使用します。
 *
 *  <General Location: location>
 *
 * このメモタグが付いたマップの中にいると、
 * メニューの右上に'location'が表示されます。
 * 開発者はマップを一般的なエリアに整理し、
 * プレイヤーにそのグループ分けを意識させることができます。
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

(function () {

	"use strict";

	var params = PluginManager.parameters('SRD_AltMenuScreen_KH');

	var descs = {};
	descs['item'] = String(params['Item Desc.']);
	descs['skill'] = String(params['Skill Desc.']);
	descs['equip'] = String(params['Equip Desc.']);
	descs['status'] = String(params['Status Desc.']);
	descs['formation'] = String(params['Formation Desc.']);
	descs['options'] = String(params['Options Desc.']);
	descs['save'] = String(params['Save Desc.']);
	descs['gameEnd'] = String(params['Game End Desc.']);

	for (var i = 1; i <= 20; i++) {
		var sym = String(params['Command Symbol ' + i]);
		if (sym.trim().length > 0) {
			descs[sym] = String(params['Command Desc. ' + i]);
		}
	}

	var transition = String(params['Use Transition']).trim().toLowerCase() === 'true';
	var useCharacters = String(params['Use Characters']).trim().toLowerCase() === 'true';
	var useDisplayName = String(params['Use Display Name']).trim().toLowerCase() === 'true';
	var drawTp = String(params['Show TP']).trim().toLowerCase() === 'true';
	var maxCommands = parseInt(params['Max Commands']);
	var playTimeText = String(params['Play Time Text']);
	var currencyText = String(params['Currency Text']);
	var mapText = String(params['Map Text']);
	var locationText = String(params['Location Text']);
	var squishPlayTime = true;
	var characterSizeX = 48;
	var characterSizeY = 48;
	var statusPosition = String(params['Status Position']).trim().toLowerCase();
	var commandWidth = parseInt(params['Command Width']);
	var statusCols = parseInt(params['Status Cols']);
	var mapColor = String(params['Map Color']);
	var goldColor = String(params['Currency Color']);
	var timeColor = String(params['Play Time Color']);
	var locationColor = String(params['Location Color']);
	var xSpeed = parseInt(params['Command Speed']);//10;
	var xSpeed2 = parseInt(params['Status Speed']);//24;
	var ySpeed = parseInt(params['Location Speed']);//4;
	var ySpeed2 = parseInt(params['Gold Speed']);//6;

	var m_rows = parseInt(params['Map Rows']);
	var gt_rows = parseInt(params['Gold/Time Rows']);

	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function () {
		_Scene_Menu_create.call(this);
		this._windowLayer.removeChild(this._goldWindow);
		this._windowGoldAndTime = new Window_GoldAndTime(0, 0, this._commandWindow);
		this._windowLocation = new Window_Location(0, 0);
		this._windowGoldAndTime.y = Graphics.boxHeight - this._windowGoldAndTime.height;
		this.addWindow(this._windowGoldAndTime);
		this.addWindow(this._windowLocation);

		this._commandWindow.y = this._windowLocation.y + this._windowLocation.height;
		if (statusPosition === 'top') this._statusWindow.y = this._commandWindow.y;
		else this._statusWindow.y = this._windowGoldAndTime.y - this._statusWindow.height;

		if (transition && SceneManager.isPreviousScene(Scene_Map)) {
			this._menuTransitionInfo = [this._commandWindow.x, this._statusWindow.x, this._windowGoldAndTime.y, this._windowLocation.y];
			this._commandWindow.x = -this._commandWindow.width;
			this._statusWindow.x = Graphics.width;
			this._windowGoldAndTime.y = Graphics.height;
			this._windowLocation.y = -this._windowLocation.height;

			this._isUpdating = true;
		} else {
			this._isUpdating = false;
		}
	};
	if (transition) {
		var _Scene_Menu_update = Scene_Menu.prototype.update;
		Scene_Menu.prototype.update = function () {
			_Scene_Menu_update.call(this);
			if (this._isUpdating) {
				if (this._commandWindow.x < this._menuTransitionInfo[0] - xSpeed) this._commandWindow.x += xSpeed;
				else this._commandWindow.x = this._menuTransitionInfo[0];
				if (this._statusWindow.x > this._menuTransitionInfo[1] + xSpeed2) this._statusWindow.x -= xSpeed2;
				else this._statusWindow.x = this._menuTransitionInfo[1];

				if (this._windowLocation.y < this._menuTransitionInfo[3] - ySpeed) this._windowLocation.y += ySpeed;
				else this._windowLocation.y = this._menuTransitionInfo[3];
				if (this._windowGoldAndTime.y > this._menuTransitionInfo[2] + ySpeed2) this._windowGoldAndTime.y -= ySpeed2;
				else this._windowGoldAndTime.y = this._menuTransitionInfo[2];

				if (this._commandWindow.x === this._menuTransitionInfo[0] && this._statusWindow.x === this._menuTransitionInfo[1] &&
					this._windowGoldAndTime.y === this._menuTransitionInfo[2] && this._windowLocation.y === this._menuTransitionInfo[3]) {
					this._isUpdating = false;
				}
			}
		};
	}

	if (useCharacters) {
		Window_Base.prototype.drawCharacterAnimated = function (characterName, characterIndex, x, y, width, height, frame) {
			var bitmap = ImageManager.loadCharacter(characterName);
			var big = ImageManager.isBigCharacter(characterName);
			var pw = bitmap.width / (big ? 3 : 12);
			var ph = bitmap.height / (big ? 4 : 8);
			var n = characterIndex;
			var sx = ((n % 4 * 3 + 1) * pw) + (frame * 48);
			var sy = ((Math.floor(n / 4) * 4) * ph);
			this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph, width, height);
		};
	}

	Window_MenuCommand.prototype.windowWidth = function () {
		return commandWidth;
	};
	Window_MenuCommand.prototype.numVisibleRows = function () {
		return Math.min(this.maxItems(), maxCommands);
	};

	var _Window_MenuStatus_initialize = Window_MenuStatus.prototype.initialize;
	Window_MenuStatus.prototype.initialize = function (x, y) {
		_Window_MenuStatus_initialize.call(this, x, y);
		this._tick = 0;
		this._frame = 0;
	};
	Window_MenuStatus.prototype.windowWidth = function () {
		return Graphics.boxWidth - commandWidth;
	};
	Window_MenuStatus.prototype.windowHeight = function () {
		var result = Graphics.height - Window_GoldAndTime.prototype.windowHeight.call(this) - Window_Location.prototype.windowHeight.call(this);
		if (useCharacters) {
			result *= (3 / 4);
			result -= this.lineHeight();
			if (!drawTp) result -= this.lineHeight();
		}
		return result;
	};
	Window_MenuStatus.prototype.maxCols = function () {
		return statusCols;
	};
	Window_MenuStatus.prototype.numVisibleRows = function () {
		return 1;
	};
	Window_MenuStatus.prototype.drawActorName = function (actor, x, y, width) {
		width = width || 168;
		this.changeTextColor(this.hpColor(actor));
		var direction = (useCharacters) ? 'right' : 'left';
		this.drawText(actor.name(), x, y, width, direction);
	};
	if (useCharacters) {
		var _Window_MenuStatus_update = Window_MenuStatus.prototype.update;
		Window_MenuStatus.prototype.update = function () {
			_Window_MenuStatus_update.call(this);
			this._tick += 1;
			if (this._tick >= 20) {
				this._frame += 1;
				if (this._frame > 2) this._frame = -1;
				this.refresh();
				this._tick = 0;
			}
		};
	}
	Window_MenuStatus.prototype.drawItemImage = function (index) {
		var actor = $gameParty.members()[index];
		var rect = this.itemRect(index);
		this.changePaintOpacity(actor.isBattleMember());
		if (useCharacters) {
			var frame = (this._frame === 2) ? 0 : this._frame;
			this.drawCharacterAnimated(actor.characterName(), actor.characterIndex(),
				rect.x + (characterSizeX / 2), rect.y + (characterSizeY), characterSizeX, characterSizeY, frame);
		} else {
			this.drawActorFace(actor, rect.x + (rect.width / 2) - (Window_Base._faceWidth / 2), rect.y, Window_Base._faceWidth, Window_Base._faceHeight);
		}
		this.changePaintOpacity(true);
	};
	Window_MenuStatus.prototype.drawItemStatus = function (index) {
		var actor = $gameParty.members()[index];
		var rect = this.itemRect(index);
		var x = rect.x + 4;
		var y = rect.y;
		if (!useCharacters) y += (rect.height / 2);
		else y += (characterSizeY / 2);
		if (drawTp && !useCharacters) {
			y -= this.lineHeight() / 2;
		}
		var width = rect.width - 8;
		var lineHeight = this.lineHeight();
		this.drawActorName(actor, x, y, width);
		this.drawActorLevel(actor, x, y + lineHeight, width);
		this.drawActorHp(actor, x, y + lineHeight * 2, width);
		this.drawActorMp(actor, x, y + lineHeight * 3, width);
		if (drawTp) this.drawActorTp(actor, x, y + lineHeight * 4, width);
		this.resetFontSettings();
	};

	function Window_GoldAndTime() {
		this.initialize.apply(this, arguments);
	}
	Window_GoldAndTime.prototype = Object.create(Window_Base.prototype);
	Window_GoldAndTime.prototype.constructor = Window_GoldAndTime;
	Window_GoldAndTime.prototype.initialize = function (x, y, commandWindow) {
		var width = this.windowWidth();
		var height = this.windowHeight();
		Window_Base.prototype.initialize.call(this, x, y, width, height);
		this._commandWindow = commandWindow;
		this._value = "";
		this.refresh();
	};
	Window_GoldAndTime.prototype.windowWidth = function () {
		return Graphics.width;
	};
	Window_GoldAndTime.prototype.windowHeight = function () {
		return this.fittingHeight(gt_rows);
	};
	Window_GoldAndTime.prototype.refresh = function () {
		var x = this.textPadding();
		var y1 = (this.contentsHeight() / 4) - (this.windowHeight() / 8);
		var y2 = (this.contentsHeight() * (3 / 4)) - (this.windowHeight() / 8);
		var width = (this.contents.width - this.textPadding() * 2) * (1 / 3);
		this.contents.clear();
		this.setTextColor1();
		this.drawText(currencyText, x, y1, width2, 'left');
		this.resetTextColor();
		this.drawCurrencyValue(this.value(), this.currencyUnit(), x, y1, width);
		this.resetTextColor();
		var width2 = (squishPlayTime) ? width - this.textWidth("00:00:00") : width;
		this.drawTime();
		this.drawVertLine(width + 30);
		this.drawVertLine(width + 40);
		var x2 = width + 70;
		this.drawCommand();
	};
	Window_GoldAndTime.prototype.drawTime = function () {
		var x = this.textPadding();
		var y = (this.contentsHeight() * (3 / 4)) - (this.windowHeight() / 8);
		var width = (this.contents.width - this.textPadding() * 2) * (1 / 3);
		var width2 = (squishPlayTime) ? width - this.textWidth("00:00:00") : width;
		this.contents.clearRect(x, y, width + 10, this.lineHeight())
		this.setTextColor2();
		this.drawText(playTimeText, x, y, width2, 'left');
		this.resetTextColor();
		this.drawText($gameSystem.playtimeText(), x, y, width, 'right');
	};
	Window_GoldAndTime.prototype.drawCommand = function () {
		if (this._value != this._commandWindow.currentData().symbol) {
			var width = (this.contents.width - this.textPadding() * 2) * (1 / 3);
			var width3 = this.contents.width - this.textPadding() * 2 - (x2);
			var x2 = width + 70;
			this._value = this._commandWindow.currentData().symbol;
			if (descs[this._value]) {
				var text = descs[this._value].replace(/<br>/gi, function () {
					return "\n";
				}.bind(this));
				this.drawTextEx(text, x2, 0);
			}
		}
	};
	Window_GoldAndTime.prototype.drawVertLine = function (x) {
		this.contents.paintOpacity = 48;
		this.contents.fillRect(x, 0, 2, this.contentsHeight(), this.normalColor());
		this.contents.paintOpacity = 255;
	};
	Window_GoldAndTime.prototype.value = function () {
		return $gameParty.gold();
	};
	Window_GoldAndTime.prototype.currencyUnit = function () {
		return TextManager.currencyUnit;
	};
	Window_GoldAndTime.prototype.open = function () {
		this.refresh();
		Window_Base.prototype.open.call(this);
	};
	Window_GoldAndTime.prototype.update = function () {
		this.drawTime();
		if (this._value != this._commandWindow.currentData().symbol) {
			this.refresh();
		}
		Window_Base.prototype.update.call(this);
	};
	Window_GoldAndTime.prototype.setTextColor1 = function () {
		this.changeTextColor(goldColor);
	};
	Window_GoldAndTime.prototype.setTextColor2 = function () {
		this.changeTextColor(timeColor);
	};

	function Window_Location() {
		this.initialize.apply(this, arguments);
	}
	Window_Location.prototype = Object.create(Window_Base.prototype);
	Window_Location.prototype.constructor = Window_Location;
	Window_Location.prototype.initialize = function (x, y) {
		var width = this.windowWidth();
		var height = this.windowHeight();
		Window_Base.prototype.initialize.call(this, x, y, width, height);
		this.refresh();
	};
	Window_Location.prototype.windowWidth = function () {
		return Graphics.width;
	};
	Window_Location.prototype.windowHeight = function () {
		return this.fittingHeight(m_rows);
	};
	Window_Location.prototype.drawVertLine = function (x) {
		this.contents.paintOpacity = 48;
		this.contents.fillRect(x, 0, 2, this.contentsHeight(), this.normalColor());
		this.contents.paintOpacity = 255;
	};
	Window_Location.prototype.refresh = function () {
		var width = this.contents.width - this.textPadding() * 2;
		var x = this.textPadding();
		var x2 = Math.floor(width * (1 / 3));
		var x3 = Math.floor(width * (2 / 3));
		var y1 = (this.contentsHeight() / 4) - (this.windowHeight() / 8);
		var y2 = (this.contentsHeight() * (3 / 4)) - (this.windowHeight() / 8);
		this.contents.clear();
		this.contents.fontSize = 48;
		this.drawText("Menu", 0, (this.contentsHeight() / 2) - (this.lineHeight() / 2), (width / 3), 'center');
		this.resetFontSettings();
		var mapName = (useDisplayName) ? $gameMap.displayName() : $dataMapInfos[$gameMap.mapId()].name;
		this.setTextColor1();
		this.drawText(mapText, x2 + ((x2 / 2) - (this.textWidth(mapText) / 2)), y1, width, 'left');
		this.resetTextColor();
		this.drawText(mapName, x2 + ((x2 / 2) - (this.textWidth(mapName) / 2)), y2, width, 'left');
		if ($dataMap.meta["General Location"]) {
			this.setTextColor2();
			this.drawText(locationText, x3 + ((x2 / 2) - (this.textWidth(locationText) / 2)) + 10, y1, width, 'left');
			this.resetTextColor();
			var text = $dataMap.meta["General Location"];
			this.drawText(text, x3 + ((x2 / 2) - (this.textWidth(text) / 2)), y2, width, 'left');
		}
	};
	Window_Location.prototype.setTextColor1 = function () {
		this.changeTextColor(mapColor);
	};
	Window_Location.prototype.setTextColor2 = function () {
		this.changeTextColor(locationColor);
	};
	Window_Location.prototype.open = function () {
		this.refresh();
		Window_Base.prototype.open.call(this);
	};

})();