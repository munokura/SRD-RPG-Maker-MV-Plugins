/*:ja
 * @plugindesc ポップアップの属性をカスタマイズして追加することができます。
 * @author SumRndmDde
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン: http://sumrndm.site/battle-popup-customizer/
 *
 *
 * Battle Popup Customizer
 * Version 1.20
 * SumRndmDde
 *
 *
 * このプラグインはバトルポップアップにオプションを追加します。
 * ポップアップの属性をよりカスタマイズできるようになり、
 * カスタムポップアップを追加することもできます。
 *
 * このプラグインは、
 * ポップアップのテキストが外部ファイルを必要とするという事実を含め、
 * システムのコアな仕組みの多くを変更します。
 * 好きなフォントや色を入力するだけでいいようになりました。
 *
 *
 * ==========================================================================
 *  グローバルオプション
 * ==========================================================================
 *
 * 全てのポップアップのプロパティを操作することができます。
 * これにはフォントとフォントサイズが含まれます。
 * 前述したように、画像ファイルの代わりにフォントが使用されます。
 * さらに、同じセクション内に複数のポップアップがある場合、
 * 進行するポップアップがX軸とY軸上でどれだけずれるかを設定できます。
 *
 *
 * ==========================================================================
 *  既存のポップアップ
 * ==========================================================================
 *
 * 以下の既存のポップアップを操作することができます。
 *
 * HP Damage  - HPダメージ
 * HP Heal    - HP回復
 * MP Damage  - MPダメージ
 * MP Heal    - MP回復
 * TP Damage  - TPダメージ
 * TP Heal    - TP回復
 * --------------
 * Miss       - ミス
 * Evade      - 回避
 * Critical   - 会心
 * Guarded    - 防御
 *
 * 最初の6つは1つのセクションに設定され、
 * 残りのポップアップはそれぞれのセクションに落ちます。
 * これらのセクションは、ポップアップが重ならないようにそれぞれ移動します。
 *
 *
 * ==========================================================================
 *  ポップアップの属性
 * ==========================================================================
 *
 * 操作可能な属性の一覧です。
 *
 *
 *   Condition
 * このJavaScriptの条件がtrueの場合、ポップアップが使用されます。
 *
 * ==========================================================================
 *
 *   Text
 * ポップアップに表示されるテキスト。
 *
 * ==========================================================================
 *
 *   Location
 * ポップアップのX座標とY座標です。
 * ポップアップの初期位置を指します。
 * x,yの形式を使用します。
 *
 * 例: 20, -20
 *
 * ==========================================================================
 *
 *   Colors
 * ポップアップテキストで使われる色。
 * 書式: メインカラー｜アウトラインカラー
 *
 * 例: #FFFFFF | #000000
 *
 * ==========================================================================
 *
 *   Animations
 * ポップアップに影響を与える全てのアニメーションのリストです。
 * 利用可能なアニメーションは以下です。
 *
 *   default    - デフォルト
 *   horizontal - 横伸縮
 *   float      - 浮かび上がる
 *   fall       - 落ちる
 *   left       - 左へスライド
 *   right      - 右へスライド
 *   rotation   - 1回転
 *
 * 1つまたは複数のアニメーションを使用することができます。
 * 複数のアニメーションはカンマで区切ってください。
 *
 * 例: default, rotation
 *
 *
 * ==========================================================================
 *
 *   Duration
 * ポップアップの表示時間をフレーム単位で指定します。
 *
 * ==========================================================================
 *
 *   Flash
 * ポップアップのフラッシュ。
 * 書式:赤,緑,青,強度,表示時間
 *
 * 例: 255, 0, 0, 160, 60
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
 * @param == Global Options ==
 * @text -- 全般オプション --
 * @default
 *
 * @param Font
 * @text フォント
 * @desc ダメージポップアップのフォント
 * @default GameFont
 * @parent == Global Options ==
 *
 * @param Font Size
 * @text フォントサイズ
 * @desc ダメージポップアップのフォントのサイズ
 * @default 34
 * @parent == Global Options ==
 *
 * @param X Shift
 * @text Xシフト
 * @desc 各スタック結果間のX位置のシフト
 * @default 0
 * @parent == Global Options ==
 *
 * @param Y Shift
 * @text Yシフト
 * @desc 各スタック結果間のY位置のシフト
 * @default 34
 * @parent == Global Options ==
 *
 * @param Global Condition
 * @text グローバル表示条件
 * @desc ポップアップが表示される条件。'target'と'result'の両方を使用可能
 * @default target.isAppeared()
 * @parent == Global Options ==
 *
 * @param == HP Damage ==
 * @text -- HPダメージ --
 * @default
 *
 * @param HP Damage Condition
 * @text HPダメージ表示条件
 * @desc HPダメージのポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default result.hpDamage > 0
 * @parent == HP Damage ==
 *
 * @param HP Damage Text
 * @text HPダメージテキスト
 * @desc HPダメージが発生した時の表示テキスト
 * %1がダメージ値を表示
 * @default -%1 HP
 * @parent == HP Damage ==
 *
 * @param HP Damage Location
 * @text HPダメージの位置
 * @desc HPダメージを受けた時の表示テキストの最初の位置
 * 書式: X位置, Y位置
 * @default 0, 0
 * @parent == HP Damage ==
 *
 * @param HP Damage Colors
 * @text HPダメージ色
 * @desc HPダメージの色
 * 書式: ベース色 | アウトライン色
 * @default #FF4D4D | #000000
 * @parent == HP Damage ==
 *
 * @param HP Damage Animations
 * @text HPダメージのアニメーション
 * @desc HPダメージの表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default default
 * @parent == HP Damage ==
 *
 * @param HP Damage Duration
 * @text HPダメージ表示時間
 * @type number
 * @desc HPダメージの表示時間
 * 正の整数
 * @default 120
 * @parent == HP Damage ==
 *
 * @param HP Damage Flash
 * @text HPダメージフラッシュ
 * @desc HPダメージのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == HP Damage ==
 *
 * @param == HP Heal ==
 * @text -- HP回復 --
 * @default
 *
 * @param HP Heal Condition
 * @text HP回復コンディション
 * @desc HP回復のポップアップを表示する条件
 * JavaScript式。'result'はGame_ActionResult
 * @default result.hpDamage < 0
 * @parent == HP Heal ==
 *
 * @param HP Heal Text
 * @text HP回復テキスト
 * @desc HP回復が発生時の表示テキスト
 * %1が回復値を表示
 * @default +%1 HP
 * @parent == HP Heal ==
 *
 * @param HP Heal Location
 * @text HP回復の位置
 * @desc HP回復のテキストの最初の位置
 * 書式: X位置, Y位置
 * @default 0, 0
 * @parent == HP Heal ==
 *
 * @param HP Heal Colors
 * @text HP回復色
 * @desc HP回復のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #8CFF66 | #000000
 * @parent == HP Heal ==
 *
 * @param HP Heal Animations
 * @text HP回復アニメーション
 * @desc HP回復の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default default
 * @parent == HP Heal ==
 *
 * @param HP Heal Duration
 * @text HP回復の表示時間
 * @type number
 * @desc HP回復のテキストの表示時間
 * 正の整数
 * @default 120
 * @parent == HP Heal ==
 *
 * @param HP Heal Flash
 * @text HP回復フラッシュ
 * @desc HP回復のテキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == HP Heal ==
 *
 * @param == MP Damage ==
 * @text -- MPダメージ --
 * @default
 *
 * @param MP Damage Condition
 * @text MPダメージ表示条件
 * @desc MPダメージのポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default result.mpDamage > 0
 * @parent == MP Damage ==
 *
 * @param MP Damage Text
 * @text MPダメージテキスト
 * @desc MPダメージが発生した時の表示テキスト
 * %1がダメージ値を表示
 * @default -%1 MP
 * @parent == MP Damage ==
 *
 * @param MP Damage Location
 * @text MPダメージの位置
 * @desc MPダメージを受けた時の表示テキストの最初の位置
 * 書式: X位置, Y位置
 * @default 0, 0
 * @parent == MP Damage ==
 *
 * @param MP Damage Colors
 * @text MPダメージ色
 * @desc MPダメージの色
 * 書式: ベース色 | アウトライン色
 * @default #66B3FF | #000000
 * @parent == MP Damage ==
 *
 * @param MP Damage Animations
 * @text MPダメージのアニメーション
 * @desc MPダメージの表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default default
 * @parent == MP Damage ==
 *
 * @param MP Damage Duration
 * @text MPダメージ表示時間
 * @type number
 * @desc MPダメージの表示時間
 * 正の整数
 * @default 120
 * @parent == MP Damage ==
 *
 * @param MP Damage Flash
 * @text MPダメージフラッシュ
 * @desc MPダメージのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == MP Damage ==
 *
 * @param == MP Heal ==
 * @text -- MP回復 --
 * @default
 *
 * @param MP Heal Condition
 * @text MP回復コンディション
 * @desc MP回復のポップアップを表示する条件
 * JavaScript式。'result'はGame_ActionResult
 * @default result.mpDamage < 0
 * @parent == MP Heal ==
 *
 * @param MP Heal Text
 * @text MP回復テキスト
 * @desc MP回復が発生時の表示テキスト
 * %1が回復値を表示
 * @default +%1 MP
 * @parent == MP Heal ==
 *
 * @param MP Heal Location
 * @text MP回復の位置
 * @desc MP回復のテキストの最初の位置
 * 書式: X位置, Y位置
 * @default 0, 0
 * @parent == MP Heal ==
 *
 * @param MP Heal Colors
 * @text MP回復色
 * @desc MP回復のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFF99 | #000000
 * @parent == MP Heal ==
 *
 * @param MP Heal Animations
 * @text MP回復アニメーション
 * @desc MP回復の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default default
 * @parent == MP Heal ==
 *
 * @param MP Heal Duration
 * @text MP回復の表示時間
 * @type number
 * @desc MP回復のテキストの表示時間
 * 正の整数
 * @default 120
 * @parent == MP Heal ==
 *
 * @param MP Heal Flash
 * @text MP回復フラッシュ
 * @desc MP回復のテキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == MP Heal ==
 *
 * @param == TP Damage ==
 * @text -- TPダメージ --
 * @default
 *
 * @param TP Damage Condition
 * @text TPダメージ表示条件
 * @desc TPダメージのポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default result.tpDamage > 0
 * @parent == TP Damage ==
 *
 * @param TP Damage Text
 * @text TPダメージテキスト
 * @desc TPダメージが発生した時の表示テキスト
 * %1がダメージ値を表示
 * @default -%1 TP
 * @parent == TP Damage ==
 *
 * @param TP Damage Location
 * @text TPダメージの位置
 * @desc TPダメージを受けた時の表示テキストの最初の位置
 * 書式: X位置, Y位置
 * @default 0, 0
 * @parent == TP Damage ==
 *
 * @param TP Damage Colors
 * @text TPダメージ色
 * @desc TPダメージの色
 * 書式: ベース色 | アウトライン色
 * @default #FFB3FF | #000000
 * @parent == TP Damage ==
 *
 * @param TP Damage Animations
 * @text TPダメージのアニメーション
 * @desc TPダメージの表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default default
 * @parent == TP Damage ==
 *
 * @param TP Damage Duration
 * @text TPダメージ表示時間
 * @type number
 * @desc TPダメージの表示時間
 * 正の整数
 * @default 120
 * @parent == TP Damage ==
 *
 * @param TP Damage Flash
 * @text TPダメージフラッシュ
 * @desc TPダメージのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == TP Damage ==
 *
 * @param == TP Heal ==
 * @text -- TP回復 --
 * @default
 *
 * @param TP Heal Condition
 * @text TP回復コンディション
 * @desc TP回復のポップアップを表示する条件
 * JavaScript式。'result'はGame_ActionResult
 * @default result.tpDamage < 0
 * @parent == TP Heal ==
 *
 * @param TP Heal Text
 * @text TP回復テキスト
 * @desc TP回復が発生時の表示テキスト
 * %1が回復値を表示
 * @default +%1 TP
 * @parent == TP Heal ==
 *
 * @param TP Heal Location
 * @text TP回復の位置
 * @desc TP回復のテキストの最初の位置
 * 書式: X位置, Y位置
 * @default 0, 0
 * @parent == TP Heal ==
 *
 * @param TP Heal Colors
 * @text TP回復色
 * @desc TP回復のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #99FF66 | #000000
 * @parent == TP Heal ==
 *
 * @param TP Heal Animations
 * @text TP回復アニメーション
 * @desc TP回復の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default default
 * @parent == TP Heal ==
 *
 * @param TP Heal Duration
 * @text TP回復の表示時間
 * @type number
 * @desc TP回復のテキストの表示時間
 * 正の整数
 * @default 120
 * @parent == TP Heal ==
 *
 * @param TP Heal Flash
 * @text TP回復フラッシュ
 * @desc TP回復のテキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == TP Heal ==
 *
 * @param == Miss ==
 * @text -- ミス --
 * @default
 *
 * @param Miss Condition
 * @text ミス表示条件
 * @desc ミスのポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default result.used && result.missed
 * @parent == Miss ==
 *
 * @param Miss Text
 * @text ミステキスト
 * @desc ミス発生時の表示テキスト
 * @default ミス
 * @parent == Miss ==
 *
 * @param Miss Location
 * @text ミスの位置
 * @desc ミスのテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, this._sprite.height * (-1/3)
 * @parent == Miss ==
 *
 * @param Miss Colors
 * @text ミス色
 * @desc ミスのテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000000
 * @parent == Miss ==
 *
 * @param Miss Animations
 * @text ミスのアニメーション
 * @desc ミスの表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Miss ==
 *
 * @param Miss Duration
 * @text ミス表示時間
 * @type number
 * @desc ミス時のテキストの表示時間
 * 正の整数
 * @default 45
 * @parent == Miss ==
 *
 * @param Miss Flash
 * @text ミスフラッシュ
 * @desc ミステキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Miss ==
 *
 * @param == Evade ==
 * @text -- 回避 --
 * @default
 *
 * @param Evade Condition
 * @text 回避表示条件
 * @desc 回避のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default result.evaded
 * @parent == Evade ==
 *
 * @param Evade Text
 * @text 回避テキスト
 * @desc 回避発生時の表示テキスト
 * @default 回避
 * @parent == Evade ==
 *
 * @param Evade Location
 * @text 回避の位置
 * @desc 回避のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, this._sprite.height * (-1/3)
 * @parent == Evade ==
 *
 * @param Evade Colors
 * @text 回避色
 * @desc 回避のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000000
 * @parent == Evade ==
 *
 * @param Evade Animations
 * @text 回避のアニメーション
 * @desc 回避の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Evade ==
 *
 * @param Evade Duration
 * @text 回避表示時間
 * @type number
 * @desc 回避時のテキストの表示時間
 * 正の整数
 * @default 45
 * @parent == Evade ==
 *
 * @param Evade Flash
 * @text 回避フラッシュ
 * @desc 回避テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Evade ==
 *
 * @param == Critical ==
 * @text -- 会心 --
 * @default
 *
 * @param Critical Condition
 * @text 会心表示条件
 * @desc 会心のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default result.critical && result.used && !result.missed
 * @parent == Critical ==
 *
 * @param Critical Text
 * @text 会心テキスト
 * @desc 会心発生時の表示テキスト
 * @default 会心
 * @parent == Critical ==
 *
 * @param Critical Location
 * @text 会心の位置
 * @desc 会心のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, this._sprite.height * (-1/3)
 * @parent == Critical ==
 *
 * @param Critical Colors
 * @text 会心色
 * @desc 会心のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000000
 * @parent == Critical ==
 *
 * @param Critical Animations
 * @text 会心のアニメーション
 * @desc 会心の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Critical ==
 *
 * @param Critical Duration
 * @text 会心表示時間
 * @type number
 * @desc 会心時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Critical ==
 *
 * @param Critical Flash
 * @text 会心フラッシュ
 * @desc 会心テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 255, 0, 0, 160, 60
 * @parent == Critical ==
 *
 * @param == Guarded ==
 * @text -- 防御 --
 * @default
 *
 * @param Guarded Condition
 * @text 防御表示条件
 * @desc 防御のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default result.guarded && result.used && !result.missed
 * @parent == Guarded ==
 *
 * @param Guarded Text
 * @text 防御テキスト
 * @desc 防御発生時の表示テキスト
 * @default 防御
 * @parent == Guarded ==
 *
 * @param Guarded Location
 * @text 防御の位置
 * @desc 防御のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, this._sprite.height * (-1/3)
 * @parent == Guarded ==
 *
 * @param Guarded Colors
 * @text 防御色
 * @desc 防御のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000000
 * @parent == Guarded ==
 *
 * @param Guarded Animations
 * @text 防御のアニメーション
 * @desc 防御の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Guarded ==
 *
 * @param Guarded Duration
 * @text 防御表示時間
 * @type number
 * @desc 防御時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Guarded ==
 *
 * @param Guarded Flash
 * @text 防御フラッシュ
 * @desc 防御テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 130, 130, 160, 60
 * @parent == Guarded ==
 *
 * @param == Custom 1 ==
 * @text -- カスタム1 --
 * @default
 *
 * @param Custom 1 Condition
 * @text カスタム1表示条件
 * @desc カスタム1のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default result.drain && result.used && !result.missed
 * @parent == Custom 1 ==
 *
 * @param Custom 1 Text
 * @text カスタム1テキスト
 * @desc カスタム1発生時の表示テキスト
 * @default 吸収
 * @parent == Custom 1 ==
 *
 * @param Custom 1 Location
 * @text カスタム1の位置
 * @desc カスタム1のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, this._sprite.height * (-1/3)
 * @parent == Custom 1 ==
 *
 * @param Custom 1 Colors
 * @text カスタム1色
 * @desc カスタム1のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000000
 * @parent == Custom 1 ==
 *
 * @param Custom 1 Animations
 * @text カスタム1のアニメーション
 * @desc カスタム1の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 1 ==
 *
 * @param Custom 1 Duration
 * @text カスタム1表示時間
 * @type number
 * @desc カスタム1時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 1 ==
 *
 * @param Custom 1 Flash
 * @text カスタム1フラッシュ
 * @desc カスタム1テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 204, 153, 255, 160, 60
 * @parent == Custom 1 ==
 *
 * @param == Custom 2 ==
 * @text -- カスタム2 --
 * @default
 *
 * @param Custom 2 Condition
 * @text カスタム2表示条件
 * @desc カスタム2のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 2 ==
 *
 * @param Custom 2 Text
 * @text カスタム2テキスト
 * @desc カスタム2発生時の表示テキスト
 * @default
 * @parent == Custom 2 ==
 *
 * @param Custom 2 Location
 * @text カスタム2の位置
 * @desc カスタム2のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 2 ==
 *
 * @param Custom 2 Colors
 * @text カスタム2色
 * @desc カスタム2のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000001
 * @parent == Custom 2 ==
 *
 * @param Custom 2 Animations
 * @text カスタム2のアニメーション
 * @desc カスタム2の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 2 ==
 *
 * @param Custom 2 Duration
 * @text カスタム2表示時間
 * @type number
 * @desc カスタム2時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 2 ==
 *
 * @param Custom 2 Flash
 * @text カスタム2フラッシュ
 * @desc カスタム2テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 2 ==
 *
 * @param == Custom 3 ==
 * @text -- カスタム3 --
 * @default
 *
 * @param Custom 3 Condition
 * @text カスタム3表示条件
 * @desc カスタム3のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 3 ==
 *
 * @param Custom 3 Text
 * @text カスタム3テキスト
 * @desc カスタム3発生時の表示テキスト
 * @default
 * @parent == Custom 3 ==
 *
 * @param Custom 3 Location
 * @text カスタム3の位置
 * @desc カスタム3のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 3 ==
 *
 * @param Custom 3 Colors
 * @text カスタム3色
 * @desc カスタム3のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000002
 * @parent == Custom 3 ==
 *
 * @param Custom 3 Animations
 * @text カスタム3のアニメーション
 * @desc カスタム3の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 3 ==
 *
 * @param Custom 3 Duration
 * @text カスタム3表示時間
 * @type number
 * @desc カスタム3時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 3 ==
 *
 * @param Custom 3 Flash
 * @text カスタム3フラッシュ
 * @desc カスタム3テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 3 ==
 *
 * @param == Custom 4 ==
 * @text -- カスタム4 --
 * @default
 *
 * @param Custom 4 Condition
 * @text カスタム4表示条件
 * @desc カスタム4のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 4 ==
 *
 * @param Custom 4 Text
 * @text カスタム4テキスト
 * @desc カスタム4発生時の表示テキスト
 * @default
 * @parent == Custom 4 ==
 *
 * @param Custom 4 Location
 * @text カスタム4の位置
 * @desc カスタム4のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 4 ==
 *
 * @param Custom 4 Colors
 * @text カスタム4色
 * @desc カスタム4のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000003
 * @parent == Custom 4 ==
 *
 * @param Custom 4 Animations
 * @text カスタム4のアニメーション
 * @desc カスタム4の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 4 ==
 *
 * @param Custom 4 Duration
 * @text カスタム4表示時間
 * @type number
 * @desc カスタム4時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 4 ==
 *
 * @param Custom 4 Flash
 * @text カスタム4フラッシュ
 * @desc カスタム4テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 4 ==
 *
 * @param == Custom 5 ==
 * @text -- カスタム5 --
 * @default
 *
 * @param Custom 5 Condition
 * @text カスタム5表示条件
 * @desc カスタム5のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 5 ==
 *
 * @param Custom 5 Text
 * @text カスタム5テキスト
 * @desc カスタム5発生時の表示テキスト
 * @default
 * @parent == Custom 5 ==
 *
 * @param Custom 5 Location
 * @text カスタム5の位置
 * @desc カスタム5のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 5 ==
 *
 * @param Custom 5 Colors
 * @text カスタム5色
 * @desc カスタム5のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000004
 * @parent == Custom 5 ==
 *
 * @param Custom 5 Animations
 * @text カスタム5のアニメーション
 * @desc カスタム5の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 5 ==
 *
 * @param Custom 5 Duration
 * @text カスタム5表示時間
 * @type number
 * @desc カスタム5時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 5 ==
 *
 * @param Custom 5 Flash
 * @text カスタム5フラッシュ
 * @desc カスタム5テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 5 ==
 *
 * @param == Custom 6 ==
 * @text -- カスタム6 --
 * @default
 *
 * @param Custom 6 Condition
 * @text カスタム6表示条件
 * @desc カスタム6のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 6 ==
 *
 * @param Custom 6 Text
 * @text カスタム6テキスト
 * @desc カスタム6発生時の表示テキスト
 * @default
 * @parent == Custom 6 ==
 *
 * @param Custom 6 Location
 * @text カスタム6の位置
 * @desc カスタム6のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 6 ==
 *
 * @param Custom 6 Colors
 * @text カスタム6色
 * @desc カスタム6のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000005
 * @parent == Custom 6 ==
 *
 * @param Custom 6 Animations
 * @text カスタム6のアニメーション
 * @desc カスタム6の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 6 ==
 *
 * @param Custom 6 Duration
 * @text カスタム6表示時間
 * @type number
 * @desc カスタム6時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 6 ==
 *
 * @param Custom 6 Flash
 * @text カスタム6フラッシュ
 * @desc カスタム6テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 6 ==
 *
 * @param == Custom 7 ==
 * @text -- カスタム7 --
 * @default
 *
 * @param Custom 7 Condition
 * @text カスタム7表示条件
 * @desc カスタム7のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 7 ==
 *
 * @param Custom 7 Text
 * @text カスタム7テキスト
 * @desc カスタム7発生時の表示テキスト
 * @default
 * @parent == Custom 7 ==
 *
 * @param Custom 7 Location
 * @text カスタム7の位置
 * @desc カスタム7のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 7 ==
 *
 * @param Custom 7 Colors
 * @text カスタム7色
 * @desc カスタム7のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000006
 * @parent == Custom 7 ==
 *
 * @param Custom 7 Animations
 * @text カスタム7のアニメーション
 * @desc カスタム7の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 7 ==
 *
 * @param Custom 7 Duration
 * @text カスタム7表示時間
 * @type number
 * @desc カスタム7時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 7 ==
 *
 * @param Custom 7 Flash
 * @text カスタム7フラッシュ
 * @desc カスタム7テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 7 ==
 *
 * @param == Custom 8 ==
 * @text -- カスタム8 --
 * @default
 *
 * @param Custom 8 Condition
 * @text カスタム8表示条件
 * @desc カスタム8のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 8 ==
 *
 * @param Custom 8 Text
 * @text カスタム8テキスト
 * @desc カスタム8発生時の表示テキスト
 * @default
 * @parent == Custom 8 ==
 *
 * @param Custom 8 Location
 * @text カスタム8の位置
 * @desc カスタム8のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 8 ==
 *
 * @param Custom 8 Colors
 * @text カスタム8色
 * @desc カスタム8のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000007
 * @parent == Custom 8 ==
 *
 * @param Custom 8 Animations
 * @text カスタム8のアニメーション
 * @desc カスタム8の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 8 ==
 *
 * @param Custom 8 Duration
 * @text カスタム8表示時間
 * @type number
 * @desc カスタム8時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 8 ==
 *
 * @param Custom 8 Flash
 * @text カスタム8フラッシュ
 * @desc カスタム8テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 8 ==
 *
 * @param == Custom 9 ==
 * @text -- カスタム9 --
 * @default
 *
 * @param Custom 9 Condition
 * @text カスタム9表示条件
 * @desc カスタム9のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 9 ==
 *
 * @param Custom 9 Text
 * @text カスタム9テキスト
 * @desc カスタム9発生時の表示テキスト
 * @default
 * @parent == Custom 9 ==
 *
 * @param Custom 9 Location
 * @text カスタム9の位置
 * @desc カスタム9のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 9 ==
 *
 * @param Custom 9 Colors
 * @text カスタム9色
 * @desc カスタム9のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000008
 * @parent == Custom 9 ==
 *
 * @param Custom 9 Animations
 * @text カスタム9のアニメーション
 * @desc カスタム9の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 9 ==
 *
 * @param Custom 9 Duration
 * @text カスタム9表示時間
 * @type number
 * @desc カスタム9時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 9 ==
 *
 * @param Custom 9 Flash
 * @text カスタム9フラッシュ
 * @desc カスタム9テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 9 ==
 *
 * @param == Custom 10 ==
 * @text -- カスタム10 --
 * @default
 *
 * @param Custom 10 Condition
 * @text カスタム10表示条件
 * @desc カスタム10のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 10 ==
 *
 * @param Custom 10 Text
 * @text カスタム10テキスト
 * @desc カスタム10発生時の表示テキスト
 * @default
 * @parent == Custom 10 ==
 *
 * @param Custom 10 Location
 * @text カスタム10の位置
 * @desc カスタム10のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 10 ==
 *
 * @param Custom 10 Colors
 * @text カスタム10色
 * @desc カスタム10のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000009
 * @parent == Custom 10 ==
 *
 * @param Custom 10 Animations
 * @text カスタム10のアニメーション
 * @desc カスタム10の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 10 ==
 *
 * @param Custom 10 Duration
 * @text カスタム10表示時間
 * @type number
 * @desc カスタム10時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 10 ==
 *
 * @param Custom 10 Flash
 * @text カスタム10フラッシュ
 * @desc カスタム10テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 10 ==
 *
 * @param == Custom 11 ==
 * @text -- カスタム11 --
 * @default
 *
 * @param Custom 11 Condition
 * @text カスタム11表示条件
 * @desc カスタム11のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 11 ==
 *
 * @param Custom 11 Text
 * @text カスタム11テキスト
 * @desc カスタム11発生時の表示テキスト
 * @default
 * @parent == Custom 11 ==
 *
 * @param Custom 11 Location
 * @text カスタム11の位置
 * @desc カスタム11のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 11 ==
 *
 * @param Custom 11 Colors
 * @text カスタム11色
 * @desc カスタム11のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000010
 * @parent == Custom 11 ==
 *
 * @param Custom 11 Animations
 * @text カスタム11のアニメーション
 * @desc カスタム11の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 11 ==
 *
 * @param Custom 11 Duration
 * @text カスタム11表示時間
 * @type number
 * @desc カスタム11時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 11 ==
 *
 * @param Custom 11 Flash
 * @text カスタム11フラッシュ
 * @desc カスタム11テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 11 ==
 *
 * @param == Custom 12 ==
 * @text -- カスタム12 --
 * @default
 *
 * @param Custom 12 Condition
 * @text カスタム12表示条件
 * @desc カスタム12のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 12 ==
 *
 * @param Custom 12 Text
 * @text カスタム12テキスト
 * @desc カスタム12発生時の表示テキスト
 * @default
 * @parent == Custom 12 ==
 *
 * @param Custom 12 Location
 * @text カスタム12の位置
 * @desc カスタム12のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 12 ==
 *
 * @param Custom 12 Colors
 * @text カスタム12色
 * @desc カスタム12のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000011
 * @parent == Custom 12 ==
 *
 * @param Custom 12 Animations
 * @text カスタム12のアニメーション
 * @desc カスタム12の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 12 ==
 *
 * @param Custom 12 Duration
 * @text カスタム12表示時間
 * @type number
 * @desc カスタム12時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 12 ==
 *
 * @param Custom 12 Flash
 * @text カスタム12フラッシュ
 * @desc カスタム12テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 12 ==
 *
 * @param == Custom 13 ==
 * @text -- カスタム13 --
 * @default
 *
 * @param Custom 13 Condition
 * @text カスタム13表示条件
 * @desc カスタム13のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 13 ==
 *
 * @param Custom 13 Text
 * @text カスタム13テキスト
 * @desc カスタム13発生時の表示テキスト
 * @default
 * @parent == Custom 13 ==
 *
 * @param Custom 13 Location
 * @text カスタム13の位置
 * @desc カスタム13のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 13 ==
 *
 * @param Custom 13 Colors
 * @text カスタム13色
 * @desc カスタム13のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000012
 * @parent == Custom 13 ==
 *
 * @param Custom 13 Animations
 * @text カスタム13のアニメーション
 * @desc カスタム13の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 13 ==
 *
 * @param Custom 13 Duration
 * @text カスタム13表示時間
 * @type number
 * @desc カスタム13時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 13 ==
 *
 * @param Custom 13 Flash
 * @text カスタム13フラッシュ
 * @desc カスタム13テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 13 ==
 *
 * @param == Custom 14 ==
 * @text -- カスタム14 --
 * @default
 *
 * @param Custom 14 Condition
 * @text カスタム14表示条件
 * @desc カスタム14のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 14 ==
 *
 * @param Custom 14 Text
 * @text カスタム14テキスト
 * @desc カスタム14発生時の表示テキスト
 * @default
 * @parent == Custom 14 ==
 *
 * @param Custom 14 Location
 * @text カスタム14の位置
 * @desc カスタム14のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 14 ==
 *
 * @param Custom 14 Colors
 * @text カスタム14色
 * @desc カスタム14のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000013
 * @parent == Custom 14 ==
 *
 * @param Custom 14 Animations
 * @text カスタム14のアニメーション
 * @desc カスタム14の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 14 ==
 *
 * @param Custom 14 Duration
 * @text カスタム14表示時間
 * @type number
 * @desc カスタム14時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 14 ==
 *
 * @param Custom 14 Flash
 * @text カスタム14フラッシュ
 * @desc カスタム14テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 14 ==
 *
 * @param == Custom 15 ==
 * @text -- カスタム15 --
 * @default
 *
 * @param Custom 15 Condition
 * @text カスタム15表示条件
 * @desc カスタム15のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 15 ==
 *
 * @param Custom 15 Text
 * @text カスタム15テキスト
 * @desc カスタム15発生時の表示テキスト
 * @default
 * @parent == Custom 15 ==
 *
 * @param Custom 15 Location
 * @text カスタム15の位置
 * @desc カスタム15のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 15 ==
 *
 * @param Custom 15 Colors
 * @text カスタム15色
 * @desc カスタム15のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000014
 * @parent == Custom 15 ==
 *
 * @param Custom 15 Animations
 * @text カスタム15のアニメーション
 * @desc カスタム15の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 15 ==
 *
 * @param Custom 15 Duration
 * @text カスタム15表示時間
 * @type number
 * @desc カスタム15時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 15 ==
 *
 * @param Custom 15 Flash
 * @text カスタム15フラッシュ
 * @desc カスタム15テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 15 ==
 *
 * @param == Custom 16 ==
 * @text -- カスタム16 --
 * @default
 *
 * @param Custom 16 Condition
 * @text カスタム16表示条件
 * @desc カスタム16のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 16 ==
 *
 * @param Custom 16 Text
 * @text カスタム16テキスト
 * @desc カスタム16発生時の表示テキスト
 * @default
 * @parent == Custom 16 ==
 *
 * @param Custom 16 Location
 * @text カスタム16の位置
 * @desc カスタム16のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 16 ==
 *
 * @param Custom 16 Colors
 * @text カスタム16色
 * @desc カスタム16のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000015
 * @parent == Custom 16 ==
 * @parent == Custom 16 ==
 *
 * @param Custom 16 Animations
 * @text カスタム16のアニメーション
 * @desc カスタム16の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 16 ==
 *
 * @param Custom 16 Duration
 * @text カスタム16表示時間
 * @type number
 * @desc カスタム16時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 16 ==
 *
 * @param Custom 16 Flash
 * @text カスタム16フラッシュ
 * @desc カスタム16テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 16 ==
 *
 * @param == Custom 17 ==
 * @text -- カスタム17 --
 * @default
 *
 * @param Custom 17 Condition
 * @text カスタム17表示条件
 * @desc カスタム17のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 17 ==
 *
 * @param Custom 17 Text
 * @text カスタム17テキスト
 * @desc カスタム17発生時の表示テキスト
 * @default
 * @parent == Custom 17 ==
 *
 * @param Custom 17 Location
 * @text カスタム17の位置
 * @desc カスタム17のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 17 ==
 *
 * @param Custom 17 Colors
 * @text カスタム17色
 * @desc カスタム17のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000016
 * @parent == Custom 17 ==
 *
 * @param Custom 17 Animations
 * @text カスタム17のアニメーション
 * @desc カスタム17の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 17 ==
 *
 * @param Custom 17 Duration
 * @text カスタム17表示時間
 * @type number
 * @desc カスタム17時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 17 ==
 *
 * @param Custom 17 Flash
 * @text カスタム17フラッシュ
 * @desc カスタム17テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 17 ==
 *
 * @param == Custom 18 ==
 * @text -- カスタム18 --
 * @default
 *
 * @param Custom 18 Condition
 * @text カスタム18表示条件
 * @desc カスタム18のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 18 ==
 *
 * @param Custom 18 Text
 * @text カスタム18テキスト
 * @desc カスタム18発生時の表示テキスト
 * @default
 * @parent == Custom 18 ==
 *
 * @param Custom 18 Location
 * @text カスタム18の位置
 * @desc カスタム18のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 18 ==
 *
 * @param Custom 18 Colors
 * @text カスタム18色
 * @desc カスタム18のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000017
 * @parent == Custom 18 ==
 *
 * @param Custom 18 Animations
 * @text カスタム18のアニメーション
 * @desc カスタム18の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 18 ==
 *
 * @param Custom 18 Duration
 * @text カスタム18表示時間
 * @type number
 * @desc カスタム18時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 18 ==
 *
 * @param Custom 18 Flash
 * @text カスタム18フラッシュ
 * @desc カスタム18テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 18 ==
 *
 * @param == Custom 19 ==
 * @text -- カスタム19 --
 * @default
 *
 * @param Custom 19 Condition
 * @text カスタム19表示条件
 * @desc カスタム19のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 19 ==
 *
 * @param Custom 19 Text
 * @text カスタム19テキスト
 * @desc カスタム19発生時の表示テキスト
 * @default
 * @parent == Custom 19 ==
 *
 * @param Custom 19 Location
 * @text カスタム19の位置
 * @desc カスタム19のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 19 ==
 *
 * @param Custom 19 Colors
 * @text カスタム19色
 * @desc カスタム19のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000018
 * @parent == Custom 19 ==
 *
 * @param Custom 19 Animations
 * @text カスタム19のアニメーション
 * @desc カスタム19の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 19 ==
 *
 * @param Custom 19 Duration
 * @text カスタム19表示時間
 * @type number
 * @desc カスタム19時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 19 ==
 *
 * @param Custom 19 Flash
 * @text カスタム19フラッシュ
 * @desc カスタム19テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 19 ==
 *
 * @param == Custom 20 ==
 * @text -- カスタム20 --
 * @default
 *
 * @param Custom 20 Condition
 * @text カスタム20表示条件
 * @desc カスタム20のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 20 ==
 *
 * @param Custom 20 Text
 * @text カスタム20テキスト
 * @desc カスタム20発生時の表示テキスト
 * @default
 * @parent == Custom 20 ==
 *
 * @param Custom 20 Location
 * @text カスタム20の位置
 * @desc カスタム20のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 20 ==
 *
 * @param Custom 20 Colors
 * @text カスタム20色
 * @desc カスタム20のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000019
 * @parent == Custom 20 ==
 *
 * @param Custom 20 Animations
 * @text カスタム20のアニメーション
 * @desc カスタム20の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 20 ==
 *
 * @param Custom 20 Duration
 * @text カスタム20表示時間
 * @type number
 * @desc カスタム20時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 20 ==
 *
 * @param Custom 20 Flash
 * @text カスタム20フラッシュ
 * @desc カスタム20テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 20 ==
 *
 * @param == Custom 21 ==
 * @text -- カスタム21 --
 * @default
 *
 * @param Custom 21 Condition
 * @text カスタム21表示条件
 * @desc カスタム21のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 21 ==
 *
 * @param Custom 21 Text
 * @text カスタム21テキスト
 * @desc カスタム21発生時の表示テキスト
 * @default
 * @parent == Custom 21 ==
 *
 * @param Custom 21 Location
 * @text カスタム21の位置
 * @desc カスタム21のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 21 ==
 *
 * @param Custom 21 Colors
 * @text カスタム21色
 * @desc カスタム21のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000020
 * @parent == Custom 21 ==
 *
 * @param Custom 21 Animations
 * @text カスタム21のアニメーション
 * @desc カスタム21の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 21 ==
 *
 * @param Custom 21 Duration
 * @text カスタム21表示時間
 * @type number
 * @desc カスタム21時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 21 ==
 *
 * @param Custom 21 Flash
 * @text カスタム21フラッシュ
 * @desc カスタム21テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 21 ==
 *
 * @param == Custom 22 ==
 * @text -- カスタム22 --
 * @default
 *
 * @param Custom 22 Condition
 * @text カスタム22表示条件
 * @desc カスタム22のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 22 ==
 *
 * @param Custom 22 Text
 * @text カスタム22テキスト
 * @desc カスタム22発生時の表示テキスト
 * @default
 * @parent == Custom 22 ==
 *
 * @param Custom 22 Location
 * @text カスタム22の位置
 * @desc カスタム22のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 22 ==
 *
 * @param Custom 22 Colors
 * @text カスタム22色
 * @desc カスタム22のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000021
 * @parent == Custom 22 ==
 *
 * @param Custom 22 Animations
 * @text カスタム22のアニメーション
 * @desc カスタム22の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 22 ==
 *
 * @param Custom 22 Duration
 * @text カスタム22表示時間
 * @type number
 * @desc カスタム22時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 22 ==
 *
 * @param Custom 22 Flash
 * @text カスタム22フラッシュ
 * @desc カスタム22テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 22 ==
 *
 * @param == Custom 23 ==
 * @text -- カスタム23 --
 * @default
 *
 * @param Custom 23 Condition
 * @text カスタム23表示条件
 * @desc カスタム23のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 23 ==
 *
 * @param Custom 23 Text
 * @text カスタム23テキスト
 * @desc カスタム23発生時の表示テキスト
 * @default
 * @parent == Custom 23 ==
 *
 * @param Custom 23 Location
 * @text カスタム23の位置
 * @desc カスタム23のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 23 ==
 *
 * @param Custom 23 Colors
 * @text カスタム23色
 * @desc カスタム23のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000022
 * @parent == Custom 23 ==
 *
 * @param Custom 23 Animations
 * @text カスタム23のアニメーション
 * @desc カスタム23の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 23 ==
 *
 * @param Custom 23 Duration
 * @text カスタム23表示時間
 * @type number
 * @desc カスタム23時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 23 ==
 *
 * @param Custom 23 Flash
 * @text カスタム23フラッシュ
 * @desc カスタム23テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 23 ==
 *
 * @param == Custom 24 ==
 * @text -- カスタム24 --
 * @default
 *
 * @param Custom 24 Condition
 * @text カスタム24表示条件
 * @desc カスタム24のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 24 ==
 *
 * @param Custom 24 Text
 * @text カスタム24テキスト
 * @desc カスタム24発生時の表示テキスト
 * @default
 * @parent == Custom 24 ==
 *
 * @param Custom 24 Location
 * @text カスタム24の位置
 * @desc カスタム24のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 24 ==
 *
 * @param Custom 24 Colors
 * @text カスタム24色
 * @desc カスタム24のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000023
 * @parent == Custom 24 ==
 *
 * @param Custom 24 Animations
 * @text カスタム24のアニメーション
 * @desc カスタム24の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 24 ==
 *
 * @param Custom 24 Duration
 * @text カスタム24表示時間
 * @type number
 * @desc カスタム24時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 24 ==
 *
 * @param Custom 24 Flash
 * @text カスタム24フラッシュ
 * @desc カスタム24テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 24 ==
 *
 * @param == Custom 25 ==
 * @text -- カスタム25 --
 * @default
 *
 * @param Custom 25 Condition
 * @text カスタム25表示条件
 * @desc カスタム25のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 25 ==
 *
 * @param Custom 25 Text
 * @text カスタム25テキスト
 * @desc カスタム25発生時の表示テキスト
 * @default
 * @parent == Custom 25 ==
 *
 * @param Custom 25 Location
 * @text カスタム25の位置
 * @desc カスタム25のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 25 ==
 *
 * @param Custom 25 Colors
 * @text カスタム25色
 * @desc カスタム25のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000024
 * @parent == Custom 25 ==
 *
 * @param Custom 25 Animations
 * @text カスタム25のアニメーション
 * @desc カスタム25の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 25 ==
 *
 * @param Custom 25 Duration
 * @text カスタム25表示時間
 * @type number
 * @desc カスタム25時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 25 ==
 *
 * @param Custom 25 Flash
 * @text カスタム25フラッシュ
 * @desc カスタム25テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 25 ==
 *
 * @param == Custom 26 ==
 * @text -- カスタム26 --
 * @default
 *
 * @param Custom 26 Condition
 * @text カスタム26表示条件
 * @desc カスタム26のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 26 ==
 *
 * @param Custom 26 Text
 * @text カスタム26テキスト
 * @desc カスタム26発生時の表示テキスト
 * @default
 * @parent == Custom 26 ==
 *
 * @param Custom 26 Location
 * @text カスタム26の位置
 * @desc カスタム26のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 26 ==
 *
 * @param Custom 26 Colors
 * @text カスタム26色
 * @desc カスタム26のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000025
 * @parent == Custom 26 ==
 *
 * @param Custom 26 Animations
 * @text カスタム26のアニメーション
 * @desc カスタム26の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 26 ==
 *
 * @param Custom 26 Duration
 * @text カスタム26表示時間
 * @type number
 * @desc カスタム26時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 26 ==
 *
 * @param Custom 26 Flash
 * @text カスタム26フラッシュ
 * @desc カスタム26テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 26 ==
 *
 * @param == Custom 27 ==
 * @text -- カスタム27 --
 * @default
 *
 * @param Custom 27 Condition
 * @text カスタム27表示条件
 * @desc カスタム27のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 27 ==
 *
 * @param Custom 27 Text
 * @text カスタム27テキスト
 * @desc カスタム27発生時の表示テキスト
 * @default
 * @parent == Custom 27 ==
 *
 * @param Custom 27 Location
 * @text カスタム27の位置
 * @desc カスタム27のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 27 ==
 *
 * @param Custom 27 Colors
 * @text カスタム27色
 * @desc カスタム27のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000026
 * @parent == Custom 27 ==
 *
 * @param Custom 27 Animations
 * @text カスタム27のアニメーション
 * @desc カスタム27の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 27 ==
 *
 * @param Custom 27 Duration
 * @text カスタム27表示時間
 * @type number
 * @desc カスタム27時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 27 ==
 *
 * @param Custom 27 Flash
 * @text カスタム27フラッシュ
 * @desc カスタム27テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 27 ==
 *
 * @param == Custom 28 ==
 * @text -- カスタム28 --
 * @default
 *
 * @param Custom 28 Condition
 * @text カスタム28表示条件
 * @desc カスタム28のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 28 ==
 *
 * @param Custom 28 Text
 * @text カスタム28テキスト
 * @desc カスタム28発生時の表示テキスト
 * @default
 * @parent == Custom 28 ==
 *
 * @param Custom 28 Location
 * @text カスタム28の位置
 * @desc カスタム28のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 28 ==
 *
 * @param Custom 28 Colors
 * @text カスタム28色
 * @desc カスタム28のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000027
 * @parent == Custom 28 ==
 *
 * @param Custom 28 Animations
 * @text カスタム28のアニメーション
 * @desc カスタム28の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 28 ==
 *
 * @param Custom 28 Duration
 * @text カスタム28表示時間
 * @type number
 * @desc カスタム28時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 28 ==
 *
 * @param Custom 28 Flash
 * @text カスタム28フラッシュ
 * @desc カスタム28テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 28 ==
 *
 * @param == Custom 29 ==
 * @text -- カスタム29 --
 * @default
 *
 * @param Custom 29 Condition
 * @text カスタム29表示条件
 * @desc カスタム29のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 29 ==
 *
 * @param Custom 29 Text
 * @text カスタム29テキスト
 * @desc カスタム29発生時の表示テキスト
 * @default
 * @parent == Custom 29 ==
 *
 * @param Custom 29 Location
 * @text カスタム29の位置
 * @desc カスタム29のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 29 ==
 *
 * @param Custom 29 Colors
 * @text カスタム29色
 * @desc カスタム29のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000028
 * @parent == Custom 29 ==
 *
 * @param Custom 29 Animations
 * @text カスタム29のアニメーション
 * @desc カスタム29の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 29 ==
 *
 * @param Custom 29 Duration
 * @text カスタム29表示時間
 * @type number
 * @desc カスタム29時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 29 ==
 *
 * @param Custom 29 Flash
 * @text カスタム29フラッシュ
 * @desc カスタム29テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 29 ==
 *
 * @param == Custom 30 ==
 * @text -- カスタム30 --
 * @default
 *
 * @param Custom 30 Condition
 * @text カスタム30表示条件
 * @desc カスタム30のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 30 ==
 *
 * @param Custom 30 Text
 * @text カスタム30テキスト
 * @desc カスタム30発生時の表示テキスト
 * @default
 * @parent == Custom 30 ==
 *
 * @param Custom 30 Location
 * @text カスタム30の位置
 * @desc カスタム30のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 30 ==
 *
 * @param Custom 30 Colors
 * @text カスタム30色
 * @desc カスタム30のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000029
 * @parent == Custom 30 ==
 *
 * @param Custom 30 Animations
 * @text カスタム30のアニメーション
 * @desc カスタム30の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 30 ==
 *
 * @param Custom 30 Duration
 * @text カスタム30表示時間
 * @type number
 * @desc カスタム30時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 30 ==
 *
 * @param Custom 30 Flash
 * @text カスタム30フラッシュ
 * @desc カスタム30テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 30 ==
 *
 * @param == Custom 31 ==
 * @text -- カスタム31 --
 * @default
 *
 * @param Custom 31 Condition
 * @text カスタム31表示条件
 * @desc カスタム31のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 31 ==
 *
 * @param Custom 31 Text
 * @text カスタム31テキスト
 * @desc カスタム31発生時の表示テキスト
 * @default
 * @parent == Custom 31 ==
 *
 * @param Custom 31 Location
 * @text カスタム31の位置
 * @desc カスタム31のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 31 ==
 *
 * @param Custom 31 Colors
 * @text カスタム31色
 * @desc カスタム31のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000030
 * @parent == Custom 31 ==
 *
 * @param Custom 31 Animations
 * @text カスタム31のアニメーション
 * @desc カスタム31の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 31 ==
 *
 * @param Custom 31 Duration
 * @text カスタム31表示時間
 * @type number
 * @desc カスタム31時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 31 ==
 *
 * @param Custom 31 Flash
 * @text カスタム31フラッシュ
 * @desc カスタム31テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 31 ==
 *
 * @param == Custom 32 ==
 * @text -- カスタム32 --
 * @default
 *
 * @param Custom 32 Condition
 * @text カスタム32表示条件
 * @desc カスタム32のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 32 ==
 *
 * @param Custom 32 Text
 * @text カスタム32テキスト
 * @desc カスタム32発生時の表示テキスト
 * @default
 * @parent == Custom 32 ==
 *
 * @param Custom 32 Location
 * @text カスタム32の位置
 * @desc カスタム32のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 32 ==
 *
 * @param Custom 32 Colors
 * @text カスタム32色
 * @desc カスタム32のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000031
 * @parent == Custom 32 ==
 *
 * @param Custom 32 Animations
 * @text カスタム32のアニメーション
 * @desc カスタム32の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 32 ==
 *
 * @param Custom 32 Duration
 * @text カスタム32表示時間
 * @type number
 * @desc カスタム32時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 32 ==
 *
 * @param Custom 32 Flash
 * @text カスタム32フラッシュ
 * @desc カスタム32テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 32 ==
 *
 * @param == Custom 33 ==
 * @text -- カスタム33 --
 * @default
 *
 * @param Custom 33 Condition
 * @text カスタム33表示条件
 * @desc カスタム33のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 33 ==
 *
 * @param Custom 33 Text
 * @text カスタム33テキスト
 * @desc カスタム33発生時の表示テキスト
 * @default
 * @parent == Custom 33 ==
 *
 * @param Custom 33 Location
 * @text カスタム33の位置
 * @desc カスタム33のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 33 ==
 *
 * @param Custom 33 Colors
 * @text カスタム33色
 * @desc カスタム33のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000032
 * @parent == Custom 33 ==
 *
 * @param Custom 33 Animations
 * @text カスタム33のアニメーション
 * @desc カスタム33の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 33 ==
 *
 * @param Custom 33 Duration
 * @text カスタム33表示時間
 * @type number
 * @desc カスタム33時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 33 ==
 *
 * @param Custom 33 Flash
 * @text カスタム33フラッシュ
 * @desc カスタム33テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 33 ==
 *
 * @param == Custom 34 ==
 * @text -- カスタム34 --
 * @default
 *
 * @param Custom 34 Condition
 * @text カスタム34表示条件
 * @desc カスタム34のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 34 ==
 *
 * @param Custom 34 Text
 * @text カスタム34テキスト
 * @desc カスタム34発生時の表示テキスト
 * @default
 * @parent == Custom 34 ==
 *
 * @param Custom 34 Location
 * @text カスタム34の位置
 * @desc カスタム34のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 34 ==
 *
 * @param Custom 34 Colors
 * @text カスタム34色
 * @desc カスタム34のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000033
 * @parent == Custom 34 ==
 *
 * @param Custom 34 Animations
 * @text カスタム34のアニメーション
 * @desc カスタム34の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 34 ==
 *
 * @param Custom 34 Duration
 * @text カスタム34表示時間
 * @type number
 * @desc カスタム34時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 34 ==
 *
 * @param Custom 34 Flash
 * @text カスタム34フラッシュ
 * @desc カスタム34テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 34 ==
 *
 * @param == Custom 35 ==
 * @text -- カスタム35 --
 * @default
 *
 * @param Custom 35 Condition
 * @text カスタム35表示条件
 * @desc カスタム35のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 35 ==
 *
 * @param Custom 35 Text
 * @text カスタム35テキスト
 * @desc カスタム35発生時の表示テキスト
 * @default
 * @parent == Custom 35 ==
 *
 * @param Custom 35 Location
 * @text カスタム35の位置
 * @desc カスタム35のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 35 ==
 *
 * @param Custom 35 Colors
 * @text カスタム35色
 * @desc カスタム35のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000034
 * @parent == Custom 35 ==
 *
 * @param Custom 35 Animations
 * @text カスタム35のアニメーション
 * @desc カスタム35の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 35 ==
 *
 * @param Custom 35 Duration
 * @text カスタム35表示時間
 * @type number
 * @desc カスタム35時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 35 ==
 *
 * @param Custom 35 Flash
 * @text カスタム35フラッシュ
 * @desc カスタム35テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 35 ==
 *
 * @param == Custom 36 ==
 * @text -- カスタム36 --
 * @default
 *
 * @param Custom 36 Condition
 * @text カスタム36表示条件
 * @desc カスタム36のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 36 ==
 *
 * @param Custom 36 Text
 * @text カスタム36テキスト
 * @desc カスタム36発生時の表示テキスト
 * @default
 * @parent == Custom 36 ==
 *
 * @param Custom 36 Location
 * @text カスタム36の位置
 * @desc カスタム36のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 36 ==
 *
 * @param Custom 36 Colors
 * @text カスタム36色
 * @desc カスタム36のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000035
 * @parent == Custom 36 ==
 *
 * @param Custom 36 Animations
 * @text カスタム36のアニメーション
 * @desc カスタム36の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 36 ==
 *
 * @param Custom 36 Duration
 * @text カスタム36表示時間
 * @type number
 * @desc カスタム36時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 36 ==
 *
 * @param Custom 36 Flash
 * @text カスタム36フラッシュ
 * @desc カスタム36テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 36 ==
 *
 * @param == Custom 37 ==
 * @text -- カスタム37 --
 * @default
 *
 * @param Custom 37 Condition
 * @text カスタム37表示条件
 * @desc カスタム37のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 37 ==
 *
 * @param Custom 37 Text
 * @text カスタム37テキスト
 * @desc カスタム37発生時の表示テキスト
 * @default
 * @parent == Custom 37 ==
 *
 * @param Custom 37 Location
 * @text カスタム37の位置
 * @desc カスタム37のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 37 ==
 *
 * @param Custom 37 Colors
 * @text カスタム37色
 * @desc カスタム37のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000036
 * @parent == Custom 37 ==
 *
 * @param Custom 37 Animations
 * @text カスタム37のアニメーション
 * @desc カスタム37の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 37 ==
 *
 * @param Custom 37 Duration
 * @text カスタム37表示時間
 * @type number
 * @desc カスタム37時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 37 ==
 *
 * @param Custom 37 Flash
 * @text カスタム37フラッシュ
 * @desc カスタム37テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 37 ==
 *
 * @param == Custom 38 ==
 * @text -- カスタム38 --
 * @default
 *
 * @param Custom 38 Condition
 * @text カスタム38表示条件
 * @desc カスタム38のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 38 ==
 *
 * @param Custom 38 Text
 * @text カスタム38テキスト
 * @desc カスタム38発生時の表示テキスト
 * @default
 * @parent == Custom 38 ==
 *
 * @param Custom 38 Location
 * @text カスタム38の位置
 * @desc カスタム38のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 38 ==
 *
 * @param Custom 38 Colors
 * @text カスタム38色
 * @desc カスタム38のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000037
 * @parent == Custom 38 ==
 *
 * @param Custom 38 Animations
 * @text カスタム38のアニメーション
 * @desc カスタム38の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 38 ==
 *
 * @param Custom 38 Duration
 * @text カスタム38表示時間
 * @type number
 * @desc カスタム38時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 38 ==
 *
 * @param Custom 38 Flash
 * @text カスタム38フラッシュ
 * @desc カスタム38テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 38 ==
 *
 * @param == Custom 39 ==
 * @text -- カスタム39 --
 * @default
 *
 * @param Custom 39 Condition
 * @text カスタム39表示条件
 * @desc カスタム39のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 39 ==
 *
 * @param Custom 39 Text
 * @text カスタム39テキスト
 * @desc カスタム39発生時の表示テキスト
 * @default
 * @parent == Custom 39 ==
 *
 * @param Custom 39 Location
 * @text カスタム39の位置
 * @desc カスタム39のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 39 ==
 *
 * @param Custom 39 Colors
 * @text カスタム39色
 * @desc カスタム39のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000038
 * @parent == Custom 39 ==
 *
 * @param Custom 39 Animations
 * @text カスタム39のアニメーション
 * @desc カスタム39の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 39 ==
 *
 * @param Custom 39 Duration
 * @text カスタム39表示時間
 * @type number
 * @desc カスタム39時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 39 ==
 *
 * @param Custom 39 Flash
 * @text カスタム39フラッシュ
 * @desc カスタム39テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 39 ==
 *
 * @param == Custom 40 ==
 * @text -- カスタム40 --
 * @default
 *
 * @param Custom 40 Condition
 * @text カスタム40表示条件
 * @desc カスタム40のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 40 ==
 *
 * @param Custom 40 Text
 * @text カスタム40テキスト
 * @desc カスタム40発生時の表示テキスト
 * @default
 * @parent == Custom 40 ==
 *
 * @param Custom 40 Location
 * @text カスタム40の位置
 * @desc カスタム40のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 40 ==
 *
 * @param Custom 40 Colors
 * @text カスタム40色
 * @desc カスタム40のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000039
 * @parent == Custom 40 ==
 *
 * @param Custom 40 Animations
 * @text カスタム40のアニメーション
 * @desc カスタム40の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 40 ==
 *
 * @param Custom 40 Duration
 * @text カスタム40表示時間
 * @type number
 * @desc カスタム40時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 40 ==
 *
 * @param Custom 40 Flash
 * @text カスタム40フラッシュ
 * @desc カスタム40テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 40 ==
 *
 * @param == Custom 41 ==
 * @text -- カスタム41 --
 * @default
 *
 * @param Custom 41 Condition
 * @text カスタム41表示条件
 * @desc カスタム41のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 41 ==
 *
 * @param Custom 41 Text
 * @text カスタム41テキスト
 * @desc カスタム41発生時の表示テキスト
 * @default
 * @parent == Custom 41 ==
 *
 * @param Custom 41 Location
 * @text カスタム41の位置
 * @desc カスタム41のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 41 ==
 *
 * @param Custom 41 Colors
 * @text カスタム41色
 * @desc カスタム41のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000040
 * @parent == Custom 41 ==
 *
 * @param Custom 41 Animations
 * @text カスタム41のアニメーション
 * @desc カスタム41の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 41 ==
 *
 * @param Custom 41 Duration
 * @text カスタム41表示時間
 * @type number
 * @desc カスタム41時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 41 ==
 *
 * @param Custom 41 Flash
 * @text カスタム41フラッシュ
 * @desc カスタム41テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 41 ==
 *
 * @param == Custom 42 ==
 * @text -- カスタム42 --
 * @default
 *
 * @param Custom 42 Condition
 * @text カスタム42表示条件
 * @desc カスタム42のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 42 ==
 *
 * @param Custom 42 Text
 * @text カスタム42テキスト
 * @desc カスタム42発生時の表示テキスト
 * @default
 * @parent == Custom 42 ==
 *
 * @param Custom 42 Location
 * @text カスタム42の位置
 * @desc カスタム42のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 42 ==
 *
 * @param Custom 42 Colors
 * @text カスタム42色
 * @desc カスタム42のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000041
 * @parent == Custom 42 ==
 *
 * @param Custom 42 Animations
 * @text カスタム42のアニメーション
 * @desc カスタム42の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 42 ==
 *
 * @param Custom 42 Duration
 * @text カスタム42表示時間
 * @type number
 * @desc カスタム42時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 42 ==
 *
 * @param Custom 42 Flash
 * @text カスタム42フラッシュ
 * @desc カスタム42テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 42 ==
 *
 * @param == Custom 43 ==
 * @text -- カスタム43 --
 * @default
 *
 * @param Custom 43 Condition
 * @text カスタム43表示条件
 * @desc カスタム43のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 43 ==
 *
 * @param Custom 43 Text
 * @text カスタム43テキスト
 * @desc カスタム43発生時の表示テキスト
 * @default
 * @parent == Custom 43 ==
 *
 * @param Custom 43 Location
 * @text カスタム43の位置
 * @desc カスタム43のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 43 ==
 *
 * @param Custom 43 Colors
 * @text カスタム43色
 * @desc カスタム43のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000042
 * @parent == Custom 43 ==
 *
 * @param Custom 43 Animations
 * @text カスタム43のアニメーション
 * @desc カスタム43の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 43 ==
 *
 * @param Custom 43 Duration
 * @text カスタム43表示時間
 * @type number
 * @desc カスタム43時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 43 ==
 *
 * @param Custom 43 Flash
 * @text カスタム43フラッシュ
 * @desc カスタム43テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 43 ==
 *
 * @param == Custom 44 ==
 * @text -- カスタム44 --
 * @default
 *
 * @param Custom 44 Condition
 * @text カスタム44表示条件
 * @desc カスタム44のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 44 ==
 *
 * @param Custom 44 Text
 * @text カスタム44テキスト
 * @desc カスタム44発生時の表示テキスト
 * @default
 * @parent == Custom 44 ==
 *
 * @param Custom 44 Location
 * @text カスタム44の位置
 * @desc カスタム44のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 44 ==
 *
 * @param Custom 44 Colors
 * @text カスタム44色
 * @desc カスタム44のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000043
 * @parent == Custom 44 ==
 *
 * @param Custom 44 Animations
 * @text カスタム44のアニメーション
 * @desc カスタム44の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 44 ==
 *
 * @param Custom 44 Duration
 * @text カスタム44表示時間
 * @type number
 * @desc カスタム44時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 44 ==
 *
 * @param Custom 44 Flash
 * @text カスタム44フラッシュ
 * @desc カスタム44テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 44 ==
 *
 * @param == Custom 45 ==
 * @text -- カスタム45 --
 * @default
 *
 * @param Custom 45 Condition
 * @text カスタム45表示条件
 * @desc カスタム45のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 45 ==
 *
 * @param Custom 45 Text
 * @text カスタム45テキスト
 * @desc カスタム45発生時の表示テキスト
 * @default
 * @parent == Custom 45 ==
 *
 * @param Custom 45 Location
 * @text カスタム45の位置
 * @desc カスタム45のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 45 ==
 *
 * @param Custom 45 Colors
 * @text カスタム45色
 * @desc カスタム45のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000044
 * @parent == Custom 45 ==
 *
 * @param Custom 45 Animations
 * @text カスタム45のアニメーション
 * @desc カスタム45の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 45 ==
 *
 * @param Custom 45 Duration
 * @text カスタム45表示時間
 * @type number
 * @desc カスタム45時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 45 ==
 *
 * @param Custom 45 Flash
 * @text カスタム45フラッシュ
 * @desc カスタム45テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 45 ==
 *
 * @param == Custom 46 ==
 * @text -- カスタム46 --
 * @default
 *
 * @param Custom 46 Condition
 * @text カスタム46表示条件
 * @desc カスタム46のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 46 ==
 *
 * @param Custom 46 Text
 * @text カスタム46テキスト
 * @desc カスタム46発生時の表示テキスト
 * @default
 * @parent == Custom 46 ==
 *
 * @param Custom 46 Location
 * @text カスタム46の位置
 * @desc カスタム46のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 46 ==
 *
 * @param Custom 46 Colors
 * @text カスタム46色
 * @desc カスタム46のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000045
 * @parent == Custom 46 ==
 *
 * @param Custom 46 Animations
 * @text カスタム46のアニメーション
 * @desc カスタム46の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 46 ==
 *
 * @param Custom 46 Duration
 * @text カスタム46表示時間
 * @type number
 * @desc カスタム46時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 46 ==
 *
 * @param Custom 46 Flash
 * @text カスタム46フラッシュ
 * @desc カスタム46テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 46 ==
 *
 * @param == Custom 47 ==
 * @text -- カスタム47 --
 * @default
 *
 * @param Custom 47 Condition
 * @text カスタム47表示条件
 * @desc カスタム47のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 47 ==
 *
 * @param Custom 47 Text
 * @text カスタム47テキスト
 * @desc カスタム47発生時の表示テキスト
 * @default
 * @parent == Custom 47 ==
 *
 * @param Custom 47 Location
 * @text カスタム47の位置
 * @desc カスタム47のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 47 ==
 *
 * @param Custom 47 Colors
 * @text カスタム47色
 * @desc カスタム47のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000046
 * @parent == Custom 47 ==
 *
 * @param Custom 47 Animations
 * @text カスタム47のアニメーション
 * @desc カスタム47の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 47 ==
 *
 * @param Custom 47 Duration
 * @text カスタム47表示時間
 * @type number
 * @desc カスタム47時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 47 ==
 *
 * @param Custom 47 Flash
 * @text カスタム47フラッシュ
 * @desc カスタム47テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 47 ==
 *
 * @param == Custom 48 ==
 * @text -- カスタム48 --
 * @default
 *
 * @param Custom 48 Condition
 * @text カスタム48表示条件
 * @desc カスタム48のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 48 ==
 *
 * @param Custom 48 Text
 * @text カスタム48テキスト
 * @desc カスタム48発生時の表示テキスト
 * @default
 * @parent == Custom 48 ==
 *
 * @param Custom 48 Location
 * @text カスタム48の位置
 * @desc カスタム48のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 48 ==
 *
 * @param Custom 48 Colors
 * @text カスタム48色
 * @desc カスタム48のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000047
 * @parent == Custom 48 ==
 *
 * @param Custom 48 Animations
 * @text カスタム48のアニメーション
 * @desc カスタム48の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 48 ==
 *
 * @param Custom 48 Duration
 * @text カスタム48表示時間
 * @type number
 * @desc カスタム48時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 48 ==
 *
 * @param Custom 48 Flash
 * @text カスタム48フラッシュ
 * @desc カスタム48テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 48 ==
 *
 * @param == Custom 49 ==
 * @text -- カスタム49 --
 * @default
 *
 * @param Custom 49 Condition
 * @text カスタム49表示条件
 * @desc カスタム49のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 49 ==
 *
 * @param Custom 49 Text
 * @text カスタム49テキスト
 * @desc カスタム49発生時の表示テキスト
 * @default
 * @parent == Custom 49 ==
 *
 * @param Custom 49 Location
 * @text カスタム49の位置
 * @desc カスタム49のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 49 ==
 *
 * @param Custom 49 Colors
 * @text カスタム49色
 * @desc カスタム49のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000048
 * @parent == Custom 49 ==
 *
 * @param Custom 49 Animations
 * @text カスタム49のアニメーション
 * @desc カスタム49の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 49 ==
 *
 * @param Custom 49 Duration
 * @text カスタム49表示時間
 * @type number
 * @desc カスタム49時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 49 ==
 *
 * @param Custom 49 Flash
 * @text カスタム49フラッシュ
 * @desc カスタム49テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 49 ==
 *
 * @param == Custom 50 ==
 * @text -- カスタム50 --
 * @default
 *
 * @param Custom 50 Condition
 * @text カスタム50表示条件
 * @desc カスタム50のポップアップが表示される条件
 * JavaScript式。'result'はGame_ActionResult
 * @default false
 * @parent == Custom 50 ==
 *
 * @param Custom 50 Text
 * @text カスタム50テキスト
 * @desc カスタム50発生時の表示テキスト
 * @default
 * @parent == Custom 50 ==
 *
 * @param Custom 50 Location
 * @text カスタム50の位置
 * @desc カスタム50のテキストの初期位置
 * 書式: X位置, Y位置
 * @default 24, -48
 * @parent == Custom 50 ==
 *
 * @param Custom 50 Colors
 * @text カスタム50色
 * @desc カスタム50のテキスト色
 * 書式: ベース色 | アウトライン色
 * @default #FFFFFF | #000049
 * @parent == Custom 50 ==
 *
 * @param Custom 50 Animations
 * @text カスタム50のアニメーション
 * @desc カスタム50の表示アニメーション
 * @type select
 * @option デフォルト
 * @value default
 * @option 横伸縮
 * @value horizontal
 * @option 浮かび上がる
 * @value float
 * @option 落ちる
 * @value fall
 * @option 左へスライド
 * @value left
 * @option 右へスライド
 * @value right
 * @option 1回転
 * @value rotation
 * @default float
 * @parent == Custom 50 ==
 *
 * @param Custom 50 Duration
 * @text カスタム50表示時間
 * @type number
 * @desc カスタム50時のテキストの表示時間
 * 正の整数
 * @default 60
 * @parent == Custom 50 ==
 *
 * @param Custom 50 Flash
 * @text カスタム50フラッシュ
 * @desc カスタム50テキストのフラッシュ
 * 書式: 赤, 緑, 青, 強さ, 表示時間
 * @default 0, 0, 0, 0, 0
 * @parent == Custom 50 ==
 *
 */
