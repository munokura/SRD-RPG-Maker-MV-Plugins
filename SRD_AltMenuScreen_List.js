/*:
 * @plugindesc Alternative Menu Screen: shows a list of Actor names, HP, and MP and gives more room for larger parties.
 * @author SumRndmDde
 *
 * @param List Columns
 * @desc The amount of columns in the list of Actors in the menu. 
 * @default 1
 *
 * @param Max Rows
 * @desc The maximum amount of rows allowed in the list of Actors in the menu. 
 * @default 10
 *
 * @param Item Height
 * @desc The height of the Actor selections in the list of Actors in the menu. 
 * @default 35
 *
 * @param Item Width
 * @desc The width of the Actor selections in the list of Actors in the menu. 
 * @default 500
 *
 * @param Command Columns
 * @desc The max amount of columns in the command selector within the menu. 
 * @default 4
 *
 * @param Command Rows
 * @desc The amount of visible rows in the command selector within the menu. 
 * @default 2
 *
 * @help
 *
 *
 * Alternative Menu Screen: Up
 * Version 1.01
 * SumRndmDde
 *
 *
 * Changelog (v1.01): Fixed Shop Choices
 *
 *
 * Gives your game an alternative menu screen.
 * 
 * This one shows a list of Actor names, HP, and MP 
 * and gives more room for larger parties.
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 */
/*:ja
 * @plugindesc 代替メニュー画面。アクター名、HP、MPの一覧を表示し、より大きなパーティに余裕を持たせます。
 * @author SumRndmDde
 *
 * @param List Columns
 * @text アクター表示の列数
 * @type number
 * @desc アクター表示の列数
 * @default 1
 *
 * @param Max Rows
 * @text アクター表示の最大行数
 * @type number
 * @desc アクター表示の最大行数
 * @default 10
 *
 * @param Item Height
 * @text アクター表示の高さ
 * @type number
 * @desc アクター表示の高さ
 * @default 35
 *
 * @param Item Width
 * @text アクター表示の幅
 * @type number
 * @desc アクター表示の幅
 * @default 500
 *
 * @param Command Columns
 * @text コマンド列数
 * @type number
 * @desc コマンドの列数
 * @default 4
 *
 * @param Command Rows
 * @text コマンド行数
 * @type number
 * @desc コマンドの行数
 * @default 2
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/5-alternative-menu-screens/
 *
 * Alternative Menu Screen: Up
 * Version 1.01
 * SumRndmDde
 *
 * Changelog (v1.01): Fixed Shop Choices
 *
 * 別のメニュー画面にします。
 * アクター、HP、MPの一覧が表示され、大きなパーティーにも余裕があります。
 *
 *
 * 次の機会まで
 *   ~ SumRndmDde
 */

(function () {
	var sumListColumns = Number(PluginManager.parameters('SRD_AltMenuScreen_List')['List Columns']);
	var sumListRows = Number(PluginManager.parameters('SRD_AltMenuScreen_List')['Max Rows']);
	var sumItemHeight = Number(PluginManager.parameters('SRD_AltMenuScreen_List')['Item Height']);
	var sumItemWidth = Number(PluginManager.parameters('SRD_AltMenuScreen_List')['Item Width']);
	var sumColumns = Number(PluginManager.parameters('SRD_AltMenuScreen_List')['Command Columns']);
	var sumRows = Number(PluginManager.parameters('SRD_AltMenuScreen_List')['Command Rows']);

	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function () {
		_Scene_Menu_create.call(this);
		this._goldWindow.x = 0;
		this._goldWindow.y = 0;
		this._commandWindow.x = 0;
		this._commandWindow.y = Graphics.height - this._commandWindow.height;
		this._statusWindow.x = (Graphics.width / 2) - (this._statusWindow.width / 2);
		this._statusWindow.y = Graphics.height - this._commandWindow.height - this._statusWindow.height;
	};
	Scene_Menu.prototype.createGoldWindow = function () {
		this._goldWindow = new Window_Gold2(0, 0);
		this._goldWindow.y = Graphics.boxHeight - this._goldWindow.height;
		this.addWindow(this._goldWindow);
	};
	Window_MenuCommand.prototype.windowWidth = function () {
		return Graphics.width;
	};
	Window_MenuCommand.prototype.maxCols = function () {
		return sumColumns;
	};
	Window_MenuCommand.prototype.numVisibleRows = function () {
		return sumRows;
	};
	Window_MenuStatus.prototype.windowWidth = function () {
		return this.itemWidth() + (this.standardPadding() * 2);
	};
	Window_MenuStatus.prototype.windowHeight = function () {
		return (this.itemHeight() * this.numVisibleRows()) + (this.standardPadding() * 2);
	};
	Window_MenuStatus.prototype.numVisibleRows = function () {
		return Math.min(this.maxItems(), sumListRows);
	};
	Window_MenuStatus.prototype.maxCols = function () {
		return sumListColumns;
	};
	Window_MenuStatus.prototype.itemHeight = function () {
		return sumItemHeight;
	};
	Window_MenuStatus.prototype.itemWidth = function () {
		return sumItemWidth;
	};
	Window_MenuStatus.prototype.drawItem = function (index) {
		this.drawItemBackground(index);
		this.drawItemStatus(index);
	};
	Window_MenuStatus.prototype.drawItemStatus = function (index) {
		var actor = $gameParty.members()[index];
		var rect = this.itemRect(index);
		var width = (rect.width / 3) - 20;
		this.drawActorName(actor, rect.x + 10, rect.y, width);
		this.drawActorHp(actor, rect.x + width + 30, rect.y, width);
		this.drawActorMp(actor, rect.x + width * 2 + 50, rect.y, width);
	};

	function Window_Gold2() {
		this.initialize.apply(this, arguments);
	}
	Window_Gold2.prototype = Object.create(Window_Base.prototype);
	Window_Gold2.prototype.constructor = Window_Gold2;
	Window_Gold2.prototype.initialize = function (x, y) {
		var width = this.windowWidth();
		var height = this.windowHeight();
		Window_Base.prototype.initialize.call(this, x, y, width, height);
		this.refresh();
	};
	Window_Gold2.prototype.windowWidth = function () {
		return Graphics.width;
	};
	Window_Gold2.prototype.windowHeight = function () {
		return this.fittingHeight(1);
	};
	Window_Gold2.prototype.refresh = function () {
		var x = this.textPadding();
		var width = this.contents.width - this.textPadding() * 2;
		this.contents.clear();
		this.drawCurrencyValue(this.value(), this.currencyUnit(), x, 0, width);
	};

	Window_Gold2.prototype.value = function () {
		return $gameParty.gold();
	};
	Window_Gold2.prototype.currencyUnit = function () {
		return TextManager.currencyUnit;
	};
	Window_Gold2.prototype.open = function () {
		this.refresh();
		Window_Base.prototype.open.call(this);
	};
})();