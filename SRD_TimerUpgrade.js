/*:
 * @plugindesc Gives developers move control over the visual and mechanical aspects of the game's timer system.
 * @author SumRndmDde
 *
 * @param Timer Format
 * @desc The format of the timer text. Use the following codes:
 *   %1 - hours | %2 - minutes | %3 - seconds | %4 - frames
 * @default %2:%3:%4
 *
 * @param Timer Position
 * @desc The position of the timer.            TOP-L  TOP  TOP-R
 * Use the following position codes.     BOT-L  BOT  BOT-R
 * @default TOP
 *
 * @param Timer Start SE
 * @desc The sound effect played when a timer starts. Leave blank to disallow. Use the format: file, volume, pitch, pan
 * @default
 *
 * @param Timer Expire SE
 * @desc The sound effect played when a timer expires. Leave blank to disallow. Use the format: file, volume, pitch, pan
 * @default Bell3, 80, 100, 0
 *
 * @param Pause Color
 * @desc This is the color of the text when the timer is paused.
 * @default #FFFF00
 *
 * @param Use Background
 * @desc If 'true', a subtle background will be used for the timer to help it become more readable.
 * @default true
 *
 * @param == Auto Settings ==
 * @default
 *
 * @param Use Auto-Stop
 * @desc If 'true', then the timer will automatically stop itself and leave the screen when finished.
 * @default true
 *
 * @param Use Auto-Pause
 * @desc If 'true', then the timer will automatically pause while events are running.
 * @default true
 *
 * @param Auto-Pause Opacity
 * @desc This is the opacity of the timer during automatic pausing.
 * @default 120
 *
 * @param Use Auto-Abort
 * @desc If 'true', then battles will be automatically aborted when the timer ends.
 * @default true
 *
 * @param == Label Settings ==
 * @default
 *
 * @param Default Label
 * @desc This is the text of the label by default. Leave blank to use no label.
 * @default
 *
 * @param Label Font Size
 * @desc The font size of the text used for the label.
 * @default 22
 *
 * @param == Font Settings ==
 * @default
 *
 * @param Timer Font
 * @desc The font used for the timer's text.
 * @default GameFont
 *
 * @param Timer Font Size
 * @desc The size of the font used for the timer.
 * @default 32
 *
 * @param Timer Italic
 * @desc If 'true', then the timer's text will be italicized.
 * @default false
 *
 * @param Timer Text Color
 * @desc The color of the timer's text.
 * @default #ffffff
 *
 * @param Timer Outline Color
 * @desc The color of the timer's outline.
 * @default rgba(0, 0, 0, 0.5)
 *
 * @help
 *
 * Timer Upgrade
 * Version 1.01
 * SumRndmDde
 *
 *
 * This plugin gives developers move control over the visual and mechanical 
 * aspects of the game's timer system.
 *
 *
 * ==============================================================================
 *  Plugin Commands
 * ==============================================================================
 *
 * The following Plugin Commands can be used to manipulate the extra mechanics
 * of the upgraded timer:
 *
 *
 *
 *   SetTimer [frames] [seconds] [minutes] [hours]
 *
 * Using this command, the frames, seconds, minutes, and hours can be set on the
 * game timer. This allows users to surpass the default settings for the MV
 * engine and specify the count down to frames.
 *
 * For example, if you wish to set the timer to 3 minutes, you would do:
 *   SetTimer 0 0 3 0
 *
 * If you wished to set the timer to 30 frames and 60 seconds, do:
 *   SetTimer 30 60 0 0
 *
 *
 *
 *   AddTimer [frames] [seconds] [minutes] [hours]
 *
 * Using this command, frames, seconds, minutes, and hours can be added to the 
 * game timer. Instead of replacing the timer value, this command adds to the 
 * current value.
 *
 * For example, if you wanted to add 5 minutes to the timer, you would do:
 *   AddTimer 0 0 5 0
 *
 * If you wanted to add 30 frames and 1 hour, you would do:
 *   AddTimer 30 0 0 1
 *
 *
 *
 *   PauseTimer
 *
 * Using this command, the timer can be paused. This keeps the timer at its
 * current position until unpaused or restarted.
 *
 *
 *
 *   UnpauseTimer
 *
 * Using this command, the timer can be unpaused. This will let the timer 
 * continue from when it was paused.
 *
 *
 *
 *   SetExpireCommonEvent [id]
 *
 * Using this command, the expire Common Event can be set up. This is a Common
 * Event that will automatically play once the Timer ends. Once the Common
 * Event has been played, it will no longer be the expire Common Event.
 *
 *
 *
 *   SetTimerLabel [text]
 *
 * This command allows you to change the timer label in the middle of the game.
 * Setting this to blank would remove the label.
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
 * @plugindesc タイマーを視覚的、機能的により細かに設定できます。
 * @author SumRndmDde
 *
 * @param Timer Format
 * @text タイマー形式
 * @desc タイマーの表示形式
 * %1:時間 / %2:分 / %3:秒 / %4:フレーム
 * @default %2:%3:%4
 *
 * @param Timer Position
 * @text タイマー表示位置
 * @type select
 * @option 上-左
 * @value TOP-L
 * @option 上-中央
 * @value TOP
 * @option 上-右
 * @value TOP-R
 * @option 下-左
 * @value BOT-L
 * @option 下-中央
 * @value BOT
 * @option 下-右
 * @value BOT-R
 * @desc タイマーの表示位置
 * TOP-L / TOP / TOP-R / BOT-L / BOT / BOT-R
 * @default TOP
 *
 * @param Timer Start SE
 * @text タイマー開始SE
 * @desc タイマー開始時に再生されるSE。無効にするには無入力
 * 書式:ファイル名、音量、ピッチ、パン
 * @default Bell1, 80, 100, 0
 *
 * @param Timer Expire SE
 * @text タイマー期限SE
 * @desc タイマー切れた時に再生されるSE。無効にするには無入力
 * 書式:ファイル名、音量、ピッチ、パン
 * @default Bell3, 80, 100, 0
 *
 * @param Pause Color
 * @text 一時停止色
 * @desc タイマーが一時停止したときのテキストの色です
 * @default #FFFF00
 *
 * @param Use Background
 * @text 背景を表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc タイマーの背景にグラデーションを表示
 * 表示:true / 非表示:false
 * @default true
 *
 * @param == Auto Settings ==
 * @text -- 自動設定 --
 * @default
 *
 * @param Use Auto-Stop
 * @text オートストップ使用
 * @type boolean
 * @on 有効
 * @off 無効
 * 有効:true / 無効:false
 * @desc タイマー終了時、自動的に停止して非表示に
 * @default true
 *
 * @param Use Auto-Pause
 * @text 自動一時停止使用
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc イベント実行中、タイマーは自動的に一時停止
 * 有効:true / 無効:false
 * @default true
 *
 * @param Auto-Pause Opacity
 * @text 自動一時停止の不透明度
 * @desc 自動停止中のタイマーの不透明度です
 * @default 120
 *
 * @param Use Auto-Abort
 * @text 自動戦闘中断を使用
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc タイマー終了時、戦闘を自動的に中断
 * 有効:true / 無効:false
 * @default true
 *
 * @param == Label Settings ==
 * @text -- ラベル設定 --
 * @default
 *
 * @param Default Label
 * @text デフォルトラベル
 * @desc デフォルトのラベルのテキスト
 * ラベルを使用しない場合、無入力
 * @default
 *
 * @param Label Font Size
 * @text ラベルのフォントサイズ
 * @desc ラベルのテキストのフォントサイズ
 * @default 22
 *
 * @param == Font Settings ==
 * @text -- フォント設定 --
 * @default
 *
 * @param Timer Font
 * @text タイマーフォント
 * @desc タイマーのテキストのフォント
 * @default GameFont
 *
 * @param Timer Font Size
 * @text タイマーフォントサイズ
 * @desc タイマーのフォントのサイズ
 * @default 32
 *
 * @param Timer Italic
 * @text タイマーイタリック
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc タイマーのテキストをイタリック体に
 * 有効:true / 無効:false
 * @default false
 *
 * @param Timer Text Color
 * @text タイマーテキスト色
 * @desc タイマーのテキストの色
 * @default #ffffff
 *
 * @param Timer Outline Color
 * @text タイマーアウトライン色
 * @desc タイマーアウトラインの色
 * デフォルト: rgba(0, 0, 0, 0.5)
 * @default rgba(0, 0, 0, 0.5)
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/timer-upgrade/
 *
 *
 * Timer Upgrade
 * Version 1.01
 * SumRndmDde
 *
 *
 * タイマーを視覚的、機能的により細かに設定できます。
 *
 *
 * ==========================================================================
 *  プラグインコマンド
 * ==========================================================================
 *
 * 以下のプラグインコマンドを使用して、
 * アップグレードされたタイマーを設定できます。
 *
 *   SetTimer [frames] [seconds] [minutes] [hours]
 *
 * タイマーにフレーム、秒、分、時間を設定することができます。
 * デフォルトより細かく、フレーム数のカウントダウンを指定することができます。
 *
 * 例: タイマーを3分に設定
 *   SetTimer 0 0 3 0
 *
 * タイマーを30フレーム60秒に設定
 *   SetTimer 30 60 0 0
 *
 *
 *   AddTimer [frames] [seconds] [minutes] [hours]
 *
 * このコマンドを使用すると、タイマーにフレーム、秒、分、時間を追加できます。
 * タイマーの値を置き換える代わりに、このコマンドは現在の値に追加します。
 *
 * 例: タイマーに5分を追加
 *   AddTimer 0 0 5 0
 *
 * 30フレーム1時間を追加
 *   AddTimer 30 0 0 1
 *
 *
 *   PauseTimer
 *
 * このコマンドを使用すると、タイマーを一時停止できます。
 * 一時停止が解除されるか再起動されるまで、タイマーは保持されます。
 *
 *
 *   UnpauseTimer
 *
 * このコマンドを使用すると、タイマーの一時停止を解除できます。
 * タイマーは一時停止した時から継続されます。
 *
 *
 *   SetExpireCommonEvent [id]
 *
 * このコマンドを使用すると、タイマー終了コモンイベントを設定できます。
 * コモンイベントが実行されると、タイマー終了コモンイベントではなくなります。
 *
 *
 *   SetTimerLabel [text]
 *
 * このコマンドでは、ゲームの途中でタイマーのラベルを変更できます。
 * ブランクにすると、ラベルは削除されます。
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
SRD.TimerUpgrade = SRD.TimerUpgrade || {};
SRD.PluginCommands = SRD.PluginCommands || {};

var Imported = Imported || {};
Imported["SumRndmDde Timer Upgrade"] = 1.01;

(function (_, $) {

	"use strict";

	//-----------------------------------------------------------------------------
	// SRD.TimerUpgrade
	//-----------------------------------------------------------------------------

	const params = PluginManager.parameters('SRD_TimerUpgrade');

	_.format = String(params['Timer Format']);
	_.pos = String(params['Timer Position']);
	_.start = String(params['Timer Start SE']);
	_.stop = String(params['Timer Expire SE']);
	_.pauseColor = String(params['Pause Color']);
	_.back = String(params['Use Background']).trim().toLowerCase() === 'true';

	_.autoStop = String(params['Use Auto-Stop']).trim().toLowerCase() === 'true';
	_.autoPause = String(params['Use Auto-Pause']).trim().toLowerCase() === 'true';
	_.autoOpacity = parseInt(params['Auto-Pause Opacity']);
	_.abort = String(params['Use Auto-Abort']).trim().toLowerCase() === 'true';

	_.default = String(params['Default Label']);
	_.labelSize = parseInt(params['Label Font Size']);

	_.font = String(params['Timer Font']);
	_.size = parseInt(params['Timer Font Size']);
	_.italic = String(params['Timer Italic']).trim().toLowerCase() === 'true';
	_.color = String(params['Timer Text Color']);
	_.outline = String(params['Timer Outline Color']);

	_.updateBooleans = function () {
		this.usesHours = !!(this.format.match(/%1/));
		this.usesMinutes = !!(this.format.match(/%2/));
		this.usesSeconds = !!(this.format.match(/%3/));
		this.usesFrames = !!(this.format.match(/%4/));
	};

	_.getLowestType = function () {
		if (this.usesFrames) return 0;
		else if (this.usesSeconds) return 1;
		else if (this.usesMinutes) return 2;
		return 3;
	};

	_.setupPosition = function () {
		this.vert = (!!this.pos.match(/top/i)) ? 0 : 1;
		if (!!this.pos.match(/-l/i)) {
			this.horz = -1;
		} else if (!!this.pos.match(/-r/i)) {
			this.horz = 1;
		} else {
			this.horz = 0;
		}
	};

	_.setupSoundEffects = function () {
		if (this.start) {
			const info = this.start.split(/\s*,\s*/);
			this.start = {
				name: info[0],
				volume: parseInt(info[1]),
				pitch: parseInt(info[2]),
				pan: parseInt(info[3])
			}
		}
		if (this.stop) {
			const info = this.stop.split(/\s*,\s*/);
			this.stop = {
				name: info[0],
				volume: parseInt(info[1]),
				pitch: parseInt(info[2]),
				pan: parseInt(info[3])
			}
		}
	};

	_.updateBooleans();
	_.setupPosition();
	_.setupSoundEffects();

	//-----------------------------------------------------------------------------
	// SRD.PluginCommands
	//-----------------------------------------------------------------------------

	$['settimer'] = function (args) {
		const v = $gameVariables._data;
		let result = eval(args[0]);
		if (args[1]) result += (eval(args[1]) * 60);
		if (args[2]) result += (eval(args[2]) * 60 * 60);
		if (args[3]) result += (eval(args[3]) * 60 * 60 * 60);
		$gameTimer.start(result);
	};

	$['addtimer'] = function (args) {
		const v = $gameVariables._data;
		let result = $gameTimer.getFrames();
		if (args[0]) result += (eval(args[0]));
		if (args[1]) result += (eval(args[1]) * 60);
		if (args[2]) result += (eval(args[2]) * 60 * 60);
		if (args[3]) result += (eval(args[3]) * 60 * 60 * 60);
		if (result < 0) result = 0;
		$gameTimer.start(result);
	};

	$['pausetimer'] = function (args) {
		$gameTimer.pause();
	};

	$['unpausetimer'] = function (args) {
		$gameTimer.unpause();
	};

	$['setexpirecommonevent'] = function (args) {
		$gameTimer.setExpireCommonEvent(parseInt(args[0]));
	};

	$['settimerlabel'] = function (args) {
		if (args.length === 0) {
			$gameTimer.setLabel('');
		} else {
			let text = '';
			for (let i = 0; i < args.length; i++) {
				text += String(args[i]) + " ";
			}
			$gameTimer.setLabel(text);
		}
	};

	//-----------------------------------------------------------------------------
	// Game_Interpreter
	//-----------------------------------------------------------------------------

	if (!SRD.Game_Interpreter_pluginCommand) {

		SRD.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
		Game_Interpreter.prototype.pluginCommand = function (command, args) {
			const com = command.trim().toLowerCase();
			if ($[com]) {
				$[com].call(this, args);
				return;
			}
			SRD.Game_Interpreter_pluginCommand.apply(this, arguments);
		};

	}

	//-----------------------------------------------------------------------------
	// Game_Timer
	//-----------------------------------------------------------------------------

	_.Game_Timer_initialize = Game_Timer.prototype.initialize;
	Game_Timer.prototype.initialize = function () {
		_.Game_Timer_initialize.apply(this, arguments);
		this._onExpireCommonEvent = 0;
		this._isPaused = false;
		this._label = _.default;
	};

	_.Game_Timer_update = Game_Timer.prototype.update;
	Game_Timer.prototype.update = function (sceneActive) {
		if (!this._isPaused && !this.isAutoPaused()) {
			_.Game_Timer_update.apply(this, arguments);
		}
	};

	Game_Timer.prototype.isAutoPaused = function () {
		return _.autoPause && $gameMap.isEventRunning() && SceneManager._scene.constructor === Scene_Map;
	};

	Game_Timer.prototype.getCount = function (type) {
		switch (type) {
			case 0: return this._frames;
			case 1: return Math.floor(this._frames / 60);
			case 2: return Math.floor(this._frames / (60 * 60));
			case 3: return Math.floor(this._frames / (60 * 60 * 60));
		}
	};

	Game_Timer.prototype.getLabel = function () {
		if (!this._label) return '';
		let text = this._label;
		text = text.replace(/\\V\[(\d+)\]/gi, function () {
			return $gameVariables.value(parseInt(arguments[1]));
		}.bind(this));
		return text;
	};

	Game_Timer.prototype.setLabel = function (label) {
		this._label = label;
	};

	_.Game_Timer_start = Game_Timer.prototype.start;
	Game_Timer.prototype.start = function (count) {
		_.Game_Timer_start.apply(this, arguments);
		if (_.start) AudioManager.playSe(_.start);
		this.unpause();
	};

	_.Game_Timer_stop = Game_Timer.prototype.stop;
	Game_Timer.prototype.stop = function (count) {
		_.Game_Timer_stop.apply(this, arguments);
		this.unpause();
	};

	Game_Timer.prototype.getFrames = function () {
		return this._frames;
	};

	Game_Timer.prototype.setExpireCommonEvent = function (id) {
		this._onExpireCommonEvent = id;
	};

	Game_Timer.prototype.onExpire = function () {
		if (_.abort) BattleManager.abort();
		if (_.stop) AudioManager.playSe(_.stop);
		this.playExpireCommonEvent();
		if (_.autoStop) this.stop();
	};

	Game_Timer.prototype.playExpireCommonEvent = function () {
		if (this._onExpireCommonEvent !== 0) {
			$gameTemp.reserveCommonEvent(this._onExpireCommonEvent);
			this._onExpireCommonEvent = 0;
		}
	};

	Game_Timer.prototype.pause = function () {
		this._isPaused = true;
	};

	Game_Timer.prototype.unpause = function () {
		this._isPaused = false;
	};

	Game_Timer.prototype.isPaused = function () {
		return this._isPaused;
	};

	//-----------------------------------------------------------------------------
	// Scene_Base
	//-----------------------------------------------------------------------------

	Scene_Base.prototype.createTimer = Spriteset_Base.prototype.createTimer;

	//-----------------------------------------------------------------------------
	// Scene_Map
	//-----------------------------------------------------------------------------

	_.Scene_Map_createSpriteset = Scene_Map.prototype.createSpriteset;
	Scene_Map.prototype.createSpriteset = function () {
		_.Scene_Map_createSpriteset.apply(this, arguments);
		this.createTimer()
	};

	//-----------------------------------------------------------------------------
	// Scene_Battle
	//-----------------------------------------------------------------------------

	_.Scene_Battle_createSpriteset = Scene_Battle.prototype.createSpriteset;
	Scene_Battle.prototype.createSpriteset = function () {
		_.Scene_Battle_createSpriteset.apply(this, arguments);
		this.createTimer();
	};

	//-----------------------------------------------------------------------------
	// Spriteset_Base
	//-----------------------------------------------------------------------------

	Spriteset_Base.prototype.createTimer = function () { };

	//-----------------------------------------------------------------------------
	// Sprite_Timer
	//-----------------------------------------------------------------------------

	_.Sprite_Timer_initialize = Sprite_Timer.prototype.initialize;
	Sprite_Timer.prototype.initialize = function () {
		this.initMembers();
		_.Sprite_Timer_initialize.apply(this, arguments);
		this.createBackground();
		this.createLabel();
		this.addChildren();
		this.redraw();
	};

	Sprite_Timer.prototype.initMembers = function () {
		this._lowestType = _.getLowestType();
		this._count = 0;
		this._paused = false;
		this._label = $gameTimer.getLabel();
	};

	Sprite_Timer.prototype.createBackground = function () {
		const width = this.numBitmap.width * (1.5);
		let height = this.numBitmap.height;
		if (this._label) height += _.labelSize + 16;
		this.background = new Sprite(new Bitmap(width, height));
		if (_.back) {
			if (_.horz) {
				this.background.bitmap.gradientFillRect(0, 0, width, height, 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)', false);
				this.background.scale.x = _.horz;
			} else {
				this.background.bitmap = new Bitmap(width * 2, height);
				this.background.bitmap.gradientFillRect(0, 0, width, height, 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)', false);
				this.background.bitmap.gradientFillRect(width, 0, width, height, 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)', false);
				this.background.anchor.x = 0.5;
			}
		}
	};

	Sprite_Timer.prototype.createLabel = function () {
		this.label = new Sprite(new Bitmap(this.numBitmap.width, _.labelSize + 16));
		this.label.bitmap.fontFace = _.font;
		this.label.bitmap.fontSize = _.labelSize;
		this.label.bitmap.fontItalic = _.italic;
		this.label.bitmap.textColor = _.color;
		this.label.bitmap.outlineColor = _.outline;
		this.refreshLabel();
	};

	Sprite_Timer.prototype.refreshLabel = function () {
		const bit = this.label.bitmap;
		bit.clear();
		if (this._label) {
			bit.drawText(this._label, 0, 0, bit.width, bit.height, 'center');
		}
	};

	Sprite_Timer.prototype.removeChildren = function () {
		this.removeChild(this.background);
		this.removeChild(this.numbers);
		this.removeChild(this.label);
	};

	Sprite_Timer.prototype.addChildren = function () {
		this.addChild(this.background);
		this.addChild(this.numbers);
		this.addChild(this.label);
	};

	Sprite_Timer.prototype.createBitmap = function () {
		const fontSize = _.size;
		const bitmap = new Bitmap(1, 1);
		bitmap.fontFace = _.font;
		bitmap.fontSize = fontSize;
		bitmap.fontItalic = _.italic;
		const newWidth = bitmap.measureTextWidth(this.timerText()) + 16;
		const newHeight = fontSize + 16;

		this.numbers = new Sprite(new Bitmap(newWidth, newHeight));
		this.numBitmap = this.numbers.bitmap;
		this.numBitmap.fontFace = _.font;
		this.numBitmap.fontSize = fontSize;
		this.numBitmap.fontItalic = _.italic;
		this.numBitmap.textColor = _.color;
		this.numBitmap.outlineColor = _.outline;
	};

	_.Sprite_Timer_update = Sprite_Timer.prototype.update;
	Sprite_Timer.prototype.update = function () {
		_.Sprite_Timer_update.apply(this, arguments);
		this.updatePause();
		this.updateLabel();
	};

	Sprite_Timer.prototype.updateBitmap = function () {
		if (this._count !== $gameTimer.getCount(this._lowestType)) {
			this._count = $gameTimer.getCount(this._lowestType);
			this.redraw();
		}
	};

	Sprite_Timer.prototype.updatePause = function () {
		if (this._paused !== $gameTimer.isPaused()) {
			this._paused = $gameTimer.isPaused();
			if (this._paused) this.redrawForPause();
			else this.redraw();
		}
	};

	Sprite_Timer.prototype.updateLabel = function () {
		if (this._label !== $gameTimer.getLabel()) {
			const refreshChildren = (!!this._label !== !!$gameTimer.getLabel());
			this._label = $gameTimer.getLabel();
			this.refreshLabel();
			if (refreshChildren) {
				this.removeChildren();
				this.createBackground();
				this.addChildren();
			}
		}
	};

	Sprite_Timer.prototype.redraw = function () {
		if (this._paused) return;
		const text = this.timerText();
		const width = this.numBitmap.width;
		const height = this.numBitmap.height;
		this.numBitmap.clear();
		this.numBitmap.drawText(text, 0, 0, width, height, 'center');
	};

	Sprite_Timer.prototype.redrawForPause = function () {
		const text = this.timerText();
		const width = this.numBitmap.width;
		const height = this.numBitmap.height;
		const color = this.numBitmap.textColor;
		this.numBitmap.clear();
		this.numBitmap.textColor = _.pauseColor;
		this.numBitmap.drawText(text, 0, 0, width, height, 'center');
		this.numBitmap.textColor = color;
	};

	Sprite_Timer.prototype.timerText = function () {
		let result = _.format;
		const frames = $gameTimer.getFrames();
		const seconds = Math.floor(frames / 60);
		const minutes = Math.floor(frames / (60 * 60));
		const frm = frames % 60;
		const sec = seconds % 60;
		const min = minutes % 60;
		const hur = Math.floor(minutes / 60) % 60;
		if (_.usesFrames) result = result.replace(/%4/, frm.padZero(2));
		if (_.usesSeconds) result = result.replace(/%3/, sec.padZero(2));
		if (_.usesMinutes) result = result.replace(/%2/, min.padZero(2));
		if (_.usesHours) result = result.replace(/%1/, hur.padZero(2));
		return result;
	};

	Sprite_Timer.prototype.updateVisibility = function () {
		if ($gameTimer.isWorking()) {
			this.opacity = ($gameTimer.isAutoPaused()) ? _.autoOpacity : 255;
		} else {
			this.opacity = 0;
		}
	};

	Sprite_Timer.prototype.updatePosition = function () {
		if (!this.background) return;
		this.updateVertical();
		this.updateCountPosition();
		this.updateHorizontal();
	};

	Sprite_Timer.prototype.updateVertical = function () {
		if (_.vert === 1) {
			this.y = Graphics.boxHeight - this.background.height;
		} else {
			this.y = 0;
		}
	};

	Sprite_Timer.prototype.updateCountPosition = function () {
		if (this._label) {
			this.numbers.y = _.labelSize + 16;
		} else {
			this.numbers.y = 0;
		}
	};

	Sprite_Timer.prototype.updateHorizontal = function () {
		if (_.horz === 1) {
			this.x = Graphics.boxWidth - this.numBitmap.width;
			this.background.x = this.numBitmap.width - this.background.bitmap.width;
		} else if (_.horz === -1) {
			this.x = 0;
			this.background.x = this.background.bitmap.width;
		} else {
			this.x = (Graphics.boxWidth - this.numBitmap.width) / 2;
			this.background.x = this.numBitmap.width / 2;
		}
	};

})(SRD.TimerUpgrade, SRD.PluginCommands);