/*:
 * @plugindesc Adds more options for waiting in your events.
 * @author SumRndmDde
 *
 * @param SE Wait Buffer
 * @desc This is a guarenteed amount of waiting frames that occur when checking for SE to end.
 * @default 4
 *
 * @help
 *
 * Wait Options
 * Version 1.01
 * SumRndmDde
 *
 *
 * This is a plugin that adds more options for waiting during events.
 *
 *
 * ==========================================================================
 *  Plugin Commands
 * ==========================================================================
 *
 * How to wait for a specific amount of time:
 *
 *
 *   Wait [number] Frames
 *
 * Allows you to wait for a certain amount of frames.
 *
 *
 *   Wait [number] Seconds
 *
 * Allows you to wait for a certain amount of seconds.
 *
 *
 *   Wait [number] Minutes
 *
 * Allows you to wait for a certain amount of minutes.
 *
 *
 * ==========================================================================
 *
 *
 *   Wait for Route
 *
 * Waits for all movement routes to complete.
 *
 *
 *   Wait for Animation
 *
 * Waits for all animations to complete.
 *
 *
 *   Wait for Balloon
 *
 * Waits for all balloon animations to complete.
 *
 *
 *   Wait for Message
 *
 * Waits for all messages to complete (best for parallel processes).
 *
 *
 *   Wait for Transfer
 *
 * Waits for map transfer to complete
 *
 *
 *   Wait for Scroll
 *
 * Waits for scrolling to complete.
 *
 *
 *   Wait for Gather
 *
 * Waits for all followers to gather.
 *
 *
 *   Wait for Action
 *
 * Waits for battle action to complete.
 *
 *
 *   Wait for Video
 *
 * Waits for all videos to complete playing.
 *
 *
 *   Wait for Image
 *
 * Waits for images to load.
 *
 *
 *   Wait for SE
 *
 * Waits for all sound effects to stop playing.
 *
 *
 *   Wait for ME
 *
 * Waits for all music effects to stop playing.
 *
 *
 * ==========================================================================
 *
 *
 *   Cancel Wait
 *
 * Cancels all waiting.
 *
 *
 * ==========================================================================
 *  How to Make Custom Waiting Conditions
 * ==========================================================================
 *
 *   Wait for Condition [condition]
 *
 * Waits for a custom coindition.
 *
 *
 * Example:
 *
 *   Wait for Condition $gameVariable.value(3) > 5
 *
 * This will wait until Variable 3 is greater than 5.
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
 * @plugindesc イベントコマンド'ウェイト'を代替拡張したプラグインコマンドが使えます
 * @author SumRndmDde
 *
 * @param SE Wait Buffer
 * @desc SEが終了するを確認する際に発生する待ち枠の予備量
 * @type number
 * @default 4
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/wait-options/
 *
 *
 * Wait Options
 * Version 1.01
 * SumRndmDde
 *
 *
 * イベントコマンド'ウェイト'を代替拡張したプラグインコマンドが使えます。
 *
 *
 * ==========================================================================
 *  プラグインコマンド
 * ==========================================================================
 *
 * 特定の時間を待つ方法。
 *
 *
 *   Wait [number] Frames
 * 一定のフレーム数を待ちます。
 *
 *
 *   Wait [number] Seconds
 * 一定の秒数を待ちます。
 *
 *
 *   Wait [number] Minutes
 * 一定の分数を待ちます。
 *
 *
 * ==========================================================================
 *
 *
 *   Wait for Route
 * 全ての移動経路が完了するのを待ちます。
 *
 *
 *   Wait for Animation
 * 全てのアニメーションが完了するのを待ちます。
 *
 *
 *   Wait for Balloon
 * 全てのバルーン アニメーションが完了するのを待ちます。
 *
 *
 *   Wait for Message
 * 全てのメッセージが完了するのを待ちます（並列プロセスに最適）。
 *
 *
 *   Wait for Transfer
 * マップ移動が完了するするのを待ちます。
 *
 *
 *   Wait for Scroll
 * スクロールが完了するまで待ちます。
 *
 *
 *   Wait for Gather
 * 全てのフォロワーが集まるのを待ちます。
 *
 *
 *   Wait for Action
 * バトルアクションが完了するのを待つ
 *
 *
 *   Wait for Video
 * 全ての動画の再生が完了するのを待ちます。
 *
 *
 *   Wait for Image
 *
 * 画像が読み込まれるのを待ちます。
 *
 *
 *   Wait for SE
 * 全ての効果音の再生が停止するまで待ちます。
 *
 *
 *   Wait for ME
 * 全ての音楽エフェクトの再生が停止するまで待ちます。
 *
 *
 * ==========================================================================
 *
 *
 *   Cancel Wait
 * 全ての待機をキャンセルします。
 *
 *
 * ==========================================================================
 *  カスタム待機条件の作成方法
 * ==========================================================================
 *
 *   Wait for Condition [condition]
 * カスタム・コーディネイションを待ちます。
 *
 *
 * 例:
 *
 *   Wait for Condition $gameVariable.value(3) > 5
 * 変数 3 が 5 より大きくなるまで待ちます。
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
SRD.WaitOptions = SRD.WaitOptions || {};

var Imported = Imported || {};
Imported["SumRndmDde Wait Options"] = 1.01;

(function (_) {

	"use strict";

	var params = PluginManager.parameters('SRD_WaitOptions');

	_.seWait = parseInt(params['SE Wait Buffer']);

	var _Game_Interpreter_clear = Game_Interpreter.prototype.clear;
	Game_Interpreter.prototype.clear = function () {
		_Game_Interpreter_clear.apply(this, arguments);
		this._waitConditions = [];
	};

	var _Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
	Game_Interpreter.prototype.updateWaitMode = function () {
		if (this._waitMode === 'se') {
			if (AudioManager._seBuffers.length === 0) {
				this._waitMode = '';
			} else {
				var playing = false;
				for (var i = 0; i < AudioManager._seBuffers.length; i++) {
					if (AudioManager._seBuffers[i].isPlaying()) {
						playing = true;
					}
				}
				if (playing) return true;
			}
		} else if (this._waitMode === 'me') {
			if (AudioManager._meBuffer) {
				return true;
			} else {
				this._waitMode = '';
			}
		}
		var waiting = _Game_Interpreter_updateWaitMode.apply(this, arguments);
		for (var i = 0; i < this._waitConditions.length; i++) {
			if (!eval(this._waitConditions[i])) {
				waiting = true;
				if (!this._waitMode) this._waitMode = 'condition';
				break;
			} else {
				this._waitConditions.pop(i, 1);
				i--;
			}
		}

		return waiting;
	};

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function (command, args) {
		_Game_Interpreter_pluginCommand.apply(this, arguments);
		if (command.trim().toLowerCase() === 'wait') {
			if (args[0].trim().toLowerCase() === 'for') {
				if (args[1].trim().toLowerCase() === 'condition') {
					var condition = '';
					for (var i = 2; i < args.length; i++) {
						condition += args[i] + ' ';
					}
					this._waitConditions.push(condition);
				} else {
					this.setWaitMode(args[1].trim().toLowerCase());
					if (this._waitMode === 'se') {
						this.wait(_.seWait);
					}
				}
			} else if (args[0].match(/(\d+)/i)) {
				var value = parseInt(RegExp.$1);
				if (args[1].trim().toLowerCase() === 'frames') {
					this.wait(value);
				} else if (args[1].trim().toLowerCase() === 'seconds') {
					this.wait(value * 60);
				} else if (args[1].trim().toLowerCase() === 'minutes') {
					this.wait(value * 60 * 60);
				}
			}
		} else if (command.trim().toLowerCase() === 'cancel' && args[0].trim().toLowerCase() === 'wait') {
			this.setWaitMode('');
			this.wait(0);
		}
	};

})(SRD.WaitOptions);