/*:
 * @plugindesc Adds more options to the Battle Popups; customization over the attributes of the popups and the ability to add more.
 * @author SumRndmDde
 *
 * @param == Global Options ==
 * @default
 *
 * @param Font
 * @desc The font used by the damage Popups.
 * @default GameFont
 *
 * @param Font Size
 * @desc The size of the font used by damage popups.
 * @default 34
 *
 * @param X Shift
 * @desc The shift of the X position between each stacked result.
 * @default 0
 *
 * @param Y Shift
 * @desc The shift of the Y position between each stacked result.
 * @default 34
 *
 * @param Global Condition
 * @desc This is a condition that must be true for the popup to appear. You can use both 'target' and 'result'.
 * @default target.isAppeared()
 *
 * @param == HP Damage ==
 * @default
 *
 * @param HP Damage Condition
 * @desc If this condition is true, an HP Damage popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.hpDamage > 0
 *
 * @param HP Damage Text
 * @desc The text that appears when HP Damage occurs.
 * Use %1 to represent the damage value.
 * @default -%1 HP
 *
 * @param HP Damage Location
 * @desc The initial location of the text for HP Damage.
 * Use the format: X Position, Y Position
 * @default 0, 0
 *
 * @param HP Damage Colors
 * @desc The color of the text for HP Damage.
 * Use the format: Base Color | Outline Color
 * @default #FF4D4D | #000000
 *
 * @param HP Damage Animations
 * @desc The animations used for the HP Damage text.
 * Check the HELP for a list of choices.
 * @default default
 *
 * @param HP Damage Duration
 * @desc The duration of the HP Damage text.
 * Input a positive number.
 * @default 120
 *
 * @param HP Damage Flash
 * @desc The flash of the HP Damage text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == HP Heal ==
 * @default
 *
 * @param HP Heal Condition
 * @desc If this condition is true, an HP Heal popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.hpDamage < 0
 *
 * @param HP Heal Text
 * @desc The text that appears when HP Heal occurs.
 * Use %1 to represent the Heal value.
 * @default +%1 HP
 *
 * @param HP Heal Location
 * @desc The initial location of the text for HP Heal.
 * Use the format: X Position, Y Position
 * @default 0, 0
 *
 * @param HP Heal Colors
 * @desc The color of the text for HP Heal.
 * Use the format: Base Color | Outline Color
 * @default #8CFF66 | #000000
 *
 * @param HP Heal Animations
 * @desc The animations used for the HP Heal text.
 * Check the HELP for a list of choices.
 * @default default
 *
 * @param HP Heal Duration
 * @desc The duration of the HP Heal text.
 * Input a positive number.
 * @default 120
 *
 * @param HP Heal Flash
 * @desc The flash of the HP Heal text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == MP Damage ==
 * @default
 *
 * @param MP Damage Condition
 * @desc If this condition is true, an MP Damage popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.mpDamage > 0
 *
 * @param MP Damage Text
 * @desc The text that appears when MP Damage occurs.
 * Use %1 to represent the damage value.
 * @default -%1 MP
 *
 * @param MP Damage Location
 * @desc The initial location of the text for MP Damage.
 * Use the format: X Position, Y Position
 * @default 0, 0
 *
 * @param MP Damage Colors
 * @desc The color of the text for MP Damage.
 * Use the format: Base Color | Outline Color
 * @default #66B3FF | #000000
 *
 * @param MP Damage Animations
 * @desc The animations used for the MP Damage text.
 * Check the HELP for a list of choices.
 * @default default
 *
 * @param MP Damage Duration
 * @desc The duration of the MP Damage text.
 * Input a positive number.
 * @default 120
 *
 * @param MP Damage Flash
 * @desc The flash of the MP Damage text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == MP Heal ==
 * @default
 *
 * @param MP Heal Condition
 * @desc If this condition is true, an MP Heal popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.mpDamage < 0
 *
 * @param MP Heal Text
 * @desc The text that appears when MP Heal occurs.
 * Use %1 to represent the Heal value.
 * @default +%1 MP
 *
 * @param MP Heal Location
 * @desc The initial location of the text for MP Heal.
 * Use the format: X Position, Y Position
 * @default 0, 0
 *
 * @param MP Heal Colors
 * @desc The color of the text for MP Heal.
 * Use the format: Base Color | Outline Color
 * @default #FFFF99 | #000000
 *
 * @param MP Heal Animations
 * @desc The animations used for the MP Heal text.
 * Check the HELP for a list of choices.
 * @default default
 *
 * @param MP Heal Duration
 * @desc The duration of the MP Heal text.
 * Input a positive number.
 * @default 120
 *
 * @param MP Heal Flash
 * @desc The flash of the MP Heal text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == TP Damage ==
 * @default
 *
 * @param TP Damage Condition
 * @desc If this condition is true, an TP Damage popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.tpDamage > 0
 *
 * @param TP Damage Text
 * @desc The text that appears when TP Damage occurs.
 * Use %1 to represent the damage value.
 * @default -%1 TP
 *
 * @param TP Damage Location
 * @desc The initial location of the text for TP Damage.
 * Use the format: X Position, Y Position
 * @default 0, 0
 *
 * @param TP Damage Colors
 * @desc The color of the text for TP Damage.
 * Use the format: Base Color | Outline Color
 * @default #FFB3FF | #000000
 *
 * @param TP Damage Animations
 * @desc The animations used for the TP Damage text.
 * Check the HELP for a list of choices.
 * @default default
 *
 * @param TP Damage Duration
 * @desc The duration of the TP Damage text.
 * Input a positive number.
 * @default 120
 *
 * @param TP Damage Flash
 * @desc The flash of the TP Damage text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == TP Heal ==
 * @default
 *
 * @param TP Heal Condition
 * @desc If this condition is true, an TP Heal popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.tpDamage < 0
 *
 * @param TP Heal Text
 * @desc The text that appears when TP Heal occurs.
 * Use %1 to represent the Heal value.
 * @default +%1 TP
 *
 * @param TP Heal Location
 * @desc The initial location of the text for TP Heal.
 * Use the format: X Position, Y Position
 * @default 0, 0
 *
 * @param TP Heal Colors
 * @desc The color of the text for TP Heal.
 * Use the format: Base Color | Outline Color
 * @default #99FF66 | #000000
 *
 * @param TP Heal Animations
 * @desc The animations used for the TP Heal text.
 * Check the HELP for a list of choices.
 * @default default
 *
 * @param TP Heal Duration
 * @desc The duration of the TP Heal text.
 * Input a positive number.
 * @default 120
 *
 * @param TP Heal Flash
 * @desc The flash of the TP Heal text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Miss ==
 * @default
 *
 * @param Miss Condition
 * @desc If this condition is true, an Miss popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.used && result.missed
 *
 * @param Miss Text
 * @desc The text that appears when a miss occurs.
 * @default MISS
 *
 * @param Miss Location
 * @desc The initial location of the text for missing.
 * Use the format: X Position, Y Position
 * @default 24, this._sprite.height * (-1/3)
 *
 * @param Miss Colors
 * @desc The color of the text for miss.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Miss Animations
 * @desc The animations used for the miss text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Miss Duration
 * @desc The duration of the miss text.
 * Input a positive number.
 * @default 45
 *
 * @param Miss Flash
 * @desc The flash of the Miss text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Evade ==
 * @default
 *
 * @param Evade Condition
 * @desc If this condition is true, an Evade popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.evaded
 *
 * @param Evade Text
 * @desc The text that appears when a evade occurs.
 * @default EVADE
 *
 * @param Evade Location
 * @desc The initial location of the text for evasion.
 * Use the format: X Position, Y Position
 * @default 24, this._sprite.height * (-1/3)
 *
 * @param Evade Colors
 * @desc The color of the text for evade.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Evade Animations
 * @desc The animations used for the evade text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Evade Duration
 * @desc The duration of the evade text.
 * Input a positive number.
 * @default 45
 *
 * @param Evade Flash
 * @desc The flash of the Evade text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Critical ==
 * @default
 *
 * @param Critical Condition
 * @desc If this condition is true, an Critical popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.critical && result.used && !result.missed
 *
 * @param Critical Text
 * @desc The text that appears when a critical occurs.
 * @default CRITICAL
 *
 * @param Critical Location
 * @desc The initial location of the text for criticals.
 * Use the format: X Position, Y Position
 * @default 24, this._sprite.height * (-1/3)
 *
 * @param Critical Colors
 * @desc The color of the text for critical.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Critical Animations
 * @desc The animations used for the critical text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Critical Duration
 * @desc The duration of the critical text.
 * Input a positive number.
 * @default 60
 *
 * @param Critical Flash
 * @desc The flash of the Critical text.
 * Use the format: red, green, blue, intensity, duration
 * @default 255, 0, 0, 160, 60
 *
 * @param == Guarded ==
 * @default
 *
 * @param Guarded Condition
 * @desc If this condition is true, an Guarded popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.guarded && result.used && !result.missed
 *
 * @param Guarded Text
 * @desc The text that appears when a guarded occurs.
 * @default GUARDED
 *
 * @param Guarded Location
 * @desc The initial location of the text for guards.
 * Use the format: X Position, Y Position
 * @default 24, this._sprite.height * (-1/3)
 *
 * @param Guarded Colors
 * @desc The color of the text for guarded.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Guarded Animations
 * @desc The animations used for the guarded text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Guarded Duration
 * @desc The duration of the guarded text.
 * Input a positive number.
 * @default 60
 *
 * @param Guarded Flash
 * @desc The flash of the Guarded text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 130, 130, 160, 60
  *
 * @param == Custom 1 ==
 * @default
 *
 * @param Custom 1 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.drain && result.used && !result.missed
 *
 * @param Custom 1 Text
 * @desc The text that appears when a Custom 1 occurs.
 * @default DRAINED
 *
 * @param Custom 1 Location
 * @desc The initial location of the text for Custom 1.
 * Use the format: X Position, Y Position
 * @default 24, this._sprite.height * (-1/3)
 *
 * @param Custom 1 Colors
 * @desc The color of the text for Custom 1.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 1 Animations
 * @desc The animations used for the Custom 1 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 1 Duration
 * @desc The duration of the Custom 1 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 1 Flash
 * @desc The flash of the Custom 1 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 204, 153, 255, 160, 60
 *
 * @param == Custom 2 ==
 * @default
 *
 * @param Custom 2 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 2 Text
 * @desc The text that appears when a Custom 2 occurs.
 * @default
 *
 * @param Custom 2 Location
 * @desc The initial location of the text for Custom 2.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 2 Colors
 * @desc The color of the text for Custom 2.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 2 Animations
 * @desc The animations used for the Custom 2 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 2 Duration
 * @desc The duration of the Custom 2 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 2 Flash
 * @desc The flash of the Custom 2 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 3 ==
 * @default
 *
 * @param Custom 3 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 3 Text
 * @desc The text that appears when a Custom 3 occurs.
 * @default
 *
 * @param Custom 3 Location
 * @desc The initial location of the text for Custom 3.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 3 Colors
 * @desc The color of the text for Custom 3.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 3 Animations
 * @desc The animations used for the Custom 3 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 3 Duration
 * @desc The duration of the Custom 3 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 3 Flash
 * @desc The flash of the Custom 3 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 4 ==
 * @default
 *
 * @param Custom 4 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 4 Text
 * @desc The text that appears when a Custom 4 occurs.
 * @default
 *
 * @param Custom 4 Location
 * @desc The initial location of the text for Custom 4.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 4 Colors
 * @desc The color of the text for Custom 4.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 4 Animations
 * @desc The animations used for the Custom 4 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 4 Duration
 * @desc The duration of the Custom 4 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 4 Flash
 * @desc The flash of the Custom 4 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 5 ==
 * @default
 *
 * @param Custom 5 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 5 Text
 * @desc The text that appears when a Custom 5 occurs.
 * @default
 *
 * @param Custom 5 Location
 * @desc The initial location of the text for Custom 5.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 5 Colors
 * @desc The color of the text for Custom 5.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 5 Animations
 * @desc The animations used for the Custom 5 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 5 Duration
 * @desc The duration of the Custom 5 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 5 Flash
 * @desc The flash of the Custom 5 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 6 ==
 * @default
 *
 * @param Custom 6 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 6 Text
 * @desc The text that appears when a Custom 6 occurs.
 * @default
 *
 * @param Custom 6 Location
 * @desc The initial location of the text for Custom 6.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 6 Colors
 * @desc The color of the text for Custom 6.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 6 Animations
 * @desc The animations used for the Custom 6 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 6 Duration
 * @desc The duration of the Custom 6 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 6 Flash
 * @desc The flash of the Custom 6 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 7 ==
 * @default
 *
 * @param Custom 7 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 7 Text
 * @desc The text that appears when a Custom 7 occurs.
 * @default
 *
 * @param Custom 7 Location
 * @desc The initial location of the text for Custom 7.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 7 Colors
 * @desc The color of the text for Custom 7.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 7 Animations
 * @desc The animations used for the Custom 7 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 7 Duration
 * @desc The duration of the Custom 7 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 7 Flash
 * @desc The flash of the Custom 7 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 8 ==
 * @default
 *
 * @param Custom 8 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 8 Text
 * @desc The text that appears when a Custom 8 occurs.
 * @default
 *
 * @param Custom 8 Location
 * @desc The initial location of the text for Custom 8.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 8 Colors
 * @desc The color of the text for Custom 8.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 8 Animations
 * @desc The animations used for the Custom 8 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 8 Duration
 * @desc The duration of the Custom 8 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 8 Flash
 * @desc The flash of the Custom 8 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 9 ==
 * @default
 *
 * @param Custom 9 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 9 Text
 * @desc The text that appears when a Custom 9 occurs.
 * @default
 *
 * @param Custom 9 Location
 * @desc The initial location of the text for Custom 9.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 9 Colors
 * @desc The color of the text for Custom 9.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 9 Animations
 * @desc The animations used for the Custom 9 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 9 Duration
 * @desc The duration of the Custom 9 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 9 Flash
 * @desc The flash of the Custom 9 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 10 ==
 * @default
 *
 * @param Custom 10 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 10 Text
 * @desc The text that appears when a Custom 10 occurs.
 * @default
 *
 * @param Custom 10 Location
 * @desc The initial location of the text for Custom 10.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 10 Colors
 * @desc The color of the text for Custom 10.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 10 Animations
 * @desc The animations used for the Custom 10 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 10 Duration
 * @desc The duration of the Custom 10 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 10 Flash
 * @desc The flash of the Custom 10 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 11 ==
 * @default
 *
 * @param Custom 11 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 11 Text
 * @desc The text that appears when a Custom 11 occurs.
 * @default
 *
 * @param Custom 11 Location
 * @desc The initial location of the text for Custom 11.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 11 Colors
 * @desc The color of the text for Custom 11.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 11 Animations
 * @desc The animations used for the Custom 11 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 11 Duration
 * @desc The duration of the Custom 11 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 11 Flash
 * @desc The flash of the Custom 11 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 12 ==
 * @default
 *
 * @param Custom 12 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 12 Text
 * @desc The text that appears when a Custom 12 occurs.
 * @default
 *
 * @param Custom 12 Location
 * @desc The initial location of the text for Custom 12.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 12 Colors
 * @desc The color of the text for Custom 12.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 12 Animations
 * @desc The animations used for the Custom 12 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 12 Duration
 * @desc The duration of the Custom 12 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 12 Flash
 * @desc The flash of the Custom 12 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 13 ==
 * @default
 *
 * @param Custom 13 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 13 Text
 * @desc The text that appears when a Custom 13 occurs.
 * @default
 *
 * @param Custom 13 Location
 * @desc The initial location of the text for Custom 13.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 13 Colors
 * @desc The color of the text for Custom 13.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 13 Animations
 * @desc The animations used for the Custom 13 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 13 Duration
 * @desc The duration of the Custom 13 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 13 Flash
 * @desc The flash of the Custom 13 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 14 ==
 * @default
 *
 * @param Custom 14 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 14 Text
 * @desc The text that appears when a Custom 14 occurs.
 * @default
 *
 * @param Custom 14 Location
 * @desc The initial location of the text for Custom 14.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 14 Colors
 * @desc The color of the text for Custom 14.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 14 Animations
 * @desc The animations used for the Custom 14 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 14 Duration
 * @desc The duration of the Custom 14 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 14 Flash
 * @desc The flash of the Custom 14 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 15 ==
 * @default
 *
 * @param Custom 15 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 15 Text
 * @desc The text that appears when a Custom 15 occurs.
 * @default
 *
 * @param Custom 15 Location
 * @desc The initial location of the text for Custom 15.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 15 Colors
 * @desc The color of the text for Custom 15.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 15 Animations
 * @desc The animations used for the Custom 15 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 15 Duration
 * @desc The duration of the Custom 15 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 15 Flash
 * @desc The flash of the Custom 15 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 16 ==
 * @default
 *
 * @param Custom 16 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 16 Text
 * @desc The text that appears when a Custom 16 occurs.
 * @default
 *
 * @param Custom 16 Location
 * @desc The initial location of the text for Custom 16.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 16 Colors
 * @desc The color of the text for Custom 16.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 16 Animations
 * @desc The animations used for the Custom 16 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 16 Duration
 * @desc The duration of the Custom 16 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 16 Flash
 * @desc The flash of the Custom 16 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 17 ==
 * @default
 *
 * @param Custom 17 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 17 Text
 * @desc The text that appears when a Custom 17 occurs.
 * @default
 *
 * @param Custom 17 Location
 * @desc The initial location of the text for Custom 17.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 17 Colors
 * @desc The color of the text for Custom 17.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 17 Animations
 * @desc The animations used for the Custom 17 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 17 Duration
 * @desc The duration of the Custom 17 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 17 Flash
 * @desc The flash of the Custom 17 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 18 ==
 * @default
 *
 * @param Custom 18 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 18 Text
 * @desc The text that appears when a Custom 18 occurs.
 * @default
 *
 * @param Custom 18 Location
 * @desc The initial location of the text for Custom 18.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 18 Colors
 * @desc The color of the text for Custom 18.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 18 Animations
 * @desc The animations used for the Custom 18 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 18 Duration
 * @desc The duration of the Custom 18 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 18 Flash
 * @desc The flash of the Custom 18 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 19 ==
 * @default
 *
 * @param Custom 19 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 19 Text
 * @desc The text that appears when a Custom 19 occurs.
 * @default
 *
 * @param Custom 19 Location
 * @desc The initial location of the text for Custom 19.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 19 Colors
 * @desc The color of the text for Custom 19.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 19 Animations
 * @desc The animations used for the Custom 19 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 19 Duration
 * @desc The duration of the Custom 19 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 19 Flash
 * @desc The flash of the Custom 19 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 20 ==
 * @default
 *
 * @param Custom 20 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 20 Text
 * @desc The text that appears when a Custom 20 occurs.
 * @default
 *
 * @param Custom 20 Location
 * @desc The initial location of the text for Custom 20.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 20 Colors
 * @desc The color of the text for Custom 20.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 20 Animations
 * @desc The animations used for the Custom 20 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 20 Duration
 * @desc The duration of the Custom 20 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 20 Flash
 * @desc The flash of the Custom 20 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 21 ==
 * @default
 *
 * @param Custom 21 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 21 Text
 * @desc The text that appears when a Custom 21 occurs.
 * @default
 *
 * @param Custom 21 Location
 * @desc The initial location of the text for Custom 21.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 21 Colors
 * @desc The color of the text for Custom 21.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 21 Animations
 * @desc The animations used for the Custom 21 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 21 Duration
 * @desc The duration of the Custom 21 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 21 Flash
 * @desc The flash of the Custom 21 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 22 ==
 * @default
 *
 * @param Custom 22 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 22 Text
 * @desc The text that appears when a Custom 22 occurs.
 * @default
 *
 * @param Custom 22 Location
 * @desc The initial location of the text for Custom 22.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 22 Colors
 * @desc The color of the text for Custom 22.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 22 Animations
 * @desc The animations used for the Custom 22 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 22 Duration
 * @desc The duration of the Custom 22 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 22 Flash
 * @desc The flash of the Custom 22 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 23 ==
 * @default
 *
 * @param Custom 23 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 23 Text
 * @desc The text that appears when a Custom 23 occurs.
 * @default
 *
 * @param Custom 23 Location
 * @desc The initial location of the text for Custom 23.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 23 Colors
 * @desc The color of the text for Custom 23.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 23 Animations
 * @desc The animations used for the Custom 23 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 23 Duration
 * @desc The duration of the Custom 23 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 23 Flash
 * @desc The flash of the Custom 23 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 24 ==
 * @default
 *
 * @param Custom 24 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 24 Text
 * @desc The text that appears when a Custom 24 occurs.
 * @default
 *
 * @param Custom 24 Location
 * @desc The initial location of the text for Custom 24.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 24 Colors
 * @desc The color of the text for Custom 24.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 24 Animations
 * @desc The animations used for the Custom 24 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 24 Duration
 * @desc The duration of the Custom 24 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 24 Flash
 * @desc The flash of the Custom 24 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 25 ==
 * @default
 *
 * @param Custom 25 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 25 Text
 * @desc The text that appears when a Custom 25 occurs.
 * @default
 *
 * @param Custom 25 Location
 * @desc The initial location of the text for Custom 25.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 25 Colors
 * @desc The color of the text for Custom 25.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 25 Animations
 * @desc The animations used for the Custom 25 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 25 Duration
 * @desc The duration of the Custom 25 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 25 Flash
 * @desc The flash of the Custom 25 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 26 ==
 * @default
 *
 * @param Custom 26 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 26 Text
 * @desc The text that appears when a Custom 26 occurs.
 * @default
 *
 * @param Custom 26 Location
 * @desc The initial location of the text for Custom 26.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 26 Colors
 * @desc The color of the text for Custom 26.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 26 Animations
 * @desc The animations used for the Custom 26 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 26 Duration
 * @desc The duration of the Custom 26 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 26 Flash
 * @desc The flash of the Custom 26 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 27 ==
 * @default
 *
 * @param Custom 27 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 27 Text
 * @desc The text that appears when a Custom 27 occurs.
 * @default
 *
 * @param Custom 27 Location
 * @desc The initial location of the text for Custom 27.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 27 Colors
 * @desc The color of the text for Custom 27.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 27 Animations
 * @desc The animations used for the Custom 27 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 27 Duration
 * @desc The duration of the Custom 27 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 27 Flash
 * @desc The flash of the Custom 27 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 28 ==
 * @default
 *
 * @param Custom 28 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 28 Text
 * @desc The text that appears when a Custom 28 occurs.
 * @default
 *
 * @param Custom 28 Location
 * @desc The initial location of the text for Custom 28.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 28 Colors
 * @desc The color of the text for Custom 28.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 28 Animations
 * @desc The animations used for the Custom 28 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 28 Duration
 * @desc The duration of the Custom 28 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 28 Flash
 * @desc The flash of the Custom 28 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 29 ==
 * @default
 *
 * @param Custom 29 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 29 Text
 * @desc The text that appears when a Custom 29 occurs.
 * @default
 *
 * @param Custom 29 Location
 * @desc The initial location of the text for Custom 29.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 29 Colors
 * @desc The color of the text for Custom 29.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 29 Animations
 * @desc The animations used for the Custom 29 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 29 Duration
 * @desc The duration of the Custom 29 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 29 Flash
 * @desc The flash of the Custom 29 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 30 ==
 * @default
 *
 * @param Custom 30 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 30 Text
 * @desc The text that appears when a Custom 30 occurs.
 * @default
 *
 * @param Custom 30 Location
 * @desc The initial location of the text for Custom 30.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 30 Colors
 * @desc The color of the text for Custom 30.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 30 Animations
 * @desc The animations used for the Custom 30 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 30 Duration
 * @desc The duration of the Custom 30 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 30 Flash
 * @desc The flash of the Custom 30 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 31 ==
 * @default
 *
 * @param Custom 31 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 31 Text
 * @desc The text that appears when a Custom 31 occurs.
 * @default
 *
 * @param Custom 31 Location
 * @desc The initial location of the text for Custom 31.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 31 Colors
 * @desc The color of the text for Custom 31.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 31 Animations
 * @desc The animations used for the Custom 31 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 31 Duration
 * @desc The duration of the Custom 31 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 31 Flash
 * @desc The flash of the Custom 31 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 32 ==
 * @default
 *
 * @param Custom 32 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 32 Text
 * @desc The text that appears when a Custom 32 occurs.
 * @default
 *
 * @param Custom 32 Location
 * @desc The initial location of the text for Custom 32.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 32 Colors
 * @desc The color of the text for Custom 32.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 32 Animations
 * @desc The animations used for the Custom 32 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 32 Duration
 * @desc The duration of the Custom 32 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 32 Flash
 * @desc The flash of the Custom 32 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 33 ==
 * @default
 *
 * @param Custom 33 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 33 Text
 * @desc The text that appears when a Custom 33 occurs.
 * @default
 *
 * @param Custom 33 Location
 * @desc The initial location of the text for Custom 33.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 33 Colors
 * @desc The color of the text for Custom 33.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 33 Animations
 * @desc The animations used for the Custom 33 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 33 Duration
 * @desc The duration of the Custom 33 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 33 Flash
 * @desc The flash of the Custom 33 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 34 ==
 * @default
 *
 * @param Custom 34 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 34 Text
 * @desc The text that appears when a Custom 34 occurs.
 * @default
 *
 * @param Custom 34 Location
 * @desc The initial location of the text for Custom 34.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 34 Colors
 * @desc The color of the text for Custom 34.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 34 Animations
 * @desc The animations used for the Custom 34 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 34 Duration
 * @desc The duration of the Custom 34 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 34 Flash
 * @desc The flash of the Custom 34 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 35 ==
 * @default
 *
 * @param Custom 35 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 35 Text
 * @desc The text that appears when a Custom 35 occurs.
 * @default
 *
 * @param Custom 35 Location
 * @desc The initial location of the text for Custom 35.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 35 Colors
 * @desc The color of the text for Custom 35.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 35 Animations
 * @desc The animations used for the Custom 35 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 35 Duration
 * @desc The duration of the Custom 35 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 35 Flash
 * @desc The flash of the Custom 35 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 36 ==
 * @default
 *
 * @param Custom 36 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 36 Text
 * @desc The text that appears when a Custom 36 occurs.
 * @default
 *
 * @param Custom 36 Location
 * @desc The initial location of the text for Custom 36.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 36 Colors
 * @desc The color of the text for Custom 36.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 36 Animations
 * @desc The animations used for the Custom 36 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 36 Duration
 * @desc The duration of the Custom 36 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 36 Flash
 * @desc The flash of the Custom 36 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 37 ==
 * @default
 *
 * @param Custom 37 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 37 Text
 * @desc The text that appears when a Custom 37 occurs.
 * @default
 *
 * @param Custom 37 Location
 * @desc The initial location of the text for Custom 37.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 37 Colors
 * @desc The color of the text for Custom 37.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 37 Animations
 * @desc The animations used for the Custom 37 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 37 Duration
 * @desc The duration of the Custom 37 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 37 Flash
 * @desc The flash of the Custom 37 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 38 ==
 * @default
 *
 * @param Custom 38 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 38 Text
 * @desc The text that appears when a Custom 38 occurs.
 * @default
 *
 * @param Custom 38 Location
 * @desc The initial location of the text for Custom 38.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 38 Colors
 * @desc The color of the text for Custom 38.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 38 Animations
 * @desc The animations used for the Custom 38 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 38 Duration
 * @desc The duration of the Custom 38 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 38 Flash
 * @desc The flash of the Custom 38 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 39 ==
 * @default
 *
 * @param Custom 39 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 39 Text
 * @desc The text that appears when a Custom 39 occurs.
 * @default
 *
 * @param Custom 39 Location
 * @desc The initial location of the text for Custom 39.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 39 Colors
 * @desc The color of the text for Custom 39.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 39 Animations
 * @desc The animations used for the Custom 39 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 39 Duration
 * @desc The duration of the Custom 39 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 39 Flash
 * @desc The flash of the Custom 39 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 40 ==
 * @default
 *
 * @param Custom 40 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 40 Text
 * @desc The text that appears when a Custom 40 occurs.
 * @default
 *
 * @param Custom 40 Location
 * @desc The initial location of the text for Custom 40.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 40 Colors
 * @desc The color of the text for Custom 40.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 40 Animations
 * @desc The animations used for the Custom 40 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 40 Duration
 * @desc The duration of the Custom 40 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 40 Flash
 * @desc The flash of the Custom 40 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 41 ==
 * @default
 *
 * @param Custom 41 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 41 Text
 * @desc The text that appears when a Custom 41 occurs.
 * @default
 *
 * @param Custom 41 Location
 * @desc The initial location of the text for Custom 41.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 41 Colors
 * @desc The color of the text for Custom 41.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 41 Animations
 * @desc The animations used for the Custom 41 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 41 Duration
 * @desc The duration of the Custom 41 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 41 Flash
 * @desc The flash of the Custom 41 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 42 ==
 * @default
 *
 * @param Custom 42 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 42 Text
 * @desc The text that appears when a Custom 42 occurs.
 * @default
 *
 * @param Custom 42 Location
 * @desc The initial location of the text for Custom 42.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 42 Colors
 * @desc The color of the text for Custom 42.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 42 Animations
 * @desc The animations used for the Custom 42 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 42 Duration
 * @desc The duration of the Custom 42 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 42 Flash
 * @desc The flash of the Custom 42 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 43 ==
 * @default
 *
 * @param Custom 43 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 43 Text
 * @desc The text that appears when a Custom 43 occurs.
 * @default
 *
 * @param Custom 43 Location
 * @desc The initial location of the text for Custom 43.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 43 Colors
 * @desc The color of the text for Custom 43.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 43 Animations
 * @desc The animations used for the Custom 43 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 43 Duration
 * @desc The duration of the Custom 43 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 43 Flash
 * @desc The flash of the Custom 43 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 44 ==
 * @default
 *
 * @param Custom 44 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 44 Text
 * @desc The text that appears when a Custom 44 occurs.
 * @default
 *
 * @param Custom 44 Location
 * @desc The initial location of the text for Custom 44.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 44 Colors
 * @desc The color of the text for Custom 44.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 44 Animations
 * @desc The animations used for the Custom 44 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 44 Duration
 * @desc The duration of the Custom 44 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 44 Flash
 * @desc The flash of the Custom 44 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 45 ==
 * @default
 *
 * @param Custom 45 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 45 Text
 * @desc The text that appears when a Custom 45 occurs.
 * @default
 *
 * @param Custom 45 Location
 * @desc The initial location of the text for Custom 45.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 45 Colors
 * @desc The color of the text for Custom 45.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 45 Animations
 * @desc The animations used for the Custom 45 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 45 Duration
 * @desc The duration of the Custom 45 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 45 Flash
 * @desc The flash of the Custom 45 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 46 ==
 * @default
 *
 * @param Custom 46 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 46 Text
 * @desc The text that appears when a Custom 46 occurs.
 * @default
 *
 * @param Custom 46 Location
 * @desc The initial location of the text for Custom 46.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 46 Colors
 * @desc The color of the text for Custom 46.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 46 Animations
 * @desc The animations used for the Custom 46 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 46 Duration
 * @desc The duration of the Custom 46 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 46 Flash
 * @desc The flash of the Custom 46 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 47 ==
 * @default
 *
 * @param Custom 47 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 47 Text
 * @desc The text that appears when a Custom 47 occurs.
 * @default
 *
 * @param Custom 47 Location
 * @desc The initial location of the text for Custom 47.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 47 Colors
 * @desc The color of the text for Custom 47.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 47 Animations
 * @desc The animations used for the Custom 47 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 47 Duration
 * @desc The duration of the Custom 47 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 47 Flash
 * @desc The flash of the Custom 47 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 48 ==
 * @default
 *
 * @param Custom 48 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 48 Text
 * @desc The text that appears when a Custom 48 occurs.
 * @default
 *
 * @param Custom 48 Location
 * @desc The initial location of the text for Custom 48.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 48 Colors
 * @desc The color of the text for Custom 48.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 48 Animations
 * @desc The animations used for the Custom 48 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 48 Duration
 * @desc The duration of the Custom 48 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 48 Flash
 * @desc The flash of the Custom 48 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 49 ==
 * @default
 *
 * @param Custom 49 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 49 Text
 * @desc The text that appears when a Custom 49 occurs.
 * @default
 *
 * @param Custom 49 Location
 * @desc The initial location of the text for Custom 49.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 49 Colors
 * @desc The color of the text for Custom 49.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 49 Animations
 * @desc The animations used for the Custom 49 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 49 Duration
 * @desc The duration of the Custom 49 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 49 Flash
 * @desc The flash of the Custom 49 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 50 ==
 * @default
 *
 * @param Custom 50 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 50 Text
 * @desc The text that appears when a Custom 50 occurs.
 * @default
 *
 * @param Custom 50 Location
 * @desc The initial location of the text for Custom 50.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 50 Colors
 * @desc The color of the text for Custom 50.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 50 Animations
 * @desc The animations used for the Custom 50 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 50 Duration
 * @desc The duration of the Custom 50 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 50 Flash
 * @desc The flash of the Custom 50 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @help
 *
 * Battle Popup Customizer
 * Version 1.20
 * SumRndmDde
 *
 *
 * This plugin adds more options to the Battle Popups!
 * You have more customization over the attributes of the popups and also 
 * have the ability to add custom popups.
 *
 * Furthermore, this plugin changes a lot of the core mechanics of the system,
 * including the fact that the popup text requires an external file.
 * Now it just requires you to input the font/colors you wish.
 *
 *
 * ==========================================================================
 *  Global Options
 * ==========================================================================
 *
 * You can manipulate the various properties of all the popups.
 *
 * This includes the font and the font size.
 * As mentioned before, a font is used instead an image file.
 *
 * Furthermore, if there are multiple popups in the same section, you can set
 * how much the proceeding popups shift on the X and Y axis.
 *
 *
 * ==========================================================================
 *  Existing Popups
 * ==========================================================================
 *
 * You can manipulate the following existing popups:
 *
 * HP Damage
 * HP Heal
 * MP Damage
 * MP Heal
 * TP Damage
 * TP Heal
 * -------------
 * Miss
 * Evade
 * Critical
 * Guarded
 *
 * The first six will be set into one section, and the remaining popups will
 * fall into their own section. These sections each move the popups so they
 * don't overlap.
 *
 *
 * ==========================================================================
 *  Popup Attributes
 * ==========================================================================
 *
 * Here is a list of all the manipulatable attributes:
 *
 *
 *   Condition
 *
 * If this JavaScript condition is true, the popup will be used.
 *
 * ==========================================================================
 *
 *   Text
 *
 * The text shown for the popup.
 *
 * ==========================================================================
 *
 *   Location
 *
 * The X and Y coordinates of the popup.
 * This refers to the initial position of the popup.
 * Use the format: x, y
 *
 * For example: 20, -20
 *
 * ==========================================================================
 *
 *   Colors
 *
 * The colors used by the popup text.
 * Use the format: mainColor | outlineColor
 *
 * For example: #FFFFFF | #000000
 *
 * ==========================================================================
 *
 *   Animations
 *
 * A list of all the animations that affect the popup.
 * All of the available animations are:
 *
 *   default
 *   horizontal
 *   float
 *   fall
 *   left
 *   right
 *   rotation
 *
 * You can use one or multiple animations.
 * Seperate multiple animations with a comma.
 *
 * For example: default, rotation
 *   
 *
 * ==========================================================================
 *
 *   Duration
 *
 * The duration of the popup in frames.
 *
 * ==========================================================================
 *
 *   Flash
 *
 * The flash of the popup.
 * Use the format: red, green, blue, intensity, duration
 *
 * For example: 255, 0, 0, 160, 60
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

var SRD = SRD || {};
SRD.BattlePopupCustomizer = SRD.BattlePopupCustomizer || {};
var Imported = Imported || {};
Imported["SumRndmDde Battle Popup Customizer"] = 1.20;
(function (_) {
	"use strict";
	//-----------------------------------------------------------------------------
	// SRD.BattlePopupCustomizer
	//-----------------------------------------------------------------------------
	var params = PluginManager.parameters('SRD_BattlePopupCustomizer');
	_.font = String(params['Font']);
	_.size = parseInt(params['Font Size']);
	_.xShift = parseFloat(params['X Shift']);
	_.yShift = parseFloat(params['Y Shift']);
	_.condition = String(params['Global Condition']);
	_.popups = [];
	_.prefixes = ['HP Damage', 'HP Heal', 'MP Damage', 'MP Heal', 'TP Damage', 'TP Heal', 'Miss', 'Evade', 'Critical', 'Guarded'];
	for (var i = 0; i < _.prefixes.length; i++) {
		_.popups[i] = {};
		var location = String(params[_.prefixes[i] + ' Location']).split(/\s*,\s*/);
		var colors = String(params[_.prefixes[i] + ' Colors']).split(/\s*\|\s*/);
		var flash = String(params[_.prefixes[i] + ' Flash']).split(/\s*,\s*/);
		_.popups[i].x = String(location[0]);
		_.popups[i].y = String(location[1]);
		_.popups[i].color = String(colors[0]);
		_.popups[i].outline = String(colors[1]);
		_.popups[i].text = String(params[_.prefixes[i] + ' Text']);
		_.popups[i].condition = String(params[_.prefixes[i] + ' Condition']);
		_.popups[i].duration = parseInt(params[_.prefixes[i] + ' Duration']);
		_.popups[i].animations = String(params[_.prefixes[i] + ' Animations']).split(/\s*,\s*/);
		_.popups[i].flashColor = [parseInt(flash[0]), parseInt(flash[1]), parseInt(flash[2]), parseInt(flash[3])];
		_.popups[i].flashDuration = parseInt(flash[4]);
	}
	_.customPops = [];
	for (var i = 1; i <= 50; i++) {
		var condition = String(params['Custom ' + i + ' Condition']).trim();
		if (condition != 'false') {
			_.customPops[i] = {};
			var location = String(params['Custom ' + i + ' Location']).split(/\s*,\s*/);
			var colors = String(params['Custom ' + i + ' Colors']).split(/\s*\|\s*/);
			var flash = String(params['Custom ' + i + ' Flash']).split(/\s*,\s*/);
			_.customPops[i].x = String(location[0]);
			_.customPops[i].y = String(location[1]);
			_.customPops[i].color = String(colors[0]);
			_.customPops[i].outline = String(colors[1]);
			_.customPops[i].text = String(params['Custom ' + i + ' Text']);
			_.customPops[i].condition = condition;
			_.customPops[i].duration = parseInt(params['Custom ' + i + ' Duration']);
			_.customPops[i].animations = String(params['Custom ' + i + ' Animations']).split(/\s*,\s*/);
			_.customPops[i].flashColor = [parseInt(flash[0]), parseInt(flash[1]), parseInt(flash[2]), parseInt(flash[3])];
			_.customPops[i].flashDuration = parseInt(flash[4]);
		}
	}
	//-----------------------------------------------------------------------------
	// Game_Action
	//-----------------------------------------------------------------------------
	if (Imported.YEP_BattleEngineCore) {
		Game_Battler.prototype.startDamagePopup = function () {
			var result = this.result();
			this._damagePopup.push(result);
		};
	}
	//-----------------------------------------------------------------------------
	// Game_Action
	//-----------------------------------------------------------------------------
	var _Game_Action_applyGuard = Game_Action.prototype.applyGuard;
	Game_Action.prototype.applyGuard = function (damage, target) {
		var newDamage = _Game_Action_applyGuard.apply(this, arguments);
		if (newDamage != damage) {
			target.result().guarded = true;
		}
		return newDamage;
	};
	var _Game_Action_calcElementRate = Game_Action.prototype.calcElementRate;
	Game_Action.prototype.calcElementRate = function (target) {
		var rate = _Game_Action_calcElementRate.apply(this, arguments);
		target.result().elementRate = rate;
		return rate;
	};
	//-----------------------------------------------------------------------------
	// Game_ActionResult
	//-----------------------------------------------------------------------------
	var _Game_ActionResult_clear = Game_ActionResult.prototype.clear;
	Game_ActionResult.prototype.clear = function () {
		_Game_ActionResult_clear.apply(this, arguments);
		this.guarded = false;
		this.elementRate = 1;
	};
	//-----------------------------------------------------------------------------
	// Sprite_Battler
	//-----------------------------------------------------------------------------
	if (!Imported.YEP_BattleEngineCore) {
		var _Sprite_Battler_setBattler = Sprite_Battler.prototype.setBattler;
		Sprite_Battler.prototype.setBattler = function (battler) {
			_Sprite_Battler_setBattler.call(this, battler);
			if (battler) battler._dpu_sprite = this;
		};
	}
	//-----------------------------------------------------------------------------
	// Sprite_Damage
	//-----------------------------------------------------------------------------
	Sprite_Damage.prototype.setup = function (target) {
		this._target = target;
		this._sprite = (Imported.YEP_BattleEngineCore) ? target.battler() : target._dpu_sprite;
		this._xOffsetSpecial = 0;
		this._yOffsetSpecial = 0;
		this._xOffsetDigits = 0;
		this._yOffsetDigits = 0;
		if (Imported.YEP_BattleEngineCore) {
			this._result = target.shiftDamagePopup();
		} else {
			this._result = target.result();
		}
		var result = this._result;
		if (!eval(_.condition)) return;
		var damages = [result.hpDamage, result.mpDamage, result.tpDamage];
		for (var i = 0; i <= 5; i++) {
			if (eval(_.popups[i].condition)) {
				this.createDigits(i, damages[Math.floor(i / 2)]);
				this.incrementDigits(_.xShift, _.yShift);
			}
		}
		for (var i = 6; i <= 9; i++) {
			if (eval(_.popups[i].condition)) {
				this.createSpecial(i);
				this.incrementSpecial(_.xShift, _.yShift);
			}
		}
		for (var i = 1; i < _.customPops.length; i++) {
			if (_.customPops[i] && eval(_.customPops[i].condition)) {
				this.createSpecialCustom(i);
				this.incrementSpecial(_.xShift, _.yShift);
			}
		}
	};
	Sprite_Damage.prototype.incrementSpecial = function (x, y) {
		this._xOffsetSpecial += x;
		this._yOffsetSpecial += y;
	};
	Sprite_Damage.prototype.incrementDigits = function (x, y) {
		this._xOffsetDigits += x;
		this._yOffsetDigits += y;
	};
	Sprite_Damage.prototype.digitWidthFromBitmap = function (bitmap) {
		return bitmap.measureTextWidth('0');
	};
	Sprite_Damage.prototype.digitHeightFromBitmap = function (bitmap) {
		return bitmap.fontSize;
	};
	Sprite_Damage.prototype.createSpecial = function (index) {
		var info = _.popups[index];
		var bitmap = this.createChildBitmap(info, info.text.length);
		var sprite = this.createChildSprite(bitmap);
		sprite.bitmap.drawText(info.text, 2, 0, bitmap.width, bitmap.height, 'left');
		sprite.dy = 0;
		sprite.x = eval(info.x);
		sprite.y = eval(info.y);
		sprite.xBase = this._xOffsetSpecial;
		sprite.yBase = this._yOffsetSpecial;
		sprite.animations = info.animations.clone();
		sprite.duration = info.duration;
		sprite.oriDuration = sprite.duration;
		sprite.flashColor = info.flashColor.clone();
		sprite.flashDuration = info.flashDuration;
		sprite.oriX = sprite.x;
		sprite.oriY = sprite.y;
	};
	Sprite_Damage.prototype.createSpecialCustom = function (index) {
		var info = _.customPops[index];
		var bitmap = this.createChildBitmap(info, info.text.length);
		var sprite = this.createChildSprite(bitmap);
		sprite.bitmap.drawText(info.text, 2, 0, bitmap.width, bitmap.height, 'left');
		sprite.dy = 0;
		sprite.x = eval(info.x);
		sprite.y = eval(info.y);
		sprite.xBase = this._xOffsetSpecial;
		sprite.yBase = this._yOffsetSpecial;
		sprite.animations = info.animations.clone();
		sprite.duration = info.duration;
		sprite.oriDuration = sprite.duration;
		sprite.flashColor = info.flashColor.clone();
		sprite.flashDuration = info.flashDuration;
		sprite.oriX = sprite.x;
		sprite.oriY = sprite.y;
	};
	Sprite_Damage.prototype.createDigits = function (baseRow, value) {
		var string = Math.abs(value).toString();
		var info = _.popups[baseRow];
		string = info.text.replace(/%1/, string);
		var dummy = this.createChildBitmap(info);
		var w = this.digitWidthFromBitmap(dummy);
		var h = this.digitHeightFromBitmap(dummy);
		for (var i = 0; i < string.length; i++) {
			var bitmap = this.createChildBitmap(info);
			bitmap.resize(bitmap.width + (bitmap.outlineWidth * 2), bitmap.height)
			var sprite = this.createChildSprite(bitmap);
			sprite.bitmap.drawText(string[i], 2, 0, w, h, 'left');
			sprite.xBase = this._xOffsetDigits;
			sprite.yBase = this._yOffsetDigits;
			sprite.x = ((i - (string.length - 1) / 2) * w) + eval(info.x);
			sprite.y = eval(info.y);
			sprite.ry = sprite.y;
			sprite.dy = -i;
			sprite.animations = info.animations.clone();
			sprite.duration = info.duration;
			sprite.oriDuration = sprite.duration;
			sprite.oriX = sprite.x;
			sprite.oriY = sprite.y;
			if (this._result.critical) {
				sprite.flashColor = [255, 0, 0, 160];
				sprite.flashDuration = 60;
			} else if (Imported.YEP_AbsorptionBarrier && this._result._barrierAffected) {
				sprite.flashColor = Yanfly.Param.ABRPop.slice();
				sprite.flashDuration = 180;
			} else {
				sprite.flashColor = info.flashColor.clone();
				sprite.flashDuration = info.flashDuration;
			}
		}
	};
	Sprite_Damage.prototype.createChildSprite = function (bitmap) {
		var sprite = new Sprite();
		sprite.bitmap = bitmap;
		sprite.anchor.x = 0.5;
		sprite.anchor.y = 0.5;
		this.addChild(sprite);
		return sprite;
	};
	Sprite_Damage.prototype.createChildBitmap = function (info, width, height) {
		width = width || 1;
		height = height || 1;
		var bitmap = new Bitmap();
		bitmap.fontFace = _.font;
		bitmap.fontSize = _.size;
		bitmap.textColor = info.color;
		bitmap.outlineColor = info.outline;
		if (Imported.YEP_AbsorptionBarrier && this._result._barrierAffected) {
			bitmap.textColor = "#FFFFFF";
		}
		var w = this.digitWidthFromBitmap(bitmap) * width;
		var h = this.digitHeightFromBitmap(bitmap) * height;
		bitmap.resize(w + 20, h);
		return bitmap;
	};
	Sprite_Damage.prototype.update = function () {
		Sprite.prototype.update.call(this);
		for (var i = 0; i < this.children.length; i++) {
			if (this.children[i].duration > 0) this.updateChild(this.children[i]);
		}
	};
	Sprite_Damage.prototype.updateChild = function (sprite) {
		sprite.duration--;
		this.updateChildOpacity(sprite);
		this.updateChildFlash(sprite);
		if (sprite.animations.indexOf('default') > -1) {
			if (!sprite.xIsAdded) {
				sprite.x += sprite.xBase;
				sprite.ry = -48;
				sprite.xIsAdded = true;
			}
			sprite.dy += 0.5;
			sprite.ry += sprite.dy;
			if (sprite.ry >= sprite.yBase) {
				sprite.ry = sprite.yBase;
				sprite.dy *= -0.6;
			}
			sprite.y = Math.round(sprite.ry) + sprite.oriY;
		}
		if (sprite.animations.indexOf('horizontal') > -1) {
			if (!sprite.yIsAdded) {
				sprite.y += sprite.yBase;
				sprite.ry = -48;
				sprite.yIsAdded = true;
			}
			sprite.dy += 0.5;
			sprite.ry += sprite.dy;
			if (sprite.ry >= sprite.xBase) {
				sprite.ry = sprite.xBase;
				sprite.dy *= -0.6;
			}
			sprite.x = Math.round(sprite.ry) + sprite.oriX;
		}
		if (sprite.animations.indexOf('float') > -1) {
			if (!sprite.xIsAdded) {
				sprite.x += sprite.xBase;
				sprite.xIsAdded = true;
			}
			sprite.yBase--;
			sprite.y = sprite.yBase + sprite.oriY;
		}
		if (sprite.animations.indexOf('fall') > -1) {
			if (!sprite.xIsAdded) {
				sprite.x += sprite.xBase;
				sprite.xIsAdded = true;
			}
			sprite.yBase++;
			sprite.y = sprite.yBase + sprite.oriY;
		}
		if (sprite.animations.indexOf('left') > -1) {
			if (!sprite.yIsAdded) {
				sprite.y += sprite.yBase;
				sprite.yIsAdded = true;
			}
			sprite.xBase--;
			sprite.x = sprite.xBase + sprite.oriX;
		}
		if (sprite.animations.indexOf('right') > -1) {
			if (!sprite.yIsAdded) {
				sprite.y += sprite.yBase;
				sprite.yIsAdded = true;
			}
			sprite.xBase++;
			sprite.x = sprite.xBase + sprite.oriX;
		}
		if (sprite.animations.indexOf('rotation') > -1) {
			if (!sprite.xIsAdded) {
				sprite.x += sprite.xBase;
				sprite.xIsAdded = true;
			}
			if (!sprite.yIsAdded) {
				sprite.y += sprite.yBase;
				sprite.yIsAdded = true;
			}
			if (!sprite.applRotationsAndStuff) {
				sprite.anchor.x = 0.5;
				sprite.anchor.y = 0.5;
				sprite.y -= sprite.height / 2;
				sprite.applRotationsAndStuff = true;
			}
			if (sprite.duration > (sprite.oriDuration / 2)) {
				sprite.rotation = (sprite.duration - (sprite.oriDuration / 2)) * (0.1);
			} else {
				sprite.rotation = 0;
			}
		}
	};
	Sprite_Damage.prototype.updateChildOpacity = function (sprite) {
		if (sprite.duration < 10) {
			sprite.opacity = 255 * sprite.duration / 10;
		}
	};
	Sprite_Damage.prototype.updateChildFlash = function (sprite) {
		if (sprite.flashDuration > 0) {
			var d = sprite.flashDuration--;
			sprite.flashColor[3] *= (d - 1) / d;
			sprite.setBlendColor(sprite.flashColor);
		}
	};
	Sprite_Damage.prototype.isPlaying = function () {
		for (var i = 0; i < this.children.length; i++) {
			if (this.children[i].duration > 0) {
				return true;
			}
		}
		return false;
	};
})(SRD.BattlePopupCustomizer);