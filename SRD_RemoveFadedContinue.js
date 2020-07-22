/*:
 * @plugindesc This Plugin removes the faded out "continue" choice from
 * the choices at the title screen.
 *
 * @author SumRndmDde
 *
 * @help
 *
 * Remove Faded Continue
 * Version 1.01
 * SumRndmDde
 *
 *
 * Important Notes:
 * This plugin does not have any plugin commands.
 * Window_TitleCommand.prototype.makeCommandList is overwritten.
 *
 *
 * How to Use:
 *
 * This Plugin removes the faded out "continue" choice from
 * the choices at the title screen.
 *
 * It will only appear only if the player has a saved game.
 *
 * Thanks for reading!
 * If you have questions, please do not hesitate to ask on my YouTube channel:
 * https://www.youtube.com/SumRndmDde
 *
 * Until next time,
 *   ~ SumRndmDde
 */
/*:ja
 * @plugindesc タイトル画面からグレーアウトした'コンティニュー'を非表示にします。
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
 * Remove Faded Continue
 * Version 1.01
 * SumRndmDde
 *
 *
 * 重要な注意事項
 * このプラグインにはプラグインコマンドがありません。
 * Window_TitleCommand.prototype.makeCommandList が上書きされます。
 *
 *
 * ==========================================================================
 * 使い方
 * ==========================================================================
 *
 * タイトル画面からグレーアウトした'コンティニュー'を非表示にします。
 * セーブしたデータがある場合のみ表示されます。
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
	'use strict';

	Window_TitleCommand.prototype.makeCommandList = function () {
		this.addCommand(TextManager.newGame, 'newGame');
		if (this.isContinueEnabled()) {
			this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
		}
		this.addCommand(TextManager.options, 'options');
	};

})();