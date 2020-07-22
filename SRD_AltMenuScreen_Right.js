/*:
 * @plugindesc Alternative Menu Screen: Similar to the normal menu but oriented to the right.
 * @author SumRndmDde
 * @help
 *
 *
 * Alternative Menu Screen: Right
 * Version 1.00
 * SumRndmDde
 *
 *
 * Gives your game an alternative menu screen.
 * 
 * This one is a copy of the normal menu screen, 
 * but oriented to the right.
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 */
/*:ja
 * @plugindesc 代替メニュー画面。通常のメニューに似ていますが、メニューが右にあります。
 * @author SumRndmDde
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/5-alternative-menu-screens/
 *
 * Alternative Menu Screen: Right
 * Version 1.00
 * SumRndmDde
 *
 *
 * ゲームに別のメニュー画面を表示します。
 * 通常のメニュー画面のコピーですが、メニューが右になっています。
 *
 *
 * 次の機会まで
 *   ~ SumRndmDde
 */

(function () {
	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function () {
		_Scene_Menu_create.call(this);
		this._statusWindow.x = 0;
		this._goldWindow.x = this._statusWindow.width;
		this._commandWindow.x = this._statusWindow.width;
	};
})();