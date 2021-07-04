# gasGetRequiredTime
GAS script that can get the required time from a certain place to a place listed in spread sheet. 
スプレッドシートにリストされた各目的地までの所要時間を計算する GAS スクリプトです。

This script requires a spread sheet that has a list of a goal address. 
目的地の住所一覧がスプレッドシートに書き込まれている状況を想定しています。

## How to use

1. create a spread sheet
2. tools > script editor
3. copy and paste the code
4. fill some required filed (shown below)
5. run the script
6. result is written in the same sheet
------
1. スプレッドシートを作成します
2. ツール > スクリプトエディタ を起動
3. コードをコピペします
4. 必要な部分を埋めます（後述）
5. スクリプトを実行します
6. 結果がシートに記録されます

### Required filed
| variable name | what is this | example |
| --- | --- | --- |
| origin | depature point / 出発地 | 東京都中央区銀座３丁目５−１２ |
| destRow | the row number of the spread sheet / スプレッドシートで住所一覧が記載されている行番号 | 2 |
| destCol | the column number of the spread sheet / スプレッドシートで住所一覧が記載さ入れている列番号 | 2 |
