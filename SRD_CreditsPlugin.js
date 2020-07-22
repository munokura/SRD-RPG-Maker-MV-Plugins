/*:
 * @plugindesc Adds a scene to your game that allows developers to give organized credits to people.
 * @author SumRndmDde
 *
 * @param Credit Data
 * @type struct<Categories>[]
 * @desc The data for the credit information.
 * @default ["{\"Name\":\"Plugins\",\"Credits\":\"[\\\"{\\\\\\\"Name\\\\\\\":\\\\\\\"SumRndmDde\\\\\\\",\\\\\\\"URL\\\\\\\":\\\\\\\"http://sumrndm.site\\\\\\\",\\\\\\\"Description\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SumRndmDde made plugins for this game.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Name\\\\\\\":\\\\\\\"Example 1\\\\\\\",\\\\\\\"URL\\\\\\\":\\\\\\\"https://www.google.com\\\\\\\",\\\\\\\"Description\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This is an example.\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\nYou can delete this by changing the \\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Credit Data\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\" parameter.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Name\":\"Art Assets\",\"Credits\":\"[\\\"{\\\\\\\"Name\\\\\\\":\\\\\\\"Kadokawa\\\\\\\",\\\\\\\"URL\\\\\\\":\\\\\\\"http://www.rpgmakerweb.com/company/beta\\\\\\\",\\\\\\\"Description\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This is credit to Kadokawa for RTP assets.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Name\":\"Music\",\"Credits\":\"[]\"}","{\"Name\":\"Other\",\"Credits\":\"[]\"}"]
 *
 * @param Add to Title?
 * @desc If this is set to 'true', a command will be added to the title screen that will open the credits page.
 * @default true
 *
 * @param Command Name
 * @desc The name of the command on the title command window.
 * @default Credits
 *
 * @param Window Options
 * @default ====================================
 *
 * @param Use Desc. Window
 * @type boolean
 * @desc If ON, the description window will be shown on the right side of the screen.
 * @default true
 * @parent Window Options
 *
 * @param Credit Window Width
 * @type number
 * @min 1
 * @decimals 0
 * @desc The width of the credit list window.
 * @default 408
 * @parent Window Options
 *
 * @param Desc. Text Size
 * @type number
 * @min 1
 * @decimals 0
 * @desc The font size of the text within the description window.
 * @default 20
 * @parent Window Options
 *
 * @param Category Rows
 * @type number
 * @min 1
 * @decimals 0
 * @desc The amount of rows on the category window.
 * @default 1
 * @parent Window Options
 *
 * @param Category Columns
 * @type number
 * @min 1
 * @decimals 0
 * @desc The amount of columns on the category window.
 * @default 4
 * @parent Window Options
 *
 * @param Text Alignment
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc The alignment of the names/credits text on the left side of the screen.
 * @default left
 * @parent Window Options
 *
 * @help
 *
 * Credits Plugin
 * Version 1.11
 * SumRndmDde
 *
 *
 * This plugin requires the Game Upgrade plugin:
 * http://sumrndm.site/game-upgrade/
 *
 * This is a plugin that adds an entirely new scene to your game for the 
 * purpose of giving credit!
 *
 *
 * ==========================================================================
 *  Calling the Credits Page
 * ==========================================================================
 *
 * In order to open the Credits, simply use the Plugin Command:
 *
 *   OpenCredits
 *
 *
 * Or, alternatively, you can use the script call:
 *
 *   SceneManager.push(Scene_SRD_Credits)
 *
 *
 * If you wish to bind it to the menu using Yanfly's Main Menu Manager,
 * use the following bind:
 *
 *   this.openCredits.bind(this)
 *
 *
 * ==========================================================================
 *  Creating Credits Data
 * ==========================================================================
 *
 * To set up all the credit information, you must use the Credit Data 
 * Parameter. The structure of the data is set of like this:
 *
 * Categories
 *  = Category
 *    - Name
 *    - Credits
 *      = Credit
 *        - Name
 *        - URL
 *        - Description
 *
 *
 * There is some sample data already set up.
 * Please feel free to use it as an example!
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

/*~struct~Categories:
 *
 * @param Name
 * @desc The name of the category.
 * @default
 *
 * @param Credits
 * @type struct<Credits>[]
 * @desc The list of credits within this category.
 * @default []
 *
 */

