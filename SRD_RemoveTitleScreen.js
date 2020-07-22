/*:
 * @plugindesc This Plugin removes the title screen from the game.
 *
 * @author SumRndmDde
 *
 * @help
 *
 * Remove Title Screen
 * Version 1.00
 * SumRndmDde
 *
 *
 * Important Notes:
 * This plugin does not have any plugin commands.
 * Scene_Boot.prototype.start is overwritten.
 * Scene_GameEnd.prototype.commandToTitle is overwritten.
 *
 *
 * How to Use:
 *
 * This Plugin removes the Title Screen and simply starts a New Game
 * whenever the Player attempts to go to it.
 *
 * Thanks for reading!
 * If you have questions, please do not hesitate to ask on my YouTube channel:
 * https://www.youtube.com/SumRndmDde
 *
 * Until next time,
 *   ~ SumRndmDde
 */
/*:ja
 * @plugindesc タイトル画面を削除し、ニューゲームを開始します。
 *
 * @author SumRndmDde
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/mv-plugins/
 *
 *
 * Remove Title Screen
 * Version 1.00
 * SumRndmDde
 *
 *
 * 重要な注意事項
 * このプラグインにはプラグインコマンドがありません。
 * Scene_Boot.prototype.start を上書きします。
 * Scene_GameEnd.prototype.commandToTitle を上書きします。
 *
 *
 * ==========================================================================
 * 使い方
 * ==========================================================================
 *
 * タイトル画面を削除し、ニューゲームを開始します。
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

	Scene_Boot.prototype.start = function () {
		Scene_Base.prototype.start.call(this);
		SoundManager.preloadImportantSounds();
		if (DataManager.isBattleTest()) {
			DataManager.setupBattleTest();
			SceneManager.goto(Scene_Battle);
		} else if (DataManager.isEventTest()) {
			DataManager.setupEventTest();
			SceneManager.goto(Scene_Map);
		} else {
			this.checkPlayerLocation();
			DataManager.setupNewGame();
			SceneManager.goto(Scene_Map);
			Window_TitleCommand.initCommandPosition();
		}
		this.updateDocumentTitle();
	};

	Scene_GameEnd.prototype.commandToTitle = function () {
		this.fadeOutAll();
		DataManager.setupNewGame();
		SceneManager.goto(Scene_Map);
	};

})();