/*:
 * @plugindesc Allows you to copy Actors to have multiple instances of the same Actor in your game.
 * @author SumRndmDde
 *
 * @param Initial Copy Mode
 * @desc If 'true', then Copy Mode will start on. When Copy Mode is on, "Change Party Member" will copy Actors.
 * @default false
 *
 * @param Starting Copy ID
 * @desc The ID that the copies start with in the $dataActor array.
 * @default 1001
 *
 * @help
 *
 * Copy Actors
 * Version 1.00
 * SumRndmDde
 *
 *
 * This is a Plugin that allows you to copy Actors to have multiple instances
 * of the same Actor in your game.
 *
 *
 * ==========================================================================
 *  How to Make Copy Actors
 * ==========================================================================
 *
 * In order to create and add a Copy Actor to your party, use the following
 * Plugin Command:
 *
 *   CopyActor x
 *
 * This will create a Copy Actor based off of Actor ID x.
 * For example:
 *
 *   CopyActor 1
 *
 * This will create a copy of Actor ID 1 and add it to the party.
 *
 *
 * ==========================================================================
 *  Referencing Copy Actors through Variables
 * ==========================================================================
 *
 * When you create a Copy Actor through a Plugin Command, you can store the
 * Copy Actor's ID into a variable by adding a second Parameter:
 *
 *   CopyActor x y
 *
 * Set y to the ID of the Variable you wish to store the Copy Actor ID's in.
 *
 *
 * ==========================================================================
 *  Copy Actors Mode
 * ==========================================================================
 *
 * When Copy Actors Mode is turned on, using the "Change Party Member" event
 * will add copies of the Actors instead of actual originals.
 *
 * You can customize whether this is on or off at the beginning of the game
 * in the Parameters of this plugin.
 *
 * You can also use the Plugin Commands:
 *
 *   CopyActorMode ON
 *   CopyActorMode OFF
 *
 * to turn Copy Actors Mode on or off.
 *
 *
 * ==========================================================================
 *  New Game_Actor Functions
 * ==========================================================================
 *
 * In order to compensate for the new Copy Actors, there are two new functions
 * that can be used on Actor objects (instances of Game_Actor class).
 *
 *
 *   actor.copyId()
 *
 * Returns the ID of the copy. ID 0 is the original, and every number after
 * that is the number refers to the amount of Copy Actors that existed
 * at the Copy Actor's creation plus one.
 *
 * For example, the first Copy Actor has Copy ID 1, the second has Copy ID 2, 
 * the third has Copy ID 3, etc...
 *
 *
 *   actor.originalId()
 *
 * The ID of the Actor the Copy Actor was created from.
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
 * @plugindesc アクターをコピーして、同じアクターのインスタンスを複数持てます。
 * @author SumRndmDde
 *
 * @param Initial Copy Mode
 * @text 初期コピーモード
 * @type boolean
 * @on ON
 * @off OFF
 * @desc デフォルト時のコピーアクターモードをON
 * ONの場合、'メンバーの入れ替え'はActorsをコピーします。
 * @default false
 *
 * @param Starting Copy ID
 * @text 開始コピーID
 * @desc コピーが $dataActor 配列で始まるID
 * @default 1001
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/copy-actors/
 *
 *
 * Copy Actors
 * Version 1.00
 * SumRndmDde
 *
 *
 * アクターをコピーして、同じアクターのインスタンスを複数持てます。
 *
 *
 * ==========================================================================
 *  コピーアクターの作り方
 * ==========================================================================
 *
 * パーティにコピーアクターを作成して追加するには、
 * 以下のプラグインコマンドを使用します。
 *
 *   CopyActor x
 * アクターID xを元にしたコピーアクターが作成され、パーティーに追加されます。
 *
 * 例:
 *
 *   CopyActor 1
 * アクターID1のコピーが作成され、パーティーに追加されます。
 *
 *
 * ==========================================================================
 *  変数によるコピーアクターの参照
 * ==========================================================================
 *
 * プラグインコマンドでコピーアクターを作成する場合、
 * 2つ目のパラメータを追加することで
 * コピーアクターのIDを変数に格納することができます。
 *
 *   CopyActor x y
 *
 * yをコピーアクターIDを代入したい変数IDに設定します。
 *
 *
 * ==========================================================================
 *  コピーアクターモード
 * ==========================================================================
 *
 * コピーアクターモードがオンになっている場合、
 * 'メンバーの入れ替え'イベントを使用すると、
 * 実際のオリジナルの代わりにアクターのコピーが追加されます。
 * このプラグインのパラメータで、
 * ゲーム開始時にオンにするかオフにするかをカスタマイズすることができます。
 *
 * プラグインコマンドを使うこともできます。
 *
 *   CopyActorMode ON
 *   CopyActorMode OFF
 *
 * コピーアクターモードのオン/オフを切り替えます。
 *
 *
 * ==========================================================================
 *  新しいGame_Actor関数
 * ==========================================================================
 *
 * 新しいCopyActorsを補うために、
 * Actorオブジェクト(Game_Actorクラスのインスタンス)上で使用できる
 * 2つの機能を新たに追加しました。
 *
 *
 *   actor.copyId()
 *
 * コピーのIDを返します。
 * ID0がオリジナルで、それ以降の数字は全てコピーアクターの作成時に存在していた
 * コピーアクターの量に1を加えたものを指します。
 * 例えば、最初のコピーアクターはコピーID1、
 * 2番目のコピーアクターはコピーID2、
 * 3番目のコピーアクターはコピーID3などです。
 *
 *
 *   actor.originalId()
 *
 * コピーアクターが作成されたアクターのID
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
SRD.CopyActors = SRD.CopyActors || {};

var Imported = Imported || {};
Imported["SumRndmDde Copy Actors"] = 1.00;

(function (_) {

	"use strict";

	var params = PluginManager.parameters('SRD_CopyActors');

	_.initialMode = String(params['Initial Copy Mode']).trim().toLowerCase() === 'true';
	_.startId = parseInt(params['Starting Copy ID']);

	//-----------------------------------------------------------------------------
	// SRD.CopyActors
	//-----------------------------------------------------------------------------

	_.createCopy = function (id) {
		//Setup Copy ID
		$gameSystem.copyIds[id] = $gameSystem.copyIds[id] || 0;
		$gameSystem.copyIds[id]++;
		//Create Copy
		$dataActors[$gameSystem.copyIndex] = JSON.parse(JSON.stringify($dataActors[id]));
		_.setupActorVariables($dataActors[$gameSystem.copyIndex]);
		$dataActors[$gameSystem.copyIndex].originalId = $dataActors[$gameSystem.copyIndex].id;
		$dataActors[$gameSystem.copyIndex].id = $gameSystem.copyIndex;
		$dataActors[$gameSystem.copyIndex].copyId = $gameSystem.copyIds[id];
		//Store Copy Actor
		$gameSystem.copyStorage.push({ id: $gameSystem.copyIndex, actor: $dataActors[$gameSystem.copyIndex] });
		//Increment Copy ID
		var temp = $dataActors[$gameSystem.copyIndex];
		$gameSystem.copyIndex++;
		return temp;
	};

	_.setupActors = function (data) {
		for (var i = 1; i < data.length; i++) {
			if (data[i]) {
				_.setupActorVariables(data[i]);
			}
		}
	};

	_.setupActorVariables = function (actor) {
		actor.originalId = actor.id;
		actor.copyId = 0;
	};

	_.loadActors = function (data, system) {
		for (var i = 0; i < system.copyStorage.length; i++) {
			data[system.copyStorage[i].id] = system.copyStorage[i].actor;
		}
	};

	//-----------------------------------------------------------------------------
	// DataManager
	//-----------------------------------------------------------------------------

	var setupVariables = false;
	var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function () {
		if (!_DataManager_isDatabaseLoaded.call(this)) return false;
		if (!setupVariables) {
			_.setupActors($dataActors);
			setupVariables = true;
		}
		return true;
	};

	var _DataManager_extractSaveContents = DataManager.extractSaveContents;
	DataManager.extractSaveContents = function (contents) {
		_DataManager_extractSaveContents.call(this, contents);
		_.loadActors($dataActors, $gameSystem);
	};

	//-----------------------------------------------------------------------------
	// Game_System
	//-----------------------------------------------------------------------------

	var _Game_System_initialize = Game_System.prototype.initialize;
	Game_System.prototype.initialize = function () {
		_Game_System_initialize.call(this);
		this._copyActorIndex = _.startId;
		this._copyActorIds = [];
		this._copyActorStorage = [];
		this._isActorCopyActive = _.initialMode;
	};

	Object.defineProperty(Game_System.prototype, 'copyMode', {
		get: function () {
			return this._isActorCopyActive;
		},
		set: function (value) {
			this._isActorCopyActive = Boolean(value);
		},
		configurable: true
	});

	Object.defineProperty(Game_System.prototype, 'copyIndex', {
		get: function () {
			return this._copyActorIndex;
		},
		set: function (value) {
			this._copyActorIndex = Number(value);
		},
		configurable: true
	});

	Object.defineProperty(Game_System.prototype, 'copyIds', {
		get: function () {
			return this._copyActorIds;
		},
		configurable: true
	});

	Object.defineProperty(Game_System.prototype, 'copyStorage', {
		get: function () {
			return this._copyActorStorage;
		},
		configurable: true
	});

	//-----------------------------------------------------------------------------
	// Game_Actor
	//-----------------------------------------------------------------------------

	Game_Actor.prototype.copyId = function () {
		return this.actor().copyId;
	};

	Game_Actor.prototype.originalId = function () {
		return this.actor().originalId;
	};

	//-----------------------------------------------------------------------------
	// Game_Interpreter
	//-----------------------------------------------------------------------------

	var _Game_Interpreter_command129 = Game_Interpreter.prototype.command129;
	Game_Interpreter.prototype.command129 = function () {
		if ($gameSystem.copyMode && this._params[1] === 0) {
			var currentIndex = $gameSystem.copyIndex;
			$gameParty.addActor(_.createCopy(this._params[0]).id);
			if (this._params[2]) {
				$gameActors.actor(currentIndex).setup(currentIndex);
			}
			return true;
		} else {
			return _Game_Interpreter_command129.call(this);
		}
	};

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function (command, args) {
		_Game_Interpreter_pluginCommand.call(this, command, args);
		if (command.trim().toLowerCase() === 'copyactormode') {
			if (args[0].trim().toLowerCase() === 'on') {
				$gameSystem.copyMode = true;
			} else if (args[0].trim().toLowerCase() === 'off') {
				$gameSystem.copyMode = false;
			}
		}
		if (command.trim().toLowerCase() === 'copyactor') {
			var id = parseInt(args[0]);
			var currentIndex = $gameSystem.copyIndex;
			$gameParty.addActor(_.createCopy(id).id);
			$gameActors.actor(currentIndex).setup(currentIndex);
			if (args[1]) {
				$gameVariables.setValue(parseInt(args[1]), currentIndex);
			}
		}
	};

})(SRD.CopyActors);