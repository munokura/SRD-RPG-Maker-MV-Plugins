/*:
 * @plugindesc Gives developers the capability to add animated pictures as choice commands for the title command window.
 * @author SumRndmDde
 *
 * @param Image Data
 * @type struct<Image>[]
 * @desc The data for all the title command images.
 * @default ["{\"Image\":\"NewGame\",\"Symbol\":\"newGame\",\"X Position\":\"\",\"Y Position\":\"\"}","{\"Image\":\"Continue\",\"Symbol\":\"continue\",\"X Position\":\"\",\"Y Position\":\"\"}","{\"Image\":\"Options\",\"Symbol\":\"options\",\"X Position\":\"\",\"Y Position\":\"\"}","{\"Image\":\"Shutdown\",\"Symbol\":\"shutdown\",\"X Position\":\"\",\"Y Position\":\"\"}"]
 *
 * @param Settings
 * @default ====================================
 *
 * @param Highlight Frame
 * @type boolean
 * @desc If 'true', command images will be split into two halfs: 
 * the left for unselected, and the right for selected.
 * @default true
 * @parent Settings
 *
 * @param Disable Opacity
 * @type number
 * @min 0
 * @decimals 0
 * @desc This is the opacity of commands that are disabled.
 * @default 170
 * @parent Settings
 *
 * @param Animation Duration
 * @type number
 * @min 0
 * @decimals 0
 * @desc The duration, in frames, it takes for the highlight animation to occur.
 * @default 7
 * @parent Settings
 *
 * @param Scale Animation
 * @type number
 * @min 0
 * @decimals 2
 * @desc The scale growth that occurs on highlighted commands.
 * 0 = no growth  |  0.2 = 20% growth  |  0.5 = 50% growth
 * @default 0.20
 * @parent Settings
 *
 * @param X Animation
 * @type number
 * @min 0
 * @decimals 0
 * @desc The X shift that occurs on highlighted commands.
 * Positive numbers move it to the right; negative to the left.
 * @default 0
 * @parent Settings
 *
 * @param Y Animation
 * @type number
 * @min 0
 * @decimals 0
 * @desc The Y shift that occurs on highlighted commands.
 * Positive numbers move it down; negative move it up.
 * @default 0
 * @parent Settings
 *
 * @param Line Height
 * @type number
 * @min 0
 * @decimals 0
 * @desc This is the line height of the Title Command. Increase this if the commands seem too close together or vise versa.
 * @default 60
 * @parent Settings
 *
 * @help
 *
 * Title Picture Choices
 * Version 1.10
 * SumRndmDde
 *
 *
 * This plugin requires the Game Upgrade plugin:
 * http://sumrndm.site/game-upgrade/
 *
 * This Plugin also requires the Title Command Customizer:
 * http://sumrndm.site/title-command-customizer/
 *
 *
 * This plugin gives developers the capability to add animated pictures as 
 * choice commands for the title command window.
 *
 *
 * ==============================================================================
 *  How to Set Images
 * ==============================================================================
 *
 * If you wish to set an command to use a certain picture, first place the 
 * picture within /img/SumRndmDde/title/.
 *
 * Next, add a new item to the "Image Data" Parameter list.
 *
 * Set "Image" to the name of the image file.
 * Set "Symbol" to the symbol the command the image should be used for.
 *
 * You can optionally define a specific position for the command by
 * setting the "X Position" and "Y Position" Parameters also.
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
 *
 */

/*~struct~Image:
 *
 * @param Image
 * @desc The image used for the command.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Symbol
 * @desc The symbol used to connect the image to the command.
 * @default
 *
 * @param X Position
 * @desc The X position of the command.
 * Leave blank for the default position.
 * @default
 *
 * @param Y Position
 * @desc The Y position of the command.
 * Leave blank for the default position.
 * @default
 *
 */

