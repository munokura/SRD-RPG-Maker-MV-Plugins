/*:
 * @plugindesc Allows the developer to check for swipe input on the touch screen or through a mouse.
 * @author SumRndmDde
 *
 * @param Battle Only
 * @desc If this is set to 'true', then Swipe Input will only be updated during battles.
 * @default false
 *
 * @param Default Min Distance
 * @desc The default value used for minimum distance if one is not specified.
 * @default 50
 *
 * @param Default Max Time
 * @desc The default value used for maximum touch time if one is not specified.
 * @default 9999
 *
 * @param Default Min Time
 * @desc The default value used for minimum touch time if one is not specified.
 * @default 0
 *
 * @help
 *
 * Swipe Input
 * Version 1.00
 * SumRndmDde
 *
 *
 * This is a Plugin that allows the developer to check for swipe input on the 
 * touch screen or on a mouse.
 *
 *
 * ==========================================================================
 *  How to Use
 * ==========================================================================
 *
 * The main purpose of this Plugin is to help make Timed Attacks usable on
 * mobile devices. However, this Plugin can allow for other functions.
 *
 * In order to use, one must use one of the following code:
 *
 *  SwipeInput.isTriggered(direction)
 *  SwipeInput.isPressed(direction)
 *
 * These are the two main functions that can be used in the Script section
 * of a conditional branch, or through some other boolean-releated code.
 *
 *
 * ==========================================================================
 *  SwipeInput.isTriggered
 * ==========================================================================
 *
 * The first function is:
 *
 *  SwipeInput.isTriggered(direction)
 *
 * This function only returns true on the exact frame a swipe is completed.
 * This should be primailty used for code/events that should only occur
 * once per swipe.
 *
 * It needs at least one Parameter, which is the direction of the swipe that
 * is being checked:
 *
 *  SwipeInput.isTriggered('up')
 *  SwipeInput.isTriggered('right')
 *  SwipeInput.isTriggered('left')
 *  SwipeInput.isTriggered('down')
 *
 * However, there are two other optional Parameters:
 * 
 *  SwipeInput.isTriggered('direction', MinimumDistance, MaximumTime)
 *
 * Minimum Distance is the minimum amount of distance the swipe needs to be
 * to be registered as a swipe.
 *
 * Maximum Time is the maximum amount of time the swipe can go on for before
 * no longer being registered as a swipe command.
 *
 * The defaults for both Minimum Distance and Maximum Time can be customized
 * in the Parameters of this plugin.
 *
 * Examples:
 *   SwipeInput.isTriggered('up', 30, 9999)
 *   SwipeInput.isTriggered('down', 50)
 *   SwipeInput.isTriggered('left', 100, 500)
 *
 *
 * ==========================================================================
 *  SwipeInput.isPressed
 * ==========================================================================
 *
 * This is the same as SwipeInput.isTriggered, only this will constantly 
 * return true as long as a swipe has been completed and the touch is still
 * being held down.
 *
 *  SwipeInput.isPressed('up')
 *  SwipeInput.isPressed('right')
 *  SwipeInput.isPressed('left')
 *  SwipeInput.isPressed('down')
 *
 * The first mandatory Parameter is still the same and requires a direction.
 *
 *  SwipeInput.isTriggered('direction', MinimumDistance, MinimumTime)
 *
 * However, the third Parameter has been changed. As can be seen here, it has
 * been switched to Minimum Time. This refers the minimum amount of time a
 * touch input has to be pressed before it can start to be registered as a
 * swipe input.
 *
 * Examples:
 *   SwipeInput.isPressed('right', 50, 0)
 *   SwipeInput.isPressed('left', 100)
 *   SwipeInput.isPressed('up', 30, 10)
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
 * @plugindesc タッチスクリーン、マウスからのスワイプ入力を確認できるようにします。
 * @author SumRndmDde
 * 
 * @param Battle Only
 * @text 戦闘のみ
 * @type boolean
 * @on 戦闘中のみ
 * @off ゲーム中全て
 * @desc スワイプ入力は戦闘中のみ確認
 * @default false
 * 
 * @param Default Min Distance
 * @text デフォルト最小距離
 * @type number
 * @desc 最小距離を指定しない場合のデフォルト値
 * @default 50
 * 
 * @param Default Max Time
 * @text デフォルト最大時間
 * @type number
 * @desc 最大タッチ時間を指定しない場合のデフォルト値
 * @default 9999
 * 
 * @param Default Min Time
 * @text デフォルト最小時間
 * @type number
 * @desc 最小タッチ時間を指定しない場合のデフォルト値
 * @default 0
 * 
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 * 
 * 元プラグイン: http://sumrndm.site/swipe-input/
 * 
 * Swipe Input
 * Version 1.00
 * SumRndmDde
 * 
 * 
 * タッチスクリーン、マウスでスワイプ入力をチェックできるようなります。
 * 
 * ==========================================================================
 *  使い方
 * ==========================================================================
 * 
 * このプラグインの主な目的は、
 * Timed Attacksをモバイルデバイスで使えるようにすることです。
 * しかし、このプラグインは他の機能を許可することができます。
 * 
 * 使用するためには、以下のコードのいずれかを使用する必要があります。
 * 
 *  SwipeInput.isTriggered(direction)
 *  SwipeInput.isPressed(direction)
 * 
 * これらは、条件分岐のスクリプト、
 * あるいは他の boolean-releleated コードを介して
 * 使用することができる 2 つの主要な関数です。
 * 
 * ==========================================================================
 *  SwipeInput.isTriggered
 * ==========================================================================
 * 
 * 最初の機能は
 * 
 *  SwipeInput.isTriggered(direction)
 * 
 * この機能は、スワイプが完了した正確なフレームでのみtrueを返します。
 * スワイプ毎に一度しか発生しないようなコードやイベントの場合、
 * 使用するのが基本です。
 * 
 * チェックしているスワイプの方向が必要です。
 * 
 *  SwipeInput.isTriggered('up')
 *  SwipeInput.isTriggered('right')
 *  SwipeInput.isTriggered('left')
 *  SwipeInput.isTriggered('down')
 * 
 * ただし、他にオプションのパラメータが2つあります。
 * 
 *  SwipeInput.isTriggered('direction', MinimumDistance, MaximumTime)
 * 
 * MinimumDistanceは、スワイプとして登録するために必要な最小距離のことです。
 * 
 * 
 * MaximumTimeは、スワイプコマンドとして登録されなくなるまでに
 * スワイプが継続できる最大時間です。
 * 
 * 最小距離と最大時間のデフォルトは、
 * このプラグインのパラメータでカスタマイズすることができます。
 * 
 * 例:
 *   SwipeInput.isTriggered('up', 30, 9999)
 *   SwipeInput.isTriggered('down', 50)
 *   SwipeInput.isTriggered('left', 100, 500)
 * 
 * 
 * ==========================================================================
 *  SwipeInput.isPressed
 * ==========================================================================
 * 
 * SwipeInput.isTriggeredと同じですが、
 * スワイプが完了していてタッチを押し続けている間は常にtrueを返します。
 * 
 *  SwipeInput.isPressed('up')
 *  SwipeInput.isPressed('right')
 *  SwipeInput.isPressed('left')
 *  SwipeInput.isPressed('down')
 * 
 * 最初の必須パラメータはそのままで、方向を要求します。
 * 
 *  SwipeInput.isTriggered('direction', MinimumDistance, MinimumTime)
 * 
 * 3つ目のパラメータが変更されています。
 * これを見ると分かるように、MinimumTimeに変更されています。
 * タッチ入力がスワイプ入力として登録されるまでに
 * 押さなければならない最小時間を指します。
 * 
 * 例:
 *   SwipeInput.isPressed('right', 50, 0)
 *   SwipeInput.isPressed('left', 100)
 *   SwipeInput.isPressed('up', 30, 10)
 * 
 * 
 * ==========================================================================
 *  ヘルプファイルの終了
 * ==========================================================================
 * 
 * ヘルプファイルの下の方へようこそ。
 * 
 * 
 * 読んでくれてありがとう！
 * 質問があったり、このプラグインを楽しんでくれたら、
 * 私のYouTubeチャンネルを登録してください！
 * 
 * https://www.youtube.com/c/SumRndmDde
 * 
 * 
 * 次の機会まで
 *   ~ SumRndmDde
 * 
 */

var SRD = SRD || {};
SRD.SwipeInput = SRD.SwipeInput || {};

var Imported = Imported || {};
Imported["SumRndmDde Swipe Input"] = 1.00;

function SwipeInput() {
	throw new Error('This is a static class');
}

(function (_) {

	var params = PluginManager.parameters('SRD_SwipeInput');

	_.battleOnly = String(params['Battle Only']).trim().toLowerCase() === 'true';
	_.minDistance = parseInt(params['Default Min Distance']);
	_.maxTime = parseInt(params['Default Max Time']);
	_.minTime = parseInt(params['Default Min Time']);

	var _SceneManager_initInput = SceneManager.initInput;
	SceneManager.initInput = function () {
		_SceneManager_initInput.call(this);
		SwipeInput.initialize();
	};

	var _SceneManager_updateInputData = SceneManager.updateInputData;
	if (_.battleOnly) {
		SceneManager.updateInputData = function () {
			_SceneManager_updateInputData.call(this);
			if ($gameParty.inBattle()) SwipeInput.update();
		};
	} else {
		SceneManager.updateInputData = function () {
			_SceneManager_updateInputData.call(this);
			SwipeInput.update();
		};
	}

	SwipeInput.initialize = function () {
		this._isDown = false;
		this._downCount = 0;
		this._xDistance = 0;
		this._yDistance = 0;
		this._xInitial = 0;
		this._yInitial = 0;
		this._hasInitialized = true;
	};

	SwipeInput.update = function () {
		if (!TouchInput.isPressed() && !this._isDown && !this._hasInitialized) {
			this.initialize();
		}
		if (TouchInput.isPressed() && !this._isDown) {
			SwipeInput._initialTouch();
			this._hasInitialized = false;
		}
		if (!TouchInput.isPressed() && this._isDown) {
			SwipeInput._finishSwipe();
			this._hasInitialized = false;
		}
		if (this._isDown) {
			SwipeInput._incrementCount();
		}
	};

	SwipeInput.isTriggered = function (direction, minDistance, maxTime) {
		if (this._isDown) return false;
		minDistance = minDistance || _.minDistance;
		maxTime = maxTime || _.maxTime;
		if (maxTime < this._downCount) return false;
		return SwipeInput.isDirectionSufficient(direction, minDistance);
	};

	SwipeInput.isPressed = function (direction, minDistance, minTime) {
		minDistance = minDistance || _.minDistance;
		minTime = minTime || _.minTime;
		if (minTime > this._downCount) return false;
		return SwipeInput.isDirectionSufficient(direction, minDistance);
	};

	SwipeInput.isDirectionSufficient = function (direction, minDistance) {
		if (direction.trim().toLowerCase() === 'up') return this._yDistance < 0 && Math.abs(this._yDistance) > minDistance;
		else if (direction.trim().toLowerCase() === 'down') return this._yDistance > 0 && Math.abs(this._yDistance) > minDistance;
		else if (direction.trim().toLowerCase() === 'right') return this._xDistance > 0 && Math.abs(this._xDistance) > minDistance;
		else if (direction.trim().toLowerCase() === 'left') return this._xDistance < 0 && Math.abs(this._xDistance) > minDistance;
	};

	SwipeInput._initialTouch = function () {
		this._isDown = true;
		this._xInitial = TouchInput.x;
		this._yInitial = TouchInput.y;
	};

	SwipeInput._finishSwipe = function () {
		this._isDown = false;
		this._xDistance = TouchInput.x - this._xInitial;
		this._yDistance = TouchInput.y - this._yInitial;
	};

	SwipeInput._incrementCount = function () {
		this._downCount++;
	};

})(SRD.SwipeInput);