/*:
 * @plugindesc Adds the ability to create and customize Metronome skills.
 * These are skills that randomly call upon other skills.
 * @author SumRndmDde
 *
 * @param Use Log Message?
 * @desc Set this to 'false', and a Battle Log Message will not be displayed. Otherwise, set this to 'true'.
 * @default true
 *
 * @param Battle Log Message
 * @desc Set this to the Battle Log message you wish to display when a Metronome skill is used.
 * @default A random skill will be used!
 *
 * @param Multiple Metronome?
 * @desc Determines whether it is possible for a Metronome skill to call another Metronome skill.
 * @default false
 *
 * @help
 *
 * Metronome Skill
 * Version 1.01
 * SumRndmDde
 *
 *
 * Important Notes:
 * All functions are aliased.
 *
 *
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Notetag List:
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 * Skill Notetags:
 * 
 *    <Metronome Skill>
 *
 *    <Restrict Metronome>
 *
 *    <Metronome Available Skills>
 *    x, y, z...
 *    </Metronome Available Skills>
 *
 *
 * Read the information below in order to learn how to properly use
 * all of these Notetags.
 *
 *
 * ==========================================================================
 * What is a Metronome Skill?
 * ==========================================================================
 * The move "Metronome" is from Pokemon.
 * This is a Skill that, when called, will make the user use any random
 * Skill from a pool of every existing Skill in the game.
 *
 * Everything from the most basic Skill to a Skill that is exclusively 
 * obtainable on a legendary Pokemon could be used.
 *
 * This Plugin allows you to replicate this feature easily and effectively.
 *
 *
 * ==========================================================================
 * How do you make a Skill become a Metronome Skill?
 * ==========================================================================
 * Insert the following Notetag into the Notebox of the Skill you wish
 * to use as a Metronome Skill:
 *
 *    <Metronome Skill>
 *
 * When this Skill is called, the user will first use the Skill, then they
 * will use a random Skill from your game.
 *
 * If you wish to make a Skill that ONLY calls upon a random Skill, then
 * I would recommend that you set the Scope of the Skill to "The User"
 * and leave the Damage Type set to "None". 
 *
 *
 * ==========================================================================
 * How do you make a Skill that can't be called from a Metronome Skill?
 * ==========================================================================
 * There are two ways a Skill will never be called from a Metronome Skill.
 *
 * The first is if the Skill's name is blank.
 *
 * The second is if the Skill's Notebox has this Notetag in it:
 *
 *    <Restrict Metronome>
 *
 * If a Skill has this in its Notebox, then it will be impossible for a
 * Metronome Skill to call it.
 *
 * It is recommended that this be placed in Skills like "Escape" or "Wait", 
 * in Skills that are used for organization, or in special Skills that
 * are used for unique eventing/testing.
 *
 *
 * ==========================================================================
 * How do you make a Metronome Skill that can only call certain Skills?
 * ==========================================================================
 * Insert the following into your Metronome Skill Notetag:
 *
 *    <Metronome Available Skills>
 *    x, y, z...
 *    </Metronome Available Skills>
 *
 * If this is in the Notebox of a Metronome Skill, then that Skill will
 * only be able to call upon Skill IDs of x, y, z, etc.
 *
 * Each ID must be seperated by a comma, you can have 1 Skill, you
 * can have an infinite amount of Skills, and it is OK to have break lines
 * within it.
 *
 * Here are some examples:
 *
 *    <Metronome Available Skills>
 *    5, 6, 7, 8, 9, 10, 11
 *    </Metronome Available Skills>
 *
 *    <Metronome Available Skills>
 *    13, 14, 15, 16, 17, 18, 19, 20,
 *    21, 22, 23, 24, 25, 35, 37, 38,
 *    40, 43, 49, 50, 52, 55
 *    </Metronome Available Skills>
 *
 *    <Metronome Available Skills>
 *    55, 56
 *    </Metronome Available Skills>
 *
 *    <Metronome Available Skills>
 *    10, 9, 8, 8, 8
 *    </Metronome Available Skills>
 *
 * (The last example will cause Skill ID 8 to have a triple chance of 
 * being called).
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
 */