/*:ja
 * @plugindesc タイトルの選択コマンドに画像を使用し、選択時に変化できます。
 * @author SumRndmDde
 *
 * @param Image Data
 * @text 画像データ
 * @type struct<Image>[]
 * @desc 全てのタイトルのコマンド画像のデータ
 * @default ["{\"Image\":\"NewGame\",\"Symbol\":\"newGame\",\"X Position\":\"\",\"Y Position\":\"\"}","{\"Image\":\"Continue\",\"Symbol\":\"continue\",\"X Position\":\"\",\"Y Position\":\"\"}","{\"Image\":\"Options\",\"Symbol\":\"options\",\"X Position\":\"\",\"Y Position\":\"\"}","{\"Image\":\"Shutdown\",\"Symbol\":\"shutdown\",\"X Position\":\"\",\"Y Position\":\"\"}"]
 *
 * @param Settings
 * @text 設定
 * @default ====================================
 *
 * @param Highlight Frame
 * @text ハイライトフレーム
 * @type boolean
 * @desc 'true'の場合、コマンド画像は半分に分割されます
 * 左が非選択、右が選択された状態です。
 * @default true
 * @parent Settings
 *
 * @param Disable Opacity
 * @text 不透明度を無効にする
 * @type number
 * @min 0
 * @decimals 0
 * @desc 無効化されているコマンドの不透明度
 * @default 170
 * @parent Settings
 *
 * @param Animation Duration
 * @text アニメーションの持続時間
 * @type number
 * @min 0
 * @decimals 0
 * @desc 無効化されているコマンドの不透明度
 * @default 7
 * @parent Settings
 *
 * @param Scale Animation
 * @text 拡縮アニメーション
 * @type number
 * @min 0
 * @decimals 2
 * @desc 強調表示されたコマンドの加算拡大率
 * 0:拡大なし / 0.2:20%拡大 / 0.5:50%拡大
 * @default 0.20
 * @parent Settings
 *
 * @param X Animation
 * @text Xアニメーション
 * @type number
 * @min -9007
 * @max 9007
 * @desc ハイライトされたコマンドで発生するXシフト
 * 正:右 / 負:左
 * @default 0
 * @parent Settings
 *
 * @param Y Animation
 * @text Yアニメーション
 * @type number
 * @min -9007
 * @max 9007
 * @desc ハイライトされたコマンドで発生するYシフト
 * 正:下 / 負:上
 * @default 0
 * @parent Settings
 *
 * @param Line Height
 * @text 行高
 * @type number
 * @min 0
 * @decimals 0
 * @desc タイトルコマンドの行の高さ
 * コマンド同士が近い場合、この値を大きくします
 * @default 60
 * @parent Settings
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/title-picture-choices/
 *
 *
 * Title Picture Choices
 * Version 1.10
 * SumRndmDde
 *
 *
 * このプラグインにはGame Upgradeプラグインが必要です。
 * http://sumrndm.site/game-upgrade/
 *
 * このプラグインにはタイトルコマンドカスタマイザーも必要です。
 * http://sumrndm.site/title-command-customizer/
 *
 *
 * このプラグインは、
 * タイトルの選択コマンドに画像を使用し、選択時に変化できます。
 *
 *
 * ==========================================================================
 *  画像の設定方法
 * ==========================================================================
 *
 * コマンドに使用したい画像を下記に保存してください。
 * /img/SumRndmDde/title/
 *
 * ※下記からサンプル画像がダウンロードできます。
 *   http://sumrndm.site/title-picture-choices/
 *
 * 次に、'Image Data'パラメータリストに新しい項目を追加します。
 *
 * 画像ファイルの名前を "Image "に設定します。
 * 'Symbol'には、画像が使用するコマンドのシンボルを設定します。
 *
 * 'X Position'と 'Y Position'パラメータを設定することで、
 * コマンドの特定の位置を設定できます。
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

/*~struct~Image:ja
 *
 * @param Image
 * @text 画像
 * @desc コマンド画像
 * /img/SumRndmDde/title/内に保存
 * @default
 *
 * @param Symbol
 * @text シンボル
 * @desc コマンド画像のシンボル
 * @default
 *
 * @param X Position
 * @text X位置
 * @desc コマンドのX位置
 * デフォルト位置は無入力
 * @default
 *
 * @param Y Position
 * @text Y位置
 * @desc コマンドのY位置
 * デフォルト位置は無入力
 * @default
 *
 */

var SRD = SRD || {};
SRD.TitlePictureChoices = SRD.TitlePictureChoices || {};

var Imported = Imported || {};
Imported["SumRndmDde Title Picture Choices"] = 1.10;

function Sprite_TitlePictureChoice() {
	this.initialize.apply(this, arguments);
}

