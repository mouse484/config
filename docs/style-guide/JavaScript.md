# mouse_484 JavaScript Style Guide

個人的な JavaScript でのルール。

- コードの最大横幅
  - 80 文字まで
  - <https://prettier.io/docs/en/options.html#print-width>
- インデント
  - スペースを使用
  - 幅
- セミコロン (`;`)
  - 全ての文の最後につける
- クオート (`" '`)
  - シングルクオート (`''`)
- プロパティは必要な場合のみクオートで囲む
  - コンマ (`,`)
- ES5 で有効な場合につける
  - オブジェクト、配列などの最後にはつけない
  - <https://prettier.io/docs/en/options.html#trailing-commas>
- かっこ (`{},()`)

  - かっこと文字の間に空白を開ける

    ```js
    {
      foo: bar;
    } // ture
    {
      foo: bar;
    } // false
    ```

- アロー関数 (`()=>x`)
  - 関数のパラメーターを常にカッコ囲む
  - <https://prettier.io/docs/en/options.html#bracket-line>
- 行末
  - LF
