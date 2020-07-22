/*:
 * @plugindesc Allows Common Events to be played at the end of the battle depending on the results.
 * @author SumRndmDde
 *
 * @param Win Common Event
 * @desc This is the Common Event that plays at the end of a battle that the party wins. Set to 0 to disallow.
 * @default 0
 *
 * @param Lose Common Event
 * @desc This is the Common Event that plays at the end of a battle that the party loses. Set to 0 to disallow.
 * @default 0
 *
 * @param Escape Common Event
 * @desc This is the Common Event that plays at the end of a battle that the party escapes. Set to 0 to disallow.
 * @default 0
 *
 * @param Abort Common Event
 * @desc This is the Common Event that plays at the end of a battle when it is aborted. Set to 0 to disallow.
 * @default 0
 *
 * @param Troop ID Variable
 * @desc If set to a Variable ID, that Game Variable will store the ID of the troop that was fought at the end of the battle.
 * @default 0
 *
 * @help
 *
 * Battle End Events
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin allows Common Events to be played at the end of the battle 
 * depending on the results.
 *
 *
 * ==============================================================================
 *  Plugin Commands
 * ==============================================================================
 *
 * The following Plugin Commands can be used throughout your game to change the 
 * Common Events called at the end of the battle. These can even be used in
 * troop events to dynamically change what Common Event will be played at the 
 * end of the battle.
 *
 *
 *   SetWinCommonEvent [id]
 *   SetLoseCommonEvent [id]
 *   SetEscapeCommonEvent [id]
 *   SetAbortCommonEvent [id]
 *
 * These change the win, lose, escape, and abort Common Events respectively.
 *
 *
 * For example:
 *
 *   SetWinCommonEvent 5
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
/*:ja
 * @plugindesc 戦闘終了(マップに戻る前)時に結果に応じたコモンイベントを実行できます。
 * @author SumRndmDde
 *
 * @param Win Common Event
 * @text 勝利コモンイベント
 * @type common_event
 * @desc 勝利した戦闘終了時に実行されるコモンイベント
 * 無効にするには0
 * @default 0
 *
 * @param Lose Common Event
 * @text 敗北コモンイベント
 * @type common_event
 * @desc 敗北した戦闘終了時に実行されるコモンイベント
 * 無効にするには0
 * @default 0
 *
 * @param Escape Common Event
 * @text 逃走コモンイベント
 * @type common_event
 * @desc 逃走した戦闘終了時に実行されるコモンイベント
 * 無効にするには0
 * @default 0
 *
 * @param Abort Common Event
 * @text 中断コモンイベント
 * @type common_event
 * @desc 中断された戦闘終了時に実行されるコモンイベント
 * 無効にするには0
 * @default 0
 *
 * @param Troop ID Variable
 * @text 敵グループID変数
 * @type variable
 * @desc 変数IDを指定。
 * 戦闘終了時に戦った敵グループIDが代入されます。
 * @default 0
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/battle-end-events/
 *
 *
 * Battle End Events
 * Version 1.00
 * SumRndmDde
 *
 *
 * 戦闘終了(マップに戻る前)時に結果に応じたコモンイベントを実行できます。
 *
 *
 * ==========================================================================
 *  プラグインコマンド
 * ==========================================================================
 *
 * 以下のプラグインコマンドは、
 * 戦闘終了時に実行されるコモンイベントを変更できます。
 * 戦闘終了時にどのコモンイベントが実行されるかを動的に変更するために、
 * バトルイベントで使用することもできます。
 *
 *
 *   SetWinCommonEvent [id]
 *   SetLoseCommonEvent [id]
 *   SetEscapeCommonEvent [id]
 *   SetAbortCommonEvent [id]
 *
 * それぞれコモンイベントの勝敗、敗北、逃走、中断を変更します。
 *
 *
 * 例:
 *
 *   SetWinCommonEvent 5
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

var SRD = SRD || {};
SRD.BattleEndEvents = SRD.BattleEndEvents || {};

var Imported = Imported || {};
Imported["SumRndmDde Battle End Events"] = 1.00;

(function (_) {

	"use strict";

	//-----------------------------------------------------------------------------
	// SRD.BattleEndEvents
	//-----------------------------------------------------------------------------

	const params = PluginManager.parameters('SRD_BattleEndEvents');

	_.win = parseInt(params['Win Common Event']);
	_.lose = parseInt(params['Lose Common Event']);
	_.escape = parseInt(params['Escape Common Event']);
	_.abort = parseInt(params['Abort Common Event']);
	_.var = parseInt(params['Troop ID Variable']);

	//-----------------------------------------------------------------------------
	// BattleManager
	//-----------------------------------------------------------------------------

	_.BattleManager_initMembers = BattleManager.initMembers;
	BattleManager.initMembers = function () {
		_.BattleManager_initMembers.apply(this, arguments);
		this._endEventsInterpreter = new Game_Interpreter();
	};

	_.BattleManager_endBattle = BattleManager.endBattle;
	BattleManager.endBattle = function (result) {
		if (_.var !== 0) {
			$gameVariables.setValue(_.var, $gameTroop._troopId);
		}
		this.checkBattleEndCommonEvent(result);
		_.BattleManager_endBattle.apply(this, arguments);
	};

	BattleManager.checkBattleEndCommonEvent = function (result) {
		switch (result) {
			case 0:
				if (_.win !== 0) this._endEventsInterpreter.setup($dataCommonEvents[_.win].list);
				break;
			case 1:
				if (this._escaped) {
					if (_.escape !== 0) this._endEventsInterpreter.setup($dataCommonEvents[_.escape].list);
				} else {
					if (_.abort !== 0) this._endEventsInterpreter.setup($dataCommonEvents[_.abort].list);
				}
				break;
			case 2:
				if (_.lose !== 0) this._endEventsInterpreter.setup($dataCommonEvents[_.lose].list);
				break;
		}
	};

	_.BattleManager_updateBattleEnd = BattleManager.updateBattleEnd;
	BattleManager.updateBattleEnd = function () {
		if (this._endEventsInterpreter.isRunning()) {
			this._endEventsInterpreter.update();
			return;
		}
		_.BattleManager_updateBattleEnd.apply(this, arguments);
	};

	//-----------------------------------------------------------------------------
	// Game_Interpreter
	//-----------------------------------------------------------------------------

	_.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function (command, args) {
		_.Game_Interpreter_pluginCommand.apply(this, arguments);
		const com = command.trim().toLowerCase();
		if (com === 'setwincommonevent') {
			_.win = parseInt(args[0]);
		} else if (com === 'setlosecommonevent') {
			_.lose = parseInt(args[0]);
		} else if (com === 'setescapecommonevent') {
			_.escape = parseInt(args[0]);
		} else if (com === 'setabortcommonevent') {
			_.abort = parseInt(args[0]);
		}
	};

})(SRD.BattleEndEvents);