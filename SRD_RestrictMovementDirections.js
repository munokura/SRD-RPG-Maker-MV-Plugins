/*:
 * 
 * @plugindesc Restricts moving is specific directions based on conditions or switches.
 * @author SumRndmDde
 *
 * @param Move Up Switch
 * @desc Set this to the Switch ID that would restrict the Player from moving up when ON. Set to 0 to disallow.
 * @default 0
 *
 * @param Move Right Switch
 * @desc Set this to the Switch ID that would restrict the Player from moving right when ON. Set to 0 to disallow.
 * @default 0
 *
 * @param Move Left Switch
 * @desc Set this to the Switch ID that would restrict the Player from moving left when ON. Set to 0 to disallow.
 * @default 0
 *
 * @param Move Down Switch
 * @desc Set this to the Switch ID that would restrict the Player from moving down when ON. Set to 0 to disallow.
 * @default 0
 *
 * @param Move Up Condition
 * @desc Set this to the JavaScript condition that would restrict the Player from moving up when true. Set blank disallow.
 * @default
 *
 * @param Move Right Condition
 * @desc Set this to the JavaScript condition that would restrict the Player from moving right when true. Set blank disallow.
 * @default
 *
 * @param Move Left Condition
 * @desc Set this to the JavaScript condition that would restrict the Player from moving left when true. Set blank disallow.
 * @default
 *
 * @param Move Down Condition
 * @desc Set this to the JavaScript condition that would restrict the Player from moving down when true. Set blank disallow.
 * @default
 *
 * @help
 *
 * Restrict Movement Directions
 * Version 1.00
 * SumRndmDde
 *
 * There are no Plugin Commands or Notetags.
 *
 * This Plugin restricts the Player from moving in a specific direction based 
 * on a Switch and/or JavaScript condition.
 *
 * This can be used to create specific scenes in which the Player should only
 * move in a certain direction, or puzzles and mazes which become difficult
 * without the Player's ability to move in every direction.
 *
 * If you have any requests or questions, feel free to ask me on my YouTube 
 * channel: http://youtube.com/c/SumRndmDde
 */
/*:ja
 * @plugindesc スイッチやJavaScriptの条件式でプレイヤーの移動を制限できます。
 * @author SumRndmDde
 * 
 * @param Move Up Switch
 * @text 上移動スイッチ
 * @type switch
 * @desc ON時にプレイヤーに上への移動を禁止するスイッチID
 * 無効にするには0
 * @default 0
 * 
 * @param Move Right Switch
 * @text 右移動スイッチ
 * @type switch
 * @desc ON時にプレイヤーに右への移動を禁止するスイッチID
 * 無効にするには0
 * @default 0
 * 
 * @param Move Left Switch
 * @text 左移動スイッチ
 * @type switch
 * @desc ON時にプレイヤーに左への移動を禁止するスイッチID
 * 無効にするには0
 * @default 0
 * 
 * @param Move Down Switch
 * @text 下移動スイッチ
 * @type switch
 * @desc ON時にプレイヤーに下への移動を禁止するスイッチID
 * 無効にするには0
 * @default 0
 * 
 * @param Move Up Condition
 * @text 上移動条件式
 * @desc true時にプレイヤーに上への移動を禁止するJavaScript条件式
 * 無効にするには無入力
 * @default
 * 
 * @param Move Right Condition
 * @text 右移動条件式
 * @desc true時にプレイヤーに右への移動を禁止するJavaScript条件式
 * 無効にするには無入力
 * @default
 * 
 * @param Move Left Condition
 * @text 左移動条件式
 * @desc true時にプレイヤーに左への移動を禁止するJavaScript条件式
 * 無効にするには無入力
 * @default
 * 
 * @param Move Down Condition
 * @text 下移動条件式
 * @desc true時にプレイヤーに下への移動を禁止するJavaScript条件式
 * 無効にするには無入力
 * @default
 * 
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 * 
 * 元プラグイン: http://sumrndm.site/restrict-movement-directions/
 * 
 * 
 * Restrict Movement Directions
 * Version 1.00
 * SumRndmDde
 * 
 * プラグインコマンドやメモタグはありません。
 * 
 * このプラグインは、スイッチやJavaScriptの条件に基づいて、
 * 特定の方向へのプレイヤーの移動を制限します。
 * 
 * 特定の方向にしか動けないシーンや、
 * 全方向に動けないと難しくなるパズルや迷路などにも使えます。
 * 
 * 質問があったり、このプラグインを楽しめたら、
 * 私のYouTubeチャンネルを登録してください!!
 * 
 * https://www.youtube.com/c/SumRndmDde
 * 
 */

(function () {

	var p = PluginManager.parameters('SRD_RestrictMovementDirections');
	var switches = [Number(p['Move Down Switch']), Number(p['Move Left Switch']), Number(p['Move Right Switch']),
	Number(p['Move Up Switch'])];
	var conditions = [String(p['Move Down Condition']).trim(), String(p['Move Left Condition']).trim(),
	String(p['Move Right Condition']).trim(), String(p['Move Up Condition']).trim()];

	var _Game_Player_getInputDirection = Game_Player.prototype.getInputDirection;
	Game_Player.prototype.getInputDirection = function () {
		var index = (_Game_Player_getInputDirection.call(this) / 2) - 1;
		index = (index === -1) ? 0 : index;
		if (switches[index] !== 0 && $gameSwitches.value(switches[index])) {
			return 0;
		} else if (conditions[index].length > 0 && eval(conditions[index])) {
			return 0;
		}
		return _Game_Player_getInputDirection.call(this);
	};

})();