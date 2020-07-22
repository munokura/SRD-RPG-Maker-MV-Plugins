/*:
 * @plugindesc Takes players to a new scene after retrying a battle. Allows users to manage skills, equips, options, etc.
 * @author SumRndmDde
 *
 * @param Retry BGM
 * @desc The Retry Scene's BGM. Leave blank to disallow.
 * Use the format: file, volume, pitch, pan
 * @default
 *
 * @param Retry Background
 * @desc The background image used for the Retry Scene. Leave blank to disallow.
 * @default
 *
 * @param Background Scroll
 * @desc The scrolling speed of the background image.
 * Use the format: x-speed, y-speed
 * @default 0, 0
 *
 * @param == Start Command ==
 * @default
 *
 * @param Start Battle Text
 * @desc The text used for the Start Battle command.
 * @default Start Battle!
 *
 * @param Start Battle Position
 * @desc The position of the Start Battle command relative to the custom commands. The choices are "top" or "bottom".
 * @default bottom
 *
 * @param Play Battle Start
 * @desc if 'true', the Battle Start Sound Effect will be played when a battle is retried.
 * @default true
 *
 * @param Pre-Play Battle BGM
 * @desc if 'true', the Battle BGM will be pre-played before the Battle Scene. This helps preload it and get it running when the battle starts.
 * @default true
 *
 * @param == Command 1 ==
 * @default
 *
 * @param Command 1 Text
 * @desc The text that appears for Custom Command 1.
 * @default Manage Equipment
 *
 * @param Command 1 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default true
 *
 * @param Command 1 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default SceneManager.push(Scene_Equip)
 *
 * @param Command 1 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 2 ==
 * @default
 *
 * @param Command 2 Text
 * @desc The text that appears for Custom Command 2.
 * @default Open Options
 *
 * @param Command 2 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default false
 *
 * @param Command 2 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default SceneManager.push(Scene_Options)
 *
 * @param Command 2 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 3 ==
 * @default
 *
 * @param Command 3 Text
 * @desc The text that appears for Custom Command 3.
 * @default Manage Skills
 *
 * @param Command 3 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default true
 *
 * @param Command 3 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default SceneManager.push(Scene_Skill)
 *
 * @param Command 3 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default false
  *
 * @param == Command 4 ==
 * @default
 *
 * @param Command 4 Text
 * @desc The text that appears for Custom Command 4.
 * @default
 *
 * @param Command 4 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 4 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 4 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 5 ==
 * @default
 *
 * @param Command 5 Text
 * @desc The text that appears for Custom Command 5.
 * @default
 *
 * @param Command 5 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 5 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 5 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 6 ==
 * @default
 *
 * @param Command 6 Text
 * @desc The text that appears for Custom Command 6.
 * @default
 *
 * @param Command 6 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 6 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 6 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 7 ==
 * @default
 *
 * @param Command 7 Text
 * @desc The text that appears for Custom Command 7.
 * @default
 *
 * @param Command 7 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 7 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 7 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 8 ==
 * @default
 *
 * @param Command 8 Text
 * @desc The text that appears for Custom Command 8.
 * @default
 *
 * @param Command 8 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 8 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 8 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 9 ==
 * @default
 *
 * @param Command 9 Text
 * @desc The text that appears for Custom Command 9.
 * @default
 *
 * @param Command 9 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 9 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 9 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 10 ==
 * @default
 *
 * @param Command 10 Text
 * @desc The text that appears for Custom Command 10.
 * @default
 *
 * @param Command 10 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 10 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 10 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 11 ==
 * @default
 *
 * @param Command 11 Text
 * @desc The text that appears for Custom Command 11.
 * @default
 *
 * @param Command 11 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 11 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 11 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 12 ==
 * @default
 *
 * @param Command 12 Text
 * @desc The text that appears for Custom Command 12.
 * @default
 *
 * @param Command 12 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 12 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 12 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 13 ==
 * @default
 *
 * @param Command 13 Text
 * @desc The text that appears for Custom Command 13.
 * @default
 *
 * @param Command 13 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 13 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 13 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 14 ==
 * @default
 *
 * @param Command 14 Text
 * @desc The text that appears for Custom Command 14.
 * @default
 *
 * @param Command 14 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 14 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 14 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 15 ==
 * @default
 *
 * @param Command 15 Text
 * @desc The text that appears for Custom Command 15.
 * @default
 *
 * @param Command 15 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 15 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 15 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 16 ==
 * @default
 *
 * @param Command 16 Text
 * @desc The text that appears for Custom Command 16.
 * @default
 *
 * @param Command 16 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 16 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 16 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 17 ==
 * @default
 *
 * @param Command 17 Text
 * @desc The text that appears for Custom Command 17.
 * @default
 *
 * @param Command 17 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 17 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 17 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 18 ==
 * @default
 *
 * @param Command 18 Text
 * @desc The text that appears for Custom Command 18.
 * @default
 *
 * @param Command 18 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 18 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 18 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 19 ==
 * @default
 *
 * @param Command 19 Text
 * @desc The text that appears for Custom Command 19.
 * @default
 *
 * @param Command 19 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 19 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 19 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @param == Command 20 ==
 * @default
 *
 * @param Command 20 Text
 * @desc The text that appears for Custom Command 20.
 * @default
 *
 * @param Command 20 Set Actor
 * @desc If 'true', then selecting this command will require the player to select an Actor before continuing.
 * @default
 *
 * @param Command 20 Eval
 * @desc The JavaScript evaluation used when this command is called. For calling a specific scene, use the format: SceneManager.push(Scene)
 * @default
 *
 * @param Command 20 Condition
 * @desc The JavaScript condition that must be true for this command to appear.
 * @default true
 *
 * @help
 *
 * Retry Upgrade
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin requires the Game Over Core plugin:
 * http://sumrndm.site/game-over-core/
 *
 * This plugin takes players to a new scene after retrying a battle. 
 * It allows users to manage skills, equips, options, etc.
 *
 *
 * ==============================================================================
 *  How to Set up Commands
 * ==============================================================================
 *
 * Using this plugin, the Retry Scene can have commands set up the same as they
 * could with plugins such as Yanfly's Main Menu Manager.
 *
 * There are four properties for each command:
 *
 *
 *   Text
 *
 * This is the name of the command and how it will appear in the command window.
 *
 *
 *   Set Actor
 *
 * If set to 'true', then the game will prompt the user to set up a menu actor
 * before preforming the command's evaluation.
 *
 *
 *   Eval
 *
 * This is the JavaScript evaluation that occurs when the command is pressed.
 * This should primarily be used to call other scenes.
 * For example  -  SceneManager.push(Scene_Item);
 *
 *
 *   Condition
 *
 * This is the JavaScript condition that determines whether the command appears.
 * Using this, commands can be shown or hidden based on different conditions.
 *
 * To make a condition based off a Switch, use the following code:
 *
 *   $gameSwitches.value(X)
 *
 * If Switch ID X is turned on, then the command will be shown.
 *   
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
 * @plugindesc 戦闘リトライ時にメニューを追加し、スキル・装備・オプション等の管理ができます。
 * @author SumRndmDde
 *
 * @param Retry BGM
 * @text リトライBGM
 * @desc リトライシーンのBGM。無効にするには無入力
 * 書式: ファイル名,音量,ピッチ,パン
 * @default
 *
 * @param Retry Background
 * @text リトライ背景
 * @desc リトライシーンの背景画像(/img/SumRndmDde/gameover/内) 
 * 無効にするには無入力
 * @default
 *
 * @param Background Scroll
 * @text 背景スクロール
 * @desc 背景画像のスクロール速度。
 * 書式: x速度, y速度
 * @default 0, 0
 *
 * @param == Start Command ==
 * @text -- 開始コマンド --
 * @default
 *
 * @param Start Battle Text
 * @text 戦闘開始テキスト
 * @desc 戦闘開始コマンドのテキスト
 * @default 戦闘開始
 *
 * @param Start Battle Position
 * @text 戦闘開始位置
 * @type select
 * @option 上
 * @value top
 * @option 下
 * @value bottom
 * @desc カスタムコマンドに対する戦闘開始コマンドの位置
 * 上:top / 下:bottom
 * @default bottom
 *
 * @param Play Battle Start
 * @text 戦闘開始時の再生
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc 戦闘がリトライされた時、戦闘開始時の効果音を再生
 * 有効:true / 無効:false
 * @default true
 *
 * @param Pre-Play Battle BGM
 * @text 戦闘シーン前に再生
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc 戦闘BGMが戦闘シーンの前に再生
 * 戦闘開始時にプリロードして起動させるのに役立つ。
 * @default true
 *
 * @param == Command 1 ==
 * @text -- コマンド1 --
 * @default
 *
 * @param Command 1 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default 装備
 *
 * @param Command 1 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default true
 *
 * @param Command 1 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default SceneManager.push(Scene_Equip)
 *
 * @param Command 1 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 2 ==
 * @text -- コマンド2 --
 * @default
 *
 * @param Command 2 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default オプション設定
 *
 * @param Command 2 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default false
 *
 * @param Command 2 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default SceneManager.push(Scene_Options)
 *
 * @param Command 2 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 3 ==
 * @text -- コマンド3 --
 * @default
 *
 * @param Command 3 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default スキル
 *
 * @param Command 3 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default true
 *
 * @param Command 3 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default SceneManager.push(Scene_Skill)
 *
 * @param Command 3 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 4 ==
 * @text -- コマンド4 --
 * @default
 *
 * @param Command 4 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default アイテム
 *
 * @param Command 4 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default false
 *
 * @param Command 4 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default SceneManager.push(Scene_Item)
 *
 * @param Command 4 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 5 ==
 * @text -- コマンド5 --
 * @default
 *
 * @param Command 5 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default メインメニュー
 *
 * @param Command 5 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default false
 *
 * @param Command 5 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default SceneManager.push(Scene_Menu)
 *
 * @param Command 5 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 6 ==
 * @text -- コマンド6 --
 * @default
 *
 * @param Command 6 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 6 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 6 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 6 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 7 ==
 * @text -- コマンド7 --
 * @default
 *
 * @param Command 7 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 7 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 7 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 7 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 8 ==
 * @text -- コマンド8 --
 * @default
 *
 * @param Command 8 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 8 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 8 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 8 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 9 ==
 * @text -- コマンド9 --
 * @default
 *
 * @param Command 9 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 9 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 9 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 9 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 10 ==
 * @text -- コマンド10 --
 * @default
 *
 * @param Command 10 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 10 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 10 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 10 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 11 ==
 * @text -- コマンド11 --
 * @default
 *
 * @param Command 11 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 11 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 11 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 11 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 12 ==
 * @text -- コマンド12 --
 * @default
 *
 * @param Command 12 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 12 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 12 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 12 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 13 ==
 * @text -- コマンド13 --
 * @default
 *
 * @param Command 13 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 13 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 13 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 13 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 14 ==
 * @text -- コマンド14 --
 * @default
 *
 * @param Command 14 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 14 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 14 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 14 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 15 ==
 * @text -- コマンド15 --
 * @default
 *
 * @param Command 15 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 15 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 15 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 15 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 16 ==
 * @text -- コマンド16 --
 * @default
 *
 * @param Command 16 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 16 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 16 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 16 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 17 ==
 * @text -- コマンド17 --
 * @default
 *
 * @param Command 17 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 17 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 17 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 17 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 18 ==
 * @text -- コマンド18 --
 * @default
 *
 * @param Command 18 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 18 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 18 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 18 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 19 ==
 * @text -- コマンド19 --
 * @default
 *
 * @param Command 19 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 19 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 19 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 19 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @param == Command 20 ==
 * @text -- コマンド20 --
 * @default
 *
 * @param Command 20 Text
 * @text 表示テキスト
 * @desc カスタムコマンドの表示テキスト
 * @default
 *
 * @param Command 20 Set Actor
 * @text アクターを選択
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc コマンド選択時、プレイヤーがアクターを選択
 * 有効:true / 無効:false
 * @default
 *
 * @param Command 20 Eval
 * @text 実行コード
 * @desc コマンド選択時に実行されるJavaScript。特定のシーンを呼び出す場合: SceneManager.push(Scene)
 * @default
 *
 * @param Command 20 Condition
 * @text 表示条件
 * @desc コマンドを表示するJavaScriptの条件(結果がtrue時のみ表示)
 * @default true
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/retry-upgrade/
 *
 * Retry Upgrade
 * Version 1.00
 * SumRndmDde
 *
 *
 * このプラグインには SRD_GameOverCore プラグインが必要です。
 * http://sumrndm.site/game-over-core/
 * プラグイン管理で、このプラグインをSRD_GameOverCoreの下側にしてください。
 *
 * このプラグインは、戦闘をリトライした後、
 * プレイヤーを新たなシーンへと導きます。
 * スキルや装備、オプションなどを管理することができます。
 *
 *
 * ==========================================================================
 *  コマンドの設定方法
 * ==========================================================================
 *
 * このプラグインを使用することで、再試行シーンでは、
 * YEP_MainMenuManager等のプラグインと同じように
 * コマンドを設定することができます。
 *
 * 各コマンドには4つのプロパティがあります。
 *
 *
 *   Text
 *
 * コマンドの名前であり、
 * コマンドウィンドウにどのように表示されるかを示しています。
 *
 *
 *   Set Actor
 *
 * 'true'に設定されている場合、ゲームはコマンドの評価を実行する前に
 * メニューアクターを設定するようにユーザーに促します。
 *
 *   Eval
 *
 * コマンドが押された時に発生するJavaScriptの評価です。
 * これは主に他のシーンの呼び出しに使うべきです。
 * 例 - SceneManager.push(Scene_Item)
 *
 *
 *   Condition
 *
 * コマンドが表示されるかを決めるJavaScriptの条件です。
 * これを利用して、様々な条件に基づいてコマンドを表示したり
 * 非表示にしたりすることができます。
 *
 * スイッチに基づいて条件を作成するには、以下のコードを使用します。
 *
 *   $gameSwitches.value(X)
 *
 * スイッチID XがONになっている場合、コマンドが表示されます。
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
SRD.RetryUpgrade = SRD.RetryUpgrade || {};

var Imported = Imported || {};
Imported["SumRndmDde Retry Upgrade"] = 1.00;

function Scene_Retry() {
	this.initialize.apply(this, arguments);
}

function Window_RetryCommand() {
	this.initialize.apply(this, arguments);
}

(function (_, __) {

	"use strict";

	//-----------------------------------------------------------------------------
	// SRD.RetryUpgrade
	//-----------------------------------------------------------------------------

	const params = PluginManager.parameters('SRD_RetryUpgrade');

	_.meetsRequirements = Imported["SumRndmDde Game Over Core"];
	_.bgm = String(params['Retry BGM']);
	_.background = String(params['Retry Background']);
	_.scroll = String(params['Background Scroll']).split(/\s*,\s*/);

	_.text = String(params['Start Battle Text']);
	_.position = String(params['Start Battle Position']).trim().toLowerCase() === 'top';
	_.battleStart = String(params['Play Battle Start']).trim().toLowerCase() === 'true';
	_.battleBgm = String(params['Pre-Play Battle BGM']).trim().toLowerCase() === 'true';

	_.commands = [];

	_.loadCommands = function () {
		for (let i = 1; i <= 20; i++) {
			const text = String(params['Command ' + i + ' Text']);
			if (text.length > 0) {
				const command = {
					name: text,
					actor: String(params['Command ' + i + ' Set Actor']).trim().toLowerCase() === 'true',
					eval: String(params['Command ' + i + ' Eval']),
					condition: String(params['Command ' + i + ' Condition'])
				}
				this.commands.push(command);
			}
		}
	};

	_.setupBgm = function () {
		if (this.bgm) {
			const info = this.bgm.split(/\s*,\s*/);
			this.bgm = {
				name: info[0],
				volume: parseInt(info[1]),
				pitch: parseInt(info[2]),
				pan: parseInt(info[3])
			}
		}
	};

	_.setupScroll = function () {
		this.xScroll = parseInt(this.scroll[0]);
		this.yScroll = parseInt(this.scroll[1]);
	};

	_.specialTilingSpriteUpdate = function () {
		TilingSprite.prototype.update.call(this);
		this.origin.x += _.xScroll;
		this.origin.y += _.yScroll;
	};

	_.alertNeedGameOverCore = function () {
		alert("The 'SRD_GameOverCore' plugin is required for using the 'SRD_RetryUpgrade' plugin.");
		if (confirm("Do you want to open the download page to 'SRD_GameOverCore'?")) {
			window.open('http://sumrndm.site/game-over-core/');
		}
	};

	_.loadCommands();
	_.setupBgm();
	_.setupScroll();

	if (!_.meetsRequirements) {
		_.alertNeedGameOverCore();
	}

	//-----------------------------------------------------------------------------
	// SRD.GameOverCore
	//-----------------------------------------------------------------------------

	__.retryBattle = function () {
		if ($gameTemp._setUpRetry) {
			BattleManager.setup($gameTemp._setUpRetry[0], $gameTemp._setUpRetry[1], $gameTemp._setUpRetry[2]);
			$gameParty = JsonEx.makeDeepCopy($gameTemp._setUpRetry[3]);
			$gameActors = JsonEx.makeDeepCopy($gameTemp._setUpRetry[4]);
			$gamePlayer.makeEncounterCount();
			SceneManager.goto(Scene_Retry);
		}
	};

	//-----------------------------------------------------------------------------
	// Scene_MenuBase
	//-----------------------------------------------------------------------------

	_.Scene_MenuBase_createBackground = Scene_MenuBase.prototype.createBackground;
	Scene_MenuBase.prototype.createBackground = function () {
		_.Scene_MenuBase_createBackground.apply(this, arguments);
		if (SceneManager.isPreviousScene(Scene_Retry)) {
			if (_.background) {
				this.removeChild(this._backgroundSprite);
				this.createRetryBackground1();
				this.createRetryBackground2();
			} else {
				this._backgroundSprite.bitmap = null;
			}
		}
	};

	Scene_MenuBase.prototype.createRetryBackground1 = function () {
		this._backgroundSprite = new TilingSprite();
		this._backgroundSprite.move(0, 0, Graphics.boxWidth, Graphics.boxHeight);
		this._backgroundSprite.bitmap = __.loadImage(_.background);
		this._backgroundSprite.update = _.specialTilingSpriteUpdate;
		this.addChild(this._backgroundSprite);
	};

	Scene_MenuBase.prototype.createRetryBackground2 = function () {
		this._backgroundSprite2 = new Sprite(new Bitmap(Graphics.boxWidth, Graphics.boxHeight));
		this._backgroundSprite2.bitmap.fillRect(0, 0, Graphics.boxWidth, Graphics.boxHeight, "rgba(0, 0, 0, 0.3)");
		this.addChild(this._backgroundSprite2);
	};

	//-----------------------------------------------------------------------------
	// Scene_Retry
	//-----------------------------------------------------------------------------

	Scene_Retry.prototype = Object.create(Scene_Base.prototype);
	Scene_Retry.prototype.constructor = Scene_Retry;

	Scene_Retry.prototype.initialize = function () {
		Scene_Base.prototype.initialize.call(this);
	};

	Scene_Retry.prototype.create = function () {
		Scene_Base.prototype.create.call(this);
		this.createBackground();
		this.createWindowLayer();
		this.createCommandWindow();
		this.createStatusWindow();
	};

	Scene_Retry.prototype.start = function () {
		Scene_Base.prototype.start.call(this);
		this._statusWindow.refresh();
		this.playRetryMusic();
		this.startFadeIn(this.fadeSpeed(), false);
	};

	Scene_Retry.prototype.isBusy = function () {
		return this._commandWindow.isClosing() || Scene_Base.prototype.isBusy.call(this);
	};

	Scene_Retry.prototype.terminate = function () {
		Scene_Base.prototype.terminate.call(this);
	};

	Scene_Retry.prototype.createBackground = function () {
		this._background = new TilingSprite();
		this._background.move(0, 0, Graphics.boxWidth, Graphics.boxHeight);
		if (_.background) {
			this._background.bitmap = __.loadImage(_.background);
			this._background.update = _.specialTilingSpriteUpdate;
		}
		this.addChild(this._background);
	};

	Scene_Retry.prototype.createCommandWindow = function () {
		this._commandWindow = new Window_RetryCommand();
		for (let i = 0; i < _.commands.length; i++) {
			const com = _.commands[i];
			const symbol = 'command' + i;
			if (com.actor) {
				this._commandWindow.setHandler(symbol, this.commandPersonal.bind(this));
			} else {
				this._commandWindow.setHandler(symbol, function () {
					eval(com.eval);
				}.bind(this));
			}

		}
		this._commandWindow.setHandler('startBattle', this.commandStartBattle.bind(this));
		this.addWindow(this._commandWindow);
	};

	Scene_Retry.prototype.createStatusWindow = function () {
		this._statusWindow = new Window_MenuStatus(0, 0);
		this._statusWindow.openness = 0;
		this._statusWindow.x = (Graphics.boxWidth - this._statusWindow.width) / 2;
		this._statusWindow.y = (Graphics.boxHeight - this._statusWindow.height) / 2;
		this._statusWindow.setHandler('ok', this.onPersonalOk.bind(this));
		this._statusWindow.setHandler('cancel', this.onPersonalCancel.bind(this));
		this.addWindow(this._statusWindow);
	};

	Scene_Retry.prototype.commandPersonal = function () {
		this._commandWindow.deactivate();
		this._statusWindow.selectLast();
		this._statusWindow.activate();
		this._statusWindow.open();
	};

	Scene_Retry.prototype.commandStartBattle = function () {
		Window_RetryCommand._lastCommandSymbol = null;
		SceneManager.goto(Scene_Battle);
	};

	Scene_Retry.prototype.onPersonalOk = function () {
		const symbol = this._commandWindow.currentSymbol();
		const id = parseInt(symbol.match(/command(\d+)/)[1]);
		eval(_.commands[id].eval);
	};

	Scene_Retry.prototype.onPersonalCancel = function () {
		this._statusWindow.deselect();
		this._statusWindow.close();
		this._commandWindow.activate();
	};

	Scene_Retry.prototype.playRetryMusic = function () {
		AudioManager.playBgm(_.bgm);
		AudioManager.stopBgs();
		AudioManager.stopMe();
	};

	Scene_Retry.prototype.stop = function () {
		Scene_Base.prototype.stop.call(this);
		if (SceneManager.isNextScene(Scene_Battle)) {
			this._commandWindow.close();
			if (_.battleStart) SoundManager.playBattleStart();
			if (_.battleBgm) BattleManager.playBattleBgm();
			this.fadeOutAll();
		}
	};

	//-----------------------------------------------------------------------------
	// Window_RetryCommand
	//-----------------------------------------------------------------------------

	Window_RetryCommand.prototype = Object.create(Window_Command.prototype);
	Window_RetryCommand.prototype.constructor = Window_RetryCommand;
	Window_RetryCommand._lastCommandSymbol = null;

	Window_RetryCommand.prototype.initialize = function () {
		Window_Command.prototype.initialize.call(this, 0, 0);
		this.updatePlacement();
		this.selectLast();
	};

	Window_RetryCommand.prototype.windowWidth = function () {
		return 420;
	};

	Window_RetryCommand.prototype.updatePlacement = function () {
		this.x = (Graphics.boxWidth - this.width) / 2;
		this.y = (Graphics.boxHeight - this.height) / 2;
	};

	Window_RetryCommand.prototype.selectLast = function () {
		if (Window_RetryCommand._lastCommandSymbol) {
			this.selectSymbol(Window_RetryCommand._lastCommandSymbol);
		}
	};

	Window_RetryCommand.prototype.processOk = function () {
		Window_RetryCommand._lastCommandSymbol = this.currentSymbol();
		Window_Command.prototype.processOk.call(this);
	};

	Window_RetryCommand.prototype.itemTextAlign = function () {
		return 'center';
	};

	_.Window_RetryCommand_drawItem = Window_RetryCommand.prototype.drawItem;
	Window_RetryCommand.prototype.drawItem = function (index) {
		if (this.commandSymbol(index) === 'startBattle') {
			var rect = this.itemRectForText(index);
			var align = this.itemTextAlign();
			this.changeTextColor("#FFFF00");
			this.changePaintOpacity(this.isCommandEnabled(index));
			this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
			this.resetTextColor();
		} else {
			_.Window_RetryCommand_drawItem.apply(this, arguments);
		}
	};

	Window_RetryCommand.prototype.addCommandToFront = function (name, symbol, enabled, ext) {
		if (enabled === undefined) {
			enabled = true;
		}
		if (ext === undefined) {
			ext = null;
		}
		this._list.unshift({ name: name, symbol: symbol, enabled: enabled, ext: ext });
	};

	Window_RetryCommand.prototype.makeCommandList = function () {
		for (let i = 0; i < _.commands.length; i++) {
			const com = _.commands[i];
			if (eval(com.condition)) {
				this.addCommand(com.name, 'command' + i);
			}
		}
		if (_.position) this.addCommandToFront(_.text, 'startBattle');
		else this.addCommand(_.text, 'startBattle');
	};

})(SRD.RetryUpgrade, SRD.GameOverCore);