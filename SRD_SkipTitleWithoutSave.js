/*:
 * @plugindesc This Plugin skips the title screen if there is no save file present.
 *
 * @author SumRndmDde
 *
 * @help
 *
 * Skip Title Screen Without Save
 * Version 1.00
 * SumRndmDde
 *
 *
 * Important Notes:
 * This plugin does not have any plugin commands.
 * Scene_Boot.prototype.start is overwritten.
 *
 *
 * How to Use:
 *
 * This Plugin skips the title screen if there is no save file present
 * in the game.
 *
 * Thanks for reading!
 * If you have questions, please do not hesitate to ask on my YouTube channel:
 * https://www.youtube.com/SumRndmDde
 *
 * Until next time,
 *   ~ SumRndmDde
 */
/*:ja
 * @plugindesc セーブデータが存在しない場合、タイトル画面をスキップし、ニューゲームにします。
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
 * Skip Title Screen Without Save
 * Version 1.00
 * SumRndmDde
 *
 *
 * ==========================================================================
 * 重要事項
 * ==========================================================================
 * このプラグインにはプラグインコマンドがありません。
 * Scene_Boot.prototype.start を上書きします。
 *
 *
 * ==========================================================================
 * 使い方
 * ==========================================================================
 *
 * セーブデータが存在しない場合、
 * タイトル画面をスキップし、ニューゲームにします。
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
			if (DataManager.isAnySavefileExists()) {
				SceneManager.goto(Scene_Title);
			}
			else {
				SceneManager.goto(Scene_Map);
			}
			Window_TitleCommand.initCommandPosition();
		}
		this.updateDocumentTitle();
	};

})();