/*:ja
 * @plugindesc ランダムに他のスキルを呼び出すスキル(メトロノームスキル)を作成してカスタマイズできます。
 * @author SumRndmDde
 *
 * @param Use Log Message?
 * @text 戦闘ログ表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @desc 戦闘ログに表示
 * 表示:true / 非表示:false
 * @default true
 *
 * @param Battle Log Message
 * @text 表示戦闘ログ
 * @desc メトロノームスキルを使用したときに表示させたい戦闘ログを設定
 * @default ランダムでスキルが発動！
 *
 * @param Multiple Metronome?
 * @text 複数のメトロノームを可能
 * @type boolean
 * @on 許可
 * @off 禁止
 * @desc メトロノームスキルが他のメトロノームスキルを呼び出すことを許可
 * 許可:true / 禁止:false
 * @default false
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/metronome-skill/
 *
 *
 * Metronome Skill
 * Version 1.01
 * SumRndmDde
 *
 *
 * 重要な注意事項:
 * 全ての関数がエイリアス化されています。
 *
 *
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * メモタグ一覧:
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 * スキルのメモタグ:
 *
 *    <Metronome Skill>
 *
 *    <Restrict Metronome>
 *
 *    <Metronome Available Skills>
 *    x, y, z...
 *    </Metronome Available Skills>
 *
 *
 * メモタグの使い方は以下の情報を確認ください。
 *
 *
 * ==========================================================================
 * メトロノームスキルとは？
 * ==========================================================================
 * 使用すると、全てのスキルのプールから任意のランダムなスキルを
 * 使用させるスキルです。
 *
 *
 * ==========================================================================
 * スキルをメトロノームスキルにするには？
 * ==========================================================================
 * メトロノームスキルにするスキルのメモ欄に以下のメモタグを挿入します。
 *
 *
 *    <Metronome Skill>
 *
 * このスキルが呼び出されると、使用者は最初にこのスキルを使用し、
 * その後、ゲームからランダムに1つのスキルを使用することになります。
 *
 * ランダムなスキルを呼び出すだけのスキルにしたい場合、
 * スキルの範囲を'使用者'にして、
 * ダメージタイプを'なし'にすることをお勧めします。
 *
 *
 * ==========================================================================
 * メトロノームスキルから呼べないスキルを作るには？
 * ==========================================================================
 * メトロノームスキルからスキルが呼び出されない方法は2つあります。
 * 1つ目はスキル名が空白の場合です。
 * 2つ目はスキルのメモ欄にこのメモタグが入っている場合です。
 *
 *
 *    <Restrict Metronome>
 *
 * スキルのメモ欄にこれが入っている場合、
 * メトロノームスキルでは呼び出すことができなくなります。
 *
 * '逃走'や'待ち'などのスキルや、編成に使用するスキル、
 * ユニークなイベント/テストに使用する特殊なスキルに配置すると良いでしょう。
 *
 *
 * ==========================================================================
 * 特定のスキルしか呼べないメトロノームスキルを作るには?
 * ==========================================================================
 * メトロノームスキルのメモタグに以下を挿入します。
 *
 *    <Metronome Available Skills>
 *    x, y, z...
 *    </Metronome Available Skills>
 *
 * メトロノームスキルのメモ欄にある場合、
 * そのスキルはx,y,zなどのスキルIDを呼び出すことができます。
 * それぞれのIDはカンマで区切ってください。
 *
 *
 * 例:
 *
 *    <Metronome Available Skills>
 *    5, 6, 7, 8, 9, 10, 11
 *    </Metronome Available Skills>
 *
 *    <Metronome Available Skills>
 *    13, 14, 15, 16, 17, 18, 19, 20,
 *    21, 22, 23, 24, 25, 35, 37, 38,
 *    40, 43, 49, 50, 52, 55
 *    </Metronome Available Skills>
 *
 *    <Metronome Available Skills>
 *    55, 56
 *    </Metronome Available Skills>
 *
 *    <Metronome Available Skills>
 *    10, 9, 8, 8, 8
 *    </Metronome Available Skills>
 *
 * (最後の例ではスキルID8が3倍の確率で呼ばれるようになります)。
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

	var useLog = String(PluginManager.parameters('SRD_MetronomeSkill')['Use Log Message?']).trim().toLowerCase() === 'true';
	var metronomeBattleLogMessage = String(PluginManager.parameters('SRD_MetronomeSkill')['Battle Log Message']);
	var multipleMetronome = String(PluginManager.parameters('SRD_MetronomeSkill')['Multiple Metronome?']).trim().toLowerCase() === 'true';

	var metronomeStuffLoaded = false;

	var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function () {
		if (!_DataManager_isDatabaseLoaded.call(this)) return false;
		if (!metronomeStuffLoaded) {
			this.organizeMetronomeSkills();
			metronomeStuffLoaded = true;
		}
		return true;
	};

	DataManager.organizeMetronomeSkills = function () {
		var regexRestrictMetronome = /<\s*Restrict\s*Metronome\s*>/im;
		var regexIsMetronome = /<\s*Metronome\s*Skill\s*>/im;
		var regexAvaliableSkills = /<\s*Metronome\s*(?:Avaliable|Available)\s*Skills\s*>([\d\D\n\r]*)<\/\s*Metronome\s*(?:Avaliable|Available)\s*Skills\s*>/im;
		var globallyAvaliableSkills = [];
		var metronomeSkills = [];

		for (var i = 1; i < $dataSkills.length; i += 1) {
			if ($dataSkills[i].name.trim().length > 0) {
				if ($dataSkills[i].note.match(regexIsMetronome)) {
					metronomeSkills.push(i);
					if (multipleMetronome && !$dataSkills[i].note.match(regexRestrictMetronome)) {
						globallyAvaliableSkills.push(i);
					}
				} else if (!$dataSkills[i].note.match(regexRestrictMetronome)) {
					globallyAvaliableSkills.push(i);
				}
			}
		}

		for (var i = 0; i < metronomeSkills.length; i += 1) {
			if (!$dataSkills[metronomeSkills[i]].note.match(regexAvaliableSkills)) {
				$dataSkills[metronomeSkills[i]].metronomeSkills = globallyAvaliableSkills;
			} else {
				var temp = $dataSkills[metronomeSkills[i]].note.match(regexAvaliableSkills);
				temp[1] = temp[1].replace(/[\r\n]/m, '').trim();
				if (temp[1].length > 0) {
					$dataSkills[metronomeSkills[i]].metronomeSkills = temp[1].split(/\s*,\s*/).filter(function (value) {
						return !!value;
					});
				}
			}
		}
	};

	var _Game_Action_apply = Game_Action.prototype.apply;
	Game_Action.prototype.apply = function (target) {
		_Game_Action_apply.call(this, target);

		if (this.item().metronomeSkills) {
			this.makeSuccess(target);
			this.applyMetronome();
			target.result().usedMetronome = true;
		}
	};

	Game_Action.prototype.applyMetronome = function () {
		if (this.item().metronomeSkills.length > 0) {
			var rndmIndex = Math.randomInt(this.item().metronomeSkills.length);
			if (!this.subject().isDeathStateAffected()) {
				this.subject().forceAction(Number(this.item().metronomeSkills[rndmIndex]), -1);
				BattleManager.forceAction(this.subject());
			}
		}
	};

	var _Game_ActionResult_clear = Game_ActionResult.prototype.clear;
	Game_ActionResult.prototype.clear = function () {
		_Game_ActionResult_clear.call(this);
		this.usedMetronome = false;
	};

	var _Window_BattleLog_displayAffectedStatus = Window_BattleLog.prototype.displayAffectedStatus;
	Window_BattleLog.prototype.displayAffectedStatus = function (target) {
		_Window_BattleLog_displayAffectedStatus.call(this, target);

		if (target.result().usedMetronome && useLog) {
			this.push('addText', metronomeBattleLogMessage);
		}
	};

})();