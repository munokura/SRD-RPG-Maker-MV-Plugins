/*: 
 * @plugindesc A Timed Attack that requires the Player to push the arrow keys in the sequence shown on screen.
 * @author SumRndmDde
 *
 * @param Up Condition
 * @desc The JavaScript condition that must be true for the ”Up” command to be processed.
 * @default Input.isTriggered('up')
 *
 * @param Right Condition
 * @desc The JavaScript condition that must be true for the ”Right” command to be processed.
 * @default Input.isTriggered('right')
 *
 * @param Down Condition
 * @desc The JavaScript condition that must be true for the ”Down” command to be processed.
 * @default Input.isTriggered('down')
 *
 * @param Left Condition
 * @desc The JavaScript condition that must be true for the ”Left” command to be processed.
 * @default Input.isTriggered('left')
 *
 * @param == Default Props. ==
 * @default
 *
 * @param Normal SE
 * @desc The default Normal SE when one is not specified.
 * Input filename of Sound Effect in /audio/se/
 * @default Wind4
 *
 * @param Miss SE
 * @desc The default Miss SE when one is not specified.
 * Input filename of Sound Effect in /audio/se/
 * @default Buzzer1
 *
 * @param Success SE
 * @desc The default Success SE when one is not specified.
 * Input filename of Sound Effect in /audio/se/
 * @default Bell3
 *
 * @param Fail SE
 * @desc The default Fail SE when one is not specified.
 * Input filename of Sound Effect in /audio/se/
 * @default Break
 *
 * @param Image
 * @desc The default Image when one is not specified.
 * Input filename of Image in /img/SumRndmDde/tas/
 * @default Arrows
 *
 * @param Phrase
 * @desc The default Phrase when one is not specified.
 * Input a word or phrase. %1 will represent the counter.
 * @default Time Limit: %1
 *
 * @param Command Amount
 * @desc The default Command Amount when one is not specified.
 * Input a Positive Number.
 * @default 4
 *
 * @param Randomize Commands
 * @desc Determines whether the commands are randomized.
 * Input 'true' or a specific pattern like: 'up, down, left'.
 * @default true
 *
 * @param Frames
 * @desc The default Frames when one is not specified.
 * Input a Positive Number.
 * @default 150
 *
 * @param Penalty
 * @desc The default Penalty when one is not specified.
 * Input a Positive Number of Frames to lose.
 * @default 40
 *
 * @param Success Power
 * @desc The default Success Power when one is not specified.
 * Input a Positive Number or JavaScript eval.
 * @default 1
 *
 * @param Fail Power
 * @desc The default Success Power when one is not specified.
 * Input a Positive Number or JavaScript eval.
 * @default 0
 *
 * @param Above Height
 * @desc The default Above Height when one is not specified.
 * Input a Positive Number.
 * @default 130
 *
 * @param Hit Animation
 * @desc The default Animation when one is not specified.
 * Use the format: opacity, x-scale, y-scale, x-move, y-move
 * @default -20, 0.1, 0.1, -2, -2
 *
 * @param Flash Rate
 * @desc The default Flash Rate when one is not specified.
 * Input a Positive Number
 * @default 16
 *
 * @param Flash Time
 * @desc The default Flash Time when one is not specified.
 * Input a Positive Number
 * @default 40
 *
 * @help
 *
 * Timed Attack: Arrows
 * Version 1.03
 * SumRndmDde
 *
 *
 * This Plugin requires the Timed Attack Core Plugin (SRD_TimedAttackCore)
 * http://sumrndm.site/timed-attack-core
 *
 *A Timed Attack that requires the Player to push the arrow keys in the 
 * sequence shown on screen.
 *
 * When an Actor uses this Timed Attack, images will appear in a sequence.
 * Each image will point in a direction and the Player must push the arrow
 * keys in the specified directions. The sequence is from left to right.
 *
 *
 * ==========================================================================
 *  How to Customize Skill's Damage/Effect from Timed Attack
 * ==========================================================================
 *
 * Use $gameTemp.tas_power to have the power affect the skill.
 * This value will be a value from 0 to 1 depending on how close the 
 * ”Timed Attack” was to being perfect.
 *
 * For example:
 * (a.atk * 4 - b.def * 2) * ($gameTemp.tas_power)
 *
 * In that example, getting a perfect hit in the ”Timed Attack” would result
 * in full damage, and getting any besides perfect would give only a percent
 * of the full damage.
 *
 *
 * ==========================================================================
 *  How to Set a Skill to Use a Timed Attack (Arrows)
 * ==========================================================================
 *
 * Use the Notetag:
 *
 * <Timed Attack: arrows>
 * <End Timed Attack>
 *
 * Setting those in a Skill's notebox will activate the ”Timed Attack System”
 * for that Skill.
 *
 * The part that says ”arrows” can be changed to have other types of ”Timed
 * Attacks” be used.
 *
 *
 * ==========================================================================
 *  Arrows Timed Attack Properties
 * ==========================================================================
 *
 * You can manipulate the properties of each Timed Attack by adding them
 * in the Notetags. For example:
 *
 * <Timed Attack: arrows>
 * Command Amount: 3
 * Randomize Commands?: up, down, up
 * Frames: 80
 * <End Timed Attack>
 *
 * As you can see, there are a couple of factors you can use to even make one
 * individual Timed Attack different for each Skill it is used with.
 *
 *
 * Here are all the properties for Arrows Timed Attack:
 *
 * Normal SE:        (Input filename of Sound Effect in /audio/se/)
 * Miss SE:          (Input filename of Sound Effect in /audio/se/)
 * Success SE:       (Input filename of Sound Effect in /audio/se/)
 * Fail SE:          (Input filename of Sound Effect in /audio/se/)
 * Image:            (Input filename of for in /img/SumRndmDde/tas/)
 * Phrase:           (Input a word or phrase. %1 will represent the counter)
 * Command Amount:   (Input a Positive Number)
 * Randomize Commands:(Input 'true' or a specific pattern)
 * Frames:           (Input a Positive Number)
 * Penalty:          (Input a Positive Number)
 * Above Height:     (Input a Positive Number)
 * Success Power:    (Input a Positive Number or JavaScript eval)
 * Fail Power:       (Input a Positive Number or JavaScript eval)
 * Hit Animation:    (Use the format: opacity, x-scale, y-scale, x-move, y-move)
 * Flash Rate:       (Input a Positive Number)
 * Flash Time:       (Input a Positive Number)
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
 * @plugindesc プレイヤーが画面に表示された順序で矢印キーを押す必要があるタイミング攻撃を追加できます。
 * @author SumRndmDde
 * 
 * @param Up Condition
 * @text 上判定
 * @desc 「上」コマンドをtrueとする JavaScript式。
 * 
 * @param Right Condition
 * @text 右判定
 * @desc 「右」コマンドをtrueとする JavaScript式。
 * @default Input.isTriggered('right')
 * 
 * @param Down Condition
 * @text 下判定
 * @desc 「下」コマンドをtrueとする JavaScript式。
 * @default Input.isTriggered('down')
 * 
 * @param Left Condition
 * @text 左判定
 * @desc 「左」コマンドをtrueとする JavaScript式。
 * @default Input.isTriggered('left')
 * 
 * @param == Default Props. ==
 * @text == デフォルト ==
 * @default
 * 
 * @param Normal SE
 * @text 通常のSE
 * @desc デフォルト通常SE。/audio/se/ 内のSEのファイル名
 * @type file
 * @require 1
 * @dir audio/se
 * @default Wind4
 * @parent == Default Props. ==
 * 
 * @param Miss SE
 * @text ミスSE
 * @desc デフォルト失敗SE。/audio/se/ 内のSEのファイル名
 * @type file
 * @require 1
 * @dir audio/se
 * @default Buzzer1
 * @parent == Default Props. ==
 * 
 * @param Success SE
 * @text 成功SE
 * @desc デフォルト成功SE。/audio/se/ 内のSEのファイル名
 * @type file
 * @require 1
 * @dir audio/se
 * @default Bell3
 * @parent == Default Props. ==
 * 
 * @param Fail SE
 * @text 失敗SE
 * @desc デフォルト失敗SE。/audio/se/ 内のSEのファイル名
 * @type file
 * @require 1
 * @dir audio/se
 * @default Break
 * @parent == Default Props. ==
 * 
 * @param Image
 * @text 画像
 * @desc デフォルト画像。/img/SumRndmDde/tas/ 内の画像のファイル名
 * @require 1
 * @default Arrows
 * @parent == Default Props. ==
 * 
 * @param Phrase
 * @text 見出し
 * @desc デフォルト見出しを入力。%1 はカウントを表示します。
 * @default 残り時間: %1
 * @parent == Default Props. ==
 * 
 * @param Command Amount
 * @text コマンド量
 * @desc デフォルトコマンド量。正の値を入力。
 * @default 4
 * @parent == Default Props. ==
 * 
 * @param Randomize Commands
 * @text デフォルトコマンドを指定
 * @desc ランダムなら true 。固定指定は up, down, up などの特定のパターンを入力。
 * @default true
 * @parent == Default Props. ==
 * 
 * @param Frames
 * @text フレーム
 * @desc デフォルトフレーム値。正の値を入力。
 * @type number
 * @default 150
 * @parent == Default Props. ==
 * 
 * @param Penalty
 * @text ペナルティ
 * @desc デフォルトペナルティ。減少するフレームの正の値を入力。
 * @type number
 * @default 40
 * @parent == Default Props. ==
 * 
 * @param Success Power
 * @text 成功パワー
 * @desc デフォルト成功パワー。正の値またはJavaScript式を入力。
 * @default 1
 * @parent == Default Props. ==
 * 
 * @param Fail Power
 * @text 失敗パワー
 * @desc デフォルト成功パワー。正の値またはJavaScript式を入力。
 * @default 0
 * @parent == Default Props. ==
 * 
 * @param Above Height
 * @text 高さ
 * @type number
 * @desc デフォルト高さ。正の値を入力。 -
 * @default 130
 * @parent == Default Props. ==
 * 
 * @param Hit Animation
 * @text ヒット アニメーション
 * @desc デフォルトアニメーション。形式は、不透明度、x スケール、y スケール、x 移動、y 移動です。
 * @default -20, 0.1, 0.1, -2, -2
 * @parent == Default Props. ==
 * 
 * @param Flash Rate
 * @text フラッシュ レート
 * @desc デフォルトフラッシュ レート。正の値を入力。
 * @type number
 * @default 16
 * @parent == Default Props. ==
 * 
 * @param Flash Time
 * @text フラッシュ時間
 * @desc デフォルトフラッシュ時間。正の値を入力。
 * @type number
 * @default 40
 * @parent == Default Props. ==
 * 
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://x.com/munokura/
 * 
 * 元プラグイン: http://sumrndm.site/timed-attack-arrows/
 * 
 * Timed Attack: Arrows
 * Version 1.03
 * SumRndmDde
 * 
 * 
 * このプラグインには、
 * Timed Attack Core プラグイン (SRD_TimedAttackCore) が必要です。
 * https://fungamemake.com/archives/15741
 * プラグイン管理でSRD_TimedAttackCoreの下側に配置してください。
 * 
 * プレイヤーが画面に表示された順序で矢印キーを押す必要があるタイミング攻撃です。
 * 
 * アクターがこのタイミング攻撃を使用すると、画像が順番に表示されます。
 * 各画像は特定の方向を指しており、
 * プレイヤーは指定された方向に矢印キーを押す必要があります。
 * 入力順番は左から右です。
 * 
 * ==========================================================================
 *  タイミング攻撃によるスキルのダメージ/効果をカスタマイズする方法
 * ==========================================================================
 * 
 * $gameTemp.tas_power を使用して、パワーをスキルに反映させます。
 * この値は「タイミング攻撃」がパーフェクトに近かったかに応じて、
 * 0 から 1 までの値になります。
 * 
 * 例
 * (a.atk * 4 - b.def * 2) * ($gameTemp.tas_power)
 * 
 * この例では「タイミング攻撃」でパーフェクト ヒットを獲得すると
 * 最大ダメージが得られます。
 * パーフェクト以外のヒットを獲得すると、
 * 最大ダメージのパーセンテージしか得られません。
 * 
 * 
 * ==========================================================================
 *  タイミング攻撃を使用するスキルの設定方法（矢印）
 * ==========================================================================
 * 
 * 例
 * 
 * <Timed Attack: arrows>
 * <End Timed Attack>
 * 
 * スキルのメモ欄に設定すると、そのスキルの「タイミング攻撃」が有効になります。
 * arrows の部分を変更することで、
 * 他の種類の「タイミング攻撃」を使用することもできます。
 * 
 * 
 * ==========================================================================
 *  矢印のタイミング攻撃要素
 * ==========================================================================
 * 
 * 各タイミング攻撃の要素をメモ欄にタグを追加することで操作できます。
 * 
 * 例
 * 
 * <Timed Attack: arrows>
 * Command Amount: 3
 * Randomize Commands?: up, down, up
 * Frames: 80
 * <End Timed Attack>
 * 
 * 以下はスキル別のタイミング攻撃を設定できます。
 * 
 * Normal SE:
 *  /audio/se/ 内のファイル名。
 * 
 * Miss SE:
 *  /audio/se/ 内のファイル名。
 * 
 * Success SE:
 *  /audio/se/ 内のファイル名。
 * 
 * Fail SE:
 *  /audio/se/ 内のファイル名。
 * 
 * Image:
 *  /img/SumRndmDde/tas/ 内のファイル名。
 * 
 * Phrase:
 * (Input a word or phrase. %1 will represent the counter)
 * 
 * Command Amount:
 *  正の数値。
 * 
 * Randomize Commands:
 *  true または特定のパターン。
 * 
 * Frames:
 *  正の数値。
 * 
 * Penalty:
 *  正の数値。
 * 
 * Above Height:
 *  正の数値。
 * 
 * Success Power:
 *  数値かJavaScript式。
 * 
 * Fail Power:
 *  数値かJavaScript式。
 * 
 * Hit Animation:
 *  入力形式: 不透明度,x スケール,y スケール,x 移動,y 移動
 * 
 * Flash Rate:
 *  正の数値。
 * 
 * Flash Time:
 *  正の数値。
 * 
 *    
 * ==========================================================================
 *  ヘルプファイルの終わり
 * ==========================================================================
 * 
 * ヘルプファイルの終わりへようこそ。
 * 
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
Imported["SumRndmDde Timed Attack Arrows"] = 1.02;

if (Imported["SumRndmDde Timed Attack Core"]) {

	if (!(Imported["SumRndmDde Timed Attack Core"] >= 1.20)) {
		DataManager.loadMapData = function (mapId) {
			if (mapId > 0) {
				$dataMap = {
					"autoplayBgm": false, "autoplayBgs": false, "battleback1Name": "", "battleback2Name": "", "bgm": 0, "bgs": 0, "disableDashing": false, "displayName": "", "encounterList": [], "encounterStep": 30, "height": 1, "note": "<General Location: SumRndmDde's Basement>", "parallaxLoopX": false, "parallaxLoopY": false, "parallaxName": "", "parallaxShow": true, "parallaxSx": 0, "parallaxSy": 0, "scrollType": 0, "specifyBattleback": false, "tilesetId": 1, "width": 1,
					"data": [0, 0, 0, 0, 0, 0],
					"events": [null, { "id": 1, "name": "EV001", "note": "", "pages": [{ "conditions": { "actorId": 1, "actorValid": false, "itemId": 1, "itemValid": false, "selfSwitchCh": "A", "selfSwitchValid": false, "switch1Id": 1, "switch1Valid": false, "switch2Id": 1, "switch2Valid": false, "variableId": 1, "variableValid": false, "variableValue": 0 }, "directionFix": false, "image": { "characterIndex": 0, "characterName": "", "direction": 2, "pattern": 0, "tileId": 0 }, "list": [{ "code": 101, "indent": 0, "parameters": ["", 0, 0, 2] }, { "code": 401, "indent": 0, "parameters": ["Hello."] }, { "code": 101, "indent": 0, "parameters": ["", 0, 0, 2] }, { "code": 401, "indent": 0, "parameters": ["Are you surprised? \\!What did you expect?"] }, { "code": 401, "indent": 0, "parameters": ["\\!With all those Plugins you have installed, it's only"] }, { "code": 401, "indent": 0, "parameters": ["a matter of time something weird happens."] }, { "code": 101, "indent": 0, "parameters": ["", 0, 0, 2] }, { "code": 401, "indent": 0, "parameters": ["But enough messing around, \\!I'm here to let you know"] }, { "code": 401, "indent": 0, "parameters": ["that you need to update the following Plugin:"] }, { "code": 401, "indent": 0, "parameters": ["\\!\\.T\\.i\\.m\\.e\\.d \\.A\\.t\\.t\\.a\\.c\\.k \\.C\\.o\\.r\\.e"] }, { "code": 101, "indent": 0, "parameters": ["", 0, 0, 2] }, { "code": 401, "indent": 0, "parameters": ["Simply download it again and replace the old version"] }, { "code": 401, "indent": 0, "parameters": ["with the one you just downloaded in your JS folder."] }, { "code": 401, "indent": 0, "parameters": ["\\!If you don't\\..\\..\\..\\!then I guess I'll just have to"] }, { "code": 401, "indent": 0, "parameters": ["keep you here forever! >:D"] }, { "code": 101, "indent": 0, "parameters": ["", 0, 0, 2] }, { "code": 401, "indent": 0, "parameters": ["Thanks for reading, "] }, { "code": 401, "indent": 0, "parameters": ["\\!  ~ SumRndmDde"] }, { "code": 123, "indent": 0, "parameters": ["A", 0] }, { "code": 0, "indent": 0, "parameters": [] }], "moveFrequency": 3, "moveRoute": { "list": [{ "code": 0, "parameters": [] }], "repeat": true, "skippable": false, "wait": false }, "moveSpeed": 3, "moveType": 0, "priorityType": 0, "stepAnime": false, "through": false, "trigger": 3, "walkAnime": true }, { "conditions": { "actorId": 1, "actorValid": false, "itemId": 1, "itemValid": false, "selfSwitchCh": "A", "selfSwitchValid": true, "switch1Id": 1, "switch1Valid": false, "switch2Id": 1, "switch2Valid": false, "variableId": 1, "variableValid": false, "variableValue": 0 }, "directionFix": false, "image": { "characterIndex": 0, "characterName": "", "direction": 2, "pattern": 0, "tileId": 0 }, "list": [{ "code": 0, "indent": 0, "parameters": [] }], "moveFrequency": 3, "moveRoute": { "list": [{ "code": 0, "parameters": [] }], "repeat": true, "skippable": false, "wait": false }, "moveSpeed": 3, "moveType": 0, "priorityType": 0, "stepAnime": false, "through": false, "trigger": 0, "walkAnime": true }], "x": 0, "y": 0 }]
				};
			} else {
				this.makeEmptyMap();
			}
		};

		DataManager.setupNewGame = function () {
			this.createGameObjects();
			this.selectSavefileForNewGame();
			$gameParty.setupStartingMembers();
			$gamePlayer.reserveTransfer($dataSystem.startMapId,
				0, 0);
			Graphics.frameCount = 0;
		};
	}

	SRD.TimedAttackArrows = SRD.TimedAttackArrows || {};

	(function (_, $) {

		"use strict";

		_.TAS_ID = 'arrows';

		var params = PluginManager.parameters('SRD_TimedAttack_Arrows');

		_.up = String(params['Up Condition']);
		_.right = String(params['Right Condition']);
		_.down = String(params['Down Condition']);
		_.left = String(params['Left Condition']);

		_.se = String(params['Normal SE']);
		_.fse = String(params['Miss SE']);
		_.vse = String(params['Success SE']);
		_.f2se = String(params['Fail SE']);
		_.image = String(params['Image']);
		_.phrase = String(params['Phrase']);
		_.amount = parseInt(params['Command Amount']);
		_.random = String(params['Randomize Commands']);
		_.frames = parseInt(params['Frames']);
		_.penatly = parseInt(params['Penalty']);
		_.successPower = String(params['Success Power']);
		_.failPower = String(params['Fail Power']);
		_.aboveHeight = parseInt(params['Above Height']);
		_.animation = String(params['Hit Animation']);
		_.flash = parseInt(params['Flash Rate']);
		_.time = parseInt(params['Flash Time']);

		var tempImages = [];
		var _$_organizeInfo = $.organizeInfo;
		$.organizeInfo = function (o) {
			_$_organizeInfo.call(this, o);
			if (o.type === _.TAS_ID) {
				if (_.image && _.image.trim().length > 0) $.loadImage(_.image);
				if (o.info.match(/Normal[ ]?SE:\s*(.*)/im)) o.se = String(RegExp.$1);
				if (o.info.match(/Miss[ ]?SE:\s*(.*)/im)) o.fse = String(RegExp.$1);
				if (o.info.match(/Success[ ]?SE:\s*(.*)/im)) o.vse = String(RegExp.$1);
				if (o.info.match(/Fail[ ]?SE:\s*(.*)/im)) o.f2se = String(RegExp.$1);
				if (o.info.match(/Phrase:\s*(.*)/im)) o.phrase = String(RegExp.$1);
				if (o.info.match(/Command[ ]?Amount:\s*(.*)/im)) o.amount = parseInt(RegExp.$1);
				if (o.info.match(/Randomize[ ]?Commands:\s*(.*)/im)) o.random = String(RegExp.$1);
				if (o.info.match(/Image:\s*(.*)/im)) o.image = String(RegExp.$1);
				if (o.info.match(/Frames:\s*(.*)/im)) o.frames = parseInt(RegExp.$1);
				if (o.info.match(/Penalty:\s*(.*)/im)) o.penatly = parseInt(RegExp.$1);
				if (o.info.match(/Success[ ]?Power:\s*(.*)/im)) o.successPower = String(RegExp.$1);
				if (o.info.match(/Fail[ ]?Power:\s*(.*)/im)) o.failPower = String(RegExp.$1);
				if (o.info.match(/Above[ ]?Height:\s*(.*)/im)) o.aboveHeight = parseInt(RegExp.$1);
				if (o.info.match(/Animation:\s*(.*)/im)) o.animation = String(RegExp.$1);
				if (o.info.match(/Flash[ ]?Rate:\s*(.*)/im)) o.flash = parseInt(RegExp.$1);
				if (o.info.match(/Flash[ ]?Time:\s*(.*)/im)) o.time = parseInt(RegExp.$1);
				if (!o.se) o.se = _.se;
				if (!o.vse) o.vse = _.vse;
				if (!o.fse) o.fse = _.fse;
				if (!o.f2se) o.f2se = _.f2se;
				if (!o.image) o.image = _.image;
				else $.loadImage(o.image);
				if (!o.phrase) o.phrase = _.phrase;
				if (!o.amount) o.amount = _.amount;
				if (!o.random) o.random = _.random;
				if (!o.frames) o.frames = _.frames;
				if (!o.penatly && o.penatly != 0) o.penatly = _.penatly;
				if (!o.successPower) o.successPower = _.successPower;
				if (!o.failPower) o.failPower = _.failPower;
				if (!o.aboveHeight && o.aboveHeight != 0) o.aboveHeight = _.aboveHeight;
				if (!o.animation) o.animation = _.animation;
				if (!o.flash && o.flash !== 0) o.flash = _.flash;
				if (!o.time && o.time !== 0) o.time = _.time;
			}
		};

		//-----------------------------------------------------------------------------
		// TimedAttackSystem
		//-----------------------------------------------------------------------------

		var _TimedAttackSystem_loadItem = TimedAttackSystem.prototype.loadItem;
		TimedAttackSystem.prototype.loadItem = function (item) {
			_TimedAttackSystem_loadItem.call(this, item);
			if (item.type === _.TAS_ID) {
				this._phrase = item.phrase;
				this._width = this.textWidth(this._phrase + "000");
				this._image = item.image;
				this._milis = item.frames;
				this._penatly = item.penatly;
				this._successPower = item.successPower;
				this._failPower = item.failPower;
				this._aboveHeight = item.aboveHeight;
				this._flash = item.flash;
				this._time = item.time;
				this._ani = item.animation.split(/\s*,\s*/);
				for (var i = 0; i < this._ani.length; i++) {
					this._ani[i] = Number(this._ani[i])
				}

				this._commands = [];
				var random;
				if (item.random.trim().toLowerCase() === 'true') {
					random = true;
				} else {
					random = item.random.split(/\s*,\s*/);
				}
				for (var i = 0; i < item.amount; i++) {
					if (random === true) {
						this._commands.push(Math.randomInt(4));
					} else {
						switch (random[i]) {
							case 'up':
								this._commands.push(0);
								break;
							case 'right':
								this._commands.push(1);
								break;
							case 'down':
								this._commands.push(2);
								break;
							case 'left':
								this._commands.push(3);
								break;
						}
					}
				}
				this._countDown = this._commands.length;
				this._maxCount = this._countDown;
			}
		};

		var _TimedAttackSystem_loadStart = TimedAttackSystem.prototype.loadStart;
		TimedAttackSystem.prototype.loadStart = function () {
			_TimedAttackSystem_loadStart.call(this);
			if (this._item.type === _.TAS_ID) {
				this._window.opacity = 0;
				this.contents.clear();
				this._notPressed = true;
				this._flashTime = 0;
				this._x = 0;
				this._y = 0;
				this._oneUpdate = true;
				this._evals = [_.up, _.right, _.down, _.left];
				this._sprActor = BattleManager._spriteset._actorSprites[BattleManager._subject.index()];
				this._x = (this._sprActor.x - (this._width / 2));
				this._y = (this._sprActor.y - this._height);
				this._bla = this._x;
				this._currentScale2 = 0;
			}
		};

		var _TimedAttackSystem_updateGames = TimedAttackSystem.prototype.updateGames;
		TimedAttackSystem.prototype.updateGames = function () {
			_TimedAttackSystem_updateGames.call(this);
			if (this._type === _.TAS_ID) this.playArrowGame();
		};

		TimedAttackSystem.prototype.playArrowGame = function () {
			//Initialise
			if (this._oneUpdate) {
				this._sprites = [];
				for (var i = 0; i < this._commands.length; i++) {
					var bit = $.loadImage(this._image);
					this._bitWidth = bit.width;
					this._center = (this._width / 2) - ((this._commands.length * (this._bitWidth / 4)) / 2);
					var h = bit.height;
					this._sprites[i] = new Sprite(new Bitmap(h, h));
					this._sprites[i].bitmap.blt(bit, this._commands[i] * (this._bitWidth / 4), 0, h, h, 0, 0);
					this._sprites[i].opacity = 0;
					this.addChild(this._sprites[i]);
				}
				this._oneUpdate = false;
			} else {
				for (var i = 0; i < this._commands.length; i++) {
					if (this._maxCount - this._countDown > i) {
						if (this._sprites[i].opacity > 0) {
							this._sprites[i].opacity += this._ani[0];
							this._sprites[i].scale.x += this._ani[1];
							this._sprites[i].scale.y += this._ani[2];
							this._sprites[i].x += this._ani[3];
							this._sprites[i].y += this._ani[4];
						}
					} else {
						this._sprites[i].x = this._x + (i * (this._bitWidth / 4)) + this._center;
						this._sprites[i].y = this._y + this.lineHeight();
						if (this._sprites[i].opacity === 0) this._sprites[i].opacity = 255;
					}
				}
			}


			//Movement
			if (this._notPressed) {
				var f = this._frame;
			} else {
				this._flashTime++;
			}

			if (this._flashTime >= this._time && !this._notPressed) {
				this._content.bitmap.clear();
				for (var i = 0; i < this._sprites.length; i++) {
					this.removeChild(this._sprites[i]);
				}
				BattleManager.endTASAttackThing();
				this.close();
			}

			this._x = (this._sprActor.x - (this._width / 2));
			this._y = (this._sprActor.y - this._aboveHeight);
			this.drawArrowGame();

			if (this._notPressed) {

				if (eval(this._evals[this._commands[this._maxCount - this._countDown]])) {
					this._countDown--;
					if (this._countDown === 0) {
						AudioManager.playSe({ "name": this._item.vse, "pan": 0, "pitch": 100, "volume": 100 });
						this.setPower(eval(this._successPower));
						this._notPressed = false;
					} else {
						AudioManager.playSe({ "name": this._item.se, "pan": 0, "pitch": 100, "volume": 100 });
					}
				} else if (eval(this._evals[0]) || eval(this._evals[1]) || eval(this._evals[2]) || eval(this._evals[3])) {
					this._milis -= this._penatly;
					AudioManager.playSe({ "name": this._item.fse, "pan": 0, "pitch": 100, "volume": 100 });
				}

				this._milis--;
				if (this._milis < 0) this._milis = 0;

				//Input
				if (this._milis <= 0) {
					this._notPressed = false;
					AudioManager.playSe({ "name": this._item.f2se, "pan": 0, "pitch": 100, "volume": 100 });
					this.setPower(eval(this._failPower));//(this._milis / this._item.frames);
				}
			}
		};

		TimedAttackSystem.prototype.drawArrowGame = function () {
			//Draw
			this._content.bitmap.clear();
			if (this._flashTime % this._flash < Math.floor(this._flash / 2)) {
				var text = this._phrase.replace(/%1/g, (this._milis).toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false }));
				this._content.bitmap.drawText(text, this._x + (this._width / 2) - (this.textWidth(text) / 2), this._y, this._width, this.lineHeight(), 'left');
			}
		};

	})(SRD.TimedAttackArrows, SRD.TimedAttack);

} else alert("Please install 'SRD_TimedAttackCore' in order to use 'SRD_TimedAttack_Arrows'.");