(function (_, __) {

	"use strict";

	//-----------------------------------------------------------------------------
	// SRD.Requirements
	//-----------------------------------------------------------------------------

	_.alertNeedGameUpgrade = function () {
		alert("The 'SRD_GameUpgrade' plugin is required for using the 'SRD_TitlePictureChoices' plugin.");
		if (confirm("Do you want to open the download page to 'SRD_GameUpgrade'?")) {
			window.open('http://sumrndm.site/game-upgrade/');
		}
	};

	if (!Imported["SumRndmDde Game Upgrade"]) {
		_.alertNeedGameUpgrade();
		return;
	}

	if (SRD.requirePlugin(
		'SumRndmDde Title Command Customizer',
		'SRD_TitlePictureChoices',
		'SRD_TitleCommandCustomizer',
		'http://sumrndm.site/title-command-customizer/')) return;

	//-----------------------------------------------------------------------------
	// SRD.TitlePictureChoices
	//-----------------------------------------------------------------------------

	const params = PluginManager.parameters('SRD_TitlePictureChoices');

	_.data = SRD.parse(params['Image Data'], true);

	_.meetsRequirements = !!Imported["SumRndmDde Title Command Customizer"];

	_.comImages = {};
	_.comPositions = {};

	_.highlight = String(params['Highlight Frame']).trim().toLowerCase() === 'true';
	_.opacity = parseInt(params['Disable Opacity']);
	_.duration = parseInt(params['Animation Duration']);
	_.scale = parseFloat(params['Scale Animation']);
	_.xGoal = parseInt(params['X Animation']);
	_.yGoal = parseInt(params['Y Animation']);
	_.lineHeight = parseInt(params['Line Height']);

	_.min = 1;
	_.max = 1 + _.scale;
	_.speed = (_.max - _.min) / _.duration;
	_.xSpd = (_.xGoal) / _.duration;
	_.ySpd = (_.yGoal) / _.duration;
	_.confirm = 0.05;
	_.close = 0.1;

	_.loadImage = function (filename, hue) {
		return ImageManager.loadBitmap('img/SumRndmDde/title/', filename, hue, true);
	};

	_.setup = function () {
		for (let i = 0; i < _.data.length; i++) {
			const data = _.data[i];
			const symbol = data['Symbol'];
			_.comImages[symbol] = data['Image'];
			if (data['X Position'] && data['Y Position']) {
				_.comPositions[symbol] = [data['X Position'], data['Y Position']];
			}
		}
	};

	_.setup();

	//-----------------------------------------------------------------------------
	// Window_TitleCommand
	//-----------------------------------------------------------------------------

	Window_TitleCommand.prototype._refreshAllParts = function () { };
	Window_TitleCommand.prototype._refreshCursor = function () { };

	_.Window_TitleCommand_initialize = Window_TitleCommand.prototype.initialize;
	Window_TitleCommand.prototype.initialize = function (messageWindow) {
		this._spriteChoices = [];
		_.Window_TitleCommand_initialize.apply(this, arguments);
	};

	_.Window_TitleCommand_start = Window_TitleCommand.prototype.start;
	Window_TitleCommand.prototype.start = function () {
		this._spriteChoices.forEach(function (sprite) {
			if (sprite) {
				this.removeChild(sprite);
			}
		}, this);
		_.Window_TitleCommand_start.apply(this, arguments);
	};

	Window_TitleCommand.prototype.lineHeight = function () {
		return _.lineHeight;
	};

	Window_TitleCommand.prototype.drawItem = function (index) {
		const name = this.commandName(index);
		const rect = this.itemRectForText(index);
		const symbol = this.commandSymbol(index);
		const enabled = this.isCommandEnabled(index);
		const image = _.comImages[symbol];
		const position = _.comPositions[symbol];
		if (this._spriteChoices[index]) this.removeChild(this._spriteChoices[index]);
		let sprite;
		if (image) {
			const bit = _.loadImage(image);
			sprite = new Sprite_TitlePictureChoice(bit);
			if (position) {
				sprite.mainX = position[0] - eval(__.x);
				sprite.mainY = position[1] - eval(__.y);
			} else {
				sprite.mainX = rect.x + (rect.width / 2);
				sprite.mainY = rect.y + (rect.height / 2);
			}
		} else {
			const width = this.textWidthEx(name);
			const bit = new Bitmap(width, this.contents.fontSize + 4);
			const tempCont = this.contents;
			this.contents = bit;
			if (__.textCodes) {
				this.drawTextEx(this.commandName(index), 0, 0);
			} else {
				this.drawText(this.commandName(index), 0, 0, bit.width, 'center');
			}
			this.contents = tempCont;
			sprite = new Sprite_TitlePictureChoice(bit);
			sprite.mainX = rect.x + (rect.width / 2);
			sprite.mainY = rect.y + (rect.height / 2);
		}
		if (!enabled) sprite._realOpa = (_.opacity / 255);
		else sprite._realOpa = 1;
		this._spriteChoices[index] = sprite;
		this.addChild(sprite);
	};

	Window_TitleCommand.prototype.itemTextAlign = function () {
		return 'center';
	};

	_.Window_TitleCommand_update = Window_TitleCommand.prototype.update;
	Window_TitleCommand.prototype.update = function () {
		_.Window_TitleCommand_update.apply(this, arguments);
		var length = this._spriteChoices.length;
		for (var i = 0; i < length; i++) {
			const sprite = this._spriteChoices[i];
			if (sprite) {
				sprite.opacity = this.openness * (sprite._realOpa);
				if (this.index() === i) {
					sprite.updateIncrease();
				} else {
					sprite.updateDecrease();
				}
			}
		}
	};

	_.Window_TitleCommand_close = Window_TitleCommand.prototype.close;
	Window_TitleCommand.prototype.close = function () {
		for (var i = 0; i < this._spriteChoices.length; i++) {
			if (this._spriteChoices[i]) {
				if (i === this.index()) {
					this._spriteChoices[i].startConfirm();
				} else {
					this._spriteChoices[i].startDecline();
				}
			}
		}
		_.Window_TitleCommand_close.apply(this, arguments);
	};

	//-----------------------------------------------------------------------------
	// Sprite_TitlePictureChoice
	//-----------------------------------------------------------------------------

	Sprite_TitlePictureChoice.prototype = Object.create(Sprite.prototype);
	Sprite_TitlePictureChoice.prototype.constructor = Sprite_TitlePictureChoice;

	Sprite_TitlePictureChoice.prototype.initialize = function () {
		Sprite.prototype.initialize.apply(this, arguments);
		this.anchor.x = 0.5;
		this.anchor.y = 0.5;
		this.mainX = 0;
		this.mainY = 0;
		this.offsetX = 0;
		this.offsetY = 0;
		this._duration = _.duration;
		this._breath = 1;
		this._direction = 0;
		this._frameMode = false;
		this._ready = false;
		this.bitmap.addLoadListener(function () {
			if (_.highlight) {
				this.setFrame(0, 0, this.bitmap.width / 2, this.bitmap.height);
				this._ready = true;
			}
		}.bind(this));
	};

	Sprite_TitlePictureChoice.prototype.update = function () {
		Sprite.prototype.update.apply(this, arguments);
		this.updatePosition();
		this.updateFinish();
	};

	Sprite_TitlePictureChoice.prototype.updatePosition = function () {
		this.x = this.mainX + this.offsetX;
		this.y = this.mainY + this.offsetY;
	};

	Sprite_TitlePictureChoice.prototype.startConfirm = function () {
		this._direction = 1;
	};

	Sprite_TitlePictureChoice.prototype.startDecline = function () {
		this._direction = 2;
	};

	Sprite_TitlePictureChoice.prototype.updateIncrease = function () {
		if (this._ready) {
			this.updateFrame(true);
		}
		if (this._breath < this._duration) {
			this._breath++;
			this.updateAnimation();
		}
	};

	Sprite_TitlePictureChoice.prototype.updateDecrease = function () {
		if (this._ready) {
			this.updateFrame(false);
		}
		if (this._breath > 0) {
			this._breath--;
			this.updateAnimation();
		}
	};

	Sprite_TitlePictureChoice.prototype.updateAnimation = function () {
		this.scale.x = 1 + ((this._breath / this._duration) * _.scale);
		this.scale.y = 1 + ((this._breath / this._duration) * _.scale);
		this.offsetX = ((this._breath / this._duration) * _.xGoal);
		this.offsetY = ((this._breath / this._duration) * _.yGoal);
	};

	Sprite_TitlePictureChoice.prototype.updateFrame = function (on) {
		if (this._frameMode !== on) {
			this._frameMode = on;
			if (this._frameMode) {
				this.setFrame(this.bitmap.width / 2, 0, this.bitmap.width / 2, this.bitmap.height);
			} else {
				this.setFrame(0, 0, this.bitmap.width / 2, this.bitmap.height);
			}
		}
	};

	Sprite_TitlePictureChoice.prototype.updateFinish = function (on) {
		if (this._direction) {
			if (this._direction === 1) {
				this.opacity -= (_.close * 100);
				this.scale.x += _.close;
				this.scale.y += _.close;
				if (this.opacity <= 0) {
					this._direction = 0;
					this.parent.removeChild(this);
				}
			} else if (this._direction === 2) {
				this.scale.x -= _.confirm;
				this.scale.y -= _.confirm;
				if (this._breath <= 0) {
					this._direction = 0;
					this.parent.removeChild(this);
				}
			}
		}
	};

})(SRD.TitlePictureChoices, SRD.TitleCommandCustomizer);