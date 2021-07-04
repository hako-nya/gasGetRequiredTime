/**
 * 目的地までの移動時間を取得する
 * cite: https://qiita.com/luc_yhi/items/7fe167f6ab49298ab9dd
 * @param {string} _dest 目的地
 * @returns [string, string] 移動時間, 移動手段
 */
function calcPath(_dest) {
  /** 出発地 */
  const origin = "" // ここに出発地を入力

  /** 徒歩の時間 */
  var walkingDuration
  var walkingDirections = Maps.newDirectionFinder()
    .setOrigin(origin)
    .setDestination(_dest)
    .setMode(Maps.DirectionFinder.Mode.WALKING)
    .getDirections()

  if (null != walkingDirections.routes[0]) {
    walkingDuration = walkingDirections.routes[0].legs[0].duration
  }

  /** 公共交通機関の時間 */
  var transitDuration
  var transitDirections = Maps.newDirectionFinder()
    .setOrigin(origin)
    .setDestination(_dest)
    .setMode(Maps.DirectionFinder.Mode.TRANSIT)
    .getDirections()

  if (null != transitDirections.routes[0]) {
    transitDuration = transitDirections.routes[0].legs[0].duration
  }

  if (null == walkingDuration && null == transitDuration) {
    // 経路が見つからなかった
    return ["経路なし", "経路なし"]
  } else if (null == walkingDuration) {
    // 徒歩経路だけ見つからなかった
    return [transitDuration.text, "電車"]
  } else if (null == transitDuration) {
    // 電車の経路だけ見つからなかった
    return [walkingDuration.text, "徒歩"]
  } else {  // どちらの経路も検索できたので比較する
    if (transitDuration.value < walkingDuration.value) {
      return [transitDuration.text, "電車"]
    } else {
      return [walkingDuration.text, "徒歩"]
    }
  }
}

function myFunction() {
  /** シート名 */
  var sheetName = '病院一覧'

  /** スプレッドシートのオブジェクト */
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);

  /** 住所一覧が記載されている行のはじめ */
  var destRow = 2
  /** 住所一覧が記載されている列 */
  var destCol = 2
  /** 目的地一覧 */
  var destList = sheet.getRange(destRow, destCol, sheet.getLastRow() - 1).getValues()

  /** 時間のリスト */
  var list = []

  // 目的地ごとに時間を取得するループ
  for (var i in destList) {
    list.push(calcPath(destList[i]))
  }

  // スプレッドシートへと書き込む
  range = sheet.getRange(2, 4, list.length, list[0].length)
  range.setValues(list)
}