/*~struct~Credits:
 *
 * @param Name
 * @desc The name of the credit that will be listed.
 * @default
 *
 * @param URL
 * @desc The link that clicking on the name will open in a browser.
 * @default
 *
 * @param Description
 * @type note
 * @desc The description pf the credit.
 * @default ""
 *
 */

/*:ja
 * @plugindesc クレジット表示用に新しいシーンを追加します。
 * @author SumRndmDde
 *
 * @param Credit Data
 * @text クレジット情報
 * @type struct<Categories>[]
 * @desc クレジット情報のデータ
 * @default ["{\"Name\":\"プラグイン\",\"Credits\":\"[\\\"{\\\\\\\"Name\\\\\\\":\\\\\\\"SumRndmDde\\\\\\\",\\\\\\\"URL\\\\\\\":\\\\\\\"http://sumrndm.site\\\\\\\",\\\\\\\"Description\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SumRndmDde氏のプラグイン\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Name\\\\\\\":\\\\\\\"ムノクラ\\\\\\\",\\\\\\\"URL\\\\\\\":\\\\\\\"https://fungamemake.com\\\\\\\",\\\\\\\"Description\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"プラグインの和訳等\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Name\":\"素材\",\"Credits\":\"[\\\"{\\\\\\\"Name\\\\\\\":\\\\\\\"Kadokawa\\\\\\\",\\\\\\\"URL\\\\\\\":\\\\\\\"https://tkool.jp/mv/\\\\\\\",\\\\\\\"Description\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"このゲームはRPGツクールMVで作成しました。\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Name\":\"音楽\",\"Credits\":\"[]\"}","{\"Name\":\"その他\",\"Credits\":\"[]\"}"]
 *
 * @param Add to Title?
 * @text タイトル追加
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc タイトル画面にクレジットページを開くコマンドを表示
 * 表示:true / 非表示:false
 * @default true
 *
 * @param Command Name
 * @text コマンド名
 * @desc タイトルコマンドウィンドウに表示されるコマンド名
 * @default クレジット
 *
 * @param Window Options
 * @text ウィンドウオプション
 * @default ====================================
 *
 * @param Use Desc. Window
 * @text 説明ウィンドウ使用
 * @type boolean
 * @desc ONにすると、画面右側に説明ウィンドウが表示
 * @default true
 * @parent Window Options
 *
 * @param Credit Window Width
 * @text クレジットウィンドウ幅
 * @type number
 * @min 1
 * @decimals 0
 * @desc クレジット一覧ウィンドウの幅
 * @default 408
 * @parent Window Options
 *
 * @param Desc. Text Size
 * @text 文字サイズ
 * @type number
 * @min 1
 * @decimals 0
 * @desc 説明ウィンドウ内のテキストのフォントサイズ
 * @default 20
 * @parent Window Options
 *
 * @param Category Rows
 * @text カテゴリ行数
 * @type number
 * @min 1
 * @decimals 0
 * @desc カテゴリウィンドウの行数
 * @default 1
 * @parent Window Options
 *
 * @param Category Columns
 * @text カテゴリー列数
 * @type number
 * @min 1
 * @decimals 0
 * @desc カテゴリウィンドウの列数
 * @default 4
 * @parent Window Options
 *
 * @param Text Alignment
 * @text テキスト行揃え
 * @type select
 * @option 左
 * @value left
 * @option 中央
 * @value center
 * @option 右
 * @value right
 * @desc 画面左側に表示される名前/クレジットの行揃え
 * 左:left / 中央:center / 右:right
 * @default left
 * @parent Window Options
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/credits-plugin/
 *
 *
 * Credits Plugin
 * Version 1.11
 * SumRndmDde
 *
 *
 * クレジット表示用に新しいシーンを追加するプラグインです。
 *
 * このプラグインにはSRD_GameUpgradeプラグインが必要です。
 * http://sumrndm.site/game-upgrade/
 *
 * プラグイン管理で、このプラグインをSRD_GameUpgradeの下側に配置してください。
 *
 *
 * ==========================================================================
 *  クレジットページの呼び出し
 * ==========================================================================
 *
 * クレジットを開くには、プラグインコマンドを使用してください。
 *
 *   OpenCredits
 *
 *
 * スクリプトコールを使用することもできます。
 *
 *   SceneManager.push(Scene_SRD_Credits)
 *
 *
 * YEP_MainMenuManagerを使ってメニューに追加する場合、
 * 以下のようにバインドします。
 *
 *   this.openCredits.bind(this)
 *
 *
 * ==========================================================================
 *  クレジットデータの作成
 * ==========================================================================
 *
 * クレジット情報を設定するには、
 * クレジットデータパラメータを使用する必要があります。
 * データの構造は下記のように設定されています。
 *
 * Categories
 *  = Category
 *    - Name
 *    - Credits
 *      = Credit
 *        - Name
 *        - URL
 *        - Description
 *
 *
 * デフォルでサンプルデータが設定されています。
 * 一例としてご利用ください。
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

/*~struct~Categories:
 *
 * @param Name
 * @text カテゴリ名
 * @desc カテゴリ名
 * @default
 *
 * @param Credits
 * @text クレジット一覧
 * @type struct<Credits>[]
 * @desc カテゴリ内のクレジット一覧
 * @default []
 *
 */

/*~struct~Credits:
 *
 * @param Name
 * @text 表示されるクレジット名
 * @desc 表示されるクレジット名
 * @default
 *
 * @param URL
 * @text URL
 * @desc 名前をクリックするとブラウザで開くリンク
 * @default
 *
 * @param Description
 * @text クレジットの説明
 * @type note
 * @desc クレジットの説明
 * @default ""
 *
 */

var SRD = SRD || {};
SRD.Credits = SRD.Credits || {};

var Imported = Imported || {};
Imported["SumRndmDde Credits"] = 1.11;

function Scene_SRD_Credits() {
	this.initialize.apply(this, arguments);
}

function Window_CreditsDescripton() {
	this.initialize.apply(this, arguments);
}

function Window_CreditsCategory() {
	this.initialize.apply(this, arguments);
}

function Window_CreditsList() {
	this.initialize.apply(this, arguments);
}

(function (_) {

	"use strict";

	//-----------------------------------------------------------------------------
	// SRD.Requirements
	//-----------------------------------------------------------------------------

	_.alertNeedGameUpgrade = function () {
		alert("The 'SRD_GameUpgrade' plugin is required for using the 'SRD_CreditsPlugin' plugin.");
		if (confirm("Do you want to open the download page to 'SRD_GameUpgrade'?")) {
			window.open('http://sumrndm.site/game-upgrade/');
		}
	};

	if (!Imported["SumRndmDde Game Upgrade"]) {
		_.alertNeedGameUpgrade();
		return;
	}

	//-----------------------------------------------------------------------------
	// SRD.Credits
	//-----------------------------------------------------------------------------

	var params = PluginManager.parameters('SRD_CreditsPlugin');

	if (params['File Location']) {
		alert("Please update the parameters for 'SRD_CreditsPlugin'!");
		return;
	}

	_.data = SRD.parse(params['Credit Data'], true);

	_.location = String(params['File Location']);
	_.useTitle = String(params['Add to Title?']).trim().toLowerCase() === 'true';
	_.titleName = String(params['Command Name']);

	_.descWindow = String(params['Use Desc. Window']).trim().toLowerCase() === 'true';
	_.creditWidth = parseInt(params['Credit Window Width']);
	_.fontSize = parseInt(params['Desc. Text Size']);
	_.rows = parseInt(params['Category Rows']);
	_.columns = parseInt(params['Category Columns']);
	_.align = String(params['Text Alignment']);

	_.categories = [];
	_.lists = {};
	_.fileInfo = '';

	_.setup = function () {
		for (let i = 0; i < _.data.length; i++) {
			const data = _.data[i];
			const category = data['Name'];
			const credits = data['Credits'];
			_.categories.push(category);
			_.lists[category] = [];
			for (let j = 0; j < credits.length; j++) {
				const credit = credits[j];
				_.lists[category][j] = {};
				if (credit['Name']) {
					_.lists[category][j].name = credit['Name'];
				}
				if (credit['URL']) {
					_.lists[category][j].link = credit['URL'];
				}
				if (credit['Description']) {
					_.lists[category][j].desc = credit['Description'];
				}
			}
		}
	};

	_.setup();

	//-----------------------------------------------------------------------------
	// Game_Interpreter
	//-----------------------------------------------------------------------------

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function (command, args) {
		_Game_Interpreter_pluginCommand.apply(this, arguments);
		if (command.trim().toLowerCase() === 'OpenCredits') {
			SceneManager.push(Scene_SRD_Credits);
		}
	};

	//-----------------------------------------------------------------------------
	// Scene_Base
	//-----------------------------------------------------------------------------

	Scene_Base.prototype.openCredits = function () {
		SceneManager.push(Scene_SRD_Credits);
	};

	//-----------------------------------------------------------------------------
	// Scene_Title
	//-----------------------------------------------------------------------------

	Scene_Title.prototype.openCredits = function () {
		this._commandWindow.close();
		SceneManager.push(Scene_SRD_Credits);
	};

	var _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
	Scene_Title.prototype.createCommandWindow = function () {
		_Scene_Title_createCommandWindow.apply(this, arguments);
		if (_.useTitle) this._commandWindow.setHandler('srd-credits', this.openCredits.bind(this));
	};

	//-----------------------------------------------------------------------------
	// Window_TitleCommand
	//-----------------------------------------------------------------------------

	var _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
	Window_TitleCommand.prototype.makeCommandList = function () {
		_Window_TitleCommand_makeCommandList.apply(this, arguments);
		if (_.useTitle) this.addCommand(_.titleName, 'srd-credits');
	};

	//-----------------------------------------------------------------------------
	// Scene_SRD_Credits
	//-----------------------------------------------------------------------------

	Scene_SRD_Credits.prototype = Object.create(Scene_MenuBase.prototype);
	Scene_SRD_Credits.prototype.constructor = Scene_SRD_Credits;

	Scene_SRD_Credits.prototype.initialize = function () {
		Scene_MenuBase.prototype.initialize.call(this);
	};

	Scene_SRD_Credits.prototype.create = function () {
		Scene_MenuBase.prototype.create.call(this);
		this.createWindowLayer();
		this.createCategoryWindow();
		this.createCreditsWindow();
		if (_.descWindow) this.createDescriptionWindow();
	};

	Scene_SRD_Credits.prototype.createCategoryWindow = function () {
		this._categoryWindow = new Window_CreditsCategory();
		this._categoryWindow.setHandler('ok', this.onCategoryOk.bind(this));
		this._categoryWindow.setHandler('cancel', this.popScene.bind(this));
		this.addWindow(this._categoryWindow);
	};

	Scene_SRD_Credits.prototype.createCreditsWindow = function () {
		var wy = this._categoryWindow.y + this._categoryWindow.height;
		var wh = Graphics.boxHeight - wy;
		var width = (_.descWindow) ? _.creditWidth : Graphics.boxWidth;
		this._creditWindow = new Window_CreditsList(0, wy, width, wh);
		this._creditWindow.setHandler('ok', this.onCreditOk.bind(this));
		this._creditWindow.setHandler('cancel', this.onCreditCancel.bind(this));
		this.addWindow(this._creditWindow);
		this._categoryWindow.setCreditWindow(this._creditWindow);
	};

	Scene_SRD_Credits.prototype.createDescriptionWindow = function () {
		this._descriptionWindow = new Window_CreditsDescripton(Graphics.boxWidth - _.creditWidth, this._creditWindow.height);
		this._descriptionWindow.x = this._creditWindow.width;
		this._descriptionWindow.y = this._creditWindow.y;
		this.addWindow(this._descriptionWindow);
		this._creditWindow.setDescriptionWindow(this._descriptionWindow);
	};

	Scene_SRD_Credits.prototype.onCategoryOk = function () {
		this._creditWindow.activate();
		this._creditWindow.selectLast();
	};

	Scene_SRD_Credits.prototype.onCreditOk = function () {
		this.useCredit();
	};

	Scene_SRD_Credits.prototype.onCreditCancel = function () {
		this._creditWindow.deselect();
		this._categoryWindow.activate();
		if (_.descWindow) this._descriptionWindow.clear();
	};

	Scene_SRD_Credits.prototype.useCredit = function () {
		if (this.credit().link) SRD.openLink(this.credit().link)
		this._creditWindow.activate();

	};

	Scene_SRD_Credits.prototype.credit = function () {
		return this._creditWindow.credit();
	};

	//-----------------------------------------------------------------------------
	// Window_CreditsCategory
	//-----------------------------------------------------------------------------

	Window_CreditsCategory.prototype = Object.create(Window_HorzCommand.prototype);
	Window_CreditsCategory.prototype.constructor = Window_CreditsCategory;

	Window_CreditsCategory.prototype.initialize = function () {
		Window_HorzCommand.prototype.initialize.call(this, 0, 0);
	};

	Window_CreditsCategory.prototype.windowWidth = function () {
		return Graphics.boxWidth;
	};

	Window_CreditsCategory.prototype.maxCols = function () {
		return _.columns;
	};

	Window_CreditsCategory.prototype.numVisibleRows = function () {
		return _.rows;
	};

	Window_CreditsCategory.prototype.update = function () {
		Window_HorzCommand.prototype.update.call(this);
		if (this._creditWindow) {
			this._creditWindow.setCategory(this.currentSymbol());
		}
	};

	Window_CreditsCategory.prototype.makeCommandList = function () {
		for (var i = 0; i < _.categories.length; i++) {
			this.addCommand(_.categories[i], _.categories[i]);
		}
	};

	Window_CreditsCategory.prototype.setCreditWindow = function (creditWindow) {
		this._creditWindow = creditWindow;
		this.update();
	};

	//-----------------------------------------------------------------------------
	// Window_CreditsList
	//-----------------------------------------------------------------------------

	Window_CreditsList.prototype = Object.create(Window_Selectable.prototype);
	Window_CreditsList.prototype.constructor = Window_CreditsList;

	Window_CreditsList.prototype.initialize = function (x, y, width, height) {
		Window_Selectable.prototype.initialize.call(this, x, y, width, height);
		this._category = 'none';
		this._data = [];
	};

	Window_CreditsList.prototype.setCategory = function (category) {
		if (this._category !== category) {
			this._category = category;
			this.refresh();
			this.resetScroll();
		}
	};

	Window_CreditsList.prototype.maxCols = function () {
		return 1;
	};

	Window_CreditsList.prototype.spacing = function () {
		return 48;
	};

	Window_CreditsList.prototype.maxItems = function () {
		return this._data ? this._data.length : 1;
	};

	Window_CreditsList.prototype.credit = function () {
		var index = this.index();
		return this._data && index >= 0 ? this._data[index] : null;
	};

	Window_CreditsList.prototype.makeItemList = function () {
		if (_.lists[this._category]) this._data = _.lists[this._category];
	};

	Window_CreditsList.prototype.drawItemName = function (item, x, y, width) {
		width = width || 312;
		if (item) {
			this.resetTextColor();
			this.drawText(item.name, x, y, width, _.align);
		}
	};

	Window_CreditsList.prototype.selectLast = function () {
		this.select(0);
	};

	Window_CreditsList.prototype.drawItem = function (index) {
		var item = this._data[index];
		if (item) {
			var rect = this.itemRect(index);
			rect.width -= this.textPadding();
			this.drawItemName(item, rect.x + 10, rect.y, rect.width - 10);
			this.changePaintOpacity(1);
		}
	};

	Window_CreditsList.prototype.refresh = function () {
		this.makeItemList();
		this.createContents();
		this.drawAllItems();
	};

	Window_CreditsList.prototype.setDescriptionWindow = function (descriptionWindow) {
		this._descriptionWindow = descriptionWindow;
		this.update();
	};

	Window_CreditsList.prototype.update = function () {
		Window_Selectable.prototype.update.call(this);
		if (this._descriptionWindow && this.credit() && this.credit().desc &&
			this._descriptionWindow._value != this.credit().desc) {
			this._descriptionWindow.setDescription(this.credit().desc);
		} else if (this.credit() && !this.credit().desc) {
			this._descriptionWindow.setDescription('');
		}
	};

	//-----------------------------------------------------------------------------
	// Window_CreditsDescripton
	//-----------------------------------------------------------------------------

	Window_CreditsDescripton.prototype = Object.create(Window_Base.prototype);
	Window_CreditsDescripton.prototype.constructor = Window_CreditsDescripton;

	Window_CreditsDescripton.prototype.initialize = function (width, height) {
		Window_Base.prototype.initialize.call(this, 0, 0, width, height);
		this._value = '';
	};

	Window_CreditsDescripton.prototype.refresh = function () {
		this.contents.clear();
		var lines = this._value.split(/[\n\r]/);
		for (var i = 0; i < lines.length; i++) {
			this.drawTextEx(lines[i], 0, i * this.lineHeight());
		}
	};

	Window_CreditsDescripton.prototype.standardFontSize = function () {
		return _.fontSize;
	};

	Window_CreditsDescripton.prototype.lineHeight = function () {
		return this.standardFontSize() + 8;
	};

	Window_CreditsDescripton.prototype.setDescription = function (description) {
		this._value = description;
		this.refresh();
	};

	Window_CreditsDescripton.prototype.clear = function () {
		this._value = '';
		this.refresh();
	};

})(SRD.Credits);