/*:
 * @plugindesc Adds a Fullscreen Toggle to the Options Window
 * @author SumRndmDde
 *
 * @param Option Name
 * @desc The name used by the Fullscreen Toggle option.
 * @default Fullscreen
 *
 * @param Position
 * @desc The position of the option in the Options Window.
 * Choices are: Top, Middle, Bottom
 * @default Middle
 *
 * @param Default Value
 * @desc The default value of the option first time playing.
 * true = on    false = off
 * @default false
 *
 * @param Persist Default?
 * @desc If set to true, then the game will always start with the Default Value.  (Choices are: true, false)
 * @default false
 *
 * @help
 *
 * Fullscreen Toggle Option
 * Version 1.00
 * SumRndmDde
 *
 *
 * Important Notes:
 * This plugin does not have any plugin commands.
 * All functions are aliased.
 *
 *
 * How to Use:
 *
 * Adds a Fullscreen Toggle to the Options Window.
 *
 * 
 * Plugin Commands:
 *
 * ToggleScreenType
 * Switches between fullscreen mode and windowed mode.
 *
 *
 * Thanks for reading!
 * If you have questions, please do not hesitate to ask on my YouTube channel:
 * https://www.youtube.com/SumRndmDde
 *
 * Until next time,
 *   ~ SumRndmDde
 */
/*:ja
 * @plugindesc オプションウィンドウに全画面モードの選択肢を追加します。
 * @author SumRndmDde
 *
 * @param Option Name
 * @text オプション名
 * @desc オプションでの表示テキスト
 * @default 全画面モード
 *
 * @param Position
 * @text 位置
 * @type select
 * @option 上
 * @value Top
 * @option 中央
 * @value Middle
 * @option 下
 * @value Bottom
 * @desc オプションウィンドウでの位置
 * 上:Top / 中央:Middle / 下:Bottom
 * @default Middle
 *
 * @param Default Value
 * @text デフォルト値
 * @type boolean
 * @on 全画面
 * @off ウィンドウ
 * @desc 初回プレイ時のデフォルト値
 * 全画面:true / ウィンドウ:false
 * @default false
 *
 * @param Persist Default?
 * @text 開始時デフォルト
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc 常にデフォルト値で開始
 * 有効:true / 無効:false
 * @default false
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/fullscreen-toggle-option/
 *
 *
 * Fullscreen Toggle Option
 * Version 1.00
 * SumRndmDde
 *
 *
 * オプションウィンドウに全画面モードの選択肢を追加します。
 *
 *
 * ==========================================================================
 *  プラグインコマンド
 * ==========================================================================
 *
 *   ToggleScreenType
 * フルスクリーンモードとウィンドウモードを切り替えます。
 *
 *
 * ==========================================================================
 *  注意点
 * ==========================================================================
 *
 * このプラグインの動作自体は正常にしますが、実際の全画面かウィンドウの状態と
 * オプションでの表示(ON/OFF)が食い違うバグ(コアバージョンによる違い？)
 * があります。
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

(function () {

	var parameters = PluginManager.parameters('SRD_FullscreenToggleOption');

	var optionName = String(parameters['Option Name']);
	var defaultValue = String(parameters['Default Value']).trim().toLowerCase() === 'true';
	var position = String(parameters['Position']).toLowerCase();
	var persist = String(parameters['Persist Default?']).trim().toLowerCase() === 'true';

	ConfigManager.fullscreen = defaultValue;

	Object.defineProperty(ConfigManager, 'fullscreen', {
		get: function () {
			return !Graphics._isFullScreen();
		},
		set: function (value) {
			if (value) {
				Graphics._requestFullScreen();
			} else {
				Graphics._cancelFullScreen();
			}
		},
		configurable: true
	});

	var _ConfigManager_makeData = ConfigManager.makeData;
	ConfigManager.makeData = function () {
		var config = _ConfigManager_makeData.call(this);
		config.fullscreen = this.fullscreen;
		return config;
	};

	var _ConfigManager_applyData = ConfigManager.applyData;
	ConfigManager.applyData = function (config) {
		_ConfigManager_applyData.call(this, config);
		this.fullscreen = this.readFullscreen(config, 'fullscreen');
	};

	ConfigManager.readFullscreen = function (config, name) {
		var value = config[name];
		if (!persist) {
			if (value !== undefined) {
				return value;
			} else {
				return defaultValue;
			}
		} else {
			return defaultValue;
		}
	};

	var _Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
	Window_Options.prototype.addGeneralOptions = function () {
		_Window_Options_addGeneralOptions.call(this);
		if (position === 'middle') {
			this.addCommand(optionName, 'fullscreen');
		}
	};

	var _Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
	Window_Options.prototype.makeCommandList = function () {
		if (position === 'top') {
			this.addCommand(optionName, 'fullscreen');
		}
		_Window_Options_makeCommandList.call(this);
	};

	var _Window_Options_addVolumeOptions = Window_Options.prototype.addVolumeOptions;
	Window_Options.prototype.addVolumeOptions = function () {
		_Window_Options_addVolumeOptions.call(this);
		if (position === 'bottom') {
			this.addCommand(optionName, 'fullscreen');
		}
	};

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function (command, args) {
		_Game_Interpreter_pluginCommand.call(this, command, args);

		if (command.toLowerCase() === 'togglescreentype') {
			Graphics._switchFullScreen();
		}
	